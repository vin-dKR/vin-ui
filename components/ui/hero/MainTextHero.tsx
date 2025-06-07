import React from "react"
import { motion } from "framer-motion"
import { RoughNotation } from "react-rough-notation"

const HeroText = () => {
    return (
        <div className="relative flex flex-col">
            <div className="relative">
                {/* Stroke/Border layer - now properly transparent to violet */}
                <h1
                    className="absolute top-0 left-0 text-[clamp(40px,8vw,90px)] font-soraBold text-transparent pointer-events-none w-full"
                    style={{
                        WebkitTextStroke: '4px transparent',
                        background: 'linear-gradient(to bottom, transparent, white)',
                        WebkitBackgroundClip: 'text',
                        backgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        textShadow: '0 0 10px rgba(124, 58, 237, 0.3)' // subtle glow
                    }}
                >
                    Build Exceptional
                </h1>

                {/* Main text */}
                <h1
                    className="text-[clamp(40px,8vw,90px)] font-soraBold bg-gradient-to-t from-violet-950 from-20% to-white to-70% bg-clip-text text-transparent relative z-10"
                    style={{
                        textShadow: '0 2px 4px rgba(0,0,0,0.1)' // improves readability
                    }}
                >
                    Build Exceptional
                </h1>
            </div>

            <p className="font-instrui text-3xl md:text-6xl leading-none md:-mt-6">web pages</p>

            <div className="flex items-center justify-center mt-4">
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="w-full md:w-[550px] text-sm text-center text-gray-900 dark:text-gray-300 mb-12"
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
                    <span className="text-xs md:text-sm"> Built with Tailwind, Framer Motion, and 🫶❤️.</span>
                </motion.p>
            </div>
        </div>
    )
}

export default HeroText
