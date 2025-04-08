import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

interface KeyObject {
    key: string;
    width: string;
    align?: 'left' | 'right' | 'center';
    highlight?: boolean;
}

interface RowObject {
    keys: KeyObject[];
}

interface MousePosition {
    x: number;
    y: number;
}

const MacKeyboard = () => {
    const [hoveredKey, setHoveredKey] = useState<string | null>(null);
    const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });
    const [mounted, setMounted] = useState(false)


    useEffect(() => {
        setMounted(true)
    }, [])

    // Define all keyboard rows with proper alignment
    const rows: RowObject[] = [
        {
            keys: [
                { key: 'esc', width: 'w-12', align: 'left' },
                { key: 'f1', width: 'w-12' },
                { key: 'f2', width: 'w-12' },
                { key: 'f3', width: 'w-12' },
                { key: 'f4', width: 'w-12' },
                { key: 'f5', width: 'w-12' },
                { key: 'f6', width: 'w-12' },
                { key: 'f7', width: 'w-12' },
                { key: 'f8', width: 'w-12' },
                { key: 'f9', width: 'w-12' },
                { key: 'f10', width: 'w-12' },
                { key: 'f11', width: 'w-12' },
                { key: 'f12', width: 'w-12', align: 'right' },
            ]
        },
        {
            keys: [
                { key: '`', width: 'w-12', align: 'left' },
                { key: '1', width: 'w-12' },
                { key: '2', width: 'w-12' },
                { key: '3', width: 'w-12' },
                { key: '4', width: 'w-12' },
                { key: '5', width: 'w-12' },
                { key: '6', width: 'w-12' },
                { key: '7', width: 'w-12' },
                { key: '8', width: 'w-12' },
                { key: '9', width: 'w-12' },
                { key: '0', width: 'w-12' },
                { key: '-', width: 'w-12' },
                { key: '=', width: 'w-12' },
                { key: 'delete', width: 'w-16', align: 'right' },
            ]
        },
        {
            keys: [
                { key: 'CUSTOM', width: 'w-22', align: 'left' },
                { key: 'q', width: 'w-12' },
                { key: 'w', width: 'w-12' },
                { key: 'e', width: 'w-12' },
                { key: 'r', width: 'w-12' },
                { key: 't', width: 'w-12' },
                { key: 'y', width: 'w-12' },
                { key: 'u', width: 'w-12' },
                { key: 'i', width: 'w-12' },
                { key: 'o', width: 'w-12' },
                { key: 'p', width: 'w-12' },
                { key: '[', width: 'w-12' },
                { key: ']', width: 'w-12' },
                { key: '\\', width: 'w-12', align: 'right' },
            ]
        },
        {
            keys: [
                { key: 'caps lock', width: 'w-20', align: 'left' },
                { key: 'a', width: 'w-12' },
                { key: 's', width: 'w-12' },
                { key: 'd', width: 'w-12' },
                { key: 'f', width: 'w-12' },
                { key: 'g', width: 'w-12' },
                { key: 'h', width: 'w-12' },
                { key: 'j', width: 'w-12' },
                { key: 'k', width: 'w-12' },
                { key: 'l', width: 'w-12' },
                { key: ';', width: 'w-12' },
                { key: '\'', width: 'w-12' },
                { key: 'return', width: 'w-20', align: 'right' },
            ]
        },
        {
            keys: [
                { key: 'shift', width: 'w-24', align: 'left' },
                { key: 'z', width: 'w-12' },
                { key: 'x', width: 'w-12', highlight: true },
                { key: 'c', width: 'w-12', highlight: true },
                { key: 'v', width: 'w-12' },
                { key: 'b', width: 'w-12' },
                { key: 'n', width: 'w-12' },
                { key: 'm', width: 'w-12' },
                { key: ',', width: 'w-12' },
                { key: '.', width: 'w-12' },
                { key: '/', width: 'w-12' },
                { key: 'CUSTOM', width: 'w-24', align: 'right' },
            ]
        },
        {
            keys: [
                { key: 'fn', width: 'w-12', align: 'left' },
                { key: 'control', width: 'w-16' },
                { key: 'option', width: 'w-16' },
                { key: 'command', width: 'w-20', highlight: true },
                { key: 'space', width: 'w-64' },
                { key: 'command', width: 'w-20' },
                { key: 'option', width: 'w-16' },
                { key: '←', width: 'w-12' },
                { key: '↑↓', width: 'w-12' },
                { key: '→', width: 'w-12', align: 'right' },
            ]
        },
    ];

    const handleMouseMove = (e: React.MouseEvent, rowIndex: number, keyIndex: number): void => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        setMousePosition({ x, y });
    };

    const { theme } = useTheme()
    const isDarkMode = theme === "dark"

    if (!mounted) return <div className='size-14'></div>

    return (
        <div className={"p-6 rounded-xl transition-colors duration-300"}>
            <div className={"bg-black/10 p-4 rounded-3xl border shadow-xl"}>
                {rows.map((row, rowIndex) => (
                    <div key={rowIndex} className="flex mb-1 justify-between">
                        {row.keys.map((keyObj, keyIndex) => {
                            const isKeyHighlighted = keyObj.highlight;
                            const isHovered = hoveredKey === `${rowIndex}-${keyIndex}`;

                            return (
                                <div
                                    key={`${rowIndex}-${keyIndex}`}
                                    className={`${keyObj.width} h-12 mx-0.5 relative cursor-pointer`}
                                    onMouseEnter={() => setHoveredKey(`${rowIndex}-${keyIndex}`)}
                                    onMouseLeave={() => setHoveredKey(null)}
                                    onMouseMove={(e) => handleMouseMove(e, rowIndex, keyIndex)}
                                >
                                    <div
                                        className={`
                                            absolute inset-0 rounded-md flex items-center justify-center text-xs font-medium
                                            transition-all duration-150 ease-out border
                                            ${keyObj.key === "CUSTOM" ? "bg-linear-to-bl from-purple-400/80 dark:from-purple-400/50 to-white/90 dark:to-white/5" : ""}
                                            ${keyObj.align === 'left' ? 'justify-start pl-3' : keyObj.align === 'right' ? 'justify-end pr-3' : 'justify-center'}
                                            ${isKeyHighlighted ? 'bg-opacity-90' : 'bg-opacity-95'}
                                            ${isHovered ?
                                                `transform -translate-y-1 scale-105 
                                            ${isDarkMode ?
                                                    'shadow-[0_4px_6px_rgba(0,0,0,0.5),inset_0_1px_3px_rgba(255,255,255,0.15),inset_-2px_0_3px_rgba(255,255,255,0.03),inset_2px_0_3px_rgba(255,255,255,0.03),inset_0_-2px_2px_rgba(0,0,0,0.05)]' :
                                                    'shadow-[0_4px_6px_rgba(0,0,0,0.15),inset_0_1px_3px_rgba(255,255,255,0.5),inset_-2px_0_3px_rgba(255,255,255,0.3),inset_2px_0_3px_rgba(255,255,255,0.3),inset_0_-2px_2px_rgba(0,0,0,0.05)]'
                                                }`
                                                :
                                                `${isDarkMode ?
                                                    'shadow-[0_2px_4px_rgba(0,0,0,0.3),inset_0_1px_1px_rgba(255,255,255,0.1),inset_0_-1px_1px_rgba(0,0,0,0.2)]' :
                                                    'shadow-[0_2px_4px_rgba(0,0,0,0.1),inset_0_1px_1px_rgba(255,255,255,0.7),inset_0_-1px_1px_rgba(0,0,0,0.05)]'
                                                }`
                                            }
                                        `}
                                    >
                                        {keyObj.key}

                                        <div className={`
                                            absolute top-0 left-0 right-0 h-1 rounded-t-md
                                            ${isDarkMode ? 'bg-gradient-to-r from-transparent via-white to-transparent opacity-10' : 'bg-gradient-to-r from-transparent via-white to-transparent opacity-40'}
                                            `}
                                        />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MacKeyboard;
