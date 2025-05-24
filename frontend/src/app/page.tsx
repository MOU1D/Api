'use client';

import HeroSection from '@/components/sections/HeroSection';
import ProductGrid from '@/components/sections/ProductGrid';
import PromoSection from '@/components/sections/PromoSection';
import Footer from '@/components/layout/Footer';

export default function Home() {
    return (
        <main className="min-h-screen">
            <HeroSection />

            <section className="container section-spacing">
                <h2 className="h2 text-center mb-12">Nos Produits Populaires</h2>
                <ProductGrid />
            </section>

            <PromoSection />

            <Footer />
        </main>
    );
} 