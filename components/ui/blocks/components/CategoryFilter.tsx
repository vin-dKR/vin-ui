import { docsConfig } from '@/lib/docs-config';

const CategoryFilter = ({ selectedCategory, setSelectedCategory }: CategoryFilterProps) => {

    const categories = Array.from(new Set(
        docsConfig.sidebarNav
            .flatMap(section => section.items)
            .map(item => item.category)
            .filter(Boolean)
    ))

    return (
        <div className="flex flex-wrap gap-2 mb-6">
            <button
                onClick={() => setSelectedCategory(null)}
                className={`px-3 py-1 cursor-pointer rounded-full text-sm ${!selectedCategory ? 'bg-purple-500 text-white' : 'bg-gray-200 dark:bg-gray-800'}`}
            >
                All
            </button>
            {categories.map(category => (
                <button
                    key={category}
                    onClick={() => setSelectedCategory(category || null)}
                    className={`px-3 py-1 cursor-pointer rounded-full text-sm ${selectedCategory === category ? 'bg-purple-500 text-white' : 'bg-gray-200 dark:bg-gray-800'}`}
                >
                    {category}
                </button>
            ))}
        </div>
    )
}

export default CategoryFilter
