import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], 
  variable: "--font-raleway",
});

export const metadata: Metadata = {
  title: "Customize Your Pet Tee!",
  description: "Customize Your Pet Tee",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${raleway.variable}`}>{children}</body>
    </html>
  );
}
