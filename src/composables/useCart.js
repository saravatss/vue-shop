import { ref } from 'vue';
import { CartApiService } from '@/services';

export function useCart () {
    const cart = ref({});

    function getCart () {
        CartApiService.getCart()
            .then(data => {
                cart.value = data.carts[0];
            });
    }

    function onAddToCart (params) {
        CartApiService.addToCart({
            userId: 1,
            products: [
                params
            ]
        }).then(() => {
            alert('Товар добавлен успешно!')
        });
    }

    return {
        cart,
        getCart,
        onAddToCart
    }
}