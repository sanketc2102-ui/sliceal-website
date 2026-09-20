/**
 * Plays the SlicealEngine product video (~11s) while its panel is in the
 * viewport and pauses it once scrolled away, without resetting playback
 * position — restarting on every scroll-past would be jarring.
 *
 * ClientRouter swaps the document on navigation, so the previous observer's
 * target is gone with it — disconnect it before building a new one each time
 * this runs.
 */
let observer;

// Both the metric row (under the video) and the left-hand point list follow
// the video's progress: the clip is split into as many equal segments as
// there are items (by its actual duration, not a hardcoded guess) so each
// item gets an even turn and the active one visibly rotates every loop.
function activeSegmentIndex(currentTime, duration, segmentCount) {
  if (!Number.isFinite(duration) || duration === 0) return 0;
  const segment = duration / segmentCount;
  return Math.min(segmentCount - 1, Math.floor(currentTime / segment));
}

// The active point's highlight is a solid card fill on mobile and a rail
// treatment on tablet/desktop (md:/lg:) — these are the exact utilities from
// SlicealEngine.astro's ternaries — keep both files in sync if that markup
// changes.
const ACTIVE_POINT_CLASSES = [
  "border-brand-400",
  "bg-brand-600",
  "md:rounded-r-lg",
  "md:border-l-[3px]",
  "md:border-l-brand-purple",
  "md:bg-[var(--color-surface-selected)]",
  "md:text-ink",
  "lg:rounded-r-lg",
  "lg:border-l-[3px]",
  "lg:border-l-brand-purple",
  "lg:bg-[var(--color-surface-selected)]",
  "lg:text-ink",
];
const INACTIVE_POINT_CLASSES = [
  "border-line",
  "bg-surface",
  "md:border-l-0",
  "md:bg-transparent",
  "md:text-ink-muted",
  "lg:border-l-0",
  "lg:bg-transparent",
  "lg:text-ink-muted",
];
const ACTIVE_TITLE_CLASSES = ["text-ink-fixed"];
const INACTIVE_TITLE_CLASSES = ["text-ink"];
const ACTIVE_BODY_CLASSES = ["text-ink-fixed"];
const INACTIVE_BODY_CLASSES = ["text-ink-muted"];

function highlightActivePoint(points, activeIndex) {
  points.forEach((point, i) => {
    const isActive = i === activeIndex;

    point.classList.remove(...ACTIVE_POINT_CLASSES, ...INACTIVE_POINT_CLASSES);
    point.classList.add(...(isActive ? ACTIVE_POINT_CLASSES : INACTIVE_POINT_CLASSES));

    const title = point.querySelector("[data-point-title]");
    title?.classList.remove(...ACTIVE_TITLE_CLASSES, ...INACTIVE_TITLE_CLASSES);
    title?.classList.add(...(isActive ? ACTIVE_TITLE_CLASSES : INACTIVE_TITLE_CLASSES));

    const body = point.querySelector("[data-point-body]");
    body?.classList.remove(...ACTIVE_BODY_CLASSES, ...INACTIVE_BODY_CLASSES);
    body?.classList.add(...(isActive ? ACTIVE_BODY_CLASSES : INACTIVE_BODY_CLASSES));
  });
}

export function initEngineVideo() {
  observer?.disconnect();

  const video = document.querySelector("[data-video-autoplay]");
  if (!(video instanceof HTMLVideoElement)) return;

  const metrics = document.querySelectorAll("[data-metric]");
  const points = document.querySelectorAll("[data-point]");

  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      }
    },
    // rootMargin starts playback a bit before the panel is on screen so the
    // video already has a frame rendered by the time it's visible, instead
    // of showing the poster for a beat.
    { threshold: 0.1, rootMargin: "20% 0px" },
  );

  observer.observe(video);

  if (metrics.length) {
    const highlightActiveMetric = () => {
      const activeIndex = activeSegmentIndex(video.currentTime, video.duration, metrics.length);
      metrics.forEach((metric, i) => {
        metric.classList.toggle("opacity-100", i === activeIndex);
        metric.classList.toggle("opacity-40", i !== activeIndex);
      });
    };

    highlightActiveMetric();
    video.addEventListener("timeupdate", highlightActiveMetric);
  }

  if (points.length) {
    const highlightActivePointFromVideo = () => {
      const activeIndex = activeSegmentIndex(video.currentTime, video.duration, points.length);
      highlightActivePoint(points, activeIndex);
    };

    highlightActivePointFromVideo();
    video.addEventListener("timeupdate", highlightActivePointFromVideo);
  }
}
