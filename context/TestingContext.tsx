"use client";

import { useWakeLock } from "@/lib/hooks/useWakeLock";
import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type TestingMode = "touch" | "display" | "edges";
export type TouchTool = "canvas" | "grid";

const DEFAULT_BRIGHTNESS_HINT =
  "Increase display brightness for the most reliable calibration, edge checks, and defect detection.";

type TestingContextValue = {
  brightMode: boolean;
  setBrightMode: (value: boolean) => void;
  toggleBrightMode: () => void;
  touchTool: TouchTool;
  setTouchTool: (tool: TouchTool) => void;
  activeMode: TestingMode;
  setActiveMode: (mode: TestingMode) => void;
  brightnessHint: string | null;
  showBrightnessHint: (message?: string) => void;
  dismissBrightnessHint: () => void;
};

const TestingContext = createContext<TestingContextValue | null>(null);

export function TestingProvider({ children }: { children: ReactNode }) {
  const [brightMode, setBrightMode] = useState(false);
  const [touchTool, setTouchTool] = useState<TouchTool>("canvas");
  const [activeMode, setActiveMode] = useState<TestingMode>("touch");
  const [brightnessHint, setBrightnessHint] = useState<string | null>(null);

  useWakeLock(true);

  const toggleBrightMode = useCallback(() => {
    setBrightMode((b) => !b);
  }, []);

  const showBrightnessHint = useCallback((message?: string) => {
    setBrightnessHint(message ?? DEFAULT_BRIGHTNESS_HINT);
  }, []);

  const dismissBrightnessHint = useCallback(() => {
    setBrightnessHint(null);
  }, []);

  const value = useMemo(
    () =>
      ({
        brightMode,
        setBrightMode,
        toggleBrightMode,
        touchTool,
        setTouchTool,
        activeMode,
        setActiveMode,
        brightnessHint,
        showBrightnessHint,
        dismissBrightnessHint,
      }) satisfies TestingContextValue,
    [
      brightMode,
      toggleBrightMode,
      touchTool,
      activeMode,
      brightnessHint,
      showBrightnessHint,
      dismissBrightnessHint,
    ],
  );

  return <TestingContext.Provider value={value}>{children}</TestingContext.Provider>;
}

export function useTesting() {
  const ctx = useContext(TestingContext);
  if (!ctx) {
    throw new Error("useTesting must be used within TestingProvider");
  }
  return ctx;
}
