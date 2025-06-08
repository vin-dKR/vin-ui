import React from "react";
import { RoughNotation } from "react-rough-notation";
import { motion } from "framer-motion";
import { RandomEmoji } from "../hero/RandomEmoji";
import { Separator } from "../hero/Separator"
import MySlogan from "../hero/MySlogan";
import ThreeDBtn from "../customBtn/3dButton";
import HeroText from "../hero/MainTextHero";

const Hero = () => {
    return (
        <section className="min-h-[90vh] flex flex-col justify-center items-center text-center pt-32 pb-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="relative px-4 py-1 flex items-center bg-white/5 backdrop-blur-lg rounded-full mb-4 md:mb-12 border border-white/10 shadow-lg"
            >
                <RandomEmoji className="text-shadow-lg text-shadow-white/20" />
                <Separator className="mx-3 h-4 bg-gray-400" orientation="vertical" />
                <span className="bg-gradient-to-r from-violet-500 to-purple-300 bg-clip-text text-shadow-lg text-shadow-white/10 text-transparent font-medium">
                    the vinod krs ui
                </span>
            </motion.div>

            <div className="relative flex">
                <HeroText />

            </div>


            <div className="flex flex-col sm:flex-row gap-4 md:gap-8">
                <ThreeDBtn href="/components" text="Browse Components" variant="black" className="text-white" />
                <ThreeDBtn href="https://github.com/vin-dKR/" text="View it on Github" variant="white" className="text-black" />
            </div>
        </section>
    )
}

export default Hero
