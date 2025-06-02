'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

const messages = [
  { author: 'client', time: '21:42', text: 'Bonjour, vous vendez quoi ?' },
  { author: 'brand', time: '21:43', text: 'Ce que les autres n’ont pas eu l’œil de voir.' },
  { author: 'client', time: '21:44', text: "Je cherche quelque chose d'élégant et simple." },
  { author: 'brand', time: '22:00', text: 'C’est ce que tout le monde cherche. Ici, on le filtre.' },
  { author: 'client', time: '22:01', text: 'Je ne veux pas ressembler à tout le monde.' },
  { author: 'brand', time: '22:02', text: "C'est l'art que nous maitrisons , Bonne visite." },
];

export default function VisionSection() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const playSound = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    }
  };

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black text-white font-inter">
      <audio ref={audioRef} src="/frontend/public/COMCell_Message 1 (ID 1111)_LS.wav" preload="auto" />

      {/* Background */}
      <Image
        src="https://images.pexels.com/photos/7031010/pexels-photo-7031010.jpeg"
        alt="Fond luxe"
        fill
        className="object-cover"
        priority
      />

      {/* Messages */}
      <div className="absolute inset-0 z-20 flex flex-col justify-center items-center px-6 space-y-6">
        {messages.map((msg, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            onAnimationStart={() => {
              if (msg.author === 'brand') playSound();
            }}
            viewport={{ once: true }}
            transition={{
              duration: 1.4,
              delay: i * 1.2,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className={`max-w-md px-4 py-3 rounded-2xl shadow-xl backdrop-blur-md my-2 ${
              msg.author === 'client'
                ? 'self-start bg-white/90 text-black'
                : 'self-end bg-black/80 text-white border border-white/20'
            }`}
          >
            <p className="text-base leading-relaxed">{msg.text}</p>
            <span className="block text-[10px] mt-2 opacity-40 text-right">{msg.time}</span>
          </motion.div>
        ))}
      </div>

      {/* CTA bouton */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-30">
        <a
          href="/collections"
          className="px-6 py-2 bg-white text-black rounded-full shadow-lg text-sm font-medium transition hover:bg-neutral-200"
        >
          Explorer nos collections →
        </a>
      </div>

      {/* Particules */}
      <div className="absolute inset-0 pointer-events-none z-5">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/15 rounded-full"
            style={{
              left: `${12 + i * 7}%`,
              top: `${20 + i * 5}%`,
            }}
            animate={{
              y: [0, -25, 0],
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 6 + i * 0.4,
              repeat: Infinity,
              delay: i * 0.7,
            }}
          />
        ))}
      </div>

      {/* Fonts */}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500&family=Inter:wght@400;500&display=swap');
      `}</style>
    </section>
  );
}