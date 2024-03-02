<template>
    <v-container>
        <div>
            Кол-во товаров: {{ cartTotalCount }}
        </div>

        <div>
            Сумма товаров: {{ cartTotalSum }}р.
        </div>

        <v-cart-card 
            v-for="cartItem in cart"
            :id="cartItem.id"
            :title="cartItem.title"
            :price="cartItem.price"
            :quantity="cartItem.quantity"
            :image="cartItem.image"
            @change-count="onChangeCount"
            @delete="onDelete"
        />

        <router-link to="/ordering">
            Перейти к оформлению
        </router-link>
    </v-container>
</template>

<script setup>
    import { useCart } from '@/composables';
    import VContainer from '@/components/VContainer.vue';
    import VCartCard from '@/components/VCartCard.vue';

    const { cart, cartTotalCount, cartTotalSum, getCart, onChangeCount, onDelete } = useCart();

    getCart();
</script>