'use client';

import { Menu, X } from 'lucide-react';
import GradientBlob from '../customBtn/GradientBlob';

export const NavMobileButton = ({ isOpen, onClickAction }: NavMobileButtonProps) => (
    <button
        className="md:hidden w-10 h-10 flex items-center justify-center rounded-full bg-black/5 dark:bg-white/5 backdrop-blur-md border border-balck/10 dark:border-white/10 flex-shrink-0"
        onClick={onClickAction}
        aria-label="Toggle menu"
    >
        <GradientBlob side='right'>
            {isOpen ? (
                <X className="h-5 w-5 text-black dark:text-white" />
            ) : (
                <Menu className="h-5 w-5 text-black dark:text-white" />
            )}
        </GradientBlob>
    </button>
);
