import api from '@/utils/services/api';

type SignInRequestData = {
    email: string;
    password: string;
}

export async function signInRequest(data: SignInRequestData) {
    const response = await api.post('auth/login', data);
    return response.data;
}

export async function recoverUserInformation() {
    const response = await api.get('auth/me');
    return response.data;
}

export async function logOut() {
    await api.post('auth/logout');
}

const authApi = {
    signInRequest,
    recoverUserInformation,
    logOut,
};

export default authApi;