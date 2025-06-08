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
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
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
      message: 'Built with ❤️ for developers',
      copyright: 'Copyright © 2024 CodeManuals.tech'
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