'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/store/authStore';

type Order = {
    id: number;
    date: string;
    status: string;
    total: number;
    items: {
        id: number;
        name: string;
        quantity: number;
        price: number;
    }[];
};

export default function ProfilePage() {
    const router = useRouter();
    const { user, logout } = useAuthStore();
    const [orders, setOrders] = useState<Order[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (!user) {
            router.push('/login');
            return;
        }

        const fetchOrders = async () => {
            try {
                const response = await fetch('/api/v1/commands/client/' + user.id, {
                    headers: {
                        'Authorization': `Bearer ${user.token}`,
                    },
                });
                if (response.ok) {
                    const data = await response.json();
                    setOrders(data);
                }
            } catch (error) {
                console.error('Erreur lors de la récupération des commandes:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchOrders();
    }, [user, router]);

    const handleLogout = () => {
        logout();
        router.push('/login');
    };

    if (!user) {
        return null;
    }

    return (
        <div className="container py-8">
            <div className="max-w-4xl mx-auto">
                {/* En-tête du profil */}
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 mb-8">
                    <div className="flex items-center justify-between mb-6">
                        <h1 className="text-2xl font-bold">Mon Profil</h1>
                        <button
                            onClick={handleLogout}
                            className="text-sm text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 transition-colors"
                        >
                            Se déconnecter
                        </button>
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                        <div>
                            <h2 className="text-lg font-semibold mb-4">Informations personnelles</h2>
                            <div className="space-y-3">
                                <div>
                                    <label className="block text-sm text-gray-600 dark:text-gray-400">Nom complet</label>
                                    <p className="text-gray-900 dark:text-gray-100">
                                        {user.firstName} {user.lastName}
                                    </p>
                                </div>
                                <div>
                                    <label className="block text-sm text-gray-600 dark:text-gray-400">Email</label>
                                    <p className="text-gray-900 dark:text-gray-100">{user.email}</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-lg font-semibold mb-4">Actions rapides</h2>
                            <div className="space-y-3">
                                <button
                                    onClick={() => router.push('/profile/edit')}
                                    className="w-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-gray-100 py-2 px-4 rounded-lg transition-colors text-sm"
                                >
                                    Modifier mon profil
                                </button>
                                <button
                                    onClick={() => router.push('/profile/password')}
                                    className="w-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-gray-100 py-2 px-4 rounded-lg transition-colors text-sm"
                                >
                                    Changer mon mot de passe
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Historique des commandes */}
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
                    <h2 className="text-xl font-semibold mb-6">Mes commandes</h2>

                    {isLoading ? (
                        <div className="text-center py-8">
                            <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-solid border-primary border-r-transparent"></div>
                            <p className="mt-2 text-gray-600 dark:text-gray-400">Chargement des commandes...</p>
                        </div>
                    ) : orders.length === 0 ? (
                        <div className="text-center py-8">
                            <p className="text-gray-600 dark:text-gray-400">Vous n'avez pas encore passé de commande.</p>
                            <button
                                onClick={() => router.push('/products')}
                                className="mt-4 inline-flex items-center text-primary hover:text-primary-600 transition-colors"
                            >
                                Découvrir nos produits
                                <svg
                                    className="ml-2 h-5 w-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                                    />
                                </svg>
                            </button>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            {orders.map((order) => (
                                <div
                                    key={order.id}
                                    className="border dark:border-gray-700 rounded-lg p-4 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                                >
                                    <div className="flex items-center justify-between mb-2">
                                        <div className="flex items-center space-x-4">
                                            <span className="text-sm text-gray-600 dark:text-gray-400">
                                                Commande #{order.id}
                                            </span>
                                            <span className="text-sm text-gray-600 dark:text-gray-400">
                                                {new Date(order.date).toLocaleDateString()}
                                            </span>
                                        </div>
                                        <span
                                            className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(order.status)}`}
                                        >
                                            {getStatusLabel(order.status)}
                                        </span>
                                    </div>

                                    <div className="mt-2 space-y-2">
                                        {order.items.map((item) => (
                                            <div
                                                key={item.id}
                                                className="flex items-center justify-between text-sm"
                                            >
                                                <span className="text-gray-900 dark:text-gray-100">
                                                    {item.name} × {item.quantity}
                                                </span>
                                                <span className="text-gray-600 dark:text-gray-400">
                                                    {(item.price * item.quantity).toFixed(2)} €
                                                </span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="mt-4 pt-4 border-t dark:border-gray-700 flex items-center justify-between">
                                        <span className="font-medium">Total</span>
                                        <span className="font-medium">{order.total.toFixed(2)} €</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

function getStatusColor(status: string): string {
    switch (status) {
        case 'IN_STOCK':
            return 'bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300';
        case 'SHIPPED':
            return 'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300';
        case 'DELIVERED':
            return 'bg-gray-100 text-gray-800 dark:bg-gray-900/50 dark:text-gray-300';
        case 'CANCELLED':
            return 'bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-300';
        default:
            return 'bg-gray-100 text-gray-800 dark:bg-gray-900/50 dark:text-gray-300';
    }
}

function getStatusLabel(status: string): string {
    switch (status) {
        case 'IN_STOCK':
            return 'En préparation';
        case 'SHIPPED':
            return 'Expédiée';
        case 'DELIVERED':
            return 'Livrée';
        case 'CANCELLED':
            return 'Annulée';
        default:
            return status;
    }
} 