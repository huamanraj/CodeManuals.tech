import { h } from 'vue';
import DefaultTheme from 'vitepress/theme';
import './custom.css';
import NotFound from './NotFound.vue';

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      'not-found': () => h(NotFound)
    })
  },
  enhanceApp({ app, router, siteData }) {
    // Add structured data for articles/blog posts
    router.onAfterRouteChanged = (to) => {
      if (typeof window !== 'undefined') {
        // Add article structured data for content pages
        const isArticle = to.includes('/javascript/') || to.includes('/dsa/') || 
                         to.includes('/web-dev/') || to.includes('/react/') || 
                         to.includes('/nodejs/') || to.includes('/typescript/');
        
        if (isArticle && to !== '/') {
          const script = document.createElement('script');
          script.type = 'application/ld+json';
          script.textContent = JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": document.title,
            "description": document.querySelector('meta[name="description"]')?.getAttribute('content') || '',
            "url": window.location.href,
            "datePublished": new Date().toISOString(),
            "dateModified": new Date().toISOString(),
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
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": window.location.href
            }
          });
          
          // Remove existing article schema if present
          const existingScript = document.querySelector('script[type="application/ld+json"][data-article]');
          if (existingScript) {
            existingScript.remove();
          }
          
          script.setAttribute('data-article', 'true');
          document.head.appendChild(script);
        }
      }
    };
  }
};