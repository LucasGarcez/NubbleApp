import {User, UserAPI} from './userTypes';

function toUser(userAPI: UserAPI): User {
  return {
    id: userAPI.id,
    firstName: userAPI.first_name,
    lastName: userAPI.last_name,
    username: userAPI.username,
    email: userAPI.email,
    profileUrl: userAPI.profile_url,
    isOnline: userAPI.is_online,
    fullName: userAPI.full_name,
    meta: {
      followersCount: userAPI.meta.followers_count,
      followingCount: userAPI.meta.following_count,
    },
  };
}

export const userAdapter = {
  toUser,
};
