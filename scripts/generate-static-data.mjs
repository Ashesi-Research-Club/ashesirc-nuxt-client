// Build-time data fetching script
import { writeFileSync, mkdirSync } from 'fs'
import { dirname } from 'path'

// Load environment variables
import { config } from 'dotenv'
config()

const API_BASE_URL = process.env.VITE_API_BASE_URL

if (!API_BASE_URL) {
    console.error('❌ VITE_API_BASE_URL environment variable is required')
    process.exit(1)
}

// Ensure the data directory exists
const dataDir = './src/data'
mkdirSync(dataDir, { recursive: true })

async function fetchAndCache(endpoint, filename) {
    try {
        console.log(`Fetching ${endpoint}...`)
        const response = await fetch(`${API_BASE_URL}${endpoint}`)

        if (!response.ok) {
            throw new Error(`Failed to fetch ${endpoint}: ${response.status}`)
        }

        const data = await response.json()
        const filepath = `${dataDir}/${filename}`

        writeFileSync(filepath, JSON.stringify(data, null, 2))
        console.log(`✅ Cached ${filename}`)

        return data
    } catch (error) {
        console.error(`❌ Error fetching ${endpoint}:`, error.message)
        // Return empty array/object as fallback
        const fallback = endpoint.includes('articles') ? [] :
            endpoint.includes('team-members') ? [] :
                endpoint.includes('researchers') ? [] :
                    endpoint.includes('tags') ? [] : {}

        // Still create the file with fallback data
        const filepath = `${dataDir}/${filename}`
        writeFileSync(filepath, JSON.stringify(fallback, null, 2))
        console.log(`⚠️  Created ${filename} with fallback data`)

        return fallback
    }
}

async function generateStaticData() {
    console.log('🚀 Generating static data...')
    console.log(`📡 API Base URL: ${API_BASE_URL}`)

    // Fetch all the data our app needs
    await Promise.all([
        // Articles
        fetchAndCache('/articles?filters[status][$eq]=published&populate=*&sort[0]=publishedDate:desc', 'articles.json'),
        fetchAndCache('/articles?filters[status][$eq]=published&filters[featured][$eq]=true&populate=*', 'featured-articles.json'),
        fetchAndCache('/articles?filters[status][$eq]=published&filters[category][$eq]=computer-science&populate=*', 'cs-articles.json'),
        fetchAndCache('/articles?filters[status][$eq]=published&filters[category][$eq]=business&populate=*', 'business-articles.json'),
        fetchAndCache('/articles?filters[status][$eq]=published&filters[category][$eq]=humanities&populate=*', 'humanities-articles.json'),

        // Other data
        fetchAndCache('/team-members?filters[isActive][$eq]=true&sort[0]=order:asc', 'team-members.json'),
        fetchAndCache('/researchers?filters[status][$eq]=active', 'researchers.json'),
        fetchAndCache('/tags', 'tags.json')
    ])

    // Generate build timestamp
    const buildInfo = {
        timestamp: new Date().toISOString(),
        version: process.env.npm_package_version || '1.0.0',
        apiBaseUrl: API_BASE_URL
    }

    writeFileSync(`${dataDir}/build-info.json`, JSON.stringify(buildInfo, null, 2))

    console.log('Static data generation complete!')
    console.log(`Generated at: ${buildInfo.timestamp}`)
}

// Run the generation
generateStaticData().catch(error => {
    console.error('Static data generation failed:', error)
    process.exit(1)
})
