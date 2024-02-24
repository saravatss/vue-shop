<template>
    <v-container>
        <router-link 
            v-for="category in categories"
            :to="`/catalog/${category.id}`"
        >
            {{ category.title }}
        </router-link>
    </v-container>
</template>

<script setup>
    import VContainer from '@/components/VContainer.vue';
    import { useCatalog } from '@/composables';

    const { categories, getCatalog } = useCatalog();

    getCatalog();
</script>