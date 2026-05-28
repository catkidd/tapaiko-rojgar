/**
 * Tapaiko Rojgar — Main JavaScript
 * Corporate Job Portal | Version 1.0
 */

'use strict';

/* ── DOM Ready ── */
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initScrollTop();
  initCounters();
  initScrollAnimations();
  initJobSearch();
  initBookmarks();
  initJobFilters();
  initSmoothLinks();
  initChartBars();
});

/* ============================================================
   NAVBAR — Scroll & Active State
   ============================================================ */
function initNavbar() {
  const navbar = document.getElementById('main-navbar');
  if (!navbar) return;

  // Sticky shrink on scroll
  const onScroll = () => {
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Highlight active nav link based on current page
  const links = navbar.querySelectorAll('.nav-link');
  const current = window.location.pathname.split('/').pop() || 'index.html';
  links.forEach(link => {
    const href = link.getAttribute('href') || '';
    if (href === current || (current === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}

/* ============================================================
   SCROLL TO TOP BUTTON
   ============================================================ */
function initScrollTop() {
  const btn = document.getElementById('scroll-top');
  if (!btn) return;
  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });
  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ============================================================
   ANIMATED NUMBER COUNTERS
   ============================================================ */
function initCounters() {
  const counters = document.querySelectorAll('[data-count]');
  if (!counters.length) return;

  const animateCounter = (el) => {
    const target = parseInt(el.getAttribute('data-count'));
    const suffix = el.getAttribute('data-suffix') || '';
    const duration = 1800;
    const start = performance.now();

    const update = (now) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(eased * target).toLocaleString() + suffix;
      if (progress < 1) requestAnimationFrame(update);
    };
    requestAnimationFrame(update);
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.dataset.counted) {
        entry.target.dataset.counted = 'true';
        animateCounter(entry.target);
      }
    });
  }, { threshold: 0.3 });

  counters.forEach(el => observer.observe(el));
}

/* ============================================================
   SCROLL-TRIGGERED ANIMATIONS
   ============================================================ */
function initScrollAnimations() {
  const els = document.querySelectorAll('.hidden-anim');
  if (!els.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, idx) => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const delay = el.dataset.delay || 0;
        setTimeout(() => {
          el.classList.remove('hidden-anim');
          el.classList.add('anim-fade-up');
        }, delay);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  els.forEach((el, i) => {
    el.dataset.delay = el.dataset.delay || (i % 4) * 80;
    observer.observe(el);
  });
}

/* ============================================================
   JOB SEARCH — Hero Search Form
   ============================================================ */
function initJobSearch() {
  const form = document.getElementById('hero-search-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const keyword  = form.querySelector('#search-keyword')?.value.trim() || '';
    const location = form.querySelector('#search-location')?.value || '';
    const category = form.querySelector('#search-category')?.value || '';

    // Build query string and navigate to jobs page
    const params = new URLSearchParams();
    if (keyword)  params.set('q', keyword);
    if (location) params.set('loc', location);
    if (category) params.set('cat', category);

    const qs = params.toString();
    window.location.href = 'jobs.html' + (qs ? '?' + qs : '');
  });
}

/* ============================================================
   BOOKMARKS — Save/Unsave Jobs
   ============================================================ */
function initBookmarks() {
  let saved = JSON.parse(localStorage.getItem('tr_saved_jobs') || '[]');

  document.querySelectorAll('.job-card-bookmark').forEach(btn => {
    const jobId = btn.dataset.jobId;
    if (saved.includes(jobId)) {
      btn.classList.add('saved');
      btn.querySelector('i').className = 'fas fa-bookmark';
    }
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isSaved = btn.classList.contains('saved');
      if (isSaved) {
        saved = saved.filter(id => id !== jobId);
        btn.classList.remove('saved');
        btn.querySelector('i').className = 'far fa-bookmark';
        showToast('Job removed from saved list');
      } else {
        saved.push(jobId);
        btn.classList.add('saved');
        btn.querySelector('i').className = 'fas fa-bookmark';
        showToast('Job saved successfully!');
      }
      localStorage.setItem('tr_saved_jobs', JSON.stringify(saved));
    });
  });
}

/* ============================================================
   TOAST NOTIFICATION
   ============================================================ */
