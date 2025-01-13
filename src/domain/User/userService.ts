import {apiAdapter} from '@api';
import {Page} from '@types';

import {userAdapter} from './userAdapter';
import {userApi} from './userApi';
import {UpdateUserParams, User, UserDetails} from './userTypes';

async function getById(id: number): Promise<UserDetails> {
  const userAPI = await userApi.getById(id.toString());
  const {isFollowing} = await userApi.isFollowing(id.toString());
  return userAdapter.toUserDetails(userAPI, isFollowing);
}

async function searchUser(search: string): Promise<Page<User>> {
  const userPageAPI = await userApi.getList(search);

  return apiAdapter.toPageModel(userPageAPI, userAdapter.toUser);
}

async function updateUser(
  current: User,
  updatedParams: UpdateUserParams,
): Promise<User> {
  const updatedUser = getUpdatedUser(current, updatedParams);
  const userAPI = await userApi.updateUser(updatedUser);
  return userAdapter.toUser(userAPI);
}

function getUpdatedUser(
  current: User,
  updatedParams: UpdateUserParams,
): UpdateUserParams {
  const user: UpdateUserParams = {};
  if (
    !!updatedParams.firstName &&
    current.firstName !== updatedParams.firstName
  ) {
    user.firstName = updatedParams.firstName;
  }
  if (!!updatedParams.lastName && current.lastName !== updatedParams.lastName) {
    user.lastName = updatedParams.lastName;
  }
  if (!!updatedParams.username && current.username !== updatedParams.username) {
    user.username = updatedParams.username;
  }

  return user;
}
function addNotificationToken(token: string): Promise<string> {
  return userApi.addNotificationToken(token);
}

function deleteNotificationToken(): Promise<string> {
  return userApi.deleteNotificationToken();
}

export const userService = {
  getById,
  searchUser,
  updateUser,
  addNotificationToken,
  deleteNotificationToken,
};
