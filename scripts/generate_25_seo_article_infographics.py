#!/usr/bin/env python3
"""
Generate infographics for 25 new SEO articles.
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
        # 1. Nursing Home — hero_banner, modern_dark
        {
            "type": "hero_banner",
            "filename": "nursing-home-long-term-care-management-software-2026.png",
            "title": "Best Nursing Home & Long-Term Care Software 2026",
            "subtitle": "Comprehensive solutions for senior care facilities",
            "style": "modern_dark",
            "stats": [
                {"value": "73%", "label": "Facilities Digitizing"},
                {"value": "45%", "label": "Less Paperwork"},
                {"value": "3.2M", "label": "Residents Managed"},
                {"value": "24/7", "label": "Care Monitoring"},
            ],
        },
        # 2. Mental Health — gradient_mesh, vibrant
        {
            "type": "gradient_mesh",
            "filename": "mental-health-behavioral-health-practice-software-2026.png",
            "title": "Best Mental Health & Behavioral Health Software 2026",
            "subtitle": "Purpose-built EHR for therapy practices",
            "style": "vibrant",
            "stats": [
                {"value": "60%", "label": "Faster Documentation"},
                {"value": "85%", "label": "Billing Accuracy"},
                {"value": "40%", "label": "No-Show Reduction"},
                {"value": "HIPAA", "label": "Fully Compliant"},
            ],
        },
        # 3. Physiotherapy — icon_grid, nature
        {
            "type": "icon_grid",
            "filename": "physiotherapy-rehabilitation-clinic-software-2026.png",
            "title": "Best Physiotherapy & Rehab Clinic Software 2026",
            "subtitle": "Streamline rehabilitation workflows",
            "style": "nature",
            "items": [
                {"icon": "🏥", "title": "Exercise Libraries", "description": "Thousands of rehab exercises with videos"},
                {"icon": "📊", "title": "Outcome Tracking", "description": "Measure patient progress over time"},
                {"icon": "📅", "title": "Smart Scheduling", "description": "Automated appointment management"},
                {"icon": "💳", "title": "Insurance Billing", "description": "Streamlined claims processing"},
                {"icon": "📱", "title": "Patient Portal", "description": "Home exercise programs & messaging"},
                {"icon": "📋", "title": "SOAP Notes", "description": "Quick clinical documentation"},
            ],
        },
        # 4. Ophthalmology — wave, ocean
        {
            "type": "wave",
            "filename": "ophthalmology-eye-clinic-software-2026.png",
            "title": "Best Ophthalmology & Eye Clinic Software 2026",
            "subtitle": "Specialized tools for eye care professionals",
            "style": "ocean",
            "stats": [
                {"value": "92%", "label": "Diagnostic Accuracy"},
                {"value": "50%", "label": "Faster Charting"},
                {"value": "200+", "label": "Exam Templates"},
                {"value": "DICOM", "label": "Imaging Support"},
            ],
        },
        # 5. Cardiology — dashboard, tech
        {
            "type": "dashboard",
            "filename": "cardiology-clinic-management-software-2026.png",
            "title": "Best Cardiology Clinic Software 2026",
            "subtitle": "Monitor, diagnose, and treat cardiac patients",
            "style": "tech",
            "stats": [
                {"value": "ECG", "label": "Integration Ready"},
                {"value": "35%", "label": "Faster Diagnosis"},
                {"value": "99.9%", "label": "Data Accuracy"},
                {"value": "24/7", "label": "Remote Monitoring"},
            ],
        },
        # 6. Orthopedic — numbered_list, slate
        {
            "type": "numbered_list",
            "filename": "orthopedic-clinic-management-software-2026.png",
            "title": "Best Orthopedic Clinic Software 2026",
            "subtitle": "Top solutions for musculoskeletal care",
            "style": "slate",
            "items": [
                {"title": "Digital X-Ray Integration", "description": "PACS & DICOM viewer built-in"},
                {"title": "Surgical Planning Tools", "description": "Pre-op templating and scheduling"},
                {"title": "Implant Tracking", "description": "Full device tracking & recalls"},
                {"title": "Physical Therapy Referrals", "description": "Seamless rehab coordination"},
                {"title": "Outcome Analytics", "description": "Track surgical success rates"},
                {"title": "Multi-Location Support", "description": "Manage clinics across sites"},
            ],
        },
        # 7. Dermatology — spotlight, rose
        {
            "type": "spotlight",
            "filename": "dermatology-practice-management-software-2026.png",
            "title": "Best Dermatology Practice Software 2026",
            "subtitle": "Image-centric tools for skin care specialists",
            "style": "rose",
            "stats": [
                {"value": "10K+", "label": "Dermatology Practices Using Digital Tools"},
                {"value": "70%", "label": "Faster Documentation"},
                {"value": "HD", "label": "Photo Management"},
                {"value": "AI", "label": "Lesion Analysis"},
            ],
        },
        # 8. Hospital ERP — bold_cards, indigo
        {
            "type": "bold_cards",
            "filename": "hospital-erp-software-complete-guide-2026.png",
            "title": "Hospital ERP Software Guide 2026",
            "subtitle": "Enterprise resource planning for healthcare",
            "style": "indigo",
            "stats": [
                {"value": "40%", "label": "Cost Reduction"},
                {"value": "25+", "label": "Integrated Modules"},
                {"value": "60%", "label": "Faster Procurement"},
                {"value": "ROI", "label": "Within 18 Months"},
            ],
        },
        # 9. Blood Bank — elegant_stats, pharmacy
        {
            "type": "elegant_stats",
            "filename": "blood-bank-management-software-2026.png",
            "title": "Best Blood Bank Management Software 2026",
            "subtitle": "Ensuring safe blood supply chain management",
            "style": "pharmacy",
            "stats": [
                {"value": "100%", "label": "Traceability"},
                {"value": "40%", "label": "Less Waste"},
                {"value": "FDA", "label": "Compliant"},
                {"value": "Real-Time", "label": "Inventory Tracking"},
            ],
        },
        # 10. Medical Imaging PACS — hero_banner, tech
        {
            "type": "hero_banner",
            "filename": "medical-imaging-pacs-software-guide-2026.png",
            "title": "Medical Imaging & PACS Software Guide 2026",
            "subtitle": "DICOM viewers, storage, and radiology workflows",
            "style": "tech",
            "stats": [
                {"value": "4K+", "label": "Image Resolution"},
                {"value": "99.99%", "label": "Uptime SLA"},
                {"value": "DICOM", "label": "Full Support"},
                {"value": "AI", "label": "Assisted Reads"},
            ],
        },
        # 11. Healthcare CRM — gradient_mesh, emerald
        {
            "type": "gradient_mesh",
            "filename": "healthcare-crm-software-guide-2026.png",
            "title": "Healthcare CRM Software Guide 2026",
            "subtitle": "Build lasting patient relationships",
            "style": "emerald",
            "stats": [
                {"value": "35%", "label": "Patient Retention Boost"},
                {"value": "50%", "label": "Marketing ROI"},
                {"value": "80%", "label": "Engagement Rate"},
                {"value": "360°", "label": "Patient View"},
            ],
        },
        # 12. Patient Engagement — icon_grid, ocean
        {
            "type": "icon_grid",
            "filename": "patient-engagement-platform-software-2026.png",
            "title": "Patient Engagement Platform Guide 2026",
            "subtitle": "Empower patients, improve outcomes",
            "style": "ocean",
            "items": [
                {"icon": "📱", "title": "Mobile App Access", "description": "Patient portal on any device"},
                {"icon": "💬", "title": "Secure Messaging", "description": "HIPAA-compliant communication"},
                {"icon": "📋", "title": "Online Forms", "description": "Digital intake & consent forms"},
                {"icon": "⏰", "title": "Appointment Reminders", "description": "SMS, email, and push notifications"},
                {"icon": "📊", "title": "Health Tracking", "description": "Patient-reported outcomes"},
                {"icon": "💳", "title": "Online Payments", "description": "Easy bill pay and statements"},
            ],
        },
        # 13. Healthcare Interoperability — wave, nature
        {
            "type": "wave",
            "filename": "healthcare-interoperability-hl7-fhir-guide-2026.png",
            "title": "Healthcare Interoperability: HL7 & FHIR 2026",
            "subtitle": "Connecting health systems for better care",
            "style": "nature",
            "stats": [
                {"value": "FHIR", "label": "R4 Standard"},
                {"value": "85%", "label": "Systems Connected"},
                {"value": "60%", "label": "Less Data Entry"},
                {"value": "API", "label": "First Approach"},
            ],
        },
        # 14. Medical Coding — dashboard, modern_dark
        {
            "type": "dashboard",
            "filename": "medical-coding-software-guide-2026.png",
            "title": "Medical Coding Software Guide 2026",
            "subtitle": "ICD-10, CPT, and revenue cycle optimization",
            "style": "modern_dark",
            "stats": [
                {"value": "95%", "label": "Coding Accuracy"},
                {"value": "30%", "label": "Faster Claims"},
                {"value": "ICD-11", "label": "Ready"},
                {"value": "$2.1M", "label": "Avg Revenue Recovered"},
            ],
        },
        # 15. Infection Control — numbered_list, sunset
        {
            "type": "numbered_list",
            "filename": "hospital-infection-control-software-2026.png",
            "title": "Hospital Infection Control Software 2026",
            "subtitle": "Prevent HAIs and ensure compliance",
            "style": "sunset",
            "items": [
                {"title": "Real-Time Surveillance", "description": "Monitor infection rates hospital-wide"},
                {"title": "Automated Alerts", "description": "Instant notification of outbreaks"},
                {"title": "Antibiogram Analysis", "description": "Track antibiotic resistance patterns"},
                {"title": "Hand Hygiene Compliance", "description": "Monitor and improve hand washing rates"},
                {"title": "Regulatory Reporting", "description": "CMS, CDC, and WHO report generation"},
                {"title": "Contact Tracing", "description": "Track exposure and transmission chains"},
            ],
        },
        # 16. Home Healthcare — spotlight, nature
        {
            "type": "spotlight",
            "filename": "home-healthcare-software-guide-2026.png",
            "title": "Home Healthcare Software Guide 2026",
            "subtitle": "Manage care beyond the hospital walls",
            "style": "nature",
            "stats": [
                {"value": "$350B", "label": "Home Health Market Size by 2027"},
                {"value": "65%", "label": "Visit Efficiency Gain"},
                {"value": "GPS", "label": "Route Optimization"},
                {"value": "EVV", "label": "Compliant Tracking"},
            ],
        },
        # 17. Ambulatory Surgery Center — bold_cards, royal
        {
            "type": "bold_cards",
            "filename": "ambulatory-surgery-center-software-2026.png",
            "title": "Ambulatory Surgery Center Software 2026",
            "subtitle": "Streamline outpatient surgical operations",
            "style": "royal",
            "stats": [
                {"value": "45%", "label": "Faster Turnaround"},
                {"value": "30%", "label": "Cost per Case Savings"},
                {"value": "99%", "label": "On-Time Starts"},
                {"value": "CMS", "label": "Certified"},
            ],
        },
        # 18. Hospital Supply Chain — elegant_stats, hospital
        {
            "type": "elegant_stats",
            "filename": "hospital-supply-chain-management-software-2026.png",
            "title": "Hospital Supply Chain Software 2026",
            "subtitle": "Optimize procurement and reduce waste",
            "style": "hospital",
            "stats": [
                {"value": "25%", "label": "Cost Savings"},
                {"value": "40%", "label": "Less Stockouts"},
                {"value": "98%", "label": "Order Accuracy"},
                {"value": "GS1", "label": "Barcode Compliant"},
            ],
        },
        # 19. Remote Patient Monitoring — hero_banner, emerald
        {
            "type": "hero_banner",
            "filename": "remote-patient-monitoring-software-guide-2026.png",
            "title": "Remote Patient Monitoring Software 2026",
            "subtitle": "Wearables, telehealth, and continuous care",
            "style": "emerald",
            "stats": [
                {"value": "175M", "label": "RPM Users by 2027"},
                {"value": "38%", "label": "Readmission Reduction"},
                {"value": "IoT", "label": "Device Integration"},
                {"value": "24/7", "label": "Continuous Monitoring"},
            ],
        },
        # 20. Hospital Digital Transformation — gradient_mesh, indigo
        {
            "type": "gradient_mesh",
            "filename": "hospital-digital-transformation-roi-guide-2026.png",
            "title": "Hospital Digital Transformation ROI 2026",
            "subtitle": "Measuring the impact of healthcare IT investments",
            "style": "indigo",
            "stats": [
                {"value": "300%", "label": "Average IT ROI"},
                {"value": "18mo", "label": "Typical Payback Period"},
                {"value": "$4.2M", "label": "Annual Savings (Avg)"},
                {"value": "92%", "label": "Staff Satisfaction"},
            ],
        },
        # 21. Healthcare Workforce — icon_grid, sunset
        {
            "type": "icon_grid",
            "filename": "healthcare-workforce-management-software-2026.png",
            "title": "Healthcare Workforce Management Software 2026",
            "subtitle": "Optimize staffing, scheduling, and compliance",
            "style": "sunset",
            "items": [
                {"icon": "📅", "title": "Smart Scheduling", "description": "AI-powered shift optimization"},
                {"icon": "⏱️", "title": "Time & Attendance", "description": "Automated clock-in and tracking"},
                {"icon": "📊", "title": "Labor Analytics", "description": "Real-time staffing dashboards"},
                {"icon": "📜", "title": "Credential Tracking", "description": "License and certification management"},
                {"icon": "💰", "title": "Payroll Integration", "description": "Seamless payroll processing"},
                {"icon": "📱", "title": "Mobile Access", "description": "Staff self-service app"},
            ],
        },
        # 22. Hospital Food & Nutrition — wave, emerald
        {
            "type": "wave",
            "filename": "hospital-food-nutrition-management-software-2026.png",
            "title": "Hospital Food & Nutrition Software 2026",
            "subtitle": "Dietary management for patient wellness",
            "style": "emerald",
            "stats": [
                {"value": "30%", "label": "Food Waste Reduction"},
                {"value": "95%", "label": "Diet Compliance"},
                {"value": "1000+", "label": "Recipe Database"},
                {"value": "HACCP", "label": "Safety Compliant"},
            ],
        },
        # 23. Medical Equipment CMMS — dashboard, slate
        {
            "type": "dashboard",
            "filename": "medical-equipment-maintenance-cmms-software-2026.png",
            "title": "Medical Equipment CMMS Software 2026",
            "subtitle": "Preventive maintenance for biomedical equipment",
            "style": "slate",
            "stats": [
                {"value": "50%", "label": "Less Downtime"},
                {"value": "35%", "label": "Maintenance Cost Savings"},
                {"value": "100%", "label": "Audit Trail"},
                {"value": "IoT", "label": "Sensor Integration"},
            ],
        },
        # 24. Inpatient vs Outpatient — split
        {
            "type": "split",
            "filename": "inpatient-vs-outpatient-management-system-2026.png",
            "title": "Inpatient vs Outpatient Systems",
            "style": "modern_dark",
            "left_title": "Inpatient (IPD)",
            "right_title": "Outpatient (OPD)",
            "left_items": [
                {"value": "Bed Management", "label": "Ward allocation & transfers"},
                {"value": "Nursing Stations", "label": "Real-time patient monitoring"},
                {"value": "Discharge Planning", "label": "Automated discharge summaries"},
                {"value": "Diet Orders", "label": "Meal planning & allergies"},
                {"value": "24/7 Charting", "label": "Continuous care documentation"},
            ],
            "right_items": [
                {"value": "Quick Registration", "label": "Fast patient check-in"},
                {"value": "Queue Management", "label": "Smart token & waitlist"},
                {"value": "Visit Notes", "label": "Encounter-based charting"},
                {"value": "Follow-Up", "label": "Automated appointment reminders"},
                {"value": "Walk-In Support", "label": "No appointment needed"},
            ],
        },
        # 25. Fertility Clinic — spotlight, vibrant
        {
            "type": "spotlight",
            "filename": "fertility-clinic-management-software-2026.png",
            "title": "Best Fertility Clinic & IVF Software 2026",
            "subtitle": "Specialized solutions for reproductive health",
            "style": "vibrant",
            "stats": [
                {"value": "$7.5B", "label": "Global IVF Market Size 2026"},
                {"value": "55%", "label": "Cycle Success Rate Tracking"},
                {"value": "HIPAA", "label": "Compliant & Secure"},
                {"value": "Lab", "label": "Embryology Integration"},
            ],
        },
    ]

    for i, article in enumerate(articles):
        art_type = article["type"]
        filename = article["filename"]
        title = article["title"]
        subtitle = article.get("subtitle")
        style = article.get("style", "modern_dark")

        print(f"[{i+1}/25] Generating {art_type}: {filename}")

        try:
            if art_type == "hero_banner":
                path = gen.generate_hero_banner_infographic(
                    title=title, stats=article["stats"],
                    subtitle=subtitle, filename=filename, style=style
                )
            elif art_type == "gradient_mesh":
                path = gen.generate_gradient_mesh_infographic(
                    title=title, stats=article["stats"],
                    subtitle=subtitle, filename=filename, style=style
                )
            elif art_type == "icon_grid":
                path = gen.generate_icon_grid_infographic(
                    title=title, items=article["items"],
                    subtitle=subtitle, filename=filename, style=style
                )
            elif art_type == "wave":
                path = gen.generate_wave_infographic(
                    title=title, stats=article["stats"],
                    subtitle=subtitle, filename=filename, style=style
                )
            elif art_type == "dashboard":
                path = gen.generate_dashboard_infographic(
                    title=title, stats=article["stats"],
                    subtitle=subtitle, filename=filename, style=style
                )
            elif art_type == "numbered_list":
                path = gen.generate_numbered_list_infographic(
                    title=title, items=article["items"],
                    subtitle=subtitle, filename=filename, style=style
                )
            elif art_type == "spotlight":
                path = gen.generate_spotlight_infographic(
                    title=title, stats=article["stats"],
                    subtitle=subtitle, filename=filename, style=style
                )
            elif art_type == "bold_cards":
                path = gen.generate_bold_cards_infographic(
                    title=title, stats=article["stats"],
                    subtitle=subtitle, filename=filename, style=style
                )
            elif art_type == "elegant_stats":
                theme = "pharmacy" if style == "pharmacy" else "hospital"
                path = gen.generate_elegant_stats_infographic(
                    title=title, stats=article["stats"],
                    subtitle=subtitle, filename=filename, theme=theme
                )
            elif art_type == "split":
                path = gen.generate_split_infographic(
                    title=title,
                    left_items=article["left_items"],
                    right_items=article["right_items"],
                    left_title=article.get("left_title", "Before"),
                    right_title=article.get("right_title", "After"),
                    filename=filename, style=style
                )
            else:
                print(f"  Unknown type: {art_type}, skipping")
                continue

            generated.append(path)
            print(f"  -> {path}")
        except Exception as e:
            print(f"  ERROR: {e}")

    print(f"\n{'='*60}")
    print(f"[DONE] Generated {len(generated)}/25 infographics")
    print(f"Output directory: {gen.output_dir}")
    return generated


if __name__ == "__main__":
    main()
