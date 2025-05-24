'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useCartStore } from '@/store/cartStore';

const SHIPPING_COST = 5.99;

export default function CartPage() {
    const { items, removeItem, updateQuantity, getTotal } = useCartStore();

    const subtotal = getTotal();
    const total = subtotal + SHIPPING_COST;

    if (items.length === 0) {
        return (
            <div className="container py-16 text-center">
                <h1 className="text-2xl font-bold mb-4">Votre panier est vide</h1>
                <p className="text-gray-600 dark:text-gray-400 mb-8">
                    Découvrez nos produits et commencez votre shopping !
                </p>
                <Link
                    href="/products"
                    className="inline-block bg-primary hover:bg-primary-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                    Voir les produits
                </Link>
            </div>
        );
    }

    return (
        <div className="container py-8">
            <h1 className="text-3xl font-bold mb-8">Panier</h1>

            <div className="flex flex-col lg:flex-row gap-8">
                {/* Liste des articles */}
                <div className="lg:w-2/3 space-y-4">
                    {items.map((item) => (
                        <div
                            key={item.id}
                            className="flex gap-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm"
                        >
                            {/* Image */}
                            <div className="relative w-24 h-24 flex-shrink-0">
                                <Image
                                    src={item.image}
                                    alt={item.name}
                                    fill
                                    className="object-cover rounded-md"
                                />
                            </div>

                            {/* Informations */}
                            <div className="flex-grow">
                                <div className="flex justify-between mb-2">
                                    <Link
                                        href={`/products/${item.id}`}
                                        className="text-lg font-semibold hover:text-primary transition-colors"
                                    >
                                        {item.name}
                                    </Link>
                                    <button
                                        onClick={() => removeItem(item.id)}
                                        className="text-red-500 hover:text-red-600"
                                    >
                                        <span className="sr-only">Supprimer</span>
                                        <svg
                                            className="w-5 h-5"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M6 18L18 6M6 6l12 12"
                                            />
                                        </svg>
                                    </button>
                                </div>

                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-4">
                                        <select
                                            value={item.quantity}
                                            onChange={(e) =>
                                                updateQuantity(item.id, Number(e.target.value))
                                            }
                                            className="form-select rounded-lg border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800"
                                        >
                                            {[...Array(Math.min(10, item.stock))].map((_, i) => (
                                                <option key={i + 1} value={i + 1}>
                                                    {i + 1}
                                                </option>
                                            ))}
                                        </select>
                                        <span className="text-sm text-gray-600 dark:text-gray-400">
                                            {item.stock} disponibles
                                        </span>
                                    </div>
                                    <span className="font-semibold">
                                        {(item.price * item.quantity).toFixed(2)} €
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Résumé de la commande */}
                <div className="lg:w-1/3">
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                        <h2 className="text-xl font-semibold mb-4">Résumé de la commande</h2>
                        <div className="space-y-3 text-sm">
                            <div className="flex justify-between">
                                <span className="text-gray-600 dark:text-gray-400">Sous-total</span>
                                <span>{subtotal.toFixed(2)} €</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-600 dark:text-gray-400">Livraison</span>
                                <span>{SHIPPING_COST.toFixed(2)} €</span>
                            </div>
                            <div className="border-t border-gray-200 dark:border-gray-700 pt-3">
                                <div className="flex justify-between font-semibold">
                                    <span>Total</span>
                                    <span className="text-lg">{total.toFixed(2)} €</span>
                                </div>
                            </div>
                        </div>
                        <button
                            onClick={() => {/* TODO: Procéder au paiement */ }}
                            className="w-full mt-6 bg-primary hover:bg-primary-600 text-white py-3 rounded-lg font-medium transition-colors"
                        >
                            Procéder au paiement
                        </button>
                        <Link
                            href="/products"
                            className="block text-center mt-4 text-sm text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                        >
                            Continuer mes achats
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
} 