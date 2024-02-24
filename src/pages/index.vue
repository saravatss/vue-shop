<template>
    <v-container>
        <h2>Каталог смартфонов</h2>

        <v-catalog-card 
            v-for="product in smartphones"
            :id="product.id"
            :image="product.image"
            :title="product.title"
            :category="product.categoryId"
        />

        <h2>Каталог laptops</h2>

        <v-catalog-card 
            v-for="product in smartphones"
            :id="product.id"
            :image="product.image"
            :title="product.title"
            :category="product.categoryId"
        />
    </v-container>
</template>

<script setup>
    import { useCatalogCategory } from '@/composables/useCatalogCategory';
    import VContainer from '@/components/VContainer.vue';
    import VCatalogCard from '@/components/VCatalogCard.vue';

    const { 
        products: smartphones, 
        getProductsCategory: getProductsCategorySmartphones
    } = useCatalogCategory();

    const { 
        products: laptops, 
        getProductsCategory: getProductsCategoryLaptops
    } = useCatalogCategory();

    getProductsCategorySmartphones(1);
    getProductsCategoryLaptops(2);
</script>