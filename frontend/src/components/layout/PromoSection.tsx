import { motion } from 'framer-motion'
import Link from 'next/link'

export default function PromoSection() {
    return (
        <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Left Promo */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative overflow-hidden rounded-2xl"
                    >
                        <div className="aspect-[4/3] relative">
                            <img
                                src="/images/promo/summer-sale.jpg"
                                alt="Summer Sale"
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
                            <div className="absolute inset-0 p-8 flex flex-col justify-center">
                                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                    Soldes d&apos;Été
                                </h3>
                                <p className="text-lg text-white/90 mb-6">
                                    Jusqu&apos;à 50% de réduction sur la collection été
                                </p>
                                <Link
                                    href="/promotions/summer"
                                    className="inline-block bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors w-fit"
                                >
                                    Voir les offres
                                </Link>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Promos */}
                    <div className="grid grid-cols-1 gap-8">
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative overflow-hidden rounded-2xl"
                        >
                            <div className="aspect-[2/1] relative">
                                <img
                                    src="/images/promo/new-collection.jpg"
                                    alt="New Collection"
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
                                <div className="absolute inset-0 p-6 flex flex-col justify-center">
                                    <h3 className="text-2xl font-bold text-white mb-2">
                                        Nouvelle Collection
                                    </h3>
                                    <p className="text-white/90 mb-4">
                                        Découvrez les dernières tendances
                                    </p>
                                    <Link
                                        href="/nouveautes"
                                        className="inline-block bg-white text-black px-4 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors w-fit"
                                    >
                                        Explorer
                                    </Link>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative overflow-hidden rounded-2xl"
                        >
                            <div className="aspect-[2/1] relative">
                                <img
                                    src="/images/promo/accessories.jpg"
                                    alt="Accessories"
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
                                <div className="absolute inset-0 p-6 flex flex-col justify-center">
                                    <h3 className="text-2xl font-bold text-white mb-2">
                                        Accessoires
                                    </h3>
                                    <p className="text-white/90 mb-4">
                                        Complétez votre style
                                    </p>
                                    <Link
                                        href="/categories/accessories"
                                        className="inline-block bg-white text-black px-4 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors w-fit"
                                    >
                                        Découvrir
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
} 