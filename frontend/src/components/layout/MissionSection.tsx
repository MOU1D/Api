import { motion } from 'framer-motion'

interface MissionSectionProps {
    title?: string
    description?: string
}

export default function MissionSection({
    title = "Notre mission",
    description = "Nous repensons la mode numérique pour tous. Innovation. Simplicité. Élégance."
}: MissionSectionProps) {
    return (
        <section className="py-32 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
            <div className="max-w-5xl mx-auto">
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.h2
                        className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        {title}
                    </motion.h2>

                    <motion.p
                        className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        {description}
                    </motion.p>

                    {/* Motif décoratif */}
                    <motion.div
                        className="mt-16 flex justify-center space-x-4"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        {['Innovation', 'Simplicité', 'Élégance'].map((value, index) => (
                            <div
                                key={value}
                                className="text-center"
                            >
                                <motion.div
                                    className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-orange-400 flex items-center justify-center mb-4"
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <span className="text-white font-semibold">
                                        {index + 1}
                                    </span>
                                </motion.div>
                                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                                    {value}
                                </p>
                            </div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
} 