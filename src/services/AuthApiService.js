import { api } from '@/utils';

export class AuthApiService {
    static login (params) {
        return api.post('/auth/login', params);
    }

    static getUser () {
        return api.get('/auth/me');
    }
}