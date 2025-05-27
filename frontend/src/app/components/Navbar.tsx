'use client';

import Link from 'next/link';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Heart, ShoppingBag, User, Sun, Moon } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useCartStore } from '@/store/cartStore';

export default function Navbar() {
    const { scrollY } = useScroll();
    const [isScrolled, setIsScrolled] = useState(false);
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const cartItemsCount = useCartStore((state) => state.items.length);

    // Effet pour éviter l'hydration mismatch
    useEffect(() => {
        setMounted(true);
    }, []);

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 50);
    });

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    // Éviter le rendu du bouton de thème avant l'hydration
    if (!mounted) {
        return null;
    }

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-black/90 dark:bg-white/10 backdrop-blur-md py-4' : 'bg-black/30 dark:bg-white/5 backdrop-blur-sm py-6'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <Link
                        href="/"
                        className="text-white dark:text-white text-2xl font-light tracking-[0.2em] hover:opacity-80 transition-opacity"
                    >
                        LUXE
                    </Link>
                </motion.div>

                {/* Navigation Links */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="hidden md:flex items-center space-x-8"
                >
                    <Link
                        href="/collections"
                        className="text-white/90 dark:text-white/90 hover:text-white dark:hover:text-white text-sm uppercase tracking-wider transition-colors"
                    >
                        Collections
                    </Link>
                    <Link
                        href="/nouveautes"
                        className="text-white/90 dark:text-white/90 hover:text-white dark:hover:text-white text-sm uppercase tracking-wider transition-colors"
                    >
                        Nouveautés
                    </Link>
                    <Link
                        href="/categories"
                        className="text-white/90 dark:text-white/90 hover:text-white dark:hover:text-white text-sm uppercase tracking-wider transition-colors"
                    >
                        Catégories
                    </Link>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex items-center space-x-6"
                >
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={toggleTheme}
                        className="text-white/90 dark:text-white/90 hover:text-white dark:hover:text-white transition-colors"
                        aria-label="Toggle theme"
                    >
                        {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                    </motion.button>

                    <Link href="/favorites" className="relative group">
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className="text-white/90 dark:text-white/90 hover:text-white dark:hover:text-white transition-colors"
                        >
                            <Heart size={20} />
                        </motion.div>
                    </Link>

                    <Link href="/cart" className="relative group">
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className="text-white/90 dark:text-white/90 hover:text-white dark:hover:text-white transition-colors"
                        >
                            <ShoppingBag size={20} />
                            {cartItemsCount > 0 && (
                                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                                    {cartItemsCount}
                                </span>
                            )}
                        </motion.div>
                    </Link>

                    <Link href="/profile" className="relative group">
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className="text-white/90 dark:text-white/90 hover:text-white dark:hover:text-white transition-colors"
                        >
                            <User size={20} />
                        </motion.div>
                    </Link>
                </motion.div>
            </div>
        </motion.nav>
    );
} 