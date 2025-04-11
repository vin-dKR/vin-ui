"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { IconCode, IconCopy, IconBrandNpm, IconBrandGithub, IconBrandTwitter } from '@tabler/icons-react';
import MetadataBar from '@/components/ui/blocks/components/MetadataBar';

export default function ComponentPage({ params }: { params: { slug: string } }) {

    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [searchQuery, setSearchQuery] = useState('');
    const componentName = params.slug
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');


    return (
        <div className=" flex mx-auto">

            <div className="hidden md:block fixed right-70 top-[calc(5rem_+_1rem)] h-[calc(100vh-6.5rem)] w-[260px] p-4 overflow-y-auto">
                <div className="bg-gradient-to-b dark:from-white/5 from-black/5 from-60% to-transparent backdrop-blur-lg rounded-xl h-full p-4">
                    <MetadataBar
                        selectedCategory={selectedCategory}
                        setSelectedCategory={setSelectedCategory}
                    />
                </div>
            </div>


        </div>
    );
}
