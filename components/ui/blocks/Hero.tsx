import React from "react";
import { RoughNotation } from "react-rough-notation";
import { motion } from "framer-motion";
import { RandomEmoji } from "../RandomEmoji";
import { Separator } from "../Separator";
import MySlogan from "@/components/MySlogan";
import ThreeDBtn from "../customBtn/3dButton";

const Hero = () => {
    return (
        <section className="min-h-[90vh] flex flex-col justify-center items-center text-center pt-32 pb-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="relative px-4 py-2 flex items-center bg-white/5 backdrop-blur-lg rounded-full mb-4 md:mb-12 border border-white/10 shadow-lg"
            >
                <RandomEmoji />
                <Separator className="mx-3 h-4 bg-gray-400" orientation="vertical" />
                <span className="bg-gradient-to-r from-violet-500 to-purple-300 bg-clip-text text-transparent font-medium">
                    the vinod krs ui
                </span>
            </motion.div>

            <div className="relative flex">
                <MySlogan />

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="absolute top-40 left-5 w-[250px] md:w-[450px] text-sm md:text-xl text-gray-900 dark:text-gray-300 mb-12"
                >
                    The {' '}
                    <RoughNotation
                        type="underline"
                        show={true}
                        color="#5e93cf"
                        strokeWidth={2}
                        animationDuration={800}
                        animationDelay={1000}
                    >
                        most advanced React component
                    </RoughNotation>{' '}

                    library for designers who demand perfection.
                    <span className="hidden md:inline"> Built with Tailwind, Framer Motion, and love.</span>
                </motion.p>
            </div>


            <div className="flex flex-col sm:flex-row gap-4 md:gap-8">
                <ThreeDBtn href="/components" text="Browse Components" variant="black" className="text-white" />
                <ThreeDBtn href="https://github.com/vin-dKR/" text="View it on Github" variant="white" className="text-black" />
            </div>
        </section>
    )
}

export default Hero
