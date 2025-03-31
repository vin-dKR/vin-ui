'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export const NavLogo = () => (
    <div className="w-24 md:w-28 flex-shrink-0">
        <Link href="/" className="flex items-center gap-2 h-full">
            <motion.div
                whileHover={{ rotate: 15 }}
                className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-600 to-purple-400 flex items-center justify-center flex-shrink-0"
            >
                <span className="text-white font-bold text-sm">VU</span>
            </motion.div>
            <span className="sm:inline font-bold text-sm bg-gradient-to-r dark:from-white dark:to-purple-400 from-black to-purple-400 bg-clip-text text-transparent">
                Vin-UI
            </span>
        </Link>
    </div>
);
