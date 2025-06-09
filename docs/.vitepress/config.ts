import { defineConfig } from 'vitepress';

export default defineConfig({
  lang: 'en-US',
  title: 'CodeManuals.tech',
  description: 'Your comprehensive guide to programming concepts, data structures, algorithms, and modern web development.',
  
  head: [
    ['meta', { name: 'keywords', content: 'programming, javascript, data structures, algorithms, web development, coding tutorials' }],
    ['meta', { name: 'author', content: 'CodeManuals.tech' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:site_name', content: 'CodeManuals.tech' }],
    ['meta', { property: 'og:image', content: '/og.png' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:image', content: '/og.png' }],
    ['link', { rel: 'icon', type: 'image/png', href: '/icon.png' }],
  ],

  themeConfig: {
    logo: '/logo.svg',
    siteTitle: 'CodeManuals.tech',
    
    // Disable Git-dependent features
    lastUpdated: false,
    
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
    hostname: 'https://codemanuals.tech'
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
  appearance: 'dark'
});