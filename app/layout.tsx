import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Gungnir Framework",
    template: "%s | Gungnir",
  },
  description:
    "Gungnir is a modern C++ web framework focused on expressive syntax, strong performance, and developer-friendly conventions.",
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
