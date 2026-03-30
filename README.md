# Prem Kumar Sah — Portfolio

A fully responsive, animated personal portfolio built with **React 18**, **Tailwind CSS**, and **Vite**.

---

## 🚀 Quick Start (VS Code)

```bash
# 1. Open this folder in VS Code, then open the integrated terminal (Ctrl + `)

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

Open **http://localhost:5173** in your browser. The page hot-reloads on every save.

---

## 📁 Project Structure

```
prem-portfolio/
├── index.html                     ← HTML entry point
├── vite.config.js                 ← Vite bundler config
├── tailwind.config.js             ← Tailwind theme
├── postcss.config.js              ← PostCSS plugins
├── package.json                   ← Dependencies & scripts
│
└── src/
    ├── main.jsx                   ← React entry point
    ├── App.jsx                    ← Root component (wires everything)
    │
    ├── assets/
    │   └── profile.jpg            ← Your profile photo
    │
    ├── styles/
    │   └── globals.css            ← Global CSS + Tailwind directives + cursor styles
    │
    ├── data/
    │   └── portfolio.js           ← ✏️  ALL your content lives here
    │
    ├── hooks/
    │   ├── useScrollReveal.js     ← Scroll reveal + typewriter + active section hooks
    │   └── useCursor.js           ← Custom drag-trail cursor logic
    │
    ├── utils/
    │   └── helpers.js             ← goTo(), validateForm()
    │
    └── components/
        ├── Icons.jsx              ← SVG icon components
        ├── Cursor.jsx             ← Cursor DOM nodes (#cur-dot, #cur-ring)
        ├── Navbar.jsx             ← Sticky nav with active highlight
        ├── Hero.jsx               ← Hero section + circle photo + typewriter
        ├── About.jsx              ← Bio + highlight cards
        ├── Skills.jsx             ← Tabbed skill bars + tools + exploring
        ├── Projects.jsx           ← Project cards + GitHub/demo links
        ├── Education.jsx          ← Timeline + certificate grid
        ├── Contact.jsx            ← Web3Forms contact form
        ├── Footer.jsx             ← Footer with nav + contact info
        └── BackToTop.jsx          ← Floating scroll-to-top button
```

---

## ✏️ How to Edit Your Content

**All personal data is in one file:** `src/data/portfolio.js`

### Update your info
```js
export const ME = {
  name:     'Prem Kumar Sah',
  email:    'sah500prem@gmail.com',
  phone:    '+977 9824729055',
  github:   'https://github.com/YOUR_USERNAME',   // ← update
  linkedin: 'https://linkedin.com/in/YOUR_ID',    // ← update
  ...
}
```

### Add / edit a project
Find `export const PROJECTS` and add a new object:
```js
{
  id: 4, icon: '🚀', color: '#f7b731', featured: true,
  title: 'My New Project',
  desc:  'Short description of what it does.',
  tech:  ['React', 'Node.js'],
  github: 'https://github.com/you/repo',
  demo:   'https://your-demo.vercel.app',
},
```

### Update skill percentages
Find `export const SKILLS` → adjust `pct` values (0–100):
```js
{ name: 'React.js', pct: 85, clr: '#61dafb' },
```

### Replace your photo
Drop your new photo into `src/assets/` and update the import in `src/components/Hero.jsx`:
```js
import profilePhoto from '../assets/your-new-photo.jpg'
```

---

## 📬 Contact Form

Uses **Web3Forms** to deliver emails directly to `sah500prem@gmail.com`.

- API key is stored in `src/data/portfolio.js` → `W3F_KEY`
- No backend or server required
- Manage your form at https://web3forms.com

---

## ✨ Features

| Feature | Details |
|---|---|
| 🖱️ Custom cursor | Glowing drag trail with colour-cycling particles |
| ⌨️ Typewriter | Cycles through your roles in the hero |
| 🌀 Scroll reveal | Sections fade-up as you scroll |
| 📸 Circle photo | Profile photo in a glowing animated ring |
| 📊 Skill bars | Animate in when scrolled into view |
| 📬 Contact form | Web3Forms — emails go directly to your inbox |
| 📱 Responsive | Mobile, tablet, desktop ready |
| 🌙 Dark theme | Deep dark with purple accent |

---

## 🌐 Deploy Online (Free)

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```
Or import your GitHub repo at https://vercel.com

### Netlify
```bash
npm run build
# then drag-and-drop the /dist folder at https://netlify.com
```

### GitHub Pages
```bash
npm run build
# push /dist contents to your gh-pages branch
```

---

## 🛠️ Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server at localhost:5173 |
| `npm run build` | Build for production into `/dist` |
| `npm run preview` | Preview the production build locally |

---

Built with ❤️ by **Prem Kumar Sah**
