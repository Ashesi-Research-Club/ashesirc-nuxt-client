// Static data composable - uses cached data with live fallback
import { ref, computed } from 'vue'
import { useApi } from './useApi'
import type { Article, TeamMember, Researcher, Tag } from './useApi'

// Static data cache
let staticDataCache: Record<string, any> = {}

const loadStaticFile = async (filename: string) => {
    try {
        const response = await fetch(`/src/data/${filename}`)
        if (!response.ok) {
            throw new Error(`Failed to load ${filename}`)
        }
        return await response.json()
    } catch (error) {
        console.warn(`Static data file ${filename} not available`)
        return null
    }
}

export const useStaticApi = () => {
    const loading = ref(false)
    const error = ref<string | null>(null)
    const { subscribeNewsletter, submitApplication, ...dynamicApi } = useApi()

    // Load static data with caching
    const getStaticData = async (filename: string) => {
        if (!(filename in staticDataCache)) {
            staticDataCache[filename] = await loadStaticFile(filename)
        }
        return staticDataCache[filename]
    }

    // Static data getters with fallback to API
    const getArticles = async (options: {
        featured?: boolean
        category?: string
        limit?: number
    } = {}) => {
        loading.value = true
        error.value = null

        try {
            let filename = 'articles.json'

            if (options.featured) {
                filename = 'featured-articles.json'
            } else if (options.category === 'computer-science') {
                filename = 'cs-articles.json'
            } else if (options.category === 'business') {
                filename = 'business-articles.json'
            } else if (options.category === 'humanities') {
                filename = 'humanities-articles.json'
            }

            let data = await getStaticData(filename)

            if (!data) {
                // Fallback to API
                return await dynamicApi.getArticles(options)
            }

            if (options.limit && Array.isArray(data)) {
                data = data.slice(0, options.limit)
            }

            return data || []
        } catch (err) {
            error.value = err instanceof Error ? err.message : 'Failed to fetch articles'
            return []
        } finally {
            loading.value = false
        }
    }

    const getArticleBySlug = async (slug: string) => {
        loading.value = true
        error.value = null

        try {
            const data = await getStaticData('articles.json')

            if (data && Array.isArray(data)) {
                const article = data.find((a: Article) => a.slug === slug)
                if (article) {
                    return article
                }
            }

            // Fallback to API
            return await dynamicApi.getArticleBySlug(slug)
        } catch (err) {
            error.value = err instanceof Error ? err.message : 'Failed to fetch article'
            throw err
        } finally {
            loading.value = false
        }
    }

    const getTeamMembers = async () => {
        loading.value = true
        error.value = null

        try {
            const data = await getStaticData('team-members.json')

            if (data) {
                return data
            }

            // Fallback to API
            return await dynamicApi.getTeamMembers()
        } catch (err) {
            error.value = err instanceof Error ? err.message : 'Failed to fetch team members'
            return []
        } finally {
            loading.value = false
        }
    }

    const getResearchers = async (options: {
        status?: 'active' | 'alumni' | 'inactive'
        program?: string
        limit?: number
    } = {}) => {
        loading.value = true
        error.value = null

        try {
            let data = await getStaticData('researchers.json')

            if (!data) {
                // Fallback to API
                return await dynamicApi.getResearchers(options)
            }

            if (Array.isArray(data)) {
                if (options.status) {
                    data = data.filter((r: Researcher) => r.status === options.status)
                }
                if (options.program) {
                    data = data.filter((r: Researcher) => r.program === options.program)
                }
                if (options.limit) {
                    data = data.slice(0, options.limit)
                }
            }

            return data || []
        } catch (err) {
            error.value = err instanceof Error ? err.message : 'Failed to fetch researchers'
            return []
        } finally {
            loading.value = false
        }
    }

    const getTags = async () => {
        loading.value = true
        error.value = null

        try {
            const data = await getStaticData('tags.json')

            if (data) {
                return data
            }

            // Fallback to API
            return await dynamicApi.getTags()
        } catch (err) {
            error.value = err instanceof Error ? err.message : 'Failed to fetch tags'
            return []
        } finally {
            loading.value = false
        }
    }

    const getBuildInfo = async () => {
        const data = await getStaticData('build-info.json')
        return data || { timestamp: '', version: '' }
    }

    return {
        // State
        loading: computed(() => loading.value),
        error: computed(() => error.value),

        // Static data (fast)
        getArticles,
        getArticleBySlug,
        getTeamMembers,
        getResearchers,
        getTags,
        getBuildInfo,

        // Dynamic operations (when needed)
        subscribeNewsletter,
        submitApplication,

        // Clear error
        clearError: () => { error.value = null }
    }
}
