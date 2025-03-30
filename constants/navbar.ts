import { ReactNode } from "react";

interface NavItem {
    name: string;
    link: string;
    icon: ReactNode;
}

const navItems: NavItem[] = [
    {
        name: "Home",
        link: "/",
        icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
        name: "About",
        link: "/about",
        icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
        name: "Contact",
        link: "/contact",
        icon: <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
];

export default navItems;

