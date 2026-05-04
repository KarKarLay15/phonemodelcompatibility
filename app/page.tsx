"use client";

import { compatibilityData } from "@/data/models";
import {
  glassDescription,
  glassSearchText,
} from "@/data/compatibility-i18n";
import {
  QUICK_BRAND_CHIPS,
  brandMatchesQuickFilter,
  chipHaptic,
  pageStrings,
  type PageLang,
  type QuickBrandKey,
} from "@/lib/kktech-mm";
import { AnimatePresence, motion, useAnimationControls } from "framer-motion";
import { ChevronUp, Info, Languages, Moon, Search, Smartphone, Sun } from "lucide-react";
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
            className="rounded-md bg-cyan-600/25 px-0.5 text-slate-900 [box-decoration-break:clone] dark:bg-cyan-400/40 dark:text-white"
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

const THEME_STORAGE_KEY = "kkt-tech-theme";
type Theme = "light" | "dark";

export default function Page() {
  const [theme, setTheme] = useState<Theme>("dark");
  const [lang, setLang] = useState<PageLang>("mm");
  const [query, setQuery] = useState("");
  const [quickBrand, setQuickBrand] = useState<QuickBrandKey | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const [mainPaddingTop, setMainPaddingTop] = useState(176);
  const listSpringControls = useAnimationControls();
  const skipQueryListSpringRef = useRef(true);
  const pullTouchStartY = useRef<number | null>(null);
  const pullPeakDy = useRef(0);

  useLayoutEffect(() => {
    try {
      const v = localStorage.getItem(THEME_STORAGE_KEY);
      if (v === "light" || v === "dark") setTheme(v);
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(THEME_STORAGE_KEY, theme);
    } catch {
      /* ignore */
    }
  }, [theme]);

  const t = useMemo(() => pageStrings(lang), [lang]);
  const trimmedQuery = query.trim();
  const isSearching = trimmedQuery.length > 0;

  const filtered = useMemo(() => {
    let rows = quickBrand
      ? compatibilityData.filter((g) =>
          brandMatchesQuickFilter(g.brand, quickBrand),
        )
      : compatibilityData;
    const q = trimmedQuery.toLowerCase();
    if (!q) return rows;
    return rows.filter(
      (g) =>
        g.models.some((m) => m.toLowerCase().includes(q)) ||
        g.brand.toLowerCase().includes(q) ||
        glassSearchText(g).toLowerCase().includes(q),
    );
  }, [quickBrand, trimmedQuery]);

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
    const update = () => setMainPaddingTop(el.offsetHeight + 8);
    const ro = new ResizeObserver(update);
    ro.observe(el);
    update();
    return () => ro.disconnect();
  }, [lang, isSearching, quickBrand, theme]);

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
  }, [trimmedQuery, listSpringControls]);

  return (
    <div
      className={`${theme === "dark" ? "dark " : ""}min-h-dvh w-full bg-gray-50 pb-[max(7rem,var(--safe-bottom))] font-sans tracking-tight text-slate-900 selection:bg-cyan-600/25 md:pb-[max(2.75rem,var(--safe-bottom))] dark:bg-black dark:text-white dark:selection:bg-cyan-500/35`}
    >
      <div
        className="pointer-events-none fixed inset-0 -z-10 opacity-[0.18] dark:opacity-35"
        aria-hidden
      >
        <div className="absolute left-1/2 top-0 h-[380px] w-[min(100%,680px)] -translate-x-1/2 rounded-full bg-cyan-500/25 blur-[110px] dark:bg-cyan-600/18" />
        <div className="absolute bottom-0 right-0 h-[260px] w-[260px] rounded-full bg-blue-500/15 blur-[95px] dark:bg-blue-700/12" />
      </div>

      <header
        ref={headerRef}
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,border-color,padding-top,backdrop-filter] duration-300 ease-out ${
          isSearching
            ? "pt-[max(0.35rem,env(safe-area-inset-top,0px))]"
            : "pt-[max(0.55rem,env(safe-area-inset-top,0px))]"
        } ${
          scrolled
            ? "border-b border-gray-200 bg-white/95 shadow-sm supports-[backdrop-filter]:bg-white/90 dark:border-white/[0.08] dark:bg-black/58 dark:shadow-[0_12px_48px_rgba(0,0,0,0.55)] dark:supports-[backdrop-filter]:bg-black/42"
            : "border-b border-transparent bg-white/85 supports-[backdrop-filter]:bg-white/80 dark:border-transparent dark:bg-black/35 dark:supports-[backdrop-filter]:bg-black/22"
        }`}
        style={
          theme === "dark"
            ? {
                WebkitBackdropFilter: "blur(20px) saturate(180%)",
                backdropFilter: "blur(20px) saturate(180%)",
              }
            : { WebkitBackdropFilter: "none", backdropFilter: "none" }
        }
      >
        <div className="relative mx-auto flex max-w-2xl flex-col items-center gap-2 px-4 pb-3 pt-0.5 sm:gap-2.5 sm:pb-4 sm:pt-1 pe-[max(7.75rem,calc(env(safe-area-inset-right,0px)+6.75rem))] ps-[max(0.75rem,env(safe-area-inset-left,0px))]">
          <div className="absolute end-[max(0.35rem,env(safe-area-inset-right,0px))] top-[max(0.2rem,env(safe-area-inset-top,0px))] z-[60] flex flex-row-reverse items-center gap-1">
            <motion.button
              type="button"
              whileTap={{ scale: 0.96, transition: springTap }}
              onClick={() => {
                chipHaptic();
                setLang((prev) => (prev === "mm" ? "en" : "mm"));
              }}
              className="flex h-8 shrink-0 items-center gap-1 rounded-full border border-gray-200 bg-white px-2 py-1 text-[10px] font-semibold tabular-nums tracking-tight text-slate-800 shadow-sm ring-1 ring-gray-100 dark:border-white/[0.12] dark:bg-black/52 dark:text-zinc-100 dark:shadow-[0_4px_18px_rgba(0,0,0,0.45)] dark:ring-white/[0.06]"
              style={
                theme === "dark"
                  ? {
                      WebkitBackdropFilter: "blur(20px) saturate(175%)",
                      backdropFilter: "blur(20px) saturate(175%)",
                    }
                  : undefined
              }
              aria-label={
                lang === "mm"
                  ? "Switch interface to English"
                  : "အင်တာဖေ့စ် ကို မြန်မာဘာသာသို့ ပြောင်းရန်"
              }
            >
              <Languages
                className="size-3.5 shrink-0 text-cyan-600 dark:text-cyan-400"
                strokeWidth={2}
                aria-hidden
              />
              <span className="leading-none">
                {lang === "mm" ? t.langSwitchToMm : t.langSwitchToEn}
              </span>
            </motion.button>

            <motion.button
              type="button"
              layout
              whileTap={{ scale: 0.92, transition: springTap }}
              onClick={() => {
                chipHaptic();
                setTheme((prev) => (prev === "dark" ? "light" : "dark"));
              }}
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gray-200 bg-white text-cyan-700 shadow-sm ring-1 ring-gray-100 dark:border-white/[0.12] dark:bg-black/52 dark:text-cyan-400 dark:shadow-[0_4px_18px_rgba(0,0,0,0.45)] dark:ring-white/[0.06]"
              style={
                theme === "dark"
                  ? {
                      WebkitBackdropFilter: "blur(20px) saturate(175%)",
                      backdropFilter: "blur(20px) saturate(175%)",
                    }
                  : undefined
              }
              aria-label={
                theme === "dark"
                  ? "Switch to light theme"
                  : "Switch to dark theme"
              }
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={theme}
                  initial={{ scale: 0.82, opacity: 0, rotate: -25 }}
                  animate={{ scale: 1, opacity: 1, rotate: 0 }}
                  exit={{ scale: 0.82, opacity: 0, rotate: 25 }}
                  transition={springIOS}
                  className="flex items-center justify-center"
                >
                  {theme === "dark" ? (
                    <Sun className="size-4" strokeWidth={2} aria-hidden />
                  ) : (
                    <Moon className="size-4" strokeWidth={2} aria-hidden />
                  )}
                </motion.span>
              </AnimatePresence>
            </motion.button>
          </div>

          <div
            className={`grid w-full transition-[grid-template-rows] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${isSearching ? "grid-rows-[0fr]" : "grid-rows-[1fr]"}`}
          >
            <div className="min-h-0 overflow-hidden">
              <motion.div
                className="flex w-full flex-col items-center gap-1 pb-1 pt-2 sm:flex-row sm:justify-center sm:gap-2.5 sm:pb-0 sm:pt-1 md:pt-0"
                initial={false}
                animate={{
                  scale: scrolled && !isSearching ? 0.97 : 1,
                  opacity: scrolled && !isSearching ? 0.9 : 1,
                }}
                transition={{ type: "spring", stiffness: 380, damping: 32 }}
              >
                <div className="flex size-10 max-h-12 max-w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 shadow-[0_0_20px_rgba(8,145,178,0.35)] ring-1 ring-cyan-700/15 dark:shadow-[0_0_24px_rgba(34,211,238,0.18)] dark:ring-white/10 sm:size-11">
                  <Smartphone
                    className="size-[22px] text-white sm:size-6"
                    strokeWidth={1.75}
                    aria-hidden
                  />
                </div>
                <div className="text-center sm:min-h-0 sm:text-left">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={lang}
                      initial={langFade.initial}
                      animate={langFade.animate}
                      exit={langFade.exit}
                      transition={langFade.transition}
                      className="text-center sm:text-left"
                    >
                      <h1 className="text-balance text-base font-semibold leading-snug tracking-tight text-slate-900 sm:text-lg md:text-xl dark:text-white">
                        {t.title}
                      </h1>
                      <p className="mt-0.5 max-w-md text-pretty text-[11px] leading-snug text-slate-600 sm:text-[12px] md:text-[13px] dark:text-zinc-500">
                        {t.subtitle}
                      </p>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </motion.div>
            </div>
          </div>

          <motion.div
            layout
            transition={{ layout: springIOS, ...springIOS }}
            animate={{
              scale:
                trimmedQuery.length > 0 || quickBrand !== null ? 1.008 : 1,
            }}
            className="group relative w-full max-w-lg origin-center"
          >
            <div
              className="relative rounded-full border-2 border-gray-200 bg-white p-[2px] shadow-sm transition-[border-color,box-shadow] group-focus-within:border-cyan-500/55 group-focus-within:shadow-md dark:border-white/[0.12] dark:bg-white/[0.06] dark:shadow-[0_8px_40px_rgba(0,0,0,0.35)] dark:group-focus-within:border-cyan-500/35 dark:group-focus-within:shadow-[0_12px_48px_rgba(34,211,238,0.12)]"
              style={
                theme === "dark"
                  ? {
                      WebkitBackdropFilter: "blur(20px) saturate(175%)",
                      backdropFilter: "blur(20px) saturate(175%)",
                    }
                  : undefined
              }
            >
              <div className="pointer-events-none absolute inset-y-0 left-4 z-10 flex items-center text-slate-500 transition-colors group-focus-within:text-cyan-600 md:left-5 dark:text-zinc-500 dark:group-focus-within:text-cyan-400">
                <Search className="size-[18px] md:size-5" strokeWidth={2} aria-hidden />
              </div>
              <input
                ref={searchInputRef}
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={t.searchPlaceholder}
                autoComplete="off"
                className="w-full rounded-full border border-gray-200 bg-gray-100 py-2.5 pl-11 pr-4 text-[14px] leading-snug tracking-tight text-slate-900 shadow-inner shadow-slate-900/5 transition-[border-color,background-color] placeholder:text-slate-500 focus:border-cyan-500/60 focus:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-cyan-500/30 md:py-3 md:pl-14 md:pr-5 md:text-[15px] dark:border-white/[0.06] dark:bg-black/25 dark:text-white dark:shadow-inner dark:shadow-black/25 dark:placeholder:text-zinc-600 dark:focus:border-cyan-500/40 dark:focus:bg-black/35 dark:focus:ring-cyan-500/25"
                aria-label={t.searchAria}
              />
            </div>
          </motion.div>

          <div className="w-full max-w-lg space-y-1.5">
            <AnimatePresence initial={false} mode="popLayout">
              {!isSearching ? (
                <motion.div
                  key={`qb-label-${lang}`}
                  layout
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="text-center text-[10px] font-medium uppercase tracking-[0.12em] text-slate-500 dark:text-zinc-500">
                    {t.quickBrandsTitle}
                  </p>
                </motion.div>
              ) : null}
            </AnimatePresence>
            <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2">
              {QUICK_BRAND_CHIPS.map(({ key, label }) => {
                const active = quickBrand === key;
                return (
                  <motion.button
                    key={key}
                    type="button"
                    layout
                    whileTap={{ scale: 0.95, transition: springTap }}
                    onClick={() => {
                      chipHaptic();
                      setQuickBrand((prev) => (prev === key ? null : key));
                    }}
                    className={`rounded-full border px-2.5 py-1 text-[11px] font-semibold tracking-tight transition-colors sm:px-3 sm:py-1.5 sm:text-xs ${
                      active
                        ? "border-cyan-600 bg-cyan-100 text-cyan-900 shadow-sm dark:border-cyan-500/55 dark:bg-cyan-500/15 dark:text-cyan-300 dark:shadow-[0_0_20px_rgba(34,211,238,0.15)]"
                        : "border-gray-200 bg-white text-slate-600 shadow-sm hover:border-cyan-400/40 hover:text-slate-900 dark:border-white/[0.1] dark:bg-black/30 dark:text-zinc-400 dark:shadow-none dark:hover:border-cyan-500/25 dark:hover:text-zinc-200"
                    }`}
                    style={
                      theme === "dark"
                        ? {
                            WebkitBackdropFilter: "blur(16px)",
                            backdropFilter: "blur(16px)",
                          }
                        : undefined
                    }
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
          className="space-y-3 md:space-y-4"
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
                  className="relative overflow-hidden rounded-[28px] border border-gray-200 bg-white p-4 shadow-sm md:rounded-[30px] md:p-5 dark:border-white/[0.1] dark:bg-white/[0.045] dark:shadow-[0_28px_72px_rgba(0,0,0,0.52)]"
                  style={
                    theme === "dark"
                      ? {
                          WebkitBackdropFilter: "blur(20px) saturate(165%)",
                          backdropFilter: "blur(20px) saturate(165%)",
                        }
                      : undefined
                  }
                >
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-500/35 to-transparent opacity-70 dark:via-cyan-400/28 dark:opacity-50" aria-hidden />

                  <div className="mb-3 flex flex-wrap items-start justify-between gap-2">
                    <div className="flex items-center gap-2.5">
                      <span className="size-2 shrink-0 rounded-full bg-cyan-600 shadow-[0_0_10px_rgba(8,145,178,0.45)] dark:bg-cyan-400 dark:shadow-[0_0_12px_rgba(34,211,238,0.55)]" />
                      <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan-800 dark:text-cyan-300/95">
                        {item.brand}
                      </span>
                    </div>
                    <span className="rounded-full border border-gray-200 bg-gray-50 px-2 py-1 text-[10px] font-medium leading-snug text-slate-600 md:px-2.5 md:text-[11px] dark:border-white/[0.08] dark:bg-black/30 dark:text-zinc-400">
                      {t.glassPrefix} · {glassDescription(item, lang)}
                    </span>
                  </div>

                  <h2 className="sr-only">
                    {item.brand} · {t.srModelsFor}
                  </h2>
                  <ul className="flex flex-wrap gap-1.5 md:gap-2">
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
                          className="flex max-w-full items-center gap-1.5 rounded-full border border-gray-200 bg-gray-50 px-2 py-1.5 text-left text-[11px] font-medium leading-snug text-slate-800 transition-[border-color,background-color] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-600/35 active:bg-gray-100 sm:gap-2 sm:rounded-[18px] sm:px-2.5 sm:text-xs md:px-3 md:py-2 md:text-[13px] dark:border-white/[0.07] dark:bg-black/35 dark:text-zinc-200 dark:focus-visible:ring-cyan-500/40 dark:active:bg-black/50"
                        >
                          <Smartphone
                            className="size-3 shrink-0 text-cyan-600 sm:size-3.5 dark:text-cyan-500"
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
                className="rounded-[28px] border border-dashed border-gray-300 bg-white px-5 py-14 text-center shadow-sm md:rounded-[30px] md:py-16 dark:border-white/12 dark:bg-white/[0.03] dark:shadow-none"
                style={
                  theme === "dark"
                    ? {
                        WebkitBackdropFilter: "blur(20px) saturate(165%)",
                        backdropFilter: "blur(20px) saturate(165%)",
                      }
                    : undefined
                }
              >
                <div className="mx-auto mb-4 flex size-14 items-center justify-center rounded-2xl bg-gray-100 ring-1 ring-gray-200 dark:bg-zinc-900/70 dark:ring-white/10">
                  <Smartphone
                    className="size-7 text-slate-400 dark:text-zinc-600"
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
                    <p className="text-sm leading-relaxed text-slate-600 dark:text-zinc-500">
                      {t.emptyNoMatch}
                    </p>
                    {query.trim().length > 0 ? (
                      <p className="mt-3 text-xs leading-relaxed text-slate-500 dark:text-zinc-600">
                        {t.emptyQueryHint}: «{query.trim()}»
                      </p>
                    ) : null}
                  </motion.div>
                </AnimatePresence>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        <footer className="mt-8 md:mt-12">
          <div
            className="mx-auto flex max-w-lg gap-3 rounded-[32px] border border-gray-200 bg-white p-5 shadow-sm dark:border-white/[0.08] dark:bg-white/[0.04] dark:shadow-none"
            style={
              theme === "dark"
                ? {
                    WebkitBackdropFilter: "blur(20px) saturate(165%)",
                    backdropFilter: "blur(20px) saturate(165%)",
                  }
                : undefined
            }
          >
            <Info
              className="mt-0.5 size-5 shrink-0 text-cyan-600 dark:text-cyan-400/85"
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
                  <p className="text-left text-[11px] leading-relaxed text-slate-600 md:text-xs md:leading-relaxed dark:text-zinc-500">
                    {t.footerExplain}{" "}
                    <strong className="font-semibold text-cyan-700 dark:text-cyan-500/90">
                      {t.footerVerified}
                    </strong>
                  </p>
                  <p className="text-left text-[10px] leading-relaxed text-slate-500 md:text-[11px] dark:text-zinc-600">
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
          className="pointer-events-auto flex items-center gap-1 rounded-[22px] border border-gray-200 bg-white p-1.5 shadow-lg ring-1 ring-gray-100 dark:border-white/[0.12] dark:bg-black/52 dark:shadow-[0_12px_48px_rgba(0,0,0,0.68)] dark:ring-white/[0.06] dark:supports-[backdrop-filter]:bg-black/38"
          style={
            theme === "dark"
              ? {
                  WebkitBackdropFilter: "blur(28px) saturate(180%)",
                  backdropFilter: "blur(28px) saturate(180%)",
                }
              : undefined
          }
        >
          <motion.button
            type="button"
            whileTap={{
              scale: 0.95,
              opacity: 0.82,
              transition: springTap,
            }}
            onClick={() => searchInputRef.current?.focus()}
            className="flex items-center gap-2 rounded-[14px] px-4 py-2.5 text-sm font-semibold leading-relaxed tracking-tight text-cyan-700 dark:text-cyan-400"
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
                className="flex size-11 shrink-0 items-center justify-center rounded-[14px] text-cyan-700 dark:text-cyan-400"
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
