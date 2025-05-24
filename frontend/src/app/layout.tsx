import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Providers from '@/components/Providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'E-Shop - Votre boutique en ligne',
    description: 'Découvrez notre sélection de produits de qualité',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="fr" suppressHydrationWarning>
            <body className={inter.className}>
                <Providers>
                    <div className="min-h-screen flex flex-col">
                        <Header />
                        <main className="flex-grow">
                            {children}
                        </main>
                    </div>
                </Providers>
            </body>
        </html>
    );
} 