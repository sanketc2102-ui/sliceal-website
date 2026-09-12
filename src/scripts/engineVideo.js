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

// The active point's highlight is a tablet/desktop rail treatment (md:/lg:),
// so these are the exact utilities from SlicealEngine.astro's ternary — keep
// both files in sync if that markup changes.
const ACTIVE_POINT_CLASSES = [
  "md:rounded-r-lg",
  "md:border-l-[3px]",
  "md:border-l-brand-purple",
  "md:bg-gray-200",
  "md:text-gray-900",
  "lg:rounded-r-lg",
  "lg:border-l-[3px]",
  "lg:border-l-brand-purple",
  "lg:bg-gray-200",
  "lg:text-gray-900",
];
const INACTIVE_POINT_CLASSES = [
  "md:border-l-0",
  "md:bg-transparent",
  "md:text-gray-500",
  "lg:border-l-0",
  "lg:bg-transparent",
  "lg:text-gray-500",
];

function highlightActivePoint(points, activeIndex) {
  points.forEach((point, i) => {
    point.classList.remove(...ACTIVE_POINT_CLASSES, ...INACTIVE_POINT_CLASSES);
    point.classList.add(...(i === activeIndex ? ACTIVE_POINT_CLASSES : INACTIVE_POINT_CLASSES));
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
