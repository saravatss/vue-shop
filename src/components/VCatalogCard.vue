<template>
    <article class="v-catalog-card">
        <router-link :to="`/catalog/${category}/${id}`">
            <img :src="image" class="v-catalog-card__image">
        </router-link>

        <router-link :to="`/catalog/${category}/${id}`">
            {{ title }}
        </router-link>

        <br>

        <input type="number" v-model="count">

        <br>

        <button @click="onAddToCart">
            Добавить в корзину
        </button>
    </article>
</template>

<script setup>
    import { ref } from 'vue';

    const props = defineProps({
        category: {
            type: [String, Number]
        },
        id: {
            type: Number
        },
        title: {
            type: String
        },
        image: {
            type: String
        }
    });

    const emit = defineEmits([
        'addToCart'
    ]);

    const count = ref(1);

    function onAddToCart () {
        emit('addToCart', {
            id: props.id,
            quantity: count.value
        });
    }
</script>

<style>
    .v-catalog-card {
        border: 1px solid;
    }

    .v-catalog-card__image {
        display: block;
        width: 100%;
        height: 200px;

        object-fit: cover;
    }
</style>