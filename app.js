const express = require("express");

const app = express();

app.use(express.json());

// Data awal tanaman
let plants = [
    {
        id: 1,
        namaTanaman: "Kangkung",
        jenis: "sayur",
        lokasiBedeng: "Bedeng 3",
        tanggalTanam: "2026-09-01",
        sudahPanen: false
    },
    {
        id: 2,
        namaTanaman: "Cabai Merah",
        jenis: "sayur",
        lokasiBedeng: "Bedeng 1",
        tanggalTanam: "2026-08-20",
        sudahPanen: true
    },
    {
        id: 3,
        namaTanaman: "Mangga Harum Manis",
        jenis: "buah",
        lokasiBedeng: "Bedeng 5",
        tanggalTanam: "2026-07-15",
        sudahPanen: false
    }
];

let nextId = 4;

// GET /
// Informasi API
app.get("/", (req, res) => {
    res.json({
        nama: "Deisy Callisca Chandra",
        nim: "2428240054",
        kelas: "SI5B",
        nomorTopik: 10,
        topik: "Kebun - Tanaman",
        endpoints: [
            "GET /plants",
            "GET /plants/:id",
            "GET /plants?jenis=sayur",
            "POST /plants",
            "PUT /plants/:id",
            "DELETE /plants/:id"
        ]
    });
});

// GET /plants
// Ambil semua data atau filter berdasarkan jenis
app.get("/plants", (req, res) => {
    const { jenis } = req.query;

    if (jenis) {
        const hasil = plants.filter((plant) => plant.jenis === jenis);
        return res.json(hasil);
    }

    res.json(plants);
});

// GET /plants/:id
// Ambil satu data tanaman berdasarkan id
app.get("/plants/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const plant = plants.find((item) => item.id === id);

    if (!plant) {
        return res.status(404).json({
            status: "error",
            message: `Data dengan id ${id} tidak ditemukan`,
            data: null
        });
    }

    res.json(plant);
});

// POST /plants
// Body: { "namaTanaman": "...", "jenis": "...", "lokasiBedeng": "...", "tanggalTanam": "YYYY-MM-DD", "sudahPanen": false }
app.post("/plants", (req, res) => {
    const {
        namaTanaman,
        jenis,
        lokasiBedeng,
        tanggalTanam,
        sudahPanen
    } = req.body;

    if (!namaTanaman) {
        return res.status(400).json({
            status: "error",
            message: "Field namaTanaman wajib diisi",
            data: null
        });
    }

    if (!jenis) {
        return res.status(400).json({
            status: "error",
            message: "Field jenis wajib diisi",
            data: null
        });
    }

    if (!["sayur", "buah", "hias"].includes(jenis)) {
        return res.status(400).json({
            status: "error",
            message: "Field jenis harus berupa sayur, buah, atau hias",
            data: null
        });
    }

    if (!lokasiBedeng) {
        return res.status(400).json({
            status: "error",
            message: "Field lokasiBedeng wajib diisi",
            data: null
        });
    }

    if (!tanggalTanam) {
        return res.status(400).json({
            status: "error",
            message: "Field tanggalTanam wajib diisi",
            data: null
        });
    }

    if (!/^\d{4}-\d{2}-\d{2}$/.test(tanggalTanam)) {
        return res.status(400).json({
            status: "error",
            message: "Field tanggalTanam harus menggunakan format YYYY-MM-DD",
            data: null
        });
    }

    if (sudahPanen !== undefined && typeof sudahPanen !== "boolean") {
        return res.status(400).json({
            status: "error",
            message: "Field sudahPanen harus bernilai true atau false",
            data: null
        });
    }

    const baru = {
        id: nextId++,
        namaTanaman,
        jenis,
        lokasiBedeng,
        tanggalTanam,
        sudahPanen: sudahPanen ?? false
    };

    plants.push(baru);

    res.status(201).json({
        status: "success",
        message: "Data tanaman berhasil ditambahkan",
        data: baru
    });
});

// PUT /plants/:id
// Body: { "namaTanaman": "...", "jenis": "...", "lokasiBedeng": "...", "tanggalTanam": "YYYY-MM-DD", "sudahPanen": false }
app.put("/plants/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const index = plants.findIndex((item) => item.id === id);

    if (index === -1) {
        return res.status(404).json({
            status: "error",
            message: `Data dengan id ${id} tidak ditemukan`,
            data: null
        });
    }

    const {
        namaTanaman,
        jenis,
        lokasiBedeng,
        tanggalTanam,
        sudahPanen
    } = req.body;

    if (!namaTanaman) {
        return res.status(400).json({
            status: "error",
            message: "Field namaTanaman wajib diisi",
            data: null
        });
    }

    if (!jenis) {
        return res.status(400).json({
            status: "error",
            message: "Field jenis wajib diisi",
            data: null
        });
    }

    if (!["sayur", "buah", "hias"].includes(jenis)) {
        return res.status(400).json({
            status: "error",
            message: "Field jenis harus berupa sayur, buah, atau hias",
            data: null
        });
    }

    if (!lokasiBedeng) {
        return res.status(400).json({
            status: "error",
            message: "Field lokasiBedeng wajib diisi",
            data: null
        });
    }

    if (!tanggalTanam) {
        return res.status(400).json({
            status: "error",
            message: "Field tanggalTanam wajib diisi",
            data: null
        });
    }

    if (!/^\d{4}-\d{2}-\d{2}$/.test(tanggalTanam)) {
        return res.status(400).json({
            status: "error",
            message: "Field tanggalTanam harus menggunakan format YYYY-MM-DD",
            data: null
        });
    }

    if (sudahPanen !== undefined && typeof sudahPanen !== "boolean") {
        return res.status(400).json({
            status: "error",
            message: "Field sudahPanen harus bernilai true atau false",
            data: null
        });
    }

    const diperbarui = {
        id,
        namaTanaman,
        jenis,
        lokasiBedeng,
        tanggalTanam,
        sudahPanen: sudahPanen ?? false
    };

    plants[index] = diperbarui;

    res.status(200).json({
        status: "success",
        message: `Data tanaman dengan id ${id} berhasil diubah`,
        data: diperbarui
    });
});

// DELETE /plants/:id
app.delete("/plants/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const index = plants.findIndex((item) => item.id === id);

    if (index === -1) {
        return res.status(404).json({
            status: "error",
            message: `Data dengan id ${id} tidak ditemukan`,
            data: null
        });
    }

    plants.splice(index, 1);

    res.status(200).json({
        status: "success",
        message: `Data tanaman dengan id ${id} berhasil dihapus`,
        data: null
    });
});

// Catch-all 404
app.use((req, res) => {
    res.status(404).json({
        status: "error",
        message: "Endpoint tidak ditemukan",
        data: null
    });
});

const PORT = process.env.PORT || 3000;

if (process.env.NODE_ENV !== "production") {
    app.listen(PORT, () => {
        console.log(`Server berjalan di http://localhost:${PORT}`);
    });
}

module.exports = app;
