#!/usr/bin/env python3
"""
MedSoftwares Infographic Generator
Generates professional infographics for blog articles
"""

import os
import json
import textwrap
from PIL import Image, ImageDraw, ImageFont, ImageFilter
import matplotlib.pyplot as plt
import matplotlib.patches as mpatches
import numpy as np
from io import BytesIO
from typing import List, Dict, Optional, Tuple
from datetime import datetime

# Brand Colors - Extensive palette for variety
COLORS = {
    'primary': '#166534',      # Green
    'primary_light': '#22c55e',
    'primary_dark': '#14532d',
    'secondary': '#1e40af',    # Blue (HospitalOS)
    'secondary_light': '#3b82f6',
    'white': '#FFFFFF',
    'black': '#111827',
    'gray': '#6b7280',
    'gray_light': '#f3f4f6',
    'gray_dark': '#374151',
    'accent_orange': '#f97316',
    'accent_teal': '#14b8a6',
    'accent_purple': '#8b5cf6',
    # Gradient colors
    'gradient_start_green': '#0f4c35',
    'gradient_end_green': '#22c55e',
    'gradient_start_blue': '#1e3a5f',
    'gradient_end_blue': '#60a5fa',
    'gradient_start_purple': '#4c1d95',
    'gradient_end_purple': '#a78bfa',
    'gradient_start_teal': '#134e4a',
    'gradient_end_teal': '#5eead4',
    'gold': '#fbbf24',
    'coral': '#f87171',
    # New diverse color schemes
    'sunset_start': '#ff6b6b',
    'sunset_end': '#feca57',
    'ocean_start': '#0077b6',
    'ocean_end': '#00b4d8',
    'forest_start': '#1a4d2e',
    'forest_end': '#4ade80',
    'royal_start': '#5b21b6',
    'royal_end': '#c084fc',
    'midnight_start': '#0f172a',
    'midnight_end': '#334155',
    'rose_start': '#be123c',
    'rose_end': '#fda4af',
    'amber_start': '#b45309',
    'amber_end': '#fbbf24',
    'emerald': '#10b981',
    'cyan': '#06b6d4',
    'indigo': '#6366f1',
    'pink': '#ec4899',
    'lime': '#84cc16',
    'sky': '#0ea5e9',
}

# Style presets for different looks
STYLE_PRESETS = {
    'modern_dark': {
        'bg_start': '#0f172a',
        'bg_end': '#1e293b',
        'accent': '#3b82f6',
        'text': '#f1f5f9',
        'highlight': '#fbbf24'
    },
    'vibrant': {
        'bg_start': '#7c3aed',
        'bg_end': '#db2777',
        'accent': '#fbbf24',
        'text': '#ffffff',
        'highlight': '#22d3ee'
    },
    'nature': {
        'bg_start': '#065f46',
        'bg_end': '#059669',
        'accent': '#fcd34d',
        'text': '#ffffff',
        'highlight': '#a7f3d0'
    },
    'ocean': {
        'bg_start': '#0c4a6e',
        'bg_end': '#0891b2',
        'accent': '#fef3c7',
        'text': '#ffffff',
        'highlight': '#67e8f9'
    },
    'sunset': {
        'bg_start': '#9a3412',
        'bg_end': '#ea580c',
        'accent': '#fef08a',
        'text': '#ffffff',
        'highlight': '#fed7aa'
    },
    'royal': {
        'bg_start': '#4c1d95',
        'bg_end': '#7c3aed',
        'accent': '#fcd34d',
        'text': '#ffffff',
        'highlight': '#c4b5fd'
    },
    'minimal': {
        'bg_start': '#ffffff',
        'bg_end': '#f1f5f9',
        'accent': '#0f172a',
        'text': '#1e293b',
        'highlight': '#3b82f6'
    },
    'tech': {
        'bg_start': '#18181b',
        'bg_end': '#27272a',
        'accent': '#22d3ee',
        'text': '#fafafa',
        'highlight': '#a855f7'
    }
}

def hex_to_rgb(hex_color: str) -> Tuple[int, int, int]:
    """Convert hex color to RGB tuple."""
    hex_color = hex_color.lstrip('#')
    return tuple(int(hex_color[i:i+2], 16) for i in (0, 2, 4))

def get_font(size: int, bold: bool = False) -> ImageFont.FreeTypeFont:
    """Get font - tries system fonts, falls back to default."""
    font_paths = [
        # Windows fonts
        "C:/Windows/Fonts/segoeui.ttf",
        "C:/Windows/Fonts/segoeuib.ttf",  # Bold
        "C:/Windows/Fonts/arial.ttf",
        "C:/Windows/Fonts/arialbd.ttf",   # Bold
        # Mac fonts
        "/System/Library/Fonts/Helvetica.ttc",
        "/Library/Fonts/Arial.ttf",
        # Linux fonts
        "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf",
        "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf",
    ]

    if bold:
        font_paths = [p for p in font_paths if 'bold' in p.lower() or 'bd' in p.lower() or 'Bold' in p] + font_paths

    for path in font_paths:
        if os.path.exists(path):
            try:
                return ImageFont.truetype(path, size)
            except:
                continue

    # Fallback to default
    return ImageFont.load_default()


