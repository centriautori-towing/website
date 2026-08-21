(function () {
  'use strict';

  /* ---------- Footer year ---------- */
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Mobile nav ---------- */
  var toggle = document.getElementById('nav-toggle');
  var nav = document.getElementById('main-nav');
  var scrim = document.getElementById('nav-scrim');

  function closeNav() {
    nav.classList.remove('is-open');
    scrim.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
  }
  function openNav() {
    nav.classList.add('is-open');
    scrim.classList.add('is-open');
    toggle.setAttribute('aria-expanded', 'true');
  }

  if (toggle && nav && scrim) {
    toggle.addEventListener('click', function () {
      var isOpen = nav.classList.contains('is-open');
      if (isOpen) { closeNav(); } else { openNav(); }
    });
    scrim.addEventListener('click', closeNav);
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', closeNav);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeNav();
    });
  }

  /* ---------- Lightbox for fleet gallery ---------- */
  var lightbox = document.getElementById('lightbox');
  var lightboxImg = document.getElementById('lightbox-img');
  var lightboxClose = document.getElementById('lightbox-close');
  var galleryItems = document.querySelectorAll('.gallery-item[data-full]');
  var lastFocused = null;

  function openLightbox(src, caption) {
    lastFocused = document.activeElement;
    lightboxImg.src = src;
    lightboxImg.alt = caption || '';
    lightbox.classList.add('is-open');
    document.body.style.overflow = 'hidden';
    lightboxClose.focus();
  }
  function closeLightbox() {
    lightbox.classList.remove('is-open');
    lightboxImg.removeAttribute('src');
    document.body.style.overflow = '';
    if (lastFocused) lastFocused.focus();
  }

  galleryItems.forEach(function (btn) {
    btn.addEventListener('click', function () {
      openLightbox(btn.getAttribute('data-full'), btn.getAttribute('data-caption'));
    });
  });
  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightbox) {
    lightbox.addEventListener('click', function (e) {
      if (e.target === lightbox) closeLightbox();
    });
  }
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && lightbox.classList.contains('is-open')) closeLightbox();
  });

  /* ---------- Callback form: friendly confirmation before mailto opens ---------- */
  var form = document.getElementById('callback-form');
  var success = document.getElementById('form-success');
  if (form && success) {
    form.addEventListener('submit', function () {
      success.classList.add('is-visible');
    });
  }

  /* ---------- Sticky header shadow on scroll (subtle, cheap) ---------- */
  var header = document.querySelector('.site-header');
  var lastScrollShadow = false;
  function onScroll() {
    var shouldShadow = window.scrollY > 8;
    if (shouldShadow !== lastScrollShadow) {
      header.style.boxShadow = shouldShadow ? '0 2px 12px rgba(10,22,56,0.08)' : 'none';
      lastScrollShadow = shouldShadow;
    }
  }
  if (header) {
    window.addEventListener('scroll', onScroll, { passive: true });
  }
})();
