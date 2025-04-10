export interface MainNavItem {
    title: string;
    href: string;
    event?: string;
    label?: string;
}

export interface SidebarNavItem {
    title: string;
    items: {
        title: string;
        href: string;
        items: SidebarNavItem[];
        category?: "Layout" | "Animation" | "Display" | "Forms" | "Overlays"
    }[];
}

export interface DocsConfig {
    mainNav: MainNavItem[];
    sidebarNav: SidebarNavItem[];
}

export const docsConfig: DocsConfig = {
    mainNav: [
        {
            title: "Components",
            href: "/components",
        },
        {
            title: "Showcase",
            href: "/showcase",
        },
    ],
    sidebarNav: [
        {
            title: "Getting Started",
            items: [
                {
                    title: "Introduction",
                    href: "/docs",
                    items: [],
                },
                {
                    title: "Installation",
                    href: "/docs/installation",
                    items: [],
                },
                {
                    title: "CLI",
                    href: "/docs/cli",
                    items: [],
                },
            ],
        },
        {
            title: "Components",
            items: [
                {
                    title: "Button",
                    href: "/components/button",
                    items: [],
                    category: "Forms"
                },
                {
                    title: "Card",
                    href: "/components/card",
                    items: [],
                    category: "Display"
                },
                {
                    title: "Neon Timeline",
                    href: "/components/neon-timeline",
                    items: [],
                    category: "Overlays"
                },
                {
                    title: "Button",
                    href: "/components/button",
                    items: [],
                    category: "Forms"
                },
                {
                    title: "Card",
                    href: "/components/card",
                    items: [],
                    category: "Display"
                },
                {
                    title: "Neon Timeline",
                    href: "/components/neon-timeline",
                    items: [],
                    category: "Overlays"
                },
            ],
        },
    ],
}
