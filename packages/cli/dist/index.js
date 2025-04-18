#!/usr/bin/env node
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const fs = __importStar(require("fs-extra"));
const path = __importStar(require("path"));
// Define available components (you can dynamically load this from your package)
const availableComponents = ['button', 'input', 'card'];
// Base path for component templates (prebuilt component files)
const templatesPath = path.join(__dirname, '../../templates');
// Utility to copy component files to target directory
async function installComponent(componentName, targetDir) {
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
    }
    catch (error) {
        console.error(`Failed to install component "${componentName}": ${error}`);
        process.exit(1);
    }
}
// CLI setup
commander_1.program
    .version('1.0.0')
    .description('Vin UI CLI for installing components');
commander_1.program
    .command('add <component>')
    .description('Install a component to components/ui/')
    .action(async (component) => {
    const targetDir = path.join(process.cwd(), 'components', 'ui');
    await installComponent(component, targetDir);
});
commander_1.program
    .command('install <component>')
    .description('Alias for add command')
    .action(async (component) => {
    const targetDir = path.join(process.cwd(), 'components', 'ui');
    await installComponent(component, targetDir);
});
commander_1.program.parse(process.argv);
