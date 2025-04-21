"use server"
import path from "path";
import { promises as fs } from 'fs';

export const getSourceCode = async (name: string): Promise<string> => {
    const sourceCodeDirPath = path.join(process.cwd(), "components/srcCode");
    const filePath = path.join(sourceCodeDirPath, `${name}.tsx`);

    try {
        return await fs.readFile(filePath, 'utf-8');
    } catch (error) {
        console.error(`Error reading file ${filePath}:`, error);
        throw error;
    }
};
