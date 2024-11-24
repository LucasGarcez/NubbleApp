import {User, UserAPI} from '../User';

export interface FollowingUserAPI {
  id: number;
  followed_user_id: number;
  followed: UserAPI;
}

export interface FollowingUser extends User {
  followId: number;
  //  followedUserId: number;
}

export interface FollowerUserAPI {
  id: number;
  follower_user_id: number;
  follower: UserAPI;
}
