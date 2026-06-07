# 📓 VIBECODING JOURNAL
## Web Portfolio — Muhammad Arif Khairullah Setiawan

---

## 1. 📦 Definisi Stack & Arsitektur

### Tools yang Digunakan

| Tool | Versi | Alasan Pemilihan |
|------|-------|-----------------|
| **Vite** | ^5.4.2 | Build tool modern yang sangat cepat dengan HMR (Hot Module Replacement) instan — jauh lebih cepat dari CRA |
| **ReactJS** | ^18.3.1 | Library UI berbasis komponen, memungkinkan pemisahan logika antar halaman dan reusability |
| **react-router-dom** | ^6.26.1 | Routing deklaratif untuk SPA — mendukung `<NavLink>`, `<Routes>`, `<Route>` |
| **CSS Modules** | (built-in Vite) | Scoped CSS per komponen, menghindari konflik nama class tanpa framework CSS |

### Struktur Folder

```
src/
├── components/         # Komponen yang dipakai di banyak halaman
│   ├── Navbar/         # Navbar.jsx + Navbar.module.css
│   └── Footer/         # Footer.jsx + Footer.module.css
├── data/
│   └── data.js         # Semua data di-hardcode di sini (profileData, skillsData, projectsData)
├── pages/              # Satu folder per halaman (co-location)
│   ├── Home/
│   ├── About/
│   ├── Project/
│   └── Contact/
├── styles/
│   └── global.css      # CSS global: reset, variabel, animasi, utility
├── App.jsx             # Root routing
└── main.jsx            # Entry point
```

**Alasan struktur ini:**
- **Co-location**: setiap halaman memiliki `.jsx` dan `.module.css`-nya sendiri → mudah dicari dan dimodifikasi
- **Pemisahan data**: `data/data.js` adalah "single source of truth" untuk semua konten statis
- **CSS Modules**: class hanya berlaku di file `.jsx` yang mengimpornya, jadi tidak ada konflik global
- **components vs pages**: `components/` untuk UI yang reusable (Navbar, Footer), `pages/` untuk halaman spesifik

---

## 2. 💡 Strategi Prompting

### Prompt 1 — Membangun Struktur SPA dengan Routing

**Prompt yang diberikan:**
> "Buatkan saya struktur lengkap React SPA untuk web portofolio dengan 4 halaman (Home, About, Project, Contact) menggunakan react-router-dom v6. Gunakan CSS Modules untuk styling, tanpa Tailwind/Bootstrap. Setiap halaman harus ada di folder terpisah dengan file CSS Module-nya. Routing di App.jsx menggunakan `<Routes>` dan `<Route>`. Navbar harus menggunakan `<NavLink>` sehingga link aktif bisa diberi style berbeda."

**Alasan prompt ini efektif:**
Saya menentukan constraint yang jelas (tidak pakai framework CSS, pakai CSS Modules, versi react-router v6 bukan v5) sehingga AI tidak menghasilkan kode dengan sintaks yang salah. Saya juga menyebutkan output yang diharapkan (folder structure) agar hasilnya terstruktur.

---

### Prompt 2 — Logika localStorage untuk Contact Form

**Prompt yang diberikan:**
> "Di halaman Contact, buat form dengan 3 field (Nama, Email, Pesan) menggunakan `useState` di React. Ketika user mengetik, data harus otomatis tersimpan ke localStorage sebagai 'draft' menggunakan `useEffect` agar tidak hilang saat refresh. Saat form disubmit, validasi semua field, lalu simpan data ke localStorage sebagai array 'guestbook' (bukan dihapus). Tampilkan guestbook di tab terpisah. Juga ada fitur hapus per pesan."

**Alasan prompt ini efektif:**
Saya memecah kebutuhan menjadi komponen kecil: (1) state management dengan useState, (2) auto-save draft dengan useEffect, (3) penyimpanan guestbook sebagai array. Dengan menjelaskan behavior step-by-step, AI tidak membuat implementasi yang ambigu.

---

## 3. 🔧 Log Problem Solving

### Masalah: NavLink active state tidak bekerja untuk halaman Home (`/`)

**Gejala:**  
Ketika berada di halaman `/about`, `/project`, atau `/contact`, link "Home" di Navbar tetap terstyle sebagai "active" bersamaan dengan link halaman yang sedang aktif.

**Penyebab:**  
React Router v6's `<NavLink>` melakukan **prefix matching** secara default. Artinya path `/` cocok dengan SEMUA path karena semua path dimulai dari `/`.

**Cara menemukan masalah:**  
Saya inspect elemen di browser dan melihat bahwa class `active` diterapkan pada dua link sekaligus. Setelah membaca dokumentasi React Router, saya paham bahwa NavLink memerlukan prop `end` untuk path yang merupakan prefix dari path lain.

**Solusi:**  
Menambahkan prop `end` pada NavLink untuk path `/`:

```jsx
// SALAH - Home selalu aktif
<NavLink to="/">Home</NavLink>

// BENAR - Home hanya aktif saat di path "/" persis
<NavLink to="/" end>Home</NavLink>
```

**Prompt yang saya berikan ke AI:**
> "NavLink untuk path '/' selalu terstyle active meskipun saya ada di halaman lain seperti '/about'. Saya pakai react-router-dom v6. Bagaimana cara memperbaikinya?"

**Pemahaman saya:**  
Masalah ini bukan bug di kode saya, melainkan perilaku default React Router yang perlu dipahami. Prop `end` memberitahu NavLink untuk hanya menganggap link "aktif" jika URL saat ini **sama persis** dengan `to`, bukan hanya dimulai dengan nilai `to`.

---

## 4. 📋 Checklist Fitur

- [x] SPA dengan react-router-dom (4 halaman)
- [x] Halaman Home dengan hero section dan ringkasan profil
- [x] Halaman About dengan profil lengkap, pendidikan, dan skills
- [x] Halaman Project menggunakan `.map()` untuk render data Array of Objects
- [x] Halaman Contact dengan form (Nama, Email, Pesan)
- [x] `useState` untuk menangani semua input form
- [x] `localStorage` untuk auto-save draft dan fitur Guestbook
- [x] Semua styling menggunakan CSS Murni / CSS Modules (tanpa Tailwind/Bootstrap)
- [x] Data di-hardcode sebagai Array/Object di `src/data/data.js`
- [x] Tidak ada fetch ke API eksternal
- [x] Responsive design untuk mobile

---

*Dibuat menggunakan teknik Vibecoding — AI sebagai asisten, saya sebagai arsitek.*
