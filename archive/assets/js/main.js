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

// ========== NAV SCROLL STATE ==========
// Manage nav transparency over hero sections and blur on scroll
function setupNavScroll() {
  const nav = document.querySelector('nav');
  if (!nav) return;

  const hero = document.querySelector('.hero');
  if (hero) nav.classList.add('nav-transparent');

  window.addEventListener(
    'scroll',
    () => {
      const threshold = hero ? Math.min(hero.offsetHeight * 0.1, 80) : 20;
      if (window.scrollY > threshold) {
        nav.classList.add('scrolled');
        nav.classList.remove('nav-transparent');
      } else {
        nav.classList.remove('scrolled');
        if (hero) nav.classList.add('nav-transparent');
      }
    },
    { passive: true }
  );
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

      // Initialize nav after header is injected
      if (component === 'header') {
        initNavLinks(slot);
        setupNavScroll(); // Re-run after nav is in DOM
      }
    } catch (error) {
      console.warn(`Could not load ${component} component:`, error);
    }
  }
}

// ========== NAV LINK ACTIVE STATE ==========
// Set .active class on nav link matching current page
function initNavLinks(headerSlot) {
  const pathname = window.location.pathname;
  headerSlot.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    const isActive =
      (href === '/' && pathname === '/') ||
      (href !== '/' && pathname.startsWith(href));
    link.classList.toggle('active', isActive);
  });
}

// ========== MOBILE MENU DELEGATION ==========
// Event delegation for mobile menu — works regardless of when header component loads
function setupMobileMenuDelegation() {
  document.addEventListener('click', (e) => {
    const nav = document.querySelector('nav');
    const menu = nav?.querySelector('.nav-menu');
    const hamburger = nav?.querySelector('.hamburger-btn');
    if (!nav || !menu || !hamburger) return;

    // Hamburger click — toggle menu
    if (e.target.closest('.hamburger-btn')) {
      const isOpen = menu.classList.toggle('open');
      hamburger.classList.toggle('open', isOpen);
      hamburger.setAttribute('aria-expanded', String(isOpen));
    }
    // Nav link click — close menu
    else if (e.target.closest('.nav-menu a')) {
      menu.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    }
    // Outside click — close menu
    else if (!nav.contains(e.target)) {
      menu.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    }
  });

  // Escape key — close menu
  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape') return;
    const nav = document.querySelector('nav');
    const menu = nav?.querySelector('.nav-menu');
    const hamburger = nav?.querySelector('.hamburger-btn');
    if (menu?.classList.contains('open')) {
      menu.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
      hamburger.focus();
    }
  });
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
  setupMobileMenuDelegation();

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
