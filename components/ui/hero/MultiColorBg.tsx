interface MultiColorBgProps {
    className: string
    height: string
    width: string
}


import { useEffect, useState } from 'react';

const MultiColorBg = ({ className, width, height }: MultiColorBgProps) => {
    const [viewBox, setViewBox] = useState("-120 0 1934 1658");

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                // Mobile view - tighter crop
                setViewBox("400 200 1400 1200");
            } else if (window.innerWidth < 1024) {
                // Tablet view
                setViewBox("0 0 1700 1450");
            } else {
                // Desktop view - original
                setViewBox("-200 0 1934 1658");
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className={className}>
            <svg
                width={width}
                height={height}
                viewBox={viewBox}
                preserveAspectRatio="xMidYMid meet"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g filter="url(#filter0_fn_44_81)">
                    <path d="M733.695 897.818C779.261 780.931 925.704 728.862 1060.78 781.52C1195.86 834.178 1268.43 971.622 1222.86 1088.51C1177.29 1205.4 1030.85 1257.47 895.773 1204.81C760.693 1152.15 688.128 1014.71 733.695 897.818Z" fill="#69C1FF" />
                    <path d="M726.25 979.765L186.04 769.175L342.327 368.263L882.537 578.853L726.25 979.765Z" fill="#4D19A7" />
                    <path d="M975.264 928.621L873.614 571.616L1291.72 734.606L975.264 928.621Z" fill="#FE0098" />
                    <path d="M451.065 1182.89L436.691 965.773L158.552 857.346L427.808 831.589L413.434 614.475L594.217 815.671L863.473 789.914L705.947 940.016L886.73 1141.21L608.591 1032.78L451.065 1182.89Z" fill="#7800E0" />
                </g>
                <defs>
                    <filter id="filter0_fn_44_81" x="-241.448" y="-31.7368" width="1933.17" height="1657.09" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feGaussianBlur stdDeviation="200" result="effect1_foregroundBlur_44_81" />
                        <feTurbulence type="fractalNoise" baseFrequency="5 5" stitchTiles="stitch" numOctaves="3" result="noise" seed="524" />
                        <feColorMatrix in="noise" type="luminanceToAlpha" result="alphaNoise" />
                        <feComponentTransfer in="alphaNoise" result="coloredNoise1">
                            <feFuncA type="discrete" tableValues="1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 " />
                        </feComponentTransfer>
                        <feComposite operator="in" in2="effect1_foregroundBlur_44_81" in="coloredNoise1" result="noise1Clipped" />
                        <feFlood floodColor="rgba(0, 0, 0, 0.25)" result="color1Flood" />
                        <feComposite operator="in" in2="noise1Clipped" in="color1Flood" result="color1" />
                        <feMerge result="effect2_noise_44_81">
                            <feMergeNode in="effect1_foregroundBlur_44_81" />
                            <feMergeNode in="color1" />
                        </feMerge>
                    </filter>
                </defs>
            </svg>
        </div>
    )
}

export default MultiColorBg
