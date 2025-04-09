import React, { ReactNode } from "react"

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

}
