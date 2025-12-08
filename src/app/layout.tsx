import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://medsoftware.com'),
  title: {
    default: "MedSoftware - Pharmacy & Hospital Management Software",
    template: "%s | MedSoftware",
  },
  description: "MedSoftware provides powerful, affordable pharmacy and hospital management solutions for healthcare facilities across Africa. PharmaPOS for pharmacies, Hospix for hospitals.",
  keywords: [
    "pharmacy management software",
    "hospital management system",
    "PharmaPOS",
    "Hospix",
    "healthcare software Africa",
    "pharmacy POS system",
    "medical software Ghana",
    "inventory management pharmacy",
    "patient management system",
    "NHIS integration",
    "mobile money pharmacy",
    "healthcare technology",
  ],
  authors: [{ name: "MedSoftware" }],
  creator: "MedSoftware",
  publisher: "MedSoftware",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://medsoftware.com",
    siteName: "MedSoftware",
    title: "MedSoftware - Pharmacy & Hospital Management Software",
    description: "Powerful, affordable pharmacy and hospital management solutions for healthcare facilities across Africa.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "MedSoftware - Healthcare Management Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MedSoftware - Pharmacy & Hospital Management Software",
    description: "Powerful, affordable pharmacy and hospital management solutions for healthcare facilities across Africa.",
    images: ["/og-image.jpg"],
    creator: "@medsoftware",
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
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://medsoftware.com",
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
      </head>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
