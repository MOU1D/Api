import { motion } from 'framer-motion'
import Link from 'next/link'

const categories = [
    {
        id: 1,
        name: 'Hommes',
        image: '/images/categories/men.jpg',
        description: 'Collection Homme',
    },
    {
        id: 2,
        name: 'Femmes',
        image: '/images/categories/women.jpg',
        description: 'Collection Femme',
    },
    {
        id: 3,
        name: 'Accessoires',
        image: '/images/categories/accessories.jpg',
        description: 'Accessoires tendance',
    },
    {
        id: 4,
        name: 'Sport',
        image: '/images/categories/sport.jpg',
        description: 'Vêtements de sport',
    },
]

export default function CategorySection() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Nos Catégories
                    </h2>
                    <p className="text-lg text-gray-600">
                        Explorez notre sélection de produits par catégorie
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {categories.map((category, index) => (
                        <motion.div
                            key={category.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Link href={`/categories/${category.id}`} className="block group">
                                <div className="relative overflow-hidden rounded-lg aspect-square">
                                    <img
                                        src={category.image}
                                        alt={category.name}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                                        <div className="text-center text-white">
                                            <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                                            <p className="text-sm opacity-90">{category.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
} 