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

// Metric highlight follows the video's progress: the clip is split into 3
// equal thirds (by its actual duration, not a hardcoded guess) so each
// metric gets an even turn and the highlight visibly rotates every loop.
function activeMetricIndex(currentTime, duration) {
  if (!Number.isFinite(duration) || duration === 0) return 0;
  const segment = duration / 3;
  return Math.min(2, Math.floor(currentTime / segment));
}

export function initEngineVideo() {
  observer?.disconnect();

  const video = document.querySelector("[data-video-autoplay]");
  if (!(video instanceof HTMLVideoElement)) return;

  const metrics = document.querySelectorAll("[data-metric]");

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
      const activeIndex = activeMetricIndex(video.currentTime, video.duration);
      metrics.forEach((metric, i) => {
        metric.classList.toggle("opacity-100", i === activeIndex);
        metric.classList.toggle("opacity-40", i !== activeIndex);
      });
    };

    highlightActiveMetric();
    video.addEventListener("timeupdate", highlightActiveMetric);
  }
}
