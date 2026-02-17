import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "ClientShell — White-label client portals for professional firms",
  description: "Stop sending Google Drive links. Give your clients a branded portal that makes your 10-person firm look like a 100-person operation. Setup in 30 minutes.",
  openGraph: {
    title: "ClientShell — Look enterprise in 30 minutes",
    description: "White-label client portals for professional firms. Your brand, your domain, your clients impressed.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
