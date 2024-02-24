<template>
    <v-container>
        <label>
        <label>
            <div>Логин</div>

            <input type="text" v-model="model.login">
        </label>

            <div>Фамилия</div>

            <input type="text" v-model="model.firstname">
        </label>

        <label>
            <div>Имя</div>

            <input type="text" v-model="model.middlename">
        </label>

        <label>
            <div>Дата рождения</div>

            <input type="date" v-model="model.birthday">
        </label>

        <label>
            <div>Email</div>

            <input type="date" v-model="model.email">
        </label>

        <label>
            <div></div>

            <input type="number" v-model="model.phone">
        </label>

        <label>
            <div>Пароль</div>

            <input type="date" v-model="model.password">
        </label>

        <label>
            <div>Подтвердите пароль</div>

            <input type="password" v-model="model.password">
        </label>
    </v-container>  
</template>

<script setup>
import { ref } from 'vue';
    import VContainer from '@/components/VContainer.vue';

    const model = ref({
        login: 'Test',
        firstname: 'Петров',
        lastname: 'Вася',
        birthday: '2001-01-13',
        email:'hjdfhbjdfbhfdbh@gmail.com',
        phone:'8484848488',
        password: 'vgvg444',
        confirmPasswaord: 'vgvg444'

    })
</script>