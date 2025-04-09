import Link from 'next/link';
import { IconCode, IconCopy, IconBrandNpm, IconBrandGithub, IconBrandTwitter } from '@tabler/icons-react';

// This would be fetched dynamically based on the slug
// For this example, I'm hardcoding a Button component
export default function ComponentPage({ params }: { params: { slug: string } }) {
    const componentName = params.slug
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');

    // Example button component
    const component = {
        name: componentName,
        description: "A versatile button component with multiple variants, sizes, and states.",
        usage: `import { Button } from '@/components/ui/button';

export default function MyComponent() {
  return (
    <Button variant="primary">Click me</Button>
  );
}`,
        props: [
            { name: 'variant', type: 'string', defaultValue: 'default', description: 'Visual style of the button' },
            { name: 'size', type: 'string', defaultValue: 'md', description: 'Size of the button' },
            { name: 'disabled', type: 'boolean', defaultValue: 'false', description: 'Whether the button is disabled' },
            { name: 'onClick', type: 'function', defaultValue: 'undefined', description: 'Function called when button is clicked' },
            { name: 'children', type: 'ReactNode', defaultValue: 'undefined', description: 'Button content' },
        ],
        installation: `npm install vin-ui
# or
bun add vin-ui

# Copy to your project
npx vin-ui-copy button`,
        sourceCode: `import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 disabled:opacity-50 disabled:pointer-events-none',
  {
    variants: {
      variant: {
        default: 'bg-gray-900 text-white hover:bg-gray-800',
        primary: 'bg-purple-600 text-white hover:bg-purple-700',
        secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300',
        outline: 'border border-gray-300 bg-transparent hover:bg-gray-100 hover:text-gray-900',
        ghost: 'bg-transparent hover:bg-gray-100 hover:text-gray-900',
        link: 'bg-transparent underline-offset-4 hover:underline text-purple-600 hover:text-purple-700',
      },
      size: {
        sm: 'h-8 px-3 text-xs',
        md: 'h-10 px-4',
        lg: 'h-12 px-6 text-lg',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size }), className)}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };`,
    };

    return (
        <div className="min-h-screen bg-black text-white">
            {/* Navigation */}

            <div className="container mx-auto px-6 py-12">
                <div className="flex flex-col md:flex-row gap-6 md:gap-8 mb-12">
                    <Link href="/components" className="text-purple-400 hover:text-purple-300">
                        ← Back to Components
                    </Link>
                    <nav className="flex" aria-label="Breadcrumb">
                        <ol className="inline-flex items-center space-x-1 md:space-x-3">
                            <li className="inline-flex items-center">
                                <Link href="/" className="text-gray-400 hover:text-white">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <div className="flex items-center">
                                    <span className="mx-2 text-gray-600">/</span>
                                    <Link href="/components" className="text-gray-400 hover:text-white">
                                        Components
                                    </Link>
                                </div>
                            </li>
                            <li aria-current="page">
                                <div className="flex items-center">
                                    <span className="mx-2 text-gray-600">/</span>
                                    <span className="text-gray-300">{component.name}</span>
                                </div>
                            </li>
                        </ol>
                    </nav>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Main content */}
                    <div className="lg:col-span-8 space-y-8">
                        <div>
                            <h1 className="text-4xl font-bold mb-4">{component.name}</h1>
                            <p className="text-xl text-gray-300">{component.description}</p>
                        </div>

                        {/* Preview */}
                        <div className="bg-gray-900 rounded-xl p-8 flex items-center justify-center min-h-[200px] border border-gray-800">
                            {/* Component preview goes here */}
                            <div className="space-x-4">
                                <button className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors">
                                    Primary Button
                                </button>
                                <button className="bg-gray-200 text-gray-900 px-4 py-2 rounded-md hover:bg-gray-300 transition-colors">
                                    Secondary Button
                                </button>
                                <button className="border border-gray-300 bg-transparent px-4 py-2 rounded-md hover:bg-gray-100 hover:text-gray-900 transition-colors">
                                    Outline Button
                                </button>
                            </div>
                        </div>

                        {/* Tabs */}
                        <div>
                            <div className="flex border-b border-gray-800">
                                <button className="px-4 py-2 border-b-2 border-purple-500 text-purple-400 font-medium">
                                    Usage
                                </button>
                                <button className="px-4 py-2 text-gray-400 hover:text-gray-300">
                                    Examples
                                </button>
                                <button className="px-4 py-2 text-gray-400 hover:text-gray-300">
                                    API
                                </button>
                            </div>

                            <div className="py-6">
                                <h3 className="text-xl font-bold mb-4">Basic Usage</h3>
                                <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm mb-6 relative">
                                    <button className="absolute top-4 right-4 text-gray-400 hover:text-white">
                                        <IconCopy size={16} />
                                    </button>
                                    <pre className="text-gray-300">{component.usage}</pre>
                                </div>

                                <h3 className="text-xl font-bold mb-4 mt-8">Props</h3>
                                <div className="overflow-x-auto">
                                    <table className="w-full border-collapse">
                                        <thead>
                                            <tr className="border-b border-gray-800">
                                                <th className="py-2 px-4 text-left">Prop</th>
                                                <th className="py-2 px-4 text-left">Type</th>
                                                <th className="py-2 px-4 text-left">Default</th>
                                                <th className="py-2 px-4 text-left">Description</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {component.props.map((prop) => (
                                                <tr key={prop.name} className="border-b border-gray-800">
                                                    <td className="py-2 px-4 font-mono text-sm text-purple-400">{prop.name}</td>
                                                    <td className="py-2 px-4 font-mono text-sm text-orange-400">{prop.type}</td>
                                                    <td className="py-2 px-4 font-mono text-sm text-gray-400">{prop.defaultValue}</td>
                                                    <td className="py-2 px-4 text-sm">{prop.description}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar Installation*/}
                    <div className="lg:col-span-4 space-y-6">
                        <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
                            <h3 className="text-xl font-bold mb-4">Installation</h3>
                            <div className="bg-black rounded-lg p-4 font-mono text-sm mb-4 relative">
                                <button className="absolute top-4 right-4 text-gray-400 hover:text-white">
                                    <IconCopy size={16} />
                                </button>
                                <pre className="text-green-400 whitespace-pre-wrap">{component.installation}</pre>
                            </div>

                            <div className="flex gap-2 mt-6">
                                <a
                                    href="https://www.npmjs.com/package/vin-ui"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 flex items-center justify-center gap-2 bg-gray-800 py-2 rounded hover:bg-gray-700 transition-colors"
                                >
                                    <IconBrandNpm size={20} />
                                    NPM
                                </a>
                                <a
                                    href="https://github.com/yourusername/vin-ui"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 flex items-center justify-center gap-2 bg-gray-800 py-2 rounded hover:bg-gray-700 transition-colors"
                                >
                                    <IconBrandGithub size={20} />
                                    GitHub
                                </a>
                            </div>
                        </div>


                        {/* sourceCode */}
                        <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
                            <h3 className="text-xl font-bold mb-4">Source Code</h3>
                            <div className="bg-black rounded-lg p-4 font-mono text-sm relative max-h-96 overflow-auto">
                                <button className="absolute top-4 right-4 text-gray-400 hover:text-white">
                                    <IconCopy size={16} />
                                </button>
                                <pre className="text-gray-300 whitespace-pre-wrap">{component.sourceCode}</pre>
                            </div>
                            <div className="mt-4">
                                <a
                                    href="https://github.com/yourusername/vin-ui/blob/main/src/components/ui/button.tsx"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-purple-400 hover:text-purple-300 flex items-center gap-1"
                                >
                                    <IconCode size={16} />
                                    View full source on GitHub
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
}
