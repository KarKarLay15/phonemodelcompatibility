import type { CompatibilityGroup } from "./compatibility-types";

export type GlassPageLang = "mm" | "en";

/** Localized tempered-glass note — falls back to English when Myanmar missing */
export function glassDescription(
  group: CompatibilityGroup,
  lang: GlassPageLang,
): string {
  if (lang === "mm" && group.glassSizeMm) return group.glassSizeMm;
  return group.glassSize;
}

/** Case-fold search corpus for glass lines (EN + MM when present) */
export function glassSearchText(group: CompatibilityGroup): string {
  const mm = group.glassSizeMm ?? "";
  return `${group.glassSize} ${mm}`;
}
