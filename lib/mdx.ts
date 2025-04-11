import fs from 'fs';
import path from 'path';
import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'
import remarkGfm from "remark-gfm"
import rehypeSlug from "rehype-slug"
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import { visit } from "unist-util-visit"

const DOCS_PATH = path.join(process.cwd(), 'contents/docs')

export async function getMDXContent(slug: string): Promise<MDXContent> {
    const filePath = path.join(DOCS_PATH, `${slug}.mdx`)
    const fileContent = fs.readFileSync(filePath, 'utf-8')

    const { data, content } = matter(fileContent)
    const frontMatter = data as MDXFrontmatter

    //For TOC
    const headings: MDXHeading[] = []

    const mdxSource = await serialize(content, {
        mdxOptions: {
            remarkPlugins: [remarkGfm],
            rehypePlugins: [
                rehypeSlug,
                [rehypeAutolinkHeadings, { behaviour: 'wrap' }],
                () => (tree) => {
                    visit(tree, 'heading', (node) => {
                        const text = node.children
                            .filter((child: any) => child.type === "text")
                            .map((child: any) => child.value)
                            .join('');

                        if (node.depth > 1 && node.depth < 5 && text) {
                            headings.push({
                                text,
                                depth: node.depth,
                                slug: node.properties?.id?.toString() || ''
                            })
                        }
                    })
                }
            ]
        }

    })

    return {
        frontMatter,
        content: mdxSource,
        slug,
        headings
    }
}
