'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useMotionValueEvent, useTransform, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { Home, Component, BookUser, Mail, ChevronDown, Sparkle } from 'lucide-react';

type NavItem = {
    name: string;
    link: string;
    icon?: React.ReactNode;
    subItems?: NavItem[];
};

export const GalaxyNavbar = () => {
    const { scrollY } = useScroll();
    const [isCompressed, setIsCompressed] = useState(false);
    const [hoveredItem, setHoveredItem] = useState<string | null>(null);
    const [flarePosition, setFlarePosition] = useState({ x: 50, y: 50 });
    const navRef = useRef<HTMLElement>(null);

    // Transform scroll position to width scale (90% to 100%)
    const widthScale = useTransform(scrollY, [0, 100], [1, 0.9]);
    const paddingScale = useTransform(scrollY, [0, 100], [1, 0.8]);

    useMotionValueEvent(scrollY, 'change', (latest) => {
        setIsCompressed(latest > 50);
    });

    // Update flare position based on mouse
    const handleMouseMove = (e: React.MouseEvent) => {
        if (!navRef.current) return;
        const rect = navRef.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        setFlarePosition({ x, y });
    };

    const navItems: NavItem[] = [
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
        {
            name: 'Contact',
            link: '/contact',
            icon: <Mail className="h-4 w-4" />,
        },
    ];

    return (
        <>
            {/* Floating Navbar Container */}
            <AnimatePresence>
                <motion.nav
                    ref={navRef}
                    onMouseMove={handleMouseMove}
                    style={{
                        scaleX: widthScale,
                        paddingLeft: useTransform(paddingScale, [0.8, 1], ['2rem', '4rem']),
                        paddingRight: useTransform(paddingScale, [0.8, 1], ['2rem', '4rem']),
                    }}
                    className={cn(
                        'fixed top-6 left-1/2 -translate-x-1/2 z-[5000]',
                        'backdrop-blur-xl bg-white/5 dark:bg-black/20',
                        'border border-white/10 rounded-full',
                        'shadow-2xl shadow-purple-500/30',
                        'overflow-hidden'
                    )}
                >
                    {/* Interactive Light Flare */}
                    <motion.div
                        className="absolute inset-0 pointer-events-none"
                        style={{
                            background: `radial-gradient(circle at ${flarePosition.x}% ${flarePosition.y}%, rgba(124, 58, 237, 0.15) 0%, transparent 70%)`,
                            opacity: useTransform(scrollY, [0, 100], [0.5, 0.2]),
                            transition: 'opacity 0.3s ease',
                        }}
                    />

                    {/* Light Grains Texture */}
                    <div className="absolute inset-0 opacity-10 pointer-events-none">
                        <div className="absolute inset-0 bg-[url('/noise.svg')] bg-[length:200px] mix-blend-overlay" />
                    </div>

                    <div className="relative flex justify-between items-center h-16">
                        {/* Logo - Shrinks on scroll */}
                        <motion.div
                            animate={{
                                scale: isCompressed ? 0.85 : 1,
                            }}
                            transition={{ type: 'spring', damping: 20 }}
                        >
                            <Link href="/" className="flex items-center gap-2">
                                <motion.div
                                    whileHover={{ rotate: 15 }}
                                    className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-600 to-purple-400 flex items-center justify-center"
                                >
                                    <span className="text-white font-bold text-sm">VU</span>
                                </motion.div>
                                <motion.span
                                    animate={{
                                        opacity: isCompressed ? 0 : 1,
                                        x: isCompressed ? -10 : 0,
                                    }}
                                    className="font-bold text-sm bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
                                >
                                    Vin-UI
                                </motion.span>
                            </Link>
                        </motion.div>

                        {/* Navigation Items with Light Grains on Hover */}
                        <div className="flex items-center gap-1">
                            {navItems.map((item) => (
                                <motion.div
                                    key={item.name}
                                    onHoverStart={() => setHoveredItem(item.name)}
                                    onHoverEnd={() => setHoveredItem(null)}
                                    className="relative px-4 py-2 rounded-full"
                                >
                                    <Link
                                        href={item.link}
                                        className="flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-white transition-colors"
                                    >
                                        {item.icon}
                                        <span>{item.name}</span>
                                    </Link>

                                    {/* Hover Light Grains Effect */}
                                    <AnimatePresence>
                                        {hoveredItem === item.name && (
                                            <>
                                                <motion.div
                                                    initial={{ opacity: 0, scale: 0.9 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    exit={{ opacity: 0 }}
                                                    className="absolute inset-0 rounded-full pointer-events-none"
                                                    style={{
                                                        background: `radial-gradient(circle at ${flarePosition.x}% ${flarePosition.y}%, rgba(255, 255, 255, 0.1) 0%, transparent 70%)`,
                                                        border: '1px solid rgba(255, 255, 255, 0.05)',
                                                    }}
                                                />
                                                <motion.div
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 0.3 }}
                                                    exit={{ opacity: 0 }}
                                                    className="absolute inset-0 bg-[url('/noise.png')] bg-[length:100px] mix-blend-overlay rounded-full pointer-events-none"
                                                />
                                                <motion.div
                                                    initial={{ opacity: 0, y: 5 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0 }}
                                                    className="absolute -bottom-1 left-1/2 -translate-x-1/2"
                                                >
                                                    <Sparkle className="h-4 w-4 text-violet-400" />
                                                </motion.div>
                                            </>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            ))}
                        </div>

                        {/* CTA Button with Shimmer */}
                        <motion.div
                            animate={{
                                scale: isCompressed ? 0.9 : 1,
                            }}
                            transition={{ type: 'spring', damping: 20 }}
                        >
                            <button className={cn(
                                'px-6 py-2 rounded-full font-medium text-sm relative overflow-hidden',
                                'bg-gradient-to-br from-violet-600 to-purple-500',
                                'hover:shadow-lg hover:shadow-violet-500/20 transition-all',
                                'group'
                            )}>
                                <span className="relative z-10 flex items-center gap-1">
                                    <span>Get Started</span>
                                    <Sparkle className="h-4 w-4 group-hover:rotate-180 transition-transform" />
                                </span>
                                <motion.div
                                    initial={{ x: -100, opacity: 0 }}
                                    animate={{ x: hoveredItem ? 200 : -100, opacity: 0.4 }}
                                    transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
                                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                                />
                            </button>
                        </motion.div>
                    </div>
                </motion.nav>
            </AnimatePresence>
        </>
    );
};
