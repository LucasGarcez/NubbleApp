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

// https://www.typescriptlang.org/docs/handbook/utility-types.html#excludeuniontype-excludedmembers
const mapName: Record<
  Exclude<PermissionName, 'notification'>,
  RnpPermission
> = {
  photoLibrary: RNP_PERMISSIONS.IOS.PHOTO_LIBRARY,
  camera: RNP_PERMISSIONS.IOS.CAMERA,
};

const mapStatus: Record<RnpPermissionStatus, PermissionStatus> = {
  blocked: 'never_ask_again',
  denied: 'denied',
  granted: 'granted',
  limited: 'granted',
  unavailable: 'unavailable',
};

const mapAuthToStatus: Record<
  FirebaseMessagingTypes.AuthorizationStatus,
  PermissionStatus
> = {
  [messaging.AuthorizationStatus.NOT_DETERMINED]: 'not_determined',
  [messaging.AuthorizationStatus.DENIED]: 'denied',
  [messaging.AuthorizationStatus.AUTHORIZED]: 'granted',
  [messaging.AuthorizationStatus.PROVISIONAL]: 'granted',
  [messaging.AuthorizationStatus.EPHEMERAL]: 'granted',
};

async function check(name: PermissionName): Promise<PermissionStatus> {
  if (name === 'notification') {
    return requestNotification();
  }
  const status = await rnpCheck(mapName[name]);
  return mapStatus[status];
}

async function request(name: PermissionName): Promise<PermissionStatus> {
  if (name === 'notification') {
    return checkNotification();
  }
  const status = await rnpRequest(mapName[name]);
  return mapStatus[status];
}

async function requestNotification(): Promise<PermissionStatus> {
  const authStatus = await messaging().requestPermission();
  return mapAuthToStatus[authStatus];
}

async function checkNotification(): Promise<PermissionStatus> {
  const authStatus = await messaging().hasPermission();
  return mapAuthToStatus[authStatus];
}

export const permissionService: PermissionService = {request, check};
