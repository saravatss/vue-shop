<template>
    <v-container>
        <div v-if="user">
            <div>Логин: <input type="text" v-model="model.login"></div>
            <div>Имя: <input type="text" v-model="model.firstname"></div>
            <div>Фамилия: <input type="text" v-model="model.lastname"></div>
            <div>Email: <input type="email" v-model="model.email"></div>
            <div>Телефон: <input type="tel" v-model="model.phone"></div>
            <div>День рождения: <input type="date" v-model="model.birthday"></div>
        </div>

        <button @click="onUpdate">Сохранить</button>

        <br><br>

        <button @click="logout">Выход</button>

        <hr>

        Личные данные<br>

        История заказов<br>

        Избранные <br>

        Доставки<br>

        Способы оплаты<br>
    </v-container>
</template>

<script setup>
    import { useAuth, useUserProfile } from '@/composables'
    import VContainer from '@/components/VContainer.vue';

    const { user, logout, updateUser } = useAuth();
    const { model } = useUserProfile();

    function onUpdate () {
        updateUser(user.value.id, model.value);
    }
</script>