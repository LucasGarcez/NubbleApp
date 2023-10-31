import {setupServer} from 'msw/node';

import {postCommentHandlers} from './PostComment/postCommentHandlers';

export const server = setupServer(...postCommentHandlers);
