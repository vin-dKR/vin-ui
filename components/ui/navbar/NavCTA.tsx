'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { Sparkle } from 'lucide-react';

// Define component with TypeScript
export const NavCTA: React.FC = () => (
    <motion.div
        className={cn(
            'hidden md:block w-70 mx-4 p-[1px] rounded-full',
            'bg-gradient-to-br from-white to-purple-950 from-20%'
        )}
        whileHover={{
            background: 'linear-gradient(to top right, white 20%, #5B21B6)', // Matches hover:to-purple-950
            transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] },
        }}
    >
        <motion.button
            whileHover={{
                scale: 1.05,
                skewX: 2, // Subtle horizontal skew for distortion
                rotate: 1, // Slight rotation for dynamic feel
                transition: {
                    type: 'spring',
                    stiffness: 300,
                    damping: 15,
                    mass: 0.5, // Lower mass for snappy response
                },
            }}
            whileTap={{
                scale: 0.95,
                skewX: -1, // Reverse skew on tap for feedback
                transition: {
                    type: 'spring',
                    stiffness: 400,
                    damping: 20,
                    mass: 0.5,
                },
            }}
            className={cn(
                'w-full h-10 rounded-full font-medium text-sm relative overflow-hidden flex items-center justify-center',
                'bg-gradient-to-br from-violet-950 from-20% to-white',
                'hover:shadow-lg hover:shadow-violet-500/20 transition-all group'
            )}
        >
            <span className="relative font-soraSemi text-lg z-10 text-white flex items-center gap-2 cursor-pointer">
                <a href="/components">Get Started</a>
                <Sparkle className="h-4 w-4 group-hover:rotate-180 transition-transform" />
            </span>
        </motion.button>
    </motion.div>
);

