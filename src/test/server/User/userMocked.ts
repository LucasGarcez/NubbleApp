import {PageAPI} from '@api';
import {UserAPI} from '@domain';

const user1: UserAPI = {
  id: 4,
  first_name: 'Marcelo',
  last_name: 'Tavares',
  username: 'celotavares',
  email: 'celotavares@coffstack.com',

  profile_url:
    'https://nubble-development.s3.sa-east-1.amazonaws.com/backend-integration/6-marcelo.png',
  is_online: false,

  full_name: 'Marcelo Tavares',
};

const user2: UserAPI = {
  id: 1,
  first_name: 'Maria',
  last_name: 'Julia',
  username: 'mariajulia',
  email: 'mariajulia@coffstack.com',
  profile_url:
    'https://nubble-development.s3.sa-east-1.amazonaws.com/backend-integration/1-maria.png',
  is_online: false,
  full_name: 'Maria Julia',
};

const userList: UserAPI[] = [user1, user2];

const mockedUserResponse: PageAPI<UserAPI> = {
  meta: {
    total: 2,
    per_page: 10,
    current_page: 1,
    last_page: 1,
    first_page: 1,
    first_page_url: '/?page=1',
    last_page_url: '/?page=1',
    next_page_url: null,
    previous_page_url: null,
  },
  data: userList,
};

export const userMocked = {mockedUserResponse, userList, user1, user2};
