"use client";

import { useEffect } from "react";

export function ScrollToHash() {
  useEffect(() => {
    if (window.location.hash !== "#contact") return;

    // Wait a couple of frames so GSAP ScrollTrigger's pin spacers (which
    // add extra scrollable height for the Bio hero) have settled first —
    // otherwise the jump can land short of the target.
    const raf = requestAnimationFrame(() =>
      requestAnimationFrame(() => {
        document.getElementById("contact")?.scrollIntoView({ block: "start" });
      }),
    );

    return () => cancelAnimationFrame(raf);
  }, []);

  return null;
}
