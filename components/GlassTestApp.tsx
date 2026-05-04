"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Maximize,
  Grid3X3,
  Palette,
  Layers,
  RotateCcw,
  X,
  CheckCircle2,
  Smartphone,
  Info,
  Search,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";
import { useWakeLock } from "@/lib/hooks/useWakeLock";
import { CompatibilityChecker } from "@/components/CompatibilityChecker";

type Mode = "home" | "canvas" | "grid" | "display" | "edges";

type MenuButtonProps = {
  icon: React.ReactNode;
  title: string;
  desc: string;
  onClick: () => void;
};

function MenuButton({ icon, title, desc, onClick }: MenuButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex w-full items-center gap-4 rounded-2xl border border-white/10 bg-zinc-900/50 p-4 text-left backdrop-blur-xl transition-all hover:bg-zinc-800/80 active:scale-[0.98]"
    >
      <div className="rounded-xl bg-white/5 p-3">{icon}</div>
      <div>
        <h3 className="font-semibold">{title}</h3>
        <p className="text-xs text-zinc-500">{desc}</p>
      </div>
    </button>
  );
}

export default function GlassTestApp() {
  const [mode, setMode] = useState<Mode>("home");
  const [brightMode, setBrightMode] = useState(false);

  useWakeLock(true);

  const shellText = brightMode ? "text-zinc-900" : "text-white";
  const shellBg = brightMode ? "bg-zinc-100" : "bg-black";

  return (
    <div
      className={`min-h-dvh overflow-x-hidden overflow-y-auto transition-colors duration-500 ${shellBg} ${shellText}`}
    >
      <AnimatePresence mode="wait">
        {mode === "home" && (
          <motion.div
            key="home"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="mx-auto max-w-md p-6 pt-16"
            style={{ paddingTop: "max(4rem, var(--safe-top))" }}
          >
            <header className="mb-10 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-tr from-cyan-500 to-blue-600 shadow-lg shadow-cyan-500/20">
                <Smartphone size={32} className="text-white" />
              </div>
              <h1 className="mb-2 text-3xl font-bold tracking-tight">KKTech Screen QA</h1>
              <p className={`text-sm ${brightMode ? "text-zinc-600" : "text-zinc-400"}`}>
                Tempered Glass &amp; Display Quality Tool
              </p>
            </header>

            <div className="grid gap-4">
              <MenuButton
                icon={<Maximize className="text-cyan-400" />}
                title="Touch Sensitivity"
                desc="Free drawing to find dead zones"
                onClick={() => setMode("canvas")}
              />
              <MenuButton
                icon={<Grid3X3 className="text-emerald-400" />}
                title="Grid Precision"
                desc="Check corner-to-corner response"
                onClick={() => setMode("grid")}
              />
              <MenuButton
                icon={<Palette className="text-purple-400" />}
                title="Display Calibration"
                desc="Check for bubbles, dust & pixels"
                onClick={() => setMode("display")}
              />
              <MenuButton
                icon={<Layers className="text-pink-400" />}
                title="Edge Alignment"
                desc="Verify screen protector borders"
                onClick={() => setMode("edges")}
              />
            </div>

            <CompatibilityChecker brightMode={brightMode} />

            <Link
              href="/compatibility"
              className={`mt-6 flex w-full items-center gap-4 rounded-2xl border p-4 transition-all active:scale-[0.98] ${
                brightMode
                  ? "border-cyan-600/25 bg-cyan-50/90 hover:bg-cyan-100/90"
                  : "border-cyan-500/25 bg-cyan-500/5 hover:border-cyan-500/40 hover:bg-cyan-500/10"
              }`}
            >
              <div
                className={`rounded-xl p-3 ${brightMode ? "bg-cyan-100 text-cyan-700" : "bg-white/5 text-cyan-400"}`}
              >
                <Search size={20} aria-hidden />
              </div>
              <div className="min-w-0 flex-1 text-left">
                <h3 className="font-semibold">KKTech Compatibility</h3>
                <p className={`text-xs ${brightMode ? "text-zinc-600" : "text-zinc-500"}`}>
                  Full database search &amp; animated results
                </p>
              </div>
              <ChevronRight className={`shrink-0 ${brightMode ? "text-zinc-500" : "text-zinc-500"}`} aria-hidden />
            </Link>

            <footer className="mt-8" style={{ paddingBottom: "max(1.5rem, var(--safe-bottom))" }}>
              <button
                type="button"
                onClick={() => setBrightMode(!brightMode)}
                className={`flex w-full items-center justify-center gap-2 rounded-xl border py-4 backdrop-blur-md transition-all ${
                  brightMode
                    ? "border-zinc-300 bg-white/80 hover:bg-white"
                    : "border-white/10 bg-white/5 hover:bg-white/10"
                }`}
              >
                <Info size={18} />
                <span>{brightMode ? "Switch to Dark UI" : "Switch to High Contrast"}</span>
              </button>
            </footer>
          </motion.div>
        )}

        {mode === "canvas" && <CanvasTest brightMode={brightMode} onExit={() => setMode("home")} />}
        {mode === "grid" && <GridTest onExit={() => setMode("home")} />}
        {mode === "display" && <DisplayTest onExit={() => setMode("home")} />}
        {mode === "edges" && <EdgeTest onExit={() => setMode("home")} />}
      </AnimatePresence>
    </div>
  );
}

