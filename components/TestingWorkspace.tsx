"use client";

import { CanvasTest } from "@/components/CanvasTest";
import { ColorCalibration, ColorCalibrationPalette } from "@/components/ColorCalibration";
import { EdgeDetection, EdgeDetectionPanel } from "@/components/EdgeDetection";
import { GridTest } from "@/components/GridTest";
import { BrightnessHintBanner } from "@/components/BrightnessHintBanner";
import { useTesting } from "@/context/TestingContext";
import { useGridDensity } from "@/lib/hooks/useGridDensity";
import { AnimatePresence, motion } from "framer-motion";
import { Layers, Palette, ScanLine, SunMedium, Trash2 } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

const tabVariants = {
  initial: { opacity: 0, x: 10 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -8 },
};

export function TestingWorkspace() {
  const { brightMode, toggleBrightMode, touchTool, setTouchTool, activeMode, setActiveMode, showBrightnessHint } =
    useTesting();

  const density = useGridDensity();
  const [resetCanvas, setResetCanvas] = useState(0);
  const [resetGrid, setResetGrid] = useState(0);
  const [openColor, setOpenColor] = useState<string | null>(null);
  const [edgesOpen, setEdgesOpen] = useState(false);
  const brightHintForMode = useRef(false);

  const clearTouch = useCallback(() => {
    if (touchTool === "canvas") setResetCanvas((n) => n + 1);
    else setResetGrid((n) => n + 1);
  }, [touchTool]);

  useEffect(() => {
    if (brightMode && !brightHintForMode.current) {
      brightHintForMode.current = true;
      showBrightnessHint();
    }
    if (!brightMode) {
      brightHintForMode.current = false;
    }
  }, [brightMode, showBrightnessHint]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenColor(null);
        setEdgesOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (!openColor) return;
    let startX: number | null = null;
    const onStart = (e: TouchEvent) => {
      if (e.touches.length === 1) startX = e.touches[0].clientX;
    };
    const onEnd = (e: TouchEvent) => {
      if (startX == null) return;
      const endX = e.changedTouches[0].clientX;
      if (endX - startX > 70) setOpenColor(null);
      startX = null;
    };
    window.addEventListener("touchstart", onStart, { passive: true });
    window.addEventListener("touchend", onEnd, { passive: true });
    return () => {
      window.removeEventListener("touchstart", onStart);
      window.removeEventListener("touchend", onEnd);
    };
  }, [openColor]);

  const immersive = Boolean(openColor || edgesOpen);

  return (
    <div
      className={`flex min-h-dvh flex-col transition-colors duration-300 ${brightMode ? "bg-zinc-950" : "bg-[#0a0a0f]"}`}
    >
      <div
        className={`relative z-40 flex min-h-dvh flex-col transition duration-200 ${
          immersive ? "pointer-events-none invisible opacity-0" : "opacity-100"
        }`}
        style={{ paddingTop: "var(--safe-top)" }}
        aria-hidden={immersive}
      >
        <header className="shrink-0 px-4 pt-2 pb-2">
          <BrightnessHintBanner />
          <div className="glass-panel mt-1 flex items-center justify-between gap-3 rounded-2xl px-4 py-3">
            <div className="min-w-0">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-400/90">GlassLab</p>
              <h1 className="truncate text-lg font-semibold text-white">Protector QA</h1>
            </div>
            <motion.button
              type="button"
              layout
              whileTap={{ scale: 0.97 }}
              onClick={toggleBrightMode}
              aria-pressed={brightMode}
              title="High-brightness UI for LCD-related tests"
              className={`glass-chip flex items-center gap-2 rounded-xl px-3 py-2 text-xs font-medium transition ${brightMode ? "text-cyan-100" : "text-zinc-200"}`}
            >
              <SunMedium className="h-4 w-4 opacity-90" aria-hidden />
              <span className="hidden sm:inline">Bright </span>
              Mode
            </motion.button>
          </div>
        </header>

        <nav className="shrink-0 px-4 pb-2">
          <div className="glass-panel grid grid-cols-3 gap-1 rounded-2xl p-1.5">
            {(
              [
                { id: "touch" as const, label: "Touch", Icon: Layers },
                { id: "display" as const, label: "Display", Icon: Palette },
                { id: "edges" as const, label: "Edges", Icon: ScanLine },
              ] as const
            ).map(({ id, label, Icon }) => {
              const active = activeMode === id;
              return (
                <motion.button
                  key={id}
                  type="button"
                  onClick={() => setActiveMode(id)}
                  layout
                  className={`relative flex flex-col items-center gap-1 rounded-xl py-2.5 text-xs font-semibold transition ${
                    active ? "text-white" : "text-zinc-400"
                  }`}
                  whileTap={{ scale: 0.98 }}
                >
                  {active ? (
                    <motion.span
                      layoutId="mode-pill"
                      className="absolute inset-0 rounded-xl bg-white/10 shadow-lg"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  ) : null}
                  <Icon className="relative z-[1] h-4 w-4" strokeWidth={2} />
                  <span className="relative z-[1]">{label}</span>
                </motion.button>
              );
            })}
          </div>
        </nav>

        <div className="relative min-h-0 flex-1 px-4 pb-2">
          <AnimatePresence initial={false} mode="wait">
            {activeMode === "touch" ? (
              <motion.div
                key="touch"
                variants={tabVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                className="flex h-full min-h-0 flex-col gap-2"
              >
                <div className="glass-panel flex flex-wrap items-center justify-between gap-2 rounded-2xl p-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[11px] uppercase tracking-wider text-zinc-500">Draw mode</span>
                    <div className="flex overflow-hidden rounded-xl glass-chip p-0.5">
                      <button
                        type="button"
                        onClick={() => setTouchTool("canvas")}
                        className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition ${
                          touchTool === "canvas" ? "bg-white/15 text-white" : "text-zinc-400"
                        }`}
                      >
                        Lines
                      </button>
                      <button
                        type="button"
                        onClick={() => setTouchTool("grid")}
                        className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition ${
                          touchTool === "grid" ? "bg-white/15 text-white" : "text-zinc-400"
                        }`}
                      >
                        Grid fill
                      </button>
                    </div>
                    <span className="hidden text-[10px] text-zinc-600 sm:inline">
                      {density.cols}×{density.rows} cells
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={clearTouch}
                    className="flex items-center gap-1.5 rounded-xl border border-rose-400/30 bg-rose-500/20 px-4 py-2 text-xs font-semibold text-rose-200 transition active:scale-[0.98]"
                  >
                    <Trash2 className="h-3.5 w-3.5" aria-hidden />
                    Clear
                  </button>
                </div>

                <div className="glass-panel flex min-h-0 flex-1 flex-col overflow-hidden rounded-2xl p-2">
                  <AnimatePresence initial={false} mode="wait">
                    {touchTool === "canvas" ? (
                      <motion.div
                        key="canvas"
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -4 }}
                        transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="flex min-h-0 flex-1 flex-col"
                      >
                        <CanvasTest resetVersion={resetCanvas} className="min-h-[200px] flex-1" />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="grid"
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -4 }}
                        transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="flex min-h-0 flex-1 flex-col"
                      >
                        <GridTest
                          cols={density.cols}
                          rows={density.rows}
                          resetVersion={resetGrid}
                          className="min-h-[200px]"
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                <p className="text-center text-[11px] text-zinc-500">
                  Drag across the full surface. Grid mode uses light haptics when a new cell registers (supported
                  devices).
                </p>
              </motion.div>
            ) : null}

            {activeMode === "display" ? (
              <motion.div
                key="display"
                variants={tabVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                className="flex min-h-0 flex-1 flex-col gap-3 overflow-y-auto"
              >
                <ColorCalibrationPalette
                  onSelect={(hex) => {
                    setEdgesOpen(false);
                    setOpenColor(hex);
                  }}
                />
              </motion.div>
            ) : null}

            {activeMode === "edges" ? (
              <motion.div
                key="edges"
                variants={tabVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                className="flex min-h-0 flex-1 flex-col justify-center"
              >
                <EdgeDetectionPanel
                  onStart={() => {
                    setOpenColor(null);
                    setEdgesOpen(true);
                  }}
                />
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>

        <footer
          className="shrink-0 px-4 pb-3 pt-1"
          style={{ paddingBottom: "max(12px, var(--safe-bottom))" }}
        >
          <p className="text-center text-[10px] text-zinc-600">
            Tempered glass &amp; touch QA · wake lock &amp; haptics where supported
          </p>
        </footer>
      </div>

      <ColorCalibration openColor={openColor} onOpenColor={setOpenColor} />
      <EdgeDetection open={edgesOpen} onOpenChange={setEdgesOpen} />
    </div>
  );
}
