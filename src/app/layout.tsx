import type React from "react";
import "./globals.css";

import ClientLayout from "./ClientLayout";
import Navbar from "@/components/shared/NavBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">
        <Navbar />
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
