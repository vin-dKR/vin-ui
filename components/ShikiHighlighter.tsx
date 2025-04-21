'use client'

import { useTheme } from 'next-themes';

import { useEffect, useState } from 'react'
import { codeToHtml } from 'shiki/bundle/web'

export function ShikiClient({ code, lang = 'tsx' }: { code: string; lang?: string }) {
    const { theme } = useTheme()
    console.log(theme)
    const [html, setHtml] = useState('')


    useEffect(() => {
        const codeTheme = theme === "dark" ? 'github-dark' : 'github-light'

        codeToHtml(code, {
            lang,
            theme: codeTheme,
            transformers: [
                {
                    pre(node) {
                        delete node.properties.style
                        node.properties.className = 'bg-transparent'
                    },
                },
            ],
        }).then(setHtml)
    }, [code, lang, theme])

    return <div dangerouslySetInnerHTML={{ __html: html }} />
}
