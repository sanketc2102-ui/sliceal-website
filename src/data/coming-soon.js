/**
 * Copy for the shared "Coming Soon" modal (ComingSoonModal.astro).
 *
 * A trigger opts in with `data-coming-soon="<key>"`; the modal shows the
 * entry for that key, falling back to `default` for any field (or key) that
 * isn't listed here. A single trigger can still override inline with
 * `data-cs-title` / `data-cs-body` / `data-cs-cta`.
 *
 * Keys currently wired: app-download, login, start-investing, social,
 * list-property, register, contact-sales, contact-security, apply-job,
 * save-job, blog-details, newsletter, contact-form.
 *
 * @type {Record<string, { title?: string, body?: string, cta?: string }>}
 */
export default {
  default: {
    title: "Coming Soon",
    body: "You’ve found something we’re still building. Thanks for the curiosity — check back at launch!",
    cta: "Got it",
  },
  // Figma 33894:1285
  "app-download": {
    title: "The app is on its way.",
    body: "iOS and Android land alongside our full launch. Worth the wait, we promise.",
    cta: "Got it",
  },
  // Figma 33894:1297
  newsletter: {
    title: "Thanks for the interest!",
    body: "Our mailing list switches on shortly — pop back soon and we’ll keep you posted on new properties.",
    cta: "Got it",
  },
  // Figma 33894:1309 ("[support email]" placeholder filled from ContactFormSection)
  "contact-form": {
    title: "We’d love to hear from you.",
    body: "This form isn’t live in preview yet — reach us directly at support@sliceal.io in the meantime.",
    cta: "Got it",
  },
  // Figma 33894:1249 — "Start Investing" CTAs opted in individually
  // (the generic start-investing key still uses the default copy).
  "investing-at-launch": {
    title: "Investing opens at launch.",
    body: "We’re completing our licensing first — because owning Dubai property should be done properly. You’ll be able to invest from AED 2,000 the day we go live.",
    cta: "Got it",
  },
  // Figma 33894:1235
  "blog-details": {
    title: "Not quite ready.",
    body: "This is a preview of Sliceal, so a few buttons are still waking up. The real thing lands soon.",
    cta: "Got it",
  },
  // Figma 33894:1273
  "list-property": {
    title: "Listings open soon.",
    body: "We’re not accepting properties just yet. Leave us a note via Contact Us and we’ll reach out the moment we’re live.",
    cta: "Got it",
  },
};
