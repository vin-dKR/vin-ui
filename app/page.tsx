'use client'

import { GridBackground } from "@/components/ui/hero/grid-bg";
import { Spotlight } from "@/components/ui/hero/spotlight";
import { GalaxyNavbar } from "@/components/ui/blocks/GalaxyNavbar";
import Hero from "@/components/ui/blocks/Hero";
import MultiColorBg from '@/components/ui/hero/MultiColorBg';
import Bento from '@/components/ui/bento/Bento';
import Clientsxx from "@/components/ui/hero/Clientsxx";
import Footer from '@/components/ui/blocks/Footer';
import BeamOverlay from "@/components/ui/hero/BeamOverlay";

export default function Home() {
    return (
        <div className="relative bg-gray-100">
            <GridBackground>
                <BeamOverlay />
                <div className='absolute md:inset-0 right-72 top-32 md:right-0 md:top-0 w-full'>
                    <MultiColorBg className='' width='1932' height='1658' />
                </div>
                <Spotlight className="top-40 left-0 md:left-60" fill="rgb(124 58 237 / 0.1)" />

                <GalaxyNavbar />

                <div className="container items-center mx-auto px-6 relative z-10">
                    <Hero />
                    <Bento />
                </div>

                <Clientsxx />
                <Footer />
            </GridBackground>
        </div>
    );
}
