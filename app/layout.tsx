import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Gungnir Framework",
    template: "%s | Gungnir",
  },
  description:
    "Gungnir is an expressive web framework built in C++ for routing, controllers, models, validation, views, middleware, authentication, background jobs, and application services.",
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
