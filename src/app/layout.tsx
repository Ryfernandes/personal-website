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
      <head>
        <link rel="preload" href="/moose_silhouette_logo.svg" as="image" type="image/svg+xml" />
        <link rel="preload" href="/frederick.jpeg" as="image" />
        <link rel="preload" href="/ryan-github-profile-picture.jpg" as="image" />
      </head>
      <body>{children}</body>
    </html>
  );
}
