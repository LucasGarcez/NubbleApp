import {apiAdapter} from '@api';
import {Page} from '@types';

import {userAdapter} from './userAdapter';
import {userApi} from './userApi';
import {User, UserDetails} from './userTypes';

async function getById(id: number): Promise<UserDetails> {
  const userAPI = await userApi.getById(id.toString());
  const {isFollowing} = await userApi.isFollowing(id.toString());
  return userAdapter.toUserDetails(userAPI, isFollowing);
}

async function searchUser(search: string): Promise<Page<User>> {
  const userPageAPI = await userApi.getList(search);

  return apiAdapter.toPageModel(userPageAPI, userAdapter.toUser);
}

export const userService = {
  getById,
  searchUser,
};
