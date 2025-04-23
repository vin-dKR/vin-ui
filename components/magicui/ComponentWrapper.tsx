"use client";

import { cn } from "@/lib/utils";
import React from "react";
import { Index } from "./__registry__";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./Select"

interface ComponentWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
    name: string;
    selectedVariant?: string
    setSelectedVariant?: (value: string) => void
}

export const ComponentWrapper = ({
    name,
    className,
    children,
    selectedVariant,
    setSelectedVariant
}: ComponentWrapperProps) => {

    return (
        <div
            className={cn(
                "max-w-screen relative rounded-xl border ",
                className,
            )}
        >
            <div
                className={cn(
                    `absolute inset-0 size-full`,
                    `bg-[radial-gradient(#00000022_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff22_1px,transparent_1px)]`,
                    "lab-bg pointer-events-none [background-size:16px_16px]",
                )}
            />
            {Index[name]?.variants && selectedVariant && setSelectedVariant && (
                <Select
                    value={selectedVariant}
                    onValueChange={(value) => setSelectedVariant(value)}
                >
                    <SelectTrigger
                        className="w-[140px] bg-black/10 absolute right-2 top-2 backdrop-blur-md border border-white/20 text-white rounded-lg shadow-lg hover:bg-black/20 transition-all duration-200"
                    >
                        <SelectValue placeholder="Select variant" />
                    </SelectTrigger>
                    <SelectContent
                        className="bg-black/10 backdrop-blur-md border border-white/20 text-white rounded-lg shadow-lg max-h-60 overflow-y-auto"
                    >
                        {Index[name].variants.map((variant: string) => (
                            <SelectItem
                                key={variant}
                                value={variant}
                                className="hover:bg-red-300/80 hover:text-black transition-all duration-150 rounded-md mx-1 my-0.5"
                            >
                                {variant.charAt(0).toUpperCase() + variant.slice(1)}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            )}
            <div className="flex items-center justify-end gap-2 p-4">
            </div>

            <div className={`flex ${name === "neon-timeline" ? "min-h-[600px]" : "min-h-[350px]"} w-full items-center justify-center p-10`}>
                {children}
            </div>
        </div>
    );
};

