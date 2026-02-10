export const NAVBAR_ICONS = [
  "search",
  "grid_view",
  "map",
  "dark_mode",
] as const;

export type NavbarIcon = (typeof NAVBAR_ICONS)[number];
