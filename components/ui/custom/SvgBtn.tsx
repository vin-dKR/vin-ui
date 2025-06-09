import { cn } from '@/lib/utils';
import React from 'react';

interface GetStartedButtonProps {
    text: string
    width?: number
    onClick?: () => void;
    className?: string;
    style?: React.CSSProperties;
}

const GetStartedButton: React.FC<GetStartedButtonProps> = ({ text, width = 50, className, style }) => {
    return (
        <div className={cn('relative h-10 w-full mx-auto', `w-${width}`)}>
            {/* Bottom layer: Blurred button */}
            <div
                className={cn(
                    'h-12 -top-2 rounded-full font-medium text-sm absolute overflow-hidden flex items-center justify-center',
                    'bg-gradient-to-tl from-violet-950 from-20% to-white',
                    'hover:shadow-lg hover:shadow-violet-500/20 transition-all group z-0',
                    'blur-md',
                    `w-${width}`,
                    className,
                )}
            />
            <div className={cn(
                'absolute h-10 bg-gradient-to-br -top-[2px] -left-[2px] from-white to-[#3A009E]',
                'rounded-full z-10',
                `w-${width}`,
            )} />

            {/* 
            */}
            <div
                className={cn(
                    'h-9 rounded-full font-medium text-sm absolute overflow-hidden flex items-center justify-center',
                    'bg-gradient-to-br from-violet-950 from-20% to-white',
                    'hover:shadow-lg hover:shadow-violet-500/20 transition-all group',
                    'z-10',
                    `w-${width - 1}`,
                )}
            >
                <p className={cn('font-soraSemi text-xl', className)}>
                    {text}
                </p>
            </div>

        </div>
    );
};

export default GetStartedButton;
