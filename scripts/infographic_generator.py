#!/usr/bin/env python3
"""
MedSoftwares Infographic Generator
Generates professional infographics for blog articles
"""

import os
import json
import math
import hashlib
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
    },
    'emerald': {
        'bg_start': '#064e3b',
        'bg_end': '#10b981',
        'accent': '#fbbf24',
        'text': '#ffffff',
        'highlight': '#6ee7b7'
    },
    'rose': {
        'bg_start': '#881337',
        'bg_end': '#e11d48',
        'accent': '#fef08a',
        'text': '#ffffff',
        'highlight': '#fda4af'
    },
    'slate': {
        'bg_start': '#1e293b',
        'bg_end': '#475569',
        'accent': '#38bdf8',
        'text': '#f8fafc',
        'highlight': '#fbbf24'
    },
    'indigo': {
        'bg_start': '#312e81',
        'bg_end': '#6366f1',
        'accent': '#fde68a',
        'text': '#ffffff',
        'highlight': '#a5b4fc'
    },
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


def _fast_gradient(width: int, height: int, color1: str, color2: str, direction: str = 'vertical') -> Image.Image:
    """Create gradient using numpy arrays (100x faster than pixel-by-pixel)."""
    c1 = np.array(hex_to_rgb(color1), dtype=np.float64)
    c2 = np.array(hex_to_rgb(color2), dtype=np.float64)

    if direction == 'vertical':
        ratio = np.linspace(0, 1, height).reshape(-1, 1, 1)
        arr = np.ones((height, width, 3)) * c1 * (1 - ratio) + np.ones((height, width, 3)) * c2 * ratio
    elif direction == 'horizontal':
        ratio = np.linspace(0, 1, width).reshape(1, -1, 1)
        arr = np.ones((height, width, 3)) * c1 * (1 - ratio) + np.ones((height, width, 3)) * c2 * ratio
    elif direction == 'diagonal':
        y_ratio = np.linspace(0, 1, height).reshape(-1, 1)
        x_ratio = np.linspace(0, 1, width).reshape(1, -1)
        ratio = ((x_ratio + y_ratio) / 2.0).reshape(height, width, 1)
        arr = np.ones((height, width, 3)) * c1 * (1 - ratio) + np.ones((height, width, 3)) * c2 * ratio
    elif direction == 'radial':
        cy, cx = height / 2, width / 2
        y_arr = np.arange(height).reshape(-1, 1) - cy
        x_arr = np.arange(width).reshape(1, -1) - cx
        dist = np.sqrt(x_arr**2 + y_arr**2)
        max_dist = np.sqrt(cx**2 + cy**2)
        ratio = (dist / max_dist).clip(0, 1).reshape(height, width, 1)
        arr = np.ones((height, width, 3)) * c1 * (1 - ratio) + np.ones((height, width, 3)) * c2 * ratio
    else:
        ratio = np.linspace(0, 1, height).reshape(-1, 1, 1)
        arr = np.ones((height, width, 3)) * c1 * (1 - ratio) + np.ones((height, width, 3)) * c2 * ratio

    return Image.fromarray(arr.astype(np.uint8))


