"use client";

import { useTesting } from "@/context/TestingContext";
import { useCallback, useEffect, useRef } from "react";

type Props = {
  resetVersion: number;
  className?: string;
};

export function CanvasTest({ resetVersion, className = "" }: Props) {
  const { brightMode } = useTesting();
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const drawing = useRef(false);
  const last = useRef({ x: 0, y: 0 });

  const paintBackground = useCallback(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const rect = wrap.getBoundingClientRect();
    ctx.fillStyle = brightMode
      ? "rgba(24,24,32,0.95)"
      : "rgba(12,12,18,0.92)";
    ctx.fillRect(0, 0, rect.width, rect.height);
  }, [brightMode]);

  const resize = useCallback(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const dpr = window.devicePixelRatio || 1;
    const rect = wrap.getBoundingClientRect();
    const w = Math.max(1, Math.floor(rect.width * dpr));
    const h = Math.max(1, Math.floor(rect.height * dpr));
    canvas.width = w;
    canvas.height = h;
    canvas.style.width = `${rect.width}px`;
    canvas.style.height = `${rect.height}px`;
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.scale(dpr, dpr);
    paintBackground();
  }, [paintBackground]);

  useEffect(() => {
    resize();
    const ro = new ResizeObserver(() => resize());
    if (wrapRef.current) ro.observe(wrapRef.current);
    window.addEventListener("resize", resize);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", resize);
    };
  }, [resize]);

  useEffect(() => {
    paintBackground();
  }, [paintBackground, resetVersion, brightMode]);

  const getLocalPoint = (e: React.PointerEvent | PointerEvent) => {
    const wrap = wrapRef.current!;
    const rect = wrap.getBoundingClientRect();
    return { x: e.clientX - rect.left, y: e.clientY - rect.top };
  };

  const onPointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    drawing.current = true;
    const p = getLocalPoint(e);
    last.current = p;
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!ctx) return;
    ctx.strokeStyle = brightMode
      ? "rgba(34, 211, 238, 0.95)"
      : "rgba(56, 189, 248, 0.9)";
    ctx.lineWidth = 2.5;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.beginPath();
    ctx.moveTo(p.x, p.y);
  };

  const onPointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!drawing.current) return;
    const ctx = canvasRef.current?.getContext("2d");
    if (!ctx) return;
    const p = getLocalPoint(e);
    ctx.lineTo(p.x, p.y);
    ctx.stroke();
    last.current = p;
  };

  const onPointerEnd = () => {
    drawing.current = false;
  };

  return (
    <div
      ref={wrapRef}
      className={`relative h-full min-h-[140px] touch-none-strict overflow-hidden rounded-2xl ${className}`}
    >
      <canvas
        ref={canvasRef}
        className="block h-full w-full cursor-crosshair"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerEnd}
        onPointerCancel={onPointerEnd}
        onPointerLeave={onPointerEnd}
        style={{ touchAction: "none" }}
      />
    </div>
  );
}
