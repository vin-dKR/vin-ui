'use client';

import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote';
import { MDXComponents } from './MDXComponents';

export default function MDXContent(props: MDXRemoteProps) {
    return <MDXRemote {...props} components={MDXComponents} />;
}
