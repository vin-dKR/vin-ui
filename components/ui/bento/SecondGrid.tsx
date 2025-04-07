import MotionCardBg from "./svg-components/MotionCardBg"
import SpeedArrow from "./svg-components/SpeedArrow"
import SpeedoMeter from "./svg-components/Speedometer"

const SecondGrid = () => {
    return (
        <div className="
            relative group overflow-hidden
            col-span-4 md:col-span-2 h-64 
            rounded rounded-4xl 
            bg-linear-to-br from-purple-400/5 via-white/5 to-black/30 backdrop-blur-lg 
            border border-white/10 border-2 shadow-lg
        ">
            <MotionCardBg className="absolute-0 w-full top-0 contrast-200" />

            <SpeedoMeter className="absolute top-[-80px] w-64 lg:w-70 lg:left-25 md:left-[-20px]" />

            <SpeedArrow
                className="
                    w-42 lg:w-52
                    absolute right-[-24px] top-28 lg:right-0 lg:top-30 
                    origin-center
                    transition-transform duration-1000 ease-out -rotate-60
                    group-hover:rotate-[150deg] group-hover:duration-[2000ms] group-hover:ease-in
                "
            />

            <div className="absolute bottom-0 mx-6 my-3 md:my-10">
                <h1 className="text-2xl text-shadow-lg">Motions</h1>
                <p className="text-sm text-gray-900/50 dark:text-gray-400 text-shadow-lg ">120fps animations</p>
            </div>
        </div>
    )
}

export default SecondGrid
