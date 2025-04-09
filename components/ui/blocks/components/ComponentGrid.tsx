import Link from 'next/link';
import { IconStar } from '@tabler/icons-react';
import { docsConfig } from '@/lib/docs-config';

const NEW_COMPONENTS = ['Card']
const TRENDING_COMPONENTS = ['Neon Timeline']

const ComponentsGrid = ({ selectedCategory, searchQuery }: ComponentsGridProps) => {
    const filteredComponents = docsConfig.sidebarNav
        .filter(category => category.title !== "Getting Started")
        .flatMap(section => section.items)
        .filter(item => {
            const matchesCategory = !selectedCategory || item.category === selectedCategory;
            const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                (item.category && item.category.toLowerCase().includes(searchQuery.toLowerCase()));
            return matchesCategory && matchesSearch;
        })

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredComponents.map((item, index) => {
                const isNew = NEW_COMPONENTS.includes(item.title);
                const isTrending = TRENDING_COMPONENTS.includes(item.title);

                return (
                    <Link
                        key={index}
                        href={item.href}
                        className="group bg-gray-900/5 rounded-xl overflow-hidden hover:transform hover:scale-102 transition-all border border-gray-800/30 hover:border-purple-500/50"
                    >
                        <div className="aspect-video bg-gray-800/10 p-4 flex items-center justify-center relative">
                            <div className="text-5xl text-gray-700 group-hover:text-purple-500 transition-colors">
                                {item.title[0]}
                            </div>
                            <div className="absolute top-2 right-2 flex gap-2">
                                {isNew && (
                                    <span className="text-xs bg-green-500 text-white px-2 py-0.5 rounded-full">
                                        New
                                    </span>
                                )}
                                {isTrending && (
                                    <span className="text-xs bg-orange-500 text-white px-2 py-0.5 rounded-full flex items-center gap-1">
                                        <IconStar size={12} />
                                        Trending
                                    </span>
                                )}
                            </div>
                        </div>
                        <div className="p-4">
                            <h3 className="font-medium mb-1 group-hover:text-purple-400 transition-colors">
                                {item.title}
                            </h3>
                            <p className="text-sm text-gray-400">{item.category}</p>
                        </div>
                    </Link>
                );
            })}
        </div>
    )
}

export default ComponentsGrid
