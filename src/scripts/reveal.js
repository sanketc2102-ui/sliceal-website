/**
 * Reveals every [data-reveal] element by adding animate-fade-in once it
 * enters the viewport, then stops observing it. IntersectionObserver's
 * initial callback fires for whatever is already in view when observe()
 * is called, so elements visible on load are revealed immediately rather
 * than waiting for a scroll event.
 *
 * ClientRouter swaps the document on navigation, so the previous
 * observer's targets are gone with it — disconnect it before building a
 * new one each time this runs.
 */
let observer;

export function initReveal() {
  observer?.disconnect();

  const targets = document.querySelectorAll("[data-reveal]");
  if (!targets.length) return;

  observer = new IntersectionObserver((entries, obs) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      entry.target.classList.add("animate-fade-in");
      obs.unobserve(entry.target);
    }
  });

  targets.forEach((target) => observer.observe(target));
}
