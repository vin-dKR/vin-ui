interface MultiColorBgProps {
    className: string
    height: string
    width: string
}

const MultiColorBg = ({ className, width, height }: MultiColorBgProps) => {
    return (
        <div className={className}>
            <svg width={width} height={height} viewBox="0 0 1934 1658" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_f_42_7)">
                    <path d="M975.341 930.01C1020.91 813.123 1167.35 761.054 1302.43 813.712C1437.51 866.37 1510.07 1003.81 1464.51 1120.7C1418.94 1237.59 1272.5 1289.66 1137.42 1237C1002.34 1184.34 929.775 1046.9 975.341 930.01Z" fill="#69C1FF" />
                    <path d="M967.896 1011.96L427.686 801.367L583.974 400.455L1124.18 611.045L967.896 1011.96Z" fill="#3F00FB" />
                    <path d="M1216.91 960.813L1115.26 603.808L1533.36 766.798L1216.91 960.813Z" fill="#FE0098" />
                    <path d="M692.711 1215.08L678.338 997.965L400.198 889.538L669.454 863.781L655.081 646.667L835.864 847.863L1105.12 822.106L947.594 972.208L1128.38 1173.4L850.237 1064.98L692.711 1215.08Z" fill="#7800E0" />
                </g>
                <defs>
                    <filter id="filter0_f_42_7" x="0.198242" y="0.455261" width="1933.17" height="1657.09" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feGaussianBlur stdDeviation="200" result="effect1_foregroundBlur_42_7" />
                    </filter>
                </defs>
            </svg>


        </div>
    )
}

export default MultiColorBg
