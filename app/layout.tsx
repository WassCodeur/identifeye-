import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";

import "./globals.css";

const fira = Fira_Code({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "IdentifEye",
  description: "IdentifEye",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="mytheme">
      <body className={`${fira.className}`}>{children}</body>
    </html>
  );
}
