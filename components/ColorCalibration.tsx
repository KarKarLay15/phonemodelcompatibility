"use client";

import { useTesting } from "@/context/TestingContext";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

type Props = {
  openColor: string | null;
  onOpenColor: (hex: string | null) => void;
};

const COLORS: { label: string; hex: string; className: string }[] = [
  { label: "White", hex: "#ffffff", className: "bg-white text-zinc-900" },
  { label: "Black", hex: "#000000", className: "bg-zinc-950 text-white" },
  { label: "Red", hex: "#dc2626", className: "bg-red-600 text-white" },
  { label: "Green", hex: "#16a34a", className: "bg-green-600 text-white" },
  { label: "Blue", hex: "#2563eb", className: "bg-blue-600 text-white" },
];

export function ColorCalibrationPalette({ onSelect }: { onSelect: (hex: string) => void }) {
  const { showBrightnessHint } = useTesting();

  return (
    <>
      <div className="glass-panel rounded-2xl p-3">
        <p className="mb-2 text-[11px] uppercase tracking-wider text-zinc-500">
          Solid fill — bubble &amp; dust check
        </p>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-5">
          {COLORS.map((c) => (
            <button
              key={c.hex}
              type="button"
              onClick={() => {
                showBrightnessHint();
                onSelect(c.hex);
              }}
              className={`rounded-xl border border-white/10 py-3 text-xs font-semibold transition duration-150 active:scale-[0.98] sm:py-3 ${c.className} ${c.label === "Blue" ? "col-span-2 sm:col-span-1" : ""}`}
            >
              {c.label}
            </button>
          ))}
        </div>
      </div>
      <p className="text-center text-[11px] text-zinc-500">
        Tap a color for fullscreen. Swipe right or use Exit to return.
      </p>
    </>
  );
}

/**
 * Fullscreen solid color overlay — mount at app root so it survives tab changes.
 */
export function ColorCalibration({ openColor, onOpenColor }: Props) {
  const close = () => onOpenColor(null);
  const exitLightText = openColor && openColor.toLowerCase() !== "#ffffff";

  return (
    <AnimatePresence>
      {openColor ? (
        <motion.div
          key="calib"
          className="fixed inset-0 z-50 flex flex-col"
          role="dialog"
          aria-modal="true"
          aria-label="Calibration color"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            className="h-full w-full flex-1"
            style={{ backgroundColor: openColor }}
            initial={{ scale: 1.02 }}
            animate={{ scale: 1 }}
            exit={{ scale: 1.01 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          />
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"
            aria-hidden
          />
          <div
            className="absolute bottom-0 left-0 right-0 flex justify-center p-4"
            style={{ paddingBottom: "max(16px, var(--safe-bottom))" }}
          >
            <motion.button
              type="button"
              onClick={close}
              layout
              initial={{ y: 12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 8, opacity: 0 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              className={`glass-panel flex items-center gap-2 rounded-2xl px-6 py-3 text-sm font-semibold animate-pulse-soft ${exitLightText ? "text-white" : "text-zinc-900"}`}
            >
              <X className="h-4 w-4 opacity-80" aria-hidden />
              Exit · Back to app
            </motion.button>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
