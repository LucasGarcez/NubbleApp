import {api, PageAPI, PageParams} from '@api';
import {ImageForUpload} from '@services';

import {PostAPI} from './postTypes';

async function getList(params?: PageParams): Promise<PageAPI<PostAPI>> {
  const response = await api.get<PageAPI<PostAPI>>('user/post', {
    params,
  });
  return response.data;
}

async function createPost(
  text: string,
  imageCover: ImageForUpload,
): Promise<PostAPI> {
  const form = new FormData();
  form.append('text', text);
  form.append('imageCover', imageCover);

  const response = await api.postForm<PostAPI>('user/post', form);
  return response.data;
}

export const postApi = {
  getList,
  createPost,
};
