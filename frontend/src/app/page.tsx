'use client';

import { useRef } from 'react';
import Navbar from '../components/layout/Navbar';
import HeroSection from '@/components/layout/HeroSection';
import MissionSection from '@/components/layout/MissionSection';
import CollectionsSection from '@/components/layout/CollectionsSection';
import ArchitectureAndGiftSection from '@/components/layout/ArchitectureAndGiftSection';
import NewsletterSection from '@/components/layout/NewsletterSection';
import Footer from '@/components/layout/Footer';

export default function Home() {
    const containerRef = useRef(null);

    return (
        <main className="w-full bg-black" ref={containerRef}>
            <Navbar />
            <HeroSection />
            <MissionSection />
            <CollectionsSection />
            <ArchitectureAndGiftSection />
            <NewsletterSection />
            <Footer />
        </main>
    );
} 