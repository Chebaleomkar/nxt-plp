import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { BASE_URL } from "../constant";
import Header from "../components/Header";
import Footer from "../components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "NxtWave | Product Listing",
  description: "Discover our extensive collection of high-quality products at NxtWave. Browse through our carefully curated selection of items with detailed descriptions, ratings, and competitive prices.",
  keywords: ["products", "online shopping", "e-commerce", "NxtWave", "product listing", "online store"],
  authors: [{ name: "NxtWave" }],
  creator: "NxtWave",
  publisher: "NxtWave",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "NxtWave | Product Listing",
    description: "Discover our extensive collection of high-quality products at NxtWave. Browse through our carefully curated selection of items.",
    url: BASE_URL,
    siteName: 'NxtWave',
    images: [
      {
        url: '/images/product_listing.png',
        width: 1200,
        height: 630,
        alt: 'NxtWave Product Listing',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "NxtWave | Product Listing",
    description: "Discover our extensive collection of high-quality products at NxtWave",
    images: ['/images/product_listing.png'],
    creator: '@nxtwave',
    site: '@nxtwave',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
