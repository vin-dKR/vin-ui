import MacKeyboard from "../Keyboard";
import SpiralCurve from "./svg-components/SpiralCurve";

const ForthGrid = () => {
    return (
        <div className="
            relative group overflow-hidden
            col-span-5 md:col-span-3 h-64 
            rounded rounded-4xl 
            bg-linear-to-bl from-purple-400/5 via-white/5 to-black/30 backdrop-blur-lg 
            border border-white/10 border-2 shadow-lg
        ">
            <SpiralCurve className="absolute rotate-45 -left-10 lg:left-50 contrast-150 opacity-25" />

            <div className="absolute hidden lg:block top-[-50px] lg:top-0 lg:left-[40%]">
                <MacKeyboard />
            </div>
            <div className="absolute lg:hidden right-0 bottom-13">
                <MacKeyboard />
            </div>

            <div className="absolute bottom-0 mx-6 my-3 md:my-10">
                <h1 className="text-2xl">Custom Compo..</h1>
                <p className="text-sm text-gray-900/50 dark:text-gray-400">with Top Notch UI/UX</p>
            </div>
        </div>
    );
};

export default ForthGrid;
