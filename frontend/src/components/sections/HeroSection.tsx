import Link from 'next/link';

export default function HeroSection() {
    return (
        <section className="relative h-[90vh] flex items-center">
            {/* Background avec overlay gradient */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: 'url("/images/hero-bg.jpg")',
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
            </div>

            {/* Contenu */}
            <div className="container relative z-10">
                <div className="max-w-3xl animate-fade-in">
                    <h1 className="text-white h1 mb-6">
                        Découvrez notre collection exclusive
                    </h1>
                    <p className="text-gray-200 body-large mb-8">
                        Des produits de qualité sélectionnés avec soin pour vous offrir une expérience unique.
                    </p>
                    <Link
                        href="/products"
                        className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-primary hover:bg-primary/90 rounded-full transition-colors duration-200"
                    >
                        Découvrir la collection
                        <svg
                            className="ml-2 w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                            />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    );
} 