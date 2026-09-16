let observer;
let prefersReducedMotion;

const DURATION_MS = 1600;

function easeOutCubic(t) {
  return 1 - Math.pow(1 - t, 3);
}

function formatNumber(value, decimals, useGrouping) {
  const fixed = value.toFixed(decimals);
  if (!useGrouping) return fixed;
  const [intPart, decPart] = fixed.split(".");
  const grouped = Number(intPart).toLocaleString("en-US");
  return decPart ? `${grouped}.${decPart}` : grouped;
}

function animateCount(el) {
  const text = el.textContent;
  const match = text.match(/[\d,]*\d(\.\d+)?/);
  if (!match) return;

  const raw = match[0];
  const target = parseFloat(raw.replace(/,/g, ""));
  if (Number.isNaN(target)) return;

  const decimals = raw.includes(".") ? raw.split(".")[1].length : 0;
  const useGrouping = raw.includes(",");
  const before = text.slice(0, match.index);
  const after = text.slice(match.index + raw.length);

  const fromValue = parseFloat(el.dataset.countFrom);
  const from = Number.isNaN(fromValue) ? 0 : fromValue;

  if (prefersReducedMotion) {
    el.textContent = `${before}${formatNumber(target, decimals, useGrouping)}${after}`;
    return;
  }

  const startTime = performance.now();

  function tick(now) {
    const progress = Math.min((now - startTime) / DURATION_MS, 1);
    const current = from + (target - from) * easeOutCubic(progress);
    el.textContent = `${before}${formatNumber(current, decimals, useGrouping)}${after}`;
    if (progress < 1) requestAnimationFrame(tick);
  }

  requestAnimationFrame(tick);
}

export function initCountUp() {
  observer?.disconnect();
  prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const targets = document.querySelectorAll("[data-count]");
  if (!targets.length) return;

  observer = new IntersectionObserver(
    (entries, obs) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const el = entry.target;
        if (el.children.length === 0) animateCount(el);
        obs.unobserve(el);
      }
    },
    { threshold: 0.4 },
  );

  targets.forEach((target) => observer.observe(target));
}
