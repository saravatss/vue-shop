<template>
    <article class="v-catalog-card">
        <router-link :to="`/catalog/${category}/${id}`">
            <img :src="image" class="v-catalog-card__image">
        </router-link>

        <router-link :to="`/catalog/${category}/${id}`">
            {{ title }}
        </router-link>

        <br>

        <div>
            {{ price }} р.
        </div>

        <br>

        <v-input-number v-model="count"/>

        <br>

        <v-button
            theme="primary"
            size="large"
            wide
            @click="onAddToCart"
        >
            Добавить в корзину
        </v-button>
    </article>
</template>

<script setup>
    import { ref } from 'vue';
    import VButton from '@/components/UI/VButton.vue';
    import VInputNumber from '@/components/UI/VInputNumber.vue';

    const props = defineProps({
        category: {
            type: [String, Number]
        },
        id: {
            type: Number
        },
        price: {
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
            title: props.title,
            image: props.image,
            price: props.price,
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