import React from 'react';

const MotionRays = () => {
    return (
        <div>
            <svg className="absolute top-0 w-full h-full scale-300 opacity-30" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600">
                <defs>
                    <linearGradient id="rayGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#9f00ff" stopOpacity="0.9">
                            <animate attributeName="stopOpacity" values="0.9;0.5;0.9" dur="6s" repeatCount="indefinite" />
                        </stop>
                        <stop offset="100%" stopColor="#9f00ff" stopOpacity="0">
                            <animate attributeName="stopOpacity" values="0;0.3;0" dur="7s" repeatCount="indefinite" />
                        </stop>
                    </linearGradient>

                    <linearGradient id="rayGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#566fff" stopOpacity="0.9">
                            <animate attributeName="stopOpacity" values="0.9;0.6;0.9" dur="8s" repeatCount="indefinite" />
                        </stop>
                        <stop offset="100%" stopColor="#566fff" stopOpacity="0">
                            <animate attributeName="stopOpacity" values="0;0.3;0" dur="9s" repeatCount="indefinite" />
                        </stop>
                    </linearGradient>

                    <filter id="glow1" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur stdDeviation="25" result="blur" />
                        <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>

                    <filter id="glow2" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur stdDeviation="20" result="blur" />
                        <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>

                    <filter id="overallBlur" x="-10%" y="-10%" width="120%" height="120%">
                        <feGaussianBlur stdDeviation="8" />
                    </filter>

                    <filter id="noise" x="0%" y="0%" width="100%" height="100%">
                        <feTurbulence type="fractalNoise" baseFrequency="0.015" numOctaves="4" seed="1" result="noise" />
                        <feDisplacementMap in="SourceGraphic" in2="noise" scale="30" xChannelSelector="R" yChannelSelector="G" />
                    </filter>

                    <filter id="softLight">
                        <feBlend mode="soft-light" in="SourceGraphic" in2="SourceGraphic" />
                        <feGaussianBlur stdDeviation="5" />
                    </filter>
                </defs>

                <rect width="800" height="600" fill="#000" opacity="0.15" />

                <g transform="translate(650, -100)" filter="url(#overallBlur)">
                    <path d="M 0,0 L -400,600 L -340,600 L 0,0" fill="url(#rayGradient1)" opacity="0.8" filter="url(#glow1)">
                        <animateTransform attributeName="transform" type="rotate" from="0 0 0" to="5 0 0" dur="10s" repeatCount="indefinite" additive="sum" />
                        <animate attributeName="opacity" values="0.8;0.4;0.8" dur="12s" repeatCount="indefinite" />
                    </path>

                    <path d="M 0,0 L -500,600 L -440,600 L 0,0" fill="url(#rayGradient1)" opacity="0.7" filter="url(#glow1)">
                        <animateTransform attributeName="transform" type="rotate" from="0 0 0" to="-7 0 0" dur="15s" repeatCount="indefinite" additive="sum" />
                        <animate attributeName="opacity" values="0.7;0.3;0.7" dur="9s" repeatCount="indefinite" />
                    </path>

                    <path d="M 0,0 L -300,600 L -240,600 L 0,0" fill="url(#rayGradient1)" opacity="0.6" filter="url(#glow1)">
                        <animateTransform attributeName="transform" type="rotate" from="0 0 0" to="8 0 0" dur="18s" repeatCount="indefinite" additive="sum" />
                        <animate attributeName="opacity" values="0.6;0.2;0.6" dur="14s" repeatCount="indefinite" />
                    </path>

                    <path d="M 0,0 L -600,600 L -540,600 L 0,0" fill="url(#rayGradient1)" opacity="0.5" filter="url(#glow1)">
                        <animateTransform attributeName="transform" type="rotate" from="0 0 0" to="-6 0 0" dur="20s" repeatCount="indefinite" additive="sum" />
                        <animate attributeName="opacity" values="0.5;0.1;0.5" dur="11s" repeatCount="indefinite" />
                    </path>

                    <path d="M 0,0 L -350,600 L -290,600 L 0,0" fill="url(#rayGradient1)" opacity="0.75" filter="url(#glow1)">
                        <animateTransform attributeName="transform" type="rotate" from="0 0 0" to="10 0 0" dur="13s" repeatCount="indefinite" additive="sum" />
                        <animate attributeName="opacity" values="0.75;0.35;0.75" dur="10s" repeatCount="indefinite" />
                    </path>

                    <path d="M 0,0 L -450,600 L -390,600 L 0,0" fill="url(#rayGradient1)" opacity="0.65" filter="url(#glow1)">
                        <animateTransform attributeName="transform" type="rotate" from="0 0 0" to="-12 0 0" dur="17s" repeatCount="indefinite" additive="sum" />
                        <animate attributeName="opacity" values="0.65;0.25;0.65" dur="15s" repeatCount="indefinite" />
                    </path>

                    <path d="M 0,0 L -250,600 L -190,600 L 0,0" fill="url(#rayGradient1)" opacity="0.85" filter="url(#glow1)">
                        <animateTransform attributeName="transform" type="rotate" from="0 0 0" to="15 0 0" dur="16s" repeatCount="indefinite" additive="sum" />
                        <animate attributeName="opacity" values="0.85;0.45;0.85" dur="13s" repeatCount="indefinite" />
                    </path>
                </g>

                <g transform="translate(700, -150)" filter="url(#overallBlur)">
                    <path d="M 0,0 L -350,600 L -290,600 L 0,0" fill="url(#rayGradient2)" opacity="0.7" filter="url(#glow2)">
                        <animateTransform attributeName="transform" type="rotate" from="0 0 0" to="6 0 0" dur="13s" repeatCount="indefinite" additive="sum" />
                        <animate attributeName="opacity" values="0.7;0.3;0.7" dur="10s" repeatCount="indefinite" />
                    </path>

                    <path d="M 0,0 L -450,600 L -390,600 L 0,0" fill="url(#rayGradient2)" opacity="0.6" filter="url(#glow2)">
                        <animateTransform attributeName="transform" type="rotate" from="0 0 0" to="-8 0 0" dur="16s" repeatCount="indefinite" additive="sum" />
                        <animate attributeName="opacity" values="0.6;0.2;0.6" dur="8s" repeatCount="indefinite" />
                    </path>

                    <path d="M 0,0 L -250,600 L -190,600 L 0,0" fill="url(#rayGradient2)" opacity="0.8" filter="url(#glow2)">
                        <animateTransform attributeName="transform" type="rotate" from="0 0 0" to="4 0 0" dur="14s" repeatCount="indefinite" additive="sum" />
                        <animate attributeName="opacity" values="0.8;0.4;0.8" dur="9s" repeatCount="indefinite" />
                    </path>

                    <path d="M 0,0 L -550,600 L -490,600 L 0,0" fill="url(#rayGradient2)" opacity="0.5" filter="url(#glow2)">
                        <animateTransform attributeName="transform" type="rotate" from="0 0 0" to="-5 0 0" dur="17s" repeatCount="indefinite" additive="sum" />
                        <animate attributeName="opacity" values="0.5;0.1;0.5" dur="12s" repeatCount="indefinite" />
                    </path>

                    <path d="M 0,0 L -400,600 L -340,600 L 0,0" fill="url(#rayGradient2)" opacity="0.75" filter="url(#glow2)">
                        <animateTransform attributeName="transform" type="rotate" from="0 0 0" to="9 0 0" dur="15s" repeatCount="indefinite" additive="sum" />
                        <animate attributeName="opacity" values="0.75;0.35;0.75" dur="11s" repeatCount="indefinite" />
                    </path>

                    <path d="M 0,0 L -500,600 L -440,600 L 0,0" fill="url(#rayGradient2)" opacity="0.65" filter="url(#glow2)">
                        <animateTransform attributeName="transform" type="rotate" from="0 0 0" to="-11 0 0" dur="19s" repeatCount="indefinite" additive="sum" />
                        <animate attributeName="opacity" values="0.65;0.25;0.65" dur="13s" repeatCount="indefinite" />
                    </path>

                    <path d="M 0,0 L -300,600 L -240,600 L 0,0" fill="url(#rayGradient2)" opacity="0.85" filter="url(#glow2)">
                        <animateTransform attributeName="transform" type="rotate" from="0 0 0" to="13 0 0" dur="12s" repeatCount="indefinite" additive="sum" />
                        <animate attributeName="opacity" values="0.85;0.45;0.85" dur="14s" repeatCount="indefinite" />
                    </path>
                </g>

                <g transform="translate(680, -120)" filter="url(#overallBlur)">
                    <path d="M 0,0 L -420,600 L -320,600 L 0,0" fill="url(#rayGradient1)" opacity="0.65" filter="url(#glow1)">
                        <animateTransform attributeName="transform" type="rotate" from="0 0 0" to="7 0 0" dur="14s" repeatCount="indefinite" additive="sum" />
                        <animate attributeName="opacity" values="0.65;0.3;0.65" dur="11s" repeatCount="indefinite" />
                    </path>

                    <path d="M 0,0 L -470,600 L -370,600 L 0,0" fill="url(#rayGradient2)" opacity="0.60" filter="url(#glow2)">
                        <animateTransform attributeName="transform" type="rotate" from="0 0 0" to="-9 0 0" dur="16s" repeatCount="indefinite" additive="sum" />
                        <animate attributeName="opacity" values="0.6;0.25;0.6" dur="10s" repeatCount="indefinite" />
                    </path>
                </g>

                <rect width="800" height="600" fill="url(#rayGradient1)" opacity="0.08" filter="url(#noise)">
                    <animate attributeName="opacity" values="0.08;0.15;0.08" dur="8s" repeatCount="indefinite" />
                </rect>

                <rect width="800" height="600" fill="url(#rayGradient2)" opacity="0.05" filter="url(#softLight)">
                    <animate attributeName="opacity" values="0.05;0.1;0.05" dur="9s" repeatCount="indefinite" />
                </rect>
            </svg>
        </div>
    );
};

export default MotionRays
