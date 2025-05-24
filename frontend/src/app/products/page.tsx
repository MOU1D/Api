'use client';

import { useState } from 'react';
import ProductCard from '@/components/products/ProductCard';
import ProductFilters from '@/components/products/ProductFilters';
import ProductSort from '@/components/products/ProductSort';

// Types temporaires - à déplacer dans un fichier types.ts plus tard
type Product = {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
    category: string;
};

export default function ProductsPage() {
    const [filters, setFilters] = useState({
        category: 'all',
        priceRange: 'all',
        sortBy: 'newest'
    });

    // Données temporaires - à remplacer par l'appel API
    const products: Product[] = [
        {
            id: 1,
            name: "Sneakers Premium",
            description: "Sneakers confortables et élégantes",
            price: 129.99,
            image: "/products/sneakers-1.jpg",
            category: "Chaussures"
        },
        {
            id: 2,
            name: "T-shirt Design",
            description: "T-shirt en coton bio avec design unique",
            price: 29.99,
            image: "/products/tshirt-1.jpg",
            category: "Vêtements"
        },
        // Ajoutez plus de produits ici
    ];

    return (
        <div className="container py-8">
            <h1 className="text-3xl font-bold mb-8">Nos Produits</h1>

            <div className="flex flex-col lg:flex-row gap-8">
                {/* Filtres - visible sur desktop, dans un drawer sur mobile */}
                <aside className="lg:w-1/4">
                    <ProductFilters
                        filters={filters}
                        onChange={(newFilters) => setFilters(newFilters)}
                    />
                </aside>

                <main className="lg:w-3/4">
                    {/* Barre de tri et nombre de résultats */}
                    <div className="flex justify-between items-center mb-6">
                        <p className="text-gray-600 dark:text-gray-400">
                            {products.length} produits trouvés
                        </p>
                        <ProductSort
                            value={filters.sortBy}
                            onChange={(value) => setFilters({ ...filters, sortBy: value })}
                        />
                    </div>

                    {/* Grille de produits */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {products.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </main>
            </div>
        </div>
    );
} 