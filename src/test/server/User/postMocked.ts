import {PageAPI} from '@api';
import {PostAPI} from '@domain';

export const mockedPostResponse: PageAPI<PostAPI> = {
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
  data: [
    {
      id: 2,
      text: 'Vivendo no paraíso!',
      user_id: 2,
      image_url:
        'https://nubble-development.s3.sa-east-1.amazonaws.com/backend-integration/post2.jpg',
      is_fixed: false,
      is_activated: true,
      created_at: '2024-07-10T20:00:41.252+00:00',
      updated_at: '2024-07-10T20:40:41.258+00:00',
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
        meta: {following_count: '0', followers_count: '1'},
      },
      reactions: [{emoji_type: 'like', post_id: 2}],
      status: 'published',
      meta: {like_count: '7', favorite_count: '3', comments_count: '3'},
    },
    {
      id: 10,
      text: 'Time to fly!',
      user_id: 2,
      image_url:
        'https://nubble-development.s3.sa-east-1.amazonaws.com/backend-integration/post10.jpg',
      is_fixed: false,
      is_activated: true,
      created_at: '2024-07-10T05:40:41.254+00:00',
      updated_at: '2024-07-10T20:40:41.265+00:00',
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
        meta: {following_count: '0', followers_count: '1'},
      },
      reactions: [{emoji_type: 'favorite', post_id: 10}],
      status: 'published',
      meta: {like_count: '3', favorite_count: '4', comments_count: '3'},
    },
  ],
};
