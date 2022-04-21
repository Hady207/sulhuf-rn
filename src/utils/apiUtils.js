/* eslint-disable no-param-reassign */
import {create} from 'apisauce';
import {storageRead} from '@utils/storageUtils';

export const api = create({baseURL: 'https://dev-api.trysedalia.com/'});

api.axiosInstance.interceptors.request.use(
  async config => {
    // Do something before request is sent
    const token = await storageRead('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  error => Promise.reject(error),
);
