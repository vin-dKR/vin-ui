import MotionCardBg from "./svg-components/MotionCardBg"

const SecondGrid = () => {
    return (
        <div className="
            relative group overflow-hidden
            col-span-4 md:col-span-2 h-64 
            rounded rounded-4xl 
            bg-linear-to-br from-purple-400/5 via-white/5 to-black/30 backdrop-blur-lg 
            border border-white/10 border-2 shadow-lg
        ">
            <MotionCardBg className="absolute-0 w-full top-0" />

            {/*
            <Image
                src="/bento/motion-card-bg.svg"
                alt="motion-bg"
                width={200}
                height={200}
                className="w-full contrast-100"
            />
            <Image
                src="/bento/speedometer.svg"
                alt="motion-bg"
                width={200}
                height={200}
                className="absolute scale-120 left-[70px] md:left-[140px] top-[110px]"
            />
            <div className="absolute left-[85px] md:left-[160px] top-[135px] h-40 w-40 flex items-center justify-center">
                <Image
                    src="/bento/speed-arrow.svg"
                    alt="speedometer-arrow"
                    width={200}
                    height={200}
                    className="
                        h-40 w-40
                        origin-center
                        transition-transform duration-1000 ease-out -rotate-60
                        group-hover:rotate-[150deg] group-hover:duration-[2000ms] group-hover:ease-in
                    "
                />
            </div>
            */}
            <div className="absolute bottom-0 mx-6 my-3 md:my-10">
                <h1 className="text-2xl">Motions</h1>
                <p className="text-sm text-gray-900/50 dark:text-gray-400">120fps animations</p>
            </div>
        </div>
    )
}

export default SecondGrid
