export default {
    darkMode: 'class', // This enables class-based dark mode
    content: [
        './src/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            boxShadow: {
                'colored': '0 4px 6px -1px rgba(255, 0, 0, 0.5)',
                'inset-2xs': 'inset 0 1px 2px rgba(0, 0, 0, 0.2)',  // Very subtle
                'inset-xs': 'inset 0 2px 4px rgba(0, 0, 0, 0.2)',   // Small
                'inset-sm': 'inset 0 3px 6px rgba(0, 0, 0, 0.2)',   // Slightly larger
            },
            colors: {
                background: '#0a0a0a',
                foreground: '#ffffff',
                primary: {
                    DEFAULT: '#7c3aed',
                    foreground: '#ffffff',
                    50: '#f5f3ff',
                    100: '#ede9fe',
                    200: '#ddd6fe',
                    300: '#c4b5fd',
                    400: '#a78bfa',
                    500: '#8b5cf6',
                    600: '#7c3aed',
                    700: '#6d28d9',
                    800: '#5b21b6',
                    900: '#4c1d95',
                },
            },
            animation: {
                "slide-in": "slideIn 0.3s ease-in-out forwards",
                spotlight: "spotlight 2s ease .75s 1 forwards",
                spotlightBtn: "spotlight 2s linear infinite",
            },
            keyframes: {
                slideIn: {
                    "0%": { opacity: "0", transform: "translateY(10px)" },
                    "100%": { opacity: "1", transform: "translateY(0)" },
                },
                spotlight: {
                    "0%": {
                        opacity: 0,
                        transform: "translate(-72%, -62%) scale(0.5)",
                    },
                    "100%": {
                        opacity: 1,
                        transform: "translate(-50%,-40%) scale(1)",
                    },
                },
                spotlightBtn: {
                    "0%": { "background-position": "-100% 0" },
                    "100%": { "background-position": "100% 0" },
                },
            },
            plugins: [],
        },
    }
}
