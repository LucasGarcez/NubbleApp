import {api, PageAPI} from '@api';

import {UpdateUserParams, UserAPI} from './userTypes';

export const USER_PATH = 'users';

async function getById(userId: string): Promise<UserAPI> {
  const response = await api.get<UserAPI>(`${USER_PATH}/${userId}`);
  return response.data;
}

async function getList(search: string): Promise<PageAPI<UserAPI>> {
  const response = await api.get<PageAPI<UserAPI>>(`${USER_PATH}`, {
    params: {search},
  });
  return response.data;
}

//TODO: move it to Follow domain when it is ready
async function isFollowing(userId: string): Promise<{isFollowing: boolean}> {
  const response = await api.get<{isFollowing: boolean}>(
    `user/follow/is-following/${userId}`,
  );
  return response.data;
}

async function updateUser(params: UpdateUserParams): Promise<UserAPI> {
  const response = await api.put<UserAPI>(`${USER_PATH}`, params);
  return response.data;
}

async function addNotificationToken(token: string): Promise<string> {
  const response = await api.post<string>(`${USER_PATH}/notification-token`, {
    token,
  });
  return response.data;
}
async function deleteNotificationToken(): Promise<string> {
  const response = await api.delete<string>(`${USER_PATH}/notification-token`);
  return response.data;
}

export const userApi = {
  getById,
  getList,
  isFollowing,
  updateUser,
  addNotificationToken,
  deleteNotificationToken,
};
