'use client';
import { cn } from '@/lib/utils';

import { motion } from 'framer-motion';
import { Sparkle } from 'lucide-react';

export const NavCTA = () => (
    <div className="hidden md:block w-36 mx-4 flex-shrink-0">
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={cn(
                'w-full h-10 rounded-full font-medium text-sm relative overflow-hidden flex items-center justify-center',
                'bg-gradient-to-br from-violet-600 to-purple-500',
                'hover:shadow-lg hover:shadow-violet-500/20 transition-all group'
            )}
        >
            <span className="relative z-10 flex items-center gap-1">
                <span>Get Started</span>
                <Sparkle className="h-4 w-4 group-hover:rotate-180 transition-transform" />
            </span>
        </motion.button>
    </div>
);
