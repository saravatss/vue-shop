<template>
    <v-container>
        <div v-if="user">
            <div>Логин: {{ user.username }}</div>
            <div>Имя: {{ user.firstName }}</div>
            <div>Фамилия: {{ user.lastName }}</div>
            <div>Email: {{ user.email }}</div>
            <div>Пол: {{ user.gender }}</div>
        </div>

        <hr>

        Личные данные<br>

        История заказов<br>

        Избранные <br>

        Доставки<br>

        Способы оплаты<br>
    </v-container>
</template>

<script setup>
    import { useAuth } from '@/composables'
    import VContainer from '@/components/VContainer.vue';

    const { user } = useAuth();
</script>