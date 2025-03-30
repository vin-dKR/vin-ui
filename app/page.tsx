'use client';
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
import { motion, AnimatePresence } from 'framer-motion';
import { GridBackground } from '@/components/grid-bg';
import { TextReveal } from '@/components/magicui/text-reveal';
import { BentoGrid } from '@/components/ui/bento-grid';
import { Spotlight } from '@/components/spotlight';
import { ShimmerButton } from '@/components/shimmer-button';
import { Meteors } from '@/components/ui/meteors';
import { TypewriterEffect } from '@/components/ui/typewriter-effect';
import { TiltedLightSource2 } from "@/components/ui/TiltedLightSource2";
import { GalaxyNavbar } from "@/components/ui/blocks/GalaxyNavbar";

// Inspired by Aceternity UI's text reveal effect
const TITLE_WORDS = [
    { text: "Build" },
    { text: "exceptional" },
    { text: "interfaces", className: "text-violet-500" },
];

// Inspired by LunarUI's bento grid
const FEATURES = [
    {
        title: "Pixel Perfection",
        description: "Crafted to 1px precision",
        icon: "✨",
        className: "md:col-span-2",
    },
    {
        title: "Motion Mastery",
        description: "60fps animations",
        icon: "🌀",
    },
    {
        title: "Dark Mode",
        description: "Beautiful in any light",
        icon: "🌓",
    },
    {
        title: "Accessibility",
        description: "WCAG 2.1 compliant",
        icon: "♿",
        className: "md:col-span-2",
    },
];

const navItems = [
    {
        name: "Home",
        link: "/",
        icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
        name: "About",
        link: "/about",
        icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
        name: "Contact",
        link: "/contact",
        icon: (
            <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
        ),
    },
];

export default function Home() {
    return (
        <>
            {/* Inspired by MagicUI's grid background with enhancements */}
            <GridBackground>
                {/* Inspired by Aceternity UI's spotlight effect */}
                <Spotlight className="top-40 left-0 md:left-60" fill="rgb(124 58 237 / 0.1)" />

                {/* Inspired by LunarUI's floating nav */}
                <GalaxyNavbar />

                <div className="container mx-auto px-6 relative z-10">
                    {/* Hero section */}
                    <section className="min-h-[90vh] flex flex-col justify-center items-center text-center pt-32 pb-20">
                        {/* Inspired by UI Layouts' badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="px-4 py-2 bg-white/5 backdrop-blur-lg rounded-full mb-8 border border-white/10 shadow-lg"
                        >
                            <span className="bg-gradient-to-r from-violet-500 to-purple-300 bg-clip-text text-transparent font-medium">
                                Version 2.0 just launched
                            </span>
                        </motion.div>

                        {/* Inspired by Aceternity UI's typewriter effect */}
                        <TypewriterEffect words={TITLE_WORDS} className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8" />

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl"
                        >
                            The most advanced React component library for designers who demand perfection.
                            <span className="hidden md:inline"> Built with Tailwind, Framer Motion, and love.</span>
                        </motion.p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            {/* Inspired by MagicUI's shimmer button */}
                            <ShimmerButton
                                as="a"
                                href="/components"
                                className="relative group overflow-hidden rounded-xl px-8 py-4 bg-gradient-to-br from-violet-600 to-purple-500 font-medium"
                            >
                                <span className="relative z-10">Explore Components</span>
                                <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </ShimmerButton>

                            <motion.button
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                                className="px-8 py-4 rounded-xl bg-white/5 backdrop-blur-lg border border-white/10 font-medium shadow-lg"
                            >
                                View on GitHub
                            </motion.button>
                        </div>
                    </section>

                    {/* Bento Grid - Inspired by LunarUI */}
                    <section className="py-32">
                        <BentoGrid>
                            {FEATURES.map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: i * 0.1 }}
                                    viewport={{ once: true }}
                                    className={`p-8 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 shadow-lg ${item.className || ""}`}
                                >
                                    <div className="text-4xl mb-4">{item.icon}</div>
                                    <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                                    <p className="text-gray-400">{item.description}</p>
                                </motion.div>
                            ))}
                        </BentoGrid>
                    </section>

                    {/* Showcase - Inspired by UI Layouts */}
                    <section className="py-32">
                        <div className="text-center mb-20">
                            <TextReveal
                                text="Trusted by elite teams"
                                className="text-4xl md:text-6xl font-bold mb-6"
                            />
                            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                                Powering the interfaces of tomorrow's most innovative companies
                            </p>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            {["Apple", "Google", "Stripe", "Vercel"].map((company, i) => (
                                <motion.div
                                    key={company}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.6, delay: i * 0.1 }}
                                    viewport={{ once: true }}
                                    className="flex items-center justify-center p-8 rounded-xl bg-white/5 backdrop-blur-lg border border-white/10 shadow-lg"
                                >
                                    <span className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                                        {company}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </section>

                    {/* CTA - Inspired by MagicUI meteors */}
                    <section className="py-32 relative overflow-hidden">
                        <Meteors number={10} />
                        <div className="relative z-10 text-center">
                            <h2 className="text-4xl md:text-6xl font-bold mb-8">
                                Ready to <span className="text-violet-500">elevate</span> your workflow?
                            </h2>
                            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
                                Join thousands of designers and developers shipping better interfaces faster
                            </p>

                            <ShimmerButton
                                as="a"
                                href="/docs"
                                className="relative group overflow-hidden rounded-xl px-8 py-4 bg-gradient-to-br from-violet-600 to-purple-500 font-medium text-lg mx-auto"
                            >
                                <span className="relative z-10">Get Started</span>
                                <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </ShimmerButton>
                        </div>
                    </section>
                </div>

                {/* Footer - Custom premium design */}
                <footer className="py-16 border-t border-white/10">
                    <div className="container mx-auto px-6">
                        <div className="flex flex-col md:flex-row justify-between items-center">
                            <div className="mb-6 md:mb-0">
                                <h3 className="text-2xl font-bold bg-gradient-to-r from-violet-500 to-purple-300 bg-clip-text text-transparent">
                                    Vin-UI
                                </h3>
                                <p className="text-gray-400 mt-2">For those who refuse to compromise</p>
                            </div>

                            <div className="flex gap-6">
                                {["Documentation", "Components", "Templates", "GitHub"].map((item) => (
                                    <a
                                        key={item}
                                        href="#"
                                        className="text-gray-400 hover:text-white transition-colors font-medium"
                                    >
                                        {item}
                                    </a>
                                ))}
                            </div>
                        </div>

                        <div className="mt-16 pt-8 border-t border-white/10 text-center text-gray-400">
                            <p>© {new Date().getFullYear()} Vin-UI. Crafted with precision.</p>
                        </div>
                    </div>
                </footer>
            </GridBackground>
        </>
    );
}
