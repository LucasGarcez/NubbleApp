import {postListMock} from './postListMock';
import {Post} from './types';

async function getList(): Promise<Post[]> {
  // simulate network delay
  await new Promise(resolve => setTimeout(() => resolve(''), 200));
  return postListMock;
}

export const postApi = {
  getList,
};
