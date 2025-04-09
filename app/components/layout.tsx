"use client"

import React, { useState } from "react"
import { docsConfig } from "@/lib/docs-config";
import DocsSidebar from "@/components/ui/blocks/components/DocSidebar";
import { GalaxyNavbar } from "@/components/ui/blocks/GalaxyNavbar";
import MultiColorBg from "@/components/MultiColorBg";
import { Menu, X } from "lucide-react";

interface ComponentsLayoutProps {
    children: React.ReactNode;
}

const ComponentsLayout = ({ children }: ComponentsLayoutProps) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <div className="relative flex min-h-screen flex-col overflow-hidden w-full">
            <GalaxyNavbar />
            <button
                className="md:hidden fixed right-4 top-[calc(6rem_+_4px)] z-40 p-2 rounded-lg bg-gray-900/10 backdrop-blur-sm border border-gray-800/30"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Mobile Menu Overlay */}
            <div className={`
                md:hidden fixed inset-0 z-30 bg-black/50 backdrop-blur-sm transition-opacity duration-300
                ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}
                `}
                onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Mobile Sidebar (Animated) */}
            <aside className={`
                    md:hidden fixed top-[calc(5rem_+_10px)] right-4 z-35 w-[calc(100%-2rem)] max-w-xs
                    bg-gradient-to-b dark:from-white/5 from-black/5 from-60% to-transparent backdrop-blur-lg
                    rounded-xl p-4 border border-gray-800/30 shadow-xl
                    transition-all duration-300 transform
                    ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-[120%]'}
                    `}>
                <DocsSidebar items={docsConfig.sidebarNav} />
            </aside>

            <MultiColorBg width="800" height="700" className="absolute opacity-50 dark:opacity-25 bottom-[700px] -left-[200px] lg:bottom-[400px] lg:left-[00px]" />
            <MultiColorBg width="1600" height="1600" className="absolute opacity-50 dark:opacity-25 -left-[200px] lg:-bottom-[400px] lg:left-[500px]" />

            <div className="flex flex-col md:flex-row mx-3 md:mx-auto relative gap-4 lg:gap-10">
                <aside
                    className="fixed px-4 pr-2 pt-4 bg-gradient-to-b dark:from-white/5 bg-opacity-50 from-black/5 from-60% to-transparent backdrop-blur-lg rounded-xl top-[calc(5rem_+_35px)] z-30 ml-2 hidden h-[calc(90vh-6.5rem)] w-[220px] shrink-0 md:sticky md:block"
                >
                    <DocsSidebar items={docsConfig.sidebarNav} />
                </aside>

                <main
                    className="md:mx-auto overflow-y-auto w-full mt-30"
                >
                    <div className="w-full ">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    )
}


export default ComponentsLayout
