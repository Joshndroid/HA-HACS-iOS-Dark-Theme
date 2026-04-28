# iOS Tahoe Dark — Home Assistant Theme

A Home Assistant theme inspired by macOS/iOS Tahoe's dark mode aesthetic: deep charcoal backgrounds, frosted-glass card surfaces, and vibrant iOS blue accents. Uses **JetBrains Mono** throughout for a clean, technical look.

---

## Preview

| Element | Style |
|---|---|
| Background | `#0e0e10` near-black (visionOS-inspired) |
| Cards | `rgba(28,28,30,0.85)` frosted glass, 16px radius |
| Accent | `#0a84ff` iOS blue |
| Font | JetBrains Mono |
| Syntax (CodeMirror) | Full iOS-palette token colours |
| Energy dashboard | Full colour mapping |

---

## Installation via HACS

### Step 1 — Add the repository

1. Open HACS in your Home Assistant sidebar
2. Go to **Frontend**
3. Click the **⋮ menu** (top right) → **Custom repositories**
4. Add this repository URL and select **Theme** as the category
5. Click **Add**

### Step 2 — Install the theme

1. Find **iOS Tahoe Dark** in HACS → Frontend
2. Click **Download**
3. Restart Home Assistant (or reload themes)

### Step 3 — Enable themes in configuration.yaml

Make sure your `configuration.yaml` includes:

```yaml
frontend:
  themes: !include_dir_merge_named themes/
```

### Step 4 — Load the JetBrains Mono font

Add the following to `configuration.yaml`:

```yaml
frontend:
  extra_module_url:
    - /local/jetbrains_mono.js
```

Then create the file `/config/www/jetbrains_mono.js` with this content:

```js
const link = document.createElement("link");
link.rel = "stylesheet";
link.href = "https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&display=swap";
document.head.appendChild(link);
```

> **Note:** Create the `www/` folder inside `/config/` if it doesn't already exist.

### Step 5 — Activate the theme

1. Go to your **Profile** (bottom-left avatar)
2. Under **Theme**, select **iOS Tahoe Dark**

Or reload themes first via **Developer Tools → YAML → Reload Themes**.

---

## Manual Installation (without HACS)

1. Copy `themes/ios_tahoe_dark.yaml` into your `/config/themes/` directory (create it if needed)
2. Follow Steps 3–5 above

---

## Colour Palette

| Role | Colour |
|---|---|
| Base background | `#0e0e10` |
| Card / surface | `#1c1c1e` |
| Elevated surface | `#2c2c2e` |
| Primary accent | `#0a84ff` |
| Primary text | `#f2f2f7` |
| Secondary text | `rgba(235,235,245,0.60)` |
| Error | `#ff453a` |
| Success | `#30d158` |
| Warning | `#ffd60a` |
| Info / teal | `#64d2ff` |
| Purple | `#bf5af2` |

---

## Credits

Colour palette derived from Apple's iOS/macOS Tahoe dark mode system colours. Font by [JetBrains](https://www.jetbrains.com/lp/mono/).
