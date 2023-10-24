import {PageAPI} from '@api';
import {AuthCredentials, PostCommentAPI, userAdapter, UserAPI} from '@domain';

const POST_ID = 1;
const mateusUserAPI: UserAPI = {
  id: 7,
  first_name: 'Mateus',
  last_name: 'de Souza',
  username: 'mateussouza',
  email: 'msouza@coffstack.com',
  profile_url:
    'https://nubble-development.s3.sa-east-1.amazonaws.com/backend-integration/8-mateus.png',
  is_online: false,
  full_name: 'Mateus de Souza',
};

export const mateusAuthCredentials: AuthCredentials = {
  token: 'access-token',
  tokenExpiresAt: '2023-10-07T12:08:50.433+00:00',
  refreshToken: 'refresh-token',
  user: userAdapter.toUser(mateusUserAPI),
};

export const mateusPostCommentAPI: PostCommentAPI = {
  id: 113,
  message: 'Iure bene angelus.',
  user_id: 7,
  post_id: POST_ID,
  created_at: '2023-10-20T10:26:18.000+00:00',
  updated_at: '2023-10-21T07:46:21.828+00:00',
  user: mateusUserAPI,
  meta: {},
};

const postCommentAPI2: PostCommentAPI = {
  id: 117,
  message: 'Cunctatio dolorum vesper consequuntur bellicus tenuis.',
  user_id: 2,
  post_id: POST_ID,
  created_at: '2023-10-20T07:03:29.000+00:00',
  updated_at: '2023-10-21T07:46:21.830+00:00',
  user: {
    id: 2,
    first_name: 'Tamires',
    last_name: 'Silva',
    username: 'tami_silva',
    email: 'tsilva@coffstack.com',
    profile_url:
      'https://nubble-development.s3.sa-east-1.amazonaws.com/backend-integration/4-tamires.png',
    is_online: false,
    full_name: 'Tamires Silva',
  },
  meta: {},
};

const postCommentAPI3: PostCommentAPI = {
  id: 97,
  message: 'Tui eius tertius tergiversatio aestivus vito dolore.',
  user_id: 4,
  post_id: POST_ID,
  created_at: '2023-10-18T22:19:17.000+00:00',
  updated_at: '2023-10-21T07:46:21.821+00:00',
  user: {
    id: 4,
    first_name: 'Marcelo',
    last_name: 'Tavares',
    username: 'celotavares',
    email: 'celotavares@coffstack.com',

    profile_url:
      'https://nubble-development.s3.sa-east-1.amazonaws.com/backend-integration/6-marcelo.png',
    is_online: false,
    full_name: 'Marcelo Tavares',
  },

  meta: {},
};

const postCommentList: PostCommentAPI[] = [
  mateusPostCommentAPI,
  postCommentAPI2,
  postCommentAPI3,
];

export const mockedPostCommentResponse: PageAPI<PostCommentAPI> = {
  meta: {
    total: postCommentList.length,
    per_page: 10,
    current_page: 1,
    last_page: 1,
    first_page: 1,
    first_page_url: '/?page=1',
    last_page_url: '/?page=1',
    next_page_url: null,
    previous_page_url: null,
  },
  data: postCommentList,
};

export const mockedData = {
  mateusAuthCredentials,
  mateusPostCommentAPI,
  POST_ID,
};
