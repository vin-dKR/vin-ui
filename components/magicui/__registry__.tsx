/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
// @ts-nocheck
import * as React from "react";

export const Index: Record<string, any> = {
    "button": {
        name: "button",
        description:
            "A spotlight effect that follows your mouse cursor and highlights borders on hover.",
        type: "registry:ui",
        registryDependencies: undefined,
        files: [
            {
                path: "@/components/magicui/MagicCard.tsx",
                type: "registry:ui",
                target: "@/components/magicui/MagicCard.tsx",
            },
        ],
        component: React.lazy(async () => {
            const mod = await import("@/components/magicui/MagicCard.tsx");
            const exportName =
                Object.keys(mod).find(
                    (key) =>
                        typeof mod[key] === "function" || typeof mod[key] === "object",
                ) || item.name;
            return { default: mod.default || mod[exportName] };
        }),
        meta: undefined,
    },

};
