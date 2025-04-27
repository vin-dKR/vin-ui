import { useEffect, useRef, useState } from 'react';

const GRID_SIZE: number = 40;
const CELL_SIZE: number = 40;
const BEAM_LENGTH: number = 10;

interface Coordinate {
    x: number;
    y: number;
}

type Direction = 'up' | 'right' | 'down' | 'left';

const getRandomDirection = (currentDirection: Direction): Direction => {
    const directions: Direction[] = ['up', 'right', 'down', 'left'];
    const opposites: Record<Direction, Direction> = {
        up: 'down',
        down: 'up',
        left: 'right',
        right: 'left',
    };
    const availableDirections = directions.filter(
        (dir) => dir !== opposites[currentDirection]
    );
    return availableDirections[Math.floor(Math.random() * availableDirections.length)];
};

const getNextPosition = (x: number, y: number, direction: Direction): Coordinate => {
    switch (direction) {
        case 'up':
            return { x, y: y - 1 };
        case 'down':
            return { x, y: y + 1 };
        case 'left':
            return { x: x - 1, y };
        case 'right':
            return { x: x + 1, y };
        default:
            return { x, y };
    }
};

const BeamOverlay: React.FC = () => {
    const beamRef = useRef<Coordinate[]>([]);
    const directionRef = useRef<Direction>('right');
    const pathRef = useRef<string>('');
    const intervalRef = useRef<NodeJS.Timeout | null>(null);
    const animationFrameRef = useRef<number | null>(null);
    const lastUpdateTimeRef = useRef<number>(0);
    const updateIntervalRef = useRef<number>(200); // milliseconds between updates

    // Force component update
    const [, forceUpdate] = useState({});

    const updateBeamPath = () => {
        const points = beamRef.current.map(({ x, y }) => ({
            x: x * CELL_SIZE + CELL_SIZE / 2,
            y: y * CELL_SIZE + CELL_SIZE / 2,
        }));

        // Build the path string
        if (points.length > 0) {
            let path = `M ${points[0].x} ${points[0].y}`;
            for (let i = 1; i < points.length; i++) {
                path += ` L ${points[i].x} ${points[i].y}`;
            }
            pathRef.current = path;
        }

        forceUpdate({});
    };

    const moveBeam = () => {
        const prevBeam = beamRef.current;
        const head = prevBeam[prevBeam.length - 1];
        let newDirection = directionRef.current;

        // Change direction randomly (20% chance for smoother movement)
        if (Math.random() < 0.2) {
            newDirection = getRandomDirection(directionRef.current);
            directionRef.current = newDirection;
        }

        const newHead = getNextPosition(head.x, head.y, newDirection);

        // Handle grid boundaries (wrap around)
        newHead.x = (newHead.x + GRID_SIZE) % GRID_SIZE;
        newHead.y = (newHead.y + GRID_SIZE) % GRID_SIZE;

        // Update beam - add new head and maintain length
        const newBeam = [...prevBeam, newHead];
        if (newBeam.length > BEAM_LENGTH) {
            newBeam.shift(); // Remove oldest point if beam is too long
        }
        beamRef.current = newBeam;

        updateBeamPath();
    };

    // Animation loop using requestAnimationFrame for smoother animation
    // eslint-disable-next-line
    const animate = (timestamp: number) => {
        if (!lastUpdateTimeRef.current) {
            lastUpdateTimeRef.current = timestamp;
        }

        const elapsed = timestamp - lastUpdateTimeRef.current;
        if (elapsed >= updateIntervalRef.current) {
            moveBeam();
            lastUpdateTimeRef.current = timestamp;
        }

        animationFrameRef.current = requestAnimationFrame(animate);
    };

    // Initialize and start animation
    useEffect(() => {
        // Initialize beam at random position
        const startX = Math.floor(Math.random() * GRID_SIZE);
        const startY = Math.floor(Math.random() * GRID_SIZE);

        // Create initial beam with multiple points in the starting direction
        const initialBeam = [];
        for (let i = 0; i < BEAM_LENGTH; i++) {
            initialBeam.push({
                x: (startX + i) % GRID_SIZE,
                y: startY
            });
        }
        beamRef.current = initialBeam;
        directionRef.current = 'right';

        updateBeamPath();

        // Start animation loop
        const currentInterval = intervalRef.current; // Store in variable
        const currentAnimationFrame = animationFrameRef.current;

        return () => {
            if (currentAnimationFrame) {
                cancelAnimationFrame(currentAnimationFrame);
            }
            if (currentInterval) {
                clearInterval(currentInterval);
            }
        };

    }, []);

    return (
        <svg
            width="100%"
            height="100%"
            xmlns="http://www.w3.org/2000/svg"
            style={{
                position: 'absolute',
                top: 20,
                left: 20,
                pointerEvents: 'none',
                zIndex: 1
            }}
        >
            <defs>
                <pattern
                    id="grid-pattern"
                    x="0"
                    y="0"
                    width={CELL_SIZE}
                    height={CELL_SIZE}
                    patternUnits="userSpaceOnUse"
                >
                    <path
                        d={`M ${CELL_SIZE} 0 L 0 0 0 ${CELL_SIZE}`}
                        fill="none"
                        stroke="white"
                        strokeWidth="0.5"
                        opacity="0"
                    />
                </pattern>
                <linearGradient id="fadeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{ stopColor: 'cyan', stopOpacity: 0 }} />
                    <stop offset="50%" style={{ stopColor: 'cyan', stopOpacity: 0.8 }} />
                    <stop offset="100%" style={{ stopColor: 'cyan', stopOpacity: 0 }} />
                </linearGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-pattern)" />
            <path
                key="beam-path"
                d={pathRef.current}
                stroke="url(#fadeGradient)"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                style={{
                    filter: 'drop-shadow(0 0 8px rgba(0, 255, 255, 0.8))',
                }}
            />
        </svg>
    );
};

export default BeamOverlay;
