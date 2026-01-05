export default function StructuredData() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://medsoftwares.com/#organization',
    name: 'MedSoftwares',
    alternateName: ['Medsoftwares', 'Med Softwares', 'MedSoftware'],
    url: 'https://medsoftwares.com',
    logo: {
      '@type': 'ImageObject',
      url: 'https://medsoftwares.com/logo.png',
      width: 512,
      height: 512,
    },
    image: 'https://medsoftwares.com/og.png',
    description: 'AI-powered healthcare software solutions for pharmacies and hospitals worldwide. Serving 25+ healthcare facilities across 12 countries.',
    foundingDate: '2020',
    numberOfEmployees: {
      '@type': 'QuantitativeValue',
      minValue: 5,
      maxValue: 15,
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: '21 Chartfield Drive, Kirby-Le-Soken',
      addressLocality: 'Frinton-On-Sea',
      addressRegion: 'Essex',
      postalCode: 'CO13 0DR',
      addressCountry: 'GB',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '51.8528',
      longitude: '1.2344',
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+971-567-726-6520',
        contactType: 'sales',
        email: 'sales@medsoftwares.com',
        availableLanguage: ['English', 'French', 'Arabic'],
        areaServed: ['Africa', 'Middle East', 'Europe', 'Asia'],
      },
      {
        '@type': 'ContactPoint',
        telephone: '+971-567-726-6520',
        contactType: 'customer support',
        email: 'support@medsoftwares.com',
        availableLanguage: ['English'],
      },
    ],
    sameAs: [
      'https://facebook.com/medsoftwares',
      'https://x.com/medsoftwares',
      'https://linkedin.com/company/medsoftwares',
      'https://instagram.com/medsoftwares',
      'https://youtube.com/@medsoftwares',
      'https://wa.me/9715677266520',
    ],
    parentOrganization: {
      '@type': 'Organization',
      name: 'Papcy',
      url: 'https://papcy.com',
    },
    areaServed: [
      { '@type': 'Country', name: 'Ghana' },
      { '@type': 'Country', name: 'Nigeria' },
      { '@type': 'Country', name: 'Kenya' },
      { '@type': 'Country', name: 'South Africa' },
      { '@type': 'Country', name: 'United Arab Emirates' },
      { '@type': 'Country', name: 'United Kingdom' },
      { '@type': 'Country', name: 'Tanzania' },
      { '@type': 'Country', name: 'Uganda' },
      { '@type': 'Country', name: 'Rwanda' },
      { '@type': 'Country', name: 'Cameroon' },
      { '@type': 'Country', name: 'Senegal' },
      { '@type': 'Country', name: 'Ethiopia' },
    ],
    knowsAbout: [
      'Pharmacy Management Software',
      'Hospital Management Systems',
      'Healthcare Technology',
      'Electronic Health Records',
      'Point of Sale Systems',
      'Inventory Management',
      'NHIS Integration',
      'Mobile Money Payments',
    ],
  };

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareCompany',
    '@id': 'https://medsoftwares.com/#localbusiness',
    name: 'MedSoftwares',
    image: 'https://medsoftwares.com/logo.png',
    url: 'https://medsoftwares.com',
    telephone: '+971-567-726-6520',
    email: 'contact@medsoftwares.com',
    priceRange: '$299 - $2999',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '21 Chartfield Drive, Kirby-Le-Soken',
      addressLocality: 'Frinton-On-Sea',
      addressRegion: 'Essex',
      postalCode: 'CO13 0DR',
      addressCountry: 'GB',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '47',
      bestRating: '5',
      worstRating: '1',
    },
  };

  const pharmaPOSSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    '@id': 'https://medsoftwares.com/pharmapos/#software',
    name: 'PharmaPOS',
    applicationCategory: 'BusinessApplication',
    applicationSubCategory: 'Pharmacy Management Software',
    operatingSystem: 'Windows 10, Windows 11',
    description: 'Complete pharmacy management and point-of-sale system with inventory tracking, prescription management, drug interaction checker, NHIS/insurance claims, and mobile money integration. Trusted by 25+ pharmacies worldwide.',
    url: 'https://medsoftwares.com/pharmapos',
    downloadUrl: 'https://medsoftwares.com/contact',
    softwareVersion: '3.0',
    releaseNotes: 'https://medsoftwares.com/news/pharmapos-3-0-release',
    screenshot: [
      {
        '@type': 'ImageObject',
        url: 'https://medsoftwares.com/screenshots/screen1.png',
        caption: 'PharmaPOS Dashboard',
      },
      {
        '@type': 'ImageObject',
        url: 'https://medsoftwares.com/screenshots/screen2.png',
        caption: 'PharmaPOS Point of Sale',
      },
    ],
    provider: {
      '@type': 'Organization',
      name: 'MedSoftwares',
      url: 'https://medsoftwares.com',
    },
    offers: [
      {
        '@type': 'Offer',
        name: 'PharmaPOS Basic',
        price: '299',
        priceCurrency: 'USD',
        description: '1 Workstation License - Perfect for single-location pharmacies',
        availability: 'https://schema.org/InStock',
        priceValidUntil: '2025-12-31',
      },
      {
        '@type': 'Offer',
        name: 'PharmaPOS Standard',
        price: '499',
        priceCurrency: 'USD',
        description: 'Up to 3 Workstation Licenses - For growing pharmacies',
        availability: 'https://schema.org/InStock',
        priceValidUntil: '2025-12-31',
      },
      {
        '@type': 'Offer',
        name: 'PharmaPOS Premium',
        price: '899',
        priceCurrency: 'USD',
        description: 'Up to 10 Workstation Licenses - Complete solution for pharmacy chains',
        availability: 'https://schema.org/InStock',
        priceValidUntil: '2025-12-31',
      },
    ],
    featureList: [
      'Point of Sale (POS)',
      'Inventory Management',
      'Prescription Management',
      'Drug Interaction Checker',
      'Controlled Substances Tracking',
      'NHIS/Insurance Claims',
      'Mobile Money Payments (MTN, Vodafone, AirtelTigo)',
      'Multi-Branch Support',
      'Barcode Scanning',
      'Batch & Expiry Tracking',
      'Credit Sales Management',
      'Customer Loyalty Programs',
      'Staff Management & Permissions',
      'Audit Trail & Compliance',
      'Reports & Analytics',
      'Offline Capability',
      'Multi-Currency Support',
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '150',
      bestRating: '5',
      worstRating: '1',
    },
    review: [
      {
        '@type': 'Review',
        author: { '@type': 'Person', name: 'Kwame Asante' },
        reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
        reviewBody: 'PharmaPOS transformed our pharmacy operations. The mobile money integration is seamless!',
        datePublished: '2024-10-15',
      },
      {
        '@type': 'Review',
        author: { '@type': 'Person', name: 'Fatima Al-Hassan' },
        reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
        reviewBody: 'Excellent software with great support. The inventory tracking saves us hours every week.',
        datePublished: '2024-09-20',
      },
    ],
  };

  const hospitalOSSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    '@id': 'https://medsoftwares.com/hospitalos/#software',
    name: 'HospitalOS',
    applicationCategory: 'BusinessApplication',
    applicationSubCategory: 'Hospital Management System',
    operatingSystem: 'Windows, Web Browser',
    description: 'Comprehensive hospital management system with patient records, OPD/IPD, billing, laboratory, radiology, pharmacy, emergency care, and 25+ integrated modules. Serving hospitals and clinics across Africa and Middle East.',
    url: 'https://medsoftwares.com/hospitalos',
    downloadUrl: 'https://medsoftwares.com/contact',
    softwareVersion: '2.5',
    provider: {
      '@type': 'Organization',
      name: 'MedSoftwares',
      url: 'https://medsoftwares.com',
    },
    offers: [
      {
        '@type': 'Offer',
        name: 'HospitalOS Clinic',
        price: '799',
        priceCurrency: 'USD',
        description: 'Up to 3 Workstations - For small clinics and health centers',
        availability: 'https://schema.org/InStock',
        priceValidUntil: '2025-12-31',
      },
      {
        '@type': 'Offer',
        name: 'HospitalOS Hospital',
        price: '1499',
        priceCurrency: 'USD',
        description: 'Up to 10 Workstations - Complete solution for hospitals',
        availability: 'https://schema.org/InStock',
        priceValidUntil: '2025-12-31',
      },
      {
        '@type': 'Offer',
        name: 'HospitalOS Enterprise',
        price: '2999',
        priceCurrency: 'USD',
        description: 'Unlimited Workstations - For large hospitals and medical centers',
        availability: 'https://schema.org/InStock',
        priceValidUntil: '2025-12-31',
      },
    ],
    featureList: [
      'Patient Management & Registration',
      'Electronic Health Records (EHR)',
      'Outpatient Department (OPD)',
      'Inpatient Department (IPD)',
      'Emergency Care Module',
      'Laboratory Management',
      'Radiology & Imaging',
      'Pharmacy Integration',
      'Billing & Insurance Claims',
      'NHIS Integration',
      'Appointment Scheduling',
      'Queue Management',
      'Ward & Bed Management',
      'Nursing Care Module',
      'Doctor Dashboard',
      'Surgery/Theatre Management',
      'Maternity Module',
      'Blood Bank',
      'Mortuary Management',
      'HR & Payroll',
      'Procurement & Inventory',
      'Reports & Analytics',
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.7',
      ratingCount: '85',
      bestRating: '5',
      worstRating: '1',
    },
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://medsoftwares.com/#website',
    name: 'MedSoftwares',
    url: 'https://medsoftwares.com',
    description: 'Pharmacy and Hospital Management Software Solutions for Healthcare Facilities Worldwide',
    publisher: {
      '@id': 'https://medsoftwares.com/#organization',
    },
    inLanguage: ['en', 'fr', 'es', 'ar', 'pt', 'zh'],
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://medsoftwares.com/docs?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is PharmaPOS?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'PharmaPOS is a comprehensive pharmacy management software that includes Point of Sale, inventory management, prescription tracking, drug interaction checking, NHIS/insurance claims processing, and mobile money integration. It is designed for pharmacies in Africa and worldwide.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is HospitalOS?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'HospitalOS is a complete hospital management system with 25+ integrated modules including patient management, OPD, IPD, emergency care, laboratory, radiology, pharmacy, billing, and more. It serves hospitals and clinics across Africa and the Middle East.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is there a monthly subscription fee?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No, MedSoftwares offers a one-time purchase model. You pay once and own the software forever. This includes free updates and bug fixes. Optional support packages are available for extended assistance.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does PharmaPOS work offline?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, PharmaPOS is a desktop application that works completely offline. Your data is stored locally and syncs when internet is available. This makes it perfect for areas with unreliable internet connectivity.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you offer installation and training?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, all packages include free installation assistance. Standard and Premium packages include comprehensive training for your staff. We also offer on-site installation and training for Premium and Enterprise packages.',
        },
      },
      {
        '@type': 'Question',
        name: 'Which countries do you serve?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'MedSoftwares serves healthcare facilities in over 12 countries including Ghana, Nigeria, Kenya, South Africa, Tanzania, Uganda, Rwanda, Cameroon, Senegal, Ethiopia, United Arab Emirates, and the United Kingdom.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does PharmaPOS support mobile money payments?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, PharmaPOS integrates with major mobile money providers including MTN Mobile Money, Vodafone Cash, AirtelTigo Money, M-Pesa, and other local payment methods across Africa.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I get a demo before purchasing?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, we offer free demos for both PharmaPOS and HospitalOS. Contact us through our website or WhatsApp to schedule a personalized demonstration of our software.',
        },
      },
    ],
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://medsoftwares.com',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
