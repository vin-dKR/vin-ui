import { cn } from '@/lib/utils';
import React from 'react';

interface GetStartedButtonProps {
    onClick?: () => void;
    className?: string;
    style?: React.CSSProperties;
}

const GetStartedButton: React.FC<GetStartedButtonProps> = ({ onClick, className, style }) => {
    return (
        <div className="relative w-50 h-10">
            {/* Bottom layer: Blurred button */}
            <div
                className={cn(
                    'w-51 h-12 -top-2 rounded-full font-medium text-sm absolute overflow-hidden flex items-center justify-center',
                    'bg-gradient-to-tl from-violet-950 from-20% to-white',
                    'hover:shadow-lg hover:shadow-violet-500/20 transition-all group z-0',
                    'blur-md'
                )}
            />
            <div className={cn(
                'absolute w-50 h-10 bg-gradient-to-br -top-[2px] -left-[2px] from-white to-[#3A009E]',
                'rounded-full z-10'
            )} />

            {/* 
            */}
            <div
                className={cn(
                    'w-49 h-9 rounded-full font-medium text-sm absolute overflow-hidden flex items-center justify-center',
                    'bg-gradient-to-br from-violet-950 from-20% to-white',
                    'hover:shadow-lg hover:shadow-violet-500/20 transition-all group',
                    'z-10'
                )}
            >
                <p className='font-soraSemi text-xl'>
                    Get Started
                </p>
            </div>

        </div>
    );
};

export default GetStartedButton;
