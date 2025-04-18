#!/usr/bin/env node

import { program } from 'commander';
import * as fs from 'fs-extra';
import * as path from 'path';

// Define available components (you can dynamically load this from your package)
const availableComponents = ['button', 'input', 'card'];

// Base path for component templates (prebuilt component files)
const templatesPath = path.join(__dirname, '../../templates');

// Utility to copy component files to target directory
async function installComponent(componentName: string, targetDir: string) {
    if (!availableComponents.includes(componentName)) {
        console.error(`Component "${componentName}" does not exist in vin-ui.`);
        process.exit(1);
    }

    const componentSrcPath = path.join(templatesPath, `${componentName}.tsx`);
    const componentDestPath = path.join(targetDir, `${componentName}.tsx`);

    try {
        // Ensure the target directory exists
        await fs.ensureDir(targetDir);

        // Copy the component file
        await fs.copy(componentSrcPath, componentDestPath, { overwrite: false, errorOnExist: true });
        console.log(`Component "${componentName}" installed to ${componentDestPath}`);
    } catch (error) {
        console.error(`Failed to install component "${componentName}": ${error}`);
        process.exit(1);
    }
}

// CLI setup
program
    .version('1.0.0')
    .description('Vin UI CLI for installing components');

program
    .command('add <component>')
    .description('Install a component to components/ui/')
    .action(async (component: string) => {
        const targetDir = path.join(process.cwd(), 'components', 'ui');
        await installComponent(component, targetDir);
    });

program
    .command('install <component>')
    .description('Alias for add command')
    .action(async (component: string) => {
        const targetDir = path.join(process.cwd(), 'components', 'ui');
        await installComponent(component, targetDir);
    });

program.parse(process.argv);
