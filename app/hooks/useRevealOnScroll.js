"use client";

import { useEffect } from "react";

/**
 * Hook that uses IntersectionObserver to add 'visible' class
 * to elements with '.reveal', '.reveal-left', or '.reveal-right'
 * classes when they enter the viewport.
 */
export function useRevealOnScroll() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -60px 0px",
      }
    );

    const elements = document.querySelectorAll(
      ".reveal, .reveal-left, .reveal-right"
    );
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}
