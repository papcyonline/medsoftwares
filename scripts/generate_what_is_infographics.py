#!/usr/bin/env python3
"""
Generate infographics for 10 "What is" explainer articles.
Each article gets a unique style + color combo.
"""

import sys
import os
sys.path.insert(0, os.path.dirname(__file__))

from infographic_generator import InfographicGenerator

def main():
    gen = InfographicGenerator()
    generated = []

    articles = [
        # 1. What is Pharmacy Management Software — hero_banner, nature
        {
            "type": "hero_banner",
            "filename": "what-is-pharmacy-management-software.png",
            "title": "What Is Pharmacy Management Software?",
            "subtitle": "Complete guide to pharmacy POS, inventory & prescriptions",
            "style": "nature",
            "stats": [
                {"value": "80%", "label": "Faster Checkout"},
                {"value": "60%", "label": "Less Waste"},
                {"value": "$299", "label": "Starting Price"},
                {"value": "100%", "label": "Offline Ready"},
            ],
        },
        # 2. What is Hospital Management System — dashboard, modern_dark
        {
            "type": "dashboard",
            "filename": "what-is-hospital-management-system.png",
            "title": "What Is a Hospital Management System?",
            "subtitle": "Integrated software for all hospital departments",
            "style": "modern_dark",
            "stats": [
                {"value": "25+", "label": "Modules"},
                {"value": "40%", "label": "Admin Reduction"},
                {"value": "11+", "label": "User Roles"},
                {"value": "$799", "label": "Starting Price"},
            ],
        },
        # 3. What is EHR — gradient_mesh, vibrant
        {
            "type": "gradient_mesh",
            "filename": "what-is-electronic-health-records-ehr.png",
            "title": "What Is an Electronic Health Record (EHR)?",
            "subtitle": "Digital patient records for better healthcare",
            "style": "vibrant",
            "stats": [
                {"value": "96%", "label": "Hospital Adoption"},
                {"value": "50%", "label": "Fewer Errors"},
                {"value": "3x", "label": "Faster Access"},
                {"value": "HIPAA", "label": "Compliant"},
            ],
        },
        # 4. What is Telemedicine Software — icon_grid, emerald
        {
            "type": "icon_grid",
            "filename": "what-is-telemedicine-software.png",
            "title": "What Is Telemedicine Software?",
            "subtitle": "Remote healthcare delivery platforms",
            "style": "emerald",
            "items": [
                {"icon": "📹", "title": "Video Consults", "description": "HIPAA-compliant video calls"},
                {"icon": "💬", "title": "Secure Messaging", "description": "Patient-provider chat"},
                {"icon": "📊", "title": "Remote Monitoring", "description": "Track vitals remotely"},
                {"icon": "📋", "title": "E-Prescribing", "description": "Send prescriptions digitally"},
                {"icon": "📅", "title": "Scheduling", "description": "Online booking system"},
                {"icon": "🔒", "title": "HIPAA Secure", "description": "End-to-end encryption"},
            ],
        },
        # 5. What is Medical Billing Software — numbered_list, rose
        {
            "type": "numbered_list",
            "filename": "what-is-medical-billing-software.png",
            "title": "What Is Medical Billing Software?",
            "subtitle": "Revenue cycle management for healthcare providers",
            "style": "rose",
            "items": [
                {"title": "Patient Registration & Eligibility", "value": "Step 1"},
                {"title": "Charge Capture & Coding", "value": "Step 2"},
                {"title": "Claim Submission & Tracking", "value": "Step 3"},
                {"title": "Payment Posting & Reconciliation", "value": "Step 4"},
                {"title": "Denial Management & Appeals", "value": "Step 5"},
                {"title": "Financial Reporting & Analytics", "value": "Step 6"},
            ],
        },
        # 6. What is Pharmacy POS — spotlight, slate
        {
            "type": "spotlight",
            "filename": "what-is-pharmacy-pos-system.png",
            "title": "What Is a Pharmacy POS System?",
            "subtitle": "Specialized point-of-sale for pharmacies",
            "style": "slate",
            "stats": [
                {"value": "70%", "label": "Faster Checkout"},
                {"value": "30+", "label": "Features"},
                {"value": "8+", "label": "Payment Methods"},
                {"value": "0%", "label": "Downtime"},
            ],
        },
        # 7. What is NHIS Integration — hero_banner, indigo
        {
            "type": "hero_banner",
            "filename": "what-is-nhis-integration-healthcare-software.png",
            "title": "What Is NHIS Integration?",
            "subtitle": "National health insurance in healthcare software",
            "style": "indigo",
            "stats": [
                {"value": "30+", "label": "Countries"},
                {"value": "Real-time", "label": "Verification"},
                {"value": "Auto", "label": "Claims Filing"},
                {"value": "24hr", "label": "Processing"},
            ],
        },
        # 8. What is LIS — dashboard, nature
        {
            "type": "dashboard",
            "filename": "what-is-laboratory-information-system-lis.png",
            "title": "What Is a Laboratory Information System?",
            "subtitle": "Complete lab management from orders to results",
            "style": "nature",
            "stats": [
                {"value": "99%", "label": "Accuracy"},
                {"value": "60%", "label": "Faster Results"},
                {"value": "Full", "label": "Traceability"},
                {"value": "QC", "label": "Built-in"},
            ],
        },
        # 9. What is Mobile Money Healthcare — gradient_mesh, emerald
        {
            "type": "gradient_mesh",
            "filename": "what-is-mobile-money-healthcare-payments.png",
            "title": "What Is Mobile Money in Healthcare?",
            "subtitle": "Digital payments transforming healthcare access",
            "style": "emerald",
            "stats": [
                {"value": "1.75B", "label": "Mobile Money Users"},
                {"value": "60%", "label": "Unbanked Population"},
                {"value": "8+", "label": "Payment Providers"},
                {"value": "Instant", "label": "Transactions"},
            ],
        },
        # 10. What is Patient Management System — icon_grid, rose
        {
            "type": "icon_grid",
            "filename": "what-is-patient-management-system.png",
            "title": "What Is a Patient Management System?",
            "subtitle": "End-to-end patient journey management",
            "style": "rose",
            "items": [
                {"icon": "📝", "title": "Registration", "description": "Quick patient intake"},
                {"icon": "📅", "title": "Scheduling", "description": "Appointment management"},
                {"icon": "🔢", "title": "Queue System", "description": "Smart patient flow"},
                {"icon": "📊", "title": "Clinical Notes", "description": "Digital documentation"},
                {"icon": "💳", "title": "Billing", "description": "Integrated payments"},
                {"icon": "📱", "title": "Follow-up", "description": "Automated reminders"},
            ],
        },
    ]

    for i, article in enumerate(articles, 1):
        print(f"[{i}/10] Generating {article['filename']}...")

        infographic_type = article["type"]

        if infographic_type == "hero_banner":
            gen.generate_hero_banner_infographic(
                filename=article["filename"],
                title=article["title"],
                subtitle=article["subtitle"],
                stats=article["stats"],
                style=article.get("style", "modern_dark"),
            )
        elif infographic_type == "icon_grid":
            gen.generate_icon_grid_infographic(
                filename=article["filename"],
                title=article["title"],
                subtitle=article["subtitle"],
                items=article["items"],
                style=article.get("style", "nature"),
            )
        elif infographic_type == "dashboard":
            gen.generate_dashboard_infographic(
                filename=article["filename"],
                title=article["title"],
                subtitle=article["subtitle"],
                stats=article["stats"],
                style=article.get("style", "modern_dark"),
            )
        elif infographic_type == "gradient_mesh":
            gen.generate_gradient_mesh_infographic(
                filename=article["filename"],
                title=article["title"],
                subtitle=article["subtitle"],
                stats=article["stats"],
                style=article.get("style", "vibrant"),
            )
        elif infographic_type == "numbered_list":
            gen.generate_numbered_list_infographic(
                filename=article["filename"],
                title=article["title"],
                subtitle=article["subtitle"],
                items=article["items"],
                style=article.get("style", "modern_dark"),
            )
        elif infographic_type == "spotlight":
            gen.generate_spotlight_infographic(
                filename=article["filename"],
                title=article["title"],
                subtitle=article["subtitle"],
                stats=article["stats"],
                style=article.get("style", "modern_dark"),
            )

        generated.append(article["filename"])
        print(f"  [OK] Done")

    print(f"\n{'='*60}")
    print(f"Generated {len(generated)}/10 infographics successfully!")
    for f in generated:
        print(f"  [OK] public/infographics/{f}")

if __name__ == "__main__":
    main()
