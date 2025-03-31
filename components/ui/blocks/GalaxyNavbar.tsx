'use client';

import { useState, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { NavLogo } from '../navbar/NavLogo';
import { NavThemeSwitcher } from '../navbar/NavThemeSwitcher';
import { NavMobileButton } from '../navbar/NavMobileButton';
import { NavCTA } from '../navbar/NavCTA';
import { NavItems } from '../navbar/NavItems';
import { NavBackground } from '../navbar/NavBackground';
import { NavMobileMenu } from '../navbar/NavMobileMenu';

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

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
        console.log(mobileMenuOpen)
    };

    return (
        <>
            <AnimatePresence>
                <motion.nav
                    ref={navRef}
                    onMouseMove={handleMouseMove}
                    style={{ scaleX: widthScale }}
                    className={cn(
                        'fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-[5000]',
                        'backdrop-blur-xl bg-white/5 dark:bg-black/20',
                        'border border-black/10 dark:border-white/10 rounded-full',
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
                                onClickAction={toggleMobileMenu}
                            />
                        </div>
                    </div>

                </motion.nav>
            </AnimatePresence>

            <NavMobileMenu isOpen={mobileMenuOpen} />
        </>
    );
};
