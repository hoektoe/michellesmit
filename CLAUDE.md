# Project Guidelines

## Tech Stack

- **Framework:** Next.js 16 with React 19
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS 4.1 with PostCSS
- **Fonts:** Instrument Serif (display), Inter (body)

## Package Manager

Always use **yarn** instead of npm for installing dependencies.

```bash
# Correct
yarn add <package>
yarn install

# Incorrect
npm install <package>
```

## Project Structure

```
/src
  /app              # Next.js app router pages
  /components
    /elements       # Reusable UI components (button, link, wallpaper, etc.)
    /sections       # Page sections (hero, features, footer, navbar)
    /icons          # SVG icon components
/public/img         # Images, logos, avatars
```

---

## Color System

### Base Palette: "Mist" (OKLCH)

The primary color scale used throughout the site:

| Token | Light Mode Usage | Dark Mode Usage |
|-------|------------------|-----------------|
| `mist-50` | Page backgrounds | - |
| `mist-100` | Icon backgrounds, subtle fills | - |
| `mist-200` | Borders, dividers | - |
| `mist-300` | - | Button backgrounds, body text |
| `mist-400` | - | Secondary text |
| `mist-500` | Mid-tone accents | Mid-tone accents |
| `mist-600` | Body text, icons | - |
| `mist-700` | Secondary headings | - |
| `mist-800` | - | Icon backgrounds |
| `mist-900` | - | Card backgrounds |
| `mist-950` | Headings, button backgrounds | Page backgrounds |

### Wallpaper Colors by Section

Each therapy service has an assigned color for visual consistency. **These mappings must be maintained:**

| Service/Page | Wallpaper | Light Gradient | Dark Gradient |
|--------------|-----------|----------------|---------------|
| **Home Hero** | `sunset` | `#c4956a` → `#d4917a` | `#4a3828` → `#4d2f2a` |
| **About** | `sunset` | `#c4956a` → `#d4917a` | `#4a3828` → `#4d2f2a` |
| **Services Overview** | `sunset` | `#c4956a` → `#d4917a` | `#4a3828` → `#4d2f2a` |
| **Relationships** | `sunset` | `#c4956a` → `#d4917a` | `#4a3828` → `#4d2f2a` |
| **Anxiety** | `protea` | `#b87d7d` → `#a66b6b` | `#4a2d2d` → `#3d2525` |
| **Depression** | `blue` | `#637c86` → `#778599` | `#243a42` → `#232f40` |
| **Substance Abuse** | `green` | `#9ca88f` → `#596352` | `#333a2b` → `#26361b` |

### Reserved Wallpaper Colors (Available for Future Use)

| Name | Light Gradient | Dark Gradient |
|------|----------------|---------------|
| `purple` | `#7b627d` → `#8f6976` | `#412c42` → `#3c1a26` |
| `brown` | `#8d7359` → `#765959` | `#382d23` → `#3d2323` |

### Color Psychology

- **Sunset (Orange/Peach):** Warm, welcoming, approachable - main brand identity and relationships
- **Blue (Cool Gray-Blue):** Calm, stable, professional - depression/emotional support
- **Green (Earthy):** Natural, growth, recovery - substance abuse recovery
- **Protea (Rose/Mauve):** Gentle, soothing - anxiety management

---

## Component Guidelines

### Wallpaper Usage

```tsx
import { Wallpaper } from '@/components/elements/wallpaper'

// Always use the assigned color for each service
<Wallpaper color="sunset" />  // Home, About, Services, Relationships
<Wallpaper color="protea" />  // Anxiety
<Wallpaper color="blue" />    // Depression
<Wallpaper color="green" />   // Substance Abuse
```

### Button Variants

- `dark/light` (default): Primary CTA buttons
- `light`: Secondary buttons on dark backgrounds
- `soft`: Translucent style for subtle actions
- `plain`: Text-only buttons

---

## Key Files

| Purpose | File Path |
|---------|-----------|
| Theme & Colors | `src/app/globals.css` |
| Wallpaper System | `src/components/elements/wallpaper.tsx` |
| Button Styles | `src/components/elements/button.tsx` |
| Root Layout | `src/app/layout.tsx` |
| Theme Toggle | `src/components/elements/theme-toggle.tsx` |
