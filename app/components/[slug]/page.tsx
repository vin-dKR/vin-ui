import { getMDXContent, getAllDocsSlugs } from '@/lib/mdx';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import MDXViewer from '@/components/ui/mdx/MDXViewer';
import TOCWrapper from '@/components/ui/blocks/components/TOCWrapper';
import Breadcrumbs from '@/components/ui/blocks/components/Breadcrumbs';

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

export async function generateStaticParams() {
    const slugs = await getAllDocsSlugs()
    return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>
}): Promise<Metadata> {
    const { slug } = await params
    const doc = await getMDXContent(slug);
    return {
        title: `${doc.frontMatter.title} | Your UI Library`,
        description: doc.frontMatter.description,
    }
}

export default async function ComponentPage({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    const { slug } = await params
    let doc;
    try {
        doc = await getMDXContent(slug);
        console.log(doc.headings)
    } catch {
        notFound();
    }

    return (
        <div className="
            flex flex-col mx-auto p-8 mb-100 h-auto gap-8
            bg-gradient-to-b dark:from-white/5 from-black/5 from-60% to-transparent 
            rounded-xl text-black dark:text-white 
        ">

            <Breadcrumbs
                items={[{
                    label: "Components",
                    href: "/components"
                }]}
                currentPage={slug}
            />
            <article className=" dark:prose-invert lg:w-3xl px-8">
                <h1 className='text-4xl font-bold'>{doc.frontMatter.title}</h1>
                <p className="lead">{doc.frontMatter.description}</p>
                <MDXViewer content={doc.content} />
            </article>

            <div className="
                hidden 
                lg:block 
                fixed 
                right-4 
                lg:right-8 
                xl:right-0 // Even more on XL
                2xl:right-[calc((100vw-1436px)/2)] // Centers in remaining space for 2xl screens
                top-[calc(5rem_+_1rem)] 
                h-[calc(100vh-6.5rem)] 
                w-[270px] 
                p-4 
                overflow-y-auto
            ">
                <div className="
                    bg-gradient-to-b dark:from-white/5 from-black/5 from-60% to-transparent 
                    backdrop-blur-lg rounded-xl h-full px-8 py-4
                ">
                    <TOCWrapper headings={doc.headings} />
                </div>
            </div>
        </div>
    )
}
