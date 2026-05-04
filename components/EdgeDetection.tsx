"use client";

import { useTesting } from "@/context/TestingContext";
import { AnimatePresence, motion } from "framer-motion";
import { Check } from "lucide-react";

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function EdgeDetectionPanel({ onStart }: { onStart: () => void }) {
  const { showBrightnessHint } = useTesting();

  return (
    <div className="glass-panel space-y-3 rounded-2xl p-5 text-center">
      <p className="text-sm font-medium text-zinc-300">Edge-to-edge alignment</p>
      <p className="text-xs leading-relaxed text-zinc-500">
        Full-screen guide: cyan outer bezel and pink inset line. Drag along all four borders to confirm the protector
        registers at the edges.
      </p>
      <motion.button
        type="button"
        layout
        whileTap={{ scale: 0.99 }}
        onClick={() => {
          showBrightnessHint();
          onStart();
        }}
        className="w-full rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20"
      >
        Show edge overlay
      </motion.button>
    </div>
  );
}

/**
 * Fullscreen edge overlay — mount at app root so it survives tab changes.
 */
export function EdgeDetection({ open, onOpenChange }: Props) {
  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          key="edges"
          className="fixed inset-0 z-50 bg-[#0a0a0f]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            className="edge-ring"
            style={{
              margin: "var(--safe-top) var(--safe-right) var(--safe-bottom) var(--safe-left)",
            }}
            initial={{ opacity: 0.6 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.35 }}
          />
          <p
            className="pointer-events-none absolute left-0 right-0 top-0 z-[60] text-center text-xs text-cyan-200/90"
            style={{ paddingTop: "max(12px, var(--safe-top))" }}
          >
            Trace the cyan border &amp; inner dashed line
          </p>
          <motion.button
            type="button"
            onClick={() => onOpenChange(false)}
            className="glass-panel absolute left-1/2 z-[60] flex -translate-x-1/2 items-center gap-2 rounded-2xl px-5 py-2.5 text-sm font-semibold text-white"
            style={{ bottom: "max(20px, var(--safe-bottom))" }}
            initial={{ y: 16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 12, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
          >
            <Check className="h-4 w-4 opacity-90" aria-hidden />
            Done
          </motion.button>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
