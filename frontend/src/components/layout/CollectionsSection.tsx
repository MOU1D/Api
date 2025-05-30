'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface Product {
    title: string;
    image: string;
    price: string;
    category: string;
}

const luxuryProducts: Product[] = [
    {
        title: "Sac Loro Piana",
        image: "https://images.pexels.com/photos/8872321/pexels-photo-8872321.jpeg",
        price: "2,890 €",
        category: "Maroquinerie"
    },
    {
        title: "Mocassins Summer Walk",
        image: "https://images.pexels.com/photos/8365688/pexels-photo-8365688.jpeg",
        price: "750 €",
        category: "Chaussures"
    },
    {
        title: "Écharpe Cachemire",
        image: "https://images.pexels.com/photos/11056153/pexels-photo-11056153.jpeg",
        price: "990 €",
        category: "Accessoires"
    },
    {
        title: "Parfum Open Walk",
        image: "https://images.pexels.com/photos/8365699/pexels-photo-8365699.jpeg",
        price: "290 €",
        category: "Parfums"
    },
    {
        title: "Portefeuille Cuir",
        image: "https://images.pexels.com/photos/17945896/pexels-photo-17945896.jpeg",
        price: "490 €",
        category: "Maroquinerie"
    },
    {
        title: "Ceinture Tressée",
        image: "https://images.pexels.com/photos/17435380/pexels-photo-17435380.jpeg",
        price: "450 €",
        category: "Accessoires"
    }
];

export default function CollectionsSection() {
    return (
        <section className="relative h-screen bg-[#0a0a0a] overflow-hidden py-20">
            <div className="max-w-7xl mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl font-light text-white mb-12 text-center"
                >
                    Collections
                </motion.h2>
                <div className="flex space-x-8 overflow-x-auto pb-8">
                    {luxuryProducts.map((product, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            className="flex-shrink-0 w-[300px]"
                        >
                            <div className="relative aspect-[3/4] mb-4 overflow-hidden rounded-lg">
                                <Image
                                    src={product.image}
                                    alt={product.title}
                                    fill
                                    className="object-cover transition-transform duration-500 hover:scale-110"
                                />
                            </div>
                            <h3 className="text-white text-lg font-light mb-2">{product.title}</h3>
                            <p className="text-gray-400 text-sm">{product.category}</p>
                            <p className="text-white mt-2">{product.price}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
} 