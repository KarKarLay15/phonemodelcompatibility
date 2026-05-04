"use client";

import { compatibilityData } from "@/data/models";
import {
  QUICK_BRAND_CHIPS,
  brandMatchesQuickFilter,
  chipHaptic,
  pageStrings,
  type PageLang,
  type QuickBrandKey,
} from "@/lib/kktech-mm";
import { AnimatePresence, motion, useAnimationControls } from "framer-motion";
import { ChevronUp, Info, Languages, Search, Smartphone } from "lucide-react";
import React, {
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";

function escapeRegExp(s: string) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function pullHaptic() {
  if (typeof navigator !== "undefined" && navigator.vibrate) {
    navigator.vibrate(14);
  }
}

function HighlightMatch({ text, query }: { text: string; query: string }) {
  const q = query.trim();
  if (!q) return <>{text}</>;
  const parts = text.split(new RegExp(`(${escapeRegExp(q)})`, "gi"));
  return (
    <>
      {parts.map((part, i) =>
        part.toLowerCase() === q.toLowerCase() ? (
          <mark
            key={`${text}-${i}`}
            className="rounded-md bg-cyan-400/40 px-0.5 text-white [box-decoration-break:clone]"
          >
            {part}
          </mark>
        ) : (
          <span key={`${text}-${i}`}>{part}</span>
        ),
      )}
    </>
  );
}

/** iOS-like list physics — slightly under-damped for a lively bounce */
const springIOS = {
  type: "spring" as const,
  stiffness: 380,
  damping: 21,
  mass: 0.78,
};

const langFade = {
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
  transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] as const },
};

const springTap = {
  type: "spring" as const,
  stiffness: 540,
  damping: 29,
  mass: 0.65,
};

