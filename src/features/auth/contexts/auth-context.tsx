'use client';
import {createContext, ReactNode, useEffect, useState} from 'react';
import authApi from '@/features/auth/services/auth-api';
import axiosErrorToString from '@/utils/services/axios-error-to-string';
import {toast} from 'sonner';
import {User} from "@/features/users/types/users";
import {usePathname, useRouter} from 'next/navigation';

type SignInData = {
    email: string;
    password: string;
}

type AuthContextType = {
    isAuthenticated: boolean;
    getMe: () => User;
    signIn: (data: SignInData) => Promise<void>
}

export const AuthContext = createContext({} as AuthContextType);

type AuthProviderProps = {
    children: ReactNode;
};

export function AuthProvider({ children }: AuthProviderProps) {
    const [user, setUser] = useState<User | null>(null);
    const pathname = usePathname();
    const router = useRouter();
    const isAuthenticated = !!user;

    useEffect(() => {
        async function fetchUser() {
            if (pathname !== '/login') {
                try {
                    const response = await authApi.recoverUserInformation();
                    if (response.id) setUser(response);
                } catch (e) {
                    toast.error(axiosErrorToString(e));
                }
            }
        }
        fetchUser();
    }, [pathname]);

    async function signIn({ email, password }: SignInData) {
        try {
            const data = await authApi.signInRequest({
                email,
                password,
            });

            setUser(data.user);
            router.push('/home');
        } catch (e) {
            toast.error(axiosErrorToString(e));
        }
    }

    function getMe(): User {
        if (!user) throw new Error('user not defined');
        return user;
    }

    return (
        <AuthContext.Provider value={{ getMe, isAuthenticated, signIn }}>
            {children}
        </AuthContext.Provider>
    );
}