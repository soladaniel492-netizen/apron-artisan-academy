# Chef Store — Image & Video Manifest

Every visual asset is bundled locally under `public/images/` so the project is
fully portable. The catalogue of these files is also registered in
`src/data/site-images.ts` (`SITE_IMAGES`), which is what the admin backend
(Pictures tab) uses to let you replace any of them with an upload. Replacing a
picture in the admin overrides it everywhere it is used — the files below stay
as the bundled originals/fallbacks.

## Folder structure

```
public/images/
├── logos/        brand logo
├── products/     catalogue product photos & uniform shots
├── food/         kitchen page dishes, drinks, kitchen shots
├── backgrounds/  training page banner/flyer
└── videos/       mp4 clips (hero, CEO, plating)
```

## Logos

| File | Used on |
|---|---|
| `logos/chef-store-logo.jpg` | Header logo (site-header.tsx), Footer logo (site-footer.tsx) |

## Products (`products/`)

| File | Used on |
|---|---|
| `personalised-bib-apron.jpg` | Homepage lookbook carousel (photo-carousel.tsx); fallback for "Personalised Bib Apron" (data/catalogue.ts) |
| `burgundy-apron.jpg` | Homepage lookbook carousel; fallback for "Burgundy Twill Apron" |
| `denim-waist-aprons.jpg` | Homepage lookbook carousel; fallback for "Denim Waist Apron" |
| `cross-back-apron.jpg` | Homepage lookbook carousel; fallback for "Cross Back Apron" |
| `leather-trim-details.jpg` | Homepage lookbook carousel; fallback for "Leather Trim Detail Pack" |
| `wait-staff-uniform.jpg` | Homepage lookbook carousel; fallback for "Wait Staff Uniform Set"; Training page team strip (training.tsx) |
| `team-uniform-set.jpg` | Homepage lookbook carousel; fallback for "Customized Branded T Shirt"; Training page team strip; Catalogue team/bulk quote block (team-quote.tsx) |
| `denim-red-aprons.jpg` | Homepage lookbook carousel; "Denim & Twill Bib Set" catalogue card |
| `tool-cream-charger.jpg` | "Nitrous Oxide Cream Charger" catalogue card (wide) |
| `tool-silicone-molds.jpg` | "Oven Safe Silicone Molds" catalogue card (wide) |

Catalogue images come from the `products` table in the database when it has
rows (editable in the admin Products tab); the paths above are the fallback
seed data.

## Food & kitchen (`food/`)

| File | Used on |
|---|---|
| `dish-noodles.jpg` | Kitchen menu (Continental), homepage food marquee (food-strip.tsx), Instagram wall |
| `dish-grilled-chicken.jpg` | Kitchen menu, food marquee, "On the pass" (kitchen-pass.tsx), Instagram wall |
| `dish-salmon.jpg` | Kitchen menu (Continental) |
| `dish-pasta.jpg` | Kitchen menu (Continental) |
| `local-egusi.jpg` | Kitchen menu (Local), food marquee, Instagram wall |
| `local-efo-riro.jpg` | Kitchen menu, food marquee, "On the pass", Instagram wall |
| `local-jollof-plantain.jpg` | Kitchen menu, food marquee, Instagram wall |
| `local-jollof-pan.jpg` | Kitchen menu, food marquee, "On the pass" |
| `local-egusi-packs.jpg` | Food marquee, "On the pass", Instagram wall |
| `drink-zobo.jpg` | Kitchen menu (Drinks), Instagram wall |
| `drink-chapman.jpg` | Kitchen menu, Instagram wall |
| `drink-kunu.jpg` | Kitchen menu (Drinks) |
| `drink-punch.jpg` | Kitchen menu (Drinks) |
| `kitchen-pass-new.jpg` | "On the pass" section (kitchen-pass.tsx) |
| `kitchen-pass.jpg` | Registered spare — replaceable/selectable in admin Pictures |
| `dish-egusi.jpg` | Registered spare |
| `dish-jollof.jpg` | Registered spare |
| `dish-perigrill.jpg` | Registered spare |
| `dish-suya.jpg` | Registered spare |

## Backgrounds (`backgrounds/`)

| File | Used on |
|---|---|
| `training-program-flyer.jpg` | Training page program flyer placeholder (training.tsx) — editable in admin Pictures under Training |

## Videos (`videos/`)

| File | Used on |
|---|---|
| `ceo-hero.mp4` | Homepage hero video (index.tsx) |
| `apron-confidence.mp4` | Homepage section video (index.tsx) |
| `plating-kit.mp4` | Homepage section video; Kitchen page plating-kit video |
| `ceo-kitchen-fit.mp4` | Catalogue page founder video; Training page video |
| `plating-set.mp4` | Registered spare — replaceable/selectable in admin Pictures |

## How replacement works

- All files above are registered in `src/data/site-images.ts`. In the admin
  (`/admin` → Pictures, grouped by page) you upload a replacement for any
  entry; the override is stored in the `site_media` table and served instead
  of the bundled file.
- Product photos/prices: admin → Products. Price list: admin → Prices.
- To swap a bundled original permanently, overwrite the file at the same path
  and keep the filename (paths are the stable keys).

## Migration notes

All previously CDN-hosted assets were downloaded and re-homed under
`public/images/`. Every image/video reference in the code now points at these
local paths; no remote image URLs remain. No images were lost in the
migration — files that are not currently displayed on any page are registered
spares (listed above) and remain available in the admin.
