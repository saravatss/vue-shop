<template>
    <v-container>
        <v-row>
            <v-col 
                v-for="product in products"
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
                    @add-to-cart="onAddToCart"
                />
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>
    import { useRoute } from "vue-router";
    import { useCart } from '@/composables/useCart';
    import { useCatalogCategory } from '@/composables/useCatalogCategory';
    import VContainer from '@/components/VContainer.vue';
    import VRow from '@/components/UI/VRow.vue';
    import VCol from '@/components/UI/VCol.vue';
    import VCatalogCard from '@/components/VCatalogCard.vue';

    const route = useRoute();

    const { products, getProductsCategory } = useCatalogCategory();
    const { onAddToCart } = useCart();

    getProductsCategory(route.params.category);
</script>