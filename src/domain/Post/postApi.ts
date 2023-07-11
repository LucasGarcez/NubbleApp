import {postListMock} from './postListMock';
import {Post} from './types';

async function getList(): Promise<Post[]> {
  let response = await fetch('http://localhost:3333/user/post', {
    method: 'GET',
    headers: {
      Authorization:
        'Bearer Mg.R5wy9_TgoQXaBCRrhnJhuOKaDZhvFqFnhSrnI0xYsOMHJfLC6lj45lCaC-7d',
    },
  });

  let data = await response.json();
  console.log('FETCH DATA:', data);

  // await new Promise(resolve => setTimeout(() => resolve(''), 1000));
  return postListMock;
}

export const postApi = {
  getList,
};
