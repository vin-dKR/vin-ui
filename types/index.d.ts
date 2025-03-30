import React, { ReactNode } from "react"

export { }

declare global {
    interface NavItem {
        name: string;
        link: string;
        icon?: React.ReactNode;
        subItems?: NavItem[];
    }
}
