#!/usr/bin/env python3
"""Generate infographics for the 16 new SEO articles."""

import os
import sys

sys.path.insert(0, os.path.dirname(__file__))
from infographic_generator import InfographicGenerator

ARTICLES = [
    # Open-source competitor comparisons
    {
        "filename": "openmrs-vs-hospitalos-comparison.png",
        "title": "OpenMRS vs HospitalOS",
        "subtitle": "Open Source vs Commercial HMS Compared",
        "style": "modern_dark",
        "type": "split",
        "left_title": "OpenMRS",
        "right_title": "HospitalOS",
        "left_items": [
            {"value": "Free", "label": "License Cost"},
            {"value": "Community", "label": "Support Model"},
            {"value": "Manual", "label": "Setup Required"},
            {"value": "Limited", "label": "Offline Mode"},
        ],
        "right_items": [
            {"value": "$499+", "label": "One-Time Payment"},
            {"value": "24/7", "label": "Dedicated Support"},
            {"value": "Turnkey", "label": "Ready to Use"},
            {"value": "Full", "label": "Offline Capability"},
        ],
    },
    {
        "filename": "bahmni-vs-hospitalos.png",
        "title": "Bahmni vs HospitalOS",
        "subtitle": "Hospital Management System Comparison",
        "style": "tech",
        "type": "bold_cards",
        "stats": [
            {"value": "25+", "label": "HospitalOS Modules"},
            {"value": "24/7", "label": "Support Available"},
            {"value": "99.9%", "label": "Uptime Guarantee"},
            {"value": "$0/mo", "label": "No Subscriptions"},
        ],
    },
    {
        "filename": "gnu-health-vs-hospitalos.png",
        "title": "GNU Health vs HospitalOS",
        "subtitle": "Hospital Software for Developing Countries",
        "style": "nature",
        "type": "circle_stats",
        "stats": [
            {"value": "25+", "label": "Integrated Modules"},
            {"value": "M-Pesa", "label": "Mobile Money"},
            {"value": "Multi", "label": "Currency Support"},
            {"value": "Offline", "label": "Works Anywhere"},
        ],
    },
    {
        "filename": "hospitalrun-vs-hospitalos.png",
        "title": "HospitalRun vs HospitalOS",
        "subtitle": "Offline-First Hospital Software Compared",
        "style": "ocean",
        "type": "minimal_stats",
        "accent": "#0891b2",
        "stats": [
            {"value": "Full", "label": "Offline Capability"},
            {"value": "Auto", "label": "Data Sync"},
            {"value": "25+", "label": "Modules"},
            {"value": "24/7", "label": "Live Support"},
        ],
    },
    # Telepharmacy and specialty guides
    {
        "filename": "telepharmacy-software-guide.png",
        "title": "Telepharmacy Software",
        "subtitle": "Remote Pharmacy Management Guide 2026",
        "style": "vibrant",
        "type": "bold_cards",
        "stats": [
            {"value": "2200+", "label": "Pharmacy Closures/Year"},
            {"value": "65%", "label": "Rural Access Gap"},
            {"value": "40%", "label": "Cost Reduction"},
            {"value": "24/7", "label": "Service Coverage"},
        ],
    },
    {
        "filename": "hospital-software-works-without-internet.png",
        "title": "Hospital Software\nWithout Internet",
        "subtitle": "Complete Offline HMS Guide",
        "style": "modern_dark",
        "type": "elegant_stats",
        "theme": "hospital",
        "stats": [
            {"value": "99.9%", "label": "Uptime Offline"},
            {"value": "Auto", "label": "Data Sync"},
            {"value": "0", "label": "Data Loss"},
            {"value": "Full", "label": "Feature Access"},
        ],
    },
    {
        "filename": "pharmacy-software-ngo-humanitarian.png",
        "title": "Pharmacy Software\nfor NGOs",
        "subtitle": "Humanitarian Healthcare Procurement Guide",
        "style": "nature",
        "type": "statistics",
        "theme": "pharmacy",
        "stats": [
            {"value": "190+", "label": "Countries in Need"},
            {"value": "WHO", "label": "Essential Medicines"},
            {"value": "Multi", "label": "Currency Support"},
            {"value": "Offline", "label": "Field Ready"},
        ],
    },
    {
        "filename": "pharmacy-software-cost-pricing-guide.png",
        "title": "Pharmacy Software\nPricing Guide 2026",
        "subtitle": "Complete Cost Comparison & Analysis",
        "style": "sunset",
        "type": "bold_cards",
        "stats": [
            {"value": "$0", "label": "Open Source"},
            {"value": "$99/mo", "label": "SaaS Average"},
            {"value": "$299+", "label": "One-Time License"},
            {"value": "5-10x", "label": "ROI in Year 1"},
        ],
    },
    # Regional competitor comparisons
    {
        "filename": "mpharma-alternatives-pharmacy-software.png",
        "title": "mPharma Alternatives",
        "subtitle": "Best Pharmacy Software for Africa 2026",
        "style": "royal",
        "type": "circle_stats",
        "stats": [
            {"value": "60%", "label": "Faster Checkout"},
            {"value": "$0/mo", "label": "No Subscriptions"},
            {"value": "Full", "label": "POS + Inventory"},
            {"value": "Offline", "label": "Works Anywhere"},
        ],
    },
    {
        "filename": "helium-health-alternatives.png",
        "title": "Helium Health Alternatives",
        "subtitle": "Hospital Management for Africa 2026",
        "style": "tech",
        "type": "minimal_stats",
        "accent": "#22d3ee",
        "stats": [
            {"value": "25+", "label": "Modules"},
            {"value": "Offline", "label": "Full Capability"},
            {"value": "M-Money", "label": "Integration"},
            {"value": "$0/mo", "label": "One-Time Fee"},
        ],
    },
    {
        "filename": "pharmacyplus-uae-alternatives.png",
        "title": "PharmacyPlus UAE\nAlternatives",
        "subtitle": "Pharmacy Software for Middle East 2026",
        "style": "sunset",
        "type": "elegant_stats",
        "theme": "pharmacy",
        "stats": [
            {"value": "Arabic", "label": "Full Support"},
            {"value": "Multi", "label": "Currency"},
            {"value": "Offline", "label": "Capability"},
            {"value": "$0/mo", "label": "No Subscription"},
        ],
    },
    {
        "filename": "danphe-emr-alternatives.png",
        "title": "Danphe EMR Alternatives",
        "subtitle": "Hospital Software for South Asia 2026",
        "style": "ocean",
        "type": "bold_cards",
        "stats": [
            {"value": "25+", "label": "Integrated Modules"},
            {"value": "NPR", "label": "Local Currency"},
            {"value": "Full", "label": "Offline Support"},
            {"value": "24/7", "label": "Live Support"},
        ],
    },
    # AEO-optimized guide articles
    {
        "filename": "what-is-pharmacy-management-software.png",
        "title": "What Is Pharmacy\nManagement Software?",
        "subtitle": "Everything You Need to Know in 2026",
        "style": "nature",
        "type": "statistics",
        "theme": "pharmacy",
        "stats": [
            {"value": "60%", "label": "Faster Operations"},
            {"value": "40%", "label": "Less Waste"},
            {"value": "99%", "label": "Accuracy Rate"},
            {"value": "5x", "label": "ROI Average"},
        ],
    },
    {
        "filename": "what-is-hospital-management-system.png",
        "title": "What Is a Hospital\nManagement System?",
        "subtitle": "Complete HMS Guide 2026",
        "style": "modern_dark",
        "type": "elegant_stats",
        "theme": "hospital",
        "stats": [
            {"value": "25+", "label": "Core Modules"},
            {"value": "85%", "label": "Less Paperwork"},
            {"value": "50%", "label": "Faster Processing"},
            {"value": "24/7", "label": "System Uptime"},
        ],
    },
    {
        "filename": "how-to-digitize-pharmacy-operations.png",
        "title": "How to Digitize\nPharmacy Operations",
        "subtitle": "Step-by-Step Implementation Guide",
        "style": "vibrant",
        "type": "circle_stats",
        "stats": [
            {"value": "Step 1", "label": "Assess Needs"},
            {"value": "Step 2", "label": "Choose Software"},
            {"value": "Step 3", "label": "Migrate Data"},
            {"value": "Step 4", "label": "Go Live"},
        ],
    },
    {
        "filename": "emr-vs-ehr-difference-explained.png",
        "title": "EMR vs EHR",
        "subtitle": "What's the Difference? Simple Guide",
        "style": "tech",
        "type": "split",
        "left_title": "EMR",
        "right_title": "EHR",
        "left_items": [
            {"value": "Single", "label": "Facility Only"},
            {"value": "Clinical", "label": "Medical Charts"},
            {"value": "Internal", "label": "Not Shared"},
            {"value": "Basic", "label": "Patient Data"},
        ],
        "right_items": [
            {"value": "Multi", "label": "Cross-Organization"},
            {"value": "Complete", "label": "Full History"},
            {"value": "Shared", "label": "Interoperable"},
            {"value": "Comprehensive", "label": "Lifetime Record"},
        ],
    },
]


