#!/usr/bin/env python3
"""
Converts website images to WebP format for faster loading.

Usage:
    pip install Pillow
    python convert-images.py

The script downloads images from their current sources and saves WebP versions
to the images/ directory. After running this script, commit the generated files
so the website serves the faster local WebP images.
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

IMAGES_DIR = os.path.join(os.path.dirname(__file__), "images")
WEBP_QUALITY = 82

SOURCES = [
    (
        "https://github.com/user-attachments/assets/73d303c4-1bbe-4aa4-ba79-3b271485cc84",
        "about-workshop.webp",
    ),
    (
        "https://github.com/user-attachments/assets/f2461a1d-bb2a-4bf7-b104-ac9ad5e4c69f",
        "gallery-1.webp",
    ),
    (
        "https://github.com/user-attachments/assets/7f2de48c-cd87-45cc-9555-80bf3ac2cd70",
        "gallery-2.webp",
    ),
    (
        "https://github.com/user-attachments/assets/48636fee-3d17-429a-aa26-a6cbd6665aa9",
        "gallery-3.webp",
    ),
    (
        "https://github.com/user-attachments/assets/82603f33-b366-4513-8128-fae24113fdeb",
        "gallery-4.webp",
    ),
    (
        "https://github.com/user-attachments/assets/858c4b79-ccbd-4332-bdf8-d9db8dfdc56a",
        "gallery-5.webp",
    ),
]


def download_image(url: str) -> bytes:
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
    with urllib.request.urlopen(req) as response:
        return response.read()


def convert_to_webp(image_data: bytes, output_path: str, quality: int = 82) -> None:
    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    img = Image.open(io.BytesIO(image_data))
    if img.mode in ("RGBA", "P"):
        img = img.convert("RGBA")
    else:
        img = img.convert("RGB")
    img.save(output_path, "WEBP", quality=quality, method=6)
    size_kb = os.path.getsize(output_path) / 1024
    print(f"  Saved {output_path} ({size_kb:.1f} KB, quality={quality})")


def main() -> None:
    for url, filename in SOURCES:
        output_path = os.path.join(IMAGES_DIR, filename)
        print(f"Downloading {filename} ...")
        image_data = download_image(url)
        original_kb = len(image_data) / 1024
        print(f"  Downloaded {original_kb:.1f} KB")
        convert_to_webp(image_data, output_path, quality=WEBP_QUALITY)
    print("\nDone. Commit the images/ directory to the repository.")


if __name__ == "__main__":
    main()
