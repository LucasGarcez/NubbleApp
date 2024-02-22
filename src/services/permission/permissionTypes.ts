export type PermissionStatus =
  | 'granted'
  | 'denied'
  | 'never_ask_again'
  | 'unavailable';

export type PermissionName = 'photoLibrary' | 'camera';

export type PermissionService = {
  request: (name: PermissionName) => Promise<PermissionStatus>;
  check: (name: PermissionName) => Promise<PermissionStatus>;
};
