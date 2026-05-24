/**
 * SEBBY IT CONSULTING — Main.js
 * Animations, transitions, component loading
 */

// ========== PAGE TRANSITIONS ==========
// Fade out current page, load new page, fade in
function setupPageTransitions() {
  document.querySelectorAll('a[href]').forEach(link => {
    // Skip external links and special hrefs
    if (link.hostname !== location.hostname || link.href === '#') return;

    link.addEventListener('click', function(e) {
      e.preventDefault();
      document.body.classList.add('page-exit');
      setTimeout(() => {
        location.href = this.href;
      }, 300);
    });
  });

  // Re-enter animation
  window.addEventListener('pageshow', () => {
    document.body.classList.remove('page-exit');
    document.body.classList.add('page-enter');
    // Reinit animations on new page
    setupScrollReveals();
    setupStatCounters();
  });
}

// ========== SCROLL REVEALS ==========
// IntersectionObserver for fade-up animations
function setupScrollReveals() {
  const revealElements = document.querySelectorAll('.reveal');

  const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  revealElements.forEach(el => observer.observe(el));
}

// ========== STAT COUNTERS ==========
// Animate numbers counting up to target
function setupStatCounters() {
  const counterElements = document.querySelectorAll('.stat-number[data-target]');

  const observerOptions = {
    threshold: 0.5
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.dataset.counted) {
        animateCounter(entry.target);
        entry.target.dataset.counted = 'true';
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  counterElements.forEach(el => observer.observe(el));
}

function animateCounter(element) {
  const target = parseInt(element.dataset.target);
  const originalText = element.textContent;
  const duration = 1800; // 1.8 seconds
  const start = performance.now();

  const easeOutQuad = (t) => 1 - (1 - t) * (1 - t);

  const update = (now) => {
    const progress = Math.min((now - start) / duration, 1);
    const eased = easeOutQuad(progress);
    const current = Math.floor(eased * target);

    // Preserve formatting (e.g., "$150+" or "10+")
    let formatted = current.toLocaleString();
    if (originalText.includes('$')) formatted = '$' + formatted;
    if (originalText.includes('+')) formatted = formatted + '+';

    element.textContent = formatted;

    if (progress < 1) {
      requestAnimationFrame(update);
    }
  };

  requestAnimationFrame(update);
}

// ========== PARALLAX HERO ==========
// Hero background moves slower than foreground
function setupParallax() {
  const heroBg = document.querySelector('.hero-bg');
  if (!heroBg) return;

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    heroBg.style.transform = `translateY(${scrollY * 0.4}px)`;
  });
}

// ========== COMPONENT LOADING ==========
// Load header and footer components via fetch
async function loadComponents() {
  const components = ['header', 'footer'];

  for (const component of components) {
    const slot = document.getElementById(`${component}-slot`);
    if (!slot) continue;

    try {
      const response = await fetch(`/components/${component}.html`);
      if (!response.ok) throw new Error(`Failed to load ${component}`);

      const html = await response.text();
      slot.innerHTML = html;

      // Re-init component-specific scripts
      if (component === 'header' && typeof initNav === 'function') {
        initNav();
      }
    } catch (error) {
      console.warn(`Could not load ${component} component:`, error);
    }
  }
}

// ========== MOBILE MENU ==========
// Toggle mobile menu visibility
function setupMobileMenu() {
  const hamburger = document.getElementById('hamburger');
  const menu = document.querySelector('.nav-menu');

  if (hamburger && menu) {
    hamburger.addEventListener('click', () => {
      const isOpen = menu.style.display === 'flex';
      menu.style.display = isOpen ? 'none' : 'flex';
    });

    // Close menu on link click
    menu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        menu.style.display = 'none';
      });
    });
  }
}

// ========== INITIALIZATION ==========
document.addEventListener('DOMContentLoaded', () => {
  // Load components
  loadComponents();

  // Setup animations
  setupScrollReveals();
  setupStatCounters();
  setupParallax();
  setupPageTransitions();
  setupMobileMenu();

  // Add enter animation to page
  document.body.classList.add('page-enter');
});

// Setup animations again on page visibility change
document.addEventListener('visibilitychange', () => {
  if (!document.hidden) {
    setupScrollReveals();
    setupStatCounters();
  }
});
