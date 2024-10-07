import React from "react";
import MateriTIU from "./MateriTIU";

const materiTIU = {
  tes_tiu: {
    "1": {
      kemampuan: "Verbal",
      subkategori: {
        "1.1": {
          judul: "Analogi",
          deskripsi: "Mencari hubungan kesamaan antara dua kata atau frasa.",
          prompt: `{"judulKuis": "Analogi Kata","durasi": "5 menit","jumlahSoal": 2,"pertanyaan": [{"klu": "Pada jenis soal ini, Anda akan diberikan dua kata yang memiliki hubungan tertentu. Tugas Anda adalah menemukan pasangan kata lain yang memiliki hubungan serupa dengan pasangan yang diberikan.","teksPertanyaan": "Statistika : Data = Geologi : ?","pilihanJawaban": ["A. Tanah","B. Bumi","C. Batu","D. Pemetaan","E. Air"],"jawabanBenar": 3,"pembahasan": "Statistika adalah ilmu yang mempelajari pengolahan dan analisis Data untuk mendapatkan informasi yang berguna. Dalam konteks Geologi, Pemetaan adalah proses yang dilakukan untuk menggambarkan karakteristik fisik Bumi, termasuk struktur dan komposisi tanah. Sehingga, hubungan antara Geologi dan Pemetaan adalah D. Pemetaan."},{"klu": "Pada jenis soal ini, Anda akan diberikan dua kata yang memiliki hubungan tertentu. Tugas Anda adalah menemukan pasangan kata lain yang memiliki hubungan serupa dengan pasangan yang diberikan.","teksPertanyaan": "Pemberitahuan : Pengumuman = Hukum : ?","pilihanJawaban": ["A. Keputusan","B. Peraturan","C. Putusan","D. Sanksi","E. Rekomendasi"],"jawabanBenar": 1,"pembahasan": "Pemberitahuan adalah bentuk komunikasi yang memberikan informasi penting, sedangkan Pengumuman adalah salah satu jenis Pemberitahuan yang lebih formal. Dalam konteks hukum, Peraturan adalah aturan yang ditetapkan oleh pihak berwenang dan merupakan bagian dari sistem hukum yang harus dipatuhi. Maka, hubungan yang tepat adalah B. Peraturan."},{"klu": "Pada jenis soal ini, Anda akan diberikan dua kata yang memiliki hubungan tertentu. Tugas Anda adalah menemukan pasangan kata lain yang memiliki hubungan serupa dengan pasangan yang diberikan.","teksPertanyaan": "Mata : Melihat = Telinga : ?","pilihanJawaban": ["A. Mendengar","B. Bicara","C. Bernapas","D. Melihat","E. Mengunyah"],"jawabanBenar": 0,"pembahasan": "Mata berfungsi sebagai indra penglihatan yang memungkinkan kita untuk melihat. Dengan cara yang sama, Telinga berfungsi sebagai indra pendengaran yang memungkinkan kita untuk mendengar suara. Oleh karena itu, jawaban yang tepat adalah A. Mendengar."},{"klu": "Pada jenis soal ini, Anda akan diberikan dua kata yang memiliki hubungan tertentu. Tugas Anda adalah menemukan pasangan kata lain yang memiliki hubungan serupa dengan pasangan yang diberikan.","teksPertanyaan": "Hakim : Keadilan = Selebriti : ?","pilihanJawaban": ["A. Musik","B. Hiburan","C. Seniman","D. Penyanyi","E. Ketenaran"],"jawabanBenar": 1,"pembahasan": "Hakim berfungsi untuk menegakkan Keadilan dalam sistem hukum. Sementara itu, Selebriti sering kali terkait dengan Hiburan karena mereka dikenal luas oleh masyarakat dan memiliki pengaruh dalam industri hiburan. Oleh karena itu, hubungan yang tepat adalah B. Hiburan."},{"klu": "Pada jenis soal ini, Anda akan diberikan dua kata yang memiliki hubungan tertentu. Tugas Anda adalah menemukan pasangan kata lain yang memiliki hubungan serupa dengan pasangan yang diberikan.","teksPertanyaan": "Buku : Membaca = Film : ?","pilihanJawaban": ["A. Menonton","B. Membuat","C. Mengedit","D. Menulis","E. Menggambar"],"jawabanBenar": 0,"pembahasan": "Buku adalah media yang dibaca untuk mendapatkan informasi atau cerita, sementara Film adalah media yang ditonton. Oleh karena itu, hubungan yang tepat adalah A. Menonton."},{"klu": "Pada jenis soal ini, Anda akan diberikan dua kata yang memiliki hubungan tertentu. Tugas Anda adalah menemukan pasangan kata lain yang memiliki hubungan serupa dengan pasangan yang diberikan.","teksPertanyaan": "Pohon : Daun = Buku : ?","pilihanJawaban": ["A. Penulis","B. Kertas","C. Pembaca","D. Judul","E. Cerita"],"jawabanBenar": 1,"pembahasan": "Pohon menghasilkan daun, sedangkan Buku terdiri dari kertas. Oleh karena itu, hubungan yang tepat adalah B. Kertas."},{"klu": "Pada jenis soal ini, Anda akan diberikan dua kata yang memiliki hubungan tertentu. Tugas Anda adalah menemukan pasangan kata lain yang memiliki hubungan serupa dengan pasangan yang diberikan.","teksPertanyaan": "Nutrisi : Kesehatan = Pendidikan : ?","pilihanJawaban": ["A. Kebodohan","B. Pengetahuan","C. Keterampilan","D. Kebebasan","E. Kemandirian"],"jawabanBenar": 1,"pembahasan": "Nutrisi berkontribusi terhadap Kesehatan, demikian juga Pendidikan berkontribusi terhadap Pengetahuan. Oleh karena itu, hubungan yang tepat adalah B. Pengetahuan."},{"klu": "Pada jenis soal ini, Anda akan diberikan dua kata yang memiliki hubungan tertentu. Tugas Anda adalah menemukan pasangan kata lain yang memiliki hubungan serupa dengan pasangan yang diberikan.","teksPertanyaan": "Matahari : Siang = Bulan : ?","pilihanJawaban": ["A. Malam","B. Awan","C. Bintang","D. Gelap","E. Terang"],"jawabanBenar": 0,"pembahasan": "Matahari adalah sumber cahaya utama pada Siang, sedangkan Bulan terlihat pada Malam. Oleh karena itu, hubungan yang tepat adalah A. Malam."},{"klu": "Pada jenis soal ini, Anda akan diberikan dua kata yang memiliki hubungan tertentu. Tugas Anda adalah menemukan pasangan kata lain yang memiliki hubungan serupa dengan pasangan yang diberikan.","teksPertanyaan": "Seniman : Karya = Ilmuwan : ?","pilihanJawaban": ["A. Penemuan","B. Pengetahuan","C. Teori","D. Karya Tulis","E. Eksperimen"],"jawabanBenar": 0,"pembahasan": "Seniman menciptakan Karya, sedangkan Ilmuwan menciptakan Penemuan. Oleh karena itu, hubungan yang tepat adalah A. Penemuan."}]} Buatkan soal lain lagi berbeda dan sulit `,
        },
        "1.2": {
          judul: "Silogisme",
          deskripsi:
            "Menarik kesimpulan logis berdasarkan premis-premis yang diberikan.",
          prompt: `{"judulKuis": "Silogisme","durasi": "10 menit","jumlahSoal": 2,"pertanyaan": [{"klu": "Pada jenis soal ini, Anda akan diberikan dua premis. Tugas Anda adalah memilih kesimpulan yang paling logis berdasarkan kedua premis tersebut.","teksPertanyaan": "Semua penumpang bis kota memiliki kartu langganan kendaraan umum. Tidak ada karyawan di pabrik sepatu yang memiliki kartu langganan kendaraan umum. Kesimpulan yang tepat dari pernyataan di atas adalah:","pilihanJawaban": ["a. Tidak ada karyawan di pabrik sepatu yang menjadi penumpang bis kota.","b. Tidak ada karyawan yang tidak memiliki kartu langganan kendaraan umum.","c. Tidak ada karyawan di pabrik sepatu yang tidak menjadi penumpang bis kota.","d. Karyawan yang memiliki kartu langganan kendaraan umum tidak bekerja di pabrik sepatu.","e. Karyawan pabrik sepatu yang menjadi penumpang bis kota tidak memiliki kartu langganan kendaraan umum."],"jawabanBenar": 0,"pembahasan": "Kesimpulan yang tepat adalah a. Tidak ada karyawan di pabrik sepatu yang menjadi penumpang bis kota, karena semua penumpang bis kota memiliki kartu langganan, dan tidak ada karyawan di pabrik sepatu yang memilikinya."},{"klu": "Pada jenis soal ini, Anda akan diberikan dua premis. Tugas Anda adalah memilih kesimpulan yang paling logis berdasarkan kedua premis tersebut.","teksPertanyaan": "Semua siswa yang rajin belajar mendapatkan nilai bagus. Tidak ada siswa yang malas belajar yang mendapatkan nilai bagus. Kesimpulan yang tepat dari pernyataan di atas adalah:","pilihanJawaban": ["a. Semua siswa yang mendapatkan nilai bagus adalah siswa yang rajin belajar.","b. Semua siswa yang malas belajar mendapatkan nilai buruk.","c. Tidak ada siswa yang rajin belajar yang mendapatkan nilai buruk.","d. Siswa yang tidak mendapatkan nilai bagus adalah siswa yang malas belajar.","e. Beberapa siswa yang rajin belajar mendapatkan nilai buruk."],"jawabanBenar": 0,"pembahasan": "Kesimpulan yang tepat adalah a. Semua siswa yang mendapatkan nilai bagus adalah siswa yang rajin belajar, karena semua siswa yang rajin belajar mendapatkan nilai bagus."},{"klu": "Silogisme dengan tiga premis melibatkan lebih dari dua pernyataan yang saling terkait, yang dapat membantu dalam menarik kesimpulan yang lebih kompleks. Dalam kasus ini, kita akan menggunakan tiga premis untuk membentuk kesimpulan.","teksPertanyaan": "Semua lemari yang dipamerkan terbuat dari kayu. Pengrajin menganggap lemari kayu memiliki nilai keindahan. Lemari itu tidak terbuat dari kayu. Kesimpulan dari ketiga pernyataan di atas adalah:","pilihanJawaban": ["a. Semua lemari yang terbuat dari kayu memiliki nilai keindahan.","b. Semua yang memiliki nilai keindahan dan dipamerkan terbuat dari kayu.","c. Lemari itu tidak memiliki nilai keindahan.","d. Lemari itu memiliki nilai keindahan.","e. Lemari itu tidak dipamerkan."],"jawabanBenar": 2,"pembahasan": "Karena lemari itu tidak terbuat dari kayu, maka berdasarkan premis pertama dan kedua, dapat disimpulkan bahwa lemari itu tidak memiliki nilai keindahan."},{"klu": "Silogisme dengan tiga premis melibatkan lebih dari dua pernyataan yang saling terkait, yang dapat membantu dalam menarik kesimpulan yang lebih kompleks. Dalam kasus ini, kita akan menggunakan tiga premis untuk membentuk kesimpulan.","teksPertanyaan": "Semua buah berwarna merah adalah sehat. Apel adalah buah berwarna merah. Buah yang tidak sehat tidak boleh dimakan. Kesimpulan dari ketiga pernyataan di atas adalah:","pilihanJawaban": ["a. Apel adalah buah yang sehat.","b. Semua buah sehat boleh dimakan.","c. Tidak ada buah berwarna merah yang tidak sehat.","d. Apel boleh dimakan.","e. Buah yang sehat bisa berwarna lain."],"jawabanBenar": 3,"pembahasan": "Karena apel adalah buah berwarna merah dan semua buah berwarna merah adalah sehat, maka dapat disimpulkan bahwa apel boleh dimakan."}]}`,
        },
        "1.3": {
          judul: "Penalaran Analitis",
          deskripsi:
            "Menguraikan dan menilai informasi atau argumen secara mendalam.",
          prompt:
            ` `,
        },
      },
    },
    "2": {
      kemampuan: "Numerik",
      subkategori: {
        "2.1": {
          judul: "Deret Bilangan",
          deskripsi: "Menentukan pola dari serangkaian angka.",
          prompt: `{"judulKuis": "Analisis Pola Deret Angka","durasi": "15 menit","jumlahSoal": 10,"pertanyaan": [{"klu": "Analisis pola deret angka dan temukan angka yang hilang.","teksPertanyaan": "Soal: 3, 7, ?, 35, 85, 153. Temukan angka yang hilang pada deret tersebut.","pilihanJawaban": ["a. 12", "b. 16", "c. 18", "d. 22", "e. 24"],"jawabanBenar": 1,"pembahasan": "Pola deret: (x2 + 1), (x2 + 3), (x2 + 7), ..., sehingga angka yang hilang adalah (7 x 2) + 3 = 16."},{"klu": "Perhatikan pola loncatan bilangan ganjil dan genap.","teksPertanyaan": "Soal: 4, ?, 19, 39, 69, 159. Temukan angka yang hilang pada deret tersebut.","pilihanJawaban": ["a. 9", "b. 11", "c. 13", "d. 14", "e. 16"],"jawabanBenar": 4,"pembahasan": "Pola: bertambah dengan kelipatan 10, kemudian 20, 30, ... Jadi angka yang hilang adalah 4 + 10 = 14."},{"klu": "Temukan pola angka dengan penggandaan eksponensial.","teksPertanyaan": "Soal: ?, 6, 18, 54, 162, 486. Temukan angka yang hilang pada deret tersebut.","pilihanJawaban": ["a. 1", "b. 2", "c. 3", "d. 4", "e. 5"],"jawabanBenar": 2,"pembahasan": "Pola: angka dikalikan dengan 3 setiap kali. Maka, angka yang hilang adalah 6 ÷ 3 = 2."},{"klu": "Cari angka yang hilang di tengah pola penjumlahan dan pengurangan bergantian.","teksPertanyaan": "Soal: 3, 8, 6, ?, 9, 10. Temukan angka yang hilang pada deret tersebut.","pilihanJawaban": ["a. 7", "b. 8", "c. 9", "d. 10", "e. 6"],"jawabanBenar": 0,"pembahasan": "Pola: angka bertambah 5, kemudian berkurang 2. Jadi angka yang hilang adalah 6 + 1 = 7."},{"klu": "Pola deret ini melibatkan pengurangan dengan selisih yang bertambah.","teksPertanyaan": "Soal: 18, ?, 11, 7, 4, 2. Temukan angka yang hilang pada deret tersebut.","pilihanJawaban": ["a. 14", "b. 15", "c. 16", "d. 13", "e. 17"],"jawabanBenar": 3,"pembahasan": "Pola: pengurangan bertahap sebesar 1, 3, 4, 5, sehingga angka yang hilang adalah 11 + 2 = 13."},{"klu": "Perhatikan pola pembagian bertahap.","teksPertanyaan": "Soal: 200, 100, ?, 25, 12.5, 6.25. Temukan angka yang hilang pada deret tersebut.","pilihanJawaban": ["a. 75", "b. 50", "c. 30", "d. 40", "e. 45"],"jawabanBenar": 1,"pembahasan": "Pola: angka dibagi dua. Jadi angka yang hilang adalah 100 ÷ 2 = 50."},{"klu": "Cari angka yang hilang dengan kelipatan ganjil-genap.","teksPertanyaan": "Soal: 5, 15, 30, ?, 90, 135. Temukan angka yang hilang pada deret tersebut.","pilihanJawaban": ["a. 45", "b. 40", "c. 50", "d. 55", "e. 60"],"jawabanBenar": 0,"pembahasan": "Pola: angka bertambah dengan kelipatan 15. Jadi angka yang hilang adalah 30 + 15 = 45."},{"klu": "Pola ini melibatkan penjumlahan dan pengurangan bergantian.","teksPertanyaan": "Soal: 100, ?, 120, 105, 125, 110. Temukan angka yang hilang pada deret tersebut.","pilihanJawaban": ["a. 110", "b. 115", "c. 120", "d. 105", "e. 100"],"jawabanBenar": 0,"pembahasan": "Pola: angka bertambah 20, berkurang 15 secara bergantian. Jadi angka yang hilang adalah 100 + 10 = 110."},{"klu": "Temukan pola loncatan bilangan bertahap.","teksPertanyaan": "Soal: 7, ?, 13, 18, 24, 31. Temukan angka yang hilang pada deret tersebut.","pilihanJawaban": ["a. 9", "b. 8", "c. 10", "d. 12", "e. 11"],"jawabanBenar": 2,"pembahasan": "Pola: bertambah dengan kelipatan yang meningkat sebesar 1, 2, 3, .... Jadi angka yang hilang adalah 7 + 3 = 10."},{"klu": "Pola bilangan ini menggunakan perkalian dan pembagian bergantian.","teksPertanyaan": "Soal: 16, 48, ?, 12, 36, 108. Temukan angka yang hilang pada deret tersebut.","pilihanJawaban": ["a. 8", "b. 12", "c. 24", "d. 18", "e. 16"],"jawabanBenar": 2,"pembahasan": "Pola: dikalikan 3, kemudian dibagi 4 bergantian. Jadi angka yang hilang adalah 48 ÷ 4 = 12."}]} Buatkan soal lain lagi berbeda dan sulit tanpa pola bentuk pechan tanda ? di ganti ....`,
        },
        "2.2": {
          judul: "Operasi Pecahan",
          deskripsi:
            "Melakukan operasi matematika dasar dengan bilangan pecahan.",
          prompt: `{"judulKuis": "Operasi Pecahan - Tantangan Matematika","durasi": "1 menit","jumlahSoal": 2,"pertanyaan": [{"klu": "Pada jenis soal ini, Anda akan diberikan soal operasi pecahan. Tugas Anda adalah menyelesaikan soal tersebut.","teksPertanyaan": "Apa hasil dari $$ 7 \\frac{1}{2} : 5 + \\frac{3}{4} \\times 8 - \\frac{1}{8} $$?","pilihanJawaban": ["A. $$ 8,125 $$","B. $$ 8,375 $$","C. $$ 7,125 $$","D. $$ 7,375 $$","E. $$ 7,500 $$"],"jawabanBenar": 3,"pembahasan": "Hasil dari operasi pecahan tersebut adalah $$ 7,375 $$, yang merupakan hasil dari langkah-langkah perhitungan yang telah dilakukan."},{"klu": "Pada jenis soal ini, Anda akan diberikan soal operasi pecahan. Tugas Anda adalah menyelesaikan soal tersebut.","teksPertanyaan": "Apa hasil dari $$ \\frac{2}{3} + \\frac{1}{6} - \\frac{1}{2} $$?","pilihanJawaban": ["A. $$ \\frac{1}{2} $$","B. $$ \\frac{1}{3} $$","C. $$ \\frac{5}{6} $$","D. $$ \\frac{1}{6} $$","E. $$ 0 $$"],"jawabanBenar": 1,"pembahasan": "Langkah-langkah untuk menyelesaikan soal ini adalah dengan menyamakan penyebut dan melakukan operasi pecahan."}]} buatkan soal serupa dengan format json tambah bebrapa operasi dan pembahasan lengkap untuk perhitungnnya`,
        },
        "2.3": {
          judul: "Perbandingan Kuantitatif",
          deskripsi: "Membandingkan dua atau lebih nilai kuantitatif.",
          prompt: "",
        },
        "2.4": {
          judul: "Soal Cerita Perbandingan",
          deskripsi:
            "Memecahkan soal cerita yang melibatkan perbandingan antara dua nilai atau lebih.",
          prompt: "",
        },
      },
    },
    "3": {
      kemampuan: "Figural",
      subkategori: {
        "3.1": {
          judul: "Analogi Gambar",
          deskripsi: "Mencari hubungan kesamaan antara dua gambar.",
          prompt:
            "",
        },
        "3.2": {
          judul: "Kesamaan Gambar",
          deskripsi: "Menentukan gambar yang memiliki kesamaan karakteristik.",
          prompt: "",
        },
        "3.3": {
          judul: "Seri Gambar",
          deskripsi: "Menentukan urutan atau pola dari serangkaian gambar.",
          prompt: "",
        },
      },
    },
  },
};

export default function HomeTIU(): JSX.Element {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8">
        Materi Tes Intelegensi Umum (TIU)
      </h1>
      <MateriTIU materi={materiTIU} />
    </div>
  );
}
