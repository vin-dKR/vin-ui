'use client';

import { motion } from 'framer-motion';
import React from 'react';

interface TextRevealProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    duration?: number;
}

export const TextReveal = ({
    children,
    className = '',
    delay = 0.2,
    duration = 0.8,
}: TextRevealProps) => {
    // If children is a string, split into words
    if (typeof children === 'string') {
        const words = children.split(' ');

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
                    {children}
                </motion.span>
            </div>
        );
    }

    // If children is ReactNode, animate the whole content
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                delay,
                duration,
                ease: [0.22, 1, 0.36, 1],
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
};
