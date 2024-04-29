import {BASE_URL} from '@api';
import {POST_PATH} from '@domain';
import {http, HttpResponse} from 'msw';

import {postPageMocked} from './postPageMocked';

const FULL_URL = `${BASE_URL}${POST_PATH}`;

export const postPageHandlers = [
  http.get(FULL_URL, async () => {
    return HttpResponse.json(postPageMocked, {status: 200});
  }),
];
