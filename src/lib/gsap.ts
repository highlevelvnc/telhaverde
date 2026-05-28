"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

declare global {
  interface Window {
    __telhaverdeGsapRegistered?: boolean;
  }
}

if (typeof window !== "undefined" && !window.__telhaverdeGsapRegistered) {
  gsap.registerPlugin(ScrollTrigger);
  gsap.defaults({ ease: "power3.out", duration: 0.9 });
  window.__telhaverdeGsapRegistered = true;
}

export { gsap, ScrollTrigger };
