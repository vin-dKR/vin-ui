'use client';

import { motion, useTransform } from 'framer-motion';
import { useScroll } from 'framer-motion';

export const NavBackground = ({ flarePosition }: NavBackgroundProps) => {
    const { scrollY } = useScroll();
    const opacity = useTransform(scrollY, [0, 100], [0.5, 0.2]);

    return (
        <>
            <motion.div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: `radial-gradient(circle at ${flarePosition.x}% ${flarePosition.y}%, rgba(124, 58, 237, 0.15) 0%, transparent 30%)`,
                    opacity,
                    transition: 'opacity 0.3s ease',
                }}
            />
            <div className="absolute inset-0 opacity-80 dark:opacity-30 pointer-events-none">
                <div className="absolute inset-0 bg-[url('/noise.svg')] bg-[length:200px] mix-blend-overlay" />
            </div>
        </>
    );
};
