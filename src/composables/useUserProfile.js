import { ref } from 'vue';
import { useAuth } from '@/composables';

export function useUserProfile () {
    const { user } = useAuth();

    const model = ref({
        login: '',
        lastname: '',
        firstname: '',
        birthday: '',
        email: '',
        phone: ''
    });

    model.value.login = user.value.login;
    model.value.lastname = user.value.lastname;
    model.value.firstname = user.value.firstname;
    model.value.birthday = user.value.birthday;
    model.value.email = user.value.email;
    model.value.phone = user.value.phone;

    return {
        model
    }
}