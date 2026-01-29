#!/usr/bin/env python3
"""Generate unique infographics for the 25 country-specific articles with broken images."""

import os
import sys
import re

sys.path.insert(0, os.path.dirname(__file__))
from infographic_generator import InfographicGenerator

# Country data: slug suffix -> (display name, region, style, stats)
COUNTRIES = {
    "afghanistan": ("Afghanistan", "Central Asia", "modern_dark", [
        {"value": "40M+", "label": "Population Served"},
        {"value": "99.9%", "label": "System Uptime"},
        {"value": "Dari", "label": "Language Support"},
        {"value": "AFN", "label": "Currency Support"},
    ]),
    "bolivia": ("Bolivia", "South America", "nature", [
        {"value": "12M+", "label": "Population Served"},
        {"value": "60%", "label": "Faster Checkout"},
        {"value": "Spanish", "label": "Language Support"},
        {"value": "BOB", "label": "Currency Support"},
    ]),
    "cambodia": ("Cambodia", "Southeast Asia", "ocean", [
        {"value": "17M+", "label": "Population Served"},
        {"value": "40%", "label": "Less Inventory Waste"},
        {"value": "Khmer", "label": "Language Support"},
        {"value": "KHR", "label": "Currency Support"},
    ]),
    "costa-rica": ("Costa Rica", "Central America", "vibrant", [
        {"value": "5M+", "label": "Population Served"},
        {"value": "85%", "label": "Less Paperwork"},
        {"value": "Spanish", "label": "Language Support"},
        {"value": "CRC", "label": "Currency Support"},
    ]),
    "egypt": ("Egypt", "North Africa", "sunset", [
        {"value": "104M+", "label": "Population Served"},
        {"value": "50%", "label": "Faster Processing"},
        {"value": "Arabic", "label": "Language Support"},
        {"value": "EGP", "label": "Currency Support"},
    ]),
    "ethiopia": ("Ethiopia", "East Africa", "nature", [
        {"value": "120M+", "label": "Population Served"},
        {"value": "60%", "label": "Faster Checkout"},
        {"value": "Amharic", "label": "Language Support"},
        {"value": "ETB", "label": "Currency Support"},
    ]),
    "haiti": ("Haiti", "Caribbean", "royal", [
        {"value": "11M+", "label": "Population Served"},
        {"value": "99.9%", "label": "Offline Reliability"},
        {"value": "French", "label": "Language Support"},
        {"value": "HTG", "label": "Currency Support"},
    ]),
    "honduras": ("Honduras", "Central America", "ocean", [
        {"value": "10M+", "label": "Population Served"},
        {"value": "40%", "label": "Less Inventory Waste"},
        {"value": "Spanish", "label": "Language Support"},
        {"value": "HNL", "label": "Currency Support"},
    ]),
    "iraq": ("Iraq", "Middle East", "modern_dark", [
        {"value": "42M+", "label": "Population Served"},
        {"value": "85%", "label": "Less Paperwork"},
        {"value": "Arabic", "label": "Language Support"},
        {"value": "IQD", "label": "Currency Support"},
    ]),
    "jordan": ("Jordan", "Middle East", "tech", [
        {"value": "11M+", "label": "Population Served"},
        {"value": "50%", "label": "Faster Processing"},
        {"value": "Arabic", "label": "Language Support"},
        {"value": "JOD", "label": "Currency Support"},
    ]),
    "kuwait": ("Kuwait", "Middle East", "sunset", [
        {"value": "4M+", "label": "Population Served"},
        {"value": "60%", "label": "Faster Checkout"},
        {"value": "Arabic", "label": "Language Support"},
        {"value": "KWD", "label": "Currency Support"},
    ]),
    "morocco": ("Morocco", "North Africa", "vibrant", [
        {"value": "37M+", "label": "Population Served"},
        {"value": "40%", "label": "Less Inventory Waste"},
        {"value": "Arabic", "label": "Language Support"},
        {"value": "MAD", "label": "Currency Support"},
    ]),
    "myanmar": ("Myanmar", "Southeast Asia", "nature", [
        {"value": "54M+", "label": "Population Served"},
        {"value": "99.9%", "label": "Offline Reliability"},
        {"value": "Burmese", "label": "Language Support"},
        {"value": "MMK", "label": "Currency Support"},
    ]),
    "nepal": ("Nepal", "South Asia", "ocean", [
        {"value": "30M+", "label": "Population Served"},
        {"value": "85%", "label": "Less Paperwork"},
        {"value": "Nepali", "label": "Language Support"},
        {"value": "NPR", "label": "Currency Support"},
    ]),
    "oman": ("Oman", "Middle East", "royal", [
        {"value": "5M+", "label": "Population Served"},
        {"value": "50%", "label": "Faster Processing"},
        {"value": "Arabic", "label": "Language Support"},
        {"value": "OMR", "label": "Currency Support"},
    ]),
    "panama": ("Panama", "Central America", "tech", [
        {"value": "4M+", "label": "Population Served"},
        {"value": "60%", "label": "Faster Checkout"},
        {"value": "Spanish", "label": "Language Support"},
        {"value": "USD", "label": "Currency Support"},
    ]),
    "paraguay": ("Paraguay", "South America", "sunset", [
        {"value": "7M+", "label": "Population Served"},
        {"value": "40%", "label": "Less Inventory Waste"},
        {"value": "Spanish", "label": "Language Support"},
        {"value": "PYG", "label": "Currency Support"},
    ]),
    "qatar": ("Qatar", "Middle East", "modern_dark", [
        {"value": "3M+", "label": "Population Served"},
        {"value": "85%", "label": "Less Paperwork"},
        {"value": "Arabic", "label": "Language Support"},
        {"value": "QAR", "label": "Currency Support"},
    ]),
    "south-africa": ("South Africa", "Southern Africa", "vibrant", [
        {"value": "60M+", "label": "Population Served"},
        {"value": "50%", "label": "Faster Processing"},
        {"value": "English", "label": "Language Support"},
        {"value": "ZAR", "label": "Currency Support"},
    ]),
    "trinidad-tobago": ("Trinidad & Tobago", "Caribbean", "ocean", [
        {"value": "1.4M+", "label": "Population Served"},
        {"value": "60%", "label": "Faster Checkout"},
        {"value": "English", "label": "Language Support"},
        {"value": "TTD", "label": "Currency Support"},
    ]),
    "turkey": ("Turkey", "Eurasia", "tech", [
        {"value": "85M+", "label": "Population Served"},
        {"value": "40%", "label": "Less Inventory Waste"},
        {"value": "Turkish", "label": "Language Support"},
        {"value": "TRY", "label": "Currency Support"},
    ]),
    "uruguay": ("Uruguay", "South America", "nature", [
        {"value": "3.5M+", "label": "Population Served"},
        {"value": "85%", "label": "Less Paperwork"},
        {"value": "Spanish", "label": "Language Support"},
        {"value": "UYU", "label": "Currency Support"},
    ]),
    "venezuela": ("Venezuela", "South America", "royal", [
        {"value": "28M+", "label": "Population Served"},
        {"value": "99.9%", "label": "Offline Reliability"},
        {"value": "Spanish", "label": "Language Support"},
        {"value": "VES", "label": "Currency Support"},
    ]),
    "zambia": ("Zambia", "Southern Africa", "sunset", [
        {"value": "20M+", "label": "Population Served"},
        {"value": "50%", "label": "Faster Processing"},
        {"value": "English", "label": "Language Support"},
        {"value": "ZMW", "label": "Currency Support"},
    ]),
    "zimbabwe": ("Zimbabwe", "Southern Africa", "modern_dark", [
        {"value": "16M+", "label": "Population Served"},
        {"value": "60%", "label": "Faster Checkout"},
        {"value": "English", "label": "Language Support"},
        {"value": "ZWL", "label": "Currency Support"},
    ]),
}

