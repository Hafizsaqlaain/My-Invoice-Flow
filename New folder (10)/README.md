# 🧾 Invoice Generator

<div align="center">

![Invoice Generator Banner](https://img.shields.io/badge/Invoice-Generator-6366f1?style=for-the-badge&logo=receipt&logoColor=white)
![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

**A fully featured, beautifully designed Invoice Generator built with pure HTML, CSS & JavaScript — no frameworks, no build tools.**

[🚀 Live Demo](#) · [🐛 Report Bug](../../issues) · [✨ Request Feature](../../issues)

</div>

---

## 📸 Screenshots

> *(Add your screenshots here after building the project)*

| Light Mode | Dark Mode |
|------------|-----------|
| ![Light](screenshots/light.png) | ![Dark](screenshots/dark.png) |

---

## ✨ Features

### 🧾 Invoice Builder
- Business & client details with **logo upload** (drag & drop)
- **Auto-generated** invoice numbers with manual override option
- Date picker for invoice date & due date
- Dynamic **line items table** — add/remove rows with smooth animation
- Auto-calculated **Subtotal, Tax, Discount & Grand Total**
- Support for **CGST / SGST / IGST** or single tax percentage
- **Multi-currency** support (₹, $, €, £ and more)
- Notes, Terms & Conditions textarea
- Payment details section (Bank, UPI, Payment Link)
- **Signature upload** or draw-your-own signature

### 🖥️ Live Preview
- **Real-time preview** updates as you type
- Split-screen layout on desktop, stacked on mobile

### 🎨 Invoice Templates
- **5 professional templates** — Minimal, Modern, Classic, Corporate, Creative
- Template switcher with visual thumbnail previews
- Each template has a distinct layout, color scheme & typography

### 📂 Invoice History Dashboard
- View all saved invoices in list or grid format
- **Status badges** — Draft, Sent, Paid, Overdue
- Search by client name, filter by date range or status
- Revenue summary cards with mini charts

### ⚡ Actions (All Functional)
| Action | Description |
|--------|-------------|
| 📥 Download PDF | High-quality A4 PDF export via jsPDF |
| 🖨️ Print | Direct browser print |
| 💾 Save | Stored in localStorage |
| 📋 Duplicate | Clone any existing invoice |
| 🗑️ Delete | With confirmation modal |
| 🔗 Share Link | Copy to clipboard |
| 📧 Send via Email | Opens default mail client |
| 🔄 Reset | Clears form with confirmation |

### 🌗 Theme System
- **Light & Dark mode** toggle with smooth transition
- Animated sun ↔ moon icon switch
- Preference saved in `localStorage` — persists across reloads
- Hyper-realistic color palette in both themes

### 🎬 Animations & Interactions
- Smooth page & section transitions (CSS keyframes + Intersection Observer)
- Button hover **glow & scale** effects
- Form field **focus animations** with label transitions
- Line item **slide + fade** on add/remove
- Modal **scale + fade** entrance
- Toast notifications for every action
- Confetti / success animation on invoice creation
- Loading skeleton states

---

## 🗂️ Project Structure

```
invoice-generator/
│
├── index.html           # Landing / Home page
├── builder.html         # Invoice Builder (core tool)
├── dashboard.html       # Invoice History & Dashboard
├── settings.html        # App Settings
├── 404.html             # Custom 404 page
│
├── css/
│   ├── style.css        # Global styles & CSS variables
│   ├── theme.css        # Light / Dark mode tokens
│   ├── animations.css   # Keyframes & transition rules
│   └── responsive.css   # Breakpoints & mobile layout
│
├── js/
│   ├── main.js          # App init, routing, shared utils
│   ├── builder.js       # Invoice form logic & live preview
│   ├── dashboard.js     # History, search, filter & charts
│   ├── pdf.js           # PDF export via jsPDF + html2canvas
│   ├── theme.js         # Dark/Light mode toggle & persistence
│   └── storage.js       # LocalStorage CRUD helpers
│
├── templates/
│   ├── minimal.html     # Minimal invoice template
│   ├── modern.html      # Modern invoice template
│   ├── classic.html     # Classic invoice template
│   ├── corporate.html   # Corporate invoice template
│   └── creative.html    # Creative invoice template
│
└── assets/
    ├── icons/           # SVG icons (lucide / heroicons)
    └── fonts/           # Local fonts (if any)
```

---

## 🚀 Getting Started

### Option 1 — Open Directly
Just double-click `index.html` in your browser. No setup needed.

### Option 2 — Live Server (Recommended)
```bash
# If you have VS Code, install the Live Server extension
# then right-click index.html → "Open with Live Server"

# OR use Python's built-in server
python -m http.server 8000
# Open http://localhost:8000
```

### Option 3 — Node.js serve
```bash
npx serve .
```

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **HTML5** | Structure & semantic markup |
| **CSS3** | Styling, animations, CSS variables for theming |
| **Vanilla JavaScript (ES6+)** | All interactivity & logic |
| **jsPDF** (CDN) | PDF generation |
| **html2canvas** (CDN) | Invoice snapshot for PDF |
| **Tailwind CSS** (CDN) | Utility-first responsive layout |
| **LocalStorage** | Saving invoices & settings |

> ⚠️ No React, No Vue, No Node.js, No build step — just open and run.

---

## ⌨️ Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `Ctrl + S` | Save invoice |
| `Ctrl + P` | Print invoice |
| `Ctrl + D` | Download PDF |
| `Ctrl + Z` | Undo last change |
| `Escape` | Close modal |

---

## 🎨 Color Palette

### Light Mode
| Role | Color |
|------|-------|
| Background | `#F8FAFC` |
| Card | `#FFFFFF` |
| Accent | `Indigo → Violet gradient` |
| Text | `#1E293B` |

### Dark Mode
| Role | Color |
|------|-------|
| Background | `#0B0F19` |
| Card | `#141824` (Glassmorphism) |
| Accent | `Electric Blue → Purple glow` |
| Text | `#E2E8F0` |

---

## 🗺️ Roadmap

- [ ] Cloud sync (Firebase or Supabase)
- [ ] Client management module
- [ ] Multi-language support (i18n)
- [ ] QR code for payment link on invoice
- [ ] Recurring invoices with reminders
- [ ] Export to Excel / CSV
- [ ] Invoice analytics dashboard with graphs

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch — `git checkout -b feature/amazing-feature`
3. Commit your changes — `git commit -m 'Add amazing feature'`
4. Push to the branch — `git push origin feature/amazing-feature`
5. Open a Pull Request

---

## 📄 License

Distributed under the **MIT License**. See [`LICENSE`](LICENSE) for more information.

---

## 👨‍💻 Author

**Your Name**
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/yourprofile)

---

<div align="center">

⭐ **Agar yeh project aapko pasand aaya toh star zaroor karein!** ⭐

Made with ❤️ using pure HTML, CSS & JavaScript

</div>
