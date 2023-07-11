import {PageAPI} from '@api';

import {PostAPI} from './postTypes';

async function getList(): Promise<PageAPI<PostAPI>> {
  let response = await fetch('http://localhost:3333/user/post', {
    method: 'GET',
    headers: {
      Authorization:
        'Bearer Mg.R5wy9_TgoQXaBCRrhnJhuOKaDZhvFqFnhSrnI0xYsOMHJfLC6lj45lCaC-7d',
    },
  });

  let data: PageAPI<PostAPI> = await response.json();
  return data;
}

export const postApi = {
  getList,
};
