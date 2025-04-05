'use client';

import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

export const NavThemeSwitcher = () => {
    const [theme, setTheme] = useState<'light' | 'dark'>('dark');

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' || 'dark';
        setTheme(savedTheme);
        document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        document.documentElement.classList.toggle('dark', newTheme === 'dark');
    };

    return (
        <button
            onClick={toggleTheme}
            className="cursor-pointer w-10 h-10 flex items-center justify-center rounded-full bg-black/5 dark:bg-white/5 backdrop-blur-md border border-black/10 border-white/10 flex-shrink-0"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
        >
            {theme === 'dark' ? (
                <Sun className="h-5 w-5 text-yellow-300" />
            ) : (
                <Moon className="h-5 w-5 text-violet-500" />
            )}
        </button>
    );
};
