import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://127.0.0.1:3333/',
  headers: {
    Authorization:
      'Bearer MQ.-3l2Bto5dHObhbRSWf0Z4WRmV8Q9-1eDN8GPqKCwTqI5Pz9xIv126fWajrXG',
  },
});
