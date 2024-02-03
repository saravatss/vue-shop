<template>
    <nav class="v-header">
        <router-link to="/">
            Главная
        </router-link>

        <router-link to="/catalog">
            Каталог
        </router-link>

        <router-link to="/cart">
            Корзина
        </router-link>
    </nav>
</template>

<style>
    .v-menu {
        display: flex;
        flex-wrap: wrap;
    }

    .v-menu-item {
        color: var( --color-black);
    }
</style>