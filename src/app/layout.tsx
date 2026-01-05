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
    // Core product keywords
    "pharmacy management software",
    "hospital management system",
    "PharmaPOS",
    "HospitalOS",
    "healthcare software",
    "pharmacy POS system",
    "medical software",
    "clinic management software",
    // Feature keywords
    "inventory management pharmacy",
    "patient management system",
    "NHIS integration",
    "mobile money pharmacy",
    "prescription management software",
    "drug interaction checker",
    "electronic health records",
    "hospital billing software",
    // Geo-targeted keywords - Africa
    "pharmacy software Ghana",
    "pharmacy software Nigeria",
    "pharmacy software Kenya",
    "hospital software Africa",
    "healthcare software Africa",
    "pharmacy POS Ghana",
    "hospital management Nigeria",
    "clinic software Kenya",
    "pharmacy software South Africa",
    "hospital software Tanzania",
    "healthcare software Uganda",
    // Geo-targeted keywords - Middle East
    "pharmacy software UAE",
    "hospital software Dubai",
    "healthcare software Middle East",
    // Long-tail keywords
    "affordable pharmacy software",
    "best pharmacy management software",
    "pharmacy software with mobile money",
    "offline pharmacy software",
    "hospital software with laboratory module",
    "pharmacy software MTN mobile money",
    "NHIS pharmacy software Ghana",
    "healthcare technology Africa",
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
        {/* Preconnect to external resources for faster loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://translate.googleapis.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />

        {/* Favicons and PWA */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />

        {/* Theme color for mobile browsers */}
        <meta name="theme-color" content="#166534" />
        <meta name="msapplication-TileColor" content="#166534" />

        {/* Additional SEO meta tags */}
        <meta name="application-name" content="MedSoftwares" />
        <meta name="apple-mobile-web-app-title" content="MedSoftwares" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="mobile-web-app-capable" content="yes" />

        {/* Geo targeting for African and Middle East markets */}
        <meta name="geo.region" content="GB" />
        <meta name="geo.placename" content="Frinton-On-Sea" />
        <meta name="geo.position" content="51.8528;1.2344" />
        <meta name="ICBM" content="51.8528, 1.2344" />

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
