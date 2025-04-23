'use client';

import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';

export const TiltedLightSource2 = () => {
    const mouseX = useMotionValue(50);
    const mouseY = useMotionValue(50);

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
            {/* Primary tilted light */}
            <motion.div
                className="absolute -left-1/2 -top-1/2 w-[200%] h-[200%] opacity-40"
                style={{
                    background: useMotionTemplate`
            radial-gradient(
              circle at ${mouseX}% ${mouseY}%,
              rgba(167, 139, 250, 0.8) 0%,
              rgba(124, 58, 237, 0.5) 40%,
              transparent 80%
            )
          `,
                    transform: 'rotate(15deg) skewX(15deg)',
                    mixBlendMode: 'screen',
                    transition: 'opacity 0.3s ease',
                }}
            />

            {/* Secondary accent light */}
            <motion.div
                className="absolute -right-1/4 -top-1/4 w-[150%] h-[150%] opacity-20"
                style={{
                    background: 'radial-gradient(circle at 75% 25%, rgba(236, 72, 153, 0.6) 0%, transparent 70%)',
                    transform: 'rotate(-10deg) skewY(10deg)',
                    mixBlendMode: 'screen',
                }}
            />

            {/* Edge glow */}
            <motion.div
                className="absolute inset-0 opacity-10"
                style={{
                    boxShadow: 'inset 0 0 50px rgba(124, 58, 237, 0.3)',
                }}
            />
        </motion.div>
    );
};
