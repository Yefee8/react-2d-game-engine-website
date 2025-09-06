"use client";

import { useEffect, useRef } from "react";

const sections = ["entry", "fast", "easy-to-use", "open-source", "create"];
const SCROLL_THRESHOLD = 50; // minimum kaydırma mesafesi
const SNAP_COOLDOWN = 700; // ms, animasyon süresi

export default function ScrollHelper() {
  const isSnapping = useRef(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    const handleScroll = () => {
      if (isSnapping.current) return;

      const currentY = window.scrollY;
      const diff = currentY - lastScrollY.current;

      // Küçük kaydırmaları yok say
      if (Math.abs(diff) < SCROLL_THRESHOLD) return;

      const currentIndex = getClosestSectionIndex();
      if (currentIndex === -1) return;

      let nextIndex = currentIndex;
      if (diff > 0) {
        // aşağı kaydırma
        nextIndex = Math.min(currentIndex + 1, sections.length - 1);
      } else if (diff < 0) {
        // yukarı kaydırma
        nextIndex = Math.max(currentIndex - 1, 0);
      }

      if (nextIndex !== currentIndex) {
        isSnapping.current = true;

        document
          .getElementById(sections[nextIndex])
          ?.scrollIntoView({ behavior: "smooth" });

        setTimeout(() => {
          isSnapping.current = false;
          lastScrollY.current = window.scrollY; // yeni pozisyonu referans al
        }, SNAP_COOLDOWN);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const getClosestSectionIndex = () => {
    const scrollPos = window.scrollY;
    let closestIndex = -1;
    let minDiff = Infinity;

    sections.forEach((id, index) => {
      const el = document.getElementById(id);
      if (!el) return;
      const offset = el.offsetTop;
      const diff = Math.abs(scrollPos - offset);
      if (diff < minDiff) {
        minDiff = diff;
        closestIndex = index;
      }
    });

    return closestIndex;
  };

  return null;
}
