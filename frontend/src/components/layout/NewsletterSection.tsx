'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function NewsletterSection() {
    return (
        <section className="relative py-32 bg-black">
            <div className="absolute inset-0">
                <Image
                    src="https://images.pexels.com/photos/6626967/pexels-photo-6626967.jpeg"
                    alt="Luxury Excellence"
                    fill
                    className="object-cover opacity-50"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-transparent" />
            </div>
            <div className="relative flex items-center justify-center">
                <div className="max-w-3xl mx-auto text-center px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="mb-12"
                    >
                        <h2 className="text-5xl font-light text-white mb-6 tracking-wide">
                            L'Excellence sur Mesure
                        </h2>
                        {/* Trait décoratif */}
                        <div className="w-24 h-[2px] mx-auto bg-gradient-to-r from-[#3BC4F2] via-[#7A69F9] to-[#F26378]" />
                    </motion.div>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="text-white/90 mb-12 text-lg leading-relaxed"
                    >
                        Rejoignez notre cercle privilégié et découvrez en avant-première 
                        nos collections exclusives et nos événements privés.
                    </motion.p>
                    <motion.form
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    >
                        <div className="relative w-full sm:w-auto">
                            <input
                                type="email"
                                placeholder="Votre adresse email"
                                className="w-full sm:w-80 px-6 py-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full text-white placeholder-white/60 focus:outline-none focus:border-white/40 transition-all"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full sm:w-auto px-12 py-4 bg-gradient-to-r from-[#3BC4F2] via-[#7A69F9] to-[#F26378] text-white rounded-full hover:opacity-90 transition-opacity font-light tracking-wider"
                        >
                            S'inscrire
                        </button>
                    </motion.form>
                </div>
            </div>
        </section>
    );
} 