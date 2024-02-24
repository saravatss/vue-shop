import { ref } from 'vue';
import { CatalogApiService } from '@/services';

export function useCatalogCategory () {
    const products = ref([]);

    function getProductsCategory (id) {
        CatalogApiService.getCategory(id)
            .then(data => {
                products.value = data;
            });
    }

    return {
        products,
        getProductsCategory
    }
}