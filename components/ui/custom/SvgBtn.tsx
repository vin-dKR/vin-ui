import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react';

interface GetStartedButtonProps {
    text: string
    href: string
    className?: string;
}

const GetStartedButton = ({ text, href = "/components" }: GetStartedButtonProps) => {
    console.log('GetStartedButton props:', { href, text }); // Add this line

    return (
        <div className="relative w-50 h-10 mx-auto">
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
                <Link href={href} className='font-soraSemi text-xl'>
                    {text}
                </Link>
            </div>

        </div>
    );
};

export default GetStartedButton;
