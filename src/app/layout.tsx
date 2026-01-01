import type { Metadata } from "next";
import { Poppins, Rubik } from "next/font/google";
import "./globals.css";

const fontSans = Poppins({
  weight: "400",
  subsets: ["latin"],
});

const fontRubik = Rubik({
  weight: "700",
  subsets: ["latin"],
  variable: "--font-rubik",
});

export const metadata: Metadata = {
  title: "HUSH Timer",
  description: "A timer to keep you focused.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fontSans.className} ${fontRubik.variable}`}>
        {children}
      </body>
    </html>
  );
}
