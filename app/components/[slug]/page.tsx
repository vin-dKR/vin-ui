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
            flex flex-col mx-auto p-4 sm:p-6 md:p-8 mb-20 md:mb-100 h-auto gap-4 md:gap-8
            bg-gradient-to-b dark:from-white/5 from-black/5 from-60% to-transparent 
            rounded-xl text-black dark:text-white
        ">
            {/* Breadcrumbs - ensure it's mobile friendly */}
            <Breadcrumbs
                items={[{
                    label: "Components",
                    href: "/components"
                }]}
                currentPage={slug}
            />

            {/* Main content */}
            <article className="dark:prose-invert max-w-[310px] md:min-w-md xl:min-w-3xl md:px-8">
                <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold'>{doc.frontMatter.title}</h1>
                <p className="lead text-sm sm:text-base md:text-lg">{doc.frontMatter.description}</p>
                <div className="prose-sm sm:prose-base max-w-none">
                    <MDXViewer content={doc.content} />
                </div>
            </article>

            {/* TOC - hidden on mobile, appears on larger screens */}
            <div className="
                hidden 
                lg:block 
                fixed 
                right-4 
                lg:right-8 
                xl:right-0
                2xl:right-[calc((100vw-1436px)/2)]
                top-[calc(5rem_+_1rem)] 
                h-[calc(100vh-6.5rem)] 
                w-[270px] 
                p-4 
                overflow-y-auto
            ">
                <div className="
                    bg-gradient-to-b dark:from-white/5 from-black/5 from-60% to-transparent 
                    backdrop-blur-lg rounded-xl h-full px-4 md:px-8 py-4
                ">
                    <TOCWrapper headings={doc.headings} />
                </div>
            </div>

            {/* Mobile TOC button - appears only on small screens */}
            <div className="lg:hidden fixed bottom-4 right-4 z-50">
                <button className="
                    p-3 rounded-full bg-violet-600 text-white shadow-lg
                    hover:bg-violet-700 transition-colors
                ">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
        </div>
    )
}