def update_mdx_image(articles_dir, slug, image_filename):
    """Update MDX file to use the generated infographic."""
    mdx_path = os.path.join(articles_dir, f"{slug}.mdx")
    if os.path.exists(mdx_path):
        with open(mdx_path, 'r', encoding='utf-8') as f:
            content = f.read()
        # Replace unsplash image with infographic
        import re
        content = re.sub(
            r'image: "https://images\.unsplash\.com/[^"]*"',
            f'image: "/infographics/{image_filename}"',
            content
        )
        with open(mdx_path, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"  Updated MDX: {slug}")


def generate_all():
    generator = InfographicGenerator()
    articles_dir = os.path.join(os.path.dirname(__file__), '..', 'src', 'content', 'articles')

    slug_map = {
        "openmrs-vs-hospitalos-comparison.png": "openmrs-vs-hospitalos-comparison-2026",
        "bahmni-vs-hospitalos.png": "bahmni-vs-hospitalos-hospital-software-2026",
        "gnu-health-vs-hospitalos.png": "gnu-health-vs-hospitalos-comparison-2026",
        "hospitalrun-vs-hospitalos.png": "hospitalrun-vs-hospitalos-comparison-2026",
        "telepharmacy-software-guide.png": "telepharmacy-software-guide-2026",
        "hospital-software-works-without-internet.png": "hospital-software-works-without-internet-2026",
        "pharmacy-software-ngo-humanitarian.png": "pharmacy-software-ngo-humanitarian-2026",
        "pharmacy-software-cost-pricing-guide.png": "pharmacy-software-cost-pricing-guide-2026",
        "mpharma-alternatives-pharmacy-software.png": "mpharma-alternatives-pharmacy-software-2026",
        "helium-health-alternatives.png": "helium-health-alternatives-hospital-software-2026",
        "pharmacyplus-uae-alternatives.png": "pharmacyplus-uae-alternatives-2026",
        "danphe-emr-alternatives.png": "danphe-emr-alternatives-hospital-software-2026",
        "what-is-pharmacy-management-software.png": "what-is-pharmacy-management-software-guide-2026",
        "what-is-hospital-management-system.png": "what-is-hospital-management-system-complete-guide-2026",
        "how-to-digitize-pharmacy-operations.png": "how-to-digitize-pharmacy-operations-2026",
        "emr-vs-ehr-difference-explained.png": "emr-vs-ehr-difference-explained-2026",
    }

    for i, article in enumerate(ARTICLES):
        filename = article["filename"]
        title = article["title"]
        subtitle = article["subtitle"]
        style = article["style"]
        infographic_type = article["type"]

        print(f"[{i+1}/{len(ARTICLES)}] Generating: {filename}")

        if infographic_type == "split":
            generator.generate_split_infographic(
                title=title,
                left_items=article["left_items"],
                right_items=article["right_items"],
                left_title=article.get("left_title", "Option A"),
                right_title=article.get("right_title", "Option B"),
                filename=filename,
                style=style,
            )
        elif infographic_type == "bold_cards":
            generator.generate_bold_cards_infographic(
                title=title, stats=article["stats"], subtitle=subtitle,
                filename=filename, style=style,
            )
        elif infographic_type == "circle_stats":
            generator.generate_circle_stats_infographic(
                title=title, stats=article["stats"], subtitle=subtitle,
                filename=filename, style=style,
            )
        elif infographic_type == "minimal_stats":
            generator.generate_minimal_stats_infographic(
                title=title, stats=article["stats"], subtitle=subtitle,
                filename=filename, accent_color=article.get("accent", "#3b82f6"),
            )
        elif infographic_type == "elegant_stats":
            generator.generate_elegant_stats_infographic(
                title=title, stats=article["stats"], subtitle=subtitle,
                filename=filename, theme=article.get("theme", "pharmacy"),
            )
        elif infographic_type == "statistics":
            generator.generate_statistics_infographic(
                title=title, stats=article["stats"], subtitle=subtitle,
                filename=filename, theme=article.get("theme", "pharmacy"),
            )

        # Update the MDX file
        slug = slug_map.get(filename)
        if slug:
            update_mdx_image(articles_dir, slug, filename)

    print(f"\nDone! Generated {len(ARTICLES)} infographics.")


if __name__ == "__main__":
    generate_all()
