/** Shared shape for KKTech tempered-glass compatibility rows (used across catalog modules). */

export type CompatibilityGroup = {
  id: number;
  brand: string;
  models: string[];
  /** English (primary) retailer / technical note */
  glassSize: string;
  /** Myanmar — omit to reuse English until translated */
  glassSizeMm?: string;
};
