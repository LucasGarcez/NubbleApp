// src/mocks/server.js

import {BASE_URL, PageAPI} from '@api';
import {PostCommentAPI} from '@domain';
import {rest} from 'msw';
import {setupServer} from 'msw/node';

import {mockedPostCommentResponse} from './mocks';

// TODO: double check this in-memory implementation
let inMemoryResponse: PageAPI<PostCommentAPI> = {
  ...mockedPostCommentResponse,
};

export function resetResponses() {
  inMemoryResponse = {...mockedPostCommentResponse};
}

const postCommentHandlers = [
  // Handles a POST /login request
  rest.get(`${BASE_URL}user/post_comment`, (req, resp, ctx) => {
    return resp(ctx.status(200), ctx.json(inMemoryResponse));
  }),

  rest.post(`${BASE_URL}user/post_comment`, async (req, resp, ctx) => {
    const req2 = await req.json();
    const newPost: PostCommentAPI = {
      ...inMemoryResponse.data[0],
      id: 999,
      post_id: req2.post_id,
      message: req2.message,
    };

    inMemoryResponse.meta = {
      ...inMemoryResponse.meta,
      total: inMemoryResponse.meta.total + 1,
      per_page: inMemoryResponse.meta.per_page + 1,
    };

    inMemoryResponse.data = [newPost, ...inMemoryResponse.data];

    return resp(ctx.status(200), ctx.json(newPost));
  }),

  rest.delete(
    `${BASE_URL}user/post_comment/:postCommentId`,
    async (req, resp, ctx) => {
      const postCommentId = req.params.postCommentId;

      inMemoryResponse.data = inMemoryResponse.data.filter(
        item => item.id.toString() !== postCommentId,
      );

      return resp(ctx.status(200), ctx.json({message: 'removed'}));
    },
  ),
];

export const server = setupServer(...postCommentHandlers);
