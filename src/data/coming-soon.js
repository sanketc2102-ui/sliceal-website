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
};
