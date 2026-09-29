import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Gungnir Framework",
    template: "%s | Gungnir",
  },
  description:
    "Gungnir is a C++23 web framework and source-language toolchain for building structured web applications with expressive application code and native C++ interoperability.",
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