function showToast(message, type = 'success') {
  const existing = document.getElementById('tr-toast');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.id = 'tr-toast';
  toast.style.cssText = `
    position: fixed;
    bottom: 5rem;
    right: 2rem;
    background: ${type === 'success' ? 'var(--primary-blue)' : '#dc2626'};
    color: #fff;
    font-family: var(--font-body);
    font-size: 0.85rem;
    font-weight: 500;
    padding: 0.75rem 1.25rem;
    border-radius: 8px;
    box-shadow: 0 8px 24px rgba(0,0,0,0.2);
    z-index: 9999;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    border-left: 4px solid var(--accent-gold);
    animation: slideToast 0.3s ease forwards;
  `;
  toast.innerHTML = `<i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>${message}`;

  // Inject keyframe if not present
  if (!document.getElementById('toast-style')) {
    const style = document.createElement('style');
    style.id = 'toast-style';
    style.textContent = `@keyframes slideToast { from { opacity:0; transform:translateY(20px) } to { opacity:1; transform:translateY(0) } }`;
    document.head.appendChild(style);
  }

  document.body.appendChild(toast);
  setTimeout(() => {
    toast.style.animation = 'none';
    toast.style.opacity = '0';
    toast.style.transition = 'opacity 0.3s';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

/* ============================================================
   JOB FILTER — Jobs Page
   ============================================================ */
function initJobFilters() {
  const filterForm = document.getElementById('job-filter-form');
  if (!filterForm) return;

  // Read params from URL on page load
  const params = new URLSearchParams(window.location.search);
  const qInput = document.getElementById('jobs-keyword');
  const locInput = document.getElementById('jobs-location');
  if (qInput   && params.get('q'))   qInput.value = params.get('q');
  if (locInput && params.get('loc')) locInput.value = params.get('loc');

  // Filter cards
  filterForm.addEventListener('change', filterJobs);
  filterForm.addEventListener('submit', (e) => { e.preventDefault(); filterJobs(); });

  // Sort
  const sortSelect = document.getElementById('sort-jobs');
  if (sortSelect) sortSelect.addEventListener('change', filterJobs);

  // Reset
  const resetBtn = document.getElementById('reset-filters');
  if (resetBtn) resetBtn.addEventListener('click', () => {
    filterForm.reset();
    filterJobs();
  });

  function filterJobs() {
    const cards = document.querySelectorAll('.jobs-list-card');
    const checkedTypes = [...filterForm.querySelectorAll('input[name="job-type"]:checked')].map(el => el.value);
    const checkedCats  = [...filterForm.querySelectorAll('input[name="category"]:checked')].map(el => el.value);
    const keyword      = (document.getElementById('jobs-keyword')?.value || '').toLowerCase().trim();
    const location     = (document.getElementById('jobs-location')?.value || '').toLowerCase();

    let visible = 0;
    cards.forEach(card => {
      const type     = card.dataset.type || '';
      const cat      = card.dataset.category || '';
      const title    = (card.dataset.title || '').toLowerCase();
      const company  = (card.dataset.company || '').toLowerCase();
      const cardLoc  = (card.dataset.location || '').toLowerCase();

      const typeMatch = !checkedTypes.length || checkedTypes.includes(type);
      const catMatch  = !checkedCats.length  || checkedCats.includes(cat);
      const kwMatch   = !keyword || title.includes(keyword) || company.includes(keyword);
      const locMatch  = !location || cardLoc.includes(location);

      const show = typeMatch && catMatch && kwMatch && locMatch;
      card.style.display = show ? '' : 'none';
      if (show) visible++;
    });

    const countEl = document.getElementById('jobs-visible-count');
    if (countEl) countEl.textContent = visible;
  }

  filterJobs(); // Run on load
}

/* ============================================================
   ANIMATED CHART BARS — Hero Panel
   ============================================================ */
function initChartBars() {
  const bars = document.querySelectorAll('.chart-bar[data-height]');
  if (!bars.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.height = entry.target.dataset.height;
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  bars.forEach(bar => {
    bar.style.height = '0px';
    observer.observe(bar);
  });
}

/* ============================================================
   SMOOTH LINKS — Anchor scrolling
   ============================================================ */
function initSmoothLinks() {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offset = 80;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });
}

/* ============================================================
   CONTACT FORM SUBMISSION
   ============================================================ */
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = contactForm.querySelector('button[type="submit"]');
    const orig = btn.innerHTML;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>Sending...';
    btn.disabled = true;
    setTimeout(() => {
      showToast('Message sent successfully! We\'ll be in touch shortly.');
      contactForm.reset();
      btn.innerHTML = orig;
      btn.disabled = false;
    }, 1800);
  });
}
