"use client";

//@ts-ignore
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Aos() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      AOS.init();
    }
  }, []);
  return null;
}
