<template>
    <v-container>
        <div>
            <div>Логин</div>
            <input type="text" v-model="model.username">
        </div>

        <div>
            <div>Пароль</div>
            <input type="password" v-model="model.password">
        </div>

        <button @click="onLogin(model)">Войти</button>
    </v-container>  
</template>

<script setup>
    import { ref } from 'vue';
    import VContainer from '@/components/VContainer.vue';
    import { useAuth } from '@/composables';
 
    const model = ref({
        username: 'kminchelle',
        password: '0lelplR'
    });

    const { onLogin } = useAuth();
</script>