class InfographicGenerator:
    """Generate various types of infographics for blog posts."""

    def __init__(self, width: int = 1200, height: int = 630):
        self.width = width
        self.height = height
        self.output_dir = os.path.join(os.path.dirname(__file__), '..', 'public', 'infographics')
        os.makedirs(self.output_dir, exist_ok=True)

    def _create_base_image(self, bg_color: str = 'white') -> Tuple[Image.Image, ImageDraw.ImageDraw]:
        """Create base image with background."""
        img = Image.new('RGB', (self.width, self.height), hex_to_rgb(COLORS[bg_color]))
        draw = ImageDraw.Draw(img)
        return img, draw

    def _add_gradient_bg(self, img: Image.Image, color1: str, color2: str, direction: str = 'vertical') -> Image.Image:
        """Add gradient background to image."""
        gradient = Image.new('RGB', (self.width, self.height))
        c1 = hex_to_rgb(color1)
        c2 = hex_to_rgb(color2)

        for i in range(self.height if direction == 'vertical' else self.width):
            ratio = i / (self.height if direction == 'vertical' else self.width)
            r = int(c1[0] * (1 - ratio) + c2[0] * ratio)
            g = int(c1[1] * (1 - ratio) + c2[1] * ratio)
            b = int(c1[2] * (1 - ratio) + c2[2] * ratio)

            if direction == 'vertical':
                ImageDraw.Draw(gradient).line([(0, i), (self.width, i)], fill=(r, g, b))
            else:
                ImageDraw.Draw(gradient).line([(i, 0), (i, self.height)], fill=(r, g, b))

        return gradient

    def _add_branding(self, img: Image.Image, draw: ImageDraw.ImageDraw, position: str = 'bottom'):
        """Add MedSoftwares branding to infographic."""
        font = get_font(20, bold=True)
        brand_text = "medsoftwares.com"

        if position == 'bottom':
            # Bottom right corner
            bbox = draw.textbbox((0, 0), brand_text, font=font)
            text_width = bbox[2] - bbox[0]
            x = self.width - text_width - 30
            y = self.height - 40

            # Semi-transparent background
            draw.rectangle([x - 15, y - 5, x + text_width + 15, y + 30],
                          fill=hex_to_rgb(COLORS['primary']))
            draw.text((x, y), brand_text, fill=hex_to_rgb(COLORS['white']), font=font)

    def _wrap_text(self, text: str, font: ImageFont.FreeTypeFont, max_width: int) -> List[str]:
        """Wrap text to fit within max_width."""
        lines = []
        words = text.split()
        current_line = []

        for word in words:
            test_line = ' '.join(current_line + [word])
            bbox = font.getbbox(test_line)
            if bbox[2] <= max_width:
                current_line.append(word)
            else:
                if current_line:
                    lines.append(' '.join(current_line))
                current_line = [word]

        if current_line:
            lines.append(' '.join(current_line))

        return lines

    def generate_statistics_infographic(
        self,
        title: str,
        stats: List[Dict[str, str]],
        subtitle: Optional[str] = None,
        filename: str = "stats_infographic.png",
        theme: str = "pharmacy"  # pharmacy or hospital
    ) -> str:
        """
        Generate a statistics infographic.

        Args:
            title: Main title
            stats: List of dicts with 'value', 'label', and optional 'icon'
            subtitle: Optional subtitle
            filename: Output filename
            theme: 'pharmacy' (green) or 'hospital' (blue)
        """
        primary = COLORS['primary'] if theme == 'pharmacy' else COLORS['secondary']
        primary_light = COLORS['primary_light'] if theme == 'pharmacy' else COLORS['secondary_light']

        # Create gradient background
        img = self._add_gradient_bg(
            Image.new('RGB', (self.width, self.height)),
            COLORS['white'],
            COLORS['gray_light'],
            'vertical'
        )
        draw = ImageDraw.Draw(img)

        # Add decorative top bar
        draw.rectangle([0, 0, self.width, 8], fill=hex_to_rgb(primary))

        # Title
        title_font = get_font(48, bold=True)
        title_lines = self._wrap_text(title, title_font, self.width - 100)
        y_offset = 50

        for line in title_lines:
            bbox = draw.textbbox((0, 0), line, font=title_font)
            text_width = bbox[2] - bbox[0]
            x = (self.width - text_width) // 2
            draw.text((x, y_offset), line, fill=hex_to_rgb(COLORS['black']), font=title_font)
            y_offset += 55

        # Subtitle
        if subtitle:
            subtitle_font = get_font(24)
            bbox = draw.textbbox((0, 0), subtitle, font=subtitle_font)
            text_width = bbox[2] - bbox[0]
            x = (self.width - text_width) // 2
            draw.text((x, y_offset + 10), subtitle, fill=hex_to_rgb(COLORS['gray']), font=subtitle_font)
            y_offset += 50

        # Statistics boxes
        num_stats = len(stats)
        box_width = min(250, (self.width - 100) // num_stats - 20)
        box_height = 180
        start_x = (self.width - (box_width * num_stats + 30 * (num_stats - 1))) // 2
        start_y = y_offset + 60

        stat_colors = [
            primary,
            COLORS['accent_teal'],
            COLORS['accent_orange'],
            COLORS['accent_purple'],
        ]

        for i, stat in enumerate(stats[:4]):  # Max 4 stats
            x = start_x + i * (box_width + 30)
            color = stat_colors[i % len(stat_colors)]

            # Box with rounded corners effect
            draw.rectangle(
                [x, start_y, x + box_width, start_y + box_height],
                fill=hex_to_rgb(COLORS['white']),
                outline=hex_to_rgb(color),
                width=3
            )

            # Colored top accent
            draw.rectangle(
                [x, start_y, x + box_width, start_y + 6],
                fill=hex_to_rgb(color)
            )

            # Value
            value_font = get_font(42, bold=True)
            value = stat.get('value', '0')
            bbox = draw.textbbox((0, 0), value, font=value_font)
            text_width = bbox[2] - bbox[0]
            draw.text(
                (x + (box_width - text_width) // 2, start_y + 40),
                value,
                fill=hex_to_rgb(color),
                font=value_font
            )

            # Label
            label_font = get_font(18)
            label = stat.get('label', '')
            label_lines = self._wrap_text(label, label_font, box_width - 20)

            label_y = start_y + 100
            for line in label_lines[:2]:  # Max 2 lines
                bbox = draw.textbbox((0, 0), line, font=label_font)
                text_width = bbox[2] - bbox[0]
                draw.text(
                    (x + (box_width - text_width) // 2, label_y),
                    line,
                    fill=hex_to_rgb(COLORS['gray_dark']),
                    font=label_font
                )
                label_y += 25

        # Add branding
        self._add_branding(img, draw)

        # Save
        output_path = os.path.join(self.output_dir, filename)
        img.save(output_path, 'PNG', quality=95)
        return output_path

    def generate_elegant_stats_infographic(
        self,
        title: str,
        stats: List[Dict[str, str]],
        subtitle: Optional[str] = None,
        filename: str = "elegant_stats.png",
        theme: str = "pharmacy",
        style: str = "dark"  # dark, light, gradient
    ) -> str:
        """
        Generate an elegant statistics infographic with bold gradients and large fonts.
        """
        # Choose gradient colors based on theme
        if theme == 'pharmacy':
            grad_start = COLORS['gradient_start_green']
            grad_end = COLORS['gradient_end_green']
            accent = COLORS['gold']
        else:  # hospital
            grad_start = COLORS['gradient_start_blue']
            grad_end = COLORS['gradient_end_blue']
            accent = COLORS['coral']

        # Create diagonal gradient
        img = Image.new('RGB', (self.width, self.height))
        draw = ImageDraw.Draw(img)

        for y in range(self.height):
            for x in range(self.width):
                # Diagonal gradient
                ratio = (x + y) / (self.width + self.height)
                c1 = hex_to_rgb(grad_start)
                c2 = hex_to_rgb(grad_end)
                r = int(c1[0] * (1 - ratio) + c2[0] * ratio)
                g = int(c1[1] * (1 - ratio) + c2[1] * ratio)
                b = int(c1[2] * (1 - ratio) + c2[2] * ratio)
                draw.point((x, y), fill=(r, g, b))

        # Add subtle pattern overlay
        for i in range(0, self.width, 60):
            draw.line([(i, 0), (i + self.height, self.height)],
                     fill=(255, 255, 255, 15), width=1)

        # Title - LARGE and BOLD
        title_font = get_font(64, bold=True)
        title_lines = self._wrap_text(title, title_font, self.width - 100)
        y_offset = 50

        for line in title_lines:
            bbox = draw.textbbox((0, 0), line, font=title_font)
            text_width = bbox[2] - bbox[0]
            x = (self.width - text_width) // 2
            # Shadow effect
            draw.text((x + 2, y_offset + 2), line, fill=(0, 0, 0), font=title_font)
            draw.text((x, y_offset), line, fill=hex_to_rgb(COLORS['white']), font=title_font)
            y_offset += 75

        # Subtitle
        if subtitle:
            subtitle_font = get_font(28)
            bbox = draw.textbbox((0, 0), subtitle, font=subtitle_font)
            text_width = bbox[2] - bbox[0]
            x = (self.width - text_width) // 2
            draw.text((x, y_offset + 5), subtitle, fill=hex_to_rgb(accent), font=subtitle_font)
            y_offset += 50

        # Statistics - circular/card style with larger fonts
        num_stats = min(len(stats), 4)
        card_width = 240
        card_height = 200
        total_width = num_stats * card_width + (num_stats - 1) * 30
        start_x = (self.width - total_width) // 2
        start_y = y_offset + 40

        for i, stat in enumerate(stats[:4]):
            x = start_x + i * (card_width + 30)
            center_x = x + card_width // 2
            center_y = start_y + card_height // 2

            # Glowing circle effect
            for r in range(80, 60, -5):
                alpha = int(50 * (80 - r) / 20)
                draw.ellipse(
                    [center_x - r, center_y - 30 - r, center_x + r, center_y - 30 + r],
                    fill=(255, 255, 255, alpha),
                    outline=None
                )

            # Main circle
            draw.ellipse(
                [center_x - 60, center_y - 90, center_x + 60, center_y + 30],
                fill=hex_to_rgb(COLORS['white']),
                outline=hex_to_rgb(accent),
                width=4
            )

            # Value - HUGE font
            value_font = get_font(48, bold=True)
            value = stat.get('value', '0')
            bbox = draw.textbbox((0, 0), value, font=value_font)
            text_width = bbox[2] - bbox[0]
            text_height = bbox[3] - bbox[1]
            draw.text(
                (center_x - text_width // 2, center_y - 50),
                value,
                fill=hex_to_rgb(grad_start),
                font=value_font
            )

            # Label - below circle
            label_font = get_font(20, bold=True)
            label = stat.get('label', '')
            label_lines = self._wrap_text(label, label_font, card_width - 10)

            label_y = center_y + 45
            for line in label_lines[:2]:
                bbox = draw.textbbox((0, 0), line, font=label_font)
                text_width = bbox[2] - bbox[0]
                draw.text(
                    (center_x - text_width // 2, label_y),
                    line,
                    fill=hex_to_rgb(COLORS['white']),
                    font=label_font
                )
                label_y += 26

        # Elegant branding bar at bottom
        draw.rectangle([0, self.height - 50, self.width, self.height],
                      fill=(0, 0, 0, 100))
        brand_font = get_font(22, bold=True)
        brand_text = "medsoftwares.com"
        bbox = draw.textbbox((0, 0), brand_text, font=brand_font)
        text_width = bbox[2] - bbox[0]
        draw.text(
            ((self.width - text_width) // 2, self.height - 38),
            brand_text,
            fill=hex_to_rgb(COLORS['white']),
            font=brand_font
        )

        # Save
        output_path = os.path.join(self.output_dir, filename)
        img.save(output_path, 'PNG', quality=95)
        return output_path

    def generate_bold_cards_infographic(
        self,
        title: str,
        stats: List[Dict[str, str]],
        subtitle: Optional[str] = None,
        filename: str = "bold_cards.png",
        style: str = "vibrant"  # vibrant, ocean, sunset, royal, tech
    ) -> str:
        """
        Generate a bold card-style infographic with large typography and vibrant colors.
        """
        preset = STYLE_PRESETS.get(style, STYLE_PRESETS['vibrant'])

        # Create radial-like gradient
        img = Image.new('RGB', (self.width, self.height))
        draw = ImageDraw.Draw(img)

        c1 = hex_to_rgb(preset['bg_start'])
        c2 = hex_to_rgb(preset['bg_end'])

        # Diagonal sweep gradient
        for y in range(self.height):
            for x in range(self.width):
                ratio = ((x / self.width) * 0.7 + (y / self.height) * 0.3)
                r = int(c1[0] * (1 - ratio) + c2[0] * ratio)
                g = int(c1[1] * (1 - ratio) + c2[1] * ratio)
                b = int(c1[2] * (1 - ratio) + c2[2] * ratio)
                draw.point((x, y), fill=(r, g, b))

        # Add geometric shapes for visual interest
        accent_rgb = hex_to_rgb(preset['accent'])
        # Large circle in background
        draw.ellipse([-200, -200, 400, 400], fill=(accent_rgb[0], accent_rgb[1], accent_rgb[2]), outline=None)
        draw.ellipse([self.width-300, self.height-300, self.width+100, self.height+100],
                    fill=(accent_rgb[0], accent_rgb[1], accent_rgb[2]), outline=None)

        # Title with bold styling
        title_font = get_font(72, bold=True)
        title_lines = self._wrap_text(title, title_font, self.width - 120)
        y_offset = 40

        for line in title_lines:
            bbox = draw.textbbox((0, 0), line, font=title_font)
            text_width = bbox[2] - bbox[0]
            x = (self.width - text_width) // 2
            # Glow effect
            for offset in range(3, 0, -1):
                glow_color = (255, 255, 255, 30 * offset)
                draw.text((x - offset, y_offset - offset), line, fill=glow_color, font=title_font)
            draw.text((x, y_offset), line, fill=hex_to_rgb(preset['text']), font=title_font)
            y_offset += 85

        # Subtitle
        if subtitle:
            subtitle_font = get_font(28)
            bbox = draw.textbbox((0, 0), subtitle, font=subtitle_font)
            text_width = bbox[2] - bbox[0]
            x = (self.width - text_width) // 2
            draw.text((x, y_offset), subtitle, fill=hex_to_rgb(preset['highlight']), font=subtitle_font)
            y_offset += 50

        # Bold cards
        num_stats = min(len(stats), 4)
        card_width = 260
        card_height = 180
        gap = 25
        total_width = num_stats * card_width + (num_stats - 1) * gap
        start_x = (self.width - total_width) // 2
        start_y = y_offset + 30

        card_colors = [
            hex_to_rgb(preset['accent']),
            hex_to_rgb(preset['highlight']),
            hex_to_rgb(COLORS['emerald']),
            hex_to_rgb(COLORS['pink']),
        ]

        for i, stat in enumerate(stats[:4]):
            x = start_x + i * (card_width + gap)
            card_color = card_colors[i % len(card_colors)]

            # Card with rounded corners simulation
            draw.rectangle([x, start_y, x + card_width, start_y + card_height],
                          fill=card_color)

            # Value - HUGE
            value_font = get_font(56, bold=True)
            value = stat.get('value', '0')
            bbox = draw.textbbox((0, 0), value, font=value_font)
            text_width = bbox[2] - bbox[0]
            draw.text(
                (x + (card_width - text_width) // 2, start_y + 30),
                value,
                fill=(255, 255, 255),
                font=value_font
            )

            # Label
            label_font = get_font(18, bold=True)
            label = stat.get('label', '')
            label_lines = self._wrap_text(label, label_font, card_width - 30)

            label_y = start_y + 110
            for line in label_lines[:2]:
                bbox = draw.textbbox((0, 0), line, font=label_font)
                text_width = bbox[2] - bbox[0]
                draw.text(
                    (x + (card_width - text_width) // 2, label_y),
                    line,
                    fill=(255, 255, 255, 220),
                    font=label_font
                )
                label_y += 24

        # Bottom branding bar
        draw.rectangle([0, self.height - 45, self.width, self.height],
                      fill=(0, 0, 0, 80))
        brand_font = get_font(24, bold=True)
        brand_text = "medsoftwares.com"
        bbox = draw.textbbox((0, 0), brand_text, font=brand_font)
        text_width = bbox[2] - bbox[0]
        draw.text(
            ((self.width - text_width) // 2, self.height - 35),
            brand_text,
            fill=hex_to_rgb(COLORS['white']),
            font=brand_font
        )

        output_path = os.path.join(self.output_dir, filename)
        img.save(output_path, 'PNG', quality=95)
        return output_path

    def generate_split_infographic(
        self,
        title: str,
        left_items: List[Dict[str, str]],
        right_items: List[Dict[str, str]],
        left_title: str = "Before",
        right_title: str = "After",
        filename: str = "split_compare.png",
        style: str = "modern_dark"
    ) -> str:
        """
        Generate a split comparison infographic (left vs right).
        """
        preset = STYLE_PRESETS.get(style, STYLE_PRESETS['modern_dark'])

        img = Image.new('RGB', (self.width, self.height), hex_to_rgb(preset['bg_start']))
        draw = ImageDraw.Draw(img)

        # Split the background
        left_color = hex_to_rgb(COLORS['rose_start'])
        right_color = hex_to_rgb(COLORS['emerald'])

        # Left side gradient
        for x in range(self.width // 2):
            ratio = x / (self.width // 2)
            for y in range(self.height):
                c1 = hex_to_rgb(preset['bg_start'])
                r = int(c1[0] * (1 - ratio * 0.3) + left_color[0] * ratio * 0.3)
                g = int(c1[1] * (1 - ratio * 0.3) + left_color[1] * ratio * 0.3)
                b = int(c1[2] * (1 - ratio * 0.3) + left_color[2] * ratio * 0.3)
                draw.point((x, y), fill=(r, g, b))

        # Right side gradient
        for x in range(self.width // 2, self.width):
            ratio = (x - self.width // 2) / (self.width // 2)
            for y in range(self.height):
                c1 = hex_to_rgb(preset['bg_end'])
                r = int(c1[0] + (right_color[0] - c1[0]) * ratio * 0.3)
                g = int(c1[1] + (right_color[1] - c1[1]) * ratio * 0.3)
                b = int(c1[2] + (right_color[2] - c1[2]) * ratio * 0.3)
                draw.point((x, y), fill=(r, g, b))

        # Center divider
        draw.rectangle([self.width // 2 - 3, 0, self.width // 2 + 3, self.height],
                      fill=hex_to_rgb(preset['accent']))

        # Main title at top
        title_font = get_font(48, bold=True)
        bbox = draw.textbbox((0, 0), title, font=title_font)
        text_width = bbox[2] - bbox[0]
        draw.text(
            ((self.width - text_width) // 2, 25),
            title,
            fill=hex_to_rgb(preset['text']),
            font=title_font
        )

        # Left title
        section_font = get_font(36, bold=True)
        bbox = draw.textbbox((0, 0), left_title, font=section_font)
        text_width = bbox[2] - bbox[0]
        draw.text(
            ((self.width // 4) - text_width // 2, 90),
            left_title,
            fill=left_color,
            font=section_font
        )

        # Right title
        bbox = draw.textbbox((0, 0), right_title, font=section_font)
        text_width = bbox[2] - bbox[0]
        draw.text(
            ((3 * self.width // 4) - text_width // 2, 90),
            right_title,
            fill=right_color,
            font=section_font
        )

        # Left items
        item_font = get_font(20, bold=True)
        y_offset = 160
        for item in left_items[:5]:
            value = item.get('value', '')
            label = item.get('label', '')

            # Value
            draw.text((60, y_offset), value, fill=left_color, font=item_font)
            # Label
            label_font = get_font(16)
            draw.text((60, y_offset + 28), label, fill=hex_to_rgb(preset['text']), font=label_font)
            y_offset += 75

        # Right items
        y_offset = 160
        for item in right_items[:5]:
            value = item.get('value', '')
            label = item.get('label', '')

            x_start = self.width // 2 + 60
            draw.text((x_start, y_offset), value, fill=right_color, font=item_font)
            label_font = get_font(16)
            draw.text((x_start, y_offset + 28), label, fill=hex_to_rgb(preset['text']), font=label_font)
            y_offset += 75

        # Branding
        brand_font = get_font(20, bold=True)
        brand_text = "medsoftwares.com"
        bbox = draw.textbbox((0, 0), brand_text, font=brand_font)
        text_width = bbox[2] - bbox[0]
        draw.text(
            ((self.width - text_width) // 2, self.height - 35),
            brand_text,
            fill=hex_to_rgb(preset['accent']),
            font=brand_font
        )

        output_path = os.path.join(self.output_dir, filename)
        img.save(output_path, 'PNG', quality=95)
        return output_path

    def generate_minimal_stats_infographic(
        self,
        title: str,
        stats: List[Dict[str, str]],
        subtitle: Optional[str] = None,
        filename: str = "minimal_stats.png",
        accent_color: str = "#3b82f6"
    ) -> str:
        """
        Generate a clean, minimal white-background infographic with colored accents.
        """
        img = Image.new('RGB', (self.width, self.height), (255, 255, 255))
        draw = ImageDraw.Draw(img)

        accent = hex_to_rgb(accent_color)

        # Top accent bar
        draw.rectangle([0, 0, self.width, 10], fill=accent)

        # Title
        title_font = get_font(52, bold=True)
        title_lines = self._wrap_text(title, title_font, self.width - 100)
        y_offset = 50

        for line in title_lines:
            bbox = draw.textbbox((0, 0), line, font=title_font)
            text_width = bbox[2] - bbox[0]
            x = (self.width - text_width) // 2
            draw.text((x, y_offset), line, fill=hex_to_rgb(COLORS['black']), font=title_font)
            y_offset += 60

        # Subtitle
        if subtitle:
            subtitle_font = get_font(22)
            bbox = draw.textbbox((0, 0), subtitle, font=subtitle_font)
            text_width = bbox[2] - bbox[0]
            x = (self.width - text_width) // 2
            draw.text((x, y_offset + 5), subtitle, fill=hex_to_rgb(COLORS['gray']), font=subtitle_font)
            y_offset += 50

        # Horizontal line
        draw.line([(100, y_offset + 20), (self.width - 100, y_offset + 20)],
                 fill=hex_to_rgb(COLORS['gray_light']), width=2)

        # Stats in a row with underline accent
        num_stats = min(len(stats), 4)
        stat_width = (self.width - 100) // num_stats
        start_x = 50
        start_y = y_offset + 60

        for i, stat in enumerate(stats[:4]):
            x = start_x + i * stat_width
            center_x = x + stat_width // 2

            # Value
            value_font = get_font(64, bold=True)
            value = stat.get('value', '0')
            bbox = draw.textbbox((0, 0), value, font=value_font)
            text_width = bbox[2] - bbox[0]
            draw.text(
                (center_x - text_width // 2, start_y),
                value,
                fill=accent,
                font=value_font
            )

            # Underline
            draw.rectangle(
                [center_x - 30, start_y + 75, center_x + 30, start_y + 79],
                fill=accent
            )

            # Label
            label_font = get_font(16)
            label = stat.get('label', '')
            label_lines = self._wrap_text(label, label_font, stat_width - 20)

            label_y = start_y + 95
            for line in label_lines[:2]:
                bbox = draw.textbbox((0, 0), line, font=label_font)
                text_width = bbox[2] - bbox[0]
                draw.text(
                    (center_x - text_width // 2, label_y),
                    line,
                    fill=hex_to_rgb(COLORS['gray_dark']),
                    font=label_font
                )
                label_y += 22

        # Bottom accent bar
        draw.rectangle([0, self.height - 10, self.width, self.height], fill=accent)

        # Branding
        brand_font = get_font(18, bold=True)
        brand_text = "medsoftwares.com"
        bbox = draw.textbbox((0, 0), brand_text, font=brand_font)
        text_width = bbox[2] - bbox[0]
        draw.text(
            (self.width - text_width - 30, self.height - 40),
            brand_text,
            fill=accent,
            font=brand_font
        )

        output_path = os.path.join(self.output_dir, filename)
        img.save(output_path, 'PNG', quality=95)
        return output_path

    def generate_circle_stats_infographic(
        self,
        title: str,
        stats: List[Dict[str, str]],
        subtitle: Optional[str] = None,
        filename: str = "circle_stats.png",
        style: str = "nature"
    ) -> str:
        """
        Generate an infographic with stats displayed in large circles.
        """
        preset = STYLE_PRESETS.get(style, STYLE_PRESETS['nature'])

        # Gradient background
        img = Image.new('RGB', (self.width, self.height))
        draw = ImageDraw.Draw(img)

        c1 = hex_to_rgb(preset['bg_start'])
        c2 = hex_to_rgb(preset['bg_end'])

        for y in range(self.height):
            ratio = y / self.height
            r = int(c1[0] * (1 - ratio) + c2[0] * ratio)
            g = int(c1[1] * (1 - ratio) + c2[1] * ratio)
            b = int(c1[2] * (1 - ratio) + c2[2] * ratio)
            draw.line([(0, y), (self.width, y)], fill=(r, g, b))

        # Title
        title_font = get_font(56, bold=True)
        title_lines = self._wrap_text(title, title_font, self.width - 100)
        y_offset = 35

        for line in title_lines:
            bbox = draw.textbbox((0, 0), line, font=title_font)
            text_width = bbox[2] - bbox[0]
            x = (self.width - text_width) // 2
            draw.text((x, y_offset), line, fill=hex_to_rgb(preset['text']), font=title_font)
            y_offset += 65

        # Subtitle
        if subtitle:
            subtitle_font = get_font(24)
            bbox = draw.textbbox((0, 0), subtitle, font=subtitle_font)
            text_width = bbox[2] - bbox[0]
            x = (self.width - text_width) // 2
            draw.text((x, y_offset), subtitle, fill=hex_to_rgb(preset['highlight']), font=subtitle_font)
            y_offset += 45

        # Large circles with stats
        num_stats = min(len(stats), 4)
        circle_radius = 85
        gap = 40
        total_width = num_stats * (circle_radius * 2) + (num_stats - 1) * gap
        start_x = (self.width - total_width) // 2 + circle_radius
        center_y = y_offset + 100 + circle_radius

        circle_fills = [
            hex_to_rgb(preset['accent']),
            hex_to_rgb(preset['highlight']),
            hex_to_rgb(COLORS['cyan']),
            hex_to_rgb(COLORS['pink']),
        ]

        for i, stat in enumerate(stats[:4]):
            center_x = start_x + i * (circle_radius * 2 + gap)
            fill_color = circle_fills[i % len(circle_fills)]

            # Outer glow
            for r in range(circle_radius + 20, circle_radius, -2):
                alpha = int(40 * (circle_radius + 20 - r) / 20)
                glow = (fill_color[0], fill_color[1], fill_color[2])
                draw.ellipse(
                    [center_x - r, center_y - r, center_x + r, center_y + r],
                    fill=glow,
                    outline=None
                )

            # Main circle
            draw.ellipse(
                [center_x - circle_radius, center_y - circle_radius,
                 center_x + circle_radius, center_y + circle_radius],
                fill=(255, 255, 255),
                outline=fill_color,
                width=5
            )

            # Value
            value_font = get_font(42, bold=True)
            value = stat.get('value', '0')
            bbox = draw.textbbox((0, 0), value, font=value_font)
            text_width = bbox[2] - bbox[0]
            text_height = bbox[3] - bbox[1]
            draw.text(
                (center_x - text_width // 2, center_y - text_height // 2 - 10),
                value,
                fill=fill_color,
                font=value_font
            )

            # Label below circle
            label_font = get_font(16, bold=True)
            label = stat.get('label', '')
            label_lines = self._wrap_text(label, label_font, circle_radius * 2 + 20)

            label_y = center_y + circle_radius + 15
            for line in label_lines[:2]:
                bbox = draw.textbbox((0, 0), line, font=label_font)
                text_width = bbox[2] - bbox[0]
                draw.text(
                    (center_x - text_width // 2, label_y),
                    line,
                    fill=hex_to_rgb(preset['text']),
                    font=label_font
                )
                label_y += 22

        # Branding
        brand_font = get_font(22, bold=True)
        brand_text = "medsoftwares.com"
        bbox = draw.textbbox((0, 0), brand_text, font=brand_font)
        text_width = bbox[2] - bbox[0]
        draw.text(
            ((self.width - text_width) // 2, self.height - 40),
            brand_text,
            fill=hex_to_rgb(preset['text']),
            font=brand_font
        )

        output_path = os.path.join(self.output_dir, filename)
        img.save(output_path, 'PNG', quality=95)
        return output_path

    def generate_comparison_infographic(
        self,
        title: str,
        items: List[Dict[str, any]],
        filename: str = "comparison_infographic.png",
        theme: str = "pharmacy"
    ) -> str:
        """
        Generate a comparison/vs infographic.

        Args:
            title: Main title
            items: List of dicts with 'name', 'features' (list), 'highlight' (bool)
            filename: Output filename
            theme: 'pharmacy' or 'hospital'
        """
        primary = COLORS['primary'] if theme == 'pharmacy' else COLORS['secondary']

        img = self._add_gradient_bg(
            Image.new('RGB', (self.width, self.height)),
            COLORS['white'],
            COLORS['gray_light'],
            'vertical'
        )
        draw = ImageDraw.Draw(img)

        # Top bar
        draw.rectangle([0, 0, self.width, 8], fill=hex_to_rgb(primary))

        # Title
        title_font = get_font(40, bold=True)
        bbox = draw.textbbox((0, 0), title, font=title_font)
        text_width = bbox[2] - bbox[0]
        draw.text(
            ((self.width - text_width) // 2, 40),
            title,
            fill=hex_to_rgb(COLORS['black']),
            font=title_font
        )

        # Comparison columns
        num_items = min(len(items), 3)
        col_width = (self.width - 80) // num_items
        start_y = 120

        for i, item in enumerate(items[:3]):
            x = 40 + i * col_width
            is_highlighted = item.get('highlight', False)

            # Column header
            header_color = primary if is_highlighted else COLORS['gray_dark']
            header_bg = hex_to_rgb(primary if is_highlighted else COLORS['gray_light'])

            draw.rectangle(
                [x + 10, start_y, x + col_width - 10, start_y + 50],
                fill=header_bg
            )

            name_font = get_font(24, bold=True)
            name = item.get('name', '')
            bbox = draw.textbbox((0, 0), name, font=name_font)
            text_width = bbox[2] - bbox[0]
            draw.text(
                (x + (col_width - text_width) // 2, start_y + 12),
                name,
                fill=hex_to_rgb(COLORS['white'] if is_highlighted else COLORS['black']),
                font=name_font
            )

            # Features
            feature_font = get_font(16)
            feature_y = start_y + 70

            for feature in item.get('features', [])[:8]:
                # Checkmark or bullet
                check_color = COLORS['primary_light'] if is_highlighted else COLORS['gray']
                draw.text((x + 20, feature_y), "✓", fill=hex_to_rgb(check_color), font=feature_font)
                draw.text((x + 45, feature_y), feature, fill=hex_to_rgb(COLORS['gray_dark']), font=feature_font)
                feature_y += 30

            # Highlight border
            if is_highlighted:
                draw.rectangle(
                    [x + 5, start_y - 5, x + col_width - 5, feature_y + 20],
                    outline=hex_to_rgb(primary),
                    width=3
                )

        self._add_branding(img, draw)

        output_path = os.path.join(self.output_dir, filename)
        img.save(output_path, 'PNG', quality=95)
        return output_path

    def generate_feature_list_infographic(
        self,
        title: str,
        features: List[Dict[str, str]],
        filename: str = "features_infographic.png",
        theme: str = "pharmacy"
    ) -> str:
        """
        Generate a feature list infographic.

        Args:
            title: Main title
            features: List of dicts with 'title' and 'description'
            filename: Output filename
            theme: 'pharmacy' or 'hospital'
        """
        primary = COLORS['primary'] if theme == 'pharmacy' else COLORS['secondary']

        img = self._add_gradient_bg(
            Image.new('RGB', (self.width, self.height)),
            primary,
            COLORS['primary_dark'] if theme == 'pharmacy' else '#1e3a8a',
            'vertical'
        )
        draw = ImageDraw.Draw(img)

        # Title
        title_font = get_font(44, bold=True)
        title_lines = self._wrap_text(title, title_font, self.width - 100)
        y_offset = 40

        for line in title_lines:
            bbox = draw.textbbox((0, 0), line, font=title_font)
            text_width = bbox[2] - bbox[0]
            x = (self.width - text_width) // 2
            draw.text((x, y_offset), line, fill=hex_to_rgb(COLORS['white']), font=title_font)
            y_offset += 50

        # Feature grid (2 columns)
        num_features = min(len(features), 6)
        cols = 2
        rows = (num_features + 1) // 2

        card_width = (self.width - 100) // 2 - 20
        card_height = 120
        start_x = 50
        start_y = y_offset + 30

        for i, feature in enumerate(features[:6]):
            col = i % 2
            row = i // 2

            x = start_x + col * (card_width + 40)
            y = start_y + row * (card_height + 20)

            # Card background
            draw.rectangle(
                [x, y, x + card_width, y + card_height],
                fill=hex_to_rgb(COLORS['white'])
            )

            # Number badge
            badge_size = 36
            draw.ellipse(
                [x + 15, y + 15, x + 15 + badge_size, y + 15 + badge_size],
                fill=hex_to_rgb(primary)
            )
            num_font = get_font(20, bold=True)
            draw.text((x + 25, y + 20), str(i + 1), fill=hex_to_rgb(COLORS['white']), font=num_font)

            # Feature title
            feat_title_font = get_font(20, bold=True)
            feat_title = feature.get('title', '')
            draw.text((x + 65, y + 20), feat_title, fill=hex_to_rgb(COLORS['black']), font=feat_title_font)

            # Feature description
            desc_font = get_font(14)
            desc = feature.get('description', '')
            desc_lines = self._wrap_text(desc, desc_font, card_width - 80)

            desc_y = y + 55
            for line in desc_lines[:2]:
                draw.text((x + 65, desc_y), line, fill=hex_to_rgb(COLORS['gray']), font=desc_font)
                desc_y += 22

        # Branding (white text on dark bg)
        brand_font = get_font(20, bold=True)
        brand_text = "medsoftwares.com"
        bbox = draw.textbbox((0, 0), brand_text, font=brand_font)
        text_width = bbox[2] - bbox[0]
        draw.text(
            (self.width - text_width - 30, self.height - 40),
            brand_text,
            fill=hex_to_rgb(COLORS['white']),
            font=brand_font
        )

        output_path = os.path.join(self.output_dir, filename)
        img.save(output_path, 'PNG', quality=95)
        return output_path

    def generate_chart_infographic(
        self,
        title: str,
        data: Dict[str, float],
        chart_type: str = "bar",
        filename: str = "chart_infographic.png",
        theme: str = "pharmacy"
    ) -> str:
        """
        Generate a chart-based infographic.

        Args:
            title: Main title
            data: Dict of label -> value
            chart_type: 'bar', 'pie', or 'horizontal_bar'
            filename: Output filename
            theme: 'pharmacy' or 'hospital'
        """
        primary = COLORS['primary'] if theme == 'pharmacy' else COLORS['secondary']

        # Create matplotlib figure
        fig, ax = plt.subplots(figsize=(12, 6.3), dpi=100)
        fig.patch.set_facecolor('#f9fafb')

        labels = list(data.keys())
        values = list(data.values())

        colors = [
            primary,
            COLORS['accent_teal'],
            COLORS['accent_orange'],
            COLORS['accent_purple'],
            COLORS['primary_light'],
            COLORS['secondary_light'],
        ]

        if chart_type == 'bar':
            bars = ax.bar(labels, values, color=[colors[i % len(colors)] for i in range(len(labels))])
            ax.set_ylabel('Value', fontsize=12)

            # Add value labels on bars
            for bar, val in zip(bars, values):
                height = bar.get_height()
                ax.text(bar.get_x() + bar.get_width()/2., height,
                       f'{val}',
                       ha='center', va='bottom', fontsize=11, fontweight='bold')

        elif chart_type == 'horizontal_bar':
            bars = ax.barh(labels, values, color=[colors[i % len(colors)] for i in range(len(labels))])
            ax.set_xlabel('Value', fontsize=12)

            for bar, val in zip(bars, values):
                width = bar.get_width()
                ax.text(width, bar.get_y() + bar.get_height()/2.,
                       f' {val}',
                       ha='left', va='center', fontsize=11, fontweight='bold')

        elif chart_type == 'pie':
            wedges, texts, autotexts = ax.pie(
                values,
                labels=labels,
                autopct='%1.1f%%',
                colors=[colors[i % len(colors)] for i in range(len(labels))],
                startangle=90
            )
            for autotext in autotexts:
                autotext.set_fontsize(11)
                autotext.set_fontweight('bold')

        ax.set_title(title, fontsize=18, fontweight='bold', pad=20)

        # Remove spines for cleaner look
        if chart_type != 'pie':
            ax.spines['top'].set_visible(False)
            ax.spines['right'].set_visible(False)

        plt.tight_layout()

        # Save to buffer
        buf = BytesIO()
        plt.savefig(buf, format='png', dpi=100, bbox_inches='tight',
                   facecolor='#f9fafb', edgecolor='none')
        buf.seek(0)
        plt.close()

        # Open as PIL image and add branding
        img = Image.open(buf)
        img = img.resize((self.width, self.height), Image.Resampling.LANCZOS)
        draw = ImageDraw.Draw(img)

        # Add top bar
        draw.rectangle([0, 0, self.width, 6], fill=hex_to_rgb(primary))

        self._add_branding(img, draw)

        output_path = os.path.join(self.output_dir, filename)
        img.save(output_path, 'PNG', quality=95)
        return output_path

    def generate_timeline_infographic(
        self,
        title: str,
        events: List[Dict[str, str]],
        filename: str = "timeline_infographic.png",
        theme: str = "pharmacy"
    ) -> str:
        """
        Generate a timeline/process infographic.

        Args:
            title: Main title
            events: List of dicts with 'title' and 'description'
            filename: Output filename
            theme: 'pharmacy' or 'hospital'
        """
        primary = COLORS['primary'] if theme == 'pharmacy' else COLORS['secondary']

        img, draw = self._create_base_image('white')

        # Top bar
        draw.rectangle([0, 0, self.width, 8], fill=hex_to_rgb(primary))

        # Title
        title_font = get_font(40, bold=True)
        bbox = draw.textbbox((0, 0), title, font=title_font)
        text_width = bbox[2] - bbox[0]
        draw.text(
            ((self.width - text_width) // 2, 30),
            title,
            fill=hex_to_rgb(COLORS['black']),
            font=title_font
        )

        # Timeline
        num_events = min(len(events), 5)
        line_y = 180
        start_x = 80
        end_x = self.width - 80

        # Draw main line
        draw.line([(start_x, line_y), (end_x, line_y)], fill=hex_to_rgb(COLORS['gray']), width=4)

        # Draw events
        spacing = (end_x - start_x) // (num_events - 1) if num_events > 1 else 0

        for i, event in enumerate(events[:5]):
            x = start_x + i * spacing

            # Circle
            circle_radius = 20
            draw.ellipse(
                [x - circle_radius, line_y - circle_radius,
                 x + circle_radius, line_y + circle_radius],
                fill=hex_to_rgb(primary),
                outline=hex_to_rgb(COLORS['white']),
                width=4
            )

            # Step number
            num_font = get_font(18, bold=True)
            draw.text((x - 6, line_y - 10), str(i + 1), fill=hex_to_rgb(COLORS['white']), font=num_font)

            # Event title and description
            event_title = event.get('title', '')
            event_desc = event.get('description', '')

            # Alternate above/below
            if i % 2 == 0:
                # Above
                title_y = line_y - 80
                desc_y = line_y - 55
            else:
                # Below
                title_y = line_y + 40
                desc_y = line_y + 65

            title_font_small = get_font(16, bold=True)
            desc_font = get_font(12)

            # Center text on point
            bbox = draw.textbbox((0, 0), event_title, font=title_font_small)
            text_width = bbox[2] - bbox[0]
            draw.text(
                (x - text_width // 2, title_y),
                event_title,
                fill=hex_to_rgb(primary),
                font=title_font_small
            )

            # Description (wrapped)
            desc_lines = self._wrap_text(event_desc, desc_font, spacing - 20)
            for j, line in enumerate(desc_lines[:2]):
                bbox = draw.textbbox((0, 0), line, font=desc_font)
                text_width = bbox[2] - bbox[0]
                draw.text(
                    (x - text_width // 2, desc_y + j * 18),
                    line,
                    fill=hex_to_rgb(COLORS['gray']),
                    font=desc_font
                )

        self._add_branding(img, draw)

        output_path = os.path.join(self.output_dir, filename)
        img.save(output_path, 'PNG', quality=95)
        return output_path

    def generate_quote_infographic(
        self,
        quote: str,
        author: str,
        author_title: str = "",
        filename: str = "quote_infographic.png",
        theme: str = "pharmacy"
    ) -> str:
        """
        Generate a quote/testimonial infographic.
        """
        primary = COLORS['primary'] if theme == 'pharmacy' else COLORS['secondary']

        img = self._add_gradient_bg(
            Image.new('RGB', (self.width, self.height)),
            primary,
            COLORS['primary_dark'] if theme == 'pharmacy' else '#1e3a8a',
            'vertical'
        )
        draw = ImageDraw.Draw(img)

        # Large quote mark
        quote_mark_font = get_font(200)
        draw.text((60, 20), '"', fill=(255, 255, 255, 50), font=quote_mark_font)

        # Quote text
        quote_font = get_font(32)
        quote_lines = self._wrap_text(quote, quote_font, self.width - 200)

        y_offset = 150
        for line in quote_lines[:6]:
            bbox = draw.textbbox((0, 0), line, font=quote_font)
            text_width = bbox[2] - bbox[0]
            x = (self.width - text_width) // 2
            draw.text((x, y_offset), line, fill=hex_to_rgb(COLORS['white']), font=quote_font)
            y_offset += 45

        # Author
        author_font = get_font(24, bold=True)
        author_text = f"— {author}"
        bbox = draw.textbbox((0, 0), author_text, font=author_font)
        text_width = bbox[2] - bbox[0]
        draw.text(
            ((self.width - text_width) // 2, y_offset + 40),
            author_text,
            fill=hex_to_rgb(COLORS['white']),
            font=author_font
        )

        if author_title:
            title_font = get_font(18)
            bbox = draw.textbbox((0, 0), author_title, font=title_font)
            text_width = bbox[2] - bbox[0]
            draw.text(
                ((self.width - text_width) // 2, y_offset + 75),
                author_title,
                fill=(255, 255, 255, 180),
                font=title_font
            )

        # Branding
        brand_font = get_font(20, bold=True)
        brand_text = "medsoftwares.com"
        bbox = draw.textbbox((0, 0), brand_text, font=brand_font)
        text_width = bbox[2] - bbox[0]
        draw.text(
            (self.width - text_width - 30, self.height - 40),
            brand_text,
            fill=hex_to_rgb(COLORS['white']),
            font=brand_font
        )

        output_path = os.path.join(self.output_dir, filename)
        img.save(output_path, 'PNG', quality=95)
        return output_path


def generate_blog_infographics():
    """Generate sample infographics for existing blog topics."""

    generator = InfographicGenerator()
    generated_files = []

    # 1. Pharmacy Software Statistics
    stats_path = generator.generate_statistics_infographic(
        title="Why Pharmacies Choose PharmaPOS",
        stats=[
            {"value": "60%", "label": "Reduction in Checkout Time"},
            {"value": "40%", "label": "Less Inventory Waste"},
            {"value": "99.9%", "label": "Uptime with Offline Mode"},
            {"value": "25+", "label": "Countries Served"},
        ],
        subtitle="Trusted by pharmacies across Africa, Middle East & Asia",
        filename="pharmacy-software-statistics.png",
        theme="pharmacy"
    )
    generated_files.append(stats_path)
    print(f"Generated: {stats_path}")

    # 2. Hospital Software Statistics
    hospital_stats = generator.generate_statistics_infographic(
        title="HospitalOS Impact on Healthcare Facilities",
        stats=[
            {"value": "25+", "label": "Integrated Modules"},
            {"value": "50%", "label": "Faster Patient Processing"},
            {"value": "85%", "label": "Reduction in Paperwork"},
            {"value": "24/7", "label": "Support Available"},
        ],
        subtitle="Complete hospital management for clinics and hospitals",
        filename="hospital-software-statistics.png",
        theme="hospital"
    )
    generated_files.append(hospital_stats)
    print(f"Generated: {hospital_stats}")

    # 3. PharmaPOS Features
    features_path = generator.generate_feature_list_infographic(
        title="PharmaPOS Key Features",
        features=[
            {"title": "Point of Sale", "description": "Fast checkout with barcode scanning and keyboard shortcuts"},
            {"title": "Inventory Management", "description": "Real-time stock tracking with expiry alerts"},
            {"title": "Prescription Management", "description": "Drug interactions checker and controlled substances"},
            {"title": "Mobile Money", "description": "MTN, Vodafone, M-Pesa integration built-in"},
            {"title": "NHIS/Insurance", "description": "Automated claims processing and tracking"},
            {"title": "Offline Mode", "description": "Works without internet, syncs when connected"},
        ],
        filename="pharmapos-features.png",
        theme="pharmacy"
    )
    generated_files.append(features_path)
    print(f"Generated: {features_path}")

    # 4. Software Comparison
    comparison_path = generator.generate_comparison_infographic(
        title="PharmaPOS vs Traditional Software",
        items=[
            {
                "name": "Traditional Software",
                "features": [
                    "Monthly subscription fees",
                    "Requires constant internet",
                    "Limited mobile payments",
                    "Basic reporting",
                    "Single location only",
                ],
                "highlight": False
            },
            {
                "name": "PharmaPOS",
                "features": [
                    "One-time payment",
                    "Works offline",
                    "Mobile money integrated",
                    "Advanced analytics",
                    "Multi-branch support",
                    "Drug interaction checker",
                    "NHIS claims processing",
                    "24/7 support available",
                ],
                "highlight": True
            },
        ],
        filename="pharmacy-software-comparison.png",
        theme="pharmacy"
    )
    generated_files.append(comparison_path)
    print(f"Generated: {comparison_path}")

    # 5. Implementation Timeline
    timeline_path = generator.generate_timeline_infographic(
        title="Getting Started with MedSoftwares",
        events=[
            {"title": "Contact Us", "description": "Schedule a free demo"},
            {"title": "Demo", "description": "See features in action"},
            {"title": "Purchase", "description": "Choose your plan"},
            {"title": "Setup", "description": "Installation & training"},
            {"title": "Go Live", "description": "Start using your system"},
        ],
        filename="implementation-timeline.png",
        theme="pharmacy"
    )
    generated_files.append(timeline_path)
    print(f"Generated: {timeline_path}")

    # 6. Market Data Chart
    chart_path = generator.generate_chart_infographic(
        title="Healthcare Software Market Growth by Region",
        data={
            "Africa": 42,
            "Middle East": 28,
            "Asia Pacific": 35,
            "Latin America": 22,
            "Europe": 18,
        },
        chart_type="bar",
        filename="market-growth-chart.png",
        theme="pharmacy"
    )
    generated_files.append(chart_path)
    print(f"Generated: {chart_path}")

    # 7. Customer Quote
    quote_path = generator.generate_quote_infographic(
        quote="PharmaPOS transformed our pharmacy operations. We reduced checkout time by 60% and inventory errors are now a thing of the past.",
        author="Kwame Asante",
        author_title="Owner, Asante Pharmacy - Accra, Ghana",
        filename="customer-testimonial.png",
        theme="pharmacy"
    )
    generated_files.append(quote_path)
    print(f"Generated: {quote_path}")

    # 8. HospitalOS Modules Chart
    modules_chart = generator.generate_chart_infographic(
        title="HospitalOS Modules Usage Distribution",
        data={
            "OPD/IPD": 95,
            "Laboratory": 88,
            "Pharmacy": 82,
            "Billing": 90,
            "EMR": 75,
            "Radiology": 45,
        },
        chart_type="horizontal_bar",
        filename="hospitalos-modules-usage.png",
        theme="hospital"
    )
    generated_files.append(modules_chart)
    print(f"Generated: {modules_chart}")

    print(f"\n[OK] Generated {len(generated_files)} infographics in public/infographics/")
    return generated_files


if __name__ == "__main__":
    import sys

    if len(sys.argv) > 1 and sys.argv[1] == "--generate-all":
        generate_blog_infographics()
    else:
        print("MedSoftwares Infographic Generator")
        print("=" * 40)
        print("\nUsage:")
        print("  python infographic_generator.py --generate-all")
        print("\nOr import in Python:")
        print("  from infographic_generator import InfographicGenerator")
        print("  gen = InfographicGenerator()")
        print("  gen.generate_statistics_infographic(...)")
        print("\nAvailable generators:")
        print("  - generate_statistics_infographic()")
        print("  - generate_comparison_infographic()")
        print("  - generate_feature_list_infographic()")
        print("  - generate_chart_infographic()")
        print("  - generate_timeline_infographic()")
        print("  - generate_quote_infographic()")
