import type { Metadata } from "next";
import { Eczar } from "next/font/google";
import "./globals.css";
import LocalFont from "next/font/local";

const eczar = Eczar({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
const freudian = LocalFont({
  src: "../../public/Freudian.otf",
  variable: "--font-freudian",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${eczar.className} ${freudian.variable}`}>{children}</body>
    </html>
  );
}
