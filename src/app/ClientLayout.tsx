"use client";
import { useEffect, useState } from "react";
import type React from "react";

import Shell from "@/components/shared/Shell";
import SplashScreen from "../components/shared/SplashScreen";

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [showSplash, setShowSplash] = useState(true);

  // اگه توی این session قبلاً دیده شده، دیگه نشون نده
  useEffect(() => {
    try {
      if (sessionStorage.getItem("splash-seen")) setShowSplash(false);
    } catch {}
  }, []);

  const handleSplashComplete = () => {
    try {
      sessionStorage.setItem("splash-seen", "1");
    } catch {}
    setShowSplash(false);
  };

  return (
    <>
      {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
      <Shell className={`w-full ${showSplash ? "pointer-events-none" : ""}`}>
        {children}
      </Shell>
    </>
  );
}
