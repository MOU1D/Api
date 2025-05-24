import FooterLink from '@/components/ui/FooterLink';

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* About */}
                    <div>
                        <h3 className="font-bold text-lg mb-4">À propos</h3>
                        <p className="text-gray-400">
                            Notre boutique en ligne vous propose une sélection unique de produits de qualité.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-bold text-lg mb-4">Liens rapides</h3>
                        <ul className="space-y-2">
                            <li>
                                <FooterLink href="/products">
                                    Produits
                                </FooterLink>
                            </li>
                            <li>
                                <FooterLink href="/about">
                                    À propos
                                </FooterLink>
                            </li>
                            <li>
                                <FooterLink href="/contact">
                                    Contact
                                </FooterLink>
                            </li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h3 className="font-bold text-lg mb-4">Informations légales</h3>
                        <ul className="space-y-2">
                            <li>
                                <FooterLink href="/privacy">
                                    Politique de confidentialité
                                </FooterLink>
                            </li>
                            <li>
                                <FooterLink href="/terms">
                                    Conditions générales
                                </FooterLink>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="font-bold text-lg mb-4">Contact</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li>Email: contact@boutique.com</li>
                            <li>Tél: +33 1 23 45 67 89</li>
                            <li>Paris, France</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                    <p>&copy; {new Date().getFullYear()} Votre Boutique. Tous droits réservés.</p>
                </div>
            </div>
        </footer>
    );
} 