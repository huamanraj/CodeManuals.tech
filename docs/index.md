---
layout: home
title: CodeManuals.tech - Master Programming Concepts
description: Your comprehensive guide to programming concepts, data structures, algorithms, and modern web development. Learn JavaScript, DSA, and more with clear explanations and practical examples.

hero:
  name: CodeManuals.tech
  text: Master Programming Concepts
  tagline: Your comprehensive guide to JavaScript, Data Structures, Algorithms, and Modern Web Development
  image:
    src: /heroimg2.png
    alt: CodeManuals.tech
  actions:
    - theme: brand
      text: Start Learning
      link: /javascript/
    - theme: alt
      text: Browse Topics
      link: /dsa/

features:
  - icon: 🚀
    title: JavaScript Mastery
    details: From fundamentals to advanced concepts. Learn ES6+, async programming, and modern JavaScript patterns.
    link: /javascript/
  - icon: 🧠
    title: Data Structures & Algorithms
    details: Master the building blocks of computer science with clear explanations and practical implementations.
    link: /dsa/
  - icon: 🌐
    title: Web Development
    details: Build modern web applications with HTML, CSS, JavaScript, and popular frameworks.
    link: /web-dev/
  - icon: ⚛️
    title: React & Frameworks
    details: Learn React, Vue, and other modern frameworks to build interactive user interfaces.
    link: /react/
  - icon: 🔧
    title: Node.js & Backend
    details: Server-side JavaScript, APIs, databases, and full-stack development concepts.
    link: /nodejs/
  - icon: 📝
    title: TypeScript
    details: Add type safety to your JavaScript projects and build more robust applications.
    link: /typescript/
---

<style>
.VPHero .name {
  font-size: 2rem !important;
  font-weight: 700 !important;
  line-height:0.9;

}

.VPHero .text {
  font-size: 3.5rem !important;
  font-weight: 700 !important;

}

.VPHero .image-container {
  width: 90% !important;
  max-width: 500px !important;
}

.VPHero .image img {
  width: 100% !important;
  height: auto !important;
  max-width: 500px !important;
}

.VPFeatures {
  margin-top: 3rem;
}

.VPFeature {
  background: linear-gradient(135deg, var(--vp-c-bg-alt) 0%, var(--vp-c-bg-elv) 100%);
  border: 1px solid rgba(62, 207, 142, 0.1);
  border-radius: 12px;
  transition: all 0.3s ease;
}

.VPFeature:hover {
  transform: translateY(-4px);
  border-color: var(--vp-c-brand-1);
  box-shadow: 0 20px 40px rgba(62, 207, 142, 0.1);
}

.VPFeature .icon {
  font-size: 2rem;
  margin-bottom: 1rem;
}

@media (max-width: 768px) {
  .VPHero .name {
    font-size: 1.8rem !important;
  }
  
  .VPHero .text {
    font-size: 2.2rem !important;
  }
  
  .VPHero .container {
    flex-direction: column !important;
  }
  
  .VPHero .main {
    order: 1 !important;
    text-align: left !important;
  }
  
  .VPHero .actions {
    justify-content: flex-start !important;
  }
  
  .VPHero .image {
    order: 2 !important;
    margin-top: 2rem !important;
  }
  
  .VPHero .image-container {
    max-width: 350px !important;
  }
  
  .VPHero .image img {
    max-width: 350px !important;
  }
}
</style>
