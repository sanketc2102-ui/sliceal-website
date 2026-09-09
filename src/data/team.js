// Hotspots on the Team group photo (Figma node 29879:55101, "Team" artboard).
//
// Figma places each 32x32 dot with absolute coordinates on the 1512x669 "Image"
// frame, but the photo bitmap inside it is 1512x748.72 and starts 66.26px ABOVE
// that frame (it bleeds up behind the headline and is faded out there). Hotspots
// are stored as the dot's CENTRE relative to the BITMAP, so they stay locked to
// the same face at any viewport width and whatever the frame crops:
//     x = (figmaX + 16) / 1512 * 100
//     y = (figmaY + 16 + 66.26) / 748.72 * 100
//
// `color` is the dot's fill (two concentric circles at 32% / 80% opacity).
// It is per-person data, not a theme colour, so it lives here rather than in
// tokens.css — the component reads it through a `--point` custom property.
//
// TODO: Figma only fills in Elena. The nine entries without a name render as
// decorative dots and are left out of the mobile list. Add `name`, `role` and
// `bio` to each one as the copy lands and it becomes interactive automatically.

export const teamMembers = [
  {
    id: "elena-moreau",
    x: 38.23,
    y: 59.07,
    color: "#0DC051",
    name: "Elena Moreau",
    role: "CEO & Founder",
    bio: "Elena shapes the visual language behind everything we do.",
  },
  { id: "point-2", x: 64.95, y: 56.4, color: "#FF38BD" },
  { id: "point-3", x: 57.61, y: 39.44, color: "#4EBED4" },
  { id: "point-4", x: 76.26, y: 40.51, color: "#F69B69" },
  { id: "point-5", x: 84.13, y: 52.93, color: "#C0F589" },
  { id: "point-6", x: 94.91, y: 40.51, color: "#7F86E7" },
  { id: "point-7", x: 48.94, y: 49.99, color: "#B83135" },
  { id: "point-8", x: 28.64, y: 43.71, color: "#D278FF" },
  { id: "point-9", x: 16.2, y: 54.26, color: "#5D71F0" },
  { id: "point-10", x: 4.37, y: 46.92, color: "#4EA791" },
];
