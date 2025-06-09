import React from "react";
import { motion } from "framer-motion";
import { RandomEmoji } from "../hero/RandomEmoji";
import { Separator } from "../hero/Separator"
import HeroText from "../hero/MainTextHero";
import GetStartedButton from "../custom/SvgBtn";

const Hero = () => {
    return (
        <section className="min-h-[90vh] flex flex-col justify-center items-center text-center pt-32 pb-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="relative px-4 py-1 flex items-center bg-white/5 backdrop-blur-lg rounded-full mb-10 md:mb-12 border border-white/10 shadow-lg"
            >
                <RandomEmoji className="text-shadow-lg text-shadow-white/20" />
                <Separator className="mx-3 h-4 bg-gray-400" orientation="vertical" />
                <span className="bg-gradient-to-r text-xs md:text-lg from-violet-500 to-purple-300 bg-clip-text text-shadow-lg text-shadow-white/10 text-transparent font-medium">
                    the vinod krs ui
                </span>
            </motion.div>

            <div className="relative flex">
                <HeroText text="Build Exceptional" className="" />
            </div>


            <div className="flex flex-col sm:flex-row mt-0 cursor-pointer">
                <GetStartedButton text="Get Started" />
            </div>
        </section>
    )
}

export default Hero
