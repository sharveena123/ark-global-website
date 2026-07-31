"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

function isEligibleNavigation(event: MouseEvent): HTMLAnchorElement | null {
  if (event.defaultPrevented) return null;
  if (event.button !== 0) return null;
  if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return null;

  const target = event.target as HTMLElement | null;
  const anchor = target?.closest("a[href]") as HTMLAnchorElement | null;
  if (!anchor) return null;
  if (anchor.target === "_blank" || anchor.hasAttribute("download")) return null;

  const url = new URL(anchor.href, window.location.href);
  if (url.origin !== window.location.origin) return null;

  const current = `${window.location.pathname}${window.location.search}`;
  const next = `${url.pathname}${url.search}`;

  // Skip same-page hash jumps; keep loader for real route changes.
  if (current === next && url.hash) return null;
  if (current === next && !url.hash) return null;

  return anchor;
}

export default function GlobalRouteBuffer() {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const timerRef = useRef<number | null>(null);

  const start = () => {
    setIsLoading(true);
    setProgress(18);

    if (timerRef.current) window.clearInterval(timerRef.current);
    timerRef.current = window.setInterval(() => {
      setProgress((prev) => (prev < 85 ? prev + Math.max(1, (90 - prev) * 0.08) : prev));
    }, 140);
  };

  const complete = () => {
    if (timerRef.current) {
      window.clearInterval(timerRef.current);
      timerRef.current = null;
    }

    setProgress(100);
    window.setTimeout(() => {
      setIsLoading(false);
      setProgress(0);
    }, 220);
  };

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const anchor = isEligibleNavigation(event);
      if (!anchor) return;
      start();
    };

    const onPopState = () => start();

    document.addEventListener("click", onClick, true);
    window.addEventListener("popstate", onPopState);

    return () => {
      document.removeEventListener("click", onClick, true);
      window.removeEventListener("popstate", onPopState);
    };
  }, []);

  useEffect(() => {
    if (!isLoading) return;
    complete();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  useEffect(() => {
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none fixed inset-x-0 top-0 z-[9999] transition-opacity duration-200 ${
        isLoading ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        className="h-1 bg-gradient-to-r from-[#00AEEF] via-[#6CCEF5] to-[#00AEEF] shadow-[0_0_14px_rgba(0,174,238,0.65)]"
        style={{
          width: `${progress}%`,
          transition: "width 180ms ease-out",
        }}
      />
    </div>
  );
}
