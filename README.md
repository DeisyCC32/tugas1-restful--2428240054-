# Tugas 1 RESTful API Express.js

## Identitas

- **Nama:** Deisy Callisca Chandra
- **NIM:** 2428240054
- **Kelas:** SI5B
- **Nomor Absen:** 10
- **Topik:** Kebun - Tanaman
- **Resource:** `/plants`

## Deskripsi

Project ini merupakan RESTful API murni menggunakan Express.js untuk mengelola data tanaman. Data disimpan dalam array di memori tanpa menggunakan database.

## Teknologi

- Node.js LTS
- Express.js
- Nodemon
- Vercel

## Instalasi

Pastikan Node.js sudah terpasang, kemudian jalankan:

```bash
npm install
```

## Menjalankan Project

Untuk mode development:

```bash
npm run dev
```

Untuk menjalankan secara normal:

```bash
npm start
```

Server lokal:

```text
http://localhost:3000
```

## Endpoint

| Method | Endpoint | Fungsi |
|---|---|---|
| GET | `/` | Informasi API |
| GET | `/plants` | Mengambil seluruh data tanaman |
| GET | `/plants/:id` | Mengambil satu data tanaman |
| GET | `/plants?jenis=sayur` | Filter tanaman berdasarkan jenis |
| POST | `/plants` | Menambahkan data tanaman |
| PUT | `/plants/:id` | Mengubah seluruh data tanaman |
| DELETE | `/plants/:id` | Menghapus data tanaman |

## Field Data Tanaman

| Field | Tipe | Wajib | Keterangan |
|---|---|---|---|
| `namaTanaman` | string | Ya | Nama tanaman |
| `jenis` | string | Ya | `sayur`, `buah`, atau `hias` |
| `lokasiBedeng` | string | Ya | Lokasi bedeng tanaman |
| `tanggalTanam` | string | Ya | Format `YYYY-MM-DD` |
| `sudahPanen` | boolean | Tidak | Status apakah sudah dipanen |

## Contoh POST

URL:

```text
POST http://localhost:3000/plants
```

Body JSON:

```json
{
  "namaTanaman": "Tomat",
  "jenis": "buah",
  "lokasiBedeng": "Bedeng 2",
  "tanggalTanam": "2026-09-25",
  "sudahPanen": false
}
```

## Contoh Filter

```text
GET http://localhost:3000/plants?jenis=sayur
```

## Deployment

URL Vercel:

```text
BELUM_DIISI
```

## Repository GitHub

```text
BELUM_DIISI
```
