'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/components/Footer';

const categories = [
  { id: 'all', label: 'All News' },
  { id: 'product', label: 'Product Updates' },
  { id: 'company', label: 'Company News' },
  { id: 'industry', label: 'Industry Insights' },
  { id: 'press', label: 'Press Releases' },
];

const newsArticles = [
  {
    id: 1,
    slug: 'pharmapos-3-0-release',
    title: 'PharmaPOS 3.0: Major Update Brings AI-Powered Inventory Predictions',
    excerpt: 'Our latest release introduces machine learning algorithms that predict stock levels and automatically suggest reorder quantities based on historical sales data.',
    category: 'product',
    date: '2024-12-01',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    featured: true,
  },
  {
    id: 2,
    slug: 'expansion-east-africa',
    title: 'MedSoftwares Expands Operations to East Africa',
    excerpt: 'We are excited to announce our expansion into Kenya, Tanzania, and Uganda, bringing world-class pharmacy management solutions to more healthcare facilities.',
    category: 'company',
    date: '2024-11-15',
    readTime: '3 min read',
    image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800&q=80',
    featured: true,
  },
  {
    id: 3,
    slug: 'digital-transformation-pharmacies',
    title: 'The Digital Transformation of African Pharmacies: A 2024 Report',
    excerpt: 'Our comprehensive report reveals how pharmacies across Africa are adopting technology to improve patient care and business operations.',
    category: 'industry',
    date: '2024-11-01',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1563213126-a4273aed2016?w=800&q=80',
    featured: false,
  },
  {
    id: 4,
    slug: 'partnership-nhis-ghana',
    title: 'MedSoftwares Partners with NHIS Ghana for Seamless Insurance Claims',
    excerpt: 'Our new partnership enables pharmacies to process National Health Insurance Scheme claims directly through PharmaPOS, reducing paperwork and delays.',
    category: 'press',
    date: '2024-10-20',
    readTime: '3 min read',
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80',
    featured: false,
  },
  {
    id: 5,
    slug: 'hospitalos-laboratory-module',
    title: 'New HospitalOS Laboratory Module Streamlines Test Management',
    excerpt: 'The new laboratory module allows hospitals to manage test orders, track samples, and deliver results electronically to physicians and patients.',
    category: 'product',
    date: '2024-10-10',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&q=80',
    featured: false,
  },
  {
    id: 6,
    slug: 'mobile-money-integration-guide',
    title: 'Complete Guide to Mobile Money Integration in Healthcare',
    excerpt: 'Learn how healthcare facilities can leverage mobile money payments to improve cash flow, reduce theft, and provide better patient experiences.',
    category: 'industry',
    date: '2024-09-25',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
    featured: false,
  },
  {
    id: 7,
    slug: 'customer-success-story-accra',
    title: 'How Accra Central Pharmacy Increased Sales by 40% with PharmaPOS',
    excerpt: 'A deep dive into how one of Ghana\'s busiest pharmacies transformed their operations and dramatically improved their bottom line.',
    category: 'company',
    date: '2024-09-15',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1576602976047-174e57a47881?w=800&q=80',
    featured: false,
  },
  {
    id: 8,
    slug: 'data-security-healthcare',
    title: 'Data Security Best Practices for Healthcare Facilities in Africa',
    excerpt: 'Protecting patient data is critical. Learn the essential security measures every pharmacy and hospital should implement.',
    category: 'industry',
    date: '2024-09-01',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80',
    featured: false,
  },
  {
    id: 9,
    slug: 'pharmacy-inventory-management-best-practices',
    title: '10 Pharmacy Inventory Management Best Practices to Reduce Waste and Boost Profits',
    excerpt: 'Master drug inventory control with proven strategies for stock optimization, expiry tracking, and automated reordering that leading African pharmacies use to maximize profitability.',
    category: 'industry',
    date: '2024-08-20',
    readTime: '9 min read',
    image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=800&q=80',
    featured: false,
  },
  {
    id: 10,
    slug: 'hospital-management-system-benefits',
    title: 'Why Every Hospital Needs a Modern Hospital Management System in 2025',
    excerpt: 'Discover how integrated HMS solutions streamline patient care, reduce administrative burden, and improve healthcare outcomes across clinical departments.',
    category: 'industry',
    date: '2024-08-15',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80',
    featured: false,
  },
  {
    id: 11,
    slug: 'emr-implementation-guide-africa',
    title: 'Complete Guide to EMR Implementation for African Healthcare Facilities',
    excerpt: 'Step-by-step electronic medical records implementation guide covering system selection, data migration, staff training, and compliance requirements for hospitals and clinics.',
    category: 'industry',
    date: '2024-08-01',
    readTime: '12 min read',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
    featured: false,
  },
  {
    id: 12,
    slug: 'patient-queue-management-system',
    title: 'How Smart Patient Queue Management Systems Reduce Wait Times by 60%',
    excerpt: 'Learn how digital queue management and appointment scheduling software transforms patient flow, improves satisfaction scores, and optimizes staff efficiency in busy healthcare settings.',
    category: 'product',
    date: '2024-07-25',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800&q=80',
    featured: false,
  },
  {
    id: 13,
    slug: 'pharmacy-pos-automation-guide',
    title: 'Pharmacy POS Automation: From Manual Sales to Digital Excellence',
    excerpt: 'Transform your pharmacy operations with point-of-sale automation featuring barcode scanning, mobile money integration, credit sales tracking, and real-time reporting.',
    category: 'product',
    date: '2024-07-15',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1576671081837-49000212a370?w=800&q=80',
    featured: false,
  },
  {
    id: 14,
    slug: 'healthcare-compliance-regulations-africa',
    title: 'Healthcare Compliance and Regulations: What African Providers Must Know',
    excerpt: 'Navigate pharmaceutical regulations, patient data protection laws, and insurance compliance requirements across Ghana, Nigeria, Kenya, and other African markets.',
    category: 'industry',
    date: '2024-07-01',
    readTime: '10 min read',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80',
    featured: false,
  },
  {
    id: 15,
    slug: 'multi-branch-pharmacy-management',
    title: 'Multi-Branch Pharmacy Management: Centralized Control for Growing Chains',
    excerpt: 'Scale your pharmacy business with multi-location inventory sync, centralized reporting, inter-branch transfers, and unified customer management across all outlets.',
    category: 'product',
    date: '2024-06-20',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=800&q=80',
    featured: false,
  },
  {
    id: 16,
    slug: 'laboratory-information-system-hospitals',
    title: 'Laboratory Information Systems: Streamlining Diagnostics in Modern Hospitals',
    excerpt: 'Optimize lab operations with sample tracking, automated result delivery, quality control monitoring, and seamless integration with hospital electronic medical records.',
    category: 'product',
    date: '2024-06-10',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1579165466741-7f35e4755660?w=800&q=80',
    featured: false,
  },
  {
    id: 17,
    slug: 'telemedicine-integration-hospital-software',
    title: 'Telemedicine Integration: Expanding Healthcare Access Through Technology',
    excerpt: 'Implement virtual consultations, remote patient monitoring, and telehealth services that connect patients with providers across distances while maintaining quality care.',
    category: 'industry',
    date: '2024-05-28',
    readTime: '9 min read',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80',
    featured: false,
  },
  {
    id: 18,
    slug: 'healthcare-analytics-reporting-dashboards',
    title: 'Healthcare Analytics: Data-Driven Decisions for Better Patient Outcomes',
    excerpt: 'Leverage business intelligence dashboards, predictive analytics, and real-time reporting to optimize operations, track KPIs, and improve clinical decision-making.',
    category: 'industry',
    date: '2024-05-15',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    featured: false,
  },
  {
    id: 19,
    slug: 'best-pharmacy-software-ghana-2025',
    title: 'Best Pharmacy Management Software in Ghana 2025: Complete Buyer\'s Guide',
    excerpt: 'Compare top pharmacy software solutions in Ghana including features, pricing, NHIS integration, mobile money support, and customer reviews to find the perfect fit for your pharmacy.',
    category: 'industry',
    date: '2025-01-02',
    readTime: '12 min read',
    image: 'https://images.unsplash.com/photo-1585435557343-3b092031a831?w=800&q=80',
    featured: true,
  },
  {
    id: 20,
    slug: 'hospital-software-nigeria-guide',
    title: 'Hospital Management Software in Nigeria: Features, Costs & Implementation Guide',
    excerpt: 'Everything Nigerian hospitals need to know about choosing and implementing hospital management systems, including HMO integration, NHIS compliance, and cost considerations.',
    category: 'industry',
    date: '2025-01-01',
    readTime: '14 min read',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80',
    featured: true,
  },
  {
    id: 21,
    slug: 'pharmacy-pos-vs-manual-records',
    title: 'Pharmacy POS System vs Manual Records: Why It\'s Time to Switch in 2025',
    excerpt: 'Discover the hidden costs of manual pharmacy management and how modern POS systems can increase profits by 40%, reduce errors, and save 20+ hours weekly.',
    category: 'industry',
    date: '2024-12-28',
    readTime: '9 min read',
    image: 'https://images.unsplash.com/photo-1576671081837-49000212a370?w=800&q=80',
    featured: false,
  },
  {
    id: 22,
    slug: 'drug-expiry-tracking-software',
    title: 'Drug Expiry Tracking Software: Reduce Pharmaceutical Waste by 60%',
    excerpt: 'Learn how automated expiry tracking and FEFO inventory management helps pharmacies minimize losses, ensure patient safety, and maintain regulatory compliance.',
    category: 'product',
    date: '2024-12-20',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&q=80',
    featured: false,
  },
  {
    id: 23,
    slug: 'mtn-mobile-money-pharmacy-integration',
    title: 'MTN Mobile Money Integration for Pharmacies: Complete Setup Guide',
    excerpt: 'Step-by-step guide to integrating MTN MoMo payments in your pharmacy POS system, including setup, fees, reconciliation, and troubleshooting common issues.',
    category: 'product',
    date: '2024-12-15',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
    featured: false,
  },
  {
    id: 24,
    slug: 'clinic-management-software-small-clinics',
    title: 'Affordable Clinic Management Software for Small Healthcare Facilities',
    excerpt: 'Budget-friendly clinic management solutions designed for small practices, health centers, and outpatient facilities in Africa with essential features and easy setup.',
    category: 'product',
    date: '2024-12-10',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80',
    featured: false,
  },
  // 2026 SEO-Optimized Articles
  {
    id: 25,
    slug: 'best-hospital-management-software-2026',
    title: 'Best Hospital Management Software 2026: Top 10 HMS Solutions Compared',
    excerpt: 'Comprehensive comparison of the best hospital management software in 2026, including features, pricing, EMR integration, and which HMS is right for your healthcare facility.',
    category: 'industry',
    date: '2026-01-07',
    readTime: '15 min read',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80',
    featured: true,
  },
  {
    id: 26,
    slug: 'free-hospital-management-software-download',
    title: 'Free Hospital Management Software Download: Open Source HMS Options 2026',
    excerpt: 'Download free hospital management software for your healthcare facility. Compare open-source HMS solutions like OpenHospital, HospitalRun, and affordable alternatives.',
    category: 'industry',
    date: '2026-01-06',
    readTime: '10 min read',
    image: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800&q=80',
    featured: true,
  },
  {
    id: 27,
    slug: 'best-pharmacy-management-software-2026',
    title: 'Best Pharmacy Management Software 2026: Complete Buyer\'s Guide',
    excerpt: 'Find the best pharmacy management software for your business in 2026. Compare POS systems, inventory management, and prescription tracking features from top vendors.',
    category: 'industry',
    date: '2026-01-05',
    readTime: '14 min read',
    image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=800&q=80',
    featured: true,
  },
  {
    id: 28,
    slug: 'pharmacy-pos-system-africa-guide',
    title: 'Pharmacy POS System for Africa: Best Solutions for Ghana, Nigeria & Kenya',
    excerpt: 'Discover the best pharmacy POS systems designed for African markets with mobile money integration, offline capability, and multi-currency support.',
    category: 'industry',
    date: '2026-01-04',
    readTime: '11 min read',
    image: 'https://images.unsplash.com/photo-1576671081837-49000212a370?w=800&q=80',
    featured: false,
  },
  {
    id: 29,
    slug: 'hospital-software-small-hospitals-clinics',
    title: 'Hospital Software for Small Hospitals & Clinics: Affordable HMS 2026',
    excerpt: 'Find affordable hospital management software designed for small hospitals, clinics, and health centers. Features, pricing, and implementation guide for budget-conscious facilities.',
    category: 'industry',
    date: '2026-01-03',
    readTime: '9 min read',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80',
    featured: false,
  },
  {
    id: 30,
    slug: 'emr-ehr-software-africa-2026',
    title: 'EMR/EHR Software for African Healthcare: Implementation Guide 2026',
    excerpt: 'Complete guide to implementing Electronic Medical Records (EMR) and EHR systems in African hospitals and clinics, including compliance, training, and best practices.',
    category: 'industry',
    date: '2026-01-02',
    readTime: '13 min read',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
    featured: false,
  },
  {
    id: 31,
    slug: 'cloud-vs-on-premise-hospital-software',
    title: 'Cloud vs On-Premise Hospital Software: Which is Right for Your Facility?',
    excerpt: 'Compare cloud-based and on-premise hospital management systems. Understand the pros, cons, costs, and security implications to make the best choice for your healthcare facility.',
    category: 'industry',
    date: '2025-12-28',
    readTime: '10 min read',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80',
    featured: false,
  },
  {
    id: 32,
    slug: 'pharmacy-inventory-software-expiry-tracking',
    title: 'Pharmacy Inventory Software with Expiry Tracking: Reduce Drug Waste',
    excerpt: 'Learn how pharmacy inventory management software with automated expiry tracking, FEFO alerts, and batch management can reduce pharmaceutical waste by up to 60%.',
    category: 'product',
    date: '2025-12-25',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&q=80',
    featured: false,
  },
  {
    id: 33,
    slug: 'hospital-billing-software-insurance-claims',
    title: 'Hospital Billing Software: Automate Insurance Claims & Revenue Cycle',
    excerpt: 'Streamline hospital billing with software that automates insurance claims, NHIS processing, patient invoicing, and revenue cycle management for African healthcare facilities.',
    category: 'product',
    date: '2025-12-22',
    readTime: '9 min read',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80',
    featured: false,
  },
  {
    id: 34,
    slug: 'how-to-choose-pharmacy-software',
    title: 'How to Choose Pharmacy Software: 15 Essential Features to Look For',
    excerpt: 'Expert guide on selecting pharmacy management software. Learn the must-have features, questions to ask vendors, and common mistakes to avoid when choosing your pharmacy POS.',
    category: 'industry',
    date: '2025-12-20',
    readTime: '12 min read',
    image: 'https://images.unsplash.com/photo-1576602976047-174e57a47881?w=800&q=80',
    featured: false,
  },
  {
    id: 35,
    slug: 'laboratory-information-management-system-2026',
    title: 'Laboratory Information Management System (LIMS) Guide 2026',
    excerpt: 'Everything you need to know about Laboratory Information Management Systems for hospitals. Features, integration with HMS, sample tracking, and result management.',
    category: 'industry',
    date: '2025-12-18',
    readTime: '11 min read',
    image: 'https://images.unsplash.com/photo-1579165466741-7f35e4755660?w=800&q=80',
    featured: false,
  },
  {
    id: 36,
    slug: 'hospital-management-system-modules-explained',
    title: 'Hospital Management System Modules Explained: Complete HMS Features Guide',
    excerpt: 'Detailed breakdown of all HMS modules including OPD, IPD, pharmacy, laboratory, radiology, billing, and HR. Understand what each module does and which ones you need.',
    category: 'industry',
    date: '2025-12-15',
    readTime: '16 min read',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80',
    featured: false,
  },
  {
    id: 37,
    slug: 'pharmacy-software-nigeria-2026',
    title: 'Best Pharmacy Software in Nigeria 2026: Top Solutions for Nigerian Pharmacies',
    excerpt: 'Compare the best pharmacy management software for Nigerian pharmacies. Features include NAFDAC compliance, HMO integration, Naira currency support, and local payment methods.',
    category: 'industry',
    date: '2025-12-12',
    readTime: '10 min read',
    image: 'https://images.unsplash.com/photo-1585435557343-3b092031a831?w=800&q=80',
    featured: false,
  },
  {
    id: 38,
    slug: 'hospital-software-kenya-east-africa',
    title: 'Hospital Management Software Kenya & East Africa: Best HMS Solutions',
    excerpt: 'Find the best hospital management software for Kenya, Tanzania, Uganda, and Rwanda. Features include M-Pesa integration, NHIF compliance, and multi-language support.',
    category: 'industry',
    date: '2025-12-10',
    readTime: '11 min read',
    image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800&q=80',
    featured: false,
  },
  {
    id: 39,
    slug: 'patient-management-system-features',
    title: 'Patient Management System: Essential Features for Modern Healthcare',
    excerpt: 'Discover the key features of effective patient management systems including registration, scheduling, medical records, and patient portal capabilities for improved care.',
    category: 'industry',
    date: '2025-12-08',
    readTime: '9 min read',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80',
    featured: false,
  },
  {
    id: 40,
    slug: 'pharmacy-software-mobile-money-integration',
    title: 'Pharmacy Software with Mobile Money: MTN, M-Pesa, Airtel Integration Guide',
    excerpt: 'Complete guide to pharmacy POS systems with mobile money integration. Accept MTN MoMo, M-Pesa, Airtel Money, Orange Money, and other African mobile payment methods.',
    category: 'product',
    date: '2025-12-05',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
    featured: false,
  },
  // Additional SEO-Optimized Articles
  {
    id: 41,
    slug: 'ai-healthcare-software-2026-trends',
    title: 'AI in Healthcare Software 2026: Top Trends Transforming Hospitals & Pharmacies',
    excerpt: 'Discover how artificial intelligence is revolutionizing healthcare software in 2026. From AI-powered diagnostics to automated pharmacy dispensing and predictive analytics.',
    category: 'industry',
    date: '2025-12-03',
    readTime: '11 min read',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
    featured: false,
  },
  {
    id: 42,
    slug: 'opd-ipd-management-software-hospitals',
    title: 'OPD & IPD Management Software: Streamline Outpatient & Inpatient Care',
    excerpt: 'Complete guide to OPD (Outpatient) and IPD (Inpatient) management software for hospitals. Features, benefits, and how to choose the right system for your facility.',
    category: 'industry',
    date: '2025-12-01',
    readTime: '10 min read',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80',
    featured: false,
  },
  {
    id: 43,
    slug: 'prescription-management-software-pharmacies',
    title: 'Prescription Management Software: Digital Rx Solutions for Modern Pharmacies',
    excerpt: 'Learn how prescription management software automates Rx processing, reduces errors, ensures compliance, and improves patient safety in community and hospital pharmacies.',
    category: 'product',
    date: '2025-11-28',
    readTime: '9 min read',
    image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=800&q=80',
    featured: false,
  },
  {
    id: 44,
    slug: 'hospital-revenue-cycle-management-software',
    title: 'Hospital Revenue Cycle Management (RCM) Software: Maximize Healthcare Revenue',
    excerpt: 'Comprehensive guide to healthcare RCM software. Automate medical billing, reduce claim denials, and improve cash flow with the right revenue cycle management system.',
    category: 'industry',
    date: '2025-11-25',
    readTime: '12 min read',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80',
    featured: false,
  },
  {
    id: 45,
    slug: 'controlled-substance-tracking-pharmacy-software',
    title: 'Controlled Substance Tracking Software: DEA Compliance for Pharmacies',
    excerpt: 'Essential guide to controlled substance management software. Track Schedule II-V drugs, maintain DEA compliance, and prevent diversion with automated monitoring.',
    category: 'product',
    date: '2025-11-22',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&q=80',
    featured: false,
  },
  {
    id: 46,
    slug: 'telemedicine-software-african-hospitals',
    title: 'Telemedicine Software for African Hospitals: Expand Healthcare Access',
    excerpt: 'Implement telemedicine in your African healthcare facility. Video consultations, remote patient monitoring, and virtual care solutions for clinics and hospitals.',
    category: 'industry',
    date: '2025-11-20',
    readTime: '10 min read',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80',
    featured: false,
  },
  {
    id: 47,
    slug: 'pharmacy-chain-management-software',
    title: 'Pharmacy Chain Management Software: Multi-Location Pharmacy Solutions',
    excerpt: 'Manage multiple pharmacy locations from one platform. Centralized inventory, unified reporting, inter-branch transfers, and chain-wide analytics for pharmacy groups.',
    category: 'product',
    date: '2025-11-18',
    readTime: '9 min read',
    image: 'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=800&q=80',
    featured: false,
  },
  {
    id: 48,
    slug: 'hospital-queue-management-system',
    title: 'Hospital Queue Management System: Reduce Patient Wait Times by 50%',
    excerpt: 'Digital queue management solutions for hospitals. Token systems, appointment scheduling, SMS notifications, and real-time queue monitoring for better patient flow.',
    category: 'product',
    date: '2025-11-15',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800&q=80',
    featured: false,
  },
  {
    id: 49,
    slug: 'drug-interaction-checker-software',
    title: 'Drug Interaction Checker Software: Enhance Patient Safety in Pharmacies',
    excerpt: 'Automated drug-drug interaction checking for pharmacies. Prevent adverse reactions, check contraindications, and ensure safe dispensing with clinical decision support.',
    category: 'product',
    date: '2025-11-12',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=800&q=80',
    featured: false,
  },
  {
    id: 50,
    slug: 'hospital-bed-management-software',
    title: 'Hospital Bed Management Software: Optimize Bed Occupancy & Patient Flow',
    excerpt: 'Maximize hospital bed utilization with smart bed management systems. Real-time availability, automated assignments, discharge planning, and occupancy analytics.',
    category: 'product',
    date: '2025-11-10',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80',
    featured: false,
  },
  {
    id: 51,
    slug: 'pharmacy-software-barcode-scanning',
    title: 'Pharmacy POS with Barcode Scanning: Speed Up Checkout & Reduce Errors',
    excerpt: 'Implement barcode scanning in your pharmacy. Fast product lookup, accurate inventory tracking, error prevention, and seamless POS integration for efficient operations.',
    category: 'product',
    date: '2025-11-08',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1576671081837-49000212a370?w=800&q=80',
    featured: false,
  },
  {
    id: 52,
    slug: 'radiology-information-system-ris',
    title: 'Radiology Information System (RIS): Complete Guide for Hospitals 2026',
    excerpt: 'Everything about Radiology Information Systems. Manage imaging workflows, PACS integration, reporting, and billing for X-ray, CT, MRI, and ultrasound departments.',
    category: 'industry',
    date: '2025-11-05',
    readTime: '11 min read',
    image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&q=80',
    featured: false,
  },
  {
    id: 53,
    slug: 'pharmacy-software-credit-sales-management',
    title: 'Pharmacy Credit Sales Management: Track Customer Debts & Improve Cash Flow',
    excerpt: 'Manage credit sales and customer accounts in your pharmacy. Track outstanding balances, set credit limits, send payment reminders, and reduce bad debts.',
    category: 'product',
    date: '2025-11-02',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80',
    featured: false,
  },
  {
    id: 54,
    slug: 'hospital-appointment-scheduling-software',
    title: 'Hospital Appointment Scheduling Software: Online Booking for Healthcare',
    excerpt: 'Streamline patient appointments with hospital scheduling software. Online booking, automated reminders, doctor availability management, and reduced no-shows.',
    category: 'product',
    date: '2025-10-30',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80',
    featured: false,
  },
  {
    id: 55,
    slug: 'nhis-nhif-integration-healthcare-software',
    title: 'NHIS & NHIF Integration: Healthcare Software for Insurance Claims in Africa',
    excerpt: 'Integrate NHIS Ghana, NHIF Kenya, and other African health insurance schemes with your hospital or pharmacy software. Automate claims and reduce rejections.',
    category: 'industry',
    date: '2025-10-28',
    readTime: '10 min read',
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80',
    featured: false,
  },
  {
    id: 56,
    slug: 'pharmacy-supplier-management-purchase-orders',
    title: 'Pharmacy Supplier Management: Automate Purchase Orders & Vendor Relations',
    excerpt: 'Streamline pharmacy procurement with supplier management software. Create purchase orders, track deliveries, manage vendor relationships, and optimize purchasing.',
    category: 'product',
    date: '2025-10-25',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=800&q=80',
    featured: false,
  },
  {
    id: 57,
    slug: 'hospital-hr-payroll-management-software',
    title: 'Hospital HR & Payroll Software: Manage Healthcare Staff Efficiently',
    excerpt: 'Complete HR management for hospitals. Staff scheduling, attendance tracking, payroll processing, leave management, and performance evaluation for healthcare teams.',
    category: 'product',
    date: '2025-10-22',
    readTime: '9 min read',
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80',
    featured: false,
  },
  {
    id: 58,
    slug: 'pharmacy-analytics-sales-reports',
    title: 'Pharmacy Analytics & Sales Reports: Data-Driven Decision Making',
    excerpt: 'Leverage pharmacy analytics for business growth. Sales trends, inventory insights, profit margins, customer behavior, and actionable reports for pharmacy owners.',
    category: 'product',
    date: '2025-10-20',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    featured: false,
  },
  {
    id: 59,
    slug: 'hospital-pharmacy-management-system',
    title: 'Hospital Pharmacy Management System: Integrated Drug Dispensing Solutions',
    excerpt: 'Manage hospital pharmacies efficiently. Integrate with EMR, automate dispensing, track ward stock, manage formularies, and ensure medication safety.',
    category: 'product',
    date: '2025-10-18',
    readTime: '10 min read',
    image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=800&q=80',
    featured: false,
  },
  {
    id: 60,
    slug: 'digital-health-transformation-africa-2026',
    title: 'Digital Health Transformation in Africa 2026: Trends & Opportunities',
    excerpt: 'Explore the digital health revolution in Africa. Mobile health, telemedicine adoption, health tech startups, and the future of healthcare technology across the continent.',
    category: 'industry',
    date: '2025-10-15',
    readTime: '12 min read',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80',
    featured: false,
  },
  // 2026 Competitor-Focused SEO Articles
  {
    id: 61,
    slug: 'pioneerrx-alternatives-2026',
    title: 'Top 10 PioneerRx Alternatives in 2026: Best Pharmacy Software Compared',
    excerpt: 'Looking for PioneerRx alternatives? Compare the best pharmacy management software options including PharmaPOS, Liberty Software, BestRx, and more. Find affordable alternatives with better features.',
    category: 'industry',
    date: '2026-01-08',
    readTime: '15 min read',
    image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=800&q=80',
    featured: true,
  },
  {
    id: 62,
    slug: 'epic-alternatives-small-hospitals-2026',
    title: 'Best Epic Alternatives for Small Hospitals 2026: Affordable HMS Solutions',
    excerpt: 'Epic Systems is too expensive for small hospitals. Discover affordable Epic alternatives like HospitalOS that deliver enterprise features without the $500K+ price tag.',
    category: 'industry',
    date: '2026-01-08',
    readTime: '14 min read',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80',
    featured: true,
  },
  {
    id: 63,
    slug: 'pharmacy-software-offline-mode-2026',
    title: 'Best Pharmacy Software That Works Offline: No Internet Required in 2026',
    excerpt: 'Need pharmacy software that works without internet? Discover the best offline-capable pharmacy management systems for areas with unreliable connectivity.',
    category: 'industry',
    date: '2026-01-08',
    readTime: '12 min read',
    image: 'https://images.unsplash.com/photo-1576671081837-49000212a370?w=800&q=80',
    featured: false,
  },
  {
    id: 64,
    slug: 'pharmacy-software-no-monthly-fees-2026',
    title: 'Best Pharmacy Software with No Monthly Fees: One-Time Payment Options 2026',
    excerpt: 'Tired of monthly subscription fees for pharmacy software? Discover pharmacy management systems with one-time payment pricing. Save thousands annually.',
    category: 'industry',
    date: '2026-01-07',
    readTime: '11 min read',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80',
    featured: false,
  },
  {
    id: 65,
    slug: 'cerner-alternatives-2026',
    title: 'Top Cerner (Oracle Health) Alternatives 2026: Best Hospital Software Compared',
    excerpt: 'Looking for Cerner alternatives after the Oracle acquisition? Compare the best hospital management systems including HospitalOS, MEDITECH, and eClinicalWorks.',
    category: 'industry',
    date: '2026-01-07',
    readTime: '13 min read',
    image: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800&q=80',
    featured: false,
  },
  {
    id: 66,
    slug: 'affordable-hospital-management-software-2026',
    title: 'Affordable Hospital Management Software 2026: Enterprise Features, Budget Prices',
    excerpt: 'Find affordable hospital management software without sacrificing features. Compare budget-friendly HMS options for small hospitals, clinics, and healthcare facilities.',
    category: 'industry',
    date: '2026-01-06',
    readTime: '12 min read',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80',
    featured: false,
  },
  {
    id: 67,
    slug: 'mckesson-pharmacy-software-alternatives-2026',
    title: 'Top McKesson Pharmacy Software Alternatives 2026: Best Options Compared',
    excerpt: 'Looking for McKesson pharmacy software alternatives? Compare PharmaPOS and other top pharmacy management systems with better pricing and modern features.',
    category: 'industry',
    date: '2026-01-09',
    readTime: '12 min read',
    image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=800&q=80',
    featured: false,
  },
  {
    id: 68,
    slug: 'best-pharmacy-software-developing-countries-2026',
    title: 'Best Pharmacy Software for Developing Countries 2026: Affordable Solutions',
    excerpt: 'Discover the best pharmacy software designed for developing countries. Offline capability, mobile money integration, and affordable pricing for pharmacies worldwide.',
    category: 'industry',
    date: '2026-01-09',
    readTime: '14 min read',
    image: 'https://images.unsplash.com/photo-1576602976047-174e57a47881?w=800&q=80',
    featured: false,
  },
  {
    id: 69,
    slug: 'hospital-emr-software-comparison-2026',
    title: 'Hospital EMR Software Comparison 2026: Epic vs Cerner vs Affordable Alternatives',
    excerpt: 'Compare hospital EMR software options for 2026. See how Epic, Cerner, MEDITECH, and HospitalOS stack up on features, pricing, and implementation complexity.',
    category: 'industry',
    date: '2026-01-09',
    readTime: '15 min read',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
    featured: false,
  },
  {
    id: 70,
    slug: 'pharmacy-inventory-management-software-2026',
    title: 'Best Pharmacy Inventory Management Software 2026: Complete Buyer\'s Guide',
    excerpt: 'Find the best pharmacy inventory management software for 2026. Compare features like expiry tracking, auto-reorder, barcode scanning, and multi-location support.',
    category: 'industry',
    date: '2026-01-09',
    readTime: '13 min read',
    image: 'https://images.unsplash.com/photo-1585435557343-3b092031a831?w=800&q=80',
    featured: false,
  },
  // 2026 Africa Country-Specific SEO Articles
  {
    id: 71,
    slug: 'pharmacy-hospital-software-south-africa-2026',
    title: 'Best Pharmacy & Hospital Software in South Africa 2026: Complete Guide',
    excerpt: 'Discover the best pharmacy management and hospital software solutions for South Africa. Compare local providers, features, pricing, and e-prescription integration for ZAR.',
    category: 'industry',
    date: '2026-01-10',
    readTime: '14 min read',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80',
    featured: false,
  },
  {
    id: 72,
    slug: 'ethiopia-healthcare-software-digital-health-2026',
    title: 'Ethiopia Healthcare Software 2026: Hospital & Pharmacy Digital Transformation',
    excerpt: 'Ethiopia targets universal hospital digitalization by 2030. Learn about EMR adoption, DHIS2 integration, and the best healthcare software for Ethiopian facilities.',
    category: 'industry',
    date: '2026-01-10',
    readTime: '13 min read',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
    featured: false,
  },
  {
    id: 73,
    slug: 'pharmacy-software-egypt-healthcare-2026',
    title: 'Best Pharmacy Management Software in Egypt 2026: E-Pharmacy Revolution',
    excerpt: 'Navigate Egypt\'s growing e-pharmacy market with the right software. Compare solutions with Arabic support, Egyptian pound pricing, and healthcare authority compliance.',
    category: 'industry',
    date: '2026-01-10',
    readTime: '12 min read',
    image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=800&q=80',
    featured: false,
  },
  {
    id: 74,
    slug: 'morocco-healthcare-software-digitalization-2026',
    title: 'Morocco Healthcare Software 2026: Digital Health Transformation Guide',
    excerpt: 'Morocco invests $210M in healthcare digitalization. Discover the best hospital management and pharmacy software solutions for Moroccan healthcare facilities.',
    category: 'industry',
    date: '2026-01-10',
    readTime: '13 min read',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80',
    featured: false,
  },
  {
    id: 75,
    slug: 'rwanda-digital-health-pharmacy-hospital-software-2026',
    title: 'Rwanda Digital Health Revolution: Best Healthcare Software 2026',
    excerpt: 'Rwanda leads Africa in digital health innovation with AI-driven apps and national e-pharmacy plans. Find the best hospital and pharmacy software for Rwandan facilities.',
    category: 'industry',
    date: '2026-01-10',
    readTime: '12 min read',
    image: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800&q=80',
    featured: false,
  },
  {
    id: 76,
    slug: 'zambia-hospital-pharmacy-software-2026',
    title: 'Best Hospital & Pharmacy Software in Zambia 2026: Digital Health Strategy Guide',
    excerpt: 'Zambia\'s Digital Health Strategy 2022-2026 transforms healthcare. Compare the best HMS and pharmacy management software with ZMW support and local integration.',
    category: 'industry',
    date: '2026-01-10',
    readTime: '11 min read',
    image: 'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=800&q=80',
    featured: false,
  },
  {
    id: 77,
    slug: 'zimbabwe-pharmacy-hospital-software-2026',
    title: 'Zimbabwe Healthcare Software 2026: Pharmacy & Hospital Management Solutions',
    excerpt: 'Navigate Zimbabwe\'s growing pharmaceutical market with modern software. Compare solutions with multi-currency support, cloud-based options, and local compliance.',
    category: 'industry',
    date: '2026-01-10',
    readTime: '11 min read',
    image: 'https://images.unsplash.com/photo-1576602976047-174e57a47881?w=800&q=80',
    featured: false,
  },
  {
    id: 78,
    slug: 'north-africa-algeria-tunisia-healthcare-software-2026',
    title: 'North Africa Healthcare Software 2026: Algeria & Tunisia Digital Health Guide',
    excerpt: 'Algeria and Tunisia accelerate healthcare digitalization with new platforms and telemedicine initiatives. Find the best pharmacy and hospital software for North Africa.',
    category: 'industry',
    date: '2026-01-10',
    readTime: '14 min read',
    image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?w=800&q=80',
    featured: false,
  },
  {
    id: 79,
    slug: 'best-pharmacy-hospital-software-nigeria-2026',
    title: 'Best Pharmacy & Hospital Software in Nigeria 2026: ClinikEHR vs VirtualRx vs PharmaPOS Comparison',
    excerpt: 'Compare top pharmacy management and hospital software in Nigeria for 2026. Detailed analysis of ClinikEHR, VirtualRx, AjirMed, Hyella, MocDoc vs PharmaPOS and HospitalOS.',
    category: 'industry',
    date: '2026-01-10',
    readTime: '18 min read',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
    featured: true,
  },
  {
    id: 80,
    slug: 'best-pharmacy-hospital-software-ghana-2026',
    title: 'Best Pharmacy & Hospital Software in Ghana 2026: Msoft vs HealthTech vs PharmaPOS Comparison',
    excerpt: 'Compare leading pharmacy and hospital management software in Ghana. Detailed review of Msoft Ghana, HealthTech Ghana, Medinous vs PharmaPOS and HospitalOS with GHS pricing.',
    category: 'industry',
    date: '2026-01-10',
    readTime: '16 min read',
    image: 'https://images.unsplash.com/photo-1584982751601-97dcc096659c?w=800&q=80',
    featured: true,
  },
  {
    id: 81,
    slug: 'best-pharmacy-hospital-software-rwanda-2026',
    title: 'Best Pharmacy & Hospital Software in Rwanda 2026: E-Ubuzima Integration & Software Comparison',
    excerpt: 'Find the best pharmacy and hospital management software in Rwanda for 2026. Compare local solutions with E-Ubuzima integration, RWF pricing, and Mutuelle de Santé support.',
    category: 'industry',
    date: '2026-01-10',
    readTime: '15 min read',
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800&q=80',
    featured: true,
  },
  {
    id: 82,
    slug: 'best-pharmacy-hospital-software-kenya-2026',
    title: 'Best Pharmacy & Hospital Software in Kenya 2026: Hanmak vs AfyaServe vs PharmaPOS Comparison',
    excerpt: 'Compare top pharmacy and hospital management software in Kenya for 2026. Detailed analysis of Hanmak MedicentreV3, AfyaServe, Azania Systems vs PharmaPOS and HospitalOS with KES pricing.',
    category: 'industry',
    date: '2026-01-10',
    readTime: '17 min read',
    image: 'https://images.unsplash.com/photo-1504439468489-c8920d796a29?w=800&q=80',
    featured: true,
  },
  {
    id: 83,
    slug: 'best-pharmacy-hospital-software-tanzania-2026',
    title: 'Best Pharmacy & Hospital Software in Tanzania 2026: Complete HMS & Pharmacy System Guide',
    excerpt: 'Find the best pharmacy and hospital management software in Tanzania. Compare MoveTech, Smart Hospital Manager vs PharmaPOS and HospitalOS with TZS pricing and NHIF integration.',
    category: 'industry',
    date: '2026-01-10',
    readTime: '14 min read',
    image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?w=800&q=80',
    featured: false,
  },
  {
    id: 84,
    slug: 'best-pharmacy-hospital-software-uganda-2026',
    title: 'Best Pharmacy & Hospital Software in Uganda 2026: Gandapps vs MoveTech vs PharmaPOS Comparison',
    excerpt: 'Compare leading pharmacy and hospital management software in Uganda for 2026. Review of Gandapps Smart HMS, MoveTech, Build Uganda vs PharmaPOS and HospitalOS with UGX pricing.',
    category: 'industry',
    date: '2026-01-10',
    readTime: '15 min read',
    image: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800&q=80',
    featured: false,
  },
  {
    id: 85,
    slug: 'best-pharmacy-hospital-software-senegal-francophone-africa-2026',
    title: 'Best Pharmacy & Hospital Software in Senegal & Francophone Africa 2026: Kera Health vs Helium Health Comparison',
    excerpt: 'Find the best pharmacy and hospital software for Senegal and Francophone West Africa. Compare Kera Health, Helium Health vs PharmaPOS with XOF pricing and French language support.',
    category: 'industry',
    date: '2026-01-10',
    readTime: '16 min read',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=80',
    featured: false,
  },
  {
    id: 86,
    slug: 'best-pharmacy-hospital-software-ivory-coast-2026',
    title: 'Best Pharmacy & Hospital Software in Côte d\'Ivoire 2026: Complete Healthcare Software Guide',
    excerpt: 'Find the best pharmacy and hospital management software in Ivory Coast (Côte d\'Ivoire). Compare solutions with XOF pricing, French support, and Orange Money integration.',
    category: 'industry',
    date: '2026-01-10',
    readTime: '14 min read',
    image: 'https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=800&q=80',
    featured: false,
  },
  {
    id: 87,
    slug: 'best-pharmacy-hospital-software-cameroon-2026',
    title: 'Best Pharmacy & Hospital Software in Cameroon 2026: Bilingual Healthcare Solutions Guide',
    excerpt: 'Compare the best pharmacy and hospital management software in Cameroon. Bilingual French/English solutions with XAF pricing and mobile money integration.',
    category: 'industry',
    date: '2026-01-10',
    readTime: '15 min read',
    image: 'https://images.unsplash.com/photo-1612531386530-97286d97c2d2?w=800&q=80',
    featured: false,
  },
  {
    id: 88,
    slug: 'best-pharmacy-hospital-software-drc-congo-2026',
    title: 'Best Pharmacy & Hospital Software in DRC Congo 2026: Digital Health Transformation Guide',
    excerpt: 'Find the best pharmacy and hospital software for Democratic Republic of Congo. Compare solutions with CDF pricing, offline capability, and DHIS2 integration.',
    category: 'industry',
    date: '2026-01-10',
    readTime: '14 min read',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80',
    featured: false,
  },
  {
    id: 89,
    slug: 'best-pharmacy-hospital-software-botswana-2026',
    title: 'Best Pharmacy & Hospital Software in Botswana 2026: IPMS Integration & Software Guide',
    excerpt: 'Compare the best pharmacy and hospital management software in Botswana. Solutions with BWP pricing, IPMS compatibility, and modern healthcare features.',
    category: 'industry',
    date: '2026-01-10',
    readTime: '13 min read',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80',
    featured: false,
  },
  {
    id: 90,
    slug: 'best-pharmacy-hospital-software-angola-2026',
    title: 'Best Pharmacy & Hospital Software in Angola 2026: Luanda Healthcare Digitization Guide',
    excerpt: 'Find the best pharmacy and hospital management software in Angola. Portuguese language solutions with AOA pricing, ARMED compliance, and offline capability.',
    category: 'industry',
    date: '2026-01-10',
    readTime: '14 min read',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80',
    featured: false,
  },
  {
    id: 91,
    slug: 'best-pharmacy-hospital-software-mozambique-2026',
    title: 'Best Pharmacy & Hospital Software in Mozambique 2026: One District One Hospital Initiative',
    excerpt: 'Compare pharmacy and hospital management software in Mozambique. Portuguese solutions with MZN pricing and support for the healthcare expansion initiative.',
    category: 'industry',
    date: '2026-01-10',
    readTime: '13 min read',
    image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&q=80',
    featured: false,
  },
  {
    id: 92,
    slug: 'best-pharmacy-hospital-software-namibia-2026',
    title: 'Best Pharmacy & Hospital Software in Namibia 2026: eHealth Strategy & EDT Integration Guide',
    excerpt: 'Find the best pharmacy and hospital software in Namibia. Solutions compatible with National eHealth Strategy, Electronic Dispensing Tool, and NAD pricing.',
    category: 'industry',
    date: '2026-01-10',
    readTime: '14 min read',
    image: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?w=800&q=80',
    featured: false,
  },
  {
    id: 93,
    slug: 'best-pharmacy-hospital-software-madagascar-2026',
    title: 'Best Pharmacy & Hospital Software in Madagascar 2026: Island Nation Healthcare Solutions',
    excerpt: 'Compare pharmacy and hospital management software in Madagascar. French language solutions with MGA pricing for Antananarivo and nationwide healthcare facilities.',
    category: 'industry',
    date: '2026-01-10',
    readTime: '13 min read',
    image: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=800&q=80',
    featured: false,
  },
  {
    id: 94,
    slug: 'best-pharmacy-hospital-software-malawi-2026',
    title: 'Best Pharmacy & Hospital Software in Malawi 2026: eMMS Integration & Offline Solutions',
    excerpt: 'Find the best pharmacy and hospital management software in Malawi. Solutions compatible with eMMS, Health Hub, and SPARC programme with MWK pricing.',
    category: 'industry',
    date: '2026-01-10',
    readTime: '14 min read',
    image: 'https://images.unsplash.com/photo-1504813184591-01572f98c85f?w=800&q=80',
    featured: false,
  },
  {
    id: 95,
    slug: 'best-pharmacy-hospital-software-mauritius-2026',
    title: 'Best Pharmacy & Hospital Software in Mauritius 2026: Data Protection Act Compliant Solutions',
    excerpt: 'Compare pharmacy and hospital software in Mauritius. Bilingual English/French solutions with Data Protection Act 2017 compliance and MUR pricing.',
    category: 'industry',
    date: '2026-01-10',
    readTime: '13 min read',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80',
    featured: false,
  },
  {
    id: 96,
    slug: 'best-pharmacy-hospital-software-togo-benin-2026',
    title: 'Best Pharmacy & Hospital Software in Togo & Benin 2026: Francophone West Africa Guide',
    excerpt: 'Find the best pharmacy and hospital management software for Togo and Benin. French language solutions with XOF pricing and mPharma integration.',
    category: 'industry',
    date: '2026-01-10',
    readTime: '14 min read',
    image: 'https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=800&q=80',
    featured: false,
  },
  {
    id: 97,
    slug: 'best-pharmacy-hospital-software-libya-2026',
    title: 'Best Pharmacy & Hospital Software in Libya 2026: GS1 DataMatrix & Arabic Healthcare Solutions',
    excerpt: 'Compare pharmacy and hospital software in Libya. Arabic language solutions with GS1 DataMatrix compliance, LYD pricing, and pharmaceutical traceability.',
    category: 'industry',
    date: '2026-01-10',
    readTime: '14 min read',
    image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?w=800&q=80',
    featured: false,
  },
  {
    id: 98,
    slug: 'best-pharmacy-hospital-software-sudan-2026',
    title: 'Best Pharmacy & Hospital Software in Sudan 2026: Arabic Healthcare Solutions & SDG Pricing',
    excerpt: 'Find the best pharmacy and hospital management software in Sudan. Arabic language solutions with SDG pricing, offline capability, and OPD/IPD management.',
    category: 'industry',
    date: '2026-01-10',
    readTime: '14 min read',
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800&q=80',
    featured: false,
  },
  {
    id: 99,
    slug: 'best-pharmacy-hospital-software-sierra-leone-2026',
    title: 'Best Pharmacy & Hospital Software in Sierra Leone 2026: Free Healthcare Initiative Solutions',
    excerpt: 'Compare pharmacy and hospital software in Sierra Leone. Solutions supporting Free Healthcare Initiative with SLE pricing and supply chain management.',
    category: 'industry',
    date: '2026-01-10',
    readTime: '13 min read',
    image: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800&q=80',
    featured: false,
  },
  {
    id: 100,
    slug: 'best-pharmacy-hospital-software-gabon-2026',
    title: 'Best Pharmacy & Hospital Software in Gabon 2026: SIS Digital Health & Francophone Solutions',
    excerpt: 'Find the best pharmacy and hospital management software in Gabon. French language solutions with XAF pricing and Health Information System integration.',
    category: 'industry',
    date: '2026-01-10',
    readTime: '13 min read',
    image: 'https://images.unsplash.com/photo-1584982751601-97dcc096659c?w=800&q=80',
    featured: false,
  },
  {
    id: 101,
    slug: 'best-pharmacy-hospital-software-uae-saudi-arabia-gcc-2026',
    title: 'Best Pharmacy & Hospital Software in UAE & Saudi Arabia 2026: GCC Healthcare Digital Transformation',
    excerpt: 'Compare pharmacy and hospital software for UAE and Saudi Arabia. DHA, DOH, SEHA compliant solutions with AED/SAR pricing and Riayati/Seha integration.',
    category: 'industry',
    date: '2026-01-10',
    readTime: '15 min read',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80',
    featured: false,
  },
  {
    id: 102,
    slug: 'best-pharmacy-hospital-software-india-2026',
    title: 'Best Pharmacy & Hospital Software in India 2026: ABDM Integration & INR Pricing Guide',
    excerpt: 'Compare top pharmacy and hospital management software in India. Ayushman Bharat ABDM compatible solutions vs MocDoc, Practo, KareXpert alternatives.',
    category: 'industry',
    date: '2026-01-10',
    readTime: '16 min read',
    image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&q=80',
    featured: false,
  },
  {
    id: 103,
    slug: 'best-pharmacy-hospital-software-bangladesh-2026',
    title: 'Best Pharmacy & Hospital Software in Bangladesh 2026: Dhaka Healthcare Solutions Guide',
    excerpt: 'Find the best pharmacy and hospital management software in Bangladesh. BDT pricing with solutions for hospitals, clinics, and diagnostic centers.',
    category: 'industry',
    date: '2026-01-10',
    readTime: '13 min read',
    image: 'https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?w=800&q=80',
    featured: false,
  },
  {
    id: 104,
    slug: 'hospital-software-telemedicine-integration-2026',
    title: 'Hospital Software with Telemedicine Integration 2026: Complete Telehealth Features Guide',
    excerpt: 'Find hospital management software with built-in telemedicine. Video consultations, EHR integration, remote patient monitoring, and hybrid care features.',
    category: 'industry',
    date: '2026-01-10',
    readTime: '14 min read',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
    featured: false,
  },
  {
    id: 105,
    slug: 'chain-pharmacy-management-software-multi-store-2026',
    title: 'Best Chain Pharmacy Management Software 2026: Multi-Store & Retail Pharmacy Solutions',
    excerpt: 'Compare chain pharmacy software for multi-location management. Centralized inventory, pricing control, and reporting across all pharmacy branches.',
    category: 'industry',
    date: '2026-01-10',
    readTime: '14 min read',
    image: 'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=800&q=80',
    featured: false,
  },
  {
    id: 106,
    slug: 'pharmapos-vs-pioneerrx-comparison-2026',
    title: 'PharmaPOS vs PioneerRx 2026: Complete Pharmacy Software Comparison for Developing Markets',
    excerpt: 'Detailed comparison of PharmaPOS and PioneerRx pharmacy software. Features, pricing, offline capability, and which is better for Africa and emerging markets.',
    category: 'industry',
    date: '2026-01-10',
    readTime: '15 min read',
    image: 'https://images.unsplash.com/photo-1559526324-593bc073d938?w=800&q=80',
    featured: false,
  },
  {
    id: 107,
    slug: 'best-pharmacy-hospital-software-philippines-2026',
    title: 'Best Pharmacy & Hospital Software in Philippines 2026: DOH & FDA Compliant Solutions',
    excerpt: 'Compare pharmacy and hospital software for the Philippines. DOH Hospital Pharmacy Manual compliant with PHP pricing and FDA requirements.',
    category: 'industry',
    date: '2026-01-10',
    readTime: '14 min read',
    image: 'https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?w=800&q=80',
    featured: false,
  },
  {
    id: 108,
    slug: 'best-pharmacy-hospital-software-indonesia-2026',
    title: 'Best Pharmacy & Hospital Software in Indonesia 2026: BPJS & SATUSEHAT Integration Guide',
    excerpt: 'Find the best apotek and rumah sakit software in Indonesia. BPJS Kesehatan integration with IDR pricing and Bahasa Indonesia support.',
    category: 'industry',
    date: '2026-01-10',
    readTime: '14 min read',
    image: 'https://images.unsplash.com/photo-1555899434-94d1368aa7af?w=800&q=80',
    featured: false,
  },
  {
    id: 109,
    slug: 'best-pharmacy-hospital-software-jamaica-caribbean-2026',
    title: 'Best Pharmacy & Hospital Software in Jamaica & Caribbean 2026: NHF Integration Guide',
    excerpt: 'Compare pharmacy and hospital software for Jamaica and the Caribbean. National Health Fund compatible with JMD pricing and Drug Serv integration.',
    category: 'industry',
    date: '2026-01-10',
    readTime: '13 min read',
    image: 'https://images.unsplash.com/photo-1548678747-f3a16bd92b7e?w=800&q=80',
    featured: false,
  },
  {
    id: 110,
    slug: 'cloud-vs-on-premise-hospital-software-2026',
    title: 'Cloud vs On-Premise Hospital Software 2026: Complete Comparison Guide',
    excerpt: 'Compare cloud-based and on-premise hospital management software. TCO analysis, security, accessibility, and which deployment is right for your facility.',
    category: 'industry',
    date: '2026-01-10',
    readTime: '15 min read',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80',
    featured: false,
  },
  {
    id: 111,
    slug: 'pharmacy-inventory-management-reduce-stockouts-2026',
    title: 'Pharmacy Inventory Management 2026: Reduce Stockouts & Expiry Waste by 40%',
    excerpt: 'Best practices for pharmacy inventory management. FIFO methods, reorder points, expiry tracking, and AI-powered solutions to reduce waste.',
    category: 'industry',
    date: '2026-01-10',
    readTime: '14 min read',
    image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=800&q=80',
    featured: false,
  },
  {
    id: 112,
    slug: 'best-pharmacy-hospital-software-mexico-2026',
    title: 'Best Pharmacy & Hospital Software in Mexico 2026: COFEPRIS & IMSS Compliant',
    excerpt: 'Compare pharmacy and hospital software for Mexico. COFEPRIS compliant with IMSS/ISSSTE integration, MXN pricing, and SPEI/OXXO payment support.',
    category: 'industry',
    date: '2026-01-10',
    readTime: '15 min read',
    image: 'https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?w=800&q=80',
    featured: true,
  },
  {
    id: 113,
    slug: 'best-pharmacy-hospital-software-brazil-2026',
    title: 'Best Pharmacy & Hospital Software in Brazil 2026: ANVISA & SUS Integration',
    excerpt: 'Compare pharmacy and hospital software for Brazil. ANVISA compliant with SUS integration, SNGPC controlled substances, BRL pricing, and PIX payments.',
    category: 'industry',
    date: '2026-01-10',
    readTime: '16 min read',
    image: 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=800&q=80',
    featured: true,
  },
  {
    id: 114,
    slug: 'best-pharmacy-hospital-software-colombia-2026',
    title: 'Best Pharmacy & Hospital Software in Colombia 2026: INVIMA & EPS Compliant',
    excerpt: 'Compare pharmacy and hospital software for Colombia. INVIMA compliant with EPS insurance integration, RIPS reporting, COP pricing, and Nequi/PSE payments.',
    category: 'industry',
    date: '2026-01-10',
    readTime: '15 min read',
    image: 'https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=800&q=80',
    featured: true,
  },
  {
    id: 115,
    slug: 'pharmapos-vs-computer-rx-comparison-2026',
    title: 'PharmaPOS vs Computer-Rx 2026: Independent Pharmacy Software Comparison',
    excerpt: 'Detailed comparison of PharmaPOS and Computer-Rx pharmacy software. Features, pricing, support quality, and which is best for independent pharmacies.',
    category: 'industry',
    date: '2026-01-10',
    readTime: '12 min read',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    featured: true,
  },
  {
    id: 116,
    slug: 'starting-new-pharmacy-software-guide-2026',
    title: 'Starting a New Pharmacy 2026: Complete Software Setup Guide',
    excerpt: 'Complete guide to pharmacy software setup for new pharmacies. Equipment checklist, software selection, compliance requirements, and launch timeline.',
    category: 'industry',
    date: '2026-01-10',
    readTime: '18 min read',
    image: 'https://images.unsplash.com/photo-1576602976047-174e57a47881?w=800&q=80',
    featured: true,
  },
];

