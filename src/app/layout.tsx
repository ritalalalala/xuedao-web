import type { Metadata } from "next";
import { Roboto } from "next/font/google";

import Footer from "@/components/Footer";
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
        <div className="flex min-h-screen flex-col py-12">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
