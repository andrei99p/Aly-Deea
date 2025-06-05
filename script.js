// Fade-in on scroll for sections
function fadeInOnScroll() {
  const elements = document.querySelectorAll('.hero, .feature-block, .benefit-card, .testimonial-card, .cta-section');
  const windowHeight = window.innerHeight;
  elements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < windowHeight - 60) {
      el.style.opacity = 1;
      el.style.animationPlayState = 'running';
    }
  });
}
window.addEventListener('scroll', fadeInOnScroll);
window.addEventListener('load', fadeInOnScroll);

// Mobile nav toggle (optional, if you add a hamburger menu)
// ... 