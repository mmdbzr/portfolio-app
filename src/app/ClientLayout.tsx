"use client";
import { useState } from "react";
import type React from "react";

import Shell from "@/components/shared/Shell";
import SplashScreen from "../components/shared/SplashScreen";

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [showSplash, setShowSplash] = useState(true);

  const handleSplashComplete = () => {
    setShowSplash(false);
  };

  return (
    <>
      {showSplash && (
        <SplashScreen
          className="fixed inset-0 z-50"
          onComplete={handleSplashComplete}
        />
      )}
      <Shell className={`w-full ${showSplash ? "pointer-events-none" : ""}`}>
        {children}
      </Shell>
    </>
  );
}
