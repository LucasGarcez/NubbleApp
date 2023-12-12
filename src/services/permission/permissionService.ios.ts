import {
  request as rnpRequest,
  check as rnpCheck,
  PermissionStatus as RnpPermissionStatus,
  PERMISSIONS as RNP_PERMISSION,
  Permission as RnpPermission,
} from 'react-native-permissions';

import {
  PermissionName,
  PermissionService,
  PermissionStatus,
} from './permissionTypes';

const mapStatus: Record<RnpPermissionStatus, PermissionStatus> = {
  blocked: 'never_ask_again',
  denied: 'denied',
  granted: 'granted',
  limited: 'granted',
  unavailable: 'unavailable',
};

const mapName: Record<PermissionName, RnpPermission> = {
  photoLibrary: RNP_PERMISSION.IOS.PHOTO_LIBRARY,
  camera: RNP_PERMISSION.IOS.CAMERA,
};

async function request(name: PermissionName): Promise<PermissionStatus> {
  const result = await rnpRequest(mapName[name]);
  return mapStatus[result];
}
async function check(name: PermissionName): Promise<PermissionStatus> {
  const result = await rnpCheck(mapName[name]);
  return mapStatus[result];
}

// TODO: testar os 3 casos de uso: allow, blocked, and limited
export const permissionService: PermissionService = {
  request,
  check,
};
