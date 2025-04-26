'use client';

import Link from 'next/link';
import { Component } from 'lucide-react';

const navItems = [
    {
        name: 'Components',
        link: '/components',
        icon: <Component className="h-4 w-4" />,
    },
];

export const NavItems = () => {
    return (
        <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
                <Link
                    key={item.name}
                    href={item.link}
                    className="px-4 py-2 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5 transition-colors"
                >
                    <div className="flex items-center gap-2">
                        {item.icon}
                        <span>{item.name}</span>
                    </div>
                </Link>
            ))}
        </div>
    );
};
