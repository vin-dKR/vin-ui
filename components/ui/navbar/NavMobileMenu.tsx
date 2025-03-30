'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Home, Component, BookUser, Sparkle } from 'lucide-react';
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
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="md:hidden w-[90%] absolute top-full left-1/2 -translate-x-1/2 mt-20 bg-black/50 backdrop-blur-lg border-t border-white/10"
                >
                    <div className="flex flex-col p-4 space-y-3">
                        {mobileNavItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.link}
                                className={cn(
                                    'w-full px-4 py-3 rounded-lg text-base font-medium',
                                    'text-gray-300 hover:text-white hover:bg-white/10',
                                    'transition-colors flex items-center gap-3'
                                )}
                            >
                                {item.icon}
                                <span>{item.name}</span>
                            </Link>
                        ))}
                        <button className={cn(
                            'w-full mt-2 px-4 py-3 rounded-lg font-medium text-base',
                            'bg-gradient-to-r from-violet-600 to-purple-500',
                            'hover:shadow-lg hover:shadow-violet-500/20 transition-all',
                            'flex items-center justify-center gap-2'
                        )}>
                            <span>Get Started</span>
                            <Sparkle className="h-4 w-4" />
                        </button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
