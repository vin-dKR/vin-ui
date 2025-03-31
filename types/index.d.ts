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
}
