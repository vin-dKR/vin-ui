import { docsConfig } from "@/lib/docs-config";
import DocsSidebar from "@/components/ui/blocks/components/DocSidebar";
import { GalaxyNavbar } from "@/components/ui/blocks/GalaxyNavbar";

interface ComponentsLayoutProps {
    children: React.ReactNode;
}

const ComponentsLayout = ({ children }: ComponentsLayoutProps) => {
    return (
        <div className="flex min-h-screen flex-col max-w-7xl mx-auto">
            <GalaxyNavbar />

            <div className="flex-1 flex flex-col md:flex-row relative gap-10">
                <aside
                    className="fixed px-4 pr-2 pt-4 bg-gradient-to-b dark:from-white/5 from-black/5 from-60% to-transparent backdrop-blur-lg rounded-xl top-[calc(5rem_+_35px)] z-30 ml-2 hidden h-[calc(90vh-6.5rem)] w-[220px] shrink-0 md:sticky md:block"
                >
                    <DocsSidebar items={docsConfig.sidebarNav} />
                </aside>

                <main
                    className="mx-auto overflow-y-auto w-full mt-30"
                >
                    <div className="mx-auto w-full min-w-0">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    )
}


export default ComponentsLayout
