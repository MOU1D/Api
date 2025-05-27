import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { api } from '@/services/api';

interface User {
    id: number;
    email: string;
    name: string;
    role: string;
}

interface AuthState {
    user: User | null;
    token: string | null;
    isAuthenticated: boolean;
    isLoading: boolean;
    error: string | null;
    login: (email: string, password: string) => Promise<void>;
    register: (data: { email: string; password: string; firstName: string; lastName: string; }) => Promise<void>;
    setAuth: (user: User, token: string) => void;
    logout: () => void;
}

export const useAuthStore = create<AuthState>()(
    persist(
        (set) => ({
            user: null,
            token: null,
            isAuthenticated: false,
            isLoading: false,
            error: null,
            login: async (email: string, password: string) => {
                const { user, token } = await api.login(email, password);
                set({ user, token, isAuthenticated: true });
                localStorage.setItem('token', token);
            },
            register: async (data) => {
                set({ isLoading: true, error: null });
                try {
                    const { user, token } = await api.register(data);
                    set({ user, token, isAuthenticated: true, isLoading: false });
                    localStorage.setItem('token', token);
                } catch (error) {
                    set({
                        error: error instanceof Error ? error.message : 'Une erreur est survenue',
                        isLoading: false
                    });
                }
            },
            setAuth: (user: User, token: string) => {
                set({
                    user,
                    token,
                    isAuthenticated: true,
                });
                localStorage.setItem('token', token);
            },
            logout: () => {
                set({
                    user: null,
                    token: null,
                    isAuthenticated: false,
                });
                localStorage.removeItem('token');
            },
        }),
        {
            name: 'auth-storage',
            skipHydration: true,
        }
    )
); 