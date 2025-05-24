'use client';

type ProductSortProps = {
    value: string;
    onChange: (value: string) => void;
};

export default function ProductSort({ value, onChange }: ProductSortProps) {
    const sortOptions = [
        { id: 'newest', name: 'Plus récents' },
        { id: 'price-asc', name: 'Prix croissant' },
        { id: 'price-desc', name: 'Prix décroissant' },
        { id: 'name-asc', name: 'Nom A-Z' },
        { id: 'name-desc', name: 'Nom Z-A' },
    ];

    return (
        <div className="flex items-center space-x-2">
            <label htmlFor="sort" className="text-sm text-gray-600 dark:text-gray-400">
                Trier par:
            </label>
            <select
                id="sort"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="form-select rounded-lg border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 text-sm focus:ring-primary focus:border-primary"
            >
                {sortOptions.map((option) => (
                    <option key={option.id} value={option.id}>
                        {option.name}
                    </option>
                ))}
            </select>
        </div>
    );
} 