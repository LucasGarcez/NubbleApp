import {User, userAdapter} from '../User';

import {FollowingUserAPI} from './followTypes';
import {FollowerUserAPI} from './followTypes';

function fromFollowingToUser(followingUser: FollowingUserAPI): User {
  return userAdapter.toUser(followingUser.followed);
}

function fromFollowerToUser(followerUser: FollowerUserAPI): User {
  return userAdapter.toUser(followerUser.follower);
}

export const followAdapter = {fromFollowingToUser, fromFollowerToUser};
