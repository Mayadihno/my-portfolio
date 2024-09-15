"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export const AOSInit = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-quad",
      duration: 3000,
      delay: 300,
    });
  }, []);

  return <>{children}</>;
};