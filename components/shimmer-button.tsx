'use client';

import { motion } from 'framer-motion';

export function ShimmerButton({
    as: Tag = 'button',
    className = '',
    children,
    ...props
}: {
    as?: any;
    className?: string;
    children: React.ReactNode;
    [key: string]: any;
}) {
    return (
        <Tag
            className={`relative overflow-hidden ${className}`}
            {...props}
        >
            <motion.span
                className="relative z-10"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                {children}
            </motion.span>
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-[shimmer_2s_infinite]" />
            </div>
        </Tag>
    );
}
