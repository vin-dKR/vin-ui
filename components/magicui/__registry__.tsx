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
                path: "../srcCode/button.tsx",
                type: "registry:ui",
                target: "../srcCode/button.tsx",
            },
        ],
        component: React.lazy(async () => {
            const mod = await import("../srcCode/button.tsx");
            const exportName =
                Object.keys(mod).find(
                    (key) =>
                        typeof mod[key] === "function" || typeof mod[key] === "object",
                ) || item.name;
            return { default: mod.default || mod[exportName] };
        }),
        meta: undefined,
        variants: ["black", "white", "purple", "blue", "red"],

    },

    "random-emoji": {
        name: "random-emoji",
        description:
            "Random - Emoji Animation",
        type: "registry:ui",
        registryDependencies: undefined,
        files: [
            {
                path: "../srcCode/random-emoji.tsx",
                type: "registry:ui",
                target: "../srcCode/random-emoji.tsx",
            },
        ],
        component: React.lazy(async () => {
            const mod = await import("../srcCode/random-emoji.tsx");
            const exportName =
                Object.keys(mod).find(
                    (key) =>
                        typeof mod[key] === "function" || typeof mod[key] === "object",
                ) || item.name;
            return { default: mod.default || mod[exportName] };
        }),
        meta: undefined,
    },
    "neon-timeline": {
        name: "neon-timeline",
        description:
            "Random - Emoji Animation",
        type: "registry:ui",
        registryDependencies: undefined,
        files: [
            {
                path: "../srcCode/neon-timeline.tsx",
                type: "registry:ui",
                target: "../srcCode/neon-timeline.tsx",
            },
        ],
        component: React.lazy(async () => {
            const mod = await import("../srcCode/neon-timeline.tsx");
            const exportName =
                Object.keys(mod).find(
                    (key) =>
                        typeof mod[key] === "function" || typeof mod[key] === "object",
                ) || item.name;
            return { default: mod.default || mod[exportName] };
        }),
        utils: ["timeline.css", "timeline-data.ts"],
        meta: undefined,
    },
    "neon-underline": {
        name: "neon-underline",
        description: "just a neon underline",
        type: "registry:ui",
        registryDependencies: undefined,
        files: [
            {
                path: "../srcCode/neon-underline.tsx",
                type: "registry:ui",
                target: "../srcCode/neon-underline.tsx",
            },
        ],
        component: React.lazy(async () => {
            const mod = await import("../srcCode/neon-underline.tsx");
            const exportName =
                Object.keys(mod).find(
                    (key) =>
                        typeof mod[key] === "function" || typeof mod[key] === "object",
                ) || item.name;
            return { default: mod.default || mod[exportName] };
        }),
        meta: undefined,
    },
}