def _fast_diagonal_gradient(width: int, height: int, color1: str, color2: str, angle: float = 0.7) -> Image.Image:
    """Create diagonal sweep gradient with configurable angle blend."""
    c1 = np.array(hex_to_rgb(color1), dtype=np.float64)
    c2 = np.array(hex_to_rgb(color2), dtype=np.float64)
    y_ratio = np.linspace(0, 1, height).reshape(-1, 1)
    x_ratio = np.linspace(0, 1, width).reshape(1, -1)
    ratio = (x_ratio * angle + y_ratio * (1 - angle)).reshape(height, width, 1)
    arr = c1 * (1 - ratio) + c2 * ratio
    return Image.fromarray(arr.astype(np.uint8))


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
        """Add gradient background to image (fast numpy version)."""
        return _fast_gradient(self.width, self.height, color1, color2, direction)

    def _add_branding(self, img: Image.Image, draw: ImageDraw.ImageDraw, position: str = 'bottom'):
        """Add MedSoftwares branding to infographic."""
        font = get_font(20, bold=True)
        brand_text = "medsoftwares.com"

        if position == 'bottom':
            bbox = draw.textbbox((0, 0), brand_text, font=font)
            text_width = bbox[2] - bbox[0]
            x = self.width - text_width - 30
            y = self.height - 40

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

    def _draw_rounded_rect(self, draw: ImageDraw.ImageDraw, coords, radius: int, fill=None, outline=None, width=1):
        """Draw a rounded rectangle."""
        x1, y1, x2, y2 = coords
        r = min(radius, (x2 - x1) // 2, (y2 - y1) // 2)
        if fill:
            draw.rectangle([x1 + r, y1, x2 - r, y2], fill=fill)
            draw.rectangle([x1, y1 + r, x2, y2 - r], fill=fill)
            draw.pieslice([x1, y1, x1 + 2*r, y1 + 2*r], 180, 270, fill=fill)
            draw.pieslice([x2 - 2*r, y1, x2, y1 + 2*r], 270, 360, fill=fill)
            draw.pieslice([x1, y2 - 2*r, x1 + 2*r, y2], 90, 180, fill=fill)
            draw.pieslice([x2 - 2*r, y2 - 2*r, x2, y2], 0, 90, fill=fill)
        if outline:
            draw.arc([x1, y1, x1 + 2*r, y1 + 2*r], 180, 270, fill=outline, width=width)
            draw.arc([x2 - 2*r, y1, x2, y1 + 2*r], 270, 360, fill=outline, width=width)
            draw.arc([x1, y2 - 2*r, x1 + 2*r, y2], 90, 180, fill=outline, width=width)
            draw.arc([x2 - 2*r, y2 - 2*r, x2, y2], 0, 90, fill=outline, width=width)
            draw.line([x1 + r, y1, x2 - r, y1], fill=outline, width=width)
            draw.line([x1 + r, y2, x2 - r, y2], fill=outline, width=width)
            draw.line([x1, y1 + r, x1, y2 - r], fill=outline, width=width)
            draw.line([x2, y1 + r, x2, y2 - r], fill=outline, width=width)

    def _draw_dot_pattern(self, draw: ImageDraw.ImageDraw, region, color, spacing=30, dot_size=3, opacity_factor=0.3):
        """Draw a dot grid pattern in a region for visual texture."""
        x1, y1, x2, y2 = region
        r, g, b = hex_to_rgb(color) if isinstance(color, str) else color
        dot_color = (int(r * opacity_factor + 255 * (1 - opacity_factor)),
                     int(g * opacity_factor + 255 * (1 - opacity_factor)),
                     int(b * opacity_factor + 255 * (1 - opacity_factor)))
        for x in range(x1, x2, spacing):
            for y in range(y1, y2, spacing):
                draw.ellipse([x, y, x + dot_size, y + dot_size], fill=dot_color)

    def _draw_corner_accents(self, draw: ImageDraw.ImageDraw, color, size=80, width=4):
        """Draw decorative corner accents."""
        c = hex_to_rgb(color) if isinstance(color, str) else color
        # Top-left
        draw.line([(20, 20), (20 + size, 20)], fill=c, width=width)
        draw.line([(20, 20), (20, 20 + size)], fill=c, width=width)
        # Top-right
        draw.line([(self.width - 20 - size, 20), (self.width - 20, 20)], fill=c, width=width)
        draw.line([(self.width - 20, 20), (self.width - 20, 20 + size)], fill=c, width=width)
        # Bottom-left
        draw.line([(20, self.height - 20), (20 + size, self.height - 20)], fill=c, width=width)
        draw.line([(20, self.height - 20 - size), (20, self.height - 20)], fill=c, width=width)
        # Bottom-right
        draw.line([(self.width - 20 - size, self.height - 20), (self.width - 20, self.height - 20)], fill=c, width=width)
        draw.line([(self.width - 20, self.height - 20 - size), (self.width - 20, self.height - 20)], fill=c, width=width)

    def _draw_abstract_blobs(self, draw: ImageDraw.ImageDraw, color, count=5, seed=42):
        """Draw soft abstract blob shapes for decoration."""
        rng = np.random.RandomState(seed)
        c = hex_to_rgb(color) if isinstance(color, str) else color
        blob_color = (c[0], c[1], c[2])
        for _ in range(count):
            cx = rng.randint(0, self.width)
            cy = rng.randint(0, self.height)
            rx = rng.randint(40, 150)
            ry = rng.randint(40, 150)
            draw.ellipse([cx - rx, cy - ry, cx + rx, cy + ry], fill=blob_color)

    def _draw_line_art(self, draw: ImageDraw.ImageDraw, color, count=8, seed=42):
        """Draw decorative diagonal lines."""
        rng = np.random.RandomState(seed)
        c = hex_to_rgb(color) if isinstance(color, str) else color
        for _ in range(count):
            x1 = rng.randint(0, self.width)
            y1 = rng.randint(0, self.height)
            length = rng.randint(100, 400)
            angle = rng.uniform(0.3, 1.2)
            x2 = x1 + int(length * math.cos(angle))
            y2 = y1 + int(length * math.sin(angle))
            draw.line([(x1, y1), (x2, y2)], fill=c, width=2)

    def _draw_branding_bar(self, draw: ImageDraw.ImageDraw, bg_color=None, text_color=None):
        """Draw a centered branding bar at the bottom."""
        brand_font = get_font(22, bold=True)
        brand_text = "medsoftwares.com"
        bbox = draw.textbbox((0, 0), brand_text, font=brand_font)
        text_width = bbox[2] - bbox[0]

        if bg_color:
            draw.rectangle([0, self.height - 50, self.width, self.height],
                          fill=hex_to_rgb(bg_color) if isinstance(bg_color, str) else bg_color)

        tc = hex_to_rgb(text_color) if isinstance(text_color, str) else (text_color or (255, 255, 255))
        draw.text(
            ((self.width - text_width) // 2, self.height - 38),
            brand_text, fill=tc, font=brand_font
        )

    # =========================================================================
    # EXISTING GENERATORS (with fast gradient upgrades)
    # =========================================================================

    def generate_statistics_infographic(
        self, title: str, stats: List[Dict[str, str]],
        subtitle: Optional[str] = None, filename: str = "stats_infographic.png",
        theme: str = "pharmacy"
    ) -> str:
        """Generate a statistics infographic."""
        primary = COLORS['primary'] if theme == 'pharmacy' else COLORS['secondary']
        primary_light = COLORS['primary_light'] if theme == 'pharmacy' else COLORS['secondary_light']

        img = _fast_gradient(self.width, self.height, COLORS['white'], COLORS['gray_light'], 'vertical')
        draw = ImageDraw.Draw(img)

        draw.rectangle([0, 0, self.width, 8], fill=hex_to_rgb(primary))

        title_font = get_font(48, bold=True)
        title_lines = self._wrap_text(title, title_font, self.width - 100)
        y_offset = 50

        for line in title_lines:
            bbox = draw.textbbox((0, 0), line, font=title_font)
            text_width = bbox[2] - bbox[0]
            x = (self.width - text_width) // 2
            draw.text((x, y_offset), line, fill=hex_to_rgb(COLORS['black']), font=title_font)
            y_offset += 55

        if subtitle:
            subtitle_font = get_font(24)
            bbox = draw.textbbox((0, 0), subtitle, font=subtitle_font)
            text_width = bbox[2] - bbox[0]
            x = (self.width - text_width) // 2
            draw.text((x, y_offset + 10), subtitle, fill=hex_to_rgb(COLORS['gray']), font=subtitle_font)
            y_offset += 50

        num_stats = len(stats)
        box_width = min(250, (self.width - 100) // num_stats - 20)
        box_height = 180
        start_x = (self.width - (box_width * num_stats + 30 * (num_stats - 1))) // 2
        start_y = y_offset + 60

        stat_colors = [primary, COLORS['accent_teal'], COLORS['accent_orange'], COLORS['accent_purple']]

        for i, stat in enumerate(stats[:4]):
            x = start_x + i * (box_width + 30)
            color = stat_colors[i % len(stat_colors)]

            self._draw_rounded_rect(draw, [x, start_y, x + box_width, start_y + box_height],
                                   radius=12, fill=hex_to_rgb(COLORS['white']),
                                   outline=hex_to_rgb(color), width=3)
            draw.rectangle([x + 12, start_y, x + box_width - 12, start_y + 6], fill=hex_to_rgb(color))

            value_font = get_font(42, bold=True)
            value = stat.get('value', '0')
            bbox = draw.textbbox((0, 0), value, font=value_font)
            text_width = bbox[2] - bbox[0]
            draw.text((x + (box_width - text_width) // 2, start_y + 40), value,
                     fill=hex_to_rgb(color), font=value_font)

            label_font = get_font(18)
            label = stat.get('label', '')
            label_lines = self._wrap_text(label, label_font, box_width - 20)
            label_y = start_y + 100
            for line in label_lines[:2]:
                bbox = draw.textbbox((0, 0), line, font=label_font)
                text_width = bbox[2] - bbox[0]
                draw.text((x + (box_width - text_width) // 2, label_y), line,
                         fill=hex_to_rgb(COLORS['gray_dark']), font=label_font)
                label_y += 25

        self._add_branding(img, draw)
        output_path = os.path.join(self.output_dir, filename)
        img.save(output_path, 'PNG', quality=95)
        return output_path

    def generate_elegant_stats_infographic(
        self, title: str, stats: List[Dict[str, str]],
        subtitle: Optional[str] = None, filename: str = "elegant_stats.png",
        theme: str = "pharmacy", style: str = "dark"
    ) -> str:
        """Generate an elegant statistics infographic with bold gradients."""
        if theme == 'pharmacy':
            grad_start, grad_end, accent = COLORS['gradient_start_green'], COLORS['gradient_end_green'], COLORS['gold']
        else:
            grad_start, grad_end, accent = COLORS['gradient_start_blue'], COLORS['gradient_end_blue'], COLORS['coral']

        img = _fast_diagonal_gradient(self.width, self.height, grad_start, grad_end, 0.5)
        draw = ImageDraw.Draw(img)

        # Subtle diagonal lines
        for i in range(0, self.width + self.height, 60):
            draw.line([(i, 0), (i - self.height, self.height)], fill=(255, 255, 255, 15), width=1)

        title_font = get_font(64, bold=True)
        title_lines = self._wrap_text(title, title_font, self.width - 100)
        y_offset = 50

        for line in title_lines:
            bbox = draw.textbbox((0, 0), line, font=title_font)
            text_width = bbox[2] - bbox[0]
            x = (self.width - text_width) // 2
            draw.text((x + 2, y_offset + 2), line, fill=(0, 0, 0), font=title_font)
            draw.text((x, y_offset), line, fill=hex_to_rgb(COLORS['white']), font=title_font)
            y_offset += 75

        if subtitle:
            subtitle_font = get_font(28)
            bbox = draw.textbbox((0, 0), subtitle, font=subtitle_font)
            text_width = bbox[2] - bbox[0]
            x = (self.width - text_width) // 2
            draw.text((x, y_offset + 5), subtitle, fill=hex_to_rgb(accent), font=subtitle_font)
            y_offset += 50

        num_stats = min(len(stats), 4)
        card_width, card_height = 240, 200
        total_width = num_stats * card_width + (num_stats - 1) * 30
        start_x = (self.width - total_width) // 2
        start_y = y_offset + 40

        for i, stat in enumerate(stats[:4]):
            x = start_x + i * (card_width + 30)
            center_x = x + card_width // 2
            center_y = start_y + card_height // 2

            draw.ellipse([center_x - 65, center_y - 95, center_x + 65, center_y + 25],
                        fill=hex_to_rgb(COLORS['white']), outline=hex_to_rgb(accent), width=4)

            value_font = get_font(48, bold=True)
            value = stat.get('value', '0')
            bbox = draw.textbbox((0, 0), value, font=value_font)
            text_width = bbox[2] - bbox[0]
            draw.text((center_x - text_width // 2, center_y - 55), value,
                     fill=hex_to_rgb(grad_start), font=value_font)

            label_font = get_font(20, bold=True)
            label = stat.get('label', '')
            label_lines = self._wrap_text(label, label_font, card_width - 10)
            label_y = center_y + 45
            for line in label_lines[:2]:
                bbox = draw.textbbox((0, 0), line, font=label_font)
                text_width = bbox[2] - bbox[0]
                draw.text((center_x - text_width // 2, label_y), line,
                         fill=hex_to_rgb(COLORS['white']), font=label_font)
                label_y += 26

        self._draw_branding_bar(draw, bg_color=(0, 0, 0), text_color=COLORS['white'])
        output_path = os.path.join(self.output_dir, filename)
        img.save(output_path, 'PNG', quality=95)
        return output_path

    def generate_bold_cards_infographic(
        self, title: str, stats: List[Dict[str, str]],
        subtitle: Optional[str] = None, filename: str = "bold_cards.png",
        style: str = "vibrant"
    ) -> str:
        """Generate a bold card-style infographic."""
        preset = STYLE_PRESETS.get(style, STYLE_PRESETS['vibrant'])

        img = _fast_diagonal_gradient(self.width, self.height, preset['bg_start'], preset['bg_end'], 0.7)
        draw = ImageDraw.Draw(img)

        accent_rgb = hex_to_rgb(preset['accent'])
        # Background circles
        draw.ellipse([-200, -200, 400, 400], fill=accent_rgb)
        draw.ellipse([self.width-300, self.height-300, self.width+100, self.height+100], fill=accent_rgb)

        title_font = get_font(72, bold=True)
        title_lines = self._wrap_text(title, title_font, self.width - 120)
        y_offset = 40

        for line in title_lines:
            bbox = draw.textbbox((0, 0), line, font=title_font)
            text_width = bbox[2] - bbox[0]
            x = (self.width - text_width) // 2
            draw.text((x, y_offset), line, fill=hex_to_rgb(preset['text']), font=title_font)
            y_offset += 85

        if subtitle:
            subtitle_font = get_font(28)
            bbox = draw.textbbox((0, 0), subtitle, font=subtitle_font)
            text_width = bbox[2] - bbox[0]
            x = (self.width - text_width) // 2
            draw.text((x, y_offset), subtitle, fill=hex_to_rgb(preset['highlight']), font=subtitle_font)
            y_offset += 50

        num_stats = min(len(stats), 4)
        card_width, card_height, gap = 260, 180, 25
        total_width = num_stats * card_width + (num_stats - 1) * gap
        start_x = (self.width - total_width) // 2
        start_y = y_offset + 30

        card_colors = [hex_to_rgb(preset['accent']), hex_to_rgb(preset['highlight']),
                      hex_to_rgb(COLORS['emerald']), hex_to_rgb(COLORS['pink'])]

        for i, stat in enumerate(stats[:4]):
            x = start_x + i * (card_width + gap)
            card_color = card_colors[i % len(card_colors)]
            self._draw_rounded_rect(draw, [x, start_y, x + card_width, start_y + card_height],
                                   radius=16, fill=card_color)

            value_font = get_font(56, bold=True)
            value = stat.get('value', '0')
            bbox = draw.textbbox((0, 0), value, font=value_font)
            text_width = bbox[2] - bbox[0]
            draw.text((x + (card_width - text_width) // 2, start_y + 30), value,
                     fill=(255, 255, 255), font=value_font)

            label_font = get_font(18, bold=True)
            label = stat.get('label', '')
            label_lines = self._wrap_text(label, label_font, card_width - 30)
            label_y = start_y + 110
            for line in label_lines[:2]:
                bbox = draw.textbbox((0, 0), line, font=label_font)
                text_width = bbox[2] - bbox[0]
                draw.text((x + (card_width - text_width) // 2, label_y), line,
                         fill=(255, 255, 255), font=label_font)
                label_y += 24

        self._draw_branding_bar(draw, bg_color=(0, 0, 0), text_color=COLORS['white'])
        output_path = os.path.join(self.output_dir, filename)
        img.save(output_path, 'PNG', quality=95)
        return output_path

    def generate_split_infographic(
        self, title: str, left_items: List[Dict[str, str]], right_items: List[Dict[str, str]],
        left_title: str = "Before", right_title: str = "After",
        filename: str = "split_compare.png", style: str = "modern_dark"
    ) -> str:
        """Generate a split comparison infographic (left vs right)."""
        preset = STYLE_PRESETS.get(style, STYLE_PRESETS['modern_dark'])
        left_color = hex_to_rgb(COLORS['rose_start'])
        right_color = hex_to_rgb(COLORS['emerald'])

        # Build split background with numpy
        left_half = _fast_gradient(self.width // 2, self.height, preset['bg_start'], '#2d1520', 'horizontal')
        right_half = _fast_gradient(self.width - self.width // 2, self.height, preset['bg_end'], '#152d20', 'horizontal')
        img = Image.new('RGB', (self.width, self.height))
        img.paste(left_half, (0, 0))
        img.paste(right_half, (self.width // 2, 0))
        draw = ImageDraw.Draw(img)

        # Center divider
        draw.rectangle([self.width // 2 - 3, 0, self.width // 2 + 3, self.height],
                      fill=hex_to_rgb(preset['accent']))

        title_font = get_font(48, bold=True)
        bbox = draw.textbbox((0, 0), title, font=title_font)
        text_width = bbox[2] - bbox[0]
        draw.text(((self.width - text_width) // 2, 25), title,
                 fill=hex_to_rgb(preset['text']), font=title_font)

        section_font = get_font(36, bold=True)
        bbox = draw.textbbox((0, 0), left_title, font=section_font)
        text_width = bbox[2] - bbox[0]
        draw.text(((self.width // 4) - text_width // 2, 90), left_title, fill=left_color, font=section_font)

        bbox = draw.textbbox((0, 0), right_title, font=section_font)
        text_width = bbox[2] - bbox[0]
        draw.text(((3 * self.width // 4) - text_width // 2, 90), right_title, fill=right_color, font=section_font)

        item_font = get_font(20, bold=True)
        y_offset = 160
        for item in left_items[:5]:
            draw.text((60, y_offset), item.get('value', ''), fill=left_color, font=item_font)
            lf = get_font(16)
            draw.text((60, y_offset + 28), item.get('label', ''), fill=hex_to_rgb(preset['text']), font=lf)
            y_offset += 75

        y_offset = 160
        for item in right_items[:5]:
            x_start = self.width // 2 + 60
            draw.text((x_start, y_offset), item.get('value', ''), fill=right_color, font=item_font)
            lf = get_font(16)
            draw.text((x_start, y_offset + 28), item.get('label', ''), fill=hex_to_rgb(preset['text']), font=lf)
            y_offset += 75

        brand_font = get_font(20, bold=True)
        brand_text = "medsoftwares.com"
        bbox = draw.textbbox((0, 0), brand_text, font=brand_font)
        text_width = bbox[2] - bbox[0]
        draw.text(((self.width - text_width) // 2, self.height - 35), brand_text,
                 fill=hex_to_rgb(preset['accent']), font=brand_font)

        output_path = os.path.join(self.output_dir, filename)
        img.save(output_path, 'PNG', quality=95)
        return output_path

    def generate_minimal_stats_infographic(
        self, title: str, stats: List[Dict[str, str]],
        subtitle: Optional[str] = None, filename: str = "minimal_stats.png",
        accent_color: str = "#3b82f6"
    ) -> str:
        """Generate a clean, minimal white-background infographic."""
        img = Image.new('RGB', (self.width, self.height), (255, 255, 255))
        draw = ImageDraw.Draw(img)
        accent = hex_to_rgb(accent_color)

        draw.rectangle([0, 0, self.width, 10], fill=accent)

        title_font = get_font(52, bold=True)
        title_lines = self._wrap_text(title, title_font, self.width - 100)
        y_offset = 50
        for line in title_lines:
            bbox = draw.textbbox((0, 0), line, font=title_font)
            text_width = bbox[2] - bbox[0]
            x = (self.width - text_width) // 2
            draw.text((x, y_offset), line, fill=hex_to_rgb(COLORS['black']), font=title_font)
            y_offset += 60

        if subtitle:
            sf = get_font(22)
            bbox = draw.textbbox((0, 0), subtitle, font=sf)
            text_width = bbox[2] - bbox[0]
            draw.text(((self.width - text_width) // 2, y_offset + 5), subtitle,
                     fill=hex_to_rgb(COLORS['gray']), font=sf)
            y_offset += 50

        draw.line([(100, y_offset + 20), (self.width - 100, y_offset + 20)],
                 fill=hex_to_rgb(COLORS['gray_light']), width=2)

        num_stats = min(len(stats), 4)
        stat_width = (self.width - 100) // num_stats
        start_x, start_y = 50, y_offset + 60

        for i, stat in enumerate(stats[:4]):
            x = start_x + i * stat_width
            center_x = x + stat_width // 2

            value_font = get_font(64, bold=True)
            value = stat.get('value', '0')
            bbox = draw.textbbox((0, 0), value, font=value_font)
            text_width = bbox[2] - bbox[0]
            draw.text((center_x - text_width // 2, start_y), value, fill=accent, font=value_font)
            draw.rectangle([center_x - 30, start_y + 75, center_x + 30, start_y + 79], fill=accent)

            lf = get_font(16)
            label_lines = self._wrap_text(stat.get('label', ''), lf, stat_width - 20)
            label_y = start_y + 95
            for line in label_lines[:2]:
                bbox = draw.textbbox((0, 0), line, font=lf)
                text_width = bbox[2] - bbox[0]
                draw.text((center_x - text_width // 2, label_y), line,
                         fill=hex_to_rgb(COLORS['gray_dark']), font=lf)
                label_y += 22

        draw.rectangle([0, self.height - 10, self.width, self.height], fill=accent)
        brand_font = get_font(18, bold=True)
        brand_text = "medsoftwares.com"
        bbox = draw.textbbox((0, 0), brand_text, font=brand_font)
        text_width = bbox[2] - bbox[0]
        draw.text((self.width - text_width - 30, self.height - 40), brand_text, fill=accent, font=brand_font)

        output_path = os.path.join(self.output_dir, filename)
        img.save(output_path, 'PNG', quality=95)
        return output_path

    def generate_circle_stats_infographic(
        self, title: str, stats: List[Dict[str, str]],
        subtitle: Optional[str] = None, filename: str = "circle_stats.png",
        style: str = "nature"
    ) -> str:
        """Generate an infographic with stats in large circles."""
        preset = STYLE_PRESETS.get(style, STYLE_PRESETS['nature'])
        img = _fast_gradient(self.width, self.height, preset['bg_start'], preset['bg_end'], 'vertical')
        draw = ImageDraw.Draw(img)

        title_font = get_font(56, bold=True)
        title_lines = self._wrap_text(title, title_font, self.width - 100)
        y_offset = 35
        for line in title_lines:
            bbox = draw.textbbox((0, 0), line, font=title_font)
            text_width = bbox[2] - bbox[0]
            draw.text(((self.width - text_width) // 2, y_offset), line,
                     fill=hex_to_rgb(preset['text']), font=title_font)
            y_offset += 65

        if subtitle:
            sf = get_font(24)
            bbox = draw.textbbox((0, 0), subtitle, font=sf)
            text_width = bbox[2] - bbox[0]
            draw.text(((self.width - text_width) // 2, y_offset), subtitle,
                     fill=hex_to_rgb(preset['highlight']), font=sf)
            y_offset += 45

        num_stats = min(len(stats), 4)
        circle_radius, gap = 85, 40
        total_width = num_stats * (circle_radius * 2) + (num_stats - 1) * gap
        start_x = (self.width - total_width) // 2 + circle_radius
        center_y = y_offset + 100 + circle_radius

        circle_fills = [hex_to_rgb(preset['accent']), hex_to_rgb(preset['highlight']),
                       hex_to_rgb(COLORS['cyan']), hex_to_rgb(COLORS['pink'])]

        for i, stat in enumerate(stats[:4]):
            center_x = start_x + i * (circle_radius * 2 + gap)
            fill_color = circle_fills[i % len(circle_fills)]

            draw.ellipse([center_x - circle_radius, center_y - circle_radius,
                         center_x + circle_radius, center_y + circle_radius],
                        fill=(255, 255, 255), outline=fill_color, width=5)

            value_font = get_font(42, bold=True)
            value = stat.get('value', '0')
            bbox = draw.textbbox((0, 0), value, font=value_font)
            text_width = bbox[2] - bbox[0]
            text_height = bbox[3] - bbox[1]
            draw.text((center_x - text_width // 2, center_y - text_height // 2 - 10), value,
                     fill=fill_color, font=value_font)

            lf = get_font(16, bold=True)
            label_lines = self._wrap_text(stat.get('label', ''), lf, circle_radius * 2 + 20)
            label_y = center_y + circle_radius + 15
            for line in label_lines[:2]:
                bbox = draw.textbbox((0, 0), line, font=lf)
                text_width = bbox[2] - bbox[0]
                draw.text((center_x - text_width // 2, label_y), line,
                         fill=hex_to_rgb(preset['text']), font=lf)
                label_y += 22

        self._draw_branding_bar(draw, text_color=preset['text'])
        output_path = os.path.join(self.output_dir, filename)
        img.save(output_path, 'PNG', quality=95)
        return output_path

    def generate_comparison_infographic(
        self, title: str, items: List[Dict], filename: str = "comparison_infographic.png",
        theme: str = "pharmacy"
    ) -> str:
        """Generate a comparison/vs infographic."""
        primary = COLORS['primary'] if theme == 'pharmacy' else COLORS['secondary']
        img = _fast_gradient(self.width, self.height, COLORS['white'], COLORS['gray_light'], 'vertical')
        draw = ImageDraw.Draw(img)

        draw.rectangle([0, 0, self.width, 8], fill=hex_to_rgb(primary))

        title_font = get_font(40, bold=True)
        bbox = draw.textbbox((0, 0), title, font=title_font)
        text_width = bbox[2] - bbox[0]
        draw.text(((self.width - text_width) // 2, 40), title,
                 fill=hex_to_rgb(COLORS['black']), font=title_font)

        num_items = min(len(items), 3)
        col_width = (self.width - 80) // num_items
        start_y = 120

        for i, item in enumerate(items[:3]):
            x = 40 + i * col_width
            is_highlighted = item.get('highlight', False)
            header_bg = hex_to_rgb(primary if is_highlighted else COLORS['gray_light'])

            draw.rectangle([x + 10, start_y, x + col_width - 10, start_y + 50], fill=header_bg)

            name_font = get_font(24, bold=True)
            name = item.get('name', '')
            bbox = draw.textbbox((0, 0), name, font=name_font)
            text_width = bbox[2] - bbox[0]
            draw.text((x + (col_width - text_width) // 2, start_y + 12), name,
                     fill=hex_to_rgb(COLORS['white'] if is_highlighted else COLORS['black']), font=name_font)

            feature_font = get_font(16)
            feature_y = start_y + 70
            for feature in item.get('features', [])[:8]:
                check_color = COLORS['primary_light'] if is_highlighted else COLORS['gray']
                draw.text((x + 20, feature_y), "✓", fill=hex_to_rgb(check_color), font=feature_font)
                draw.text((x + 45, feature_y), feature, fill=hex_to_rgb(COLORS['gray_dark']), font=feature_font)
                feature_y += 30

            if is_highlighted:
                draw.rectangle([x + 5, start_y - 5, x + col_width - 5, feature_y + 20],
                             outline=hex_to_rgb(primary), width=3)

        self._add_branding(img, draw)
        output_path = os.path.join(self.output_dir, filename)
        img.save(output_path, 'PNG', quality=95)
        return output_path

    def generate_feature_list_infographic(
        self, title: str, features: List[Dict[str, str]],
        filename: str = "features_infographic.png", theme: str = "pharmacy"
    ) -> str:
        """Generate a feature list infographic."""
        primary = COLORS['primary'] if theme == 'pharmacy' else COLORS['secondary']
        img = _fast_gradient(self.width, self.height, primary,
                            COLORS['primary_dark'] if theme == 'pharmacy' else '#1e3a8a', 'vertical')
        draw = ImageDraw.Draw(img)

        title_font = get_font(44, bold=True)
        title_lines = self._wrap_text(title, title_font, self.width - 100)
        y_offset = 40
        for line in title_lines:
            bbox = draw.textbbox((0, 0), line, font=title_font)
            text_width = bbox[2] - bbox[0]
            draw.text(((self.width - text_width) // 2, y_offset), line,
                     fill=hex_to_rgb(COLORS['white']), font=title_font)
            y_offset += 50

        num_features = min(len(features), 6)
        card_width = (self.width - 100) // 2 - 20
        card_height = 120
        start_x, start_y = 50, y_offset + 30

        for i, feature in enumerate(features[:6]):
            col, row = i % 2, i // 2
            x = start_x + col * (card_width + 40)
            y = start_y + row * (card_height + 20)

            self._draw_rounded_rect(draw, [x, y, x + card_width, y + card_height],
                                   radius=10, fill=hex_to_rgb(COLORS['white']))

            badge_size = 36
            draw.ellipse([x + 15, y + 15, x + 15 + badge_size, y + 15 + badge_size],
                        fill=hex_to_rgb(primary))
            num_font = get_font(20, bold=True)
            draw.text((x + 25, y + 20), str(i + 1), fill=hex_to_rgb(COLORS['white']), font=num_font)

            feat_title_font = get_font(20, bold=True)
            draw.text((x + 65, y + 20), feature.get('title', ''),
                     fill=hex_to_rgb(COLORS['black']), font=feat_title_font)

            desc_font = get_font(14)
            desc_lines = self._wrap_text(feature.get('description', ''), desc_font, card_width - 80)
            desc_y = y + 55
            for line in desc_lines[:2]:
                draw.text((x + 65, desc_y), line, fill=hex_to_rgb(COLORS['gray']), font=desc_font)
                desc_y += 22

        brand_font = get_font(20, bold=True)
        brand_text = "medsoftwares.com"
        bbox = draw.textbbox((0, 0), brand_text, font=brand_font)
        text_width = bbox[2] - bbox[0]
        draw.text((self.width - text_width - 30, self.height - 40), brand_text,
                 fill=hex_to_rgb(COLORS['white']), font=brand_font)

        output_path = os.path.join(self.output_dir, filename)
        img.save(output_path, 'PNG', quality=95)
        return output_path

    def generate_chart_infographic(
        self, title: str, data: Dict[str, float], chart_type: str = "bar",
        filename: str = "chart_infographic.png", theme: str = "pharmacy"
    ) -> str:
        """Generate a chart-based infographic."""
        primary = COLORS['primary'] if theme == 'pharmacy' else COLORS['secondary']
        fig, ax = plt.subplots(figsize=(12, 6.3), dpi=100)
        fig.patch.set_facecolor('#f9fafb')

        labels = list(data.keys())
        values = list(data.values())
        colors = [primary, COLORS['accent_teal'], COLORS['accent_orange'],
                 COLORS['accent_purple'], COLORS['primary_light'], COLORS['secondary_light']]

        if chart_type == 'bar':
            bars = ax.bar(labels, values, color=[colors[i % len(colors)] for i in range(len(labels))])
            ax.set_ylabel('Value', fontsize=12)
            for bar, val in zip(bars, values):
                ax.text(bar.get_x() + bar.get_width()/2., bar.get_height(), f'{val}',
                       ha='center', va='bottom', fontsize=11, fontweight='bold')
        elif chart_type == 'horizontal_bar':
            bars = ax.barh(labels, values, color=[colors[i % len(colors)] for i in range(len(labels))])
            ax.set_xlabel('Value', fontsize=12)
            for bar, val in zip(bars, values):
                ax.text(bar.get_width(), bar.get_y() + bar.get_height()/2., f' {val}',
                       ha='left', va='center', fontsize=11, fontweight='bold')
        elif chart_type == 'pie':
            wedges, texts, autotexts = ax.pie(values, labels=labels, autopct='%1.1f%%',
                colors=[colors[i % len(colors)] for i in range(len(labels))], startangle=90)
            for autotext in autotexts:
                autotext.set_fontsize(11)
                autotext.set_fontweight('bold')

        ax.set_title(title, fontsize=18, fontweight='bold', pad=20)
        if chart_type != 'pie':
            ax.spines['top'].set_visible(False)
            ax.spines['right'].set_visible(False)
        plt.tight_layout()

        buf = BytesIO()
        plt.savefig(buf, format='png', dpi=100, bbox_inches='tight', facecolor='#f9fafb', edgecolor='none')
        buf.seek(0)
        plt.close()

        img = Image.open(buf)
        img = img.resize((self.width, self.height), Image.Resampling.LANCZOS)
        draw = ImageDraw.Draw(img)
        draw.rectangle([0, 0, self.width, 6], fill=hex_to_rgb(primary))
        self._add_branding(img, draw)

        output_path = os.path.join(self.output_dir, filename)
        img.save(output_path, 'PNG', quality=95)
        return output_path

    def generate_timeline_infographic(
        self, title: str, events: List[Dict[str, str]],
        filename: str = "timeline_infographic.png", theme: str = "pharmacy"
    ) -> str:
        """Generate a timeline/process infographic."""
        primary = COLORS['primary'] if theme == 'pharmacy' else COLORS['secondary']
        img, draw = self._create_base_image('white')
        draw.rectangle([0, 0, self.width, 8], fill=hex_to_rgb(primary))

        title_font = get_font(40, bold=True)
        bbox = draw.textbbox((0, 0), title, font=title_font)
        text_width = bbox[2] - bbox[0]
        draw.text(((self.width - text_width) // 2, 30), title,
                 fill=hex_to_rgb(COLORS['black']), font=title_font)

        num_events = min(len(events), 5)
        line_y, start_x, end_x = 180, 80, self.width - 80
        draw.line([(start_x, line_y), (end_x, line_y)], fill=hex_to_rgb(COLORS['gray']), width=4)

        spacing = (end_x - start_x) // (num_events - 1) if num_events > 1 else 0
        for i, event in enumerate(events[:5]):
            x = start_x + i * spacing
            circle_radius = 20
            draw.ellipse([x - circle_radius, line_y - circle_radius, x + circle_radius, line_y + circle_radius],
                        fill=hex_to_rgb(primary), outline=hex_to_rgb(COLORS['white']), width=4)
            num_font = get_font(18, bold=True)
            draw.text((x - 6, line_y - 10), str(i + 1), fill=hex_to_rgb(COLORS['white']), font=num_font)

            if i % 2 == 0:
                title_y, desc_y = line_y - 80, line_y - 55
            else:
                title_y, desc_y = line_y + 40, line_y + 65

            tsf = get_font(16, bold=True)
            df = get_font(12)
            et = event.get('title', '')
            bbox = draw.textbbox((0, 0), et, font=tsf)
            text_width = bbox[2] - bbox[0]
            draw.text((x - text_width // 2, title_y), et, fill=hex_to_rgb(primary), font=tsf)

            desc_lines = self._wrap_text(event.get('description', ''), df, spacing - 20)
            for j, line in enumerate(desc_lines[:2]):
                bbox = draw.textbbox((0, 0), line, font=df)
                text_width = bbox[2] - bbox[0]
                draw.text((x - text_width // 2, desc_y + j * 18), line,
                         fill=hex_to_rgb(COLORS['gray']), font=df)

        self._add_branding(img, draw)
        output_path = os.path.join(self.output_dir, filename)
        img.save(output_path, 'PNG', quality=95)
        return output_path

    def generate_quote_infographic(
        self, quote: str, author: str, author_title: str = "",
        filename: str = "quote_infographic.png", theme: str = "pharmacy"
    ) -> str:
        """Generate a quote/testimonial infographic."""
        primary = COLORS['primary'] if theme == 'pharmacy' else COLORS['secondary']
        img = _fast_gradient(self.width, self.height, primary,
                            COLORS['primary_dark'] if theme == 'pharmacy' else '#1e3a8a', 'vertical')
        draw = ImageDraw.Draw(img)

        qmf = get_font(200)
        draw.text((60, 20), '"', fill=(255, 255, 255, 50), font=qmf)

        qf = get_font(32)
        quote_lines = self._wrap_text(quote, qf, self.width - 200)
        y_offset = 150
        for line in quote_lines[:6]:
            bbox = draw.textbbox((0, 0), line, font=qf)
            text_width = bbox[2] - bbox[0]
            draw.text(((self.width - text_width) // 2, y_offset), line,
                     fill=hex_to_rgb(COLORS['white']), font=qf)
            y_offset += 45

        af = get_font(24, bold=True)
        at = f"— {author}"
        bbox = draw.textbbox((0, 0), at, font=af)
        text_width = bbox[2] - bbox[0]
        draw.text(((self.width - text_width) // 2, y_offset + 40), at,
                 fill=hex_to_rgb(COLORS['white']), font=af)

        if author_title:
            tf = get_font(18)
            bbox = draw.textbbox((0, 0), author_title, font=tf)
            text_width = bbox[2] - bbox[0]
            draw.text(((self.width - text_width) // 2, y_offset + 75), author_title,
                     fill=(255, 255, 255, 180), font=tf)

        brand_font = get_font(20, bold=True)
        brand_text = "medsoftwares.com"
        bbox = draw.textbbox((0, 0), brand_text, font=brand_font)
        text_width = bbox[2] - bbox[0]
        draw.text((self.width - text_width - 30, self.height - 40), brand_text,
                 fill=hex_to_rgb(COLORS['white']), font=brand_font)

        output_path = os.path.join(self.output_dir, filename)
        img.save(output_path, 'PNG', quality=95)
        return output_path

    # =========================================================================
    # NEW GENERATORS — 7 unique layout types
    # =========================================================================

    def generate_hero_banner_infographic(
        self, title: str, stats: List[Dict[str, str]],
        subtitle: Optional[str] = None, filename: str = "hero_banner.png",
        style: str = "modern_dark"
    ) -> str:
        """Bold title + abstract geometric art background."""
        preset = STYLE_PRESETS.get(style, STYLE_PRESETS['modern_dark'])

        img = _fast_diagonal_gradient(self.width, self.height, preset['bg_start'], preset['bg_end'], 0.6)
        draw = ImageDraw.Draw(img)

        # Abstract geometric shapes
        accent_rgb = hex_to_rgb(preset['accent'])
        highlight_rgb = hex_to_rgb(preset['highlight'])
        rng = np.random.RandomState(hash(filename) % 2**31)

        # Large translucent triangles
        for _ in range(3):
            pts = [(rng.randint(0, self.width), rng.randint(0, self.height)) for _ in range(3)]
            c = accent_rgb if rng.rand() > 0.5 else highlight_rgb
            faded = (c[0] // 4, c[1] // 4, c[2] // 4)
            draw.polygon(pts, fill=faded)

        # Floating circles
        for _ in range(6):
            cx, cy = rng.randint(0, self.width), rng.randint(0, self.height)
            r = rng.randint(20, 80)
            c = accent_rgb if rng.rand() > 0.5 else highlight_rgb
            faded = (c[0] // 3, c[1] // 3, c[2] // 3)
            draw.ellipse([cx - r, cy - r, cx + r, cy + r], fill=faded)

        # Corner accents
        self._draw_corner_accents(draw, preset['accent'], size=60, width=3)

        # Title — bold and huge
        title_font = get_font(68, bold=True)
        title_lines = self._wrap_text(title, title_font, self.width - 140)
        y_offset = 60
        for line in title_lines:
            bbox = draw.textbbox((0, 0), line, font=title_font)
            text_width = bbox[2] - bbox[0]
            x = (self.width - text_width) // 2
            # Shadow
            draw.text((x + 3, y_offset + 3), line, fill=(0, 0, 0), font=title_font)
            draw.text((x, y_offset), line, fill=hex_to_rgb(preset['text']), font=title_font)
            y_offset += 80

        # Subtitle
        if subtitle:
            sf = get_font(26)
            bbox = draw.textbbox((0, 0), subtitle, font=sf)
            text_width = bbox[2] - bbox[0]
            draw.text(((self.width - text_width) // 2, y_offset + 5), subtitle,
                     fill=hex_to_rgb(preset['highlight']), font=sf)
            y_offset += 50

        # Stats in a horizontal strip
        if stats:
            num_stats = min(len(stats), 4)
            strip_y = max(y_offset + 40, self.height - 180)
            stat_width = (self.width - 120) // num_stats

            # Semi-transparent strip background
            draw.rectangle([40, strip_y - 10, self.width - 40, strip_y + 100],
                          fill=(0, 0, 0))

            for i, stat in enumerate(stats[:4]):
                cx = 60 + i * stat_width + stat_width // 2
                vf = get_font(44, bold=True)
                value = stat.get('value', '')
                bbox = draw.textbbox((0, 0), value, font=vf)
                tw = bbox[2] - bbox[0]
                draw.text((cx - tw // 2, strip_y + 5), value, fill=hex_to_rgb(preset['accent']), font=vf)

                lf = get_font(16)
                label = stat.get('label', '')
                bbox = draw.textbbox((0, 0), label, font=lf)
                tw = bbox[2] - bbox[0]
                draw.text((cx - tw // 2, strip_y + 60), label, fill=hex_to_rgb(preset['text']), font=lf)

        self._draw_branding_bar(draw, text_color=preset['text'])
        output_path = os.path.join(self.output_dir, filename)
        img.save(output_path, 'PNG', quality=95)
        return output_path

    def generate_icon_grid_infographic(
        self, title: str, items: List[Dict[str, str]],
        subtitle: Optional[str] = None, filename: str = "icon_grid.png",
        style: str = "nature"
    ) -> str:
        """Grid of feature items with unicode icons."""
        preset = STYLE_PRESETS.get(style, STYLE_PRESETS['nature'])

        img = _fast_gradient(self.width, self.height, preset['bg_start'], preset['bg_end'], 'vertical')
        draw = ImageDraw.Draw(img)

        # Dot pattern overlay
        self._draw_dot_pattern(draw, [0, 0, self.width, self.height],
                              preset['accent'], spacing=40, dot_size=2, opacity_factor=0.15)

        # Title
        title_font = get_font(52, bold=True)
        title_lines = self._wrap_text(title, title_font, self.width - 100)
        y_offset = 30
        for line in title_lines:
            bbox = draw.textbbox((0, 0), line, font=title_font)
            text_width = bbox[2] - bbox[0]
            draw.text(((self.width - text_width) // 2, y_offset), line,
                     fill=hex_to_rgb(preset['text']), font=title_font)
            y_offset += 62

        if subtitle:
            sf = get_font(22)
            bbox = draw.textbbox((0, 0), subtitle, font=sf)
            text_width = bbox[2] - bbox[0]
            draw.text(((self.width - text_width) // 2, y_offset + 2), subtitle,
                     fill=hex_to_rgb(preset['highlight']), font=sf)
            y_offset += 40

        # Grid of items (2 or 3 cols)
        num_items = min(len(items), 6)
        cols = 3 if num_items > 4 else 2
        rows = math.ceil(num_items / cols)
        card_w = (self.width - 80 - (cols - 1) * 20) // cols
        card_h = min(120, (self.height - y_offset - 80) // rows - 15)
        start_x = 40

        default_icons = ["⚡", "🔒", "📊", "💡", "🏥", "⚙️", "📱", "🔗"]

        for i, item in enumerate(items[:num_items]):
            col, row = i % cols, i // cols
            x = start_x + col * (card_w + 20)
            y = y_offset + 20 + row * (card_h + 15)

            # Card background
            self._draw_rounded_rect(draw, [x, y, x + card_w, y + card_h],
                                   radius=12, fill=(255, 255, 255))

            # Icon
            icon = item.get('icon', default_icons[i % len(default_icons)])
            icon_font = get_font(32)
            draw.text((x + 15, y + 12), icon, fill=hex_to_rgb(preset['bg_start']), font=icon_font)

            # Title
            tf = get_font(18, bold=True)
            draw.text((x + 60, y + 15), item.get('title', ''),
                     fill=hex_to_rgb(COLORS['black']), font=tf)

            # Description
            df = get_font(13)
            desc_lines = self._wrap_text(item.get('description', ''), df, card_w - 75)
            dy = y + 42
            for line in desc_lines[:2]:
                draw.text((x + 60, dy), line, fill=hex_to_rgb(COLORS['gray']), font=df)
                dy += 18

        self._draw_branding_bar(draw, text_color=preset['text'])
        output_path = os.path.join(self.output_dir, filename)
        img.save(output_path, 'PNG', quality=95)
        return output_path

    def generate_dashboard_infographic(
        self, title: str, stats: List[Dict[str, str]],
        subtitle: Optional[str] = None, filename: str = "dashboard.png",
        style: str = "tech"
    ) -> str:
        """Mock dashboard/UI screenshot style."""
        preset = STYLE_PRESETS.get(style, STYLE_PRESETS['tech'])

        img = Image.new('RGB', (self.width, self.height), hex_to_rgb(preset['bg_start']))
        draw = ImageDraw.Draw(img)

        # Mock browser chrome / title bar
        draw.rectangle([0, 0, self.width, 45], fill=(30, 30, 35))
        # Dots (traffic lights)
        for i, c in enumerate([(255, 95, 86), (255, 189, 46), (39, 201, 63)]):
            draw.ellipse([15 + i * 25, 14, 30 + i * 25, 29], fill=c)

        # Tab label
        tab_font = get_font(14)
        draw.text((100, 15), "MedSoftwares Dashboard", fill=(180, 180, 180), font=tab_font)

        # Sidebar
        sidebar_w = 200
        draw.rectangle([0, 45, sidebar_w, self.height], fill=(20, 20, 28))

        # Sidebar logo area
        logo_font = get_font(18, bold=True)
        draw.text((20, 65), "MedSoftwares", fill=hex_to_rgb(preset['accent']), font=logo_font)
        draw.line([(15, 95), (sidebar_w - 15, 95)], fill=(50, 50, 60), width=1)

        # Sidebar menu items
        menu_items = ["Dashboard", "Patients", "Billing", "Reports", "Settings"]
        mf = get_font(15)
        for i, mi in enumerate(menu_items):
            y = 110 + i * 38
            if i == 0:
                draw.rectangle([0, y - 5, sidebar_w, y + 28], fill=hex_to_rgb(preset['accent']))
                draw.text((25, y), mi, fill=(255, 255, 255), font=mf)
            else:
                draw.text((25, y), mi, fill=(140, 140, 160), font=mf)

        # Main content area
        content_x = sidebar_w + 20
        content_y = 65

        # Title in main area
        tf = get_font(32, bold=True)
        draw.text((content_x, content_y), title, fill=hex_to_rgb(preset['text']), font=tf)
        content_y += 45

        if subtitle:
            sf = get_font(16)
            draw.text((content_x, content_y), subtitle, fill=hex_to_rgb(preset['highlight']), font=sf)
            content_y += 30

        # Stat cards in a row
        num_stats = min(len(stats), 4)
        card_w = (self.width - sidebar_w - 60 - (num_stats - 1) * 15) // num_stats
        card_h = 110

        card_accents = [preset['accent'], preset['highlight'], COLORS['emerald'], COLORS['pink']]

        for i, stat in enumerate(stats[:num_stats]):
            x = content_x + i * (card_w + 15)
            y = content_y + 15

            # Card bg
            self._draw_rounded_rect(draw, [x, y, x + card_w, y + card_h],
                                   radius=8, fill=(35, 35, 45))

            # Top accent line
            acc_color = hex_to_rgb(card_accents[i % len(card_accents)])
            draw.rectangle([x + 8, y, x + card_w - 8, y + 4], fill=acc_color)

            # Value
            vf = get_font(36, bold=True)
            value = stat.get('value', '0')
            draw.text((x + 15, y + 20), value, fill=acc_color, font=vf)

            # Label
            lf = get_font(14)
            draw.text((x + 15, y + 70), stat.get('label', ''), fill=(160, 160, 180), font=lf)

        # Mini chart area below stats
        chart_y = content_y + card_h + 50
        chart_h = self.height - chart_y - 60
        chart_w = self.width - sidebar_w - 60

        if chart_h > 60:
            self._draw_rounded_rect(draw, [content_x, chart_y, content_x + chart_w, chart_y + chart_h],
                                   radius=8, fill=(35, 35, 45))

            # Fake chart bars
            bar_count = min(len(stats), 8)
            bar_w = max(20, (chart_w - 80) // max(bar_count * 2, 1))
            max_bar_h = chart_h - 50
            rng = np.random.RandomState(hash(filename) % 2**31)

            for i in range(bar_count):
                bx = content_x + 40 + i * bar_w * 2
                bh = int(max_bar_h * (0.3 + rng.rand() * 0.7))
                by = chart_y + chart_h - 25 - bh
                c = hex_to_rgb(card_accents[i % len(card_accents)])
                draw.rectangle([bx, by, bx + bar_w, chart_y + chart_h - 25], fill=c)

        self._draw_branding_bar(draw, bg_color=(15, 15, 20), text_color=preset['text'])
        output_path = os.path.join(self.output_dir, filename)
        img.save(output_path, 'PNG', quality=95)
        return output_path

    def generate_wave_infographic(
        self, title: str, stats: List[Dict[str, str]],
        subtitle: Optional[str] = None, filename: str = "wave.png",
        style: str = "ocean"
    ) -> str:
        """Wavy dividers with layered sections."""
        preset = STYLE_PRESETS.get(style, STYLE_PRESETS['ocean'])

        img = _fast_gradient(self.width, self.height, preset['bg_start'], preset['bg_end'], 'vertical')
        draw = ImageDraw.Draw(img)

        # Draw wave divider
        accent_rgb = hex_to_rgb(preset['accent'])
        wave_y_center = self.height // 2 + 20
        wave_amplitude = 30
        wave_freq = 2.5

        # Fill below wave with accent color (faded)
        faded_accent = (accent_rgb[0] // 5, accent_rgb[1] // 5, accent_rgb[2] // 5)
        for x in range(self.width):
            wy = int(wave_y_center + wave_amplitude * math.sin(wave_freq * math.pi * x / self.width))
            draw.line([(x, wy), (x, self.height)], fill=faded_accent)

        # Draw wave line
        wave_points = []
        for x in range(self.width):
            wy = int(wave_y_center + wave_amplitude * math.sin(wave_freq * math.pi * x / self.width))
            wave_points.append((x, wy))
        for i in range(len(wave_points) - 1):
            draw.line([wave_points[i], wave_points[i+1]], fill=accent_rgb, width=4)

        # Second wave (decorative)
        wave2_y = wave_y_center - 50
        for x in range(self.width):
            wy = int(wave2_y + 15 * math.sin(3.5 * math.pi * x / self.width + 1))
            if x > 0:
                draw.line([(x-1, prev_wy), (x, wy)],
                         fill=(accent_rgb[0]//2, accent_rgb[1]//2, accent_rgb[2]//2), width=2)
            prev_wy = wy

        # Title — upper section
        title_font = get_font(58, bold=True)
        title_lines = self._wrap_text(title, title_font, self.width - 120)
        y_offset = 40
        for line in title_lines:
            bbox = draw.textbbox((0, 0), line, font=title_font)
            text_width = bbox[2] - bbox[0]
            x = (self.width - text_width) // 2
            draw.text((x + 2, y_offset + 2), line, fill=(0, 0, 0), font=title_font)
            draw.text((x, y_offset), line, fill=hex_to_rgb(preset['text']), font=title_font)
            y_offset += 68

        if subtitle:
            sf = get_font(24)
            bbox = draw.textbbox((0, 0), subtitle, font=sf)
            text_width = bbox[2] - bbox[0]
            draw.text(((self.width - text_width) // 2, y_offset), subtitle,
                     fill=hex_to_rgb(preset['highlight']), font=sf)

        # Stats below wave
        if stats:
            num_stats = min(len(stats), 4)
            stat_y = wave_y_center + wave_amplitude + 30
            stat_width = (self.width - 100) // num_stats

            for i, stat in enumerate(stats[:num_stats]):
                cx = 50 + i * stat_width + stat_width // 2

                vf = get_font(46, bold=True)
                value = stat.get('value', '')
                bbox = draw.textbbox((0, 0), value, font=vf)
                tw = bbox[2] - bbox[0]
                draw.text((cx - tw // 2, stat_y), value, fill=accent_rgb, font=vf)

                lf = get_font(16)
                label = stat.get('label', '')
                label_lines = self._wrap_text(label, lf, stat_width - 20)
                ly = stat_y + 55
                for line in label_lines[:2]:
                    bbox = draw.textbbox((0, 0), line, font=lf)
                    tw = bbox[2] - bbox[0]
                    draw.text((cx - tw // 2, ly), line, fill=hex_to_rgb(preset['text']), font=lf)
                    ly += 22

        self._draw_branding_bar(draw, text_color=preset['text'])
        output_path = os.path.join(self.output_dir, filename)
        img.save(output_path, 'PNG', quality=95)
        return output_path

    def generate_gradient_mesh_infographic(
        self, title: str, stats: List[Dict[str, str]],
        subtitle: Optional[str] = None, filename: str = "gradient_mesh.png",
        style: str = "vibrant"
    ) -> str:
        """Modern gradient mesh background with floating cards."""
        preset = STYLE_PRESETS.get(style, STYLE_PRESETS['vibrant'])

        # Create multi-color mesh using overlapping radial gradients
        img = Image.new('RGB', (self.width, self.height), hex_to_rgb(preset['bg_start']))
        arr = np.array(img, dtype=np.float64)

        rng = np.random.RandomState(hash(filename) % 2**31)
        mesh_colors = [preset['bg_end'], preset['accent'], preset['highlight']]

        y_grid, x_grid = np.mgrid[0:self.height, 0:self.width]

        for mc in mesh_colors:
            cx, cy = rng.randint(100, self.width - 100), rng.randint(100, self.height - 100)
            radius = rng.randint(200, 500)
            c = np.array(hex_to_rgb(mc), dtype=np.float64)

            dist = np.sqrt((x_grid - cx)**2 + (y_grid - cy)**2)
            influence = np.clip(1 - dist / radius, 0, 1).reshape(self.height, self.width, 1)
            arr = arr * (1 - influence * 0.4) + c * influence * 0.4

        img = Image.fromarray(arr.clip(0, 255).astype(np.uint8))
        draw = ImageDraw.Draw(img)

        # Title
        title_font = get_font(60, bold=True)
        title_lines = self._wrap_text(title, title_font, self.width - 120)
        y_offset = 45
        for line in title_lines:
            bbox = draw.textbbox((0, 0), line, font=title_font)
            text_width = bbox[2] - bbox[0]
            x = (self.width - text_width) // 2
            draw.text((x + 2, y_offset + 2), line, fill=(0, 0, 0), font=title_font)
            draw.text((x, y_offset), line, fill=hex_to_rgb(preset['text']), font=title_font)
            y_offset += 72

        if subtitle:
            sf = get_font(24)
            bbox = draw.textbbox((0, 0), subtitle, font=sf)
            text_width = bbox[2] - bbox[0]
            draw.text(((self.width - text_width) // 2, y_offset), subtitle,
                     fill=hex_to_rgb(preset['highlight']), font=sf)
            y_offset += 45

        # Floating cards
        if stats:
            num_stats = min(len(stats), 4)
            card_w = min(250, (self.width - 100 - (num_stats - 1) * 20) // num_stats)
            card_h = 160
            total_w = num_stats * card_w + (num_stats - 1) * 20
            start_x = (self.width - total_w) // 2
            card_y = max(y_offset + 20, self.height - card_h - 80)

            for i, stat in enumerate(stats[:num_stats]):
                x = start_x + i * (card_w + 20)

                # Card shadow
                self._draw_rounded_rect(draw, [x + 4, card_y + 4, x + card_w + 4, card_y + card_h + 4],
                                       radius=16, fill=(0, 0, 0))
                # Card
                self._draw_rounded_rect(draw, [x, card_y, x + card_w, card_y + card_h],
                                       radius=16, fill=(255, 255, 255))

                # Value
                vf = get_font(48, bold=True)
                value = stat.get('value', '')
                bbox = draw.textbbox((0, 0), value, font=vf)
                tw = bbox[2] - bbox[0]
                draw.text((x + (card_w - tw) // 2, card_y + 25), value,
                         fill=hex_to_rgb(preset['bg_start']), font=vf)

                # Label
                lf = get_font(16)
                label_lines = self._wrap_text(stat.get('label', ''), lf, card_w - 30)
                ly = card_y + 90
                for line in label_lines[:2]:
                    bbox = draw.textbbox((0, 0), line, font=lf)
                    tw = bbox[2] - bbox[0]
                    draw.text((x + (card_w - tw) // 2, ly), line,
                             fill=hex_to_rgb(COLORS['gray_dark']), font=lf)
                    ly += 22

        self._draw_branding_bar(draw, text_color=preset['text'])
        output_path = os.path.join(self.output_dir, filename)
        img.save(output_path, 'PNG', quality=95)
        return output_path

    def generate_numbered_list_infographic(
        self, title: str, items: List[Dict[str, str]],
        subtitle: Optional[str] = None, filename: str = "numbered_list.png",
        style: str = "modern_dark"
    ) -> str:
        """Top N list style infographic."""
        preset = STYLE_PRESETS.get(style, STYLE_PRESETS['modern_dark'])

        img = _fast_gradient(self.width, self.height, preset['bg_start'], preset['bg_end'], 'vertical')
        draw = ImageDraw.Draw(img)

        # Decorative line art
        self._draw_line_art(draw, preset['accent'], count=6, seed=hash(filename) % 2**31)

        title_font = get_font(52, bold=True)
        title_lines = self._wrap_text(title, title_font, self.width - 100)
        y_offset = 30
        for line in title_lines:
            bbox = draw.textbbox((0, 0), line, font=title_font)
            text_width = bbox[2] - bbox[0]
            draw.text(((self.width - text_width) // 2, y_offset), line,
                     fill=hex_to_rgb(preset['text']), font=title_font)
            y_offset += 62

        if subtitle:
            sf = get_font(20)
            bbox = draw.textbbox((0, 0), subtitle, font=sf)
            text_width = bbox[2] - bbox[0]
            draw.text(((self.width - text_width) // 2, y_offset), subtitle,
                     fill=hex_to_rgb(preset['highlight']), font=sf)
            y_offset += 35

        # Numbered list items (2 columns)
        num_items = min(len(items), 8)
        cols = 2
        col_w = (self.width - 100) // 2
        item_h = min(60, (self.height - y_offset - 80) // math.ceil(num_items / 2))

        accent_rgb = hex_to_rgb(preset['accent'])

        for i, item in enumerate(items[:num_items]):
            col = i % 2
            row = i // 2
            x = 50 + col * col_w
            y = y_offset + 20 + row * item_h

            # Number circle
            num_r = 18
            num_cx = x + num_r + 5
            num_cy = y + num_r
            draw.ellipse([num_cx - num_r, num_cy - num_r, num_cx + num_r, num_cy + num_r],
                        fill=accent_rgb)
            nf = get_font(18, bold=True)
            num_text = str(i + 1)
            bbox = draw.textbbox((0, 0), num_text, font=nf)
            ntw = bbox[2] - bbox[0]
            draw.text((num_cx - ntw // 2, num_cy - 10), num_text, fill=(255, 255, 255), font=nf)

            # Title
            tf = get_font(18, bold=True)
            draw.text((x + 50, y + 3), item.get('title', item.get('value', '')),
                     fill=hex_to_rgb(preset['text']), font=tf)

            # Description
            df = get_font(13)
            desc = item.get('description', item.get('label', ''))
            desc_lines = self._wrap_text(desc, df, col_w - 70)
            for line in desc_lines[:1]:
                draw.text((x + 50, y + 26), line, fill=hex_to_rgb(preset['highlight']), font=df)

        self._draw_branding_bar(draw, text_color=preset['text'])
        output_path = os.path.join(self.output_dir, filename)
        img.save(output_path, 'PNG', quality=95)
        return output_path

    def generate_spotlight_infographic(
        self, title: str, stats: List[Dict[str, str]],
        subtitle: Optional[str] = None, filename: str = "spotlight.png",
        style: str = "royal"
    ) -> str:
        """Single large stat spotlight with supporting context."""
        preset = STYLE_PRESETS.get(style, STYLE_PRESETS['royal'])

        img = _fast_diagonal_gradient(self.width, self.height, preset['bg_start'], preset['bg_end'], 0.5)
        draw = ImageDraw.Draw(img)

        # Radial glow in center
        center_x, center_y = self.width // 2, self.height // 2 - 20
        accent_rgb = hex_to_rgb(preset['accent'])
        for r in range(200, 0, -5):
            alpha_factor = r / 200
            glow = (int(accent_rgb[0] * alpha_factor * 0.15),
                    int(accent_rgb[1] * alpha_factor * 0.15),
                    int(accent_rgb[2] * alpha_factor * 0.15))
            draw.ellipse([center_x - r, center_y - r, center_x + r, center_y + r], fill=glow)

        # Title at top
        title_font = get_font(44, bold=True)
        title_lines = self._wrap_text(title, title_font, self.width - 100)
        y_offset = 30
        for line in title_lines:
            bbox = draw.textbbox((0, 0), line, font=title_font)
            text_width = bbox[2] - bbox[0]
            draw.text(((self.width - text_width) // 2, y_offset), line,
                     fill=hex_to_rgb(preset['text']), font=title_font)
            y_offset += 52

        if subtitle:
            sf = get_font(20)
            bbox = draw.textbbox((0, 0), subtitle, font=sf)
            text_width = bbox[2] - bbox[0]
            draw.text(((self.width - text_width) // 2, y_offset + 5), subtitle,
                     fill=hex_to_rgb(preset['highlight']), font=sf)
            y_offset += 40

        # Main spotlight stat (first one, huge)
        if stats:
            main_stat = stats[0]
            main_value = main_stat.get('value', '')
            main_label = main_stat.get('label', '')

            # Huge value
            mvf = get_font(120, bold=True)
            bbox = draw.textbbox((0, 0), main_value, font=mvf)
            tw = bbox[2] - bbox[0]
            main_y = y_offset + 30
            draw.text(((self.width - tw) // 2 + 3, main_y + 3), main_value,
                     fill=(0, 0, 0), font=mvf)
            draw.text(((self.width - tw) // 2, main_y), main_value,
                     fill=hex_to_rgb(preset['accent']), font=mvf)

            # Label below
            mlf = get_font(28, bold=True)
            bbox = draw.textbbox((0, 0), main_label, font=mlf)
            tw = bbox[2] - bbox[0]
            draw.text(((self.width - tw) // 2, main_y + 130), main_label,
                     fill=hex_to_rgb(preset['text']), font=mlf)

        # Supporting stats at bottom
        if len(stats) > 1:
            support_stats = stats[1:4]
            num_support = len(support_stats)
            stat_width = (self.width - 100) // num_support
            stat_y = self.height - 130

            draw.line([(80, stat_y - 15), (self.width - 80, stat_y - 15)],
                     fill=hex_to_rgb(preset['accent']), width=2)

            for i, stat in enumerate(support_stats):
                cx = 50 + i * stat_width + stat_width // 2

                vf = get_font(36, bold=True)
                value = stat.get('value', '')
                bbox = draw.textbbox((0, 0), value, font=vf)
                tw = bbox[2] - bbox[0]
                draw.text((cx - tw // 2, stat_y), value, fill=hex_to_rgb(preset['accent']), font=vf)

                lf = get_font(14)
                label = stat.get('label', '')
                bbox = draw.textbbox((0, 0), label, font=lf)
                tw = bbox[2] - bbox[0]
                draw.text((cx - tw // 2, stat_y + 42), label, fill=hex_to_rgb(preset['text']), font=lf)

        self._draw_branding_bar(draw, text_color=preset['text'])
        output_path = os.path.join(self.output_dir, filename)
        img.save(output_path, 'PNG', quality=95)
        return output_path


def generate_blog_infographics():
    """Generate sample infographics for existing blog topics."""

    generator = InfographicGenerator()
    generated_files = []

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

    comparison_path = generator.generate_comparison_infographic(
        title="PharmaPOS vs Traditional Software",
        items=[
            {"name": "Traditional Software", "features": ["Monthly subscription fees", "Requires constant internet", "Limited mobile payments", "Basic reporting", "Single location only"], "highlight": False},
            {"name": "PharmaPOS", "features": ["One-time payment", "Works offline", "Mobile money integrated", "Advanced analytics", "Multi-branch support", "Drug interaction checker", "NHIS claims processing", "24/7 support available"], "highlight": True},
        ],
        filename="pharmacy-software-comparison.png",
        theme="pharmacy"
    )
    generated_files.append(comparison_path)
    print(f"Generated: {comparison_path}")

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

    chart_path = generator.generate_chart_infographic(
        title="Healthcare Software Market Growth by Region",
        data={"Africa": 42, "Middle East": 28, "Asia Pacific": 35, "Latin America": 22, "Europe": 18},
        chart_type="bar",
        filename="market-growth-chart.png",
        theme="pharmacy"
    )
    generated_files.append(chart_path)
    print(f"Generated: {chart_path}")

    quote_path = generator.generate_quote_infographic(
        quote="PharmaPOS transformed our pharmacy operations. We reduced checkout time by 60% and inventory errors are now a thing of the past.",
        author="Kwame Asante",
        author_title="Owner, Asante Pharmacy - Accra, Ghana",
        filename="customer-testimonial.png",
        theme="pharmacy"
    )
    generated_files.append(quote_path)
    print(f"Generated: {quote_path}")

    modules_chart = generator.generate_chart_infographic(
        title="HospitalOS Modules Usage Distribution",
        data={"OPD/IPD": 95, "Laboratory": 88, "Pharmacy": 82, "Billing": 90, "EMR": 75, "Radiology": 45},
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
        print("\nAvailable generators:")
        print("  - generate_statistics_infographic()")
        print("  - generate_elegant_stats_infographic()")
        print("  - generate_bold_cards_infographic()")
        print("  - generate_split_infographic()")
        print("  - generate_minimal_stats_infographic()")
        print("  - generate_circle_stats_infographic()")
        print("  - generate_comparison_infographic()")
        print("  - generate_feature_list_infographic()")
        print("  - generate_chart_infographic()")
        print("  - generate_timeline_infographic()")
        print("  - generate_quote_infographic()")
        print("  - generate_hero_banner_infographic()       [NEW]")
        print("  - generate_icon_grid_infographic()         [NEW]")
        print("  - generate_dashboard_infographic()         [NEW]")
        print("  - generate_wave_infographic()              [NEW]")
        print("  - generate_gradient_mesh_infographic()     [NEW]")
        print("  - generate_numbered_list_infographic()     [NEW]")
        print("  - generate_spotlight_infographic()         [NEW]")
