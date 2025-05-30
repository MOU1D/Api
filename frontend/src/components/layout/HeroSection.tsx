import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { ChevronDown, ArrowDown } from 'lucide-react'
import { useRef, useEffect } from 'react'

export default function HeroWithScrollWow() {
    const containerRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    })

    // Spring config pour des animations fluides
    const springConfig = { stiffness: 100, damping: 30, mass: 1 }
    
    // Transformations parallax sophistiquées
    const backgroundY = useSpring(useTransform(scrollYProgress, [0, 1], ["0%", "30%"]), springConfig)
    const contentY = useSpring(useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]), springConfig)
    const opacity = useSpring(useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0]), springConfig)
    const scale = useSpring(useTransform(scrollYProgress, [0, 1], [1, 1.1]), springConfig)
    const blur = useTransform(scrollYProgress, [0, 1], [0, 0]) // Pas de blur

    const scrollToMission = () => {
        const missionSection = document.querySelector('#mission-section')
        if (missionSection) {
            missionSection.scrollIntoView({ behavior: 'smooth' })
        }
    }

    useEffect(() => {
        // Smooth scroll optimisé
        const handleScroll = () => {
            document.documentElement.style.scrollBehavior = 'smooth'
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <motion.section 
            ref={containerRef}
            className="relative h-screen flex items-center justify-center overflow-hidden"
            style={{ opacity }}
        >
            {/* Background fixe */}
            <motion.div 
                className="absolute inset-0 z-0"
                style={{ 
                    y: backgroundY,
                    scale
                }}
            >
                {/* Overlays éclaircis */}
                <div className="absolute inset-0 bg-gradient-to-br from-black/45 via-black/35 to-black/25 z-10" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 z-10" />
                
                {/* Rappels subtils de votre gradient sur les bords */}
                <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#3BC4F2]/10 via-transparent to-transparent z-10" />
                <div className="absolute bottom-0 right-0 w-full h-32 bg-gradient-to-t from-[#F26378]/10 via-transparent to-transparent z-10" />
                <div className="absolute left-0 top-1/2 w-32 h-full bg-gradient-to-r from-[#7A69F9]/8 via-transparent to-transparent z-10" />
                
                <img
                    src="https://images.pexels.com/photos/2869215/pexels-photo-2869215.jpeg"
                    className="w-full h-full object-cover"
                />
            </motion.div>

            {/* Content avec parallax */}
            <motion.div 
                className="relative z-20 text-center max-w-4xl mx-auto px-6"
                style={{ y: contentY }}
            >
                {/* Particules flottantes avec vos couleurs */}
                <div className="absolute inset-0 pointer-events-none">
                    {[...Array(6)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-1 h-1 rounded-full"
                            style={{
                                background: i % 3 === 0 ? '#3BC4F2' : i % 3 === 1 ? '#7A69F9' : '#F26378',
                                left: `${20 + i * 15}%`,
                                top: `${30 + i * 10}%`,
                                opacity: 0.4
                            }}
                            animate={{
                                y: [0, -20, 0],
                                opacity: [0.2, 0.6, 0.2],
                                scale: [1, 1.2, 1]
                            }}
                            transition={{
                                duration: 3 + i * 0.5,
                                repeat: Infinity,
                                delay: i * 0.5
                            }}
                        />
                    ))}
                </div>
                
                {/* Titre avec votre gradient */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
                    className="mb-16"
                >
                    <h1 
                        className="text-4xl md:text-6xl lg:text-7xl font-light leading-tight tracking-wide text-white px-6 py-4 cursor-pointer transition-all duration-500 hover:bg-gradient-to-r hover:from-[#3BC4F2] hover:via-[#7A69F9] hover:to-[#F26378] hover:bg-clip-text hover:text-transparent"
                        style={{
                            fontFamily: "'Playfair Display', serif",
                        }}
                    >
                        L'Art du Luxe
                    </h1>
                    
                    {/* Ligne avec votre gradient */}
                    <motion.div
                        initial={{ width: 0, opacity: 0 }}
                        animate={{ width: 100, opacity: 1 }}
                        transition={{ duration: 1.5, delay: 0.5 }}
                        className="h-[2px] mx-auto mt-6"
                        style={{
                            background: "linear-gradient(to right, transparent, #3BC4F2, #7A69F9, #F26378, transparent)"
                        }}
                    />
                </motion.div>

                {/* CTA avec fond flou gradient au hover */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                    className="mb-16"
                >
                    <button
                        onClick={scrollToMission}
                        className="group relative inline-flex items-center gap-2 text-white/90 hover:text-white transition-all duration-500 px-6 py-3 rounded-full hover:backdrop-blur-md hover:bg-gradient-to-r hover:from-[#3BC4F2]/20 hover:via-[#7A69F9]/20 hover:to-[#F26378]/20"
                    >
                        <span 
                            className="text-sm font-light tracking-[0.2em] uppercase border-b border-white/20 group-hover:border-white/60 pb-1 transition-all duration-500"
                            style={{
                                fontFamily: "'Inter', system-ui, sans-serif",
                                textShadow: "0 1px 3px rgba(0,0,0,0.6)"
                            }}
                        >
                            Découvrez notre mission
                        </span>
                        <ChevronDown 
                            className="w-4 h-4 group-hover:translate-y-1 transition-all duration-500" 
                            strokeWidth={1}
                        />
                    </button>
                </motion.div>
            </motion.div>
        </motion.section>
    )
}