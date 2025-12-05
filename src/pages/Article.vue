<template>
  <div>
    <div class="fixed inset-x-0 top-0 z-50 h-1 bg-slate-200/60">
      <div class="h-full bg-accent transition-[width]" :style="{ width: progress + '%' }"></div>
    </div>
    
    <!-- Loading State -->
    <div v-if="loading" class="mx-auto max-w-3xl px-4 pt-20">
      <div class="animate-pulse">
        <div class="h-4 bg-slate-200 rounded w-20 mb-4"></div>
        <div class="h-8 bg-slate-200 rounded w-3/4 mb-2"></div>
        <div class="h-4 bg-slate-200 rounded w-1/2 mb-8"></div>
        <div class="h-64 bg-slate-200 rounded mb-8"></div>
        <div class="space-y-4">
          <div class="h-4 bg-slate-200 rounded"></div>
          <div class="h-4 bg-slate-200 rounded w-5/6"></div>
          <div class="h-4 bg-slate-200 rounded w-4/6"></div>
        </div>
      </div>
    </div>

    <!-- Error State -->
    <div v-else-if="error" class="mx-auto max-w-3xl px-4 pt-20 text-center">
      <div class="text-red-600 mb-4">
        <svg class="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.464 0L4.35 15.5c-.77.833.192 2.5 1.732 2.5z"/>
        </svg>
      </div>
      <h1 class="font-serif text-2xl text-ink mb-4">Article Not Found</h1>
      <p class="text-ink/70 mb-6">{{ error }}</p>
      <a href="/" class="text-secondary hover:text-vista-blue-600 font-medium">← Back to Home</a>
    </div>

    <!-- Article Content -->
    <article v-else-if="article" class="mx-auto max-w-3xl px-4 pb-16 pt-10">
      <header class="mb-8">
        <p class="text-xs uppercase tracking-wide text-accent">{{ getCategoryName(article.category) }}</p>
        <h1 class="mt-2 font-serif text-3xl leading-tight text-ink md:text-4xl">{{ article.title }}</h1>
        <p class="mt-2 text-sm text-ink/70">
          By {{ formatAuthor(article) }} • {{ formatDate(article.publishedDate) }} • {{ article.readTime }} min read
        </p>
      </header>

      <figure v-if="article.featuredImage" class="my-6 overflow-hidden rounded bg-slate-100">
        <img :src="article.featuredImage.url" :alt="article.title" class="w-full object-cover" />
        <figcaption v-if="article.featuredImage.caption" class="px-3 py-2 text-center text-xs text-ink/60">
          {{ article.featuredImage.caption }}
        </figcaption>
      </figure>

      <div class="prose max-w-none">
        <p v-if="article.excerpt" class="lead">{{ article.excerpt }}</p>
        
        <div v-html="parsedContent"></div>
      </div>
      
      <!-- Article Tags -->
      <div v-if="article.tags && article.tags.length" class="mt-8 pt-8 border-t border-slate-200">
        <h3 class="text-sm font-medium text-ink/70 mb-3">Tags</h3>
        <div class="flex flex-wrap gap-2">
          <span 
            v-for="tag in article.tags" 
            :key="tag.id"
            class="inline-block px-3 py-1 text-xs rounded-full bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors"
          >
            {{ tag.name }}
          </span>
        </div>
      </div>

      <!-- Related Articles -->
      <div v-if="relatedArticles.length" class="mt-12 pt-8 border-t border-slate-200">
        <h3 class="font-serif text-xl text-ink mb-6">Related Articles</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <article 
            v-for="relatedArticle in relatedArticles" 
            :key="relatedArticle.id"
            class="border border-slate-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
          >
            <div class="h-32 bg-gradient-to-br from-slate-100 to-slate-200"></div>
            <div class="p-4">
              <h4 class="font-serif text-lg text-ink mb-2 line-clamp-2">
                <a :href="`/article/${relatedArticle.slug}`" class="hover:text-primary transition-colors">
                  {{ relatedArticle.title }}
                </a>
              </h4>
              <p class="text-sm text-ink/70 line-clamp-2">{{ relatedArticle.excerpt }}</p>
            </div>
          </article>
        </div>
      </div>
    </article>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref, computed } from 'vue'
