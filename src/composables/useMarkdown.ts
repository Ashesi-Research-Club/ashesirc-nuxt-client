import { marked } from 'marked'

// Configure marked with custom options
marked.setOptions({
    breaks: true, // Convert \n to <br>
    gfm: true, // Enable GitHub Flavored Markdown
})

/**
 * Composable for parsing markdown content
 */
export function useMarkdown() {
    /**
     * Parse markdown string to HTML
     * @param markdown - The markdown string to parse
     * @returns HTML string
     */
    const parseMarkdown = (markdown: string): string => {
        if (!markdown) return ''

        try {
            const result = marked(markdown)
            // Handle both sync and async marked results
            if (typeof result === 'string') {
                return result
            }
            // If it's a promise, we need to handle it differently
            console.warn('Async markdown parsing not supported in this context')
            return markdown
        } catch (error) {
            console.error('Error parsing markdown:', error)
            // Fallback: return the original markdown as is
            return markdown
        }
    }

    /**
     * Strip markdown formatting to get plain text
     * @param markdown - The markdown string to strip
     * @returns Plain text string
     */
    const stripMarkdown = (markdown: string): string => {
        if (!markdown) return ''

        try {
            // Parse to HTML first, then strip HTML tags
            const html = parseMarkdown(markdown)
            const tempElement = document.createElement('div')
            tempElement.innerHTML = html
            return tempElement.textContent || tempElement.innerText || ''
        } catch (error) {
            console.error('Error stripping markdown:', error)
            // Fallback: basic regex to remove common markdown syntax
            return markdown
                .replace(/[#*`_~\[\]()]/g, '')
                .replace(/\n+/g, ' ')
                .trim()
        }
    }

    return {
        parseMarkdown,
        stripMarkdown
    }
}
