const revealItems = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.14 },
  );

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add('is-visible'));
}

const toast = document.querySelector('.toast');
let toastTimer;

document.querySelectorAll('.review-track').forEach((track) => {
  const originalCards = Array.from(track.children);

  originalCards.forEach((card) => {
    const clone = card.cloneNode(true);
    clone.setAttribute('aria-hidden', 'true');
    track.appendChild(clone);
  });

  track.classList.add('is-loop-ready');
});

document.querySelectorAll('.js-store').forEach((button) => {
  button.addEventListener('click', () => {
    toast.classList.add('is-visible');
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => toast.classList.remove('is-visible'), 2800);
  });
});
