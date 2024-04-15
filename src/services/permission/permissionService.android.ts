import {Permission, PermissionsAndroid, Platform} from 'react-native';

import {
  PermissionName,
  PermissionService,
  PermissionStatus,
} from './permissionTypes';

async function check(name: PermissionName): Promise<PermissionStatus> {
  const permission = mapNameToPermission(name);
  if (permission) {
    const result = await PermissionsAndroid.check(permission);
    if (result) {
      return 'granted';
    }
    return 'denied';
  }

  return 'unavailable';
}

async function request(name: PermissionName): Promise<PermissionStatus> {
  const permission = mapNameToPermission(name);
  if (permission) {
    const result = await PermissionsAndroid.request(permission);
    return result;
  }
  return 'unavailable';
}

function mapNameToPermission(name: PermissionName): Permission | null {
  /**
   * Version is always a number in Android
   * https://reactnative.dev/docs/platform#version
   */
  const platform = Platform.Version as number;

  switch (name) {
    case 'photoLibrary':
      if (platform >= 33) {
        return 'android.permission.READ_MEDIA_IMAGES';
      } else {
        return 'android.permission.READ_EXTERNAL_STORAGE';
      }
    case 'camera':
      return 'android.permission.CAMERA';

    default:
      return null;
  }
}

export const permissionService: PermissionService = {request, check};
