import {postApi} from './postApi';
import {Post} from './postTypes';

async function getList(page: number): Promise<Post[]> {
  await new Promise(resolve => setTimeout(() => resolve(''), 1000));
  const postList = await postApi.getList({page, per_page: 10});
  return postList;
}

export const postService = {
  getList,
};
