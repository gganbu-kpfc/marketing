document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.site-header');

  if (header) {
    const updateHeader = () => {
      if (window.scrollY > 8) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    };

    updateHeader();
    window.addEventListener('scroll', updateHeader, { passive: true });
  }
});
