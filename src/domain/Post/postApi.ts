import {api, PageAPI, PageParams} from '@api';
import {ImageForUpload} from '@services';

import {PostAPI} from './postTypes';

export const POST_PATH = 'user/post';

async function getList(
  params?: PageParams & {user_id?: number},
): Promise<PageAPI<PostAPI>> {
  const response = await api.get<PageAPI<PostAPI>>(POST_PATH, {
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

  const response = await api.postForm<PostAPI>(POST_PATH, form);
  return response.data;
}

async function getById(postId: string): Promise<PostAPI> {
  const response = await api.get<PostAPI>(`${POST_PATH}/${postId}`);
  return response.data;
}

export const postApi = {
  getList,
  createPost,
  getById,
};
