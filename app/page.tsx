'use client';
import { motion } from 'framer-motion';
import { GridBackground } from '@/components/grid-bg';
import { TextReveal } from '@/components/magicui/text-reveal';
import { BentoGrid } from '@/components/ui/bento-grid';
import { Spotlight } from '@/components/spotlight';
import { ShimmerButton } from '@/components/shimmer-button';
import { Meteors } from '@/components/magicui/meteors';
import { GalaxyNavbar } from "@/components/ui/blocks/GalaxyNavbar";
import Hero from "@/components/ui/blocks/Hero";
import MultiColorBg from '@/components/MultiColorBg';
import { FEATURES } from '@/constants/bento';

export default function Home() {
    return (
        <div className="relative bg-gray-100 dark:bg-red-300">
            <GridBackground>
                <div className='absolute inset-0 right-0 w-full'>
                    <MultiColorBg />
                </div>
                <Spotlight className="top-40 left-0 md:left-60" fill="rgb(124 58 237 / 0.1)" />

                <GalaxyNavbar />

                <div className="container mx-auto px-6 relative z-10">
                    {/* Hero section */}
                    <Hero />
                    <section className="py-32">
                        <BentoGrid className='w-3/5'>
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

                    <section className="py-32 relative overflow-hidden">
                        <Meteors number={10} />
                        <div className="relative z-10 text-center">
                            <h2 className="text-4xl md:text-6xl font-bold mb-8">
                                Ready to <span className="text-violet-500">elevate</span> your workflow?
                            </h2>
                            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
                                Join thousands of designers and developers shipping better interfaces faster
                            </p>
                            {/*
                            <ShimmerButton
                                as="a"
                                href="/docs"
                                className="relative group overflow-hidden rounded-xl px-8 py-4 bg-gradient-to-br from-violet-600 to-purple-500 font-medium text-lg mx-auto"
                            >
                                <span className="relative z-10">Get Started</span>
                                <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </ShimmerButton>
                            */}
                        </div>
                    </section>
                </div>

                <footer className="bg-white/30 py-16 border-t border-white/10">
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
        </div>
    );
}
