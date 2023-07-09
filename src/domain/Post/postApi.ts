import {postAdapter} from './postAdapter';
import {Post, PostAPI} from './postTypes';

async function getList(): Promise<Post[]> {
  let response = await fetch('http://localhost:3333/user/post', {
    method: 'GET',
    headers: {
      Authorization:
        'Bearer MQ.OLuBmMvIHwmgZwtYVkpGvXGRQk3OBmJ2Xo5ry-GN6ujm4Hqp7sYFLSejerW-',
    },
  });

  let jsonResponse: {
    data: PostAPI[];
    meta: any;
  } = await response.json();
  const postList = jsonResponse.data.map(postAdapter.toPost);

  return postList;
}

export const postApi = {
  getList,
};
