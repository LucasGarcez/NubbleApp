import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://127.0.0.1:3333/',
  headers: {
    Authorization:
      'Bearer Mg.R5wy9_TgoQXaBCRrhnJhuOKaDZhvFqFnhSrnI0xYsOMHJfLC6lj45lCaC-7d',
  },
});
