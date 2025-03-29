#!/usr/bin / env node
import fs from 'fs';
import path from 'path';
import chalk from 'chalk';
import { Command } from 'commander';
import inquirer from 'inquirer';
import ora from 'ora';

interface ComponentConfig {
    files: string[];
    dependencies: string[];
    utils: string[];
}

interface ComponentsMap {
    [key: string]: ComponentConfig;
}

// Define component directory structure
const COMPONENTS_MAP: ComponentsMap = {
    button: {
        files: ['button.tsx'],
        dependencies: ['class-variance-authority', 'clsx', 'tailwind-merge'],
        utils: ['cn'],
    },
    card: {
        files: ['card.tsx'],
        dependencies: ['clsx', 'tailwind-merge'],
        utils: ['cn'],
    },
    // Add more components as needed
};

const program = new Command();

program
    .name('vin-ui-copy')
    .description('CLI tool for copying Vin UI components to your project')
    .version('0.1.0');

program
    .argument('[component]', 'Component to copy')
    .option('-a, --all', 'Copy all components')
    .option('-d, --dest <directory>', 'Destination directory', './components/ui')
    .option('-f, --force', 'Overwrite existing files')
    .action(async (component, options) => {
        try {
            const spinner = ora('Preparing to copy components').start();

            // Check if Next.js project
            if (!fs.existsSync('./package.json')) {
                spinner.fail('Not a valid project. Please run this command in the root of your Next.js project.');
                return;
            }

            const packageJson = JSON.parse(fs.readFileSync('./package.json', 'utf8'));

            // If no component specified and --all not used, prompt for selection
            let componentsToInstall = [];

            if (!component && !options.all) {
                spinner.stop();
                const { selected } = await inquirer.prompt([
                    {
                        type: 'checkbox',
                        name: 'selected',
                        message: 'Select components to install:',
                        choices: Object.keys(COMPONENTS_MAP).map(name => ({
                            name,
                            value: name,
                        })),
                    },
                ]);
                componentsToInstall = selected;
                spinner.start('Processing selected components');
            } else if (options.all) {
                componentsToInstall = Object.keys(COMPONENTS_MAP);
            } else if (component) {
                if (!COMPONENTS_MAP[component]) {
                    spinner.fail(`Component "${component}" not found.`);
                    return;
                }
                componentsToInstall = [component];
            }

            if (componentsToInstall.length === 0) {
                spinner.info('No components selected. Exiting.');
                return;
            }

            // Create destination directory if it doesn't exist
            const dest = path.resolve(process.cwd(), options.dest);
            if (!fs.existsSync(dest)) {
                fs.mkdirSync(dest, { recursive: true });
            }

            // Ensure utils directory exists
            const utilsDir = path.resolve(process.cwd(), './lib');
            if (!fs.existsSync(utilsDir)) {
                fs.mkdirSync(utilsDir, { recursive: true });
            }

            // Copy components
            spinner.text = 'Copying components...';

            // Keep track of dependencies to install
            const depsToInstall = new Set();
            const utilsToInstall = new Set();

            // Copy each component
            for (const comp of componentsToInstall) {
                const componentInfo = COMPONENTS_MAP[comp];

                // Add dependencies
                componentInfo.dependencies.forEach(dep => depsToInstall.add(dep));

                // Add utils
                componentInfo.utils.forEach(util => utilsToInstall.add(util));

                // Copy component files
                for (const file of componentInfo.files) {
                    const srcPath = path.resolve(__dirname, '../components/ui', file);
                    const destPath = path.resolve(dest, file);

                    if (fs.existsSync(destPath) && !options.force) {
                        spinner.warn(`${file} already exists. Use --force to overwrite.`);
                        continue;
                    }

                    // In a real implementation, you'd read from your package
                    // For this example, we'll create a simple placeholder file
                    const componentContent = createPlaceholderComponent(comp);
                    fs.writeFileSync(destPath, componentContent);
                }
            }

            // Copy utils
            if (utilsToInstall.size > 0) {
                spinner.text = 'Copying utility functions...';
                const utilsPath = path.resolve(utilsDir, 'utils.ts');

                // Either create or update utils file
                if (fs.existsSync(utilsPath) && !options.force) {
                    spinner.warn('utils.ts already exists. Use --force to overwrite.');
                } else {
                    const utilsContent = createPlaceholderUtils([...utilsToInstall]);
                    fs.writeFileSync(utilsPath, utilsContent);
                }
            }

            // Check if dependencies need to be installed
            const missingDeps = [...depsToInstall].filter(dep => {
                return !packageJson.dependencies?.[dep] && !packageJson.devDependencies?.[dep];
            });

            if (missingDeps.length > 0) {
                spinner.succeed('Components copied!');

                const { installDeps } = await inquirer.prompt([
                    {
                        type: 'confirm',
                        name: 'installDeps',
                        message: `Would you like to install missing dependencies? (${missingDeps.join(', ')})`,
                        default: true,
                    },
                ]);

                if (installDeps) {
                    const installSpinner = ora('Installing dependencies...').start();

                    // Here you would actually run npm/yarn/pnpm install
                    // For this example, we'll just simulate it
                    await new Promise(resolve => setTimeout(resolve, 2000));

                    installSpinner.succeed('Dependencies installed successfully!');
                }
            } else {
                spinner.succeed('Components copied successfully!');
            }

            console.log('\n' + chalk.green('✓') + ' Installation complete! You can now import your components:');
            console.log('\n' + chalk.cyan(`import { ${componentsToInstall.map(c => c.charAt(0).toUpperCase() + c.slice(1)).join(', ')} } from '@/components/ui';`));

        } catch (error) {
            console.error(chalk.red('Error:'), error.message);
            process.exit(1);
        }
    });

// Helper to create placeholder component content
function createPlaceholderComponent(name: string) {
    const componentName = name.charAt(0).toUpperCase() + name.slice(1);

    if (name === 'button') {
        return `import React from 'react';
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

export { Button, buttonVariants };`;
    }

    return `import React from 'react';
import { cn } from '@/lib/utils';

export interface ${componentName}Props {
  className?: string;
  children?: React.ReactNode;
}

const ${componentName} = React.forwardRef<
  HTMLDivElement,
  ${componentName}Props
>(({ className, children, ...props }, ref) => {
  return (
    <div 
      className={cn(
        "rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-800 dark:bg-gray-950",
        className
      )}
      ref={ref}
      {...props}
    >
      {children}
    </div>
  );
});

${componentName}.displayName = "${componentName}";

export { ${componentName} };
`;
}

// Helper to create utils file
function createPlaceholderUtils(utils: string) {
    const functions = [];

    if (utils.includes('cn')) {
        functions.push(`
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Merges class names with Tailwind CSS classes
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}`);
    }

    return functions.join('\n\n');
}

program.parse(process.argv);
