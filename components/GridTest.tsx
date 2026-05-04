"use client";

import { useTesting } from "@/context/TestingContext";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

type Props = {
  cols: number;
  rows: number;
  resetVersion: number;
  className?: string;
};

function cellKey(col: number, row: number) {
  return `${col},${row}`;
}

function vibrateShort() {
  if (typeof navigator !== "undefined" && typeof navigator.vibrate === "function") {
    navigator.vibrate(12);
  }
}

export function GridTest({ cols, rows, resetVersion, className = "" }: Props) {
  const { brightMode } = useTesting();
  const wrapRef = useRef<HTMLDivElement>(null);
  const [filled, setFilled] = useState<Set<string>>(() => new Set());
  const pointerDown = useRef(false);

  useEffect(() => {
    setFilled(new Set());
  }, [resetVersion, cols, rows]);

  const total = cols * rows;
  const count = filled.size;
  const progressText = useMemo(
    () => `Cells hit: ${count} / ${total}${count === total ? " · Complete" : ""}`,
    [count, total],
  );

  const hitTest = useCallback(
    (clientX: number, clientY: number) => {
      const wrap = wrapRef.current;
      if (!wrap) return;
      const rect = wrap.getBoundingClientRect();
      const x = clientX - rect.left;
      const y = clientY - rect.top;
      if (x < 0 || y < 0 || x > rect.width || y > rect.height) return;
      const col = Math.min(cols - 1, Math.max(0, Math.floor((x / rect.width) * cols)));
      const row = Math.min(rows - 1, Math.max(0, Math.floor((y / rect.height) * rows)));
      const key = cellKey(col, row);
      setFilled((prev) => {
        if (prev.has(key)) return prev;
        vibrateShort();
        const next = new Set(prev);
        next.add(key);
        return next;
      });
    },
    [cols, rows],
  );

  const cells = useMemo(() => {
    const out: { col: number; row: number }[] = [];
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        out.push({ col: c, row: r });
      }
    }
    return out;
  }, [cols, rows]);

  const onPointerDown = (e: React.PointerEvent) => {
    pointerDown.current = true;
    hitTest(e.clientX, e.clientY);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!pointerDown.current) return;
    hitTest(e.clientX, e.clientY);
  };

  const onPointerUp = () => {
    pointerDown.current = false;
  };

  const borderMuted = brightMode ? "border-white/15" : "border-white/10";

  return (
    <div className={`flex min-h-0 flex-1 flex-col gap-2 ${className}`}>
      <p className="px-2 text-center text-xs font-medium text-cyan-300/90">{progressText}</p>
      <div
        ref={wrapRef}
        className={`relative h-full min-h-[140px] flex-1 touch-none-strict overflow-hidden rounded-2xl ${brightMode ? "bg-zinc-900/40" : "bg-black/20"}`}
        style={{ touchAction: "none" }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        onPointerLeave={onPointerUp}
      >
        <div
          className="absolute inset-0 grid h-full w-full"
          style={{
            gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
            gridTemplateRows: `repeat(${rows}, minmax(0, 1fr))`,
          }}
        >
          {cells.map(({ col, row }) => {
            const active = filled.has(cellKey(col, row));
            return (
              <div
                key={cellKey(col, row)}
                className={`box-border border ${borderMuted} transition-colors duration-75 ${active ? "grid-cell-hit" : ""}`}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
