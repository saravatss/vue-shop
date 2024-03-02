<template>
    <v-container>
        <h2>Каталог смартфонов</h2>

        <v-row>
            <v-col 
                v-for="product in smartphones"
                span="3"
                md="6"
                sm="12"
            >
                <v-catalog-card 
                    :id="product.id"
                    :image="product.image"
                    :title="product.title"
                    :category="product.categoryId"
                />
            </v-col>
        </v-row>

        <h2>Каталог laptops</h2>

        <v-row>
            <v-col 
                v-for="product in laptops"
                span="3"
                md="6"
                sm="12"
            >
                <v-catalog-card 
                    :id="product.id"
                    :price="product.price"
                    :image="product.image"
                    :title="product.title"
                    :category="product.categoryId"
                />
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>
    import { useCatalogCategory } from '@/composables/useCatalogCategory';
    import VContainer from '@/components/VContainer.vue';
    import VRow from '@/components/UI/VRow.vue';
    import VCol from '@/components/UI/VCol.vue';
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