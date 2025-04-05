import Image from "next/image"
import MotionRays from "./MotionRays"

const SecondGrid = () => {
    return (
        <div className="
            relative group overflow-hidden
            col-span-4 md:col-span-2 h-64 
            rounded rounded-4xl 
            bg-linear-to-br from-purple-400/5 via-white/5 to-black/30 backdrop-blur-lg 
            border border-white/10 border-2 shadow-lg
        ">
            <MotionRays />
            <Image
                src="/bento/motion-card-bg.svg"
                alt="motion-bg"
                width={200}
                height={200}
                className="w-full contrast-100"
            />

            <Image
                src="/spirals-curve.svg"
                alt="spiral"
                width={100}
                height={100}
                className="absolute w-64 rotate-180 right-0 bottom-0"
            />

            <div className="absolute bottom-0 mx-6 my-3 md:my-10">
                <h1 className="text-2xl">Motions</h1>
                <p className="text-sm text-gray-900/50 dark:text-gray-400">120fps animations</p>
            </div>
        </div>
    )
}

export default SecondGrid
