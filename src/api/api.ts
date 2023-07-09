import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:3333/',
  headers: {
    Authorization:
      'Bearer MQ.OLuBmMvIHwmgZwtYVkpGvXGRQk3OBmJ2Xo5ry-GN6ujm4Hqp7sYFLSejerW-',
  },
});
