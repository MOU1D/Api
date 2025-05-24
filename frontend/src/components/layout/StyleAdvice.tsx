import { motion } from 'framer-motion'
import Link from 'next/link'

interface StyleAdviceProps {
    title?: string
    description?: string
    buttonText?: string
    buttonLink?: string
}

export default function StyleAdvice({
    title = "Trouvez votre style.",
    description = "Découvrez nos sélections éditoriales et inspirations.",
    buttonText = "Lire les articles",
    buttonLink = "/articles"
}: StyleAdviceProps) {
    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                        {title}
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                        {description}
                    </p>
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Link
                            href={buttonLink}
                            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 transition-colors duration-300"
                        >
                            {buttonText}
                        </Link>
                    </motion.div>
                </motion.div>

                {/* Motif décoratif */}
                <motion.div
                    className="mt-16 grid grid-cols-3 gap-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    {[...Array(3)].map((_, i) => (
                        <div
                            key={i}
                            className="h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-orange-400 rounded-full"
                        />
                    ))}
                </motion.div>
            </div>
        </section>
    )
} 