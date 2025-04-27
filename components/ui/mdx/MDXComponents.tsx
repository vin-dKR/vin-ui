import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/magicui/Tabs"
import { cn } from "@/lib/utils";
import Link from "next/link";
import { MDXComponents as MDXComponentsType } from 'mdx/types'
import { ComponentSource } from "@/components/magicui/ComponentSource";
import { ComponentPreview } from "@/components/magicui/ComponentPreview";

// eslint-disable-next-line
const CustomLink = (props: any) => {
    const href = props.href;

    if (href.startsWith("/")) {
        return (
            <Link {...props} href={href}>
                {props.children}
            </Link>
        );
    }

    if (href.startsWith("#")) {
        return <a {...props} />;
    }

    return <a target="_blank" rel="noopener noreferrer" {...props} />;
};

export function MDXComponents(): MDXComponentsType {
    return {
        h1: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
            <h1
                className={cn(
                    "font-heading mt-10 mb-1 scroll-m-20 text-2xl font-bold",
                    className,
                )}
                {...props}
            />
        ),
        h2: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
            <h2
                className={cn(
                    "font-heading mt-4 scroll-m-20 border-b pb-2 text-xl font-semibold tracking-tight first:mt-0",
                    className,
                )}
                {...props}
            />
        ),
        h3: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
            <h3
                className={cn(
                    "font-heading mt-2 scroll-m-20 text-lg font-semibold tracking-tight",
                    className,
                )}
                {...props}
            />
        ),
        h4: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
            <h4
                className={cn(
                    "font-heading mt-2 scroll-m-20 text-md font-semibold tracking-tight",
                    className,
                )}
                {...props}
            />
        ),
        h5: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
            <h5
                className={cn(
                    "mt-2 scroll-m-20 text-sm font-semibold tracking-tight",
                    className,
                )}
                {...props}
            />
        ),
        h6: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
            <h6
                className={cn(
                    "mt-2 scroll-m-20 text-base font-semibold tracking-tight",
                    className,
                )}
                {...props}
            />
        ),
        a: ({ className, ...props }: React.HTMLAttributes<HTMLAnchorElement>) => (
            <CustomLink
                className={cn("font-medium underline underline-offset-4", className)}
                {...props}
            />
        ),
        p: ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
            <p
                className={cn("leading-7 [&:not(:first-child)]:mt-2", className)}
                {...props}
            />
        ),
        ul: ({ className, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
            <ul className={cn("ml-6 list-disc", className)} {...props} />
        ),
        ol: ({ className, ...props }: React.HTMLAttributes<HTMLOListElement>) => (
            <ol className={cn("ml-6 list-decimal", className)} {...props} />
        ),
        li: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
            <li className={cn("mt-2", className)} {...props} />
        ),
        blockquote: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
            <blockquote
                className={cn("my-6 border-l-2 pl-6 italic", className)}
                {...props}
            />
        ),
        table: ({ className, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
            <div className="my-6 w-full overflow-y-auto rounded-lg border border-gray-400 dark:border-zinc-600 dark:bg-zinc-900/30 dark:text-zinc-400">
                <table
                    className={cn("my-0 w-full overflow-hidden border-collapse border border-gray-400 dark:border-zinc-600", className)}
                    {...props}
                />
            </div>
        ),
        thead: ({ className, ...props }: React.HTMLAttributes<HTMLTableSectionElement>) => (
            <thead
                className={cn("border-b border-gray-400 dark:border-zinc-600", className)}
                {...props}
            />
        ),
        tr: ({ className, ...props }: React.HTMLAttributes<HTMLTableRowElement>) => (
            <tr
                className={cn(
                    "border-b border-gray-300 dark:border-zinc-700 last:border-b-0 hover:bg-gray-50/60 dark:hover:bg-zinc-800/50 transition-colors",
                    className
                )}
                {...props}
            />
        ),
        th: ({ className, ...props }: React.HTMLAttributes<HTMLTableCellElement>) => (
            <th
                className={cn(
                    "text-balance border-r border-gray-400 dark:border-zinc-600 px-6 py-3 text-left font-mono text-sm font-semibold tracking-tight last:border-r-0",
                    className
                )}
                {...props}
            />
        ),
        td: ({ className, ...props }: React.HTMLAttributes<HTMLTableCellElement>) => (
            <td
                className={cn(
                    "border-r border-gray-300 dark:border-zinc-700 px-6 py-3 text-sm last:border-r-0 [&[align=center]]:text-center [&[align=right]]:text-right",
                    className
                )}
                {...props}
            />
        ),
        Step: ({ className, ...props }: React.ComponentProps<"h3">) => (
            <h3
                className={cn(
                    "font-heading mt-8 scroll-m-20 text-xl font-semibold tracking-tight",
                    className,
                )}
                {...props}
            />
        ),
        Steps: ({ ...props }) => (
            <div
                className="[&>h3]:step steps mb-12 ml-4 border-l pl-8 [counter-reset:step]"
                {...props}
            />
        ),
        Tabs: ({ className, ...props }: React.ComponentProps<typeof Tabs>) => (
            <Tabs className={cn("relative mt-6 w-full", className)} {...props} />
        ),
        TabsList: ({
            className,
            ...props
        }: React.ComponentProps<typeof TabsList>) => (
            <TabsList
                className={cn(
                    "w-full justify-start rounded-none border-b bg-transparent p-0",
                    className,
                )}
                {...props}
            />
        ),
        TabsTrigger: ({
            className,
            ...props
        }: React.ComponentProps<typeof TabsTrigger>) => (
            <TabsTrigger
                className={cn(
                    "relative h-9 rounded rounded-t-lg border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none",
                    className,
                )}
                {...props}
            />
        ),
        TabsContent: ({
            className,
            ...props
        }: React.ComponentProps<typeof TabsContent>) => (
            <TabsContent
                className={cn(
                    "relative [&_h3.font-heading]:text-base [&_h3.font-heading]:font-semibold",
                    className,
                )}
                {...props}
            />
        ),
        pre: ({ className, ...props }: React.HTMLAttributes<HTMLPreElement>) => {
            return (
                <pre
                    className={cn(
                        "mb-4 mt-6 p-4 overflow-x-auto rounded-lg border bg-indigo-600/10 text-black dark:bg-indigo-900/5 dark:text-white",
                        className
                    )}
                    {...props}
                />
            );
        },
        code: ({ className, children, ...props }: React.HTMLAttributes<HTMLElement>) => {
            // Check if this is a code block (pre is the parent)
            const isCodeBlock = typeof children === 'string' && children.includes('\n');

            if (isCodeBlock) {
                return (
                    <code
                        className={cn(
                            "font-mono text-sm",
                            className
                        )}
                        {...props}
                    >
                        {children}
                    </code>
                );
            }

            // Inline code
            return (
                <code
                    className={cn(
                        "rounded bg-zinc-600/20 px-2.5 py-0.5 font-mono text-sm text-black dark:bg-white/20 dark:text-white",
                        className
                    )}
                    {...props}
                >
                    {children}
                </code>
            );
        },
        LinkedCard: ({ className, ...props }: React.ComponentProps<typeof Link>) => (
            <Link
                className={cn(
                    "flex w-full flex-col items-center rounded-xl border bg-card p-6 text-card-foreground shadow transition-colors hover:bg-muted/50 sm:p-10",
                    className,
                )}
                {...props}
            />
        ),
        ComponentPreview: ({
            ...props
        }: React.ComponentProps<typeof ComponentPreview>) => (
            <ComponentPreview {...props} />
        ),
        ComponentSource: ({
            ...props
        }: React.ComponentProps<typeof ComponentSource>) => (
            <ComponentSource {...props} />
        ),
    }
};

export type MDXComponentProps = {
    components?: MDXComponentsType
}

