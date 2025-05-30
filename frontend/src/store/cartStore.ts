import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { api } from '@/services/api';
import { useAuthStore } from './authStore';

export type CartItem = {
    id: number;
    name: string;
    price: number;
    image: string;
    quantity: number;
    stock: number;
};

type CartStore = {
    items: CartItem[];
    isLoading: boolean;
    error: string | null;
    addItem: (item: Omit<CartItem, 'quantity'>) => Promise<void>;
    removeItem: (id: number) => Promise<void>;
    updateQuantity: (id: number, quantity: number) => Promise<void>;
    clearCart: () => Promise<void>;
    syncWithServer: () => Promise<void>;
    getItemCount: () => number;
    getTotal: () => number;
};

export const useCartStore = create<CartStore>()(
    persist(
        (set, get) => ({
            items: [],
            isLoading: false,
            error: null,

            syncWithServer: async () => {
                const user = useAuthStore.getState().user;
                if (!user) return;

                set({ isLoading: true, error: null });
                try {
                    const cartData = await api.getCart(user.id);
                    set({
                        items: cartData.items.map((item: any) => ({
                            id: item.product.id,
                            name: item.product.nameOfProduct,
                            price: item.product.priceOfProduct,
                            image: item.product.image,
                            quantity: item.quantity,
                            stock: item.product.quantity,
                        })),
                        isLoading: false,
                    });
                } catch (error) {
                    set({
                        error: error instanceof Error ? error.message : 'Une erreur est survenue',
                        isLoading: false,
                    });
                }
            },

            addItem: async (item) => {
                const user = useAuthStore.getState().user;
                if (!user) return;

                set({ isLoading: true, error: null });
                try {
                    await api.addToCart(user.id, item.id, 1);
                    await get().syncWithServer();
                } catch (error) {
                    set({
                        error: error instanceof Error ? error.message : 'Une erreur est survenue',
                        isLoading: false,
                    });
                }
            },

            removeItem: async (id) => {
                const user = useAuthStore.getState().user;
                if (!user) return;

                set({ isLoading: true, error: null });
                try {
                    await api.removeFromCart(user.id, id);
                    await get().syncWithServer();
                } catch (error) {
                    set({
                        error: error instanceof Error ? error.message : 'Une erreur est survenue',
                        isLoading: false,
                    });
                }
            },

            updateQuantity: async (id, quantity) => {
                const user = useAuthStore.getState().user;
                if (!user) return;

                set({ isLoading: true, error: null });
                try {
                    await api.updateCartItem(user.id, id, quantity);
                    await get().syncWithServer();
                } catch (error) {
                    set({
                        error: error instanceof Error ? error.message : 'Une erreur est survenue',
                        isLoading: false,
                    });
                }
            },

            clearCart: async () => {
                const user = useAuthStore.getState().user;
                if (!user) return;

                set({ isLoading: true, error: null });
                try {
                    // Supprimer chaque article du panier
                    const items = get().items;
                    for (const item of items) {
                        await api.removeFromCart(user.id, item.id);
                    }
                    set({ items: [], isLoading: false });
                } catch (error) {
                    set({
                        error: error instanceof Error ? error.message : 'Une erreur est survenue',
                        isLoading: false,
                    });
                }
            },

            getItemCount: () => {
                return get().items.reduce((sum, item) => sum + item.quantity, 0);
            },

            getTotal: () => {
                return get().items.reduce(
                    (sum, item) => sum + item.price * item.quantity,
                    0
                );
            },
        }),
        {
            name: 'cart-storage',
        }
    )
); 