<template>
    <v-container>
        <div>
            Сумма: {{ cart.total }}р
        </div>

        <hr>

        <div v-for="product in cart.products">
            <img :src="product.thumbnail" alt="">

            <h6>{{ product.title }}</h6>

            <div>{{ product.price }}</div>
        </div>
    </v-container>
</template>

<script setup>
    import { useCart } from '@/composables';
    import VContainer from '@/components/VContainer.vue';

    const { cart, getCart } = useCart();

    getCart();
</script>