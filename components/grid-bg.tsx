import React from "react";

export function GridBackground({ children }: { children: React.ReactNode }) {
    return (
        <div className="relative min-h-screen w-full bg-white dark:bg-black overflow-hidden">
            {/* Grid pattern */}
            <div className="absolute inset-0 bg-[url('/grid-light.svg')] dark:bg-[url('/grid-dark.svg')] bg-center [mask-image:radial-gradient(ellipse_at_center,black_90%,transparent_100%)]" />

            {/* Bottom center gradient (both themes) */}
            <div className="absolute inset-0 [background:radial-gradient(ellipse_at_bottom_center,_var(--tw-gradient-stops))] from-gray-200/30 via-transparent to-transparent dark:from-violet-900/30 dark:via-transparent dark:to-transparent" />

            {/* Enhanced top-left gradient for light mode */}
            <div className="absolute inset-0 [background:radial-gradient(ellipse_100%_100%_at_top_left,_var(--tw-gradient-stops))] from-gray-100/50 via-transparent to-transparent opacity-80 dark:opacity-0 [--gradient-size:80%]" />

            {children}
        </div>
    );
}
