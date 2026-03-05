import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Zawiah's Collection | Preloved Luxury Handbags",
  description:
    "Curated preloved luxury handbags by Zawiah. Authentic pieces from Louis Vuitton, Gucci, Chanel, and more. Contact via WhatsApp to shop.",
  keywords: "preloved handbag, luxury bag malaysia, LV, Gucci, Chanel, second hand bag",
  openGraph: {
    title: "Zawiah's Collection | Preloved Luxury Handbags",
    description: "Curated preloved luxury handbags. Shop via WhatsApp.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
