# BB Butcher Shop — bbbutcher.com

A bilingual (English / Mongolian) single-page website for **BB Butcher Shop / ББ Махны Дэлгүүр**, a butcher shop in Khan-Uul District, Ulaanbaatar, Mongolia.

Built as a static site: no build step, no dependencies, no backend. Open `index.html` and it runs.

---

## Contents

```
bb-butcher-shop/
├── index.html          all page markup (both languages)
├── css/
│   ├── fonts.css       @font-face rules for the self-hosted fonts
│   └── styles.css      all styling
├── js/
│   └── main.js         language toggle, mobile menu, hours, scroll reveal
├── fonts/              36 woff2 files (Cormorant Garamond + Inter)
├── images/             9 photographs
└── README.md
```

---

## Running it

**Simplest:** unzip and double-click `index.html`.

**Local server** (recommended — matches how it behaves online):

```bash
cd bb-butcher-shop
python3 -m http.server 8000
# then open http://localhost:8000
```

---

## Bilingual system

Every translatable element carries two attributes:

```html
<h2 data-en="What's in the counter" data-mn="Лангуунд байгаа мах">What's in the counter</h2>
```

`js/main.js` swaps `innerHTML` from `data-en` or `data-mn` when the EN / МН buttons are clicked, sets `<html lang>`, and remembers the choice in `localStorage` under the key `bb-lang`.

**To add a new string:** give the element both `data-en` and `data-mn`. Nothing else is needed — the toggle picks it up automatically.

**To change the default language:** edit `DEFAULT_LANG` at the top of `js/main.js` (`'en'` or `'mn'`).

**Note on the toggle:** the language choice is stored in the visitor's own browser. It is a display preference only — nothing is sent anywhere.

---

## Fonts — fully self-hosted

The site makes **no external font requests**. `css/fonts.css` declares 36 `@font-face` rules pointing at local `.woff2` files in `fonts/`:

- **Cormorant Garamond** — headings (300/400/500/600 + italic 400)
- **Inter** — body and UI (300/400/500/600)

Each face is split by `unicode-range` into Latin, Latin Extended, Cyrillic and Cyrillic Extended subsets, so a browser downloads only the subsets it needs. The Cyrillic subsets are what make the Mongolian text render properly.

**To swap a font:** replace the `.woff2` files in `fonts/` and update the matching `src:` paths in `css/fonts.css`. Keep the `unicode-range` lines — they are what keep the Cyrillic text working.

---

## Editing the design

Colours and type are CSS custom properties at the top of `css/styles.css`:

```css
:root{
  --navy:   #0b1a26;   /* dark sections, header text, footer */
  --gold:   #968662;   /* accents, buttons, rules */
  --gold-lt:#b3a37c;   /* accents on dark backgrounds */
  --sand:   #f0ede6;   /* alternating light sections */
  --ink:    #1b252e;   /* headings */
  --body:   #4a545c;   /* body copy */
  --serif:  'Cormorant Garamond', Georgia, serif;
  --sans:   'Inter', -apple-system, sans-serif;
}
```

Change those and the whole site follows.

---

## Page sections

| Section | `id` | Notes |
|---|---|---|
| Announcement bar | — | top strip, bilingual |
| Header | `siteHeader` | sticky; nav collapses to a drawer under 1080px |
| Hero | — | full-bleed image + three feature columns |
| What we do | `shop` | three promo cards |
| Our cuts | `cuts` | 8 product cards; the pantry card is `#pantry` |
| Wagyu story | `wagyu` | dark split section |
| Gallery | `gallery` | 6-image mosaic |
| Reviews | `reviews` | rating band + 3 Google reviews |
| Visit | `visit` | address, phone, hours, map |
| Footer | — | 4 columns + bottom bar |

---

## Opening hours

The hours list in `#visit` uses `data-day` attributes (`0` = Sunday … `6` = Saturday). `js/main.js` reads the visitor's local day and adds the `.today` class to the matching row, which highlights it in gold.

```html
<li data-day="1"><span class="day" data-en="Monday" data-mn="Даваа">Monday</span><span class="time">09:00 – 20:00</span></li>
```

To change a day's hours, edit the `.time` text. To change which day is highlighted, edit `data-day`.

---

## Business details used

- **Name:** BB Butcher Shop / ББ Махны Дэлгүүр
- **Address:** River Garden Village, 401 — HUD, 17th khoroo, Khan-Uul District, Ulaanbaatar
- **Phone:** +976 8040 8040
- **Hours:** Mon–Sat 09:00–20:00, Sun 10:00–20:00
- **Rating:** 4.8 from 28 Google reviews
- **Known for:** Mongolia's first dry-aged beef; first shop in Mongolia to carry Japanese A5 "Kashiwabara" Wagyu

The three review quotes are real Google reviews, attributed to their reviewers.

---

## What this site does not do

It is a static page with **no backend**. It cannot:

- take orders or payments
- send email or SMS
- store anything on a server

The phone number is a `tel:` link and the map is a Google Maps embed, so both work — but there is no cart, no checkout and no contact form. Adding real ordering would require a server-side application.

---

## Deploying to bbbutcher.com

Upload the whole folder to your host's web root. Because all paths are relative, it works from a subdirectory too. No server configuration is required beyond serving static files.

The `<link rel="canonical">` and Open Graph tags in `index.html` already point at `https://bbbutcher.com/` — update them if the domain changes.

---

## Browser support

Modern Chrome, Safari, Firefox and Edge. Uses CSS custom properties, CSS Grid, `aspect-ratio` and `IntersectionObserver` — all widely supported. Scroll-reveal animations are disabled automatically under `prefers-reduced-motion`.
