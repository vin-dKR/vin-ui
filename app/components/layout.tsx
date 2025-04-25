"use client"

import React, { useState } from "react"
import { docsConfig } from "@/lib/docs-config";
import DocsSidebar from "@/components/ui/blocks/components/DocSidebar";
import { GalaxyNavbar } from "@/components/ui/blocks/GalaxyNavbar";
import MultiColorBg from '@/components/ui/hero/MultiColorBg';
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
                className="lg:hidden fixed right-4 top-[calc(6rem_+_4px)] z-40 p-2 rounded-lg bg-gray-900/10 backdrop-blur-sm border border-gray-800/30"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Mobile Menu Overlay */}
            <div className={`
                lg:hidden fixed inset-0 z-30 bg-black/5 backdrop-blur-sm transition-opacity duration-300
                ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}
                `}
                onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Mobile Sidebar (Animated) */}
            <aside className={`
                    bg-gradient-to-b dark:from-white/5 from-black/5 from-50% to-transparent backdrop-blur-md
                    rounded rounded-xl p-4
                    transition-all duration-300 transform
                    lg:hidden fixed top-[calc(5rem_+_10px)] right-4 z-35 w-[calc(100%-2rem)] max-w-xs
                    ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-[120%]'}
                    `}>
                <DocsSidebar items={docsConfig.sidebarNav} />
            </aside>

            <MultiColorBg width="800" height="700" className="absolute fixed opacity-50 dark:opacity-25 bottom-[700px] -left-[200px] lg:bottom-[400px] lg:left-[00px]" />
            <MultiColorBg width="1600" height="1600" className="absolute fixed opacity-50 dark:opacity-25 -left-[200px] lg:-bottom-[400px] lg:left-[500px]" />

            <div className="flex md:flex-row mx-auto relative gap-4 lg:gap-10">
                <aside
                    className="
                    fixed
                    hidden
                    lg:block
                    z-30
                    top-[calc(5rem_+_35px)]
                    h-[calc(90vh-6.5rem)]
                    w-[240px]
                    shrink-0
                    ml-4
                    px-4
                    pr-2
                    pt-4
                    bg-gradient-to-b
                    from-black/5
                    dark:from-white/5
                    from-60%
                    to-transparent
                    bg-opacity-50
                    backdrop-blur-lg
                    rounded-xl
                    md:left-4
                    lg:left-0
                    xl:left-0
                    2xl:left-[calc((100vw-1436px)/2)]
                    "
                >
                    <DocsSidebar items={docsConfig.sidebarNav} />
                </aside>

                <main
                    className="mx-auto overflow-y-auto mt-30"
                >
                    {children}
                </main>
            </div>
        </div>
    )
}


export default ComponentsLayout
