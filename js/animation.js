document.addEventListener('DOMContentLoaded', () => {
  const revealItems = document.querySelectorAll(
    '.reveal-up, .reveal-left, .reveal-right, .fade-in, .zoom-in'
  );

  if (!revealItems.length) return;

  if (!('IntersectionObserver' in window)) {
    revealItems.forEach(item => item.classList.add('active'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  revealItems.forEach(item => {
    if (!item.classList.contains('active')) {
      observer.observe(item);
    }
  });
});
