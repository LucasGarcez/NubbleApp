import {apiAdapter} from '@api';
import {Page} from '@types';

import {User} from '../User';

import {followAdapter} from './followAdapter';
import {followApi} from './followApi';
import {FollowUser} from './followTypes';

async function geMyFollowingList(page: number): Promise<Page<FollowUser>> {
  const followingUserPageAPI = await followApi.geMyFollowingList({
    page,
    per_page: 10,
  });

  return apiAdapter.toPageModel(
    followingUserPageAPI,
    followAdapter.fromFollowingToUser,
  );
}

async function getMyFollowersList(page: number): Promise<Page<FollowUser>> {
  const followPageAPI = await followApi.getMyFollowersList({
    page,
    per_page: 10,
  });

  return apiAdapter.toPageModel(
    followPageAPI,
    followAdapter.fromFollowerToUser,
  );
}

async function isFollowing(userId: string): Promise<{isFollowing: boolean}> {
  return followApi.isFollowing(userId);
}

async function followUser(userId: number): Promise<User> {
  const data = await followApi.followUser(userId);
  return followAdapter.fromFollowingToUser(data);
}

async function removeFollow(followId: number): Promise<void> {
  await followApi.removeFollow(followId);
}

export const followService = {
  geMyFollowingList,
  getMyFollowersList,
  isFollowing,
  followUser,
  removeFollow,
};
