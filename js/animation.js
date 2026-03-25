document.addEventListener('DOMContentLoaded', () => {
  const revealItems = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');

  if (!revealItems.length) return;

  // IntersectionObserver 지원 안 하면 전부 그냥 보여주기
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
    // 이미 active 붙어 있으면 패스
    if (item.classList.contains('active')) return;
    observer.observe(item);
  });
});
