// Header scroll state
  var hdr = document.getElementById('hdr');
  function onScroll(){
    if (window.scrollY > 40) hdr.classList.add('scrolled');
    else hdr.classList.remove('scrolled');
  }
  window.addEventListener('scroll', onScroll, {passive:true});
  onScroll();

  // Mobile menu
  var burger = document.getElementById('burger');
  var navlinks = document.getElementById('navlinks');
  burger.addEventListener('click', function(){
    var open = navlinks.classList.toggle('open');
    burger.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  navlinks.querySelectorAll('a').forEach(function(a){
    a.addEventListener('click', function(){
      navlinks.classList.remove('open');
      burger.classList.remove('open');
      burger.setAttribute('aria-expanded','false');
    });
  });

  // Highlight today's hours
  var today = new Date().getDay();
  document.querySelectorAll('#hours li').forEach(function(li){
    if (Number(li.getAttribute('data-day')) === today) li.classList.add('today');
  });

  // Year
  document.getElementById('yr').textContent = new Date().getFullYear();

  // Scroll reveal
  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if (e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, {threshold:0.12, rootMargin:'0px 0px -40px 0px'});
  document.querySelectorAll('.reveal').forEach(function(el){ io.observe(el); });
