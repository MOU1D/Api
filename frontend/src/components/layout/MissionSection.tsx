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
        <section className="relative py-32 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">

            {/* RAPPELS VISUELS MINIMALISTES EN VIOLET */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Particules violet subtiles */}
                <div className="absolute top-40 left-20 w-2 h-2 bg-[#7A69F9] rounded-full opacity-20 animate-pulse" />
                <div className="absolute top-1/3 right-32 w-1 h-1 bg-[#7A69F9] rounded-full opacity-30" />
                <div className="absolute bottom-1/3 left-40 w-1 h-1 bg-[#7A69F9] rounded-full opacity-25" />
                <div className="absolute bottom-40 right-24 w-2 h-2 bg-[#7A69F9] rounded-full opacity-15 animate-pulse" style={{ animationDelay: "2s" }} />
            </div>

            <div className="relative max-w-6xl mx-auto">
                <motion.div
                    className="text-center mb-24"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                >
                    {/* Ligne décorative minimaliste - AGRANDIE */}
                    <motion.div
                        className="w-32 h-[2px] bg-[#7A69F9]/30 mx-auto mb-12 rounded-full"
                        initial={{ scaleX: 0, opacity: 0 }}
                        whileInView={{ scaleX: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: 0.2 }}
                    />

                    {/* TITRE HERO STYLÉ AVEC GRADIENT FLUIDE */}
                    <motion.div
                        className="relative mb-12"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: 0.3 }}
                    >
                        <h2
                            className="text-6xl sm:text-7xl lg:text-8xl font-extralight tracking-tight leading-[0.9] relative"
                            style={{
                                background: "linear-gradient(135deg, #3BC4F2, #7A69F9, #F26378, #F5833F)",
                                backgroundSize: "400% 400%",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                                animation: "gradientFlow 8s ease-in-out infinite",
                                fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                                fontWeight: "200",
                                letterSpacing: "-0.02em"
                            }}
                        >
                            <span className="block">Notre</span>
                            <span className="block text-7xl sm:text-8xl lg:text-9xl font-thin tracking-tighter ml-8">Mission</span>
                        </h2>

                        {/* Effet de glow subtil derrière le texte */}
                        <div
                            className="absolute inset-0 blur-3xl opacity-20"
                            style={{
                                background: "linear-gradient(135deg, #3BC4F2, #7A69F9, #F26378, #F5833F)",
                                backgroundSize: "400% 400%",
                                animation: "gradientFlow 8s ease-in-out infinite",
                                zIndex: -1
                            }}
                        />
                    </motion.div>

                    <motion.p
                        className="text-xl sm:text-2xl text-gray-600 leading-relaxed max-w-4xl mx-auto font-light"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.6 }}
                    >
                        {description}
                    </motion.p>
                </motion.div>

                {/* Grid avec cartes et effet de tilt au hover */}
                <motion.div
                    className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                >
                    {cards.map((card, index) => (
                        <motion.div
                            key={card.title}
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.9,
                                delay: 0.2 * index,
                                type: "spring",
                                stiffness: 80
                            }}
                            className="h-full relative group"
                            whileHover={{
                                rotateY: 5,
                                rotateX: 5,
                                scale: 1.02,
                                transition: { duration: 0.3 }
                            }}
                            style={{ perspective: "1000px" }}
                        >
                            <div className="h-[320px] relative transform-gpu">
                                <MainMenusGradientCard
                                    title={card.title}
                                    description={card.description}
                                    withArrow
                                    circleSize={380}
                                />
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* CSS pour l'animation du gradient du titre */}
            <style jsx>{`
        @keyframes gradientFlow {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
        </section>
    );
}