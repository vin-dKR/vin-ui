import { docsConfig } from '@/lib/docs-config';

const MetadataBar = ({ selectedCategory, setSelectedCategory }: MetadataBarProps) => {
    const categories = Array.from(new Set(
        docsConfig.sidebarNav
            .flatMap(section => section.items)
            .map(item => item.category)
            .filter(Boolean)
    ))

    return (
        <div className="space-y-6 ">
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Categories</h3>
            <div className="space-y-2">
                <button
                    onClick={() => setSelectedCategory(null)}
                    className={`block w-full cursor-pointer text-left px-2 py-1 text-sm rounded-md ${!selectedCategory ? 'bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-200' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100/60 dark:hover:bg-gray-800/60'}`}
                >
                    All Components
                </button>
                {categories.map(category => (
                    <button
                        key={category}
                        onClick={() => setSelectedCategory(category || null)}
                        className={`block w-full cursor-pointer text-left px-2 py-1 text-sm rounded-md ${selectedCategory === category ? 'bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-200' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100/50 dark:hover:bg-gray-800/60'}`}
                    >
                        {category}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default MetadataBar
