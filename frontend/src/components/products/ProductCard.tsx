'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useCartStore } from '@/store/cartStore';

type ProductCardProps = {
    product: {
        id: number;
        name: string;
        description: string;
        price: number;
        imageUrl: string;
        category: string;
        stock?: number;
    };
};

export default function ProductCard({ product }: ProductCardProps) {
    const addItem = useCartStore((state) => state.addItem);

    const handleAddToCart = () => {
        addItem({
            id: product.id,
            name: product.name,
            price: product.price,
            imageUrl: product.imageUrl,
            stock: product.stock || 10,
        });
    };

    return (
        <div className="group relative bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden">
            {/* Image du produit */}
            <div className="aspect-square relative overflow-hidden bg-gray-200 dark:bg-gray-700">
                <Image
                    src={product.imageUrl || 'http://localhost:8081/api/v1/products/images/placeholder.jpg'}
                    alt={product.name}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                />
            </div>

            {/* Informations du produit */}
            <div className="p-4">
                <Link href={`/products/${product.id}`} className="block">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-1 hover:text-primary transition-colors">
                        {product.name}
                    </h3>
                </Link>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2 line-clamp-2">
                    {product.description}
                </p>
                <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-primary">
                        {product.price.toFixed(2)} €
                    </span>
                    <button
                        onClick={handleAddToCart}
                        className="bg-primary hover:bg-primary-600 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors"
                    >
                        Ajouter
                    </button>
                </div>
            </div>

            {/* Badge catégorie */}
            <div className="absolute top-2 left-2">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-200">
                    {product.category}
                </span>
            </div>
        </div>
    );
} 