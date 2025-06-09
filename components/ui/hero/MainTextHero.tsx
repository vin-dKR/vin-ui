import React from "react"
import { motion } from "framer-motion"
import { RoughNotation } from "react-rough-notation"

interface HeroTextProps {
    text?: string
    className?: string
}

const HeroText = ({ text, className }: HeroTextProps) => {
    return (
        <div className="relative flex flex-col">
            <div className="relative">
                {/* Stroke/Border layer - now properly transparent to violet */}
                <h1
                    className="absolute top-0 left-0 text-[clamp(50px,8vw,90px)] font-soraBold text-transparent pointer-events-none w-full leading-14 md:leading-30"
                    style={{
                        WebkitTextStroke: '2px transparent',
                        background: 'linear-gradient(to bottom, transparent, white)',
                        WebkitBackgroundClip: 'text',
                        backgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        textShadow: '0 0 10px rgba(124, 58, 237, 0.3)' // subtle glow
                    }}
                >
                    {text}
                </h1>

                {/* Main text */}
                <h1
                    className="text-[clamp(50px,8vw,90px)] font-soraBold bg-gradient-to-t from-violet-950 from-20% to-white to-70% bg-clip-text text-transparent relative z-10 leading-14 md:leading-30"
                    style={{
                        textShadow: '0 2px 4px rgba(0,0,0,0.1)' // improves readability
                    }}
                >
                    {text}
                </h1>
            </div>

            <p className="font-instrui text-5xl md:text-6xl leading-none mt-4 md:mt-2">web pages</p>

            <div className="flex items-center justify-center mt-4 md:mt-6">
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="w-full md:w-[550px] text-xs md:text-sm text-center text-gray-900 dark:text-gray-300 mb-6"
                >
                    The {' '}
                    <RoughNotation
                        type="underline"
                        show={true}
                        color="#5e93cf"
                        strokeWidth={1}
                        animationDuration={800}
                        animationDelay={1000}
                    >
                        most advanced React component
                    </RoughNotation>{' '}

                    library for designers who demand perfection.
                    <span className=""> Built with Tailwind, Framer Motion, and 🫶❤️.</span>
                </motion.p>
            </div>
        </div>
    )
}

export default HeroText
