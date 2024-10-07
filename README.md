# SKD CPNS

## Deskripsi

**SKD CPNS** adalah aplikasi web yang menyediakan materi ringkasan dan latihan untuk membantu calon peserta mempersiapkan tes Seleksi Kompetensi Dasar (SKD) dalam ujian Calon Pegawai Negeri Sipil (CPNS). Aplikasi ini menyajikan materi penting secara terstruktur dan menyediakan simulasi latihan tes untuk menguji pemahaman pengguna terhadap materi SKD.

## Fitur

- **Ringkasan SKD**: Menyediakan ringkasan dari setiap bagian tes SKD, termasuk Tes Wawasan Kebangsaan (TWK), Tes Intelegensi Umum (TIU), dan Tes Karakteristik Pribadi (TKP).
- **Aplikasi Latihan**: Latihan interaktif yang menguji kemampuan pengguna dalam menjawab soal-soal SKD dengan berbagai tingkat kesulitan.
- **Dokumentasi**: Tersedia akses ke panduan belajar dan dokumentasi tambahan yang relevan dengan ujian SKD.

## Instalasi

### Prasyarat

Sebelum menginstal, pastikan Anda telah menginstal:
- [Node.js](https://nodejs.org/) – Runtime untuk JavaScript.
- [Yarn](https://yarnpkg.com/) – Manajer paket alternatif untuk npm.

### Cara Instalasi

1. **Clone repository** ke komputer lokal Anda dengan perintah berikut:

    ```bash
    git clone https://github.com/zanwaar/ringkasan-skd-cpns.git
    ```

2. **Masuk ke direktori proyek**:

    ```bash
    cd ringkasan-skd-cpns
    ```

3. **Instal dependensi** menggunakan npm:

    ```bash
    npm install
    ```

4. **Setel variabel lingkungan** (env):

   Buat file `.env` di direktori proyek dan tambahkan baris berikut. Ganti `<YOUR_API_KEY>` dengan API key yang didapat dari [Google AI Studio](https://aistudio.google.com):

    ```env
    GOOGLE_GEMINI_AI_API_KEY=<YOUR_API_KEY>
    ```

5. **Jalankan aplikasi**:

    ```bash
    npm start
    ```

