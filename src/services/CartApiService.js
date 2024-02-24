import { api } from '@/utils';

export class CartApiService {
    static getCart () {
        return api.get('/cart');
    }

    static addToCart (params) {
        return api.post('/cart', params)
    }
}