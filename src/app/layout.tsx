import type React from "react";
import "./globals.css";
import ClientLayout from "./ClientLayout";
import Navbar from "@/components/shared/Menu";
import { Footer } from "@/components/shared/footer";
import type { Metadata } from "next";
import { Anton, Roboto } from "next/font/google";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-anton",
});

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Mohammad Bozorgmehr | Front-end Developer",
  description:
    "Portfolio of Mohammad Bozorgmehr, front-end developer specializing in Next.js, React and TypeScript.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${anton.variable} ${roboto.variable}`}>
      <body className="">
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
        <Footer />
      </body>
    </html>
  );
}
