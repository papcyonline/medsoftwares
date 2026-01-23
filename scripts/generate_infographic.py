#!/usr/bin/env python3
"""
Quick CLI tool to generate infographics for blog posts.
Usage: python generate_infographic.py <type> <output_name> [options]
"""

import sys
import json
import argparse
from infographic_generator import InfographicGenerator

def main():
    parser = argparse.ArgumentParser(
        description='Generate infographics for MedSoftwares blog posts',
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
Examples:
  # Generate statistics infographic
  python generate_infographic.py stats my-stats.png --title "Key Metrics" --data '{"60%": "Time Saved", "40%": "Cost Reduced"}'

  # Generate feature list
  python generate_infographic.py features my-features.png --title "Top Features" --data '[{"title": "Fast", "description": "Quick processing"}]'

  # Generate comparison
  python generate_infographic.py compare my-compare.png --title "Us vs Them" --data '[{"name": "Us", "features": ["Better", "Faster"], "highlight": true}]'

  # Generate chart
  python generate_infographic.py chart my-chart.png --title "Growth" --data '{"Q1": 100, "Q2": 150}' --chart-type bar

  # Generate timeline
  python generate_infographic.py timeline my-timeline.png --title "Process" --data '[{"title": "Step 1", "description": "Do this"}]'

  # Generate quote
  python generate_infographic.py quote my-quote.png --quote "Great software!" --author "John Doe" --author-title "CEO"
        """
    )

    parser.add_argument('type', choices=['stats', 'features', 'compare', 'chart', 'timeline', 'quote'],
                       help='Type of infographic to generate')
    parser.add_argument('output', help='Output filename (will be saved in public/infographics/)')
    parser.add_argument('--title', help='Main title for the infographic')
    parser.add_argument('--subtitle', help='Subtitle (for stats type)')
    parser.add_argument('--data', help='JSON data for the infographic')
    parser.add_argument('--theme', choices=['pharmacy', 'hospital'], default='pharmacy',
                       help='Color theme (default: pharmacy)')
    parser.add_argument('--chart-type', choices=['bar', 'horizontal_bar', 'pie'], default='bar',
                       help='Chart type (for chart infographics)')
    parser.add_argument('--quote', help='Quote text (for quote type)')
    parser.add_argument('--author', help='Author name (for quote type)')
    parser.add_argument('--author-title', help='Author title (for quote type)')

    args = parser.parse_args()

    generator = InfographicGenerator()

    try:
        if args.type == 'stats':
            if not args.data or not args.title:
                print("Error: stats type requires --title and --data")
                print("Data format: [{\"value\": \"60%\", \"label\": \"Time Saved\"}, ...]")
                sys.exit(1)
            data = json.loads(args.data)
            path = generator.generate_statistics_infographic(
                title=args.title,
                stats=data,
                subtitle=args.subtitle,
                filename=args.output,
                theme=args.theme
            )

        elif args.type == 'features':
            if not args.data or not args.title:
                print("Error: features type requires --title and --data")
                print("Data format: [{\"title\": \"Feature\", \"description\": \"Details\"}, ...]")
                sys.exit(1)
            data = json.loads(args.data)
            path = generator.generate_feature_list_infographic(
                title=args.title,
                features=data,
                filename=args.output,
                theme=args.theme
            )

        elif args.type == 'compare':
            if not args.data or not args.title:
                print("Error: compare type requires --title and --data")
                print("Data format: [{\"name\": \"Option A\", \"features\": [...], \"highlight\": true}, ...]")
                sys.exit(1)
            data = json.loads(args.data)
            path = generator.generate_comparison_infographic(
                title=args.title,
                items=data,
                filename=args.output,
                theme=args.theme
            )

        elif args.type == 'chart':
            if not args.data or not args.title:
                print("Error: chart type requires --title and --data")
                print("Data format: {\"Label1\": 100, \"Label2\": 200, ...}")
                sys.exit(1)
            data = json.loads(args.data)
            path = generator.generate_chart_infographic(
                title=args.title,
                data=data,
                chart_type=args.chart_type,
                filename=args.output,
                theme=args.theme
            )

        elif args.type == 'timeline':
            if not args.data or not args.title:
                print("Error: timeline type requires --title and --data")
                print("Data format: [{\"title\": \"Step 1\", \"description\": \"Details\"}, ...]")
                sys.exit(1)
            data = json.loads(args.data)
            path = generator.generate_timeline_infographic(
                title=args.title,
                events=data,
                filename=args.output,
                theme=args.theme
            )

        elif args.type == 'quote':
            if not args.quote or not args.author:
                print("Error: quote type requires --quote and --author")
                sys.exit(1)
            path = generator.generate_quote_infographic(
                quote=args.quote,
                author=args.author,
                author_title=args.author_title or "",
                filename=args.output,
                theme=args.theme
            )

        print(f"Generated: {path}")

    except json.JSONDecodeError as e:
        print(f"Error parsing JSON data: {e}")
        sys.exit(1)
    except Exception as e:
        print(f"Error generating infographic: {e}")
        sys.exit(1)

if __name__ == "__main__":
    main()
