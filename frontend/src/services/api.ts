type RequestOptions = {
    method?: string;
    headers?: Record<string, string>;
    body?: any;
};

class ApiService {
    private baseUrl = '/api/v1';

    private async request(endpoint: string, options: RequestOptions = {}) {
        const token = this.getToken();
        const headers: Record<string, string> = {
            'Content-Type': 'application/json',
            ...options.headers,
        };

        if (token) {
            headers['Authorization'] = `Bearer ${token}`;
        }

        const response = await fetch(`${this.baseUrl}${endpoint}`, {
            method: options.method || 'GET',
            headers,
            body: options.body ? JSON.stringify(options.body) : undefined,
        });

        if (!response.ok) {
            const error = await response.json().catch(() => ({}));
            throw new Error(error.message || 'Une erreur est survenue');
        }

        return response.json();
    }

    private getToken(): string | null {
        if (typeof window !== 'undefined') {
            const authData = localStorage.getItem('auth-storage');
            if (authData) {
                const { state } = JSON.parse(authData);
                return state.user?.token || null;
            }
        }
        return null;
    }

    // Auth
    async login(email: string, password: string) {
        return this.request('/auth/login', {
            method: 'POST',
            body: { email, password },
        });
    }

    async register(userData: {
        email: string;
        password: string;
        firstName: string;
        lastName: string;
    }) {
        return this.request('/auth/register', {
            method: 'POST',
            body: userData,
        });
    }

    async logout() {
        const token = this.getToken();
        if (token) {
            return this.request('/auth/logout', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            });
        }
    }

    // User Profile
    async updateProfile(userId: number, data: {
        firstName: string;
        lastName: string;
        email: string;
    }) {
        return this.request(`/clients/${userId}`, {
            method: 'PUT',
            body: data,
        });
    }

    async updatePassword(userId: number, data: {
        currentPassword: string;
        newPassword: string;
    }) {
        return this.request(`/clients/${userId}/password`, {
            method: 'PUT',
            body: data,
        });
    }

    // Products
    async getProducts(params?: {
        category?: string;
        minPrice?: number;
        maxPrice?: number;
        sort?: string;
    }) {
        const searchParams = new URLSearchParams();
        if (params) {
            Object.entries(params).forEach(([key, value]) => {
                if (value !== undefined) {
                    searchParams.append(key, value.toString());
                }
            });
        }
        return this.request(`/products?${searchParams.toString()}`);
    }

    async getProduct(id: number) {
        return this.request(`/products/${id}`);
    }

    // Cart
    async getCart(clientId: number) {
        return this.request(`/cart/${clientId}`);
    }

    async addToCart(clientId: number, productId: number, quantity: number) {
        return this.request(`/cart/${clientId}`, {
            method: 'POST',
            body: { productId, quantity },
        });
    }

    async updateCartItem(clientId: number, productId: number, quantity: number) {
        return this.request(`/cart/${clientId}/items/${productId}`, {
            method: 'PUT',
            body: { quantity },
        });
    }

    async removeFromCart(clientId: number, productId: number) {
        return this.request(`/cart/${clientId}/items/${productId}`, {
            method: 'DELETE',
        });
    }

    // Orders
    async getOrders(clientId: number) {
        return this.request(`/commands/client/${clientId}`);
    }

    async createOrder(clientId: number) {
        return this.request(`/commands`, {
            method: 'POST',
            body: { clientId },
        });
    }
}

export const api = new ApiService(); 