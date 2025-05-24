'use client';

type FilterProps = {
    filters: {
        category: string;
        priceRange: string;
        sortBy: string;
    };
    onChange: (filters: any) => void;
};

export default function ProductFilters({ filters, onChange }: FilterProps) {
    const categories = [
        { id: 'all', name: 'Toutes les catégories' },
        { id: 'clothing', name: 'Vêtements' },
        { id: 'shoes', name: 'Chaussures' },
        { id: 'accessories', name: 'Accessoires' },
    ];

    const priceRanges = [
        { id: 'all', name: 'Tous les prix' },
        { id: '0-50', name: 'Moins de 50€' },
        { id: '50-100', name: '50€ - 100€' },
        { id: '100-200', name: '100€ - 200€' },
        { id: '200+', name: 'Plus de 200€' },
    ];

    return (
        <div className="space-y-6">
            {/* Catégories */}
            <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-gray-100">
                    Catégories
                </h3>
                <div className="space-y-2">
                    {categories.map((category) => (
                        <label
                            key={category.id}
                            className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-primary cursor-pointer"
                        >
                            <input
                                type="radio"
                                name="category"
                                value={category.id}
                                checked={filters.category === category.id}
                                onChange={(e) =>
                                    onChange({ ...filters, category: e.target.value })
                                }
                                className="form-radio text-primary focus:ring-primary"
                            />
                            <span>{category.name}</span>
                        </label>
                    ))}
                </div>
            </div>

            {/* Fourchette de prix */}
            <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-gray-100">
                    Prix
                </h3>
                <div className="space-y-2">
                    {priceRanges.map((range) => (
                        <label
                            key={range.id}
                            className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-primary cursor-pointer"
                        >
                            <input
                                type="radio"
                                name="priceRange"
                                value={range.id}
                                checked={filters.priceRange === range.id}
                                onChange={(e) =>
                                    onChange({ ...filters, priceRange: e.target.value })
                                }
                                className="form-radio text-primary focus:ring-primary"
                            />
                            <span>{range.name}</span>
                        </label>
                    ))}
                </div>
            </div>

            {/* Bouton de réinitialisation */}
            <button
                onClick={() =>
                    onChange({
                        category: 'all',
                        priceRange: 'all',
                        sortBy: 'newest',
                    })
                }
                className="w-full py-2 px-4 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
            >
                Réinitialiser les filtres
            </button>
        </div>
    );
} 