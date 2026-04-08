/* =========================================================
   Sharada Engineering Works – Main JavaScript
   ========================================================= */

(function () {
  'use strict';

  // Extra offset (px) added to scrollY when determining the active section,
  // accounting for the sticky nav height plus a small visual buffer.
  const NAV_SCROLL_OFFSET = 90;

  // Fraction of an element that must be visible before its entrance
  // animation triggers. 0.12 feels natural – the card just peeks in.
  const ANIMATION_TRIGGER_THRESHOLD = 0.12;

  // ── Sticky nav / scrolled class ──────────────────────────
  const header    = document.getElementById('site-header');
  const backToTop = document.getElementById('back-to-top');

  function onScroll() {
    if (window.scrollY > 60) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    if (window.scrollY > 400) {
      backToTop.classList.add('visible');
    } else {
      backToTop.classList.remove('visible');
    }

    highlightActiveNav();
  }

  window.addEventListener('scroll', onScroll, { passive: true });

  // ── Back to top ──────────────────────────────────────────
  backToTop.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // ── Mobile navigation toggle ─────────────────────────────
  const navToggle = document.getElementById('nav-toggle');
  const mainNav   = document.getElementById('main-nav');

  // Create overlay element
  const overlay = document.createElement('div');
  overlay.className = 'nav-overlay';
  document.body.appendChild(overlay);

  function openNav() {
    mainNav.classList.add('open');
    navToggle.classList.add('open');
    navToggle.setAttribute('aria-expanded', 'true');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeNav() {
    mainNav.classList.remove('open');
    navToggle.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  navToggle.addEventListener('click', function () {
    if (mainNav.classList.contains('open')) {
      closeNav();
    } else {
      openNav();
    }
  });

  overlay.addEventListener('click', closeNav);

  // Close nav when a link is clicked
  mainNav.querySelectorAll('.nav-link').forEach(function (link) {
    link.addEventListener('click', closeNav);
  });

  // Close nav on ESC key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && mainNav.classList.contains('open')) {
      closeNav();
    }
  });

  // ── Active nav highlight on scroll ───────────────────────
  const sections = document.querySelectorAll('main section[id]');
  const navLinks  = document.querySelectorAll('.nav-link');

  function highlightActiveNav() {
    const scrollPos = window.scrollY + NAV_SCROLL_OFFSET;
    let   active    = null;

    sections.forEach(function (section) {
      if (section.offsetTop <= scrollPos) {
        active = section.getAttribute('id');
      }
    });

    navLinks.forEach(function (link) {
      link.classList.remove('active');
      if (active && link.getAttribute('href') === '#' + active) {
        link.classList.add('active');
      }
    });
  }

  // ── Footer year ──────────────────────────────────────────
  const yearEl = document.getElementById('footer-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // ── Animate cards on scroll (Intersection Observer) ──────
  const animatedItems = document.querySelectorAll(
    '.service-card, .machine-card, .gallery-item, .about-grid, .contact-item'
  );

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var delay = entry.target.dataset.delay || 0;
          entry.target.style.animationDelay = delay + 'ms';
          entry.target.style.animation = 'fadeUp 0.6s ease both';
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: ANIMATION_TRIGGER_THRESHOLD });

    animatedItems.forEach(function (el, index) {
      el.style.opacity = '0';
      // Stagger sibling cards within the same parent container
      var siblings = el.parentElement ? el.parentElement.children : [];
      var siblingIndex = Array.prototype.indexOf.call(siblings, el);
      if (siblingIndex > 0) {
        el.dataset.delay = siblingIndex * 80;
      }
      observer.observe(el);
    });
  }

  // Run once on load
  onScroll();
  highlightActiveNav();

  // ── Remove shimmer from image containers once images load ──
  document.querySelectorAll(
    '.hero-image-frame, .about-image-wrap, .gallery-grid > img'
  ).forEach(function (container) {
    var img = container.tagName === 'IMG' ? container : container.querySelector('img');
    if (!img) return;
    function markLoaded() { container.classList.add('img-loaded'); }
    if (img.complete && img.naturalWidth) {
      markLoaded();
    } else {
      img.addEventListener('load', markLoaded);
      img.addEventListener('error', markLoaded);
    }
  });
}());
