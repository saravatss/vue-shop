<template>
    <v-container v-if="product">
        {{ product.title }}
    </v-container>
</template>

<script setup>
    import { ref } from 'vue';
    import { useRoute } from "vue-router";
    import { CatalogApiService } from '@/services';
    import VContainer from '@/components/VContainer.vue';

    const route = useRoute();

    const product = ref();

    CatalogApiService.getProduct(route.params.id)
        .then(data => {
            product.value = data;
        });
</script>