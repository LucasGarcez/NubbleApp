import {setupServer} from 'msw/node';

import {postCommentHandlers} from './PostComment/postCommentHandlers';
import {userHandlers} from './User/userHandlers';

export const server = setupServer(...postCommentHandlers, ...userHandlers);

export {mockedData as mockedPostComment} from './PostComment/mocks';
export {resetInMemoryResponse} from './PostComment/postCommentHandlers';

export {userMocked} from './User/userMocked';
