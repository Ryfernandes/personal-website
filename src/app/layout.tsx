import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ryan Fernandes | Yale CS",
  description: "You'll love this website almost as much as I love Justin Bieber",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

const inter = Inter({ subsets: ["latin"] });

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en" className={inter.className}>
      <body>{children}</body>
    </html>
  )
}

export default RootLayout;