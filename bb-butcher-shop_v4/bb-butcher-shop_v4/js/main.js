/* ==========================================================================
   BB Butcher Shop — bbbutcher.com
   Language toggle, mobile drawer, sticky header, opening hours, reveal
   ========================================================================== */
(function () {
  'use strict';

  var STORAGE_KEY = 'bb-lang';
  var DEFAULT_LANG = 'en';

  /* ---------------- language ---------------- */
  function applyLang(lang) {
    if (lang !== 'en' && lang !== 'mn') lang = DEFAULT_LANG;

    document.documentElement.lang = lang === 'mn' ? 'mn' : 'en';

    var nodes = document.querySelectorAll('[data-en][data-mn]');
    for (var i = 0; i < nodes.length; i++) {
      var el = nodes[i];
      var text = el.getAttribute('data-' + lang);
      if (text !== null) el.innerHTML = text;
    }

    var buttons = document.querySelectorAll('.lang button[data-lang]');
    for (var j = 0; j < buttons.length; j++) {
      var b = buttons[j];
      b.setAttribute('aria-pressed', b.getAttribute('data-lang') === lang ? 'true' : 'false');
    }

    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
  }

  function initLang() {
    var stored = null;
    try { stored = localStorage.getItem(STORAGE_KEY); } catch (e) {}
    applyLang(stored || DEFAULT_LANG);

    var buttons = document.querySelectorAll('.lang button[data-lang]');
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener('click', function () {
        applyLang(this.getAttribute('data-lang'));
      });
    }
  }

  /* ---------------- mobile drawer ---------------- */
  function initDrawer() {
    var burger = document.getElementById('burger');
    var drawer = document.getElementById('drawer');
    var closeBtn = document.getElementById('drawerClose');
    if (!burger || !drawer) return;

    function open() {
      drawer.classList.add('is-open');
      drawer.setAttribute('aria-hidden', 'false');
      burger.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
    }
    function close() {
      drawer.classList.remove('is-open');
      drawer.setAttribute('aria-hidden', 'true');
      burger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }

    burger.addEventListener('click', open);
    if (closeBtn) closeBtn.addEventListener('click', close);

    var links = drawer.querySelectorAll('a');
    for (var i = 0; i < links.length; i++) links[i].addEventListener('click', close);

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && drawer.classList.contains('is-open')) close();
    });
  }

  /* ---------------- sticky header shadow ---------------- */
  function initHeader() {
    var header = document.getElementById('siteHeader');
    if (!header) return;
    function onScroll() {
      if (window.scrollY > 8) header.classList.add('is-stuck');
      else header.classList.remove('is-stuck');
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ---------------- opening hours: highlight today ---------------- */
  function initHours() {
    var list = document.getElementById('hours');
    if (!list) return;
    var today = new Date().getDay(); // 0 = Sunday
    var items = list.querySelectorAll('li[data-day]');
    for (var i = 0; i < items.length; i++) {
      if (parseInt(items[i].getAttribute('data-day'), 10) === today) {
        items[i].classList.add('today');
      }
    }
  }

  /* ---------------- scroll reveal ---------------- */
  function initReveal() {
    var items = document.querySelectorAll('.reveal');
    if (!items.length) return;

    if (!('IntersectionObserver' in window)) {
      for (var i = 0; i < items.length; i++) items[i].classList.add('is-in');
      return;
    }

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in');
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });

    for (var j = 0; j < items.length; j++) io.observe(items[j]);
  }

  /* ---------------- year ---------------- */
  function initYear() {
    var y = document.getElementById('year');
    if (y) y.textContent = String(new Date().getFullYear());
  }

  function init() {
    initLang();
    initDrawer();
    initHeader();
    initHours();
    initReveal();
    initYear();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
