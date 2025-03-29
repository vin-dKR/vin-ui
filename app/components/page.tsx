import React from 'react';
import Link from 'next/link';
import { IconStar } from '@tabler/icons-react';

const COMPONENT_CATEGORIES = [
    { name: 'Animation', components: ['Neon Timeline'] },
    { name: 'Layout', components: ['Bento Grid', 'Container', 'Flex', 'Grid'] },
    { name: 'Display', components: ['Card', 'Carousel', 'Hover Card', 'Tabs'] },
    { name: 'Forms', components: ['Button', 'Input', 'Checkbox', 'Select', 'Radio'] },
    { name: 'Feedback', components: ['Alert', 'Toast', 'Progress', 'Skeleton'] },
    { name: 'Navigation', components: ['Navbar', 'Pagination', 'Breadcrumb', 'Sidebar'] },
    { name: 'Overlays', components: ['Modal', 'Drawer', 'Tooltip', 'Popover'] },
    { name: 'Data Display', components: ['Table', 'Avatar', 'Badge', 'Tag'] },
];

// Mark new or trending components
const NEW_COMPONENTS = ['Motion Card', 'Bento Grid', 'Shimmer'];
const TRENDING_COMPONENTS = ['Carousel', 'Modal', 'Tabs'];

export default function ComponentsPage() {
    return (
        <div className="min-h-screen bg-black text-white">
            {/* Navigation */}
            <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                <Link href="/" className="flex items-center gap-2">
                    <div className="text-3xl font-bold">
                        <span className="text-purple-500">V</span>in UI
                    </div>
                </Link>
                <div className="flex gap-6">
                    <Link href="/components" className="text-purple-400 hover:text-purple-300 transition-colors">
                        Components
                    </Link>
                    <Link href="/docs" className="hover:text-purple-400 transition-colors">
                        Docs
                    </Link>
                    <Link href="https://github.com/yourusername/vin-ui" className="hover:text-purple-400 transition-colors">
                        GitHub
                    </Link>
                </div>
            </nav>

            <div className="container mx-auto px-6 py-12">
                <h1 className="text-4xl font-bold mb-8">UI Components</h1>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                    {/* Sidebar */}
                    <div className="md:col-span-3 space-y-6">
                        <div className="bg-gray-900 rounded-xl p-6">
                            <h3 className="text-xl font-bold mb-4">Categories</h3>
                            <ul className="space-y-2">
                                {COMPONENT_CATEGORIES.map((category) => (
                                    <li key={category.name}>
                                        <button className="w-full text-left py-2 px-3 rounded hover:bg-gray-800 transition-colors">
                                            {category.name}
                                            <span className="text-gray-400 text-sm ml-2">({category.components.length})</span>
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-gradient-to-br from-purple-900 to-pink-900 rounded-xl p-6">
                            <h3 className="text-xl font-bold mb-4">Need Help?</h3>
                            <p className="text-gray-200 mb-4">Check our documentation or join our Discord community for support.</p>
                            <Link
                                href="/docs"
                                className="inline-block bg-white bg-opacity-20 text-white px-4 py-2 rounded-md hover:bg-opacity-30 transition-all"
                            >
                                View Documentation
                            </Link>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="md:col-span-9">
                        {/* Search bar */}
                        <div className="mb-8">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Search components..."
                                    className="w-full bg-gray-900 border border-gray-700 rounded-xl py-3 px-4 pl-12 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                />
                                <svg
                                    className="absolute left-4 top-3.5 text-gray-400"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <circle cx="11" cy="11" r="8"></circle>
                                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                                </svg>
                            </div>
                        </div>

                        {/* Components Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {COMPONENT_CATEGORIES.flatMap((category) =>
                                category.components.map((component) => {
                                    const slug = component.toLowerCase().replace(/\s+/g, '-');
                                    const isNew = NEW_COMPONENTS.includes(component);
                                    const isTrending = TRENDING_COMPONENTS.includes(component);

                                    return (
                                        <Link
                                            key={component}
                                            href={`/components/${slug}`}
                                            className="group bg-gray-900 rounded-xl overflow-hidden hover:transform hover:scale-102 transition-all border border-gray-800 hover:border-purple-500/50"
                                        >
                                            <div className="aspect-video bg-gray-800 p-4 flex items-center justify-center relative">
                                                {/* Component preview would go here */}
                                                <div className="text-5xl text-gray-700 group-hover:text-purple-500 transition-colors">
                                                    {component[0]}
                                                </div>

                                                {/* Tags */}
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
                                                <h3 className="font-medium mb-1 group-hover:text-purple-400 transition-colors">{component}</h3>
                                                <p className="text-sm text-gray-400">{category.name}</p>
                                            </div>
                                        </Link>
                                    );
                                })
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
