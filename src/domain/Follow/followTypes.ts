import {User, UserAPI} from '../User';

export interface FollowingUserAPI {
  id: number;
  followed_user_id: number;
  followed: UserAPI;
}

export interface FollowerUserAPI {
  id: number;
  follower_user_id: number;
  follower: UserAPI;
}

export interface FollowUser extends User {
  followId: number;
}
