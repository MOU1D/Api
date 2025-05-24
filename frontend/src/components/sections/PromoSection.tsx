import Link from 'next/link';

export default function PromoSection() {
    return (
        <section className="relative h-screen flex items-center justify-center">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-fixed"
                style={{
                    backgroundImage: 'url("/images/promo-bg.jpg")',
                }}
            >
                <div className="absolute inset-0 bg-black/40" />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
                <h2 className="text-white h1 mb-6 animate-fade-in">
                    Collection Printemps-Été 2024
                </h2>
                <p className="text-gray-100 body-large mb-8 animate-slide-up">
                    Découvrez notre nouvelle collection et profitez de -20% sur votre première commande.
                </p>
                <Link
                    href="/products/new"
                    className="inline-flex items-center px-8 py-4 text-lg font-semibold bg-white text-gray-900 hover:bg-gray-100 rounded-full transition-colors duration-200 animate-zoom-in"
                >
                    Voir la collection
                </Link>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                </svg>
            </div>
        </section>
    );
} 