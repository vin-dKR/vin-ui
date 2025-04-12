'use client';

import { cn } from '@/lib/utils'

const TableOfContents = ({ headings, activeHeading }: TableOfContentsProps) => {
    if (headings.length === 0) return null;

    return (
        <div className="top-24 max-h-[calc(100vh-6rem)] overflow-y-auto py-2">
            <h2 className="mb-4 text-md font-medium text-foreground">On this page</h2>
            <ul className="space-y-2 text-sm px-4">
                {headings.map((heading) => (
                    <li key={heading.slug}>
                        <a
                            href={`#${heading.slug}`}
                            className={cn(
                                'block transition-colors hover:text-foreground',
                                activeHeading === heading.slug
                                    ? 'text-primary font-medium'
                                    : 'text-muted-foreground'
                            )}
                            style={{
                                marginLeft: `${(heading.depth - 2) * 12}px`,
                            }}
                        >
                            {heading.text}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}


export default TableOfContents
