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
    description: 'AI-powered healthcare software solutions for pharmacies and hospitals worldwide. Serving 50+ healthcare facilities across 30+ countries in North America, Europe, Asia, Middle East, Africa, and Latin America.',
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
        availableLanguage: ['English', 'French', 'Arabic', 'Spanish', 'Portuguese'],
        areaServed: ['North America', 'Europe', 'Asia', 'Middle East', 'Africa', 'Latin America'],
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
      // North America
      { '@type': 'Country', name: 'United States' },
      { '@type': 'Country', name: 'Canada' },
      { '@type': 'Country', name: 'Mexico' },
      // Europe
      { '@type': 'Country', name: 'United Kingdom' },
      { '@type': 'Country', name: 'Germany' },
      { '@type': 'Country', name: 'France' },
      { '@type': 'Country', name: 'Spain' },
      { '@type': 'Country', name: 'Netherlands' },
      // Middle East
      { '@type': 'Country', name: 'United Arab Emirates' },
      { '@type': 'Country', name: 'Saudi Arabia' },
      { '@type': 'Country', name: 'Qatar' },
      { '@type': 'Country', name: 'Kuwait' },
      // Asia Pacific
      { '@type': 'Country', name: 'India' },
      { '@type': 'Country', name: 'Singapore' },
      { '@type': 'Country', name: 'Malaysia' },
      { '@type': 'Country', name: 'Philippines' },
      { '@type': 'Country', name: 'Thailand' },
      // Africa
      { '@type': 'Country', name: 'Ghana' },
      { '@type': 'Country', name: 'Nigeria' },
      { '@type': 'Country', name: 'Kenya' },
      { '@type': 'Country', name: 'South Africa' },
      { '@type': 'Country', name: 'Tanzania' },
      { '@type': 'Country', name: 'Uganda' },
      { '@type': 'Country', name: 'Rwanda' },
      // Latin America
      { '@type': 'Country', name: 'Brazil' },
      { '@type': 'Country', name: 'Argentina' },
      { '@type': 'Country', name: 'Colombia' },
      { '@type': 'Country', name: 'Chile' },
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
    '@type': 'ProfessionalService',
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
        priceValidUntil: '2026-12-31',
      },
      {
        '@type': 'Offer',
        name: 'PharmaPOS Standard',
        price: '499',
        priceCurrency: 'USD',
        description: 'Up to 3 Workstation Licenses - For growing pharmacies',
        availability: 'https://schema.org/InStock',
        priceValidUntil: '2026-12-31',
      },
      {
        '@type': 'Offer',
        name: 'PharmaPOS Premium',
        price: '899',
        priceCurrency: 'USD',
        description: 'Up to 10 Workstation Licenses - Complete solution for pharmacy chains',
        availability: 'https://schema.org/InStock',
        priceValidUntil: '2026-12-31',
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
    description: 'Comprehensive hospital management system with patient records, OPD/IPD, billing, laboratory, radiology, pharmacy, emergency care, and 25+ integrated modules. Serving hospitals and clinics worldwide with one-time pricing.',
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
        priceValidUntil: '2026-12-31',
      },
      {
        '@type': 'Offer',
        name: 'HospitalOS Hospital',
        price: '1499',
        priceCurrency: 'USD',
        description: 'Up to 10 Workstations - Complete solution for hospitals',
        availability: 'https://schema.org/InStock',
        priceValidUntil: '2026-12-31',
      },
      {
        '@type': 'Offer',
        name: 'HospitalOS Enterprise',
        price: '2999',
        priceCurrency: 'USD',
        description: 'Unlimited Workstations - For large hospitals and medical centers',
        availability: 'https://schema.org/InStock',
        priceValidUntil: '2026-12-31',
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
    inLanguage: 'en',
    // SearchAction for Google Sitelinks Searchbox
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://medsoftwares.com/news?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
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

  // Product ItemList schema for rich snippets
  const productListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    '@id': 'https://medsoftwares.com/#products',
    name: 'MedSoftwares Healthcare Products',
    description: 'Complete suite of healthcare management software solutions',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'PharmaPOS',
        url: 'https://medsoftwares.com/pharmapos',
        description: 'Complete pharmacy management software with POS, inventory tracking, and offline capability',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'HospitalOS',
        url: 'https://medsoftwares.com/hospitalos',
        description: 'Comprehensive hospital management system with 25+ integrated modules',
      },
    ],
    numberOfItems: 2,
  };

  // Service schema for better local/service SEO
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://medsoftwares.com/#service',
    name: 'Healthcare Software Solutions',
    provider: {
      '@id': 'https://medsoftwares.com/#organization',
    },
    serviceType: 'Healthcare IT Solutions',
    description: 'Comprehensive pharmacy and hospital management software solutions with installation, training, and 24/7 support.',
    areaServed: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: '0',
        longitude: '20',
      },
      geoRadius: '10000',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Healthcare Software Catalog',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'PharmaPOS Installation & Training',
            description: 'Complete pharmacy software setup, data migration, and staff training',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'HospitalOS Implementation',
            description: 'Full hospital management system deployment with custom module configuration',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: '24/7 Technical Support',
            description: 'Round-the-clock technical assistance for premium customers',
          },
        },
      ],
    },
  };

  // HowTo schema for getting started (AEO optimization)
  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    '@id': 'https://medsoftwares.com/#howto',
    name: 'How to Get Started with MedSoftwares',
    description: 'Step-by-step guide to implementing pharmacy or hospital management software',
    totalTime: 'P1D',
    estimatedCost: {
      '@type': 'MonetaryAmount',
      currency: 'USD',
      value: '299',
    },
    step: [
      {
        '@type': 'HowToStep',
        position: 1,
        name: 'Request a Demo',
        text: 'Contact us through our website or call +971-567-726-6520 to schedule a free personalized demo of PharmaPOS or HospitalOS.',
        url: 'https://medsoftwares.com/contact',
      },
      {
        '@type': 'HowToStep',
        position: 2,
        name: 'Choose Your Plan',
        text: 'Select the pricing plan that fits your facility size. PharmaPOS starts at $299, HospitalOS starts at $799.',
        url: 'https://medsoftwares.com/pricing',
      },
      {
        '@type': 'HowToStep',
        position: 3,
        name: 'Installation & Setup',
        text: 'Our team will install the software, configure settings, and migrate your existing data within 1-2 days.',
      },
      {
        '@type': 'HowToStep',
        position: 4,
        name: 'Training',
        text: 'Receive comprehensive training for all staff members on how to use the system effectively.',
      },
      {
        '@type': 'HowToStep',
        position: 5,
        name: 'Go Live',
        text: 'Start using your new healthcare management software with ongoing support from our team.',
      },
    ],
  };

  // Speakable schema for voice assistants (Google Assistant, Siri, Alexa)
  const speakableSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': 'https://medsoftwares.com/#speakable',
    name: 'MedSoftwares - Healthcare Software Solutions',
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', 'h2', '.speakable', '[data-speakable]'],
    },
    mainEntity: [
      {
        '@type': 'SoftwareApplication',
        name: 'PharmaPOS',
        description: 'PharmaPOS is pharmacy management software with point of sale, inventory tracking, prescription management, and offline capability. Pricing starts at $299 one-time with no monthly fees.',
        applicationCategory: 'BusinessApplication',
      },
      {
        '@type': 'SoftwareApplication',
        name: 'HospitalOS',
        description: 'HospitalOS is hospital management software with 25 plus modules including electronic medical records, outpatient, inpatient, laboratory, radiology, and billing. Pricing starts at $999 one-time with no monthly fees.',
        applicationCategory: 'BusinessApplication',
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productListSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
    </>
  );
}
