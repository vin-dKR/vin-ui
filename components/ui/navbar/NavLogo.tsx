'use client';

import Link from 'next/link';
import GradientBlob from '../customBtn/GradientBlob';

export const NavLogo = () => (
    <div className="w-full">
        <Link href="/" className="flex items-center gap-2 h-full">
            <GradientBlob side='left' >
                VU
            </GradientBlob>
            <span className="w-full sm:inline font-soraSemi text-2xl bg-gradient-to-r dark:from-white dark:to-purple-400 from-black to-purple-400 bg-clip-text text-transparent">
                Vin-UI
            </span>
        </Link>
    </div>
);
