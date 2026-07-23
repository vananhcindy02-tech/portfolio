/**
 * Top-level configuration for the dossier. These mirror the original
 * document's authoring props (accent colour, availability, grid backdrop).
 */
export const dossierConfig = {
  /** Accent colour used across gradients, glows and highlights. */
  accent: "#5b9dff",
  /** Toggles the hero status line between "available" and "fully booked". */
  available: true,
  /** Renders the faint dot-grid backdrop behind the page. */
  showGrid: true,
} as const;

export const statusLabel: string = dossierConfig.available
  ? "Available now · taking 1–2 engagements"
  : "Currently fully booked";
