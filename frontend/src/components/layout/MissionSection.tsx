'use client';
import { motion } from 'framer-motion';
import { MainMenusGradientCard } from '@/components/ui/MainMenusGradientCard';

interface MissionSectionProps {
    title?: string;
    description?: string;
}

export default function MissionSection({
    title = 'Notre Mission',
    description = 'Plus qu\'une boutique, un Regard, une Émotion, un Accompagnement !',
}: MissionSectionProps) {
    const cards = [
        {
            title: 'Vous n’êtes pas là par hasard',
            description: 'Ce lieu est fait pour celles et ceux qui cherchent plus qu’un produit. Une émotion. Une intention. Une présence.',
        },
        {
            title: 'Chaque détail compte',
            description: 'Rien ici n’est laissé au hasard. Chaque choix, chaque matière, chaque interface a été pensé pour vous, avec minutie et exigence.',
        },
        {
            title: 'Laissez-vous guider, subtilement',
            description: 'Terminé les achats impulsifs. Nous vous aidons à investir dans des pièces durables qui vous ressemblent',
        },
    ];
    return (
        <section 
            id="mission-section"
            className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
        >
            {/* BACKGROUND IMAGE */}
            <div className="absolute inset-0 z-0">
                <div
                    className="w-full h-full bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: "url('https://images.unsplash.com/photo-1707209856575-a80b9dff5524?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzh8fHdoaXRlfGVufDB8fDB8fHww')"
                    }}
                />
                {/* Overlay pour adoucir l'image */}
                <div className="absolute inset-0 bg-white/70 backdrop-blur-[1px]" />
            </div>

            {/* RAPPELS VISUELS MINIMALISTES EN VIOLET */}
            <div className="absolute inset-0 pointer-events-none z-10">
                {/* Particules violet subtiles */}
                <div className="absolute top-40 left-20 w-2 h-2 bg-[#7A69F9] rounded-full opacity-20 animate-pulse" />
                <div className="absolute top-1/3 right-32 w-1 h-1 bg-[#7A69F9] rounded-full opacity-30" />
                <div className="absolute bottom-1/3 left-40 w-1 h-1 bg-[#7A69F9] rounded-full opacity-25" />
                <div className="absolute bottom-40 right-24 w-2 h-2 bg-[#7A69F9] rounded-full opacity-15 animate-pulse" style={{ animationDelay: "2s" }} />
            </div>

            <div className="relative max-w-6xl mx-auto z-20">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                >
                    {/* Ligne décorative minimaliste */}
                    <motion.div
                        className="w-32 h-[2px] bg-[#7A69F9]/30 mx-auto mb-8 rounded-full"
                        initial={{ scaleX: 0, opacity: 0 }}
                        whileInView={{ scaleX: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: 0.2 }}
                    />

                    {/* TITRE HERO STYLÉ AVEC GRADIENT FLUIDE ET HALO ÉTALÉ */}
                    <motion.div
                        className="relative mb-8"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: 0.3 }}
                    >
                        {/* Halos diffusés multiples qui s'étalent sur toute la section */}
                        <div className="absolute -z-10 blur-[200px] w-full h-96 bg-gradient-to-r from-[#3BC4F2]/20 via-[#7A69F9]/30 via-[#F26378]/20 to-[#F5833F]/20 top-[-100px] left-0 rounded-full" />
                        <div className="absolute -z-10 blur-[150px] w-3/4 h-80 bg-gradient-to-br from-[#7A69F9]/25 to-[#3BC4F2]/15 top-[-80px] left-1/4 rounded-full" />
                        <div className="absolute -z-10 blur-[180px] w-2/3 h-72 bg-gradient-to-l from-[#F26378]/20 to-[#F5833F]/15 top-[-60px] right-0 rounded-full" />

                        <h2
                            className="relative leading-[0.9]"
                            style={{
                                fontFamily: "'Playfair Display', 'DM Serif Display', 'Libre Baskerville', serif",
                                fontWeight: "300"
                            }}
                        >
                            <span
                                className="block text-6xl sm:text-7xl lg:text-8xl"
                                style={{
                                    background: "linear-gradient(135deg, #3BC4F2, #7A69F9, #F26378, #F5833F)",
                                    backgroundSize: "300% 300%",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    backgroundClip: "text",
                                    animation: "gradientFlowSlow 12s ease-in-out infinite",
                                    letterSpacing: "-0.02em"
                                }}
                            >
                                Notre
                            </span>
                            <span
                                className="block text-7xl sm:text-8xl lg:text-9xl ml-8"
                                style={{
                                    background: "linear-gradient(135deg, #3BC4F2, #7A69F9, #F26378, #F5833F)",
                                    backgroundSize: "300% 300%",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    backgroundClip: "text",
                                    animation: "gradientFlowSlow 12s ease-in-out infinite",
                                    fontWeight: "200",
                                    letterSpacing: "-0.04em"
                                }}
                            >
                                Mission
                            </span>
                        </h2>
                    </motion.div>

                    <motion.p
                        className="text-xl sm:text-2xl text-gray-700 leading-relaxed max-w-4xl mx-auto font-light"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
                    >
                        {description}
                    </motion.p>
                </motion.div>

                {/* Grid avec cartes et effet de tilt au hover */}
                <motion.div
                    className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
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
                                transition: { duration: 0.3, ease: "easeOut" }
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

            {/* CSS pour l'animation du gradient du titre PLUS LENTE */}
            <style jsx>{`
        @keyframes gradientFlowSlow {
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
        
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@300;400;500&display=swap');
      `}</style>
        </section>
    );
}