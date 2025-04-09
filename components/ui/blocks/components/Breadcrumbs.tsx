import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
    label: string;
    href: string;
}

interface BreadcrumbsProps {
    items?: BreadcrumbItem[];
    currentPage: string;
}


const Breadcrumbs = ({ items = [], currentPage }: BreadcrumbsProps) => {
    return (
        <div className='flex items-center'>
            <Link href="/">
                <Home className='w-4 h-4 text-black dark:text-white' />
            </Link>

            {items.map((item, index) => (
                <div key={index} className="flex items-center">
                    <ChevronRight className='w-3 h-3 text-black dark:text-white mx-2' />
                    <Link
                        href={item.href}
                        className="text-sm text-black dark:text-white hover:underline"
                    >
                        {item.label}
                    </Link>
                </div>
            ))}

            <ChevronRight className='w-3 h-3 text-black dark:text-white mx-2' />
            <span className='text-sm font-medium text-black dark:text-white'>
                {currentPage}
            </span>
        </div>
    )
}

export default Breadcrumbs
