<template>
  <div class="not-found-container">
    <div class="not-found-content">
      <!-- 404 Header -->
      <div class="error-section">
        <h1 class="error-code">404</h1>
        <h2 class="error-title">Page Not Found</h2>
        <p class="error-description">
          Oops! The page you're looking for doesn't exist. But don't worry, we have plenty of great content to explore.
        </p>
      </div>

      <!-- Navigation Buttons -->
      <div class="action-buttons">
        <a href="/" class="btn btn-primary">
          <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
            <polyline points="9,22 9,12 15,12 15,22"/>
          </svg>
          Back to Home
        </a>
        <button @click="goBack" class="btn btn-secondary">
          <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="m12 19-7-7 7-7"/>
            <path d="m19 12H5"/>
          </svg>
          Go Back
        </button>
      </div>

      <!-- Popular Topics -->
      <div class="suggestions-section">
        <h3 class="suggestions-title">Popular Topics</h3>
        <div class="topics-grid">
          <a href="/javascript/" class="topic-card">
            <div class="topic-icon">🚀</div>
            <h4>JavaScript</h4>
            <p>Master modern JavaScript from basics to advanced concepts</p>
          </a>
          
          <a href="/dsa/" class="topic-card">
            <div class="topic-icon">🧠</div>
            <h4>Data Structures & Algorithms</h4>
            <p>Learn the fundamentals of computer science</p>
          </a>
          
          <a href="/web-dev/" class="topic-card">
            <div class="topic-icon">🌐</div>
            <h4>Web Development</h4>
            <p>Build modern web applications with HTML, CSS, and JavaScript</p>
          </a>
          
          <a href="/react/" class="topic-card">
            <div class="topic-icon">⚛️</div>
            <h4>React</h4>
            <p>Learn React and build interactive user interfaces</p>
          </a>
          
          <a href="/nodejs/" class="topic-card">
            <div class="topic-icon">🔧</div>
            <h4>Node.js</h4>
            <p>Server-side JavaScript and backend development</p>
          </a>
          
          <a href="/typescript/" class="topic-card">
            <div class="topic-icon">📝</div>
            <h4>TypeScript</h4>
            <p>Add type safety to your JavaScript projects</p>
          </a>
        </div>
      </div>

      <!-- Quick Links -->
      <div class="quick-links-section">
        <h3 class="quick-links-title">Quick Links</h3>
        <div class="quick-links">
          <a href="/javascript/variables-data-types" class="quick-link">Variables & Data Types</a>
          <a href="/dsa/arrays" class="quick-link">Arrays</a>
          <a href="/web-dev/html-fundamentals" class="quick-link">HTML Fundamentals</a>
          <a href="/javascript/functions" class="quick-link">JavaScript Functions</a>
          <a href="/dsa/sorting-algorithms" class="quick-link">Sorting Algorithms</a>
          <a href="/web-dev/css-mastery" class="quick-link">CSS Mastery</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

const goBack = () => {
  if (window.history.length > 1) {
    window.history.back()
  } else {
    window.location.href = '/'
  }
}

onMounted(() => {
  // Add some animation delay for better UX
  const elements = document.querySelectorAll('.topic-card, .quick-link')
  elements.forEach((el, index) => {
    el.style.animationDelay = `${index * 0.1}s`
  })
})
</script>

<style scoped>
.not-found-container {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background: var(--vp-c-bg);
}

.not-found-content {
  max-width: 1200px;
  width: 100%;
  text-align: center;
}

/* Error Section */
.error-section {
  margin-bottom: 3rem;
}

.error-code {
  font-size: 8rem;
  font-weight: 800;
  background: linear-gradient(135deg, var(--vp-c-brand-1) 0%, var(--vp-c-brand-2) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 0;
  line-height: 1;
}

.error-title {
  font-size: 2.5rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
  margin: 1rem 0;
}

.error-description {
  font-size: 1.125rem;
  color: var(--vp-c-text-2);
  max-width: 600px;
  margin: 0 auto 2rem;
  line-height: 1.6;
}

/* Action Buttons */
.action-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 4rem;
  flex-wrap: wrap;
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border-radius: var(--border-radius);
  font-weight: 500;
  text-decoration: none;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
  font-size: 1rem;
}

.btn-primary {
  background: linear-gradient(135deg, var(--vp-c-brand-1) 0%, var(--vp-c-brand-2) 100%);
  color: #dde8e3;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(74, 222, 128, 0.3);
}

.btn-secondary {
  background: var(--vp-c-bg-alt);
  color: var(--vp-c-text-1);
  border: 1px solid var(--vp-c-border);
}

.btn-secondary:hover {
  background: var(--vp-c-bg-elv);
  border-color: var(--vp-c-brand-1);
}

.icon {
  width: 1.25rem;
  height: 1.25rem;
}

/* Suggestions Section */
.suggestions-section {
  margin-bottom: 3rem;
}

.suggestions-title {
  font-size: 2rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
  margin-bottom: 2rem;
}

.topics-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.topic-card {
  background: linear-gradient(135deg, var(--vp-c-bg-alt) 0%, var(--vp-c-bg-elv) 100%);
  border: 1px solid var(--vp-c-border);
  border-radius: var(--border-radius);
  padding: 2rem;
  text-decoration: none;
  transition: all 0.3s ease;
  animation: fadeInUp 0.6s ease forwards;
  opacity: 0;
  transform: translateY(20px);
}

.topic-card:hover {
  transform: translateY(-4px);
  border-color: var(--vp-c-brand-1);
  box-shadow: 0 20px 40px rgba(74, 222, 128, 0.1);
}

.topic-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.topic-card h4 {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
  margin: 0 0 0.5rem 0;
}

.topic-card p {
  color: var(--vp-c-text-2);
  margin: 0;
  line-height: 1.5;
}

/* Quick Links Section */
.quick-links-section {
  margin-top: 3rem;
}

.quick-links-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
  margin-bottom: 1.5rem;
}

.quick-links {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  justify-content: center;
}

.quick-link {
  background: var(--vp-c-bg-alt);
  color: var(--vp-c-text-2);
  padding: 0.5rem 1rem;
  border-radius: var(--border-radius);
  text-decoration: none;
  font-size: 0.875rem;
  border: 1px solid var(--vp-c-border);
  transition: all 0.3s ease;
  animation: fadeInUp 0.6s ease forwards;
  opacity: 0;
  transform: translateY(10px);
}

.quick-link:hover {
  background: var(--vp-c-brand-1);
  color: #dde8e3;
  border-color: var(--vp-c-brand-1);
}

/* Dark mode adjustments */
.dark .btn-primary {
  color: #121212;
}

.dark .topic-card {
  background: linear-gradient(135deg, #171717 0%, #242424 100%);
}

.dark .quick-link:hover {
  color: #121212;
}

/* Animations */
@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Mobile responsiveness */
@media (max-width: 768px) {
  .error-code {
    font-size: 6rem;
  }
  
  .error-title {
    font-size: 2rem;
  }
  
  .topics-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  .topic-card {
    padding: 1.5rem;
  }
  
  .action-buttons {
    flex-direction: column;
    align-items: center;
  }
  
  .btn {
    width: 100%;
    max-width: 300px;
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .not-found-container {
    padding: 1rem;
  }
  
  .error-code {
    font-size: 4rem;
  }
  
  .error-title {
    font-size: 1.5rem;
  }
  
  .error-description {
    font-size: 1rem;
  }
}
</style>