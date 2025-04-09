import MultiColorBg from '@/components/MultiColorBg';
import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

interface FooterProps {
    companyName?: string;
}

const Footer: React.FC<FooterProps> = ({ companyName = "Vin-UI" }) => {
    const [mounted, setMounted] = useState<boolean>(false);
    const { theme, setTheme } = useTheme()

    // Check for saved theme preference or use system preference on initial load
    useEffect(() => {
        setMounted(true)
    }, []);

    // Toggle theme function
    const toggleTheme = (): void => {
        setTheme(theme === "dark" ? "light" : "dark")
    };

    if (!mounted) return <div></div>

    return (
        <footer className="relative w-full py-16 bg-white dark:bg-black/90 transition-colors duration-300 border-t border-gray-200 dark:border-gray-700 backdrop-blur-lg">
            <MultiColorBg className='absolute w-42 top-[-400px] left-[-900px] lg:top-[-350px] lg:left-0 lg:w-full z-10' />
            <div className="container mx-auto lg:w-[60%] px-6 z-20">
                <div className="flex flex-col md:flex-row justify-between lg:items-center">
                    <div className="mb-10 md:mb-0">
                        <h3 className="text-2xl text-shadow-md font-bold bg-gradient-to-r from-violet-500 to-purple-300 bg-clip-text text-transparent">
                            Vin-UI
                        </h3>
                        <p className="text-gray-400 mt-2 text-shadow-sm z-40">For those who refuse to compromise</p>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-6 z-40 text-shadow-sm">
                        {["GitHub", "Templates", "Components", "Documentation"].map((item) => (
                            <a
                                key={item}
                                href="https://github.com/vin-dKR/vin-ui"
                                className="text-gray-400 hover:text-white transition-colors font-medium"
                            >
                                {item}
                            </a>
                        ))}
                    </div>
                </div>

                <div className="mt-10 pt-6 border-t border-gray-200 dark:border-gray-700 flex flex-col md:flex-row justify-between items-center gap-4">
                    {/* Copyright */}
                    <div className="text-gray-500 dark:text-gray-400">
                        &copy; {new Date().getFullYear()} {companyName}. All rights reserved.
                    </div>

                    {/* Bottom links */}
                    <div className="flex hidden lg:block flex-wrap justify-center gap-6">
                        <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Terms of Service</a>
                        <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Privacy Policy</a>
                        <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Cookie Policy</a>
                    </div>

                    {/* Theme toggle button */}
                    <button
                        onClick={toggleTheme}
                        className="flex items-center gap-2 px-3 py-2 rounded-md bg-gray-700/5 dark:bg-gray-700/20 text-gray-700 dark:text-gray-300 hover:bg-gray-300/40 dark:hover:bg-gray-600/40 transition-colors border border-white dark:border-black/10 border-3 z-40 outline-hidden"
                    >
                        <span>{theme === "light" ? '🌙' : '☀️'}</span>
                        <span>{theme === "light" ? 'Dark Mode' : 'Light Mode'}</span>
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
