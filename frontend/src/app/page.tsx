'use client';

import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import Navbar from './components/Navbar';
import MissionSection from '@/components/layout/MissionSection';

export default function Home() {
    const containerRef = useRef(null);
    const { scrollY } = useScroll();

    // Spring animations
    const springConfig = { stiffness: 100, damping: 30, mass: 1 };
    const heroScale = useSpring(useTransform(scrollY, [0, 500], [1, 1.1]), springConfig);
    const heroOpacity = useSpring(useTransform(scrollY, [0, 500], [1, 0]), springConfig);

    // Luxury products data
    const luxuryProducts = [
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

    return (
        <main className="w-full bg-black" ref={containerRef}>
            <Navbar />

            {/* Hero Section with enhanced title */}
            <motion.section
                className="relative h-screen flex items-center justify-center overflow-hidden"
                style={{ opacity: heroOpacity }}
            >
                <motion.div
                    className="absolute inset-0 z-0"
                    style={{ scale: heroScale }}
                >
                    <Image
                        src="https://images.pexels.com/photos/2869215/pexels-photo-2869215.jpeg"
                        alt="Luxury Design"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/70" />
                </motion.div>

                <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6 -mt-20">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="text-8xl font-light mb-8 tracking-wider"
                    >
                        L&apos;Art du Luxe
                    </motion.h1>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="mt-12"
                    >
                        <Link
                            href="/collections"
                            className="group relative inline-flex items-center justify-center px-12 py-5 text-lg font-light overflow-hidden rounded-none"
                        >
                            <span className="absolute inset-0 bg-white"></span>
                            <span className="relative text-black tracking-widest group-hover:tracking-[0.2em] transition-all duration-300">DÉCOUVRIR</span>
                        </Link>
                    </motion.div>
                </div>
            </motion.section>

            {/* Mission Section */}
            <MissionSection />

            {/* Collections Section */}
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

            {/* Architecture & Style Section */}
            <section className="relative min-h-screen bg-[#0a0a0a] py-32">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="relative aspect-square overflow-hidden rounded-lg"
                        >
                            <Image
                                src="https://images.pexels.com/photos/7031010/pexels-photo-7031010.jpeg"
                                alt="Design Architectural"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-black/40 hover:bg-black/20 transition-colors flex items-center justify-center">
                                <h3 className="text-white text-3xl font-light">Design Architectural</h3>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative aspect-square overflow-hidden rounded-lg"
                        >
                            <Image
                                src="https://images.pexels.com/photos/18095371/pexels-photo-18095371.jpeg"
                                alt="Urban Luxury"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-black/40 hover:bg-black/20 transition-colors flex items-center justify-center">
                                <h3 className="text-white text-3xl font-light">Urban Luxury</h3>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Gift Section */}
            <section className="relative min-h-screen bg-[#0a0a0a] py-32">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl font-light text-white mb-16 text-center"
                    >
                        L&apos;Art d&apos;Offrir
                    </motion.h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="relative group"
                        >
                            <div className="relative aspect-[3/4] overflow-hidden rounded-lg mb-6">
                                <Image
                                    src="https://images.unsplash.com/photo-1674318881563-84ba1a53d9c4"
                                    alt="Pour Lui - Parfum de Luxe"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300" />
                            </div>
                            <h3 className="text-white text-2xl font-light mb-4">Pour Lui</h3>
                            <p className="text-gray-400 mb-6">Une sélection raffinée pour l&apos;homme moderne</p>
                            <Link href="/collections/homme" className="text-white/80 hover:text-white transition-colors">
                                Découvrir →
                            </Link>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative group"
                        >
                            <div className="relative aspect-[3/4] overflow-hidden rounded-lg mb-6">
                                <Image
                                    src="https://images.pexels.com/photos/8365699/pexels-photo-8365699.jpeg"
                                    alt="Pour Elle - Parfum de Luxe"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300" />
                            </div>
                            <h3 className="text-white text-2xl font-light mb-4">Pour Elle</h3>
                            <p className="text-gray-400 mb-6">L&apos;élégance au féminin</p>
                            <Link href="/collections/femme" className="text-white/80 hover:text-white transition-colors">
                                Découvrir →
                            </Link>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="relative group"
                        >
                            <div className="relative aspect-[3/4] overflow-hidden rounded-lg mb-6">
                                <Image
                                    src="https://images.pexels.com/photos/3171837/pexels-photo-3171837.jpeg"
                                    alt="Événements"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300" />
                            </div>
                            <h3 className="text-white text-2xl font-light mb-4">Événements</h3>
                            <p className="text-gray-400 mb-6">Des cadeaux exceptionnels pour les moments spéciaux</p>
                            <Link href="/collections/evenements" className="text-white/80 hover:text-white transition-colors">
                                Découvrir →
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Final Section with Newsletter */}
            <section className="relative min-h-screen bg-black">
                <div className="absolute inset-0">
                    <Image
                        src="https://images.pexels.com/photos/6626967/pexels-photo-6626967.jpeg"
                        alt="Luxury Excellence"
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30" />
                </div>
                <div className="relative h-screen flex items-center justify-center">
                    <div className="max-w-2xl mx-auto text-center px-6">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-4xl font-light text-white mb-6"
                        >
                            Restez Informé
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                            className="text-white/80 mb-8"
                        >
                            Inscrivez-vous à notre newsletter pour découvrir nos nouveautés et offres exclusives
                        </motion.p>
                        <motion.form
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center"
                        >
                            <input
                                type="email"
                                placeholder="Votre adresse email"
                                className="px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white placeholder-white/60 focus:outline-none focus:border-white/40 transition-colors w-full sm:w-auto"
                            />
                            <button
                                type="submit"
                                className="px-8 py-3 bg-white text-black rounded-full hover:bg-opacity-90 transition-colors"
                            >
                                S&apos;inscrire
                            </button>
                        </motion.form>
                    </div>
                </div>
            </section>
        </main>
    );
} 