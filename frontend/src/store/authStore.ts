import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { api } from '@/services/api';

export type User = {
    id: number;
    email: string;
    firstName: string;
    lastName: string;
    token: string;
};

type AuthStore = {
    user: User | null;
    isLoading: boolean;
    error: string | null;
    login: (email: string, password: string) => Promise<void>;
    register: (userData: {
        email: string;
        password: string;
        firstName: string;
        lastName: string;
    }) => Promise<void>;
    logout: () => Promise<void>;
};

export const useAuthStore = create<AuthStore>()(
    persist(
        (set) => ({
            user: null,
            isLoading: false,
            error: null,

            login: async (email: string, password: string) => {
                set({ isLoading: true, error: null });
                try {
                    const data = await api.login(email, password);
                    set({
                        user: {
                            id: data.id,
                            email: data.email,
                            firstName: data.firstName,
                            lastName: data.lastName,
                            token: data.token,
                        },
                        isLoading: false,
                    });
                } catch (error) {
                    set({
                        error: error instanceof Error ? error.message : 'Une erreur est survenue',
                        isLoading: false,
                    });
                }
            },

            register: async (userData) => {
                set({ isLoading: true, error: null });
                try {
                    const data = await api.register(userData);
                    set({
                        user: {
                            id: data.id,
                            email: data.email,
                            firstName: data.firstName,
                            lastName: data.lastName,
                            token: data.token,
                        },
                        isLoading: false,
                    });
                } catch (error) {
                    set({
                        error: error instanceof Error ? error.message : 'Une erreur est survenue',
                        isLoading: false,
                    });
                }
            },

            logout: async () => {
                set({ isLoading: true, error: null });
                try {
                    await api.logout();
                    set({ user: null, isLoading: false });
                } catch (error) {
                    set({
                        error: error instanceof Error ? error.message : 'Une erreur est survenue',
                        isLoading: false,
                    });
                }
            },
        }),
        {
            name: 'auth-storage',
        }
    )
); 