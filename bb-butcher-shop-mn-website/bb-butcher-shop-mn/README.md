# ББ Махны Дэлгүүр — Вэбсайтын эх код (Монгол хувилбар)

**ББ Махны Дэлгүүр / BB Butcher Shop**-ийн статик нэг хуудаст вэбсайт.
River Garden Village, 401 — ХУД 17-р хороо, Хан-Уул дүүрэг, Улаанбаатар
Утас: +976 8040 8040

Энэ хувилбар нь бүхэлдээ монгол хэл дээр. Байгууллагын нэр (ББ Махны
Дэлгүүр), хаяг, утас, үнэ болон Kashiwabara, Google, Facebook, Instagram зэрэг
тусгай нэрсийг хэвээр үлдээсэн.

## Бүтэц

```
bb-butcher-shop/
├── index.html          # Хуудасны бүх тэмдэглэл (HTML)
├── css/
│   └── styles.css      # Бүх загвар (design tokens нь :root дотор)
├── js/
│   └── main.js         # Цэс, мобайл цэс, ажиллах цагийн тодруулга, scroll reveal
├── images/
│   ├── hero-shop.jpg
│   ├── counter.jpg
│   ├── wagyu-marbling.jpg
│   ├── steak-dark.jpg
│   ├── ribeye.jpg
│   └── sausages.jpg
└── README.md
```

## Ажиллуулах

Build шат, хамаарал (dependency) байхгүй. Хоёр арга:

- `index.html` файлыг хоёр товшиж нээх, эсвэл
- Локал сервер: `python3 -m http.server 8000` дараа нь `http://localhost:8000`

## Засварлах

**Өнгө, фонт** — бүх загвар нь `css/styles.css`-ийн дээд талд байх CSS
custom properties-ээр удирдагдана:

```css
:root{
  --ink: ...;        /* хуудасны үндсэн дэвсгэр */
  --cream: ...;      /* үндсэн тексетийн өнгө */
  --oxblood: ...;    /* үндсэн accent (улаан) */
  --brass: ...;      /* хоёрдогч accent (шаргал) */
  ...
}
```

Эдгээрийг өөрчилбөл бүх сайт дагаж өөрчлөгдөнө.

**Агуулга** — бүх текст `index.html` дотор, `<section id="...">` бүлэглэлээр:
hero, about, cuts, wagyu, pantry, reviews, visit, band, footer.

**Ажиллах цаг** — "өнөөдөр" гэсэн тодруулга нь `#hours li` элементүүдийн
`data-day` атрибутаар ажиллана (0 = Ням … 6 = Бямба). Цаг өөрчлөгдвөл тэнд
бичсэн цагийг л засна.

**Бүтээгдэхүүн, үнэ** — бүтээгдэхүүний картууд `#cuts` бүлэгт, дэлгүүрийн
жагсаалт `#pantry` бүлэгт байна. Үнийг ₮ (төгрөг) тэмдгээр бичсэн.

**Зургийг солих** — `images/` дотор ижил нэрээр файлаа дарж бичвэл код
өөрчлөх шаардлагагүй.

## Гаднын хамаарал

- Google Fonts (Cormorant Garamond + Inter) — `fonts.googleapis.com`-оос
  ачаална. Бүрэн офлайн ажиллуулахыг хүсвэл фонтыг татаж, өөрөө host хийнэ.
- Visit бүлэгт байх Google Maps embed — интернэт холболт шаардана.

## Тайлбар

- Бүрэн responsive: desktop, tablet, mobile (760px-ээс доош slide-out цэс).
- Хүртээмж: semantic landmark, цэсний товч дээр `aria-expanded`, бүх зурагт
  alt текст.
- Tracking, cookie, analytics байхгүй.
- Онлайн захиалга, холбоо барих форум байхгүй — энэ бол статик мэдээллийн
  сайт. Жинхэнэ захиалга нэмэхэд backend шаардана.

---

**English note:** this is the Mongolian edition of the BB Butcher Shop site.
Layout, CSS and JS are shared with the English version; only the copy and the
Cyrillic typography adjustments (letter-spacing, heading sizes) differ. No
build step, no dependencies.
