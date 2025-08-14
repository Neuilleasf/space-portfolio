export type HSL = { h: number; s: number; l: number }

export class ChromaticTransitions {
  /**
   * Convert a hex color string to an HSL object
   */
  static hexToHsl(hex: string): HSL {
    const { r, g, b } = this.hexToRgb(hex)
    return this.rgbToHsl(r, g, b)
  }

  /**
   * Convert RGB values to HSL.
   */
  static rgbToHsl(r: number, g: number, b: number): HSL {
    r /= 255
    g /= 255
    b /= 255

    const max = Math.max(r, g, b)
    const min = Math.min(r, g, b)
    let h = 0
    let s = 0
    const l = (max + min) / 2

    if (max !== min) {
      const d = max - min
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
      switch (max) {
        case r:
          h = (g - b) / d + (g < b ? 6 : 0)
          break
        case g:
          h = (b - r) / d + 2
          break
        case b:
          h = (r - g) / d + 4
          break
      }
      h /= 6
    }

    return { h: h * 360, s: s * 100, l: l * 100 }
  }

  /**
   * Convert a hex color string to RGB.
   */
  static hexToRgb(hex: string): { r: number; g: number; b: number } {
    const sanitized = hex.replace("#", "")
    const bigint = parseInt(sanitized, 16)
    const r = (bigint >> 16) & 255
    const g = (bigint >> 8) & 255
    const b = bigint & 255
    return { r, g, b }
  }

  /**
   * Convert HSL to RGB.
   */
  static hslToRgb(h: number, s: number, l: number): { r: number; g: number; b: number } {
    h /= 360
    s /= 100
    l /= 100

    if (s === 0) {
      const val = Math.round(l * 255)
      return { r: val, g: val, b: val }
    }

    const hue2rgb = (p: number, q: number, t: number) => {
      if (t < 0) t += 1
      if (t > 1) t -= 1
      if (t < 1 / 6) return p + (q - p) * 6 * t
      if (t < 1 / 2) return q
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6
      return p
    }

    const q = l < 0.5 ? l * (1 + s) : l + s - l * s
    const p = 2 * l - q

    const r = hue2rgb(p, q, h + 1 / 3)
    const g = hue2rgb(p, q, h)
    const b = hue2rgb(p, q, h - 1 / 3)

    return {
      r: Math.round(r * 255),
      g: Math.round(g * 255),
      b: Math.round(b * 255),
    }
  }

  /**
   * Convert HSL to hex string.
   */
  static hslToHex(h: number, s: number, l: number): string {
    const { r, g, b } = this.hslToRgb(h, s, l)
    return this.rgbToHex(r, g, b)
  }

  /**
   * Convert RGB to hex string.
   */
  static rgbToHex(r: number, g: number, b: number): string {
    const toHex = (x: number) => x.toString(16).padStart(2, "0")
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`
  }

  /**
   * Interpolate between two colors in HSL space.
   */
  static interpolateHsl(color1: string, color2: string, t: number): string {
    const c1 = this.hexToHsl(color1)
    const c2 = this.hexToHsl(color2)
    const h = c1.h + (c2.h - c1.h) * t
    const s = c1.s + (c2.s - c1.s) * t
    const l = c1.l + (c2.l - c1.l) * t
    return this.hslToHex(h, s, l)
  }

  /**
   * Morph between two gradients.
   */
  static gradientMorph(grad1: string[], grad2: string[], t: number): string[] {
    const max = Math.max(grad1.length, grad2.length)
    const result: string[] = []
    for (let i = 0; i < max; i++) {
      const c1 = grad1[i] ?? grad1[grad1.length - 1]
      const c2 = grad2[i] ?? grad2[grad2.length - 1]
      result.push(this.interpolateHsl(c1, c2, t))
    }
    return result
  }

  /**
   * Generate the complementary color for the given hex color.
   */
  static complementary(color: string): string {
    const { h, s, l } = this.hexToHsl(color)
    const newH = (h + 180) % 360
    return this.hslToHex(newH, s, l)
  }

  /**
   * Calculate relative luminance for a hex color.
   */
  static luminance(hex: string): number {
    const { r, g, b } = this.hexToRgb(hex)
    const a = [r, g, b].map((v) => {
      v /= 255
      return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4)
    })
    return 0.2126 * a[0] + 0.7152 * a[1] + 0.0722 * a[2]
  }

  /**
   * Calculate contrast ratio between two hex colors.
   */
  static contrast(color1: string, color2: string): number {
    const l1 = this.luminance(color1)
    const l2 = this.luminance(color2)
    const brightest = Math.max(l1, l2)
    const darkest = Math.min(l1, l2)
    return (brightest + 0.05) / (darkest + 0.05)
  }

  /**
   * Adjust color brightness to maintain contrast against a background.
   */
  static adaptiveBrightness(color: string, background: string, minRatio = 4.5): string {
    let { h, s, l } = this.hexToHsl(color)
    if (this.contrast(color, background) >= minRatio) return color
    const bgLum = this.luminance(background)
    // Move lightness towards opposite extreme until contrast met
    const direction = bgLum > 0.5 ? -1 : 1
    for (let i = 0; i < 100; i++) {
      l = Math.min(100, Math.max(0, l + direction))
      const newColor = this.hslToHex(h, s, l)
      if (this.contrast(newColor, background) >= minRatio) return newColor
    }
    return this.hslToHex(h, s, l)
  }

  /**
   * Theme aware transition between two colors.
   */
  static themeAwareTransition(
    from: string,
    to: string,
    t: number,
    theme: "light" | "dark"
  ): string {
    return theme === "light"
      ? this.interpolateHsl(from, to, t)
      : this.interpolateHsl(to, from, t)
  }
}

export default ChromaticTransitions
