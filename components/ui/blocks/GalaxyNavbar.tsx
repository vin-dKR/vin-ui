'use client';

import { useState, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { NavLogo } from '../navbar/NavLogo';
import { NavMobileButton } from '../navbar/NavMobileButton';
import { NavCTA } from '../navbar/NavCTA';
import { NavItems } from '../navbar/NavItems';
import { NavBackground } from '../navbar/NavBackground';
import { NavThemeSwitcher } from '../navbar/NavThemeSwitcher';

export const GalaxyNavbar = () => {
    const { scrollY } = useScroll();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [flarePosition, setFlarePosition] = useState({ x: 50, y: 50 });
    const navRef = useRef<HTMLElement>(null);

    const widthScale = useTransform(scrollY, [0, 100], [1, 0.9]);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!navRef.current) return;
        const rect = navRef.current.getBoundingClientRect();
        setFlarePosition({
            x: ((e.clientX - rect.left) / rect.width) * 100,
            y: ((e.clientY - rect.top) / rect.height) * 100
        });
    };

    return (
        <AnimatePresence>
            <motion.nav
                ref={navRef}
                onMouseMove={handleMouseMove}
                style={{ scaleX: widthScale }}
                className={cn(
                    'fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-[5000]',
                    'backdrop-blur-xl bg-white/5 dark:bg-black/20',
                    'border border-white/10',
                    mobileMenuOpen ? 'rounded-xl' : 'rounded-full',
                    'shadow-2xl shadow-purple-500/30',
                    'overflow-hidden w-[95%] md:w-auto h-14 md:h-16'
                )}
            >
                <NavBackground flarePosition={flarePosition} />

                <div className="relative flex justify-between items-center h-full px-4 md:px-6">
                    <NavLogo />


                    <NavItems />
                    <NavCTA />
                    <div className="flex items-center gap-2">
                        <NavThemeSwitcher />
                        <NavMobileButton
                            isOpen={mobileMenuOpen}
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        />
                    </div>
                </div>

                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="md:hidden overflow-hidden"
                        >
                            <NavItems isMobile onItemClick={() => setMobileMenuOpen(false)} />
                            <div className="px-4 pb-4">
                                <button className={cn(
                                    'w-full px-6 py-3 rounded-lg font-medium text-sm relative overflow-hidden',
                                    'bg-gradient-to-br from-violet-600 to-purple-500',
                                    'hover:shadow-lg hover:shadow-violet-500/20 transition-all'
                                )}>
                                    <span className="relative z-10 flex items-center justify-center gap-1">
                                        <span>Get Started</span>
                                    </span>
                                </button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.nav>
        </AnimatePresence>
    );
};
