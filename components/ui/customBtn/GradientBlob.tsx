import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GradientBlobProps {
    children: ReactNode;
    side?: "left" | "right";
}

const GradientBlob: React.FC<GradientBlobProps> = ({ children, side = "left" }) => {
    return (
        <div
            className={`bg-linear-30 from-white to-purple-950 from-20% p-[1px] rounded-full ${side === "left" ? "bg-gradient-to-br" : "bg-gradient-to-bl"
                }`}
        >
            <motion.div
                whileHover={{ rotate: 15 }}
                className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-950 from-20% to-white flex items-center justify-center"
            >
                <span className="text-white text-justify mt-1 text-center text-shadow-md font-soraBold text-xl">
                    {children}
                </span>
            </motion.div>
        </div>
    );
};

export default GradientBlob;
