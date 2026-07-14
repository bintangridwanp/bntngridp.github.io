# 🚀 Bintang Ridwan Pribadi — Personal Portfolio

Portfolio website pribadi yang dibangun dengan **React + Vite**, menampilkan profil profesional, proyek, sertifikasi, repositori GitHub, blog, dan CV secara interaktif. Dilengkapi dengan komponen **Lanyard 3D interaktif** yang di-render menggunakan WebGL/Three.js.

🌐 **Live**: [bntngridp.github.io](https://bntngridp.github.io)

---

## ✨ Fitur Unggulan

- 🎴 **Lanyard 3D Interaktif** — Kartu identitas 3D dengan fisika realistis (drag & swing) menggunakan React Three Fiber + Rapier physics engine
- 🌗 **Dark / Light Mode** — Toggle tema dengan animasi transisi halus
- 🔍 **Command Palette Search** — Shortcut `⌘K` / `Ctrl+K` untuk navigasi cepat antar halaman
- 📱 **Responsive Design** — Tampilan optimal di semua ukuran layar (mobile, tablet, desktop)
- ✨ **AOS Animations** — Animasi scroll-reveal pada setiap elemen halaman
- 🧭 **Multi-page Routing** — Navigasi SPA dengan React Router v7
- 🏆 **Glassmorphism Navbar** — Desain navbar modern dengan efek blur dan transparansi

---

## 📄 Halaman

| Halaman | Deskripsi |
|---|---|
| **About** | Profil utama, hero section dengan Lanyard 3D, skill, dan ringkasan pengalaman |
| **Portfolio** | Galeri proyek dengan detail teknologi yang digunakan |
| **Certifications** | Kumpulan sertifikasi profesional yang telah dicapai |
| **Repositories** | Daftar repositori GitHub publik secara dinamis |
| **CV** | Curriculum Vitae yang dapat diunduh |
| **Blog** | Artikel dan catatan teknis |

---

## 🛠️ Tech Stack

### Core
| Teknologi | Versi | Deskripsi |
|---|---|---|
| [React](https://react.dev/) | ^19.2.7 | UI framework utama |
| [Vite](https://vitejs.dev/) | ^8.1.1 | Build tool & dev server |
| [React Router DOM](https://reactrouter.com/) | ^7.18.1 | Client-side routing |

### 3D & Physics
| Teknologi | Versi | Deskripsi |
|---|---|---|
| [Three.js](https://threejs.org/) | ^0.185.1 | 3D rendering engine |
| [React Three Fiber](https://r3f.docs.pmnd.rs/) | ^9.6.1 | React renderer untuk Three.js |
| [React Three Drei](https://drei.docs.pmnd.rs/) | ^10.7.7 | Helper/abstraksi untuk R3F |
| [React Three Rapier](https://rapier.rs/) | ^2.2.0 | Physics engine (rigid body, constraint) |
| [Meshline](https://github.com/spite/THREE.MeshLine) | ^3.3.1 | Render tali/garis 3D |

### Tooling & DX
| Teknologi | Versi | Deskripsi |
|---|---|---|
| [AOS](https://michalsnik.github.io/aos/) | ^2.3.4 | Animate On Scroll library |
| [Oxlint](https://oxc.rs/docs/guide/usage/linter.html) | ^1.71.0 | Linter JavaScript super cepat |

---

## 🏗️ Struktur Proyek

```
bntngridp.github.io/
├── public/                     # Aset statis publik
├── src/
│   ├── assets/
│   │   ├── hero.png            # Foto profil hero section
│   │   └── lanyard/
│   │       ├── card.glb        # 3D model kartu lanyard (GLTF/GLB)
│   │       └── lanyard.png     # Tekstur tali lanyard
│   ├── components/
│   │   ├── Footer.jsx          # Komponen footer global
│   │   ├── Lanyard.css         # Styling kontainer Lanyard
│   │   ├── Lanyard.jsx         # Komponen Lanyard 3D interaktif (Three.js + Rapier)
│   │   ├── Navbar.jsx          # Navigasi glassmorphism + dark mode toggle
│   │   └── SearchModal.jsx     # Command palette (⌘K)
│   ├── pages/
│   │   ├── About.jsx           # Halaman utama / hero
│   │   ├── Blog.jsx            # Halaman blog
│   │   ├── CV.jsx              # Halaman curriculum vitae
│   │   ├── Certifications.jsx  # Halaman sertifikasi
│   │   ├── Portfolio.jsx       # Halaman portofolio proyek
│   │   └── Repositories.jsx    # Halaman repositori GitHub
│   ├── App.jsx                 # Root app — setup Router & layout
│   ├── main.jsx                # Entry point — mount React ke DOM
│   └── style.css               # Global styles & design system tokens
├── index.html                  # HTML entry point
├── vite.config.js              # Konfigurasi Vite
└── package.json
```

---

## 🚀 Memulai (Development)

### Prasyarat

- **Node.js** >= 18.x
- **npm** >= 9.x (atau gunakan `pnpm` / `yarn`)

### Instalasi

```bash
# Clone repository
git clone git@github.com-bintangridwan30:bntngridp/bntngridp.github.io.git
cd bntngridp.github.io

# Install dependencies
npm install
```

### Menjalankan Dev Server

```bash
npm run dev
```

Buka [http://localhost:5173](http://localhost:5173) di browser Anda.

### Build Produksi

```bash
npm run build
```

Output build akan tersedia di folder `dist/`.

### Preview Build

```bash
npm run preview
```

### Linting

```bash
npm run lint
```

---

## 🎴 Komponen Lanyard 3D

Komponen `Lanyard.jsx` adalah fitur utama yang paling kompleks. Berikut detail implementasinya:

- **Rendering**: React Three Fiber (R3F) sebagai renderer deklaratif di atas Three.js
- **Physics**: React Three Rapier untuk simulasi fisika kartu (rigid body) dan tali (joint constraints)
- **Tali**: Dirender menggunakan `MeshLineGeometry` dari library `meshline` untuk mendapat tampilan tali yang halus dan realistis
- **Model 3D**: File `.glb` (GLTF Binary) di-load menggunakan `useGLTF` dari Drei
- **Interaksi**: Kartu dapat di-drag menggunakan mouse/touch dengan fisika yang responsif
- **Anchor Point**: Tali dijangkarkan dari atas viewport (melintasi navbar) sehingga terlihat menggantung secara natural

---

## 🌐 Deploy (GitHub Pages)

Website ini di-deploy otomatis ke **GitHub Pages** melalui branch `main`.

URL Live: **[https://bntngridp.github.io](https://bntngridp.github.io)**

---

## 📝 Konvensi Commit

Menggunakan [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>(<scope>): <subject>

feat(lanyard): add drag physics interaction
fix(navbar): correct active link highlight
style(hero): adjust spacing on mobile view
docs: update README with tech stack detail
chore: upgrade three.js to 0.185.1
```

**Tipe yang tersedia:** `feat`, `fix`, `refactor`, `docs`, `test`, `chore`, `style`, `perf`, `ci`, `build`, `revert`

---

## 👤 Author

**Bintang Ridwan Pribadi**

- 🌐 Website: [bntngridp.github.io](https://bntngridp.github.io)
- 🐙 GitHub: [@bntngridp](https://github.com/bntngridp)
- 📧 Email: bintangridwan30@gmail.com

---

## 📄 License

Project ini bersifat **open source** dan tersedia di bawah lisensi [MIT](LICENSE).
