"use client"

import { getSourceCode, getUtilsSourceCode } from "@/lib/source-code";
import { useEffect, useState, useRef } from "react";
import { ShikiClient } from "../ShikiHighlighter";
import { Copy, CopyCheck } from "lucide-react";
import { Index } from "./__registry__";

interface SourceCodeProps {
    name: string;
}

// Interface for file content and metadata
interface FileContent {
    name: string;
    content: string;
    language: string;
}

const SourceCode: React.FC<SourceCodeProps> = ({ name }) => {
    const [files, setFiles] = useState<FileContent[]>([]);
    const [activeFile, setActiveFile] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const [isExpanded, setIsExpanded] = useState<boolean>(false);
    const [isOverflowing, setIsOverflowing] = useState<boolean>(false);
    const [isCopied, setIsCopied] = useState<boolean>(false)
    const codeContainerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const fetchSourceCode = async () => {
            setLoading(true);
            try {
                const componentData = Index[name];
                if (!componentData) throw new Error(`Component ${name} not found in Index`);

                const mainFilePath = componentData.files[0]?.path;
                if (!mainFilePath) throw new Error(`No main file found for ${name}`);
                const mainContent = await getSourceCode(name); // Use name directly as getSourceCode expects
                const mainFile: FileContent = {
                    name: `${name}.tsx`,
                    content: mainContent,
                    language: "tsx",
                };

                const utilsFiles = await getUtilsSourceCode(name);

                const allFiles = [mainFile, ...utilsFiles];
                setFiles(allFiles);
                setActiveFile(mainFile.name); // Set main file as default active tab
            } catch (err) {
                console.error('Failed to fetch source code:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchSourceCode();
    }, [name]);

    useEffect(() => {
        const checkOverflow = () => {
            if (codeContainerRef.current) {
                const { scrollHeight, clientHeight } = codeContainerRef.current;
                setIsOverflowing(scrollHeight > clientHeight); // True if content exceeds max-height
            }
        };

        checkOverflow();
        window.addEventListener('resize', checkOverflow); // Re-check on window resize

        return () => window.removeEventListener('resize', checkOverflow);
    }, [activeFile, files]);

    const handleToggle = () => {
        setIsExpanded(!isExpanded);
    };

    const handleCopy = async () => {
        const activeContent = files.find(file => file.name === activeFile)?.content || '';
        try {
            await navigator.clipboard.writeText(activeContent);
            setIsCopied(true);
            // Revert button text after 4 seconds
            setTimeout(() => setIsCopied(false), 4000);
        } catch (err) {
            console.error('Failed to copy:', err);
        }
    };

    const handleTabChange = (fileName: string) => {
        setActiveFile(fileName);
        setIsExpanded(false); // Reset to shrunk state when switching tabs
    };

    if (loading) return <div className="max-h-[350px]">loading...</div>;

    const activeContent = files.find(file => file.name === activeFile)?.content || '';
    const activeLanguage = files.find(file => file.name === activeFile)?.language || 'tsx';

    return (
        <div className="relative bg-black/5 dark:bg-blue-400/5 p-4 border rounded-lg">
            {/* Tabs for multiple files (shown when multiple files exist) */}
            {files.length > 1 && (
                <div className="flex border-b border-gray-200 dark:border-gray-700 mb-2">
                    {files.map(file => (
                        <button
                            key={file.name}
                            className={`px-4 py-2 text-sm font-medium transition-colors ${activeFile === file.name
                                ? 'bg-gray-200 dark:bg-gray-700 text-black dark:text-white border-b-2 border-blue-500 rounded-t-lg'
                                : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'
                                }`}
                            onClick={() => handleTabChange(file.name)}
                            aria-label={`View ${file.name}`}
                        >
                            {file.name}
                        </button>
                    ))}
                </div>
            )}

            <button
                className="absolute top-2 right-2 bg-gray-200/20 dark:bg-gray-700/20 text-sm px-2 py-2 rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors z-10"
                onClick={handleCopy}
                aria-label={isCopied ? 'Code copied to clipboard' : 'Copy code to clipboard'}
            >
                {isCopied ? <CopyCheck className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
            </button>

            <div
                ref={codeContainerRef}
                className={`overflow-x-auto transition-all duration-300 ${isExpanded ? 'max-h-none' : 'max-h-[350px] overflow-y-hidden'
                    }`}
            >
                <ShikiClient code={activeContent} lang={activeLanguage} />
            </div>

            {isOverflowing && !isExpanded && (
                <div
                    className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-black/30 dark:to-black rounded rounded-lg"
                />
            )}

            {isOverflowing && (
                <div className="absolute bottom-2 left-0 right-0 flex justify-center">
                    <button
                        className="bg-gray-200 dark:bg-gray-700 text-sm px-3 py-1 rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors z-10"
                        onClick={handleToggle}
                        aria-label={isExpanded ? 'Shrink code block' : 'Expand code block'}
                    >
                        {isExpanded ? 'Shrink' : 'Expand'}
                    </button>
                </div>
            )}
        </div>
    );
};

export default SourceCode;