# Alternate between different infographic styles for variety
STYLES = ["bold_cards", "circle_stats", "minimal_stats", "elegant_stats", "statistics"]

def generate_all():
    generator = InfographicGenerator()
    articles_dir = os.path.join(os.path.dirname(__file__), '..', 'src', 'content', 'articles')

    for i, (slug, (country, region, style, stats)) in enumerate(COUNTRIES.items()):
        filename = f"best-pharmacy-hospital-software-{slug}.png"
        infographic_style = STYLES[i % len(STYLES)]
        title = f"Best Healthcare Software\nfor {country}"
        subtitle = f"Pharmacy & Hospital Management | {region}"

        print(f"[{i+1}/25] Generating infographic for {country}...")

        if infographic_style == "bold_cards":
            generator.generate_bold_cards_infographic(
                title=title, stats=stats, subtitle=subtitle,
                filename=filename, style=style
            )
        elif infographic_style == "circle_stats":
            generator.generate_circle_stats_infographic(
                title=title, stats=stats, subtitle=subtitle,
                filename=filename, style=style
            )
        elif infographic_style == "minimal_stats":
            accent_colors = {"modern_dark": "#3b82f6", "nature": "#166534", "ocean": "#0891b2",
                           "vibrant": "#7c3aed", "sunset": "#ea580c", "royal": "#7c3aed",
                           "tech": "#22d3ee"}
            generator.generate_minimal_stats_infographic(
                title=title, stats=stats, subtitle=subtitle,
                filename=filename, accent_color=accent_colors.get(style, "#3b82f6")
            )
        elif infographic_style == "elegant_stats":
            theme = "hospital" if i % 2 == 0 else "pharmacy"
            generator.generate_elegant_stats_infographic(
                title=title, stats=stats, subtitle=subtitle,
                filename=filename, theme=theme
            )
        else:  # statistics
            theme = "pharmacy" if i % 2 == 0 else "hospital"
            generator.generate_statistics_infographic(
                title=title, stats=stats, subtitle=subtitle,
                filename=filename, theme=theme
            )

        # Update the MDX file
        mdx_file = os.path.join(articles_dir, f"best-pharmacy-hospital-software-{slug}-2026.mdx")
        if os.path.exists(mdx_file):
            with open(mdx_file, 'r', encoding='utf-8') as f:
                content = f.read()
            content = content.replace(
                'image: "/images/healthcare-software.jpg"',
                f'image: "/infographics/{filename}"'
            )
            with open(mdx_file, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"  Updated: {mdx_file}")
        else:
            print(f"  WARNING: MDX file not found: {mdx_file}")

    print(f"\nDone! Generated 25 infographics and updated 25 articles.")

if __name__ == "__main__":
    generate_all()
