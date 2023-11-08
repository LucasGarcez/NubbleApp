import {setupServer} from 'msw/node';

import {postCommentHandlers} from './PostComment/postCommentHandlers';

export const server = setupServer(...postCommentHandlers);

export {mockedData as mockedPostComment} from './PostComment/mocks';

export {resetInMemoryResponse} from './PostComment/postCommentHandlers';
