'use client';

import { useRef } from 'react';
import Navbar from '../components/layout/Navbar';
import HeroSection from '@/components/layout/HeroSection';
import MissionSection from '@/components/layout/MissionSection';
import CollectionsSection from '@/components/layout/CollectionsSection';
import GiftSection from '@/components/layout/GiftSection';
import NewsletterSection from '@/components/layout/NewsletterSection';
import Footer from '@/components/layout/Footer';
import VisionSection from '@/components/layout/VisionSection';

export default function Home() {
    const containerRef = useRef(null);

    return (
        <main className="w-full bg-black" ref={containerRef}>
            <Navbar />
            <HeroSection />
            <VisionSection />
            <MissionSection />
            <CollectionsSection />
           
            <GiftSection />
            <NewsletterSection />
            <Footer />
        </main>
    );
} 