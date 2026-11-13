# BB Butcher Shop — Website Source

Static single-page website for **BB Butcher Shop / ББ Махны Дэлгүүр**
River Garden Village, 401 — HUD 17th khoroo, Khan-Uul District, Ulaanbaatar
Phone: +976 8040 8040

## Structure

```
bb-butcher-shop/
├── index.html          # All page markup
├── css/
│   └── styles.css      # All styling (design tokens in :root)
├── js/
│   └── main.js         # Nav, mobile menu, hours highlight, scroll reveal
├── images/
│   ├── hero-shop.jpg
│   ├── counter.jpg
│   ├── wagyu-marbling.jpg
│   ├── steak-dark.jpg
│   ├── ribeye.jpg
│   └── sausages.jpg
└── README.md
```

## Running it

No build step, no dependencies. Either:

- Double-click `index.html`, or
- Serve locally: `python3 -m http.server 8000` then open `http://localhost:8000`

## Editing

**Colours and type** — everything is driven by CSS custom properties at the top of
`css/styles.css`:

```css
:root{
  --cream: ...;      /* page background */
  --oxblood: ...;    /* primary accent */
  --brass: ...;      /* secondary accent */
  ...
}
```

Change those and the whole site follows.

**Content** — all copy lives directly in `index.html`, grouped by section with
`<section id="...">` wrappers: hero, about, products, wagyu, pantry, reviews, visit.

**Opening hours** — the "today" highlight is driven by `data-day` attributes on the
`#hours li` elements (0 = Sunday … 6 = Saturday). Update the times there and in the
`<script type="application/ld+json">` block if the schedule changes.

**Products and prices** — the product cards are in the `#products` section; the pantry
list is in `#pantry`. Prices are written in ₮ (Mongolian tögrög).

## External dependencies

- Google Fonts (Cormorant Garamond + Inter) — loaded from `fonts.googleapis.com`.
  For fully offline use, download the font files and self-host them.
- Google Maps embed in the Visit section — requires an internet connection.

## Notes

- Fully responsive: desktop, tablet, and mobile (slide-out menu under 900px).
- Accessibility: semantic landmarks, `aria-expanded` on the menu toggle, alt text on
  every image, visible focus states.
- No tracking, no cookies, no analytics.
- There is no online ordering or contact form — this is a static informational site.
  Adding real ordering would require a backend.