import { useApi } from '@/composables/useApi'
import { useMarkdown } from '@/composables/useMarkdown'
import type { Article } from '@/composables/useApi'

const { getArticleBySlug, getArticles, loading, error } = useApi()
const { parseMarkdown } = useMarkdown()

const article = ref<Article | null>(null)
const relatedArticles = ref<Article[]>([])
const progress = ref(0)

// Get article slug from URL path
const articleSlug = computed(() => {
  const path = window.location.pathname
  const segments = path.split('/')
  return segments[segments.length - 1] // Get the last segment as slug
})

// Parse markdown content to HTML
const parsedContent = computed(() => {
  return article.value?.content ? parseMarkdown(article.value.content) : ''
})

onMounted(async () => {
  try {
    // If the URL matches the hardcoded slug, inject the article locally and skip API calls
    if (articleSlug.value === 'from-curiosity-to-impact') {
      article.value = {
        id: 0,
        documentId: 'local-from-curiosity',
        title: 'From Curiosity to Impact',
        excerpt: 'Curious, determined and ambitious, Elijah Kwaku Adutwum Boateng has made it his mission to utilize computing and intelligent machines to address real-world challenges.',
        content: `Curious, determined and ambitious, Elijah Kwaku Adutwum Boateng has made it his mission to utilize computing and intelligent machines to address real-world challenges. From early collaborations with researchers at Ashesi University and University of Ghana, the Ashesi Class of 2023 alum has continually drawn on the technical foundation he built at the university to solve day-to-day challenges that demand both theory and practical insight. His capstone project on facial recognition systems marked a turning point in his academic career, demonstrating his ability to turn academic concepts into functional, real-world solutions. Driven by discomfort, curiosity, and a commitment to meaningful innovation, Elijah continues to deepen his knowledge in interactive machine intelligence as an Intelligent Computing masters student at Ashesi University.

Elijah's journey into the world of intelligence computer science (ICS) began after graduating from Ashesi University in 2023 with a degree in computer science. During his University trajectory, he was privileged to work at the University of Ghana and Ashesi University as a research aide, usually being assigned to foundational tasks, including literature reviews and data interpretation. Post his graduation from Ashesi in 2023, he was employed by the university as a faculty intern in the provost's office. He did not neglect his love for the world of machine intelligence, during his employment as a faculty intern, he worked alongside Dr. Govender on research projects.
According to Elijah, working with the Academic Affairs and Professors, especially, Dr. Govender taught him how to be patient and meticulous when undertaking research projects, and not necessarily rush into conclusions. He also learned that, though capstone projects generally force people into deadlines, it is important to be innovative and circumspect while allowing room to explore. Now, even under time pressure, Elijah ideates quickly and frequently, enabling him to see many results from which he identifies the most efficient approach within a short time.
During this time, he was exposed to a plethora of topics under machine intelligence, such as how Code can interact with real-world systems and transforming abstract algorithms into solutions that address concrete challenges. That’s where he realized that sitting in front of the computer, just typing “one’s” and ” zero’s”, “input” and “print,” would isolate his work behind screens, hijacking both worldly impact and his ability to engage physically with communities. Thus, he decided to offer ICS as a concatenation of theoretical foundations, research experience, and strong applicative orientation.

Early in his academic journey, Elijah was introduced to the world of research as he worked on research projects with professors from the University of Ghana and Ashesi. He was tasked with the development of literature reviews, data collection and summarisation and with the interpretation of basic statistics. In his final year at Ashesi, he found that the research knowledge he had accumulated from the tertiary institutions had provided him with the prerequisite knowledge to work independently and efficiently on the research for his capstone titled “Facial Recognition Using Multiple Constraints with Application to Attendance Management”.

Taking inspiration from Dr. Lumens’ work on facial recognition, Elijah sought to enhance the existing model which he observed functioned effectively but in isolation across different constraints, thus he aimed to integrate these individual strengths into a single, more efficient model. His research focused on three major components. The first component he improved was detection, he addressed lighting challenges by improving the system’s ability to accurately locate faces under varying lighting conditions. Secondly, he addressed feature extraction by improving the visibility and alignment of key facial landmarks such as the eyes, nose, and mouth, by utilizing Google’s FaceNet which is a pretrained model used to generate robust feature embeddings even when parts of the face are partially obscured. Finally he improved the classification stage in the model through the employment of
distance-based methods and Support Vector Machines (SVMs) to distinguish between individuals faces with higher precision and accuracy. Although the system did not explicitly account for rapid, real-time changes in lighting and pose, his final model still achieved an accuracy of approximately 95–96%.

Building on his capstone research, Elijah is exploring the intersection of vision and language, working on ‘language-vision models’ which are equipped with vision to both see and understand. While he acknowledged the existence of GPT-based systems that can perform similar tasks, he stated that they are often expensive and inaccessible thus motivating him to develop cheaper, smaller and more efficient models capable of running locally. He seeks to build a model that can make meaningful contributions to healthcare in Ghana, referring to his model as a “low-cost, hospital in your pocket” that can listen, see, and reduce consultation times and provide accurate diagnosis and treatment recommendations.

Reflecting on his journey so far, Elijah emphasized the importance of patience as a virtue in research. He learnt the importance of meticulousness and careful observation, from esteemed professors like Dr. Govender and Dr. Jumens who taught him that thoughtful iteration and attention to detail often lead to more meaningful and effective solutions. Although sometimes challenging to practice, the value of patience and meticulousness have allowed him to iterate frequently, explore multiple outcomes to identify the most efficient approaches.

Aside from patience, Elijah highlighted that his ‘eureka moments’ mainly arose from moments of discomfort and frustration. For instance his capstone facial recognition project was birthed in the middle of the night when his phone could not recognize his face and failed to unlock. Problems like these piqued his curiosity causing him to ponder until solutions began to surface. He emphasizes that anyone can identify problems by observing what doesn’t work, for him, this reflection has become a key source of innovation, with ideas quickly taking shape in his mind.

As a student currently pursuing a master’s degree in ICS, Elijah’s aim now is how to find missing persons efficiently and how delivery systems could automate connections instead of requiring calls. He hopes to achieve this by building upon his face recognition project he worked on as his final year capstone project.
`,
        slug: 'from-curiosity-to-impact',
        category: 'engineering',
        status: 'published',
        featured: true,
        readTime: 5,
        publishedDate: '2025-12-03',
        viewCount: 0,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        publishedAt: new Date().toISOString(),
        locale: 'en',
        author: {
          id: 1,
          documentId: 'ashesi-research-magazine',
          firstName: 'Ashesi Research Magazine',
          lastName: '',
          email: '',
          phone: '',
          program: 'computer-science',
          yearOfStudy: 'faculty',
          researchAdvisor: '',
          bio: '',
          researchInterests: '',
          status: 'active',
          achievements: '',
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
          publishedAt: new Date().toISOString(),
          locale: 'en'
        },
        tags: [],
        featuredImage: null,
        seo: null,
        pdfFile: null,
        createdBy: null,
        updatedBy: null,
        localizations: []
      } as Article

      // no related articles for the local article
      relatedArticles.value = []

    } else {
      // original remote-fetch behavior for other slugs
      if (articleSlug.value) {
        article.value = await getArticleBySlug(articleSlug.value)
        
        // Fetch related articles from the same category
        if (article.value) {
          const related = await getArticles({ 
            category: article.value.category, 
            limit: 4 
          })
          
          // Filter out current article from related articles
          relatedArticles.value = related.filter(a => a.id !== article.value!.id)
        }
      }
    }
  } catch (err) {
    console.error('Error fetching article:', err)
  }

  // Setup scroll progress
  updateProgress()
  window.addEventListener('scroll', updateProgress, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateProgress)
})

