import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Client } from '@/types';
import api from '@/lib/api';

interface AuthState {
    token: string | null;
    user: Client | null;
    isAuthenticated: boolean;
    login: (email: string, password: string) => Promise<void>;
    logout: () => void;
    register: (userData: Omit<Client, 'id' | 'commands'>) => Promise<void>;
}

export const useAuthStore = create<AuthState>()(
    persist(
        (set) => ({
            token: null,
            user: null,
            isAuthenticated: false,
            login: async (email: string, password: string) => {
                const response = await api.post('/auth/login', { email, password });
                const { token } = response.data;
                localStorage.setItem('token', token);
                set({ token, isAuthenticated: true });
            },
            logout: () => {
                localStorage.removeItem('token');
                set({ token: null, user: null, isAuthenticated: false });
            },
            register: async (userData) => {
                const response = await api.post('/auth/register', userData);
                const { token } = response.data;
                localStorage.setItem('token', token);
                set({ token, isAuthenticated: true });
            },
        }),
        {
            name: 'auth-storage',
        }
    )
); 