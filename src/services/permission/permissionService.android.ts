import {PermissionsAndroid, Permission, Platform} from 'react-native';

import {
  PermissionName,
  PermissionService,
  PermissionStatus,
} from './permissionTypes';

async function request(name: PermissionName): Promise<PermissionStatus> {
  console.log('android request');
  const permission = mapName(name);
  if (permission) {
    const result = await PermissionsAndroid.request(permission);
    return result;
  }
  return 'unavailable';
}
async function check(name: PermissionName): Promise<PermissionStatus> {
  console.log('android check');
  const permission = mapName(name);

  if (permission) {
    const isGranted = await PermissionsAndroid.check(permission);
    if (isGranted) {
      return 'granted';
    }
    return 'denied';
  }
  return 'unavailable';
}

function mapName(name: PermissionName): Permission | null {
  if (name === 'photoLibrary') {
    if (Platform.Version >= 33) {
      return 'android.permission.READ_MEDIA_IMAGES';
    } else {
      return 'android.permission.READ_EXTERNAL_STORAGE';
    }
  } else if (name === 'camera') {
    return 'android.permission.CAMERA';
  }

  return null;
}

// TODO: testar os 3 casos de uso: allow, blocked, and limited
export const permissionService: PermissionService = {
  request,
  check,
};
