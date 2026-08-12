import type { Metadata } from 'next';
import { Poppins, Rubik } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { Navbar } from '@/components/ui/Navbar';
import { TooltipProvider } from '@/components/ui/tooltip';

const fontSans = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins-face',
  weight: ['400', '500', '600', '700'],
});

const fontRubik = Rubik({
  subsets: ['latin'],
  variable: '--font-rubik-face',
  weight: ['400', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: 'HUSH Timer',
  description: 'Modern & feature-rich 1v1 cubing app',
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fontSans.variable} ${fontRubik.variable}`}
      suppressHydrationWarning
    >
      <body className="font-sans">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <TooltipProvider>
            <Navbar />
            {children}
          </TooltipProvider>
        </ThemeProvider>
        <Script
          data-name="BMC-Widget"
          data-cfasync="false"
          src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js"
          data-id="ricky9667"
          data-description="Support me on Buy me a coffee!"
          data-message=""
          data-color="#FBDD02"
          data-position="Right"
          data-x_margin="18"
          data-y_margin="18"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
