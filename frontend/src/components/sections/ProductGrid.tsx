'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface Product {
    id: number;
    nameOfProduct: string;
    descriptionOfProduct: string;
    priceOfProduct: number;
    imageUrl: string;
}

export default function ProductGrid() {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('http://localhost:8081/api/v1/products');
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error('Error fetching products:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    if (loading) {
        return (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[...Array(8)].map((_, index) => (
                    <div key={index} className="animate-pulse">
                        <div className="bg-gray-200 aspect-square rounded-lg mb-4" />
                        <div className="h-4 bg-gray-200 rounded w-3/4 mb-2" />
                        <div className="h-4 bg-gray-200 rounded w-1/2" />
                    </div>
                ))}
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
                <Link
                    href={`/products/${product.id}`}
                    key={product.id}
                    className="group"
                >
                    <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100 mb-4">
                        <Image
                            src={product.imageUrl || 'http://localhost:8081/api/v1/products/images/placeholder.jpg'}
                            alt={product.nameOfProduct}
                            fill
                            className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                        {product.nameOfProduct}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-2 line-clamp-2">
                        {product.descriptionOfProduct}
                    </p>
                    <p className="text-lg font-bold">
                        {new Intl.NumberFormat('fr-FR', {
                            style: 'currency',
                            currency: 'EUR'
                        }).format(product.priceOfProduct)}
                    </p>
                </Link>
            ))}
        </div>
    );
} 