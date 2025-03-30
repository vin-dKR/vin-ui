'use client';

import Link from 'next/link';
import { Home, Component, BookUser } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavItemsProps {
    isMobile?: boolean;
    onItemClick?: () => void;
}

const navItems = [
    {
        name: 'Home',
        link: '/',
        icon: <Home className="h-4 w-4" />,
    },
    {
        name: 'Components',
        link: '/components',
        icon: <Component className="h-4 w-4" />,
    },
    {
        name: 'Docs',
        link: '/docs',
        icon: <BookUser className="h-4 w-4" />,
    },
];

export const NavItems = ({ isMobile = false, onItemClick }: NavItemsProps) => {
    if (isMobile) {
        return (
            <div className="flex flex-col items-center py-4 space-y-4 px-4">
                {navItems.map((item) => (
                    <Link
                        key={item.name}
                        href={item.link}
                        className="w-full text-center px-4 py-3 rounded-lg text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
                        onClick={onItemClick}
                    >
                        <div className="flex items-center justify-center gap-2">
                            {item.icon}
                            <span>{item.name}</span>
                        </div>
                    </Link>
                ))}
            </div>
        );
    }

    return (
        <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
                <Link
                    key={item.name}
                    href={item.link}
                    className="px-4 py-2 rounded-lg text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
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