const pressReleases = [
  {
    date: '2024-12-01',
    title: 'MedSoftwares Announces PharmaPOS 3.0 with AI Features',
  },
  {
    date: '2024-11-15',
    title: 'MedSoftwares Expands to East African Markets',
  },
  {
    date: '2024-10-20',
    title: 'MedSoftwares and NHIS Ghana Announce Partnership',
  },
  {
    date: '2024-08-01',
    title: 'MedSoftwares Reaches 2,500 Customer Milestone',
  },
];

export default function NewsPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const sortedArticles = [...newsArticles].sort((a, b) =>
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const filteredArticles = activeCategory === 'all'
    ? sortedArticles
    : sortedArticles.filter(article => article.category === activeCategory);

  const featuredArticles = newsArticles.filter(article => article.featured);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const getCategoryLabel = (categoryId: string) => {
    const category = categories.find(c => c.id === categoryId);
    return category ? category.label : categoryId;
  };

  const getCategoryColor = (categoryId: string) => {
    switch (categoryId) {
      case 'product':
        return 'bg-green-100 text-green-700';
      case 'company':
        return 'bg-blue-100 text-blue-700';
      case 'industry':
        return 'bg-purple-100 text-purple-700';
      case 'press':
        return 'bg-orange-100 text-orange-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-5xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 bg-[#166534]/10 text-[#166534] text-sm font-semibold rounded-full mb-6">
              News & Media
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold text-gray-900 mb-6">
              Latest Updates from MedSoftwares
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Stay informed about product updates, company news, industry insights, and how we&apos;re transforming healthcare technology across Africa.
            </p>
          </div>
        </section>

        {/* Featured Articles */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-heading font-extrabold text-gray-900 mb-8">Featured Stories</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredArticles.map((article) => (
                <article
                  key={article.id}
                  className="group bg-gray-50 rounded-3xl overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <Link href={`/news/${article.slug}`} className="block aspect-video relative overflow-hidden">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </Link>
                  <div className="p-6 md:p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(article.category)}`}>
                        {getCategoryLabel(article.category)}
                      </span>
                      <span className="text-gray-500 text-sm">{formatDate(article.date)}</span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#166534] transition-colors">
                      <Link href={`/news/${article.slug}`}>
                        {article.title}
                      </Link>
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">{article.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{article.readTime}</span>
                      <Link
                        href={`/news/${article.slug}`}
                        className="text-[#166534] font-semibold text-sm hover:underline"
                      >
                        Read More →
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Category Filter & Articles */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            {/* Category Tabs */}
            <div className="flex flex-wrap gap-2 mb-12">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                    activeCategory === category.id
                      ? 'bg-[#166534] text-white'
                      : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>

            {/* Articles Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((article) => (
                <article
                  key={article.id}
                  className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300"
                >
                  <Link href={`/news/${article.slug}`} className="block aspect-video relative overflow-hidden">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </Link>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${getCategoryColor(article.category)}`}>
                        {getCategoryLabel(article.category)}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#166534] transition-colors line-clamp-2">
                      <Link href={`/news/${article.slug}`}>
                        {article.title}
                      </Link>
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{article.excerpt}</p>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">{formatDate(article.date)}</span>
                      <span className="text-gray-500">{article.readTime}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <button className="px-8 py-3 bg-white text-gray-900 font-semibold rounded-full border border-gray-200 hover:bg-gray-50 hover:border-gray-300 transition-all duration-200">
                Load More Articles
              </button>
            </div>
          </div>
        </section>

        {/* Press Releases Sidebar */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Newsletter Signup */}
              <div className="lg:col-span-2">
                <div className="bg-gradient-to-br from-[#166534] to-green-700 rounded-3xl p-8 md:p-12">
                  <h2 className="text-2xl md:text-3xl font-heading font-extrabold text-white mb-4">
                    Subscribe to Our Newsletter
                  </h2>
                  <p className="text-green-100 mb-6">
                    Get the latest news, product updates, and industry insights delivered to your inbox monthly.
                  </p>
                  <form className="flex flex-col sm:flex-row gap-4">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="flex-1 px-5 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/60 focus:bg-white/20 focus:border-white/40 outline-none transition-all"
                    />
                    <button
                      type="submit"
                      className="px-8 py-3 bg-white text-[#166534] font-bold rounded-xl hover:bg-green-50 transition-colors"
                    >
                      Subscribe
                    </button>
                  </form>
                  <p className="text-green-200 text-sm mt-4">
                    No spam. Unsubscribe anytime.
                  </p>
                </div>
              </div>

              {/* Press Releases */}
              <div>
                <h2 className="text-xl font-heading font-extrabold text-gray-900 mb-6">Press Releases</h2>
                <div className="space-y-4">
                  {pressReleases.map((release, index) => (
                    <a
                      key={index}
                      href="#"
                      className="block p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                    >
                      <p className="text-sm text-gray-500 mb-1">{formatDate(release.date)}</p>
                      <p className="text-gray-900 font-medium text-sm">{release.title}</p>
                    </a>
                  ))}
                </div>
                <a
                  href="#"
                  className="inline-block mt-6 text-[#166534] font-semibold text-sm hover:underline"
                >
                  View All Press Releases →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Media Kit */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-heading font-extrabold text-gray-900 mb-4">
              Media Resources
            </h2>
            <p className="text-gray-600 mb-8">
              Download our media kit for logos, brand guidelines, executive photos, and company information.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#166534] text-white font-semibold rounded-xl hover:bg-[#14532d] transition-colors"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download Media Kit
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-900 font-semibold rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors"
              >
                Contact PR Team
              </Link>
            </div>
          </div>
        </section>

        <Footer />
    </main>
  );
}
