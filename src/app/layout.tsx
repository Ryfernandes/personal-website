import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ryan Fernandes",
  description: "Software engineer and builder. Explore my projects, experience, and more.",
  icons: {
    icon: "/ryan-github-profile-picture.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
