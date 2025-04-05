'use client';

import { Sun, Moon } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export const NavThemeSwitcher = () => {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
    };


    if (!mounted) return <Sun className='h-5 w-5 text-yellow-300' />

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
