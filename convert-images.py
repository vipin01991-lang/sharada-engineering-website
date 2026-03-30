#!/usr/bin/env python3
"""
Converts the About Us page image to WebP format for faster loading.

Usage:
    pip install Pillow
    python convert-images.py

The script downloads the About Us image from its current source and saves a
WebP version to images/about-workshop.webp. After running this script, commit
the generated file so the website serves the faster local WebP image.
"""

import io
import os
import sys
import urllib.request

try:
    from PIL import Image
except ImportError:
    print("Pillow is required. Install it with: pip install Pillow")
    sys.exit(1)

SOURCE_URL = "https://github.com/user-attachments/assets/73d303c4-1bbe-4aa4-ba79-3b271485cc84"
OUTPUT_PATH = os.path.join(os.path.dirname(__file__), "images", "about-workshop.webp")
WEBP_QUALITY = 85


def download_image(url: str) -> bytes:
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
    with urllib.request.urlopen(req) as response:
        return response.read()


def convert_to_webp(image_data: bytes, output_path: str, quality: int = 85) -> None:
    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    img = Image.open(io.BytesIO(image_data))
    if img.mode in ("RGBA", "P"):
        img = img.convert("RGBA")
    else:
        img = img.convert("RGB")
    img.save(output_path, "WEBP", quality=quality, method=6)
    size_kb = os.path.getsize(output_path) / 1024
    print(f"Saved {output_path} ({size_kb:.1f} KB, quality={quality})")


def main() -> None:
    print(f"Downloading image from:\n  {SOURCE_URL}")
    image_data = download_image(SOURCE_URL)
    original_kb = len(image_data) / 1024
    print(f"Downloaded {original_kb:.1f} KB")
    convert_to_webp(image_data, OUTPUT_PATH, quality=WEBP_QUALITY)
    print("Done. Commit images/about-workshop.webp to the repository.")


if __name__ == "__main__":
    main()
