document.addEventListener('DOMContentLoaded', () => {
  // ------------------------------
  // Fade-in/-out Containers on scroll using IntersectionObserver
  // ------------------------------

  const containers = document.querySelectorAll('.main .container');

  // Set initial opacity to 0 for containers that should fade in later
  containers.forEach(el => {
    el.style.opacity = '0';
    el.style.transition = 'opacity 0.5s ease-out';
  });

  const observerOptions = {
    root: null,               // viewport
    rootMargin: '0px 0px -100px 0px', // trigger a bit before it fully enters
    threshold: 0              // any intersection
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
      } else {
        entry.target.style.opacity = '0';
      }
    });
  }, observerOptions);

  containers.forEach(el => observer.observe(el));

  // ------------------------------
  // Header fade-out on scroll (was .fade_scroll in jQuery version)
  // ------------------------------

  const fadeScrollEls = document.querySelectorAll('.fade_scroll');

  function handleScroll() {
    const scrollY = window.scrollY;
    fadeScrollEls.forEach(el => {
      el.style.opacity = `${Math.max(0, 1 - scrollY / 850)}`;
    });
  }

  // use passive listener for performance
  window.addEventListener('scroll', handleScroll, { passive: true });
  // call once on load
  handleScroll();

  // ------------------------------
  // Add loading="lazy" to images without the attribute for better performance
  // ------------------------------
  document.querySelectorAll('img:not([loading])').forEach(img => {
    img.setAttribute('loading', 'lazy');
  });
});
