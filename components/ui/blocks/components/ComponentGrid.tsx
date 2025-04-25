import { docsConfig } from '@/lib/docs-config';
import GlowingCard from './GlowingCard';

const NEW_COMPONENTS = ['Random Emoji']
const TRENDING_COMPONENTS = ['Neon Timeline', 'Neon Underline']

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
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 lg:gap-6 min-w-md xl:min-w-3xl">
            {filteredComponents.map((item, index) => {
                const isNew = NEW_COMPONENTS.includes(item.title);
                const isTrending = TRENDING_COMPONENTS.includes(item.title);

                return (
                    <a key={index} href={item.href} className='w-full'>
                        <GlowingCard className="h-full w-full group-hover:border-purple-500/50">
                            <div className="aspect-video bg-gray-900/30 p-4 flex items-center justify-center relative">
                                <div className="text-5xl bg-white/5 w-full h-full rounded-xl text-gray-700 group-hover:text-purple-500 transition-colors">
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
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="12"
                                                height="12"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                            </svg>
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
                        </GlowingCard>
                    </a>
                );
            })}
        </div>
    )
}

export default ComponentsGrid
