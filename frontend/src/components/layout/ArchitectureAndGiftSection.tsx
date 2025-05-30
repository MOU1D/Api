'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function ArchitectureAndGiftSection() {
    return (
        <>
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
                        L'Art d'Offrir
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
                            <p className="text-gray-400 mb-6">Une sélection raffinée pour l'homme moderne</p>
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
                            <p className="text-gray-400 mb-6">L'élégance au féminin</p>
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
        </>
    );
} 