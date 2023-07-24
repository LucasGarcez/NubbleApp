import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://127.0.0.1:3333/',
  headers: {
    Authorization:
      'Bearer MQ.-CsG9qlvFxDhyP4gZE6Zo_JEfaOSm86wzlFMPaJiO8x37GYeI8qCGzcXqxHK',
  },
});
