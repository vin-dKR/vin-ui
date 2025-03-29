'use client';

import React, { useEffect, useState } from 'react';

export function Spotlight({ className, fill }: { className?: string; fill?: string }) {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div
            className={`pointer-events-none absolute inset-0 -z-10 transition duration-300 ${className}`}
            style={{
                background: `radial-gradient(600px at ${position.x}px ${position.y}px, ${fill || 'rgba(124, 58, 237, 0.1)'}, transparent 80%)`,
            }}
        />
    );
}
