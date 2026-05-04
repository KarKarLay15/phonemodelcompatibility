"use client";

import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Smartphone, Info, ChevronRight } from "lucide-react";
import Link from "next/link";
import { compatibilityData } from "@/data/models";
import { glassDescription, glassSearchText } from "@/data/compatibility-i18n";
import {
  QUICK_BRAND_CHIPS,
  brandMatchesQuickFilter,
  chipHaptic,
  mm,
  type QuickBrandKey,
} from "@/lib/kktech-mm";

const springIOS = {
  type: "spring" as const,
  stiffness: 380,
  damping: 24,
  mass: 0.78,
};

const springTap = {
  type: "spring" as const,
  stiffness: 520,
  damping: 28,
  mass: 0.65,
};

export default function CompatibilityApp() {
  const [query, setQuery] = useState("");
  const [quickBrand, setQuickBrand] = useState<QuickBrandKey | null>(null);

  const filteredData = useMemo(() => {
    let rows = quickBrand
      ? compatibilityData.filter((item) =>
          brandMatchesQuickFilter(item.brand, quickBrand),
        )
      : compatibilityData;
    const q = query.trim().toLowerCase();
    if (!q) return rows;
    return rows.filter(
      (item) =>
        item.models.some((m) => m.toLowerCase().includes(q)) ||
        item.brand.toLowerCase().includes(q) ||
        glassSearchText(item).toLowerCase().includes(q),
    );
  }, [query, quickBrand]);

  return (
    <div className="min-h-dvh bg-black p-6 font-sans text-white selection:bg-cyan-500/30">
      <div
        className="mx-auto max-w-2xl pt-8"
        style={{ paddingTop: "max(2rem, var(--safe-top))" }}
      >
        <div className="mb-6">
          <Link
            href="/"
            className="inline-flex items-center gap-1 text-xs font-medium leading-relaxed text-zinc-500 transition hover:text-cyan-400"
          >
            <ChevronRight className="size-4 rotate-180" aria-hidden />
            {mm.backTools}
          </Link>
        </div>

        <header className="mb-10 text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="mx-auto mb-6 flex size-20 items-center justify-center rounded-3xl bg-gradient-to-tr from-cyan-500 to-blue-600 shadow-[0_0_40px_rgba(6,182,212,0.3)]"
          >
            <Smartphone size={40} className="text-white" aria-hidden />
          </motion.div>
          <motion.h1
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="mb-3 text-3xl font-extrabold leading-relaxed tracking-tight md:text-4xl"
          >
            {mm.kktHeading}
          </motion.h1>
          <motion.p
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-base leading-relaxed text-zinc-400"
          >
            {mm.findSharedLine}
          </motion.p>
        </header>

        <div className="group relative mb-6">
          <div className="pointer-events-none absolute inset-y-0 left-5 flex items-center text-zinc-500 transition-colors group-focus-within:text-cyan-400">
            <Search size={22} aria-hidden />
          </div>
          <input
            type="search"
            autoComplete="off"
            placeholder={mm.searchPlaceholder}
            aria-label={mm.searchAria}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full rounded-3xl border border-white/10 bg-zinc-900/50 p-6 pl-14 pr-28 text-lg leading-relaxed backdrop-blur-xl transition-all placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-cyan-500/40"
          />
          <div className="pointer-events-none absolute inset-y-0 right-5 flex items-center">
            <div className="rounded-lg border border-white/10 bg-white/5 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-zinc-500">
              {mm.tagSearch}
            </div>
          </div>
        </div>

        <div className="mb-10 space-y-2.5">
          <p className="text-center text-[11px] font-medium uppercase tracking-[0.14em] text-zinc-500">
            {mm.quickBrandsTitle}
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {QUICK_BRAND_CHIPS.map(({ key, label }) => {
              const active = quickBrand === key;
              return (
                <motion.button
                  key={key}
                  type="button"
                  whileTap={{ scale: 0.95, transition: springTap }}
                  onClick={() => {
                    chipHaptic();
                    setQuickBrand((prev) => (prev === key ? null : key));
                  }}
                  className={`rounded-full border px-3.5 py-2 text-xs font-semibold tracking-tight transition-colors ${
                    active
                      ? "border-cyan-500/55 bg-cyan-500/15 text-cyan-300"
                      : "border-white/10 bg-white/5 text-zinc-400 hover:border-cyan-500/25 hover:text-zinc-200"
                  }`}
                >
                  {label}
                </motion.button>
              );
            })}
          </div>
        </div>

        <div className="space-y-5">
          <AnimatePresence mode="popLayout">
            {filteredData.length > 0 ? (
              filteredData.map((item, idx) => (
                <motion.article
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ ...springIOS, delay: idx * 0.028 }}
                  className="relative overflow-hidden rounded-[32px] border border-white/[0.08] bg-white/[0.04] p-6 shadow-[0_24px_64px_rgba(0,0,0,0.45)] md:p-8"
                  style={{
                    WebkitBackdropFilter: "blur(20px) saturate(165%)",
                    backdropFilter: "blur(20px) saturate(165%)",
                  }}
                >
                  <div className="mb-5 flex flex-wrap items-start justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <div className="size-2 shrink-0 rounded-full bg-cyan-500 shadow-[0_0_12px_rgba(34,211,238,0.5)]" />
                      <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">
                        {item.brand}
                      </span>
                    </div>
                    <span className="rounded-full border border-white/[0.08] bg-black/30 px-3 py-1.5 text-[11px] font-medium leading-relaxed text-zinc-400">
                      {mm.glassPrefix}: {glassDescription(item, "mm")}
                    </span>
                  </div>

                  <ul className="flex flex-wrap gap-3">
                    {item.models.map((model) => {
                      const hit =
                        query.trim() !== "" &&
                        model.toLowerCase().includes(query.trim().toLowerCase());
                      return (
                        <li key={model}>
                          <motion.button
                            type="button"
                            whileTap={{
                              scale: 0.95,
                              opacity: 0.88,
                              transition: springTap,
                            }}
                            onClick={() => chipHaptic()}
                            className={`flex items-center gap-2 rounded-[22px] px-4 py-2.5 text-sm font-medium leading-snug transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500/40 ${
                              hit
                                ? "bg-cyan-500 text-black"
                                : "border border-white/10 bg-white/[0.06] text-zinc-200"
                            }`}
                          >
                            <Smartphone
                              className={`size-3.5 shrink-0 ${
                                hit ? "text-black" : "text-cyan-500"
                              }`}
                              strokeWidth={2}
                              aria-hidden
                            />
                            {model}
                          </motion.button>
                        </li>
                      );
                    })}
                  </ul>
                </motion.article>
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="rounded-[32px] border border-dashed border-white/12 bg-white/[0.03] px-6 py-20 text-center"
                style={{
                  WebkitBackdropFilter: "blur(20px) saturate(165%)",
                  backdropFilter: "blur(20px) saturate(165%)",
                }}
              >
                <div className="mx-auto mb-4 flex w-fit rounded-full bg-zinc-900/60 p-4 ring-1 ring-white/10">
                  <Smartphone size={32} className="text-zinc-600" aria-hidden />
                </div>
                <p className="leading-relaxed text-zinc-500">{mm.emptyNoMatch}</p>
                {query.trim().length > 0 ? (
                  <p className="mt-3 text-xs leading-relaxed text-zinc-600">
                    {mm.emptyQueryHint}: «{query.trim()}»
                  </p>
                ) : null}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <footer
          className="mb-20 mt-12 text-center"
          style={{ paddingBottom: "max(2rem, var(--safe-bottom))" }}
        >
          <div className="inline-flex max-w-sm items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.05] p-4 text-left">
            <Info size={20} className="mt-0.5 shrink-0 text-cyan-500" aria-hidden />
            <div className="flex min-w-0 flex-col gap-2">
              <p className="text-[11px] leading-relaxed text-zinc-500">
                {mm.footerExplain}{" "}
                <strong className="font-semibold text-cyan-500/90">
                  {mm.footerVerified}
                </strong>
              </p>
              <p className="text-[10px] leading-relaxed text-zinc-600">
                {mm.footerDisclaimer}
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
