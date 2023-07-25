import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://127.0.0.1:3333/',
  headers: {
    Authorization:
      'Bearer MQ.6mT41T7x2LiC_g-n3CkQxXfjFmcEb1V2JWzKkqdKPsjYOXgxjlJV3eSKMkEA',
  },
});
