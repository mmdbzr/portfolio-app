"use client";
import { useState, useEffect } from "react";
import "./globals.css";
import Shell from "@/components/shared/Shell";
import SplashScreen from "../components/shared/SplashScreen";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">
        <SplashScreen className="absolute z-50" />
        <Shell className="absolute w-full">{children}</Shell>
      </body>
    </html>
  );
}
