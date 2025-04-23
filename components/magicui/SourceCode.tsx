"use client"

import { getSourceCode } from "@/lib/source-code";
import { useEffect, useState, useRef } from "react";
import { ShikiClient } from "../ShikiHighlighter";
import { Copy, CopyCheck } from "lucide-react";

// Props interface for the SourceCode component
interface SourceCodeProps {
    name: string;
}

const SourceCode: React.FC<SourceCodeProps> = ({ name }) => {
    const [srcCode, setSrcCode] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const [isExpanded, setIsExpanded] = useState<boolean>(false); // Tracks expanded/shrunk state
    const codeContainerRef = useRef<HTMLDivElement>(null); // Reference to code container
    const [isCopied, setIsCopied] = useState<boolean>(false);

    // Fetch source code on mount
    useEffect(() => {
        const sourceCode = async () => {
            setLoading(true);
            const fileContent = await getSourceCode(name);
            setSrcCode(fileContent);
            setLoading(false);
        };

        sourceCode();
    }, [name]);

    // Check for overflow when srcCode changes or on resize
    useEffect(() => {
        const checkOverflow = () => {
            if (codeContainerRef.current) {
                const { scrollHeight, clientHeight } = codeContainerRef.current;
            }
        };

        checkOverflow();
        window.addEventListener('resize', checkOverflow); // Re-check on window resize

        return () => window.removeEventListener('resize', checkOverflow);
    }, [srcCode]);

    // Toggle between expanded and shrunk states
    const handleToggle = () => {
        setIsExpanded(!isExpanded);
    };

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(srcCode);
            setIsCopied(true);
            // Revert button text after 2 seconds
            setTimeout(() => setIsCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy:', err);
        }
    };
    if (loading) return <div>loading...</div>;

    return (
        <div className="relative bg-black/5 dark:bg-blue-400/5 p-4 border rounded-lg">
            <button
                className="absolute top-2 right-2 bg-gray-200/20 dark:bg-gray-700/20 text-sm px-2 py-2 rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors z-10"
                onClick={handleCopy}
                aria-label={isCopied ? 'Code copied to clipboard' : 'Copy code to clipboard'}
            >
                {isCopied ? <CopyCheck className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
            </button>
            {/* Code container with dynamic max-height */}
            <div
                ref={codeContainerRef}
                className={`overflow-x-auto transition-all duration-300 ${isExpanded ? 'max-h-none' : 'max-h-[550px] overflow-y-hidden'
                    }`}
            >
                <ShikiClient code={srcCode} lang="tsx" />
            </div>

            {/* Gradient overlay, shown when overflowing and not expanded */}
            {!isExpanded &&
                <div
                    className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-black/30 dark:to-black rounded rounded-lg"
                />
            }

            {/* Toggle button at the bottom, shown when overflowing */}
            <div className="absolute bottom-2 left-0 right-0 flex justify-center">
                <button
                    className="bg-gray-200 dark:bg-gray-700 text-sm px-3 py-1 rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors z-10"
                    onClick={handleToggle}
                    aria-label={isExpanded ? 'Shrink code block' : 'Expand code block'}
                >
                    {isExpanded ? 'Shrink' : 'Expand'}
                </button>
            </div>
        </div>
    );
};

export default SourceCode;
