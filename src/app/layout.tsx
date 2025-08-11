import type React from "react";
import "./globals.css";

import ClientLayout from "./ClientLayout";
import Navbar from "@/components/shared/Menu";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="h-[2000px]">
        <Navbar />
        <ClientLayout>{children}</ClientLayout>
        <span className="hidden md:flex text-secondary hover:text-gray-700 fixed top-1/2 left-4 -translate-y-1/2 rotate-90 origin-left">
          <a
            href="mailto:mohammad.bzr82@gmail.com"
            aria-label="Email Mohammad at mohammad.bzr82@gmail.com"
          >
            mohammad.bzr82@gmail.com
          </a>
        </span>
      </body>
    </html>
  );
}
