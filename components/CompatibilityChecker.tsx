"use client";

import React, { useMemo, useState } from "react";
import { Search, Info } from "lucide-react";
import {
  compatibilityData,
  type CompatibilityGroup,
} from "@/data/models";

export type { CompatibilityGroup };

const BRAND_FILTERS = ["All", "Apple", "Samsung", "Xiaomi", "Vivo", "Oppo", "Realme", "Redmi", "Poco"] as const;
type BrandFilter = (typeof BRAND_FILTERS)[number];

function pickPrimaryModel(models: string[], query: string): string {
  const q = query.trim().toLowerCase();
  if (!q) {
    return [...models].sort((a, b) => a.localeCompare(b))[0] ?? models[0] ?? "";
  }
  const exact = models.find((m) => m.toLowerCase() === q);
  if (exact) return exact;
  const hits = models.filter((m) => m.toLowerCase().includes(q));
  if (hits.length === 0) return models[0] ?? "";
  return [...hits].sort((a, b) => a.length - b.length || a.localeCompare(b))[0];
}

type Props = {
  brightMode?: boolean;
};

export function CompatibilityChecker({ brightMode = false }: Props) {
  const [query, setQuery] = useState("");
  const [brand, setBrand] = useState<BrandFilter>("All");

  const filteredData = useMemo(() => {
    const q = query.trim().toLowerCase();
    return compatibilityData.filter((item) => {
      if (brand !== "All" && item.brand !== brand) return false;
      if (!q) return true;
      return item.models.some((m) => m.toLowerCase().includes(q));
    });
  }, [query, brand]);

  const shell = brightMode
    ? {
        card: "border-zinc-200/80 bg-white/90 shadow-sm",
        inner: "border-zinc-200 bg-zinc-50/90",
        title: "text-zinc-900",
        sub: "text-zinc-600",
        input:
          "border-zinc-200 bg-white text-zinc-900 placeholder:text-zinc-400 focus:ring-blue-500/40",
        chip: "border-zinc-200 bg-zinc-100 text-zinc-800",
        chipActive: "bg-zinc-900 text-white border-zinc-900",
        hint: "text-zinc-600",
      }
    : {
        card: "border-white/10 bg-zinc-900/50",
        inner: "border-white/5 bg-white/5 hover:border-blue-500/30",
        title: "text-white",
        sub: "text-zinc-400",
        input: "border-white/10 bg-white/5 text-white placeholder:text-zinc-500 focus:ring-blue-500/50",
        chip: "bg-zinc-800 text-zinc-300",
        chipActive: "bg-blue-600 text-white",
        hint: "text-zinc-500",
      };

  return (
    <div
      className={`mt-6 rounded-3xl border p-6 backdrop-blur-xl transition-colors ${shell.card}`}
    >
      <div className="mb-4 flex items-center gap-3">
        <div className="rounded-lg bg-blue-500/20 p-2 text-blue-400">
          <Search size={20} aria-hidden />
        </div>
        <h2 className={`text-xl font-bold ${shell.title}`}>Model Compatibility</h2>
      </div>

      <label htmlFor="compat-search" className="sr-only">
        Search phone model
      </label>
      <input
        id="compat-search"
        type="search"
        autoComplete="off"
        placeholder='Search model… e.g. "iPhone 13"'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className={`mb-3 w-full rounded-xl border p-4 transition-all focus:outline-none focus:ring-2 ${shell.input}`}
      />

      <div className="mb-4 flex flex-wrap gap-2">
        {BRAND_FILTERS.map((b) => {
          const active = brand === b;
          return (
            <button
              key={b}
              type="button"
              onClick={() => setBrand(b)}
              className={`rounded-full border px-3 py-1.5 text-xs font-semibold transition ${
                active
                  ? `${shell.chipActive} border-transparent`
                  : `${shell.chip} hover:opacity-90`
              }`}
            >
              {b}
            </button>
          );
        })}
      </div>

      <div className="custom-scrollbar max-h-[320px] space-y-3 overflow-y-auto pr-1">
        {filteredData.length === 0 ? (
          <p className={`py-6 text-center text-sm ${shell.sub}`}>
            No groups match. Try another brand or shorter search.
          </p>
        ) : (
          filteredData.map((item) => {
            const primary = pickPrimaryModel(item.models, query);
            const others = item.models.filter((m) => m !== primary).sort((a, b) => a.localeCompare(b));
            const q = query.trim().toLowerCase();

            return (
              <div
                key={item.id}
                className={`rounded-2xl border p-4 transition-colors ${shell.inner}`}
              >
                <div className="mb-3 flex flex-wrap items-start justify-between gap-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-blue-400">
                    {item.brand}
                  </span>
                  <span
                    className={`rounded-md px-2 py-1 text-[10px] ${
                      brightMode ? "bg-zinc-200 text-zinc-700" : "bg-white/10 text-zinc-400"
                    }`}
                  >
                    {item.glassSize}
                  </span>
                </div>

                <p className={`mb-1 text-[10px] font-semibold uppercase tracking-wide ${shell.sub}`}>
                  Same tempered glass
                </p>
                <div
                  className={`mb-3 rounded-xl border px-3 py-2.5 text-base font-semibold ${
                    brightMode
                      ? "border-blue-200 bg-blue-50 text-blue-950"
                      : "border-blue-500/40 bg-blue-500/15 text-white"
                  }`}
                >
                  {primary}
                  {q && primary.toLowerCase().includes(q) ? (
                    <span className="ml-2 text-xs font-normal opacity-80">— matched</span>
                  ) : null}
                </div>

                {others.length > 0 ? (
                  <>
                    <p className={`mb-2 text-[10px] font-medium uppercase tracking-wide ${shell.sub}`}>
                      Also compatible
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {others.map((m) => {
                        const hit = q && m.toLowerCase().includes(q);
                        return (
                          <span
                            key={m}
                            className={`rounded-full px-3 py-1 text-sm ${
                              hit
                                ? brightMode
                                  ? "bg-blue-600 text-white"
                                  : "bg-blue-600 text-white"
                                : shell.chip
                            }`}
                          >
                            {m}
                          </span>
                        );
                      })}
                    </div>
                  </>
                ) : null}
              </div>
            );
          })
        )}
      </div>

      <div className={`mt-4 flex items-start gap-2 text-[11px] ${shell.hint}`}>
        <Info size={14} className="mt-0.5 shrink-0" aria-hidden />
        <p>
          Sample reference data only. Templates differ by OEM batch — always verify cutouts and curves
          before install.
        </p>
      </div>
    </div>
  );
}
