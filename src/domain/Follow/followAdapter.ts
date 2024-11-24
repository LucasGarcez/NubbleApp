import {User, userAdapter} from '../User';

import {FollowingUser, FollowingUserAPI} from './followTypes';
import {FollowerUserAPI} from './followTypes';

function fromFollowingToUser(followingUser: FollowingUserAPI): FollowingUser {
  return {
    followId: followingUser.id,
    ...userAdapter.toUser(followingUser.followed),
  };
}

function fromFollowerToUser(followerUser: FollowerUserAPI): User {
  return userAdapter.toUser(followerUser.follower);
}

export const followAdapter = {fromFollowingToUser, fromFollowerToUser};
