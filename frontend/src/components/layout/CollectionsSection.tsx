'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useMouse } from "@/hooks/use-mouse";
import { cn } from "@/utils/cn";

interface Product {
    title: string;
    image: string;
    price: string;
    category: string;
}

const luxuryProducts: Product[] = [
    {
        title: "Confort Luxe",
        image: "https://images.pexels.com/photos/8872321/pexels-photo-8872321.jpeg",
        price: "2,890 €",
        category: "Maroquinerie"
    },
    {
        title: "Sac à Main",
        image: "https://images.pexels.com/photos/8365688/pexels-photo-8365688.jpeg",
        price: "750 €",
        category: "Chaussures"
    },
    {
        title: "Simple et Élégant",
        image: "https://images.pexels.com/photos/11056153/pexels-photo-11056153.jpeg",
        price: "990 €",
        category: "Accessoires"
    },
    {
        title: "Street Luxe",
        image: "https://images.pexels.com/photos/8365699/pexels-photo-8365699.jpeg",
        price: "290 €",
        category: "Parfums"
    },
    {
        title: "Parfums",
        image: "https://images.pexels.com/photos/17945896/pexels-photo-17945896.jpeg",
        price: "490 €",
        category: "Maroquinerie"
    },
    {
        title: "Coloré",
        image: "https://images.pexels.com/photos/17435380/pexels-photo-17435380.jpeg",
        price: "450 €",
        category: "Accessoires"
    }
];

// Composant ProductCard avec effet gradient
const ProductCard = ({ product, index }: { product: Product; index: number }) => {
    const [mouse, parentRef] = useMouse();
    
    return (
        <motion.div
            ref={parentRef}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ 
                duration: 0.8, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 80
            }}
            className="group relative transform-gpu overflow-hidden rounded-[25px] bg-white/10 p-3 transition-all duration-300 hover:scale-[1.02] cursor-pointer w-[280px] h-[400px] mx-auto"
        >
            {/* Gradient qui suit la souris */}
            <div
                className={cn(
                    "-translate-x-1/2 -translate-y-1/2 absolute transform-gpu rounded-full transition-all duration-500 group-hover:scale-[2]",
                    mouse.elementX === null || mouse.elementY === null
                        ? "opacity-0"
                        : "opacity-100"
                )}
                style={{
                    maskImage: `radial-gradient(200px circle at center, white, transparent)`,
                    width: `400px`,
                    height: `400px`,
                    left: `${mouse.elementX}px`,
                    top: `${mouse.elementY}px`,
                    background: "linear-gradient(135deg, #3BC4F2, #7A69F9, #F26378, #F5833F)",
                    willChange: "transform",
                    pointerEvents: "none"
                }}
            />

            {/* Fond de la carte */}
            <div className="absolute inset-px rounded-[24px] bg-neutral-900/90 backdrop-blur-sm" />

            {/* Contenu de la carte */}
            <div className="relative z-10">
                {/* Image avec parallax */}
                <div className="relative h-[280px] mb-6 overflow-hidden rounded-[18px]">
                    <Image
                        src={product.image}
                        alt={product.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                </div>

                {/* Informations produit */}
                <div className="px-5 pb-5">
                    <h3 className="text-white text-lg font-light mb-2 leading-tight">
                        {product.title}
                    </h3>
                    
                    {/* Trait décoratif comme Mission */}
                    <div className="w-12 h-[1px] bg-[#7A69F9]/60 rounded-full" />
                </div>
            </div>
        </motion.div>
    );
};

export default function CollectionsSection() {
    return (
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-neutral-900 via-black to-neutral-900">
            {/* Background avec rappels colorés comme Hero */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Rappels subtils de gradient sur les bords */}
                <div className="absolute top-0 right-0 w-full h-40 bg-gradient-to-b from-[#3BC4F2]/5 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#F26378]/5 via-transparent to-transparent" />
                <div className="absolute right-0 top-1/2 w-40 h-full bg-gradient-to-l from-[#7A69F9]/3 via-transparent to-transparent" />
                
                {/* Particules flottantes subtiles */}
                {[...Array(8)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 rounded-full"
                        style={{
                            background: i % 3 === 0 ? '#3BC4F2' : i % 3 === 1 ? '#7A69F9' : '#F26378',
                            left: `${15 + i * 12}%`,
                            top: `${20 + i * 8}%`,
                            opacity: 0.2
                        }}
                        animate={{
                            y: [0, -15, 0],
                            opacity: [0.1, 0.3, 0.1],
                            scale: [1, 1.2, 1]
                        }}
                        transition={{
                            duration: 4 + i * 0.5,
                            repeat: Infinity,
                            delay: i * 0.7
                        }}
                    />
                ))}
            </div>

            <div className="relative max-w-7xl mx-auto z-20">
                {/* Header avec style Mission */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                >
                    {/* Ligne décorative */}
                    <motion.div
                        className="w-32 h-[2px] bg-[#7A69F9]/30 mx-auto mb-8 rounded-full"
                        initial={{ scaleX: 0, opacity: 0 }}
                        whileInView={{ scaleX: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: 0.2 }}
                    />

                    {/* Titre avec style Mission */}
                    <motion.div
                        className="relative mb-8"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: 0.3 }}
                    >
                        {/* Halos diffusés */}
                        <div className="absolute -z-10 blur-[150px] w-full h-64 bg-gradient-to-r from-[#3BC4F2]/15 via-[#7A69F9]/20 to-[#F26378]/15 top-[-50px] left-0 rounded-full" />
                        
                        <h2
                            className="text-6xl sm:text-7xl lg:text-8xl font-light leading-tight"
                            style={{
                                fontFamily: "'Playfair Display', serif",
                                background: "linear-gradient(135deg, #3BC4F2, #7A69F9, #F26378, #F5833F)",
                                backgroundSize: "300% 300%",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                                animation: "gradientFlowSlow 12s ease-in-out infinite",
                                letterSpacing: "-0.02em"
                            }}
                        >
                            Collections
                        </h2>
                    </motion.div>

                    <motion.p
                        className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto font-light"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.6 }}
                    >
                        Découvrez notre sélection exclusive de pièces d'exception, 
                        choisies avec soin pour leur qualité et leur raffinement.
                    </motion.p>
                </motion.div>

                {/* Grid de produits */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                >
                    {luxuryProducts.map((product, index) => (
                        <ProductCard 
                            key={index} 
                            product={product} 
                            index={index} 
                        />
                    ))}
                </motion.div>

                {/* CTA global */}
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                >
                    <button className="group relative inline-flex flex-col items-center gap-3 text-white transition-all duration-500 hover:scale-105">
                        <span 
                            className="text-lg md:text-xl font-medium tracking-[0.15em] uppercase border-b-2 border-white/40 group-hover:border-white pb-2 transition-all duration-500"
                            style={{
                                fontFamily: "'Inter', system-ui, sans-serif",
                                textShadow: "0 2px 8px rgba(0,0,0,0.8)"
                            }}
                        >
                            Découvrir toutes nos collections
                        </span>
                        
                        {/* Effet de glow au hover */}
                        <div 
                            className="absolute inset-0 -m-4 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                            style={{
                                background: "linear-gradient(135deg, rgba(96,213,242,0.3), rgba(139,122,255,0.3), rgba(255,107,138,0.3))",
                                filter: "blur(10px)"
                            }}
                        />
                    </button>
                </motion.div>
            </div>

            {/* CSS pour l'animation du gradient */}
            <style jsx>{`
                @keyframes gradientFlowSlow {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }
                
                @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@300;400;500&display=swap');
            `}</style>
        </section>
    );
}