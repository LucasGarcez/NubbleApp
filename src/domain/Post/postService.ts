import {apiAdapter} from '@api';
import {Pagination} from '@types';

import {postAdapter} from './postAdapter';
import {postApi} from './postApi';
import {Post} from './postTypes';

async function getList(page: number): Promise<Pagination<Post>> {
  await new Promise(resolve => setTimeout(() => resolve(''), 500));
  const {data, meta} = await postApi.getList({page, per_page: 10});
  const postList = data.map(postAdapter.toPost);
  return {
    data: postList,
    meta: apiAdapter.toMetaDataPage(meta),
  };
}

export const postService = {
  getList,
};
