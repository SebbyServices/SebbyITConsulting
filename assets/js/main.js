/**
 * SEBBY IT: main.js
 * Component loading, nav state, mobile menu, contact form, language + theme switchers.
 * Rule: nothing outside loadComponents() may query header/footer DOM at load time,
 * because the header and footer are injected asynchronously.
 */

document.addEventListener('DOMContentLoaded', () => {
  setupI18n();
  setupThemeToggle();
  loadComponents();
  setupMobileMenuDelegation();
  setupContactForm();
});

// ========== COMPONENTS ==========
async function loadComponents() {
  for (const name of ['header', 'footer']) {
    const slot = document.getElementById(`${name}-slot`);
    if (!slot) continue;
    try {
      const res = await fetch(`/components/${name}.html`);
      if (!res.ok) throw new Error(res.status);
      slot.innerHTML = await res.text();
      if (name === 'header') {
        initNavLinks(slot);
        setupHeaderScroll();
      }
      if (name === 'footer') {
        const y = slot.querySelector('[data-year]');
        if (y) y.textContent = new Date().getFullYear();
      }
      applyLang(slot);
      syncSwitchers();
    } catch (err) {
      console.warn(`Could not load ${name} component:`, err);
    }
  }
}

// ========== NAV ACTIVE STATE ==========
function initNavLinks(slot) {
  const path = window.location.pathname;
  slot.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    const active = href === '/' ? path === '/' : path.startsWith(href);
    link.classList.toggle('active', active);
    if (active) link.setAttribute('aria-current', 'page');
  });
}

// ========== HEADER BORDER ON SCROLL ==========
function setupHeaderScroll() {
  const header = document.querySelector('.site-header');
  if (!header) return;
  const update = () => header.classList.toggle('scrolled', window.scrollY > 8);
  update();
  window.addEventListener('scroll', update, { passive: true });
}

// ========== MOBILE MENU (event delegation, works whenever the header lands) ==========
function setupMobileMenuDelegation() {
  const close = (menu, btn) => {
    menu.classList.remove('open');
    btn.setAttribute('aria-expanded', 'false');
  };
  document.addEventListener('click', e => {
    const btn = document.querySelector('.hamburger-btn');
    const menu = document.querySelector('.nav-menu');
    if (!btn || !menu) return;
    if (e.target.closest('.hamburger-btn')) {
      const open = menu.classList.toggle('open');
      btn.setAttribute('aria-expanded', String(open));
      return;
    }
    if (e.target.closest('.nav-menu a') || !e.target.closest('.site-header')) close(menu, btn);
  });
  document.addEventListener('keydown', e => {
    if (e.key !== 'Escape') return;
    const btn = document.querySelector('.hamburger-btn');
    const menu = document.querySelector('.nav-menu');
    if (btn && menu) close(menu, btn);
  });
}

// ========== CONTACT FORM (Formspree via fetch) ==========
function setupContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;
  const status = document.getElementById('form-status');
  form.addEventListener('submit', async e => {
    // Until a real Formspree ID is set, let the browser handle it normally.
    if (form.action.includes('YOUR_FORM_ID')) return;
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    btn.disabled = true;
    try {
      const res = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' }
      });
      if (!res.ok) throw new Error(res.status);
      form.reset();
      status.className = 'form-status ok';
      status.textContent = t('Got it. We will get back to you soon, usually by text or WhatsApp.');
    } catch (err) {
      status.className = 'form-status err';
      status.textContent = t('That did not send. Please try again, or message us on WhatsApp at +1 (849) 856-1504.');
    }
    status.hidden = false;
    btn.disabled = false;
  });
}

// ========== LANGUAGE (EN / ES) ==========
// English lives in the HTML. Spanish comes from /assets/i18n/es.json, keyed by the
// English text of each text node or attribute (whitespace collapsed). A string with
// no entry stays in English. After changing copy, run: python3 scripts/i18n-check.py
// The inline <head> script sets html[data-lang] before paint and prefetches the
// dictionary for Spanish visitors (window.__esDict).
const root = document.documentElement;
const I18N_ATTRS = ['aria-label', 'placeholder', 'alt', 'title'];
const i18n = { dict: null, loading: null, textOrig: new WeakMap(), attrOrig: new WeakMap(), title: document.title };

const lang = () => (root.dataset.lang === 'es' ? 'es' : 'en');
const norm = s => s.replace(/\s+/g, ' ').trim();

function t(en) {
  return (lang() === 'es' && i18n.dict && i18n.dict[en]) || en;
}

