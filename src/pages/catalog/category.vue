<template>
    <v-container>
        <v-catalog-card 
            v-for="product in products"
            :id="product.id"
            :image="product.image"
            :title="product.title"
            :category="product.categoryId"
            @add-to-cart="onAddToCart"
        />
    </v-container>
</template>

<script setup>
    import { useRoute } from "vue-router";
    import { useCart } from '@/composables/useCart';
    import { useCatalogCategory } from '@/composables/useCatalogCategory';
    import VContainer from '@/components/VContainer.vue';
    import VCatalogCard from '@/components/VCatalogCard.vue';

    const route = useRoute();

    const { products, getProductsCategory } = useCatalogCategory();
    const { onAddToCart } = useCart();

    getProductsCategory(route.params.category);
</script>