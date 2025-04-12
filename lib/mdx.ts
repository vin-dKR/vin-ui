import fs from 'fs';
import path from 'path';
import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'
import rehypeSlug from "rehype-slug"
import { visit } from "unist-util-visit"

const DOCS_PATH = path.join(process.cwd(), 'content/docs')

export async function getMDXContent(slug: string): Promise<MDXContent> {
    const filePath = path.join(DOCS_PATH, `${slug}.mdx`)
    const fileContent = fs.readFileSync(filePath, 'utf-8')

    const { data, content } = matter(fileContent)
    const frontMatter = data as MDXFrontmatter

    //For TOC
    const headings: MDXHeading[] = []

    const mdxSource = await serialize(content, {
        mdxOptions: {
            rehypePlugins: [
                rehypeSlug,
                () => (tree) => {
                    visit(tree, 'element', (node) => {
                        if (node.tagName === 'h1') {
                            // Find the text content - may be nested in <a> and <span> elements
                            let headingText = '';

                            // Recursively find text nodes
                            const extractText = (n: any) => {
                                if (n.type === 'text') {
                                    headingText += n.value;
                                }
                                if (n.children) {
                                    n.children.forEach(extractText);
                                }
                            };

                            extractText(node);

                            headingText = headingText.trim();

                            if (headingText) {
                                headings.push({
                                    text: headingText,
                                    depth: 1,
                                    slug: node.properties?.id || ''
                                });
                            }
                        }
                    });
                }
            ],
        },
    });

    return {
        frontMatter,
        content: mdxSource,
        slug,
        headings
    }
}


export async function getAllDocsSlugs(): Promise<string[]> {
    const files = fs.readdirSync(DOCS_PATH)
    return files
        .filter((file) => file.endsWith('.mdx'))
        .map((file) => file.replace(/\.mdx$/, ''))
}
