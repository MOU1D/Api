'use client';

import Link from 'next/link';
import { useState } from 'react';
import ThemeToggle from '../ui/ThemeToggle';
import { usePathname } from 'next/navigation';
import { useCartStore } from '@/store/cartStore';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();
    const itemCount = useCartStore((state) => state.getItemCount());

    const navigation = [
        { name: 'Accueil', href: '/' },
        { name: 'Produits', href: '/products' },
        { name: 'Catégories', href: '/categories' },
        { name: 'À propos', href: '/about' },
    ];

    return (
        <header className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 backdrop-blur supports-[backdrop-filter]:bg-white/95 dark:supports-[backdrop-filter]:bg-gray-900/95">
            <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link href="/" className="text-xl font-bold text-primary">
                            E-Shop
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex md:items-center md:space-x-8">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`text-sm font-medium transition-colors hover:text-primary ${pathname === item.href
                                    ? 'text-primary'
                                    : 'text-gray-700 dark:text-gray-200'
                                    }`}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    {/* Right section */}
                    <div className="flex items-center space-x-4">
                        <ThemeToggle />

                        {/* Cart */}
                        <Link
                            href="/cart"
                            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors relative"
                        >
                            <span className="sr-only">Panier</span>
                            <svg
                                className="h-6 w-6 text-gray-700 dark:text-gray-200"
                                fill="none"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                                />
                            </svg>
                            {itemCount > 0 && (
                                <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-primary text-xs text-white flex items-center justify-center">
                                    {itemCount}
                                </span>
                            )}
                        </Link>

                        {/* User menu */}
                        <Link
                            href="/profile"
                            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
                        >
                            <span className="sr-only">Profile</span>
                            <svg
                                className="h-6 w-6 text-gray-700 dark:text-gray-200"
                                fill="none"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                                />
                            </svg>
                        </Link>

                        {/* Mobile menu button */}
                        <button
                            type="button"
                            className="md:hidden p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            <span className="sr-only">Open menu</span>
                            <svg
                                className="h-6 w-6 text-gray-700 dark:text-gray-200"
                                fill="none"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                {isMenuOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden py-4">
                        <div className="flex flex-col space-y-4">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={`text-sm font-medium transition-colors hover:text-primary ${pathname === item.href
                                        ? 'text-primary'
                                        : 'text-gray-700 dark:text-gray-200'
                                        }`}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
} 