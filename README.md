# Sharada Engineering Works – Website

A modern, responsive website for **Sharada Engineering Works**, a local mechanical workshop located in **Iritty, Kannur, Kerala, India**.

---

## 🏭 About the Business

Sharada Engineering Works specialises in:
- **Vehicle Reconditioning** – Jeeps, cars, and heavy vehicles
- **Lathe Machining Works** – Precision turning, boring, threading
- **Welding Works** – Arc, MIG/MAG welding for structural and vehicle repairs
- **Custom Fabrication & Repair** – Agricultural equipment, industrial machinery, and more

### Workshop Machines
| Machine | Purpose |
|---|---|
| Lathe Machine | Turning, boring, threading of metal components |
| Welding Machine | Arc and MIG/MAG welding |
| Drilling Machine | Precision hole-making |
| Grinding Machine | Surface and cylindrical finishing |
| Hydraulic Press | Pressing, straightening, assembly |

---

## 📁 Project Structure

```
sharada-engineering-website/
├── index.html          ← Single-page website (all sections)
├── css/
│   └── style.css       ← Main stylesheet (industrial theme)
├── js/
│   └── main.js         ← Minimal vanilla JavaScript
├── public/
│   └── images/         ← All website images (WebP format)
│       ├── hero-owner.webp
│       ├── hero-machine.webp
│       ├── about-workshop.webp
│       ├── gallery-1.webp … gallery-5.webp
│       └── owner.webp
├── images/
│   └── README.txt      ← Legacy image naming guide
├── convert-images.py   ← Downloads & converts images to public/images/
└── README.md
```

---

## 🎨 Design

- **Theme:** Industrial / Mechanical
- **Colours:** Dark grey (`#1e1e1e`), Orange accent (`#f47c20`), White text
- **Font:** System UI (Segoe UI / Tahoma)
- **Responsive:** Mobile-first, tested at 320 px → 1440 px
- **Animations:** Hover effects, scroll-triggered fade-in, CSS gear spin

---

## 📄 Sections

| Section | Description |
|---|---|
| **Home / Hero** | Full-viewport hero with business name, tagline, and CTA buttons |
| **About** | Background, experience, and key highlights |
| **Services** | Cards for Vehicle Reconditioning, Lathe, Welding, Fabrication |
| **Machines** | Interactive cards for each workshop machine |
| **Gallery** | Placeholder grid – replace with real photos |
| **Contact** | Phone, address, working hours, WhatsApp button, Google Maps embed |

---

## ✏️ Customisation

### 1. Update Phone Number
Search for `9XXXXXXXX` in `index.html` and replace with the actual mobile number.

### 2. Add Real Photos
Place optimised WebP images in the `public/images/` folder (run `python convert-images.py` to
download and convert all images automatically).  
The file names expected are:

| File | Used in |
|---|---|
| `hero-owner.webp` | Hero section – owner/worker photo |
| `hero-machine.webp` | Hero section – lathe machine photo |
| `about-workshop.webp` | About section |
| `gallery-1.webp` … `gallery-5.webp` | Gallery section |
| `owner.webp` | Owner Details section |

To add a custom owner photo, place it at `public/images/owner.webp`.

### 3. Google Maps Embed
The current map embed centres on Iritty town. Replace the `src` URL in the `<iframe>` inside the `#contact` section with the exact Google Maps embed URL for the workshop location.

---

## 🚀 Deploy on GitHub Pages

1. **Push** your code to a GitHub repository (this repo).
2. Go to **Settings → Pages** in the repository.
3. Under **Source**, select the branch you want to deploy (e.g. `main`) and the **root** folder `/`.
4. Click **Save**.
5. GitHub will provide a URL like:
   ```
   https://<your-username>.github.io/sharada-engineering-website/
   ```
6. The site will be live within 1–2 minutes.

> **Custom Domain (optional):**  
> In Settings → Pages → Custom domain, enter your domain (e.g. `sharadaengineering.in`) and create a `CNAME` file in the repo root containing just the domain name. Configure your DNS provider to add a CNAME record pointing to `<your-username>.github.io`.

---

## 🔍 SEO Keywords Targeted

- Lathe works in Iritty
- Engineering workshop Kannur
- Welding works Iritty
- Vehicle reconditioning Kannur Kerala
- Lathe machining Kerala
- Fabrication Iritty

---

## 📞 Contact (Placeholder)

- **Location:** Iritty, Kannur, Kerala – 670703
- **Phone:** +91 9XXXXXXXX *(update with real number)*
- **WhatsApp:** Same number via [wa.me](https://wa.me/)

---

*Built with plain HTML, CSS, and minimal vanilla JavaScript – no frameworks required.*
