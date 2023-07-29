import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://127.0.0.1:3333/',
  headers: {
    Authorization:
      'Bearer MQ.X45SQUdobneJbD2lifVOXpWqXGbCHEPip5qGDnYdV4eX5mh6aBmxLuQkKHJ2',
  },
});
