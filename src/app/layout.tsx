import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import FloatingContact from "@/components/FloatingContact";
import CookiesBanner from "@/components/CookiesBanner";
import StructuredData from "@/components/StructuredData";
import GoogleAnalytics from "@/components/GoogleAnalytics";

export const metadata: Metadata = {
  metadataBase: new URL('https://medsoftwares.com'),
  title: {
    default: "MedSoftwares - Pharmacy & Hospital Management Software",
    template: "%s | MedSoftwares",
  },
  description: "MedSoftwares provides powerful, affordable pharmacy and hospital management solutions for healthcare facilities worldwide. PharmaPOS for pharmacies, HospitalOS for hospitals.",
  keywords: [
    "pharmacy management software",
    "hospital management system",
    "PharmaPOS",
    "HospitalOS",
    "healthcare software",
    "pharmacy POS system",
    "medical software",
    "inventory management pharmacy",
    "patient management system",
    "NHIS integration",
    "mobile money pharmacy",
    "healthcare technology",
  ],
  authors: [{ name: "MedSoftwares" }],
  creator: "MedSoftwares",
  publisher: "MedSoftwares",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://medsoftwares.com",
    siteName: "MedSoftwares",
    title: "MedSoftwares - Pharmacy & Hospital Management Software",
    description: "Powerful, affordable pharmacy and hospital management solutions for healthcare facilities worldwide.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "MedSoftwares - Healthcare Management Made Simple",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MedSoftwares - Pharmacy & Hospital Management Software",
    description: "Powerful, affordable pharmacy and hospital management solutions for healthcare facilities worldwide.",
    images: ["/og.png"],
    creator: "@medsoftwares",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "EoIATOlVhBXQEgfBrt9dAFYhNP1tb1WSPmwE8W1JqA8",
  },
  alternates: {
    canonical: "https://medsoftwares.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <StructuredData />
      </head>
      <body className="font-sans antialiased">
        <GoogleAnalytics />
        <Header />
        {children}
        <FloatingContact />
        <CookiesBanner />
      </body>
    </html>
  );
}
