import React, { useState, useRef } from 'react';

interface MousePosition {
    x: number;
    y: number;
}

interface GlowingCardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    className?: string;
}

const GlowingCard = ({ children, className, ...props }: GlowingCardProps) => {
    const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });
    const cardRef = useRef<HTMLDivElement>(null);
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>): void => {
        if (cardRef.current) {
            const rect = cardRef.current.getBoundingClientRect();
            setMousePosition({
                x: e.clientX - rect.left,
                y: e.clientY - rect.top
            });

            if (!isHovering) {
                setIsHovering(true);
                setDimensions({
                    width: rect.width,
                    height: rect.height
                });
            }
        }
    };

    const handleMouseLeave = (): void => {
        setIsHovering(false);
    };

    // Calculate SVG path for the gradient - this creates a glow effect only at the border
    const calculateGradientPath = () => {
        if (!dimensions.width || !dimensions.height || !isHovering) return null;

        // Calculate the closest point on the border to the mouse position
        const halfWidth = dimensions.width / 2;
        const halfHeight = dimensions.height / 2;

        // Center-relative mouse position
        const relX = mousePosition.x - halfWidth;
        const relY = mousePosition.y - halfHeight;

        // Determine the closest point on the border
        let closestX, closestY;

        // Simple approximation for finding closest border point
        // This works because the card is rectangular
        const ratio = Math.abs(relY / relX);
        const aspectRatio = halfHeight / halfWidth;

        if (ratio > aspectRatio) {
            // Closest to top or bottom border
            closestY = relY > 0 ? halfHeight : -halfHeight;
            closestX = (relX / relY) * closestY;
        } else {
            // Closest to left or right border
            closestX = relX > 0 ? halfWidth : -halfWidth;
            closestY = (relY / relX) * closestX;
        }

        // Convert back to absolute coordinates
        const borderX = closestX + halfWidth;
        const borderY = closestY + halfHeight;

        // Calculate gradient center and radii
        return {
            x: borderX,
            y: borderY,
            // Distance from mouse to border point affects the gradient spread
            distance: Math.sqrt(Math.pow(mousePosition.x - borderX, 4) + Math.pow(mousePosition.y - borderY, 8))
        };
    };

    const gradient = calculateGradientPath();

    return (
        <div
            ref={cardRef}
            className={`relative rounded-xl overflow-hidden bg-gray-100/5 dark:bg-gray-950/10 backdrop-shadow-lg transition-transform hover:scale-[1.02] ${className}`}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            {...props}
        >
            <div className="absolute inset-0 rounded-xl border border-gray-800/20 dark:border-zinc-100/5"></div>

            {gradient && (
                <div
                    className="absolute inset-0 rounded-xl pointer-events-none overflow-hidden transition-opacity duration-200"
                    style={{
                        opacity: isHovering ? 1 : 0,
                        boxShadow: 'none',
                    }}
                >
                    <div
                        className="absolute inset-0 pointer-events-none"
                        style={{
                            background: `radial-gradient(
                                circle at ${gradient.x}px ${gradient.y}px, 
                                rgba(168, 85, 247, 0.8) 0%, 
                                rgba(168, 85, 247, 0.4) ${Math.min(20, gradient.distance)}px, 
                                rgba(168, 85, 247, 0) ${Math.min(80, gradient.distance * 8)}px
                            )`,
                            maskImage: 'linear-gradient(to right, black, black)',
                            WebkitMaskComposite: 'destination-out',
                            maskComposite: 'exclude',
                            WebkitMaskImage: `
                            linear-gradient(to right, 
                                            transparent ${dimensions.width - 2}px, black 2px),
                                            linear-gradient(to bottom, 
                                                            transparent ${dimensions.height - 2}px, black 2px),
                                                            linear-gradient(to right, 
                                                                            black 2px, transparent 2px),
                                                                            linear-gradient(to bottom, 
                                                                                            black 2px, transparent 2px)
                                                                                            `,
                            mixBlendMode: 'screen',
                        }}
                    />
                </div>
            )}
            <div className="relative z-10">
                {children}
            </div>
        </div>
    )
}

export default GlowingCard