export default function Page() {
  const [lang, setLang] = useState<PageLang>("mm");
  const [query, setQuery] = useState("");
  const [quickBrand, setQuickBrand] = useState<QuickBrandKey | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const [mainPaddingTop, setMainPaddingTop] = useState(220);
  const listSpringControls = useAnimationControls();
  const skipQueryListSpringRef = useRef(true);
  const pullTouchStartY = useRef<number | null>(null);
  const pullPeakDy = useRef(0);

  const t = useMemo(() => pageStrings(lang), [lang]);

  const filtered = useMemo(() => {
    let rows = quickBrand
      ? compatibilityData.filter((g) =>
          brandMatchesQuickFilter(g.brand, quickBrand),
        )
      : compatibilityData;
    const q = query.trim().toLowerCase();
    if (!q) return rows;
    return rows.filter(
      (g) =>
        g.models.some((m) => m.toLowerCase().includes(q)) ||
        g.brand.toLowerCase().includes(q) ||
        g.glassSize.toLowerCase().includes(q),
    );
  }, [query, quickBrand]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useLayoutEffect(() => {
    const el = headerRef.current;
    if (!el || typeof ResizeObserver === "undefined") {
      return;
    }
    const update = () => setMainPaddingTop(el.offsetHeight + 12);
    const ro = new ResizeObserver(update);
    ro.observe(el);
    update();
    return () => ro.disconnect();
  }, [lang]);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      if (skipQueryListSpringRef.current) {
        skipQueryListSpringRef.current = false;
        return;
      }
      void (async () => {
        await listSpringControls.start({
          y: 7,
          transition: springTap,
        });
        await listSpringControls.start({
          y: 0,
          transition: springIOS,
        });
      })();
    }, 110);
    return () => window.clearTimeout(timer);
  }, [query, listSpringControls]);

  return (
    <div
      className="min-h-dvh bg-black pb-[max(7rem,var(--safe-bottom))] font-sans tracking-tight text-white selection:bg-cyan-500/35 md:pb-[max(2.75rem,var(--safe-bottom))]"
    >
      <div
        className="pointer-events-none fixed inset-0 -z-10 opacity-35"
        aria-hidden
      >
        <div className="absolute left-1/2 top-0 h-[380px] w-[min(100%,680px)] -translate-x-1/2 rounded-full bg-cyan-600/18 blur-[110px]" />
        <div className="absolute bottom-0 right-0 h-[260px] w-[260px] rounded-full bg-blue-700/12 blur-[95px]" />
      </div>

      <header
        ref={headerRef}
        className={`fixed inset-x-0 top-0 z-50 pt-[max(0.65rem,env(safe-area-inset-top,0px))] transition-[background-color,box-shadow,border-color] duration-300 ease-out ${
          scrolled
            ? "border-b border-white/[0.08] bg-black/58 shadow-[0_12px_48px_rgba(0,0,0,0.55)] supports-[backdrop-filter]:bg-black/42"
            : "border-b border-transparent bg-black/35 supports-[backdrop-filter]:bg-black/22"
        }`}
        style={{
          WebkitBackdropFilter: "blur(20px) saturate(180%)",
          backdropFilter: "blur(20px) saturate(180%)",
        }}
      >
        <div className="relative mx-auto flex max-w-2xl flex-col items-center gap-4 px-4 pb-5 pt-1">
          <motion.button
            type="button"
            whileTap={{ scale: 0.96, transition: springTap }}
            onClick={() => {
              chipHaptic();
              setLang((prev) => (prev === "mm" ? "en" : "mm"));
            }}
            className="absolute end-[max(0.5rem,env(safe-area-inset-right,0px))] top-[max(0.35rem,env(safe-area-inset-top,0px))] z-[60] flex items-center gap-1.5 rounded-full border border-white/[0.14] bg-black/48 px-3 py-2 text-[11px] font-semibold tracking-tight text-zinc-100 shadow-[0_8px_28px_rgba(0,0,0,0.45)] ring-1 ring-white/[0.07]"
            style={{
              WebkitBackdropFilter: "blur(20px) saturate(175%)",
              backdropFilter: "blur(20px) saturate(175%)",
            }}
            aria-label={
              lang === "mm"
                ? "Switch interface to English"
                : "အင်တာဖေ့စ် ကို မြန်မာဘာသာသို့ ပြောင်းရန်"
            }
          >
            <Languages
              className="size-4 shrink-0 text-cyan-400"
              strokeWidth={2}
              aria-hidden
            />
            <span>{lang === "mm" ? t.langSwitchToMm : t.langSwitchToEn}</span>
          </motion.button>

          <motion.div
            className="flex w-full flex-col items-center gap-1 pt-7 sm:flex-row sm:justify-center sm:gap-3 sm:pt-2 md:pt-0"
            initial={false}
            animate={{
              scale: scrolled ? 0.96 : 1,
              opacity: scrolled ? 0.92 : 1,
            }}
            transition={{ type: "spring", stiffness: 320, damping: 30 }}
          >
            <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-tr from-cyan-500 to-blue-600 shadow-[0_0_36px_rgba(34,211,238,0.2)] ring-1 ring-white/10">
              <Smartphone
                className="size-7 text-white"
                strokeWidth={1.75}
                aria-hidden
              />
            </div>
            <div className="min-h-[4.75rem] text-center sm:min-h-[5rem] sm:text-left md:min-h-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={lang}
                  initial={langFade.initial}
                  animate={langFade.animate}
                  exit={langFade.exit}
                  transition={langFade.transition}
                  className="text-center sm:text-left"
                >
                  <h1 className="text-balance text-xl font-semibold leading-relaxed tracking-tight text-white md:text-2xl">
                    {t.title}
                  </h1>
                  <p className="mt-1 max-w-md text-pretty text-[13px] leading-relaxed text-zinc-500 md:text-sm">
                    {t.subtitle}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>

          <motion.div
            layout
            transition={{ layout: springIOS, ...springIOS }}
            animate={{
              scale: query.trim().length > 0 || quickBrand !== null ? 1.012 : 1,
            }}
            className="group relative w-full max-w-lg origin-center"
          >
            <div
              className="relative rounded-full border-2 border-white/[0.12] bg-white/[0.06] p-[2px] shadow-[0_8px_40px_rgba(0,0,0,0.35)] transition-[border-color,box-shadow] group-focus-within:border-cyan-500/35 group-focus-within:shadow-[0_12px_48px_rgba(34,211,238,0.12)]"
              style={{
                WebkitBackdropFilter: "blur(20px) saturate(175%)",
                backdropFilter: "blur(20px) saturate(175%)",
              }}
            >
              <div className="pointer-events-none absolute inset-y-0 left-5 z-10 flex items-center text-zinc-500 transition-colors group-focus-within:text-cyan-400">
                <Search className="size-5" strokeWidth={2} aria-hidden />
              </div>
              <input
                ref={searchInputRef}
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={t.searchPlaceholder}
                autoComplete="off"
                className="w-full rounded-full border border-white/[0.06] bg-black/25 py-4 pl-14 pr-5 text-[15px] leading-relaxed tracking-tight text-white shadow-inner shadow-black/25 transition-[border-color,background-color] placeholder:text-zinc-600 focus:border-cyan-500/40 focus:bg-black/35 focus:outline-none focus:ring-2 focus:ring-cyan-500/25 md:py-[1.125rem] md:text-base"
                aria-label={t.searchAria}
              />
            </div>
          </motion.div>

          <div className="w-full max-w-lg space-y-2.5">
            <AnimatePresence mode="wait">
              <motion.p
                key={`qb-${lang}`}
                initial={langFade.initial}
                animate={langFade.animate}
                exit={langFade.exit}
                transition={langFade.transition}
                className="text-center text-[11px] font-medium uppercase tracking-[0.14em] text-zinc-500"
              >
                {t.quickBrandsTitle}
              </motion.p>
            </AnimatePresence>
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
                        ? "border-cyan-500/55 bg-cyan-500/15 text-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.15)]"
                        : "border-white/[0.1] bg-black/30 text-zinc-400 hover:border-cyan-500/25 hover:text-zinc-200"
                    }`}
                    style={{
                      WebkitBackdropFilter: "blur(16px)",
                      backdropFilter: "blur(16px)",
                    }}
                  >
                    {label}
                  </motion.button>
                );
              })}
            </div>
          </div>
        </div>
      </header>

      <main
        className="relative mx-auto max-w-2xl px-4 pb-[env(safe-area-inset-bottom,0px)]"
        style={{ paddingTop: mainPaddingTop }}
        onTouchStart={(e) => {
          if (typeof window === "undefined") return;
          if (window.scrollY <= 2) {
            pullTouchStartY.current = e.touches[0].clientY;
            pullPeakDy.current = 0;
          }
        }}
        onTouchMove={(e) => {
          if (pullTouchStartY.current == null || typeof window === "undefined")
            return;
          if (window.scrollY > 2) {
            pullTouchStartY.current = null;
            pullPeakDy.current = 0;
            return;
          }
          const dy = e.touches[0].clientY - pullTouchStartY.current;
          if (dy > pullPeakDy.current) pullPeakDy.current = dy;
        }}
        onTouchEnd={() => {
          if (pullTouchStartY.current == null) return;
          pullTouchStartY.current = null;
          if (pullPeakDy.current > 52) {
            pullHaptic();
            void (async () => {
              await listSpringControls.start({
                y: 14,
                transition: springTap,
              });
              await listSpringControls.start({
                y: 0,
                transition: springIOS,
              });
            })();
          }
          pullPeakDy.current = 0;
        }}
      >
        <motion.div
          layout
          initial={{ y: 0 }}
          animate={listSpringControls}
          transition={springIOS}
          className="space-y-5 md:space-y-6"
        >
          <AnimatePresence mode="popLayout" initial={false}>
            {filtered.length > 0 ? (
              filtered.map((item, idx) => (
                <motion.article
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 22 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.94 }}
                  transition={{
                    ...springIOS,
                    delay: idx * 0.032,
                  }}
                  className="relative overflow-hidden rounded-[32px] border border-white/[0.1] bg-white/[0.045] p-6 shadow-[0_28px_72px_rgba(0,0,0,0.52)] md:p-8"
                  style={{
                    WebkitBackdropFilter: "blur(20px) saturate(165%)",
                    backdropFilter: "blur(20px) saturate(165%)",
                  }}
                >
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/28 to-transparent opacity-50" aria-hidden />

                  <div className="mb-5 flex flex-wrap items-start justify-between gap-3">
                    <div className="flex items-center gap-2.5">
                      <span className="size-2 shrink-0 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.55)]" />
                      <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan-300/95">
                        {item.brand}
                      </span>
                    </div>
                    <span className="rounded-full border border-white/[0.08] bg-black/30 px-3 py-1.5 text-[11px] font-medium leading-relaxed text-zinc-400 backdrop-blur-sm">
                      {t.glassPrefix} · {item.glassSize}
                    </span>
                  </div>

                  <h2 className="sr-only">
                    {item.brand} · {t.srModelsFor}
                  </h2>
                  <ul className="flex flex-wrap gap-2.5 md:gap-3">
                    {item.models.map((model) => (
                      <li key={model}>
                        <motion.button
                          type="button"
                          whileTap={{
                            scale: 0.95,
                            opacity: 0.88,
                            transition: springTap,
                          }}
                          onClick={() => chipHaptic()}
                          className="flex items-center gap-2 rounded-[22px] border border-white/[0.07] bg-black/35 px-3.5 py-2.5 text-left text-sm font-medium leading-snug text-zinc-200 transition-[border-color,background-color] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500/40 active:bg-black/50 md:px-4 md:py-3 md:text-[0.9375rem]"
                        >
                          <Smartphone
                            className="size-3.5 shrink-0 text-cyan-500"
                            strokeWidth={2}
                            aria-hidden
                          />
                          <span>
                            <HighlightMatch text={model} query={query} />
                          </span>
                        </motion.button>
                      </li>
                    ))}
                  </ul>
                </motion.article>
              ))
            ) : (
              <motion.div
                key="empty"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={springIOS}
                className="rounded-[32px] border border-dashed border-white/12 bg-white/[0.03] px-6 py-20 text-center"
                style={{
                  WebkitBackdropFilter: "blur(20px) saturate(165%)",
                  backdropFilter: "blur(20px) saturate(165%)",
                }}
              >
                <div className="mx-auto mb-4 flex size-14 items-center justify-center rounded-2xl bg-zinc-900/70 ring-1 ring-white/10">
                  <Smartphone
                    className="size-7 text-zinc-600"
                    strokeWidth={1.5}
                    aria-hidden
                  />
                </div>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`empty-${lang}`}
                    initial={langFade.initial}
                    animate={langFade.animate}
                    exit={langFade.exit}
                    transition={langFade.transition}
                  >
                    <p className="text-sm leading-relaxed text-zinc-500">
                      {t.emptyNoMatch}
                    </p>
                    {query.trim().length > 0 ? (
                      <p className="mt-3 text-xs leading-relaxed text-zinc-600">
                        {t.emptyQueryHint}: «{query.trim()}»
                      </p>
                    ) : null}
                  </motion.div>
                </AnimatePresence>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        <footer className="mt-12 md:mt-14">
          <div
            className="mx-auto flex max-w-lg gap-3 rounded-[32px] border border-white/[0.08] bg-white/[0.04] p-5"
            style={{
              WebkitBackdropFilter: "blur(20px) saturate(165%)",
              backdropFilter: "blur(20px) saturate(165%)",
            }}
          >
            <Info
              className="mt-0.5 size-5 shrink-0 text-cyan-400/85"
              strokeWidth={2}
              aria-hidden
            />
            <div className="flex min-w-0 flex-col gap-2">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`foot-${lang}`}
                  initial={langFade.initial}
                  animate={langFade.animate}
                  exit={langFade.exit}
                  transition={langFade.transition}
                  className="flex flex-col gap-2"
                >
                  <p className="text-left text-[11px] leading-relaxed text-zinc-500 md:text-xs md:leading-relaxed">
                    {t.footerExplain}{" "}
                    <strong className="font-semibold text-cyan-500/90">
                      {t.footerVerified}
                    </strong>
                  </p>
                  <p className="text-left text-[10px] leading-relaxed text-zinc-600 md:text-[11px]">
                    {t.footerDisclaimer}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </footer>
      </main>

      {/* Floating glass chrome — mobile only (Control Center–style blur) */}
      <div className="pointer-events-none fixed inset-x-0 bottom-0 z-40 flex justify-center px-4 pb-[max(0.65rem,env(safe-area-inset-bottom,0px))] md:hidden">
        <motion.div
          initial={{ y: 28, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={springIOS}
          className="pointer-events-auto flex items-center gap-1 rounded-[22px] border border-white/[0.12] bg-black/52 p-1.5 shadow-[0_12px_48px_rgba(0,0,0,0.68)] ring-1 ring-white/[0.06] supports-[backdrop-filter]:bg-black/38"
          style={{
            WebkitBackdropFilter: "blur(28px) saturate(180%)",
            backdropFilter: "blur(28px) saturate(180%)",
          }}
        >
          <motion.button
            type="button"
            whileTap={{
              scale: 0.95,
              opacity: 0.82,
              transition: springTap,
            }}
            onClick={() => searchInputRef.current?.focus()}
            className="flex items-center gap-2 rounded-[14px] px-4 py-2.5 text-sm font-semibold leading-relaxed tracking-tight text-cyan-400"
          >
            <Search className="size-5 shrink-0" strokeWidth={2} aria-hidden />
            <AnimatePresence mode="wait">
              <motion.span
                key={lang}
                initial={langFade.initial}
                animate={langFade.animate}
                exit={langFade.exit}
                transition={langFade.transition}
                className="inline-block min-w-[2.75rem]"
              >
                {t.fabSearch}
              </motion.span>
            </AnimatePresence>
          </motion.button>
          <AnimatePresence mode="popLayout">
            {scrolled ? (
              <motion.button
                key="top"
                type="button"
                initial={{ opacity: 0, scale: 0.88 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.88 }}
                transition={springIOS}
                whileTap={{
                  scale: 0.95,
                  opacity: 0.82,
                  transition: springTap,
                }}
                onClick={() =>
                  window.scrollTo({ top: 0, behavior: "smooth" })
                }
                className="flex size-11 shrink-0 items-center justify-center rounded-[14px] text-cyan-400"
                aria-label={t.scrollTopAria}
              >
                <ChevronUp className="size-5" strokeWidth={2} aria-hidden />
              </motion.button>
            ) : null}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
