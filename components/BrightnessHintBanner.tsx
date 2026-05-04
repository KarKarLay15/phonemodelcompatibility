"use client";

import { useTesting } from "@/context/TestingContext";
import { AnimatePresence, motion } from "framer-motion";
import { SunMedium, X } from "lucide-react";

export function BrightnessHintBanner() {
  const { brightnessHint, dismissBrightnessHint } = useTesting();

  return (
    <AnimatePresence>
      {brightnessHint ? (
        <motion.div
          key="hint"
          role="status"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
          className="pointer-events-auto px-4 pt-1"
        >
          <div className="glass-panel flex items-start gap-3 rounded-2xl p-3 pr-2">
            <div className="mt-0.5 shrink-0 rounded-xl bg-amber-500/15 p-2 text-amber-200">
              <SunMedium className="h-4 w-4" aria-hidden />
            </div>
            <p className="min-w-0 flex-1 text-xs leading-relaxed text-zinc-200">{brightnessHint}</p>
            <button
              type="button"
              onClick={dismissBrightnessHint}
              className="shrink-0 rounded-lg p-2 text-zinc-400 transition hover:bg-white/5 hover:text-white"
              aria-label="Dismiss brightness hint"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
