'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export const NavLogo = () => (
    <div className="w-full">
        <Link href="/" className="flex items-center gap-2 h-full">
            <div className='bg-gradient-to-br bg-linear-30 from-white to-purple-950 from-20% p-[1px] rounded-full'>
                <motion.div
                    whileHover={{ rotate: 15 }}
                    className="w-12 h-12 rounded-full bg-gradient-to-br from-violet-950 from-20% to-white flex items-center justify-center flex-shrink-0"
                >
                    <span className="text-white text-justify mt-1 center text-shadow-md font-soraBold text-xl">VU</span>
                </motion.div>
            </div>
            <span className="w-full sm:inline font-soraSemi text-3xl bg-gradient-to-r dark:from-white dark:to-purple-400 from-black to-purple-400 bg-clip-text text-transparent">
                Vin-UI
            </span>
        </Link>
    </div>
);
