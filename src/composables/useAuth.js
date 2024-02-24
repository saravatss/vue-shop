import { ref } from 'vue';
import { AuthApiService } from '@/services';
import { useRouter } from 'vue-router';

const isAuth = ref(false);
const user = ref(null);

export function useAuth () {
    const router = useRouter();

    function onLogin (params) {
        AuthApiService.login(params)
            .then(data => {
                localStorage.setItem('token', data.token);

                authInit();

                router.push('/profile');
            });
    }

    function getUser () {
        AuthApiService.getUser()
            .then(data => {
                user.value = data;
            });
    }

    function authInit () {
        const token = localStorage.getItem('token');

        if (!token) {
            return;
        }

        isAuth.value = true;

        getUser();
    }

    return {
        isAuth,
        user,
        authInit,
        onLogin
    }
}