function updateProgress() {
  const el = document.documentElement
  const scrollTop = el.scrollTop
  const height = el.scrollHeight - el.clientHeight
  progress.value = height ? Math.min(100, Math.round((scrollTop / height) * 100)) : 0
}

// Helper functions
const getCategoryName = (category: string): string => {
  const categoryMap: Record<string, string> = {
    'computer-science': 'Computer Science',
    'engineering': 'Engineering',
    'business': 'Business', 
    'humanities': 'Humanities',
    'interdisciplinary': 'Interdisciplinary',
    'machine-intelligence': 'Machine Intelligence'
  }
  return categoryMap[category] || category
}

const formatAuthor = (article: Article): string => {
  if (!article.author) return 'Unknown Author'
  return `${article.author.firstName} ${article.author.lastName}`
}

const formatDate = (dateString: string): string => {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  })
}
</script>

<style scoped>
/* Enhanced prose styling for markdown content */
.prose p { 
  margin: 20px 0; 
  font-size: 17px; 
  line-height: 1.75; 
  color: var(--ink-color, #0E0929);
  opacity: 0.9;
}

.prose .lead { 
  font-size: 1.125rem; 
  line-height: 2; 
  color: var(--ink-color, #0E0929); 
}

.prose h1, .prose h2, .prose h3, .prose h4, .prose h5, .prose h6 { 
  margin-top: 2rem; 
  margin-bottom: 0.75rem; 
  font-family: serif; 
  color: var(--ink-color, #0E0929); 
  font-weight: 600;
}

.prose h1 { font-size: 2rem; }
.prose h2 { font-size: 1.75rem; }
.prose h3 { font-size: 1.5rem; }
.prose h4 { font-size: 1.25rem; }
.prose h5 { font-size: 1.125rem; }
.prose h6 { font-size: 1rem; }

.prose ul, .prose ol { 
  margin: 1rem 0; 
  padding-left: 1.5rem; 
  color: var(--ink-color, #0E0929);
  opacity: 0.9;
}

.prose ul { 
  list-style-type: disc; 
}

.prose ol { 
  list-style-type: decimal; 
}

.prose li {
  margin: 0.5rem 0;
}

.prose blockquote {
  margin: 1.5rem 0;
  border-left: 4px solid rgba(146, 172, 255, 0.6);
  background-color: rgba(248, 250, 252, 0.8);
  padding: 1rem 1.5rem;
  font-style: italic;
  color: var(--ink-color, #0E0929);
}

.prose blockquote p {
  margin: 0.5rem 0;
}

.prose code {
  background-color: rgba(230, 230, 230, 0.3);
  padding: 0.2rem 0.4rem;
  border-radius: 0.25rem;
  font-family: 'Monaco', 'Courier New', monospace;
  font-size: 0.875rem;
  color: #d73a49;
}

.prose pre {
  background-color: #f6f8fa;
  border: 1px solid #e1e4e8;
  border-radius: 0.375rem;
  padding: 1rem;
  margin: 1.5rem 0;
  overflow-x: auto;
  font-family: 'Monaco', 'Courier New', monospace;
  font-size: 0.875rem;
  line-height: 1.45;
}

.prose pre code {
  background: none;
  padding: 0;
  color: inherit;
}

.prose a {
  color: #0066cc;
  text-decoration: none;
}

.prose a:hover {
  color: #0052a3;
  text-decoration: underline;
}

.prose strong {
  font-weight: 600;
  color: var(--ink-color, #0E0929);
}

.prose em {
  font-style: italic;
}

.prose hr {
  margin: 2rem 0;
  border: 0;
  border-top: 1px solid #e1e4e8;
}

.prose table {
  width: 100%;
  margin: 1.5rem 0;
  border-collapse: collapse;
  border: 1px solid #e1e4e8;
}

.prose th,
.prose td {
  padding: 0.75rem;
  text-align: left;
  border-bottom: 1px solid #e1e4e8;
}

.prose th {
  background-color: #f6f8fa;
  font-weight: 600;
}

.prose figure { 
  margin: 1.5rem 0; 
}

.prose .end { 
  margin-top: 2rem; 
  color: var(--ink-color, #0E0929); 
}
</style>

<!-- Global styles applied to v-html content (unscoped) -->
<style>
.prose p {
  margin: 20px 0 !important;
}
</style>
