# ERP Landing Page

Website landing page sederhana untuk memperkenalkan sistem ERP. Halaman ini berisi navbar, hero, about, pricing, contact, dan dialog login.

## Fitur

- Navbar dengan link ke setiap section halaman.
- Hero section untuk memperkenalkan produk ERP.
- About section untuk menjelaskan manfaat sistem.
- Pricing section untuk menampilkan pilihan paket.
- Contact section dengan form sederhana.
- Login dialog untuk tampilan masuk ke dashboard.

## Teknologi yang Digunakan

| Teknologi | Alasan Pemilihan |
| --- | --- |
| React | Digunakan untuk membuat tampilan berbasis komponen sehingga setiap bagian seperti Navbar, Hero, Pricing, Contact, dan Dialog lebih mudah dikelola. |
| Vite | Dipilih karena ringan, cepat saat development, dan mudah digunakan untuk project React. |
| Tailwind CSS | Digunakan untuk styling karena class utility-nya membuat pembuatan layout dan desain lebih cepat tanpa menulis banyak CSS manual. |
| Lucide React | Digunakan untuk icon karena mudah dipakai di React dan memiliki tampilan icon yang konsisten. |
| ESLint | Digunakan untuk membantu menjaga kualitas kode dan mendeteksi error sederhana seperti import yang tidak digunakan. |

## Struktur Halaman

- `Navbar`: navigasi utama dan tombol login.
- `Hero`: bagian pembuka landing page.
- `About`: penjelasan singkat tentang ERP.
- `Pricing`: daftar paket harga.
- `Contact`: form untuk menghubungi tim.
- `LoginDialog`: dialog login sederhana.

## Cara Menjalankan Project

Install dependency:

```bash
npm install
```

Jalankan development server:

```bash
npm run dev
```

Build project:

```bash
npm run build
```

Jalankan lint:

```bash
npm run lint
```
