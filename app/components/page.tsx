import React from 'react';
import Link from 'next/link';
import { IconStar } from '@tabler/icons-react';
import { ChevronRight, Home } from 'lucide-react';
import { docsConfig } from '@/lib/docs-config';

const NEW_COMPONENTS = ['Card']
const TRENDING_COMPONENTS = ['Neon Timeline']

export default function ComponentsPage() {
    return (
        <div className="relative p-5 h-auto bg-gradient-to-b dark:from-white/5 from-black/5 from-60% to-transparent rounded rounded-xl text-white">
            {/* Navigation */}

            <div className='flex items-center'>
                <Link href="/"><Home className='w-4 h-4 text-black dark:text-white' /></Link>
                <ChevronRight className='w-3 h-3 text-black dark:text-white mx-2' />
                <span className='text-sm text-black dark:text-white'>components</span>
            </div>

            <div className="container mx-auto px-2 pt-12 text-black dark:text-white">
                <h1 className="text-4xl font-bold mb-4">UI Components</h1>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

                    {/* Main Content */}
                    <div className="md:col-span-4">
                        {/* Search bar */}
                        <div className="mb-8">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Search components..."
                                    className="w-full bg-gray-900/10 border border-gray-700/10 rounded-xl py-3 px-4 pl-12 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
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
                            {docsConfig.sidebarNav
                                .filter((category) => category.title !== "Getting Started")
                                .flatMap((section) => section.items)
                                .map((item, index) => {
                                    const isNew = NEW_COMPONENTS.includes(item.title);
                                    const isTrending = TRENDING_COMPONENTS.includes(item.title);

                                    return (
                                        <Link
                                            key={index}
                                            href={item.href}
                                            className="group bg-gray-900/5 rounded-xl overflow-hidden hover:transform hover:scale-102 transition-all border border-gray-800/30 hover:border-purple-500/50"
                                        >
                                            <div className="aspect-video bg-gray-800/10 p-4 flex items-center justify-center relative">
                                                {/* Component preview would go here */}
                                                <div className="text-5xl text-gray-700 group-hover:text-purple-500 transition-colors">
                                                    {item.title[0]} {/* First letter of component name */}
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
                                                <h3 className="font-medium mb-1 group-hover:text-purple-400 transition-colors">
                                                    {item.title}
                                                </h3>
                                                <p className="text-sm text-gray-400">{item.category}</p>
                                            </div>
                                        </Link>
                                    );
                                })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
