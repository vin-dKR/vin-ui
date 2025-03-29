'use client';

import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';

export const TiltedLightSource = () => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const handleMouseMove = (e: React.MouseEvent) => {
        const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
        mouseX.set((e.clientX - left) / width * 100);
        mouseY.set((e.clientY - top) / height * 100);
    };

    return (
        <motion.div
            onMouseMove={handleMouseMove}
            className="absolute inset-0 overflow-hidden pointer-events-none"
        >
            <motion.div
                className="absolute -left-1/2 -top-1/2 w-[200%] h-[200%] opacity-30"
                style={{
                    background: useMotionTemplate`
            radial-gradient(
              circle at ${mouseX}% ${mouseY}%,
              rgba(139, 92, 246, 0.8) 0%,
              rgba(124, 58, 237, 0.5) 30%,
              transparent 70%
            )
          `,
                    transform: 'rotate(15deg) skewX(15deg)',
                    mixBlendMode: 'screen',
                }}
            />
        </motion.div>
    );
};
