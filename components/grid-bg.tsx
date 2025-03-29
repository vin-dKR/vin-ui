import React from "react";
export function GridBackground({ children }: { children: React.ReactNode }) {
    return (
        <div className="relative min-h-screen w-full bg-black overflow-hidden">
            {/* Grid pattern */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:radial-gradient(ellipse_at_center,black_70%,transparent_100%)]" />

            {/* Radial gradient */}
            <div className="absolute inset-0 [background:radial-gradient(circle_at_bottom_center,_var(--tw-gradient-stops))] from-violet-900/30 to-transparent" />

            {children}
        </div>
    );
}
