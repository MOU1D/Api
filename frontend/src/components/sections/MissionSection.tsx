'use client';
import { motion } from 'framer-motion';
import { MainMenusGradientCard } from '@/components/ui/MainMenusGradientCard';

interface MissionSectionProps {
    title?: string;
    description?: string;
}

export default function MissionSection({
    title = 'Notre Mission',
    description = 'Nous repensons la mode numérique pour créer des expériences d\'exception. Innovation, simplicité et élégance au service du luxe moderne.',
}: MissionSectionProps) {
    const cards = [
        {
            title: 'Innovation',
            description: 'Nous intégrons les technologies les plus avancées pour créer des expériences immersives qui redéfinissent les codes du luxe numérique.',
        },
        {
            title: 'Simplicité',
            description: 'Des interfaces épurées et intuitives où chaque interaction est pensée pour offrir une fluidité parfaite, signature de l\'élégance moderne.',
        },
        {
            title: 'Élégance',
            description: 'Chaque pixel compte dans notre quête de perfection esthétique. Nous créons des expériences visuelles qui inspirent et enchantent.',
        },
    ];

    return (
        <section className="relative py-32 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden">

            {/* RAPPELS VISUELS DES COULEURS DU GRADIENT */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Cyan - #3BC4F2 */}
                <div className="absolute top-20 left-20 w-32 h-32 bg-[#3BC4F2]/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute top-40 right-32 w-4 h-4 bg-[#3BC4F2] rounded-full opacity-60" />

                {/* Violet - #7A69F9 */}
                <div className="absolute top-1/3 right-20 w-40 h-40 bg-[#7A69F9]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
                <div className="absolute bottom-1/3 left-32 w-3 h-3 bg-[#7A69F9] rounded-full opacity-50" />

                {/* Rose - #F26378 */}
                <div className="absolute bottom-20 right-40 w-36 h-36 bg-[#F26378]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
                <div className="absolute top-1/2 left-20 w-2 h-2 bg-[#F26378] rounded-full opacity-70" />

                {/* Orange - #F5833F */}
                <div className="absolute bottom-1/4 left-20 w-28 h-28 bg-[#F5833F]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "3s" }} />
                <div className="absolute top-1/4 right-20 w-3 h-3 bg-[#F5833F] rounded-full opacity-60" />

                {/* Lignes de gradient flottantes */}
                <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#3BC4F2]/30 via-[#7A69F9]/30 via-[#F26378]/30 to-[#F5833F]/30 opacity-20" />
                <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-[#F5833F]/20 via-[#F26378]/20 via-[#7A69F9]/20 to-[#3BC4F2]/20 opacity-30" />
            </div>

            <div className="relative max-w-6xl mx-auto">
                <motion.div
                    className="text-center mb-20"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                >
                    {/* Ligne décorative avec les couleurs du gradient */}
                    <motion.div
                        className="w-32 h-1 bg-gradient-to-r from-[#3BC4F2] via-[#7A69F9] via-[#F26378] to-[#F5833F] mx-auto mb-8 rounded-full"
                        initial={{ scaleX: 0, opacity: 0 }}
                        whileInView={{ scaleX: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 2, delay: 0.2 }}
                    />

                    <motion.h2
                        className="text-5xl sm:text-6xl lg:text-7xl font-extralight tracking-tight text-white mb-8 relative"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 }}
                    >
                        {title}
                        {/* Effet de brillance avec les couleurs du gradient */}
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-[#3BC4F2]/20 via-[#7A69F9]/20 via-[#F26378]/20 via-[#F5833F]/20 to-transparent"
                            initial={{ x: "-100%" }}
                            whileInView={{ x: "100%" }}
                            viewport={{ once: true }}
                            transition={{ duration: 3, delay: 1, ease: "easeInOut" }}
                        />
                    </motion.h2>

                    <motion.p
                        className="text-xl sm:text-2xl text-neutral-300 leading-relaxed max-w-4xl mx-auto"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                    >
                        {description}
                    </motion.p>
                </motion.div>

                {/* Grid avec cartes de même taille */}
                <motion.div
                    className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                >
                    {cards.map((card, index) => (
                        <motion.div
                            key={card.title}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.8,
                                delay: 0.2 * index,
                                type: "spring",
                                stiffness: 100
                            }}
                            className="h-full relative"
                        >
                            {/* Halo coloré autour de chaque carte */}
                            <div className={`absolute -inset-2 rounded-[24px] opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 ${index === 0 ? 'bg-[#3BC4F2]' :
                                index === 1 ? 'bg-[#7A69F9]' :
                                    'bg-[#F26378]'
                                }`} />

                            <div className="h-[280px] relative">
                                <MainMenusGradientCard
                                    title={card.title}
                                    description={card.description}
                                    withArrow
                                    circleSize={350}
                                />
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Footer avec les couleurs du gradient */}
                <motion.div
                    className="text-center mt-20"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 1.2 }}
                >
                    <div className="flex justify-center items-center space-x-4 mb-6">
                        <div className="w-3 h-3 bg-[#3BC4F2] rounded-full animate-pulse" />
                        <div className="w-3 h-3 bg-[#7A69F9] rounded-full animate-pulse" style={{ animationDelay: "0.5s" }} />
                        <div className="w-3 h-3 bg-[#F26378] rounded-full animate-pulse" style={{ animationDelay: "1s" }} />
                        <div className="w-3 h-3 bg-[#F5833F] rounded-full animate-pulse" style={{ animationDelay: "1.5s" }} />
                    </div>
                    <p className="text-lg text-neutral-400 italic max-w-2xl mx-auto">
                        "L'innovation distingue un leader d'un suiveur." — Steve Jobs
                    </p>
                </motion.div>
            </div>
        </section>
    );
}