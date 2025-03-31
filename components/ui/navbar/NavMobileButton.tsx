'use client';

import { Menu, X } from 'lucide-react';

interface NavMobileButtonProps {
    isOpen: boolean;
    onClickAction: () => void;
}

export const NavMobileButton = ({ isOpen, onClickAction }: NavMobileButtonProps) => (
    <button
        className="md:hidden w-10 h-10 flex items-center justify-center rounded-full bg-black/5 dark:bg-white/5 backdrop-blur-md border border-balck/10 dark:border-white/10 flex-shrink-0"
        onClick={onClickAction}
        aria-label="Toggle menu"
    >
        {isOpen ? (
            <X className="h-5 w-5 text-black dark:text-white" />
        ) : (
            <Menu className="h-5 w-5 text-black dark:text-white" />
        )}
    </button>
);
