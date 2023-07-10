import {api, PaginationApi, PaginationParamsApi} from '@api';

import {PostAPI} from './postTypes';

async function getList(
  params?: PaginationParamsApi,
): Promise<PaginationApi<PostAPI>> {
  const response = await api.get<PaginationApi<PostAPI>>('user/post', {params});

  return response.data;
}

export const postApi = {
  getList,
};
