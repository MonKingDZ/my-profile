"use client";

import { useEffect } from "react";

export function ScrollToHash() {
  useEffect(() => {
    if (window.location.hash !== "#contact") return;
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return null;
}
