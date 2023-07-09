import {api} from '@api';

import {postAdapter} from './postAdapter';
import {Post} from './postTypes';

interface PageParams {
  page: number;
  per_page: number;
}
async function getList(params?: PageParams): Promise<Post[]> {
  const response = await api.get('user/post', {params});

  const postList = response.data.data.map(postAdapter.toPost);

  return postList;
}

export const postApi = {
  getList,
};
