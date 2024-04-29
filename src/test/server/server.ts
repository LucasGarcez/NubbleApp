import {setupServer} from 'msw/node';

import {postPageHandlers} from './Post/postHandlers';
import {postCommentHandlers} from './PostComment/postCommentHandlers';
import {userHandlers} from './User/userHandlers';

export const server = setupServer(
  ...postCommentHandlers,
  ...userHandlers,
  ...postPageHandlers,
);

export {mockedData as mockedPostComment} from './PostComment/mocks';

export {userMocked} from './User/userMocked';

export {resetInMemoryResponse} from './PostComment/postCommentHandlers';
