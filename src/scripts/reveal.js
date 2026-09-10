/**
 * Reveals every [data-reveal] element by adding is-revealed once it enters
 * the viewport, then stops observing it. IntersectionObserver's initial
 * callback fires for whatever is already in view when observe() is called,
 * so elements visible on load are revealed immediately rather than waiting
 * for a scroll event. threshold: 0.15 plus a negative bottom rootMargin
 * waits for a section to sit meaningfully inside the viewport (not just
 * clip its bottom edge) before firing, so the fade/scale/blur transition in
 * global.css reads as deliberate rather than premature.
 *
 * Elements that cross the threshold in the same callback batch (a fast
 * flick-scroll, or several short sections visible at once on a tall
 * desktop viewport) get a small incremental transition-delay so they
 * cascade in one after another instead of popping together — skipped for
 * any element that already opts into a manual data-reveal-delay.
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

  observer = new IntersectionObserver(
    (entries, obs) => {
      let batchIndex = 0;
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const el = entry.target;
        if (!el.hasAttribute("data-reveal-delay")) {
          el.style.transitionDelay = `${Math.min(batchIndex, 4) * 140}ms`;
        }
        batchIndex++;
        el.classList.add("is-revealed");
        obs.unobserve(el);
      }
    },
    { threshold: 0.15, rootMargin: "0px 0px -10% 0px" },
  );

  targets.forEach((target) => observer.observe(target));
}
