import { getSourceCode } from "@/lib/source-code";
import { useEffect, useState } from "react";
import { ShikiClient } from "../ShikiHighlighter";

const SourceCode = ({ name }: { name: string }) => {

    const [srcCode, setSrcCode] = useState<string>('')
    const [loading, setLoading] = useState<boolean>(false)

    useEffect(() => {
        const sourceCode = async () => {
            setLoading(true)
            const fileContent = await getSourceCode(name)
            // console.log(fileContent)
            setSrcCode(fileContent)
            setLoading(false)
        }

        sourceCode()
    }, [])

    if (loading) return <div>loading...</div>
    return (
        <div className="bg-black/5 dark:bg-blue-400/5 p-4 border rounded rounded-lg overflow-x-auto">
            <ShikiClient code={srcCode} lang="tsx" />
        </div>
    )
}

export default SourceCode
