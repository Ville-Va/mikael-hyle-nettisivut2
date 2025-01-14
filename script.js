
// Scroll Reveal Animations
ScrollReveal().reveal('.hero h1', { delay: 200, distance: '50px', origin: 'bottom' });
ScrollReveal().reveal('.hero p', { delay: 400, distance: '50px', origin: 'bottom' });

ScrollReveal().reveal('.about h2', { delay: 200 });
ScrollReveal().reveal('.services .service-item', { interval: 200 });

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
  });
});

// Calendly Widget Initialization
document.addEventListener('DOMContentLoaded', () => {
  if (window.Calendly) {
    Calendly.initInlineWidget({
      url: 'https://calendly.com/mikael-fluentaleads/30min',
      parentElement: document.getElementById('calendly-inline-widget'),
      prefill: {},
      utm: {},
    });
  }
});

function scrollToDiscovery() {
  document.getElementById('discovery-call').scrollIntoView({ behavior: 'smooth' });
}
