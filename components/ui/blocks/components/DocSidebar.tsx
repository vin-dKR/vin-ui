"use client"

import Link from "next/link";
import { SidebarNavItem } from "@/lib/docs-config";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

interface DocsSidebarProps {
    items: SidebarNavItem[];
}

const DocsSidebar = ({ items }: DocsSidebarProps) => {
    const pathname = usePathname();

    return (
        <div className="w-full overflow-y-auto h-[calc(90vh-6.5rem)]">
            {items.map((item, index) => (
                <div key={index} className="relative pb-8">
                    <div
                        className="absolute left-6 top-8 bottom-0 w-px bg-gray-200 dark:bg-gray-700"
                        style={{
                            height: `calc(100% - 4.25rem)`,
                            display: item.items?.length ? 'block' : 'none'
                        }}
                    ></div>

                    <h4 className="mb-1 rounded-md px-2 py-1 text-sm font-medium ">
                        {item.title}
                    </h4>

                    {item.items?.length > 0 && (
                        <div className="grid grid-flow-row auto-rows-max text-sm pl-8 ">
                            {item.items.map((subItem, idx) => (
                                <Link
                                    key={idx}
                                    href={subItem.href}
                                    className={cn(
                                        "flex w-full items-center rounded-md p-1 opacity-50 hover:opacity-100 pl-4",
                                        {
                                            "bg-muted": pathname === subItem.href,
                                        }
                                    )}
                                >
                                    {subItem.title}
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </div>
    )
}


export default DocsSidebar
