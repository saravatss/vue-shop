<template>
    <header class="v-header">
        <v-container>
            <v-row align="center" justify="beetwen" no-gutters>
                <v-col>
                    <v-logo/>
                </v-col>

                <v-col>
                    <v-menu/>
                </v-col>

                <v-col>
                    <input type="text" v-model="search">

                    <button @click="onSearch">@</button>
                </v-col>

                <v-col>
                    <router-link 
                        v-if="isAuth"
                        to="/profile" 
                        class="v-menu__item"
                    >
                        <template v-if="user">
                            {{ user.firstname }}
                        </template>
                    </router-link>

                    <router-link 
                        v-else
                        to="/auth/sign-in" 
                        class="v-menu__item"
                    >
                        Вход
                    </router-link>
                </v-col>
            </v-row>
        </v-container>
    </header>
</template>

<script setup>
    import { ref } from 'vue';
    import { useRouter } from 'vue-router';
    import { useAuth } from '@/composables';
    import VRow from '@/components/UI/VRow.vue';
    import VCol from '@/components/UI/VCol.vue';
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
</style>