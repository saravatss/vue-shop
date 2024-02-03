<template>
    {{ route.params.category }}

    <br></br>

    <router-link :to="`/catalog/${route.params.category}/bmwx7`">
        bmwx7
    </router-link>

    <br>

    <router-link :to="`/catalog/${route.params.category}/s63`">
        s63
    </router-link>
</template>

<script setup>
    import { useRoute } from "vue-router";

    const route = useRoute();
</script>