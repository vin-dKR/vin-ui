"use server"
import path from "path";
import { promises as fs } from 'fs';
import { Index } from "@/components/magicui/__registry__";
import { console } from "inspector/promises";

interface UtilFileContent {
    name: string;
    content: string;
    language: string;
}

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

export const getUtilsSourceCode = async (name: string): Promise<UtilFileContent[]> => {
    const componentData = Index[name];
    if (!componentData || !componentData.utils || componentData.utils.length === 0) {
        return []
    }

    const srcCodePath = path.join(process.cwd(), "components/srcCode/utils")
    const utilsFiles: UtilFileContent[] = []

    for (const utilName of componentData.utils) {
        const filePath = path.join(srcCodePath, utilName)
        const language = filePath.endsWith('.css') ? 'css' : filePath.endsWith('.ts') ? 'ts' : 'txt';

        try {
            const content = await fs.readFile(filePath, 'utf-8')
            utilsFiles.push({
                name: `utils/${utilName}`,
                content,
                language,
            })
        } catch (error) {
            console.error(`Error reading utility file ${filePath}:`, error);
            throw error;
        }
    }

    return utilsFiles
}
