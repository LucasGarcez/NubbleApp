import {api, PageAPI, PageParams} from '@api';

import {PostAPI, PostImage} from './postTypes';

async function getList(params?: PageParams): Promise<PageAPI<PostAPI>> {
  const response = await api.get<PageAPI<PostAPI>>('user/post', {
    params,
  });
  return response.data;
}

//TODO: double check return API
async function createPost(
  text: string,
  postImage: PostImage,
): Promise<PostAPI> {
  const newPost = {
    ...postImage,
    type: `image/${postImage.type}`,
  };
  try {
    const form = new FormData();
    form.append('text', text);
    form.append('imageCover', newPost);

    const response = await api.postForm<PostAPI>('user/post', form);

    return response.data;
  } catch (error) {
    throw new Error('erro to upload image');
  }
}

export const postApi = {
  getList,
  createPost,
};
