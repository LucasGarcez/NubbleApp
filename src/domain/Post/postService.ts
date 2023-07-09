import {postApi} from './postApi';
import {Post} from './postTypes';

async function getList(page: number): Promise<Post[]> {
  const postList = await postApi.getList({page, per_page: 10});
  return postList;
}

export const postService = {
  getList,
};
