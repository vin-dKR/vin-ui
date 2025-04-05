import Image from "next/image";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

const FirstGrid = () => {
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <div className="
            relative group overflow-hidden
            col-span-5 md:col-span-3 h-64 
            rounded rounded-4xl 
            bg-linear-to-bl from-purple-400/5 via-white/5 to-black/30 backdrop-blur-lg 
            border border-white/10 border-2 shadow-lg
        ">
            <Image
                src="/spirals-curve.svg"
                alt="spiral"
                width={100}
                height={100}
                className="absolute w-64"
            />

            {/* Only render theme-based images after mounting */}
            {mounted && theme === "dark" && (
                <Image
                    src="/bento/shiny-card.svg"
                    alt="shyni-dark"
                    width={100}
                    height={100}
                    className="
                        absolute w-32 md:w-64 dark:block 
                        md:right-0 md:top-[-40px] right-11
                    "
                />
            )}
            {mounted && theme === "light" && (
                <Image
                    src="/bento/shiny-card-light.svg"
                    alt="shyni"
                    width={100}
                    height={100}
                    className="absolute w-32 md:w-64 top-[20px] right-18 md:right-13 md:top-[3px] dark:hidden"
                />
            )}

            <div className="absolute bottom-0 mx-6 my-3 md:my-10">
                <h1 className="text-2xl">Pixel Perfection</h1>
                <p className="text-sm text-gray-900/50 dark:text-gray-400">Crafted to 1px precision</p>
            </div>
        </div>
    );
};

export default FirstGrid;
