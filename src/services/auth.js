import {api} from '../utils/apiUtils';

export const loginService = loginBody => api.post('auth/local', loginBody);