function CanvasTest({ brightMode, onExit }: { brightMode: boolean; onExit: () => void }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const drawing = useRef(false);
  const lastPoint = useRef<{ x: number; y: number } | null>(null);

  const resize = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const dpr = window.devicePixelRatio || 1;
    const w = window.innerWidth;
    const h = window.innerHeight;
    canvas.width = Math.floor(w * dpr);
    canvas.height = Math.floor(h * dpr);
    canvas.style.width = `${w}px`;
    canvas.style.height = `${h}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.fillStyle = brightMode ? "rgb(244 244 245)" : "rgb(0 0 0)";
    ctx.fillRect(0, 0, w, h);
    ctx.strokeStyle = "#22d3ee";
    ctx.lineWidth = 3;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    lastPoint.current = null;
  }, [brightMode]);

  useEffect(() => {
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, [resize]);

  const getPoint = (clientX: number, clientY: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: clientX, y: clientY };
    const r = canvas.getBoundingClientRect();
    return { x: clientX - r.left, y: clientY - r.top };
  };

  const startStroke = (clientX: number, clientY: number) => {
    drawing.current = true;
    const p = getPoint(clientX, clientY);
    lastPoint.current = p;
    const ctx = canvasRef.current?.getContext("2d");
    if (!ctx) return;
    ctx.beginPath();
    ctx.moveTo(p.x, p.y);
  };

  const extendStroke = (clientX: number, clientY: number) => {
    if (!drawing.current) return;
    const ctx = canvasRef.current?.getContext("2d");
    if (!ctx || !lastPoint.current) return;
    const p = getPoint(clientX, clientY);
    ctx.lineTo(p.x, p.y);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(p.x, p.y);
    lastPoint.current = p;
  };

  const endStroke = () => {
    drawing.current = false;
    lastPoint.current = null;
    canvasRef.current?.getContext("2d")?.beginPath();
  };

  const clear = () => {
    resize();
  };

  return (
    <motion.div
      key="canvas"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 touch-none bg-black"
    >
      <canvas
        ref={canvasRef}
        className="block h-full w-full"
        style={{ touchAction: "none" }}
        onPointerDown={(e) => {
          e.currentTarget.setPointerCapture(e.pointerId);
          startStroke(e.clientX, e.clientY);
        }}
        onPointerMove={(e) => extendStroke(e.clientX, e.clientY)}
        onPointerUp={endStroke}
        onPointerCancel={endStroke}
      />
      <div
        className="pointer-events-none absolute left-6 right-6 top-6 flex justify-between"
        style={{ top: "max(1.5rem, var(--safe-top))" }}
      >
        <button
          type="button"
          onClick={onExit}
          className="pointer-events-auto rounded-full border border-white/20 bg-white/10 p-3 backdrop-blur-md"
        >
          <X size={20} />
        </button>
        <button
          type="button"
          onClick={clear}
          className="pointer-events-auto rounded-full border border-white/20 bg-white/10 p-3 backdrop-blur-md"
        >
          <RotateCcw size={20} />
        </button>
      </div>
    </motion.div>
  );
}

const GRID_ROWS = 18;
const GRID_COLS = 10;

function GridTest({ onExit }: { onExit: () => void }) {
  const total = GRID_ROWS * GRID_COLS;
  const [filled, setFilled] = useState<Set<number>>(() => new Set());

  const handleTouch = useCallback((index: number) => {
    setFilled((prev) => {
      if (prev.has(index)) return prev;
      if (typeof navigator !== "undefined" && typeof navigator.vibrate === "function") {
        navigator.vibrate(10);
      }
      const next = new Set(prev);
      next.add(index);
      return next;
    });
  }, []);

  return (
    <motion.div
      key="grid"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 flex touch-none flex-col bg-zinc-950"
      style={{ paddingTop: "var(--safe-top)" }}
    >
      <div className="flex items-center justify-between bg-zinc-900/80 px-6 py-4 backdrop-blur-md">
        <button type="button" onClick={onExit} className="text-zinc-400">
          Exit
        </button>
        <div className="font-mono text-xs uppercase tracking-widest">
          Cells: {filled.size} / {total}
        </div>
        {filled.size === total ? (
          <CheckCircle2 className="text-emerald-500" aria-hidden />
        ) : (
          <div className="w-5" aria-hidden />
        )}
      </div>
      <div
        className="grid flex-1 gap-px bg-white/5"
        style={{ gridTemplateColumns: `repeat(${GRID_COLS}, minmax(0, 1fr))` }}
        onTouchMove={(e) => {
          const t = e.touches[0];
          if (!t) return;
          const el = document.elementFromPoint(t.clientX, t.clientY);
          const idx = el?.getAttribute("data-idx");
          if (idx != null) handleTouch(parseInt(idx, 10));
        }}
      >
        {Array.from({ length: total }).map((_, i) => (
          <button
            key={i}
            type="button"
            data-idx={i}
            onMouseEnter={() => handleTouch(i)}
            onTouchStart={() => handleTouch(i)}
            className={`min-h-0 min-w-0 transition-colors duration-200 ${
              filled.has(i) ? "bg-emerald-500/40" : "bg-black"
            }`}
            aria-label={`Cell ${i + 1}`}
          />
        ))}
      </div>
    </motion.div>
  );
}

function DisplayTest({ onExit }: { onExit: () => void }) {
  const colors = ["#FFFFFF", "#000000", "#FF0000", "#00FF00", "#0000FF"];
  const [index, setIndex] = useState(0);

  return (
    <motion.div
      key="display"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 flex items-center justify-center transition-colors duration-300"
      style={{ backgroundColor: colors[index] }}
      role="presentation"
      onClick={() => setIndex((i) => (i + 1) % colors.length)}
    >
      <div
        className="absolute left-6 right-6 top-6 flex items-center justify-between mix-blend-difference"
        style={{ top: "max(1.5rem, var(--safe-top))" }}
      >
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onExit();
          }}
          className="rounded-full border border-white/20 bg-white/20 p-3"
        >
          <X size={20} />
        </button>
        <span className="text-xs font-bold uppercase tracking-tighter text-white">Tap to cycle colors</span>
      </div>
    </motion.div>
  );
}

function EdgeTest({ onExit }: { onExit: () => void }) {
  return (
    <motion.div
      key="edges"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black"
    >
      <div
        className="pointer-events-none absolute inset-0 animate-pulse border-[3px] border-dashed border-cyan-500"
        style={{
          margin: "var(--safe-top) var(--safe-right) var(--safe-bottom) var(--safe-left)",
        }}
      />
      <div
        className="pointer-events-none absolute border border-pink-500/50"
        style={{
          top: "calc(1rem + var(--safe-top))",
          left: "calc(1rem + var(--safe-left))",
          right: "calc(1rem + var(--safe-right))",
          bottom: "calc(1rem + var(--safe-bottom))",
        }}
      />

      <div
        className="absolute left-6 right-6 top-6 flex justify-end"
        style={{ top: "max(1.5rem, var(--safe-top))" }}
      >
        <button
          type="button"
          onClick={onExit}
          className="rounded-full border border-white/20 bg-white/10 p-3 backdrop-blur-md"
        >
          <X size={20} />
        </button>
      </div>

      <div className="pointer-events-none absolute inset-0 flex items-center justify-center p-6">
        <div
          className="pointer-events-auto max-w-[250px] rounded-2xl border border-white/10 bg-black/50 p-6 text-center backdrop-blur-xl"
          onClick={(e) => e.stopPropagation()}
          role="dialog"
          aria-labelledby="edge-title"
        >
          <p id="edge-title" className="text-sm font-medium">
            Check Alignment
          </p>
          <p className="mt-2 text-xs text-zinc-500">
            Ensure the dashed cyan line is visible at every edge of your screen.
          </p>
          <button
            type="button"
            className="mt-4 rounded-full bg-white px-6 py-2 text-xs font-bold text-black"
            onClick={onExit}
          >
            Got it
          </button>
        </div>
      </div>
    </motion.div>
  );
}
