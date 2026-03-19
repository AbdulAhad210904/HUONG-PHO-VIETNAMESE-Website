import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://huongpho.com.sg"),
  title: "Huong Pho Vietnamese - Authentic Vietnamese Restaurant in Singapore",
  description: "Huong Pho Vietnamese Pte. Ltd. — an authentic Vietnamese restaurant in Singapore serving traditional Pho, noodle dishes, and a full restaurant dining experience. Located at 121 Carpmael Road, Singapore 429977.",
  keywords: ["Vietnamese restaurant Singapore", "Pho Singapore", "Huong Pho", "Vietnamese noodles", "authentic Vietnamese food", "121 Carpmael Road", "Singapore restaurant", "Vietnamese cuisine"],
  authors: [{ name: "Huong Pho Vietnamese Pte. Ltd." }],
  creator: "Huong Pho Vietnamese Pte. Ltd.",
  publisher: "Huong Pho Vietnamese Pte. Ltd.",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://huongpho.com.sg",
    siteName: "Huong Pho Vietnamese",
    title: "Huong Pho Vietnamese - Authentic Vietnamese Restaurant in Singapore",
    description: "Traditional Vietnamese Pho and noodle dishes served fresh in Singapore. Visit us at 121 Carpmael Road, Singapore 429977.",
    images: [
      {
        url: "/food/Image1.jpeg",
        width: 800,
        height: 600,
        alt: "Huong Pho Vietnamese Restaurant",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Huong Pho Vietnamese - Authentic Vietnamese Restaurant",
    description: "Traditional Vietnamese Pho and noodle dishes, served fresh in Singapore.",
    images: ["/food/Image1.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
