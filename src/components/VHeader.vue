<template>
    <header class="v-header">
        <v-logo/>

        <v-menu/>
    </header>
</template>

<script setup>
    import VLogo from '/Vlogo.vue';
    import VMenu from '/VMenu.vue';
</script>

<style>
    .v-header {
        display: flex;
        flex-flow: row wrap;
        align-items: center;
        border: 1px solid;
        padding: 10px 0px;
    }
</style>