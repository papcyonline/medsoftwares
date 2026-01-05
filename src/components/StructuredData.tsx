export default function StructuredData() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'MedSoftwares',
    alternateName: 'Medsoftwares',
    url: 'https://medsoftwares.com',
    logo: 'https://medsoftwares.com/logo.png',
    description: 'AI-powered healthcare software solutions for pharmacies and hospitals worldwide.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '21 Chartfield Drive, Kirby-Le-Soken',
      addressLocality: 'Frinton-On-Sea',
      addressRegion: 'Essex',
      postalCode: 'CO13 0DR',
      addressCountry: 'GB',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+971-567-726-6520',
      contactType: 'sales',
      email: 'info@medsoftwares.com',
      availableLanguage: ['English'],
    },
    sameAs: [
      'https://facebook.com/medsoftwares',
      'https://x.com/medsoftwares',
      'https://linkedin.com/company/medsoftwares',
      'https://instagram.com/medsoftwares',
      'https://youtube.com/@medsoftwares',
    ],
    parentOrganization: {
      '@type': 'Organization',
      name: 'Papcy',
      url: 'https://papcy.com',
    },
  };

  const pharmaPOSSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'PharmaPOS',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Windows, Web',
    description: 'Complete pharmacy management and point-of-sale system with inventory tracking, prescription management, and mobile money integration.',
    url: 'https://medsoftwares.com/pharmapos',
    provider: {
      '@type': 'Organization',
      name: 'MedSoftwares',
      url: 'https://medsoftwares.com',
    },
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      description: 'Free demo available',
    },
    featureList: [
      'Point of Sale',
      'Inventory Management',
      'Prescription Management',
      'Mobile Money Integration',
      'Multi-currency Support',
      'Reporting & Analytics',
    ],
  };

  const hospitalOSSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'HospitalOS',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Windows, Web',
    description: 'Comprehensive hospital management system with patient records, billing, laboratory, radiology, and emergency care modules.',
    url: 'https://medsoftwares.com/hospitalos',
    provider: {
      '@type': 'Organization',
      name: 'MedSoftwares',
      url: 'https://medsoftwares.com',
    },
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      description: 'Free demo available',
    },
    featureList: [
      'Patient Management',
      'Electronic Health Records',
      'Billing & Insurance',
      'Laboratory Management',
      'Radiology Services',
      'Emergency Care',
    ],
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'MedSoftwares',
    url: 'https://medsoftwares.com',
    description: 'Pharmacy and Hospital Management Software Solutions',
    publisher: {
      '@type': 'Organization',
      name: 'MedSoftwares',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pharmaPOSSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(hospitalOSSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}
