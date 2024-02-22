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

const mapName: Record<PermissionName, RnpPermission> = {
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

async function check(name: PermissionName): Promise<PermissionStatus> {
  const status = await rnpCheck(mapName[name]);
  return mapStatus[status];
}

async function request(name: PermissionName): Promise<PermissionStatus> {
  const status = await rnpRequest(mapName[name]);
  return mapStatus[status];
}

export const permissionService: PermissionService = {request, check};
