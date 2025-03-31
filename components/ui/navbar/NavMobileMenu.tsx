'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Component, BookUser, Sparkle } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const mobileNavItems = [
    {
        name: 'Components',
        link: '/components',
        icon: <Component className="h-5 w-5" />,
    },
    {
        name: 'Docs',
        link: '/docs',
        icon: <BookUser className="h-5 w-5" />,
    },
];

export const NavMobileMenu = ({ isOpen }: { isOpen: boolean }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.2, ease: 'easeInOut' }}
                    className="md:hidden fixed inset-x-0 top-19 z-50 w-[90%] left-1/2 -translate-x-1/2 bg-white/30 dark:bg-black/80 backdrop-blur-lg border-t border-black/30 dark:border-white/10 rounded-b-lg border-b"
                >
                    <div className="flex flex-col p-4 space-y-3">
                        {mobileNavItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.link}
                                className={cn(
                                    'w-full px-4 py-3 rounded-lg text-base font-medium',
                                    'text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white hover:bg-gray-200 dark:hover:bg-white/10',
                                    'transition-colors flex items-center justify-center gap-3'
                                )}
                                onClick={() => { }}
                            >
                                {item.icon}
                                <span>{item.name}</span>
                            </Link>
                        ))}
                        <button className={cn(
                            'w-full mt-2 px-4 py-3 rounded-lg font-medium text-base',
                            'bg-gradient-to-r from-violet-600 to-purple-500',
                            'hover:shadow-lg hover:shadow-violet-500/20 transition-all',
                            'flex items-center justify-center gap-2 group'
                        )}>
                            <span>Get Started</span>
                            <Sparkle className="h-4 w-4 group-hover:rotate-180 transition-transform" />
                        </button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
