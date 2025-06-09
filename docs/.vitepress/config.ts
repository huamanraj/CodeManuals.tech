import { defineConfig } from 'vitepress';

export default defineConfig({
  lang: 'en-US',
  title: 'CodeManuals.tech',
  description: 'Your comprehensive guide to programming concepts, data structures, algorithms, and modern web development. Learn JavaScript, TypeScript, DSA, React, Node.js with clear explanations and practical examples.',
  
  head: [
    // Basic Meta Tags
    ['meta', { name: 'keywords', content: 'programming tutorials, javascript guide, data structures algorithms, web development, coding tutorials, typescript, react, nodejs, computer science, software engineering' }],
    ['meta', { name: 'author', content: 'Aman Raj - CodeManuals.tech' }],
    ['meta', { name: 'robots', content: 'index, follow' }],
    ['meta', { name: 'googlebot', content: 'index, follow' }],
    
    // OpenGraph Meta Tags
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:site_name', content: 'CodeManuals.tech' }],
    ['meta', { property: 'og:title', content: 'CodeManuals.tech - Master Programming Concepts' }],
    ['meta', { property: 'og:description', content: 'Your comprehensive guide to programming concepts, data structures, algorithms, and modern web development. Learn JavaScript, TypeScript, DSA, React, Node.js with clear explanations.' }],
    ['meta', { property: 'og:image', content: 'https://codemanuals.tech/og.png' }],
    ['meta', { property: 'og:image:width', content: '1200' }],
    ['meta', { property: 'og:image:height', content: '630' }],
    ['meta', { property: 'og:url', content: 'https://codemanuals.tech' }],
    ['meta', { property: 'og:locale', content: 'en_US' }],
    
    // Twitter Meta Tags
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:site', content: '@codemanuals' }],
    ['meta', { name: 'twitter:creator', content: '@huamanraj' }],
    ['meta', { name: 'twitter:title', content: 'CodeManuals.tech - Master Programming Concepts' }],
    ['meta', { name: 'twitter:description', content: 'Your comprehensive guide to programming concepts, data structures, algorithms, and modern web development.' }],
    ['meta', { name: 'twitter:image', content: 'https://codemanuals.tech/og.png' }],
    
    // Additional SEO Meta Tags
    ['meta', { name: 'theme-color', content: '#3eaf8e' }],
    ['meta', { name: 'msapplication-TileColor', content: '#3eaf8e' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }],
    
    // Favicons and Icons
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }],
    ['link', { rel: 'manifest', href: '/site.webmanifest' }],
    
    // Canonical URL
    ['link', { rel: 'canonical', href: 'https://codemanuals.tech' }],
    
    // Structured Data (JSON-LD)
    ['script', { type: 'application/ld+json' }, JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "CodeManuals.tech",
      "description": "Your comprehensive guide to programming concepts, data structures, algorithms, and modern web development.",
      "url": "https://codemanuals.tech",
      "author": {
        "@type": "Person",
        "name": "Aman Raj",
        "url": "https://amanraj.me"
      },
      "publisher": {
        "@type": "Organization",
        "name": "CodeManuals.tech",
        "logo": {
          "@type": "ImageObject",
          "url": "https://codemanuals.tech/icon.png"
        }
      },
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://codemanuals.tech/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    })],
    
    // Educational Organization Schema
    ['script', { type: 'application/ld+json' }, JSON.stringify({
      "@context": "https://schema.org",
      "@type": "EducationalOrganization",
      "name": "CodeManuals.tech",
      "url": "https://codemanuals.tech",
      "description": "Comprehensive programming education platform offering tutorials on JavaScript, TypeScript, Data Structures, Algorithms, and Web Development.",
      "educationalCredentialAwarded": "Programming Knowledge Certification",
      "hasCredential": {
        "@type": "EducationalOccupationalCredential",
        "name": "Programming Fundamentals",
        "description": "Comprehensive understanding of programming concepts, data structures, and algorithms"
      }
    })]
  ],

  themeConfig: {
    logo: '/icon.png',
    siteTitle: 'CodeManuals.tech',
    
  
    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'Docs',
        items: [
          {
            text: 'Programming Languages',
            items: [
              { text: 'JavaScript', link: '/javascript/' },
              { text: 'TypeScript', link: '/typescript/' },
            ]
          },
          {
            text: 'Computer Science',
            items: [
              { text: 'Data Structures & Algorithms', link: '/dsa/' },
            ]
          },
          {
            text: 'Web Development',
            items: [
              { text: 'Frontend Development', link: '/web-dev/' },
              { text: 'React', link: '/react/' },
              { text: 'Node.js', link: '/nodejs/' },
            ]
          }
        ]
      }
    ],

    sidebar: {
      '/javascript/': [
        {
          text: 'JavaScript Fundamentals',
          collapsed: false,
          items: [
            { text: 'Introduction', link: '/javascript/' },
            { text: 'Variables & Data Types', link: '/javascript/variables-data-types' },
            { text: 'Functions', link: '/javascript/functions' },
            { text: 'Objects & Arrays', link: '/javascript/objects-arrays' },
            { text: 'Async Programming', link: '/javascript/async-programming' },
            { text: 'ES6+ Features', link: '/javascript/es6-features' },
          ],
        },
        {
          text: 'Advanced Concepts',
          collapsed: true,
          items: [
            { text: 'Closures', link: '/javascript/closures' },
            { text: 'Prototypes', link: '/javascript/prototypes' },
            { text: 'Event Loop', link: '/javascript/event-loop' },
          ],
        },
      ],
      '/dsa/': [
        {
          text: 'Data Structures',
          collapsed: false,
          items: [
            { text: 'Introduction', link: '/dsa/' },
            { text: 'Arrays', link: '/dsa/arrays' },
            { text: 'Linked Lists', link: '/dsa/linked-lists' },
            { text: 'Stacks & Queues', link: '/dsa/stacks-queues' },
            { text: 'Trees', link: '/dsa/trees' },
            { text: 'Graphs', link: '/dsa/graphs' },
            { text: 'Hash Tables', link: '/dsa/hash-tables' },
          ],
        },
        {
          text: 'Algorithms',
          collapsed: false,
          items: [
            { text: 'Sorting Algorithms', link: '/dsa/sorting-algorithms' },
            { text: 'Searching Algorithms', link: '/dsa/searching-algorithms' },
            { text: 'Dynamic Programming', link: '/dsa/dynamic-programming' },
            { text: 'Greedy Algorithms', link: '/dsa/greedy-algorithms' },
            { text: 'Graph Algorithms', link: '/dsa/graph-algorithms' },
          ],
        },
      ],
      '/web-dev/': [
        {
          text: 'Frontend Development',
          collapsed: false,
          items: [
            { text: 'Introduction', link: '/web-dev/' },
            { text: 'HTML Fundamentals', link: '/web-dev/html-fundamentals' },
            { text: 'CSS Mastery', link: '/web-dev/css-mastery' },
            { text: 'Responsive Design', link: '/web-dev/responsive-design' },
            { text: 'Performance Optimization', link: '/web-dev/performance' },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/codemanuals' }
    ],

    footer: {
      message: `
        <div style="text-align: center; margin-bottom: 2rem;">
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 2rem; max-width: 1200px; margin: 0 auto; text-align: left;">
            <div>
              <h4 style="color: var(--vp-c-brand-1); margin-bottom: 1rem; font-weight: 600;">Programming Languages</h4>
              <ul style="list-style: none; padding: 0; margin: 0;">
                <li style="margin-bottom: 0.5rem;"><a href="/javascript/" style="color: var(--vp-c-text-2); text-decoration: none;">JavaScript</a></li>
                <li style="margin-bottom: 0.5rem;"><a href="/typescript/" style="color: var(--vp-c-text-2); text-decoration: none;">TypeScript</a></li>
              </ul>
            </div>
            <div>
              <h4 style="color: var(--vp-c-brand-1); margin-bottom: 1rem; font-weight: 600;">Computer Science</h4>
              <ul style="list-style: none; padding: 0; margin: 0;">
                <li style="margin-bottom: 0.5rem;"><a href="/dsa/" style="color: var(--vp-c-text-2); text-decoration: none;">Data Structures</a></li>
                <li style="margin-bottom: 0.5rem;"><a href="/dsa/algorithms" style="color: var(--vp-c-text-2); text-decoration: none;">Algorithms</a></li>
                <li style="margin-bottom: 0.5rem;"><a href="/dsa/dynamic-programming" style="color: var(--vp-c-text-2); text-decoration: none;">Dynamic Programming</a></li>
              </ul>
            </div>
            <div>
              <h4 style="color: var(--vp-c-brand-1); margin-bottom: 1rem; font-weight: 600;">Web Development</h4>
              <ul style="list-style: none; padding: 0; margin: 0;">
                <li style="margin-bottom: 0.5rem;"><a href="/web-dev/" style="color: var(--vp-c-text-2); text-decoration: none;">Frontend Development</a></li>
                <li style="margin-bottom: 0.5rem;"><a href="/react/" style="color: var(--vp-c-text-2); text-decoration: none;">React</a></li>
                <li style="margin-bottom: 0.5rem;"><a href="/nodejs/" style="color: var(--vp-c-text-2); text-decoration: none;">Node.js</a></li>
              </ul>
            </div>
            <div>
              <h4 style="color: var(--vp-c-brand-1); margin-bottom: 1rem; font-weight: 600;">About</h4>
              <p style="color: var(--vp-c-text-2); margin: 0 0 0.5rem 0;">Comprehensive programming guides and tutorials</p>
              <p style="margin: 0;"><a href="https://amanraj.me" target="_blank" style="color: var(--vp-c-brand-1); text-decoration: none;">Created by Aman Raj</a></p>
            </div>
          </div>
        </div>
        <div style="border-top: 1px solid var(--vp-c-border); padding-top: 1.5rem; text-align: center;">
          
        </div>
      `,
      copyright: 'Copyright © 2025 CodeManuals.tech • Created by <a href="https://amanraj.me" target="_blank" style="color: var(--vp-c-brand-1);">Aman Raj</a>'
    },

    search: {
      provider: 'local'
    }
  },

  sitemap: {
    hostname: 'https://codemanuals.tech',
    transformItems: (items) => {
      return items.map((item) => ({
        ...item,
        changefreq: 'weekly',
        priority: item.url === '/' ? 1.0 : 0.8
      }))
    }
  },

  cleanUrls: true,
  
  // Disable Git-dependent features for WebContainer compatibility
  ignoreDeadLinks: true,
  
  vite: {
    server: {
      hmr: {
        overlay: false
      }
    }
  },

  // Set dark mode as default
  appearance: 'dark',

  // Additional SEO configurations
  transformHead: ({ pageData }) => {
    const head = []
    
    // Add page-specific meta tags
    if (pageData.frontmatter.title) {
      head.push(['meta', { property: 'og:title', content: pageData.frontmatter.title }])
      head.push(['meta', { name: 'twitter:title', content: pageData.frontmatter.title }])
    }
    
    if (pageData.frontmatter.description) {
      head.push(['meta', { property: 'og:description', content: pageData.frontmatter.description }])
      head.push(['meta', { name: 'twitter:description', content: pageData.frontmatter.description }])
    }
    
    // Add canonical URL for each page
    const canonicalUrl = `https://codemanuals.tech${pageData.relativePath.replace(/\.md$/, '').replace(/\/index$/, '/')}`
    head.push(['link', { rel: 'canonical', href: canonicalUrl }])
    head.push(['meta', { property: 'og:url', content: canonicalUrl }])
    
    return head
  }
});