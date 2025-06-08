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
    // Custom app enhancements can go here
  }
};