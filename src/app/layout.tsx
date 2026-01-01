import type { Metadata } from "next";
import { Poppins, Rubik } from "next/font/google";
import "./globals.css";

const fontSans = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins-face",
  weight: ["400", "500", "600", "700"],
});

const fontRubik = Rubik({
  subsets: ["latin"],
  variable: "--font-rubik-face",
  weight: ["400", "600", "700", "800"],
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
    <html lang="en" className={`${fontSans.variable} ${fontRubik.variable}`}>
      <body className="font-sans">
        {children}
      </body>
    </html>
  );
}
