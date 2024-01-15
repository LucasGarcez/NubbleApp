import {
  PermissionName,
  PermissionService,
  PermissionStatus,
} from './permissionTypes';

async function check(name: PermissionName): Promise<PermissionStatus> {}

async function request(name: PermissionName): Promise<PermissionStatus> {}

export const permissionService: PermissionService = {request, check};
