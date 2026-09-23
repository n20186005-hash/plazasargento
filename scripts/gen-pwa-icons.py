#!/usr/bin/env python3
"""Generate PWA icons for plazasargento.com from the brand logo.

Brand mark (see public/favicon.svg):
  - gold circle fill  #f2c35f
  - dark-green stylized peak  #173f2c
  - base line
Background for tiles: deep green #173f2c.
"""
import math
from PIL import Image, ImageDraw

GOLD = (0xF2, 0xC3, 0x5F, 255)
GREEN = (0x17, 0x3F, 0x2C, 255)
GREEN_BG = (0x17, 0x3F, 0x2C, 255)


def cubic_bezier(p0, c1, c2, p3, steps=48):
    pts = []
    for i in range(steps + 1):
        t = i / steps
        mt = 1 - t
        x = (mt**3 * p0[0] + 3 * mt**2 * t * c1[0] +
             3 * mt * t**2 * c2[0] + t**3 * p3[0])
        y = (mt**3 * p0[1] + 3 * mt**2 * t * c1[1] +
             3 * mt * t**2 * c2[1] + t**3 * p3[1])
        pts.append((x, y))
    return pts


def draw_logo(img, s, line_w):
    d = ImageDraw.Draw(img)
    # circle
    cx, cy, r = 32 * s, 32 * s, 29 * s
    d.ellipse([cx - r, cy - r, cx + r, cy + r], fill=GOLD)
    # peak (two cubic segments forming a mountain curve)
    seg1 = cubic_bezier((16, 43), (23, 26), (29, 17), (32, 17))
    seg2 = cubic_bezier((32, 17), (35, 17), (41, 26), (48, 43))
    peak = seg1 + seg2[1:]
    d.line(peak, fill=GREEN, width=line_w, joint="curve")
    # base line
    d.line([(21 * s, 38 * s), (43 * s, 38 * s)], fill=GREEN, width=line_w,
           joint="curve")


def make_regular(size):
    img = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    d = ImageDraw.Draw(img)
    # rounded-square green background
    m = int(size * 0.0)
    r = int(size * 0.22)
    d.rounded_rectangle([m, m, size - m, size - m], radius=r, fill=GREEN_BG)
    s = size / 64
    line_w = max(2, int(5 * s))
    draw_logo(img, s, line_w)
    return img


def make_maskable(size):
    img = Image.new("RGBA", (size, size), GREEN_BG)
    s = (size * 0.80) / 64  # safe zone ~80%
    line_w = max(2, int(5 * s))
    draw_logo(img, s, line_w)
    return img


if __name__ == "__main__":
    import os
    out = os.path.join(os.path.dirname(__file__), "..", "public", "images")
    out = os.path.abspath(out)
    os.makedirs(out, exist_ok=True)
    make_regular(192).save(os.path.join(out, "icon-192.png"), "PNG")
    make_regular(512).save(os.path.join(out, "icon-512.png"), "PNG")
    make_maskable(512).save(os.path.join(out, "icon-512-maskable.png"), "PNG")
    print("PWA icons generated in", out)
