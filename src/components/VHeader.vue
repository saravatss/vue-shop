<template>
    <header class="v-header">
        <v-container>
            <div class="v-header__inner">
                <v-logo/>

                <v-menu/>

                <div>
                    <input type="text" v-model="search">

                    <button @click="onSearch">@</button>
                </div>

                <div>
                    <router-link 
                        v-if="isAuth"
                        to="/profile" 
                        class="v-menu__item"
                    >
                        <template v-if="user">
                            <img :src="user.image" width="40px" height="40px">

                            {{ user.firstName }}
                        </template>
                    </router-link>

                    <router-link 
                        v-else
                        to="/auth/sign-in" 
                        class="v-menu__item"
                    >
                        Вход
                    </router-link>
                </div>
            </div>
        </v-container>
    </header>
</template>

<script setup>
    import { ref } from 'vue';
    import { useRouter } from 'vue-router';
    import { useAuth } from '@/composables';
    import VLogo from '@/components/VLogo.vue';
    import VMenu from '@/components/VMenu.vue';
    import VContainer from '@/components/VContainer.vue';

    const search = ref();

    const router = useRouter();
    const { isAuth, user } = useAuth();

    function onSearch () {
        router.push({
            path: '/search',
            query: {
                q: search.value
            }
        });
    }
</script>

<style>
    .v-header {
        padding: 10px 0;
        border-bottom: 1px solid;
    }

    .v-header__inner {
        display: flex;
        flex-flow: row wrap;
        align-items: center;
        justify-content: space-between;
        gap: 0 50px;
    }
</style>