import {api} from '../utils/apiUtils';

export const itemsService = () => api.get('item-requests');
export const itemService = id => api.get(`item-requests/${id}`);

export const itemCreationService = postBody =>
  api.post('item-requests', postBody);

export const itemUpdateService = (id, postBody) =>
  api.put(`item-requests/${id}`, postBody);

export const ordersService = query => api.get('orders', query);
export const orderService = id => api.get(`orders/${id}`);

export const uploadService = file => {
  const form = new FormData();
  form.append('files', file);

  return api.post('upload', form);
};
