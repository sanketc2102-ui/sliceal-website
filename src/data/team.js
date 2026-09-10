// Hotspots on the Team group photo.
//
// Desktop: Figma places each 32x32 dot with absolute coordinates on the
// 1512x669 "Image" frame (node 29879:55101), but the photo bitmap inside it
// is 1512x748.72 and starts 66.26px ABOVE that frame (it bleeds up behind the
// headline and is faded out there). `x`/`y` are the dot's CENTRE relative to
// the BITMAP, so they stay locked to the same face at any viewport width and
// whatever the frame crops:
//     x = (figmaX + 16) / 1512 * 100
//     y = (figmaY + 16 + 66.26) / 748.72 * 100
//
// Mobile: Figma crops the same photo to a different aspect (408x217, node
// 30576:134046) for the card layout, so the faces land at different percentages
// than desktop — `mobileX`/`mobileY` are each dot's centre relative to that
// cropped frame, matched to the desktop set by left-to-right rank order.
//
// `color` is the dot's fill (two concentric circles at 32% / 80% opacity).
// It is per-person data, not a theme colour, so it lives here rather than in
// tokens.css — the component reads it through a `--point` custom property.
//
// TODO: Figma only fills in Elena. The nine entries without a name render as
// decorative dots (no popover). Add `name`, `role` and `bio` to each one as
// the copy lands and it becomes interactive automatically.

export const teamMembers = [
  {
    id: "elena-moreau",
    x: 38.23,
    y: 59.07,
    mobileX: 35.54,
    mobileY: 59.45,
    color: "#0DC051",
    name: "Elena Moreau",
    role: "CEO & Founder",
    bio: "Elena shapes the visual language behind everything we do.",
  },
  { id: "point-2", x: 64.95, y: 56.4, mobileX: 65.44, mobileY: 62.21, color: "#FF38BD" },
  { id: "point-3", x: 57.61, y: 39.44, mobileX: 57.84, mobileY: 41.47, color: "#4EBED4" },
  { id: "point-4", x: 76.26, y: 40.51, mobileX: 75.98, mobileY: 39.17, color: "#F69B69" },
  { id: "point-5", x: 84.13, y: 52.93, mobileX: 83.82, mobileY: 58.99, color: "#C0F589" },
  { id: "point-6", x: 94.91, y: 40.51, mobileX: 96.57, mobileY: 45.62, color: "#7F86E7" },
  { id: "point-7", x: 48.94, y: 49.99, mobileX: 48.53, mobileY: 49.77, color: "#B83135" },
  { id: "point-8", x: 28.64, y: 43.71, mobileX: 28.19, mobileY: 41.47, color: "#D278FF" },
  { id: "point-9", x: 16.2, y: 54.26, mobileX: 17.65, mobileY: 53.92, color: "#5D71F0" },
  { id: "point-10", x: 4.37, y: 46.92, mobileX: 4.41, mobileY: 45.62, color: "#4EA791" },
];
