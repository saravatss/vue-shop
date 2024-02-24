import { api } from '@/utils';

export class CatalogApiService {
    static getCategories () {
        return api.get('/catalog');
    }

    static getCategory (id) {
        return api.get(`/catalog/${id}`);
    }

    static getProduct (id) {
        return api.get(`/products/${id}`);
    }
}