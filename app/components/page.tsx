"use client"

import React, { useState } from 'react';
import Breadcrumbs from '@/components/ui/blocks/components/Breadcrumbs';
import SearchBar from '@/components/ui/blocks/components/SearchBar';
import CategoryFilter from '@/components/ui/blocks/components/CategoryFilter';
import ComponentsGrid from '@/components/ui/blocks/components/ComponentGrid';
import MetadataBar from '@/components/ui/blocks/components/MetadataBar';


export default function ComponentsPage() {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [searchQuery, setSearchQuery] = useState('');


    return (
        <div className='flex w-full flex-row gap-8'>
            <div className="p-5 w-full bg-gradient-to-b dark:from-white/5 from-black/5 from-60% to-transparent rounded-xl text-white">
                <Breadcrumbs
                    currentPage="Components"
                />

                <div className="container mx-auto px-2 pt-12 text-black dark:text-white">
                    <h1 className="text-4xl font-bold mb-4">UI Components</h1>

                    <div className="gap-8">
                        <div className="md:col-span-4">
                            <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
                            <CategoryFilter
                                selectedCategory={selectedCategory}
                                setSelectedCategory={setSelectedCategory}
                            />
                            <ComponentsGrid
                                selectedCategory={selectedCategory}
                                searchQuery={searchQuery}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div
                className="fixed px-4 pt-4 bg-gradient-to-b dark:from-white/5 from-black/5 from-60% to-transparent backdrop-blur-lg rounded-xl top-[calc(5rem_+_35px)] z-30 ml-2 hidden h-[calc(90vh-6.5rem)] w-[220px] shrink-0 md:sticky md:block"
            >
                <MetadataBar
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                />
            </div>
        </div>
    )
}
