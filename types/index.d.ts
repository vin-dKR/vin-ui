import React, { ReactNode } from "react"
import { MDXRemoteSerializeResult } from 'next-mdx-remote';

export { }

declare global {
    interface NavItem {
        name: string;
        link: string;
        icon?: React.ReactNode;
        subItems?: NavItem[];
    }


    interface NavBackgroundProps {
        flarePosition: { x: number; y: number };
    }

    interface NavMobileButtonProps {
        isOpen: boolean;
        onClickAction: () => void;
    }

    interface SearchBarProps {
        searchQuery: string;
        setSearchQuery: (query: string) => void;
    }

    interface CategoryFilterProps {
        selectedCategory: string | null;
        setSelectedCategory: (category: string | null) => void;
    }

    interface ComponentsGridProps {
        selectedCategory: string | null;
        searchQuery: string;
    }

    interface MetadataBarProps {
        selectedCategory: string | null;
        setSelectedCategory: (category: string | null) => void;
    }

    interface MDXHeading {
        text: string
        depth: number
        slug: string
    }

    interface MDXFrontmatter {
        title: string
        description: string
    }

    interface MDXContent {
        frontMatter: MDXFrontmatter
        content: MDXRemoteSerializeResult,
        slug: string
        headings?: MDXHeading[]
    }


    interface TableOfContentsProps {
        headings: MDXHeading[];
        activeHeading?: string;
    }

    interface BreadcrumbItem {
        label: string;
        href: string;
    }

    interface BreadcrumbsProps {
        items?: BreadcrumbItem[];
        currentPage: string;
    }

}
