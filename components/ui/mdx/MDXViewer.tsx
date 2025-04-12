'use client';

import dynamic from 'next/dynamic';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';

// Dynamically import MDXContent with no SSR
const MDXContent = dynamic(
    () => import('@/components/ui/mdx/MDXContent'),
    { ssr: false }
);

interface MDXViewerProps {
    content: MDXRemoteSerializeResult;
}

export default function MDXViewer({ content }: MDXViewerProps) {
    return <MDXContent {...content} />;
}
