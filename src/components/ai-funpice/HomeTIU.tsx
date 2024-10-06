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
          prompt: `{"judulKuis": "Analogi Kata","durasi": "5 menit","jumlahSoal": 2,"pertanyaan": [{"klu": "Pada jenis soal ini, Anda akan diberikan dua kata yang memiliki hubungan tertentu. Tugas Anda adalah menemukan pasangan kata lain yang memiliki hubungan serupa dengan pasangan yang diberikan.","teksPertanyaan": "Statistika : Data = Geologi : ?","pilihanJawaban": ["A. Tanah","B. Bumi","C. Batu","D. Pemetaan","E. Air"],"jawabanBenar": 3,"pembahasan": "Statistika adalah ilmu yang mempelajari pengolahan dan analisis Data untuk mendapatkan informasi yang berguna. Dalam konteks Geologi, Pemetaan adalah proses yang dilakukan untuk menggambarkan karakteristik fisik Bumi, termasuk struktur dan komposisi tanah. Sehingga, hubungan antara Geologi dan Pemetaan adalah D. Pemetaan."},{"klu": "Pada jenis soal ini, Anda akan diberikan dua kata yang memiliki hubungan tertentu. Tugas Anda adalah menemukan pasangan kata lain yang memiliki hubungan serupa dengan pasangan yang diberikan.","teksPertanyaan": "Pemberitahuan : Pengumuman = Hukum : ?","pilihanJawaban": ["A. Keputusan","B. Peraturan","C. Putusan","D. Sanksi","E. Rekomendasi"],"jawabanBenar": 1,"pembahasan": "Pemberitahuan adalah bentuk komunikasi yang memberikan informasi penting, sedangkan Pengumuman adalah salah satu jenis Pemberitahuan yang lebih formal. Dalam konteks hukum, Peraturan adalah aturan yang ditetapkan oleh pihak berwenang dan merupakan bagian dari sistem hukum yang harus dipatuhi. Maka, hubungan yang tepat adalah B. Peraturan."},{"klu": "Pada jenis soal ini, Anda akan diberikan dua kata yang memiliki hubungan tertentu. Tugas Anda adalah menemukan pasangan kata lain yang memiliki hubungan serupa dengan pasangan yang diberikan.","teksPertanyaan": "Mata : Melihat = Telinga : ?","pilihanJawaban": ["A. Mendengar","B. Bicara","C. Bernapas","D. Melihat","E. Mengunyah"],"jawabanBenar": 0,"pembahasan": "Mata berfungsi sebagai indra penglihatan yang memungkinkan kita untuk melihat. Dengan cara yang sama, Telinga berfungsi sebagai indra pendengaran yang memungkinkan kita untuk mendengar suara. Oleh karena itu, jawaban yang tepat adalah A. Mendengar."},{"klu": "Pada jenis soal ini, Anda akan diberikan dua kata yang memiliki hubungan tertentu. Tugas Anda adalah menemukan pasangan kata lain yang memiliki hubungan serupa dengan pasangan yang diberikan.","teksPertanyaan": "Hakim : Keadilan = Selebriti : ?","pilihanJawaban": ["A. Musik","B. Hiburan","C. Seniman","D. Penyanyi","E. Ketenaran"],"jawabanBenar": 1,"pembahasan": "Hakim berfungsi untuk menegakkan Keadilan dalam sistem hukum. Sementara itu, Selebriti sering kali terkait dengan Hiburan karena mereka dikenal luas oleh masyarakat dan memiliki pengaruh dalam industri hiburan. Oleh karena itu, hubungan yang tepat adalah B. Hiburan."},{"klu": "Pada jenis soal ini, Anda akan diberikan dua kata yang memiliki hubungan tertentu. Tugas Anda adalah menemukan pasangan kata lain yang memiliki hubungan serupa dengan pasangan yang diberikan.","teksPertanyaan": "Buku : Membaca = Film : ?","pilihanJawaban": ["A. Menonton","B. Membuat","C. Mengedit","D. Menulis","E. Menggambar"],"jawabanBenar": 0,"pembahasan": "Buku adalah media yang dibaca untuk mendapatkan informasi atau cerita, sementara Film adalah media yang ditonton. Oleh karena itu, hubungan yang tepat adalah A. Menonton."},{"klu": "Pada jenis soal ini, Anda akan diberikan dua kata yang memiliki hubungan tertentu. Tugas Anda adalah menemukan pasangan kata lain yang memiliki hubungan serupa dengan pasangan yang diberikan.","teksPertanyaan": "Pohon : Daun = Buku : ?","pilihanJawaban": ["A. Penulis","B. Kertas","C. Pembaca","D. Judul","E. Cerita"],"jawabanBenar": 1,"pembahasan": "Pohon menghasilkan daun, sedangkan Buku terdiri dari kertas. Oleh karena itu, hubungan yang tepat adalah B. Kertas."},{"klu": "Pada jenis soal ini, Anda akan diberikan dua kata yang memiliki hubungan tertentu. Tugas Anda adalah menemukan pasangan kata lain yang memiliki hubungan serupa dengan pasangan yang diberikan.","teksPertanyaan": "Nutrisi : Kesehatan = Pendidikan : ?","pilihanJawaban": ["A. Kebodohan","B. Pengetahuan","C. Keterampilan","D. Kebebasan","E. Kemandirian"],"jawabanBenar": 1,"pembahasan": "Nutrisi berkontribusi terhadap Kesehatan, demikian juga Pendidikan berkontribusi terhadap Pengetahuan. Oleh karena itu, hubungan yang tepat adalah B. Pengetahuan."},{"klu": "Pada jenis soal ini, Anda akan diberikan dua kata yang memiliki hubungan tertentu. Tugas Anda adalah menemukan pasangan kata lain yang memiliki hubungan serupa dengan pasangan yang diberikan.","teksPertanyaan": "Matahari : Siang = Bulan : ?","pilihanJawaban": ["A. Malam","B. Awan","C. Bintang","D. Gelap","E. Terang"],"jawabanBenar": 0,"pembahasan": "Matahari adalah sumber cahaya utama pada Siang, sedangkan Bulan terlihat pada Malam. Oleh karena itu, hubungan yang tepat adalah A. Malam."},{"klu": "Pada jenis soal ini, Anda akan diberikan dua kata yang memiliki hubungan tertentu. Tugas Anda adalah menemukan pasangan kata lain yang memiliki hubungan serupa dengan pasangan yang diberikan.","teksPertanyaan": "Seniman : Karya = Ilmuwan : ?","pilihanJawaban": ["A. Penemuan","B. Pengetahuan","C. Teori","D. Karya Tulis","E. Eksperimen"],"jawabanBenar": 0,"pembahasan": "Seniman menciptakan Karya, sedangkan Ilmuwan menciptakan Penemuan. Oleh karena itu, hubungan yang tepat adalah A. Penemuan."}]}`,
        },
        "1.2": {
          judul: "Silogisme",
          deskripsi: "Menarik kesimpulan logis berdasarkan premis-premis yang diberikan.",
          prompt: "Contoh: Semua manusia adalah makhluk hidup. John adalah manusia. Apa kesimpulannya?",
        },
        "1.3": {
          judul: "Penalaran Analitis",
          deskripsi: "Menguraikan dan menilai informasi atau argumen secara mendalam.",
          prompt: "Contoh: Apa kesimpulan dari pernyataan berikut? Semua kucing adalah hewan peliharaan.",
        },
      },
    },
    "2": {
      kemampuan: "Numerik",
      subkategori: {
        "2.1": {
          judul: "Deret Bilangan",
          deskripsi: "Menentukan pola dari serangkaian angka.",
          prompt: "Contoh: Temukan angka berikut dalam deret 2, 4, 6, 8, ...?",
        },
        "2.2": {
          judul: "Operasi Pecahan",
          deskripsi: "Melakukan operasi matematika dasar dengan bilangan pecahan.",
          prompt: "Contoh: Jika 1/2 + 1/3 = ?, berapa hasilnya?",
        },
        "2.3": {
          judul: "Perbandingan Kuantitatif",
          deskripsi: "Membandingkan dua atau lebih nilai kuantitatif.",
          prompt: "Contoh: Bandingkan 10kg dan 5kg, mana yang lebih berat?",
        },
        "2.4": {
          judul: "Soal Cerita Perbandingan",
          deskripsi: "Memecahkan soal cerita yang melibatkan perbandingan antara dua nilai atau lebih.",
          prompt: "Contoh: Jika 3 apel harganya 6000, berapa harga 10 apel?",
        },
      },
    },
    "3": {
      kemampuan: "Figural",
      subkategori: {
        "3.1": {
          judul: "Analogi Gambar",
          deskripsi: "Mencari hubungan kesamaan antara dua gambar.",
          prompt: "Contoh: Temukan gambar yang memiliki hubungan dengan gambar yang ditunjukkan.",
        },
        "3.2": {
          judul: "Kesamaan Gambar",
          deskripsi: "Menentukan gambar yang memiliki kesamaan karakteristik.",
          prompt: "Contoh: Dari empat gambar, mana yang memiliki kesamaan?",
        },
        "3.3": {
          judul: "Seri Gambar",
          deskripsi: "Menentukan urutan atau pola dari serangkaian gambar.",
          prompt: "Contoh: Apa urutan gambar berikutnya dalam rangkaian?",
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
