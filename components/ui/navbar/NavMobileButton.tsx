'use client';

import { Menu, X } from 'lucide-react';

interface NavMobileButtonProps {
    isOpen: boolean;
    onClick: () => void;
}

export const NavMobileButton = ({ isOpen, onClick }: NavMobileButtonProps) => (
    <button
        className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 backdrop-blur-md border border-white/10 flex-shrink-0"
        onClick={onClick}
        aria-label="Toggle menu"
    >
        {isOpen ? (
            <X className="h-5 w-5 text-white" />
        ) : (
            <Menu className="h-5 w-5 text-white" />
        )}
    </button>
);
