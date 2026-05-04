"use client";

import { useEffect, useRef } from "react";

/**
 * Keeps the screen awake while `enabled` and the document is visible.
 * Re-requests after visibility changes (browser requirement).
 */
export function useWakeLock(enabled: boolean) {
  const sentinelRef = useRef<WakeLockSentinel | null>(null);

  useEffect(() => {
    if (typeof navigator === "undefined" || !("wakeLock" in navigator)) {
      return;
    }

    let cancelled = false;

    const release = async () => {
      const s = sentinelRef.current;
      sentinelRef.current = null;
      if (s) {
        try {
          await s.release();
        } catch {
          /* ignore */
        }
      }
    };

    const request = async () => {
      if (!enabled || document.visibilityState !== "visible") {
        await release();
        return;
      }
      try {
        await release();
        const sentinel = await navigator.wakeLock.request("screen");
        if (cancelled) {
          await sentinel.release().catch(() => {});
          return;
        }
        sentinelRef.current = sentinel;
        sentinel.addEventListener("release", () => {
          if (sentinelRef.current === sentinel) sentinelRef.current = null;
        });
      } catch {
        /* permission unsupported or denied */
      }
    };

    void request();

    const onVisibility = () => {
      void request();
    };

    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      cancelled = true;
      document.removeEventListener("visibilitychange", onVisibility);
      void release();
    };
  }, [enabled]);
}
