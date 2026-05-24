/**
 * STAT COUNTER ANIMATIONS
 * Counts up numbers with easing
 */

// Easing functions
const easeOutQuad = (t) => 1 - (1 - t) * (1 - t);
const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);
const easeOutExpo = (t) => t === 1 ? 1 : 1 - Math.pow(2, -10 * t);

// Animate a single counter element
function animateCounter(element, duration = 1800, easing = easeOutQuad) {
  const target = parseInt(element.dataset.target);
  const originalText = element.textContent;
  const start = performance.now();

  const update = (now) => {
    const progress = Math.min((now - start) / duration, 1);
    const eased = easing(progress);
    const current = Math.floor(eased * target);

    // Preserve formatting from original text
    let formatted = current.toLocaleString();
    if (originalText.includes('$')) formatted = '$' + formatted;
    if (originalText.includes('+')) formatted = formatted + '+';
    if (originalText.includes('M')) formatted = formatted + 'M';

    element.textContent = formatted;

    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      // Ensure final value is correct
      element.textContent = originalText;
    }
  };

  requestAnimationFrame(update);
}

// Initialize all counters with IntersectionObserver
function initCounters(selector = '.stat-number[data-target]', duration = 1800) {
  const counters = document.querySelectorAll(selector);
  const tracked = new Set();

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !tracked.has(entry.target)) {
          animateCounter(entry.target, duration);
          tracked.add(entry.target);
        }
      });
    },
    { threshold: 0.5, rootMargin: '0px 0px -100px 0px' }
  );

  counters.forEach((counter) => {
    observer.observe(counter);
  });

  return observer;
}

// Auto-initialize on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    initCounters();
  });
} else {
  initCounters();
}
