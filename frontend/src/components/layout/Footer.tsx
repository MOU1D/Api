import Link from 'next/link';
import { Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="relative bg-black/95 text-white py-20 overflow-hidden">
            {/* Gradient Background Effect */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-[#3BC4F2] blur-[128px]" />
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-[#7A69F9] blur-[128px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
                    {/* Brand Section */}
                    <div className="md:col-span-4">
                        <h2 className="text-2xl font-light mb-6">L'Art du Luxe</h2>
                        <p className="text-gray-400 leading-relaxed mb-8">
                            Notre maison incarne l'excellence du luxe, 
                            alliant tradition séculaire et innovation contemporaine 
                            pour créer des pièces d'exception.
                        </p>
                        <div className="flex space-x-6">
                            <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Instagram className="w-6 h-6" />
                            </Link>
                            <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Facebook className="w-6 h-6" />
                            </Link>
                            <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Twitter className="w-6 h-6" />
                            </Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="md:col-span-2">
                        <h3 className="text-lg font-light mb-6">Navigation</h3>
                        <ul className="space-y-4">
                            <li>
                                <Link href="/collections" className="text-gray-400 hover:text-white transition-colors">
                                    Collections
                                </Link>
                            </li>
                            <li>
                                <Link href="/nouveautes" className="text-gray-400 hover:text-white transition-colors">
                                    Nouveautés
                                </Link>
                            </li>
                            <li>
                                <Link href="/maison" className="text-gray-400 hover:text-white transition-colors">
                                    La Maison
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="md:col-span-2">
                        <h3 className="text-lg font-light mb-6">Services</h3>
                        <ul className="space-y-4">
                            <li>
                                <Link href="/sur-mesure" className="text-gray-400 hover:text-white transition-colors">
                                    Sur-Mesure
                                </Link>
                            </li>
                            <li>
                                <Link href="/conseil" className="text-gray-400 hover:text-white transition-colors">
                                    Conseil Personnel
                                </Link>
                            </li>
                            <li>
                                <Link href="/entretien" className="text-gray-400 hover:text-white transition-colors">
                                    Entretien
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div className="md:col-span-2">
                        <h3 className="text-lg font-light mb-6">Légal</h3>
                        <ul className="space-y-4">
                            <li>
                                <Link href="/mentions-legales" className="text-gray-400 hover:text-white transition-colors">
                                    Mentions Légales
                                </Link>
                            </li>
                            <li>
                                <Link href="/confidentialite" className="text-gray-400 hover:text-white transition-colors">
                                    Confidentialité
                                </Link>
                            </li>
                            <li>
                                <Link href="/cgv" className="text-gray-400 hover:text-white transition-colors">
                                    CGV
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="md:col-span-2">
                        <h3 className="text-lg font-light mb-6">Contact</h3>
                        <ul className="space-y-4 text-gray-400">
                            <li>
                                <p className="hover:text-white transition-colors">
                                    contact@artduluxe.fr
                                </p>
                            </li>
                            <li>
                                <p className="hover:text-white transition-colors">
                                    +33 1 23 45 67 89
                                </p>
                            </li>
                            <li>
                                <p className="hover:text-white transition-colors">
                                    75008 Paris, France
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 pt-8 mt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-400 text-sm mb-4 md:mb-0">
                            &copy; {new Date().getFullYear()} L'Art du Luxe. Tous droits réservés.
                        </p>
                        <div className="flex space-x-6">
                            <Link href="/faq" className="text-sm text-gray-400 hover:text-white transition-colors">
                                FAQ
                            </Link>
                            <Link href="/presse" className="text-sm text-gray-400 hover:text-white transition-colors">
                                Presse
                            </Link>
                            <Link href="/carrieres" className="text-sm text-gray-400 hover:text-white transition-colors">
                                Carrières
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
} 