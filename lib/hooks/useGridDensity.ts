"use client";

import { useEffect, useState } from "react";

export type GridDensity = { cols: number; rows: number };

function computeDensity(width: number, height: number): GridDensity {
  const minDim = Math.min(width, height);
  const maxDim = Math.max(width, height);

  if (minDim >= 920 || maxDim >= 1100) {
    return { cols: 22, rows: 32 };
  }
  if (minDim >= 720 || maxDim >= 900) {
    return { cols: 18, rows: 28 };
  }
  if (minDim >= 560) {
    return { cols: 14, rows: 22 };
  }
  return { cols: 12, rows: 20 };
}

/**
 * Responsive grid resolution for phones vs tablets / large phones.
 */
export function useGridDensity(): GridDensity {
  const [density, setDensity] = useState<GridDensity>({ cols: 12, rows: 20 });

  useEffect(() => {
    const update = () => {
      setDensity(computeDensity(window.innerWidth, window.innerHeight));
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return density;
}
