import {api, PageAPI, PageParams} from '@api';

import {
  PostReactionAPI,
  PostReactionBaseAPI,
  PostReactionType,
} from './postReactionsType';

export const POST_REACTION_PATH = 'user/reactions';

type MyReactionsParam = PageParams & {
  post_id?: number;
  reaction_type?: PostReactionType;
};
async function getMyReactions(
  myReactionsParam?: MyReactionsParam,
): Promise<PageAPI<PostReactionAPI>> {
  const response = await api.get<PageAPI<PostReactionAPI>>(
    `${POST_REACTION_PATH}/my-reactions`,
    {
      params: {
        ...myReactionsParam,
      },
    },
  );
  return response.data;
}

async function createOrUpdateReaction(
  post_id: number,
  reaction_type: PostReactionType,
): Promise<PostReactionBaseAPI> {
  const path = `${POST_REACTION_PATH}/${post_id}/${reaction_type}`;
  const response = await api.post<PostReactionBaseAPI>(path);
  return response.data;
}

export const postReactionApi = {
  getMyReactions,
  createOrUpdateReaction,
};
