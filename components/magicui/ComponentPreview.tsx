import { Index } from "./__registry__";
import { Icons } from "./Icons";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./Tabs"
import { cn } from "@/lib/utils";
import * as React from "react";

interface ComponentPreviewProps extends React.HTMLAttributes<HTMLDivElement> {
    name: string;
    align?: "center" | "start" | "end";
    preview?: boolean;
}


export function ComponentWrapper({ name, children }: { name: string; children: React.ReactNode }) {
    return (
        <div className="relative flex items-center justify-center p-4 border rounded-lg bg-muted/50">
            {children}
        </div>
    );
}

export function ComponentPreview({
    name,
    children,
    className,
    align = "center",
    preview = false,
    ...props
}: ComponentPreviewProps) {
    const Codes = React.Children.toArray(children) as React.ReactElement[];
    const Code = Codes[0];

    const PreviewComponent = Index[name]?.component;

    if (!PreviewComponent) {
        console.error(`Component "${name}" not found in registry.`);
        return (
            <div className={cn("relative my-4 flex flex-col space-y-2 lg:max-w-[120ch]", className)} {...props}>
                <p className="text-sm text-muted-foreground">
                    Component <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
                        {name}
                    </code> not found in registry.
                </p>
            </div>
        );
    }

    return (
        <div className={cn("relative my-4 flex flex-col space-y-2 lg:max-w-[120ch]", className)} {...props}>
            <Tabs defaultValue="preview" className="relative mr-auto w-full">
                {!preview && (
                    <div className="flex items-center justify-between pb-3">
                        <TabsList className="w-full justify-start rounded-none border-b bg-transparent p-0">
                            <TabsTrigger
                                value="preview"
                                className="relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
                            >
                                Preview
                            </TabsTrigger>
                            <TabsTrigger
                                value="code"
                                className="relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
                            >
                                Code
                            </TabsTrigger>
                        </TabsList>
                    </div>
                )}
                <TabsContent value="preview" className="relative rounded-md">
                    <ComponentWrapper name={name}>
                        <React.Suspense fallback={
                            <div className="flex items-center text-sm text-muted-foreground">
                                <Icons.spinner className="mr-2 size-4 animate-spin" />
                                Loading...
                            </div>
                        }>
                            <PreviewComponent />
                        </React.Suspense>
                    </ComponentWrapper>
                </TabsContent>
                <TabsContent value="code">
                    <div className="flex flex-col space-y-4">
                        <div className="w-full rounded-md [&_pre]:my-0 [&_pre]:max-h-[350px] [&_pre]:overflow-auto">
                            {Code}
                        </div>
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    );
}
