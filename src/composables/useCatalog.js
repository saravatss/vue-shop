import { ref } from 'vue';
import { CatalogApiService } from '@/services';

export function useCatalog () {
    const categories = ref([]);

    function getCatalog () {
        CatalogApiService.getCategories()
            .then(data => {
                categories.value = data;
            });
    }

    return {
        categories,
        getCatalog
    }
}