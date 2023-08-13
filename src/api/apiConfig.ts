import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://127.0.0.1:3333/',
  headers: {
    Authorization:
      'Bearer MQ.DbwIBa1P5b93ZOmpM4Gv341_Em-Rlku8FIeW0SVmVKazjsXTn1WEJR832Xga',
  },
});
