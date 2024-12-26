import messaging, {
  FirebaseMessagingTypes,
} from '@react-native-firebase/messaging';
import {
  request as rnpRequest,
  check as rnpCheck,
  PermissionStatus as RnpPermissionStatus,
  PERMISSIONS as RNP_PERMISSIONS,
  Permission as RnpPermission,
} from 'react-native-permissions';

import {
  PermissionName,
  PermissionService,
  PermissionStatus,
} from './permissionTypes';

const mapName: Record<
  Exclude<PermissionName, 'notification'>,
  RnpPermission
> = {
  photoLibrary: RNP_PERMISSIONS.IOS.PHOTO_LIBRARY,
  camera: RNP_PERMISSIONS.IOS.CAMERA,
};

const mapAuthToStatus: Record<
  FirebaseMessagingTypes.AuthorizationStatus,
  PermissionStatus
> = {
  [messaging.AuthorizationStatus.NOT_DETERMINED]: 'denied',
  [messaging.AuthorizationStatus.DENIED]: 'denied',
  [messaging.AuthorizationStatus.AUTHORIZED]: 'granted',
  [messaging.AuthorizationStatus.PROVISIONAL]: 'granted',
  [messaging.AuthorizationStatus.EPHEMERAL]: 'granted',
};

const mapStatus: Record<RnpPermissionStatus, PermissionStatus> = {
  blocked: 'never_ask_again',
  denied: 'denied',
  granted: 'granted',
  limited: 'granted',
  unavailable: 'unavailable',
};

async function check(name: PermissionName): Promise<PermissionStatus> {
  if (name === 'notification') {
    return checkNotification();
  }
  const status = await rnpCheck(mapName[name]);
  return mapStatus[status];
}

async function request(name: PermissionName): Promise<PermissionStatus> {
  if (name === 'notification') {
    return requestNotification();
  }
  const status = await rnpRequest(mapName[name]);
  return mapStatus[status];
}

async function checkNotification(): Promise<PermissionStatus> {
  const status = await messaging().hasPermission();
  return mapAuthToStatus[status];
}

async function requestNotification(): Promise<PermissionStatus> {
  const status = await messaging().requestPermission();
  return mapAuthToStatus[status];
}

export const permissionService: PermissionService = {request, check};
