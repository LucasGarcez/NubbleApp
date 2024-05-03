import {apiAdapter} from '@api';
import {Page} from '@types';

import {userAdapter} from './userAdapter';
import {userApi} from './userApi';
import {EditUserParams, User} from './userTypes';

async function getById(id: number): Promise<User> {
  const userAPI = await userApi.getById(id.toString());
  return userAdapter.toUser(userAPI);
}

async function searchUser(search: string): Promise<Page<User>> {
  const userPageAPI = await userApi.getList(search);

  return apiAdapter.toPageModel(userPageAPI, userAdapter.toUser);
}

async function editUser(user: EditUserParams): Promise<User> {
  const userAPI = await userApi.editUser(user);
  return userAdapter.toUser(userAPI);
}

function updateUserHelper(
  current: EditUserParams,
  updated: EditUserParams,
): Partial<EditUserParams> {
  const updatedUser: Partial<EditUserParams> = {};
  if (current.firstName !== updated.firstName) {
    updatedUser.firstName = updated.firstName;
  }
  if (current.lastName !== updated.lastName) {
    updatedUser.lastName = updated.lastName;
  }
  if (current.username !== updated.username) {
    updatedUser.username = updated.username;
  }
  return updatedUser;
}

export const userService = {
  getById,
  searchUser,
  editUser,
  updateUserHelper,
};
