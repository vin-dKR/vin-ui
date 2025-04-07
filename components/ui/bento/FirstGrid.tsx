import { useTheme } from "next-themes"
import { useState, useEffect } from "react"
import SpiralCurve from "./svg-components/SpiralCurve"
import ShinyBox from "./svg-components/ShinyBox"

const FirstGrid = () => {
    const { theme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    return (
        <div className="
            relative group overflow-hidden
            col-span-5 md:col-span-3 h-64 
            rounded rounded-4xl 
            bg-linear-to-bl from-purple-400/5 via-white/5 to-black/30 backdrop-blur-lg 
            border border-white/10 border-2 shadow-lg
        ">
            <SpiralCurve className="absolute w-60" />

            {mounted && theme === "dark" && (
                <ShinyBox
                    className="
                        absolute w-40 md:w-64 md:h-80 dark:block
                        -top-12 right-6 md:top-[-55px] md:right-0
                    " />
            )}
            {mounted && theme === "light" && (
                <ShinyBox
                    className="
                        absolute rotate-180 w-40 md:w-64 md:h-80 dark:hidden
                        -top-6 right-13 md:top-[-15px] md:right-12
                    " />
            )}


            <div className="absolute bottom-0 mx-6 my-3 md:my-10">
                <h1 className="text-2xl">Pixel Perfection</h1>
                <p className="text-sm text-gray-900/50 dark:text-gray-400">Crafted to 1px precision</p>
            </div>
        </div>
    )
}

export default FirstGrid
