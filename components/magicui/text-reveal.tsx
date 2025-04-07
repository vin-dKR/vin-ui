'use client';

import { motion } from 'framer-motion';
import React from 'react';

interface TextRevealProps {
    text?: string
    children?: React.ReactNode;
    className?: string;
    delay?: number;
    duration?: number;
}

export const TextReveal = ({
    text,
    children,
    className = '',
    delay = 0.2,
    duration = 0.8,
}: TextRevealProps) => {

    return (
        <div className={`overflow-hidden ${className}`}>
            <motion.span
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                transition={{
                    delay,
                    duration,
                    ease: [0.22, 1, 0.36, 1],
                }}
                className="block"
            >
                {text} {children}
            </motion.span>
        </div>
    );
}

