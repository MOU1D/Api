'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ProductCard from '@/components/products/ProductCard';

// Types à déplacer dans un fichier séparé
type Product = {
    id: number;
    name: string;
    description: string;
    price: number;
    images: string[];
    category: string;
    details: {
        material: string;
        color: string;
        size: string;
    };
    stock: number;
};

export default function ProductPage({ params }: { params: { id: string } }) {
    const [selectedImage, setSelectedImage] = useState(0);
    const [quantity, setQuantity] = useState(1);

    // Données temporaires - à remplacer par l'appel API
    const product: Product = {
        id: 1,
        name: "Sneakers Premium",
        description: "Des sneakers confortables et élégantes pour toutes les occasions. Fabriquées avec des matériaux de haute qualité pour une durabilité maximale.",
        price: 129.99,
        images: [
            "/products/sneakers-1.jpg",
            "/products/sneakers-2.jpg",
            "/products/sneakers-3.jpg",
            "/products/sneakers-4.jpg"
        ],
        category: "Chaussures",
        details: {
            material: "Cuir véritable et mesh respirant",
            color: "Blanc/Gris",
            size: "40-45"
        },
        stock: 15
    };

    // Produits similaires - à remplacer par l'appel API
    const similarProducts = [
        {
            id: 2,
            name: "Running Shoes Pro",
            description: "Chaussures de course professionnelles",
            price: 149.99,
            image: "/products/running-1.jpg",
            category: "Chaussures"
        },
        // ... autres produits similaires
    ];

    const handleAddToCart = () => {
        // TODO: Implémenter l'ajout au panier
        console.log('Ajouter au panier:', { productId: product.id, quantity });
    };

    return (
        <div className="container py-8">
            <div className="flex flex-col lg:flex-row gap-8">
                {/* Galerie d'images */}
                <div className="lg:w-2/3">
                    <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-200 dark:bg-gray-700 mb-4">
                        <Image
                            src={product.images[selectedImage]}
                            alt={product.name}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                    <div className="grid grid-cols-4 gap-4">
                        {product.images.map((image, index) => (
                            <button
                                key={index}
                                onClick={() => setSelectedImage(index)}
                                className={`relative aspect-square overflow-hidden rounded-lg bg-gray-200 dark:bg-gray-700 ${selectedImage === index
                                        ? 'ring-2 ring-primary'
                                        : 'hover:ring-2 hover:ring-gray-300 dark:hover:ring-gray-600'
                                    }`}
                            >
                                <Image
                                    src={image}
                                    alt={`${product.name} - Vue ${index + 1}`}
                                    fill
                                    className="object-cover"
                                />
                            </button>
                        ))}
                    </div>
                </div>

                {/* Informations produit */}
                <div className="lg:w-1/3 space-y-6">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
                            {product.name}
                        </h1>
                        <p className="text-2xl font-bold text-primary mt-2">
                            {product.price.toFixed(2)} €
                        </p>
                    </div>

                    <div className="prose dark:prose-invert">
                        <p>{product.description}</p>
                    </div>

                    <div className="space-y-4">
                        <div className="flex items-center justify-between text-sm">
                            <span className="text-gray-600 dark:text-gray-400">Matériau</span>
                            <span className="font-medium">{product.details.material}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                            <span className="text-gray-600 dark:text-gray-400">Couleur</span>
                            <span className="font-medium">{product.details.color}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                            <span className="text-gray-600 dark:text-gray-400">Tailles disponibles</span>
                            <span className="font-medium">{product.details.size}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                            <span className="text-gray-600 dark:text-gray-400">Stock</span>
                            <span className={`font-medium ${product.stock > 10 ? 'text-green-600' : 'text-orange-600'
                                }`}>
                                {product.stock} unités disponibles
                            </span>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div className="flex items-center space-x-4">
                            <label htmlFor="quantity" className="text-sm text-gray-600 dark:text-gray-400">
                                Quantité
                            </label>
                            <select
                                id="quantity"
                                value={quantity}
                                onChange={(e) => setQuantity(Number(e.target.value))}
                                className="form-select rounded-lg border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800"
                            >
                                {[...Array(Math.min(10, product.stock))].map((_, i) => (
                                    <option key={i + 1} value={i + 1}>
                                        {i + 1}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <button
                            onClick={handleAddToCart}
                            className="w-full bg-primary hover:bg-primary-600 text-white py-3 px-6 rounded-lg font-medium transition-colors"
                        >
                            Ajouter au panier
                        </button>
                    </div>
                </div>
            </div>

            {/* Produits similaires */}
            <div className="mt-16">
                <h2 className="text-2xl font-bold mb-6">Produits similaires</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {similarProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </div>
    );
} 