function loadDict() {
  if (!i18n.loading) {
    i18n.loading = (window.__esDict || fetch('/assets/i18n/es.json').then(r => {
      if (!r.ok) throw new Error(r.status);
      return r.json();
    })).then(d => (i18n.dict = d));
    i18n.loading.catch(() => (i18n.loading = null)); // allow a retry on the next toggle
  }
  return i18n.loading;
}

function skipNode(el) {
  return !el || el.closest('script, style, svg, [translate="no"]');
}

// Swap every text node and translatable attribute under `scope` to the current language.
function applyLang(scope) {
  if (!scope || !i18n.dict) return; // nothing to swap until Spanish has been loaded once
  const es = lang() === 'es';
  const walker = document.createTreeWalker(scope, NodeFilter.SHOW_TEXT);
  for (let node = walker.nextNode(); node; node = walker.nextNode()) {
    if (skipNode(node.parentElement)) continue;
    if (!i18n.textOrig.has(node)) i18n.textOrig.set(node, node.nodeValue);
    const orig = i18n.textOrig.get(node);
    const spanish = es && i18n.dict[norm(orig)];
    // Keep the node's surrounding whitespace so inline spacing between elements survives.
    node.nodeValue = spanish ? orig.match(/^\s*/)[0] + spanish + orig.match(/\s*$/)[0] : orig;
  }
  scope.querySelectorAll(I18N_ATTRS.map(a => `[${a}]`).join(',')).forEach(el => {
    if (skipNode(el)) return;
    if (!i18n.attrOrig.has(el)) {
      i18n.attrOrig.set(el, Object.fromEntries(I18N_ATTRS.filter(a => el.hasAttribute(a)).map(a => [a, el.getAttribute(a)])));
    }
    for (const [a, orig] of Object.entries(i18n.attrOrig.get(el))) {
      el.setAttribute(a, (es && i18n.dict[norm(orig)]) || orig);
    }
  });
  if (scope === document.body) document.title = (es && i18n.dict[norm(i18n.title)]) || i18n.title;
}

async function setLang(next, persist) {
  root.dataset.lang = next;
  root.lang = next;
  if (persist) {
    try { localStorage.setItem('lang', next); } catch (e) { /* private mode: choice lasts this page only */ }
  }
  if (next === 'es') {
    try {
      await loadDict();
    } catch (err) {
      console.warn('Could not load Spanish translations:', err);
      root.dataset.lang = 'en';
      root.lang = 'en';
    }
  }
  applyLang(document.body);
  syncSwitchers();
  root.classList.add('i18n-ready');
}

function setupI18n() {
  setLang(lang(), false).then(() => {
    // Default the contact form's language field to the language being read.
    const sel = document.getElementById('language');
    if (sel && lang() === 'es' && sel.selectedIndex === 0) sel.value = 'Spanish';
  });
  document.addEventListener('click', e => {
    const btn = e.target.closest('[data-set-lang]');
    if (btn && btn.dataset.setLang !== lang()) setLang(btn.dataset.setLang, true);
  });
}

// ========== THEME (auto / light / dark) ==========
// "auto" follows the device setting (prefers-color-scheme) and is the default.
// A manual choice is stored and applied as html[data-theme] by the inline <head> script.
const darkQuery = window.matchMedia('(prefers-color-scheme: dark)');
const theme = () => root.dataset.theme || 'auto';

function setupThemeToggle() {
  document.addEventListener('click', e => {
    if (!e.target.closest('.theme-btn')) return;
    // From auto, the first click goes to the opposite of what is showing now.
    const systemDark = darkQuery.matches;
    const order = systemDark ? ['auto', 'light', 'dark'] : ['auto', 'dark', 'light'];
    const next = order[(order.indexOf(theme()) + 1) % order.length];
    if (next === 'auto') delete root.dataset.theme;
    else root.dataset.theme = next;
    try {
      if (next === 'auto') localStorage.removeItem('theme');
      else localStorage.setItem('theme', next);
    } catch (err) { /* private mode: choice lasts this page only */ }
    syncSwitchers();
  });
}

function syncSwitchers() {
  document.querySelectorAll('[data-set-lang]').forEach(b => {
    b.setAttribute('aria-pressed', String(b.dataset.setLang === lang()));
  });
  document.querySelectorAll('.theme-btn').forEach(b => {
    const label = t(`Theme: ${theme()}`);
    b.dataset.mode = theme();
    b.setAttribute('aria-label', label);
    b.title = label;
  });
}
