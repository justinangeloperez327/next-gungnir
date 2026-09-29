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

const themeScript = `
  try {
    const storedTheme = localStorage.getItem("gungnir-theme");
    document.documentElement.dataset.theme =
      storedTheme === "light" ? "light" : "dark";
  } catch {
    document.documentElement.dataset.theme = "dark";
  }
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
