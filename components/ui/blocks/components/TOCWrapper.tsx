'use client';

import { useEffect, useState } from 'react';
import TableOfContents from './TableOfContents';

const TOCWrapper = ({ headings }: { headings: MDXHeading[] | undefined }) => {
    const [activeHeading, setActiveHeading] = useState('');

    if (!headings) return
    useEffect(() => {
        const handleScroll = () => {
            const headingsWithPositions = headings.map((h) => {
                const element = document.getElementById(h.slug);
                return {
                    ...h,
                    offsetTop: element?.offsetTop || 0,
                };
            });

            const scrollPosition = window.scrollY + 400;

            for (let i = headingsWithPositions.length - 1; i >= 0; i--) {
                if (scrollPosition >= headingsWithPositions[i].offsetTop) {
                    setActiveHeading(headingsWithPositions[i].slug);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [headings]);

    return <TableOfContents headings={headings} activeHeading={activeHeading} />;
}

export default TOCWrapper
