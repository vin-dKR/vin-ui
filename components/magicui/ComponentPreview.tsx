import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./Tabs"
import { Index } from "./__registry__";
import { ComponentWrapper } from "./ComponentWrapper";
import SourceCode from "./SourceCode"; // Adjust the import path
import { Icons } from "./Icons";

interface ComponentPreviewProps extends React.HTMLAttributes<HTMLDivElement> {
    name: string;
    preview?: boolean;
    className?: string
}

export function ComponentPreview({
    name,
    className,
    preview = false,
    ...props
}: ComponentPreviewProps) {
    const [selectedVariant, setSelectedVariant] = useState<string>(
        Index[name]?.variants?.[0] || "purple"
    );

    const Preview = React.useMemo(() => {
        const Component = Index[name]?.component;

        if (!Component) {
            console.error(`import { Icons } from "./Icons";
                          Component with name "${name}" not found in registry.`);
            return (
                <p className="text-sm text-muted-foreground">
                    Component{" "}
                    <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
                        {name}
                    </code>{" "}
                    not found in registry.
                </p>
            );
        }

        return <Component variant={selectedVariant} />;
    }, [name, selectedVariant])

    return (
        <div
            className={cn(
                "relative my-4 flex flex-col space-y-2 lg:max-w-[120ch]",
                className
            )}
            {...props}
        >
            <Tabs defaultValue="preview" className="relative mr-auto w-full">
                {!preview && (
                    <div className="flex items-center justify-between pb-3">
                        <TabsList className="w-full justify-start rounded-none border-b bg-transparent p-0">
                            <TabsTrigger
                                value="preview"
                                className="relative h-9 rounded rounded-t-lg border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
                            >
                                Preview
                            </TabsTrigger>
                            <TabsTrigger
                                value="code"
                                className="relative h-9 rounded rounded-t-lg border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
                            >
                                Code
                            </TabsTrigger>
                        </TabsList>
                    </div>
                )}

                <TabsContent value="preview" className="relative rounded-md">
                    <ComponentWrapper selectedVariant={selectedVariant} setSelectedVariant={setSelectedVariant} name={name}>
                        <React.Suspense
                            fallback={
                                <div className="flex items-center text-sm text-muted-foreground">
                                    <Icons.spinner className="mr-2 size-4 animate-spin" />
                                    Loading...
                                </div>
                            }
                        >
                            {Preview}
                        </React.Suspense>
                    </ComponentWrapper>
                </TabsContent>
                <TabsContent value="code">
                    <SourceCode name={name} />
                </TabsContent>
            </Tabs>
        </div>
    );
}
