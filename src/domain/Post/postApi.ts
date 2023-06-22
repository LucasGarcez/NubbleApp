import {postListMock} from './postListMock';
import {Post} from './types';

async function getList(): Promise<Post[]> {
  //TODO: simular um delay na API
  return postListMock;
}

export const postApi = {
  getList,
};
