'use client';

import Image from 'next/image';
import Link from 'next/link';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import Footer from '@/components/Footer';

const values = [
  {
    title: 'Innovation',
    description: 'We continuously push boundaries to create cutting-edge healthcare technology solutions.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: 'Reliability',
    description: 'Our systems are built for 99.9% uptime because healthcare never sleeps.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: 'Customer Focus',
    description: 'We build partnerships, not just software. Your success is our success.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: 'Accessibility',
    description: 'Making world-class healthcare technology accessible to facilities of all sizes.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
  },
];

const stats = [
  { value: '50+', label: 'Healthcare Facilities' },
  { value: '30+', label: 'Countries Served' },
  { value: '10M+', label: 'Monthly Transactions' },
  { value: '24/7', label: 'Customer Support' },
];

const team = [
  {
    name: 'Charles Bah',
    role: 'Founder & CEO',
    bio: 'Visionary leader driving innovation in healthcare technology solutions.',
    initials: 'CB',
    image: '/team/charles-bah.jpg',
  },
  {
    name: 'Djonga Olivier',
    role: 'CTO',
    bio: 'Software architect with expertise in healthcare information systems.',
    initials: 'DO',
    image: '/team/djonga-olivier.jpg',
  },
  {
    name: 'Steve Nya',
    role: 'Developer',
    bio: 'Full-stack developer building robust and scalable software solutions.',
    initials: 'SN',
    image: '/team/steve-nya.jpg',
  },
  {
    name: 'Faith Yaje',
    role: 'Financial Secretary',
    bio: 'Managing financial operations and ensuring fiscal responsibility.',
    initials: 'FY',
    image: '/team/faith-yaje.jpg',
  },
  {
    name: 'Sonita Bah',
    role: 'Marketer',
    bio: 'Connecting our solutions with healthcare facilities worldwide.',
    initials: 'SB',
    image: '/team/sonita-bah.jpg',
  },
  {
    name: 'Marbel Nfor',
    role: 'Program Manager',
    bio: 'Coordinating projects and ensuring successful client implementations.',
    initials: 'MN',
    image: '/team/marbel-nfor.jpg',
  },
  {
    name: 'Ivo Tume',
    role: 'Customer Success Lead',
    bio: 'Ensuring every customer gets the most out of our products.',
    initials: 'IT',
  },
];

export default function AboutPage() {
  return (
    <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 md:pt-40 md:pb-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-5xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 bg-[#166534]/10 text-[#166534] text-sm font-semibold rounded-full mb-6">
              About Us
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold text-gray-900 mb-6">
              Transforming Healthcare Through Technology
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              MedSoftwares is a product of <a href="https://papcy.com" target="_blank" rel="noopener noreferrer" className="font-semibold text-gray-800 hover:text-[#166534] transition-colors underline decoration-dotted underline-offset-2">Papcy</a> - an AI-focused technology company building intelligent solutions for healthcare worldwide.
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-gray-900 mb-6">
                  Our Story
                </h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    <a href="https://papcy.com" target="_blank" rel="noopener noreferrer" className="font-semibold text-gray-800 hover:text-[#166534] transition-colors underline decoration-dotted underline-offset-2">Papcy</a> is an AI-focused technology company that designs and builds AI-powered web apps, mobile apps, and custom intelligent tools. We help businesses adopt, integrate, and scale AI through end-to-end solutions—strategy, development, and deployment.
                  </p>
                  <p>
                    MedSoftwares was born from a simple observation: pharmacies and hospitals globally were struggling with outdated, expensive, or non-existent management systems. We saw how the lack of proper technology led to medication errors, inventory losses, and poor patient experiences.
                  </p>
                  <p>
                    Leveraging our expertise in AI and software development, we built MedSoftwares to be not only powerful and reliable but also intelligent and affordable—designed for diverse healthcare contexts with support for local payment methods, multiple currencies, and languages.
                  </p>
                  <p>
                    Today, MedSoftwares powers pharmacies and hospitals across 30+ countries worldwide, processing millions of transactions every month with AI-driven insights and automation.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-[#166534] to-green-700 rounded-3xl p-8 md:p-12">
                  <div className="grid grid-cols-2 gap-6">
                    {stats.map((stat, index) => (
                      <div key={index} className="text-center">
                        <div className="text-3xl md:text-4xl font-heading font-extrabold text-white mb-2">
                          {stat.value}
                        </div>
                        <div className="text-green-200 text-sm">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-gray-900 mb-6">
                Our Values
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                The principles that guide everything we do.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-300 text-center"
                >
                  <div className="w-16 h-16 bg-[#166534]/10 rounded-2xl flex items-center justify-center text-[#166534] mx-auto mb-6">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-gray-900 mb-6">
                Our Team
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Meet the people driving our mission forward.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <div
                  key={index}
                  className="text-center group"
                >
                  {member.image ? (
                    <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 ring-4 ring-[#166534]/20">
                      <Image
                        src={member.image}
                        alt={member.name}
                        width={96}
                        height={96}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className="w-24 h-24 bg-gradient-to-br from-[#166534] to-green-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      {member.initials}
                    </div>
                  )}
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-[#166534] font-medium text-sm mb-2">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-[#166534]">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-white mb-6">
              Join Our Mission
            </h2>
            <p className="text-xl text-green-100 mb-10">
              Partner with us to transform healthcare in your facility. Let&apos;s build the future of healthcare together.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-[#166534] text-lg font-bold rounded-full shadow-lg hover:bg-green-50 hover:-translate-y-0.5 transition-all duration-200"
              >
                Get in Touch
                <ArrowOutwardIcon className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link
                href="/pharmapos"
                className="inline-flex items-center gap-2 px-8 py-4 text-white text-lg font-semibold rounded-full border-2 border-white/30 hover:bg-white/10 transition-all duration-200"
              >
                View Our Products
              </Link>
            </div>
          </div>
        </section>

        <Footer />
    </main>
  );
}
