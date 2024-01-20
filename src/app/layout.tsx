import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Link from "next/link";

import Header from "@/components/Header";

import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Xue DAO",
  description: "Xue DAO, a student-run DAO for students.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <div className="flex min-h-screen flex-col py-24">
          <Header />
          {children}
          <footer className="flex w-full shrink-0 flex-col items-center gap-2 border-t px-4 py-6 sm:flex-row md:px-6">
            <p className="text-xs text-gray-500 dark:text-gray-400">
              © 2024 XueDAO. All rights reserved.
            </p>
            <nav className="flex gap-4 sm:ml-auto sm:gap-6">
              <Link
                className="text-xs underline-offset-4 hover:underline"
                href="#"
              >
                Terms of Service
              </Link>
              <Link
                className="text-xs underline-offset-4 hover:underline"
                href="#"
              >
                Privacy
              </Link>
            </nav>
          </footer>
        </div>
      </body>
    </html>
  );
}
