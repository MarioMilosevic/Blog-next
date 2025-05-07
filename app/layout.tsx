import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Navigation from "@/components/Navigation";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["500"],
});

export const metadata: Metadata = {
  title: "Blog-next",
  description: "Blog next app for practising next js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
