import type { Metadata } from "next";
import "./styles/globals.css";
import Providers from "@/components/Providers";
import { Roboto } from "next/font/google";

export const metadata: Metadata = {
  title: "Rosies E-Commerce",
  description: "Rosies brings nature to your doorstep. Explore vibrant flowers, expert plant care tips, and fast delivery—all in one beautifully designed app.",
};

const roboto = Roboto({
  subsets: ["latin"], // ✅ required
  weight: ["400"], // (optional) if you want specific font weights
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="shortcut icon"
          href="./assets/images/logo.svg"
          type="image/x-icon"
        />
      </head>
      <body className={roboto.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
