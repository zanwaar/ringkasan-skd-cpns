
import Layout from "@theme/Layout";
import React from 'react';

interface Subkategori {
  judul: string;
  deskripsi: string;
}

interface Kemampuan {
  kemampuan: string;
  subkategori: {
    [key: string]: Subkategori;
  };
}

interface TesTIU {
  tes_tiu: {
    [key: string]: Kemampuan;
  };
}

const materiTIU: TesTIU = {
  tes_tiu: {
    "1": {
      kemampuan: "Verbal",
      subkategori: {
        "1.1": {
          judul: "Analogi",
          deskripsi: "Mencari hubungan kesamaan antara dua kata atau frasa."
        },
        "1.2": {
          judul: "Silogisme",
          deskripsi: "Menarik kesimpulan logis berdasarkan premis-premis yang diberikan."
        },
        "1.3": {
          judul: "Penalaran Analitis",
          deskripsi: "Menguraikan dan menilai informasi atau argumen secara mendalam."
        }
      }
    },
    "2": {
      kemampuan: "Numerik",
      subkategori: {
        "2.1": {
          judul: "Deret Bilangan",
          deskripsi: "Menentukan pola dari serangkaian angka."
        },
        "2.2": {
          judul: "Operasi Pecahan",
          deskripsi: "Melakukan operasi matematika dasar dengan bilangan pecahan."
        },
        "2.3": {
          judul: "Perbandingan Kuantitatif",
          deskripsi: "Membandingkan dua atau lebih nilai kuantitatif."
        },
        "2.4": {
          judul: "Soal Cerita Perbandingan",
          deskripsi: "Memecahkan soal cerita yang melibatkan perbandingan antara dua nilai atau lebih."
        }
      }
    },
    "3": {
      kemampuan: "Figural",
      subkategori: {
        "3.1": {
          judul: "Analogi Gambar",
          deskripsi: "Mencari hubungan kesamaan antara dua gambar."
        },
        "3.2": {
          judul: "Kesamaan Gambar",
          deskripsi: "Menentukan gambar yang memiliki kesamaan karakteristik."
        },
        "3.3": {
          judul: "Seri Gambar",
          deskripsi: "Menentukan urutan atau pola dari serangkaian gambar."
        }
      }
    }
  }
};

export default function Home(): JSX.Element {

  return (
    <Layout
      title={`Funpice AI Generator`}
      description="Informasi dan latihan untuk tes CPNS."
    >
      <div className='max-6xl px-5  md:mx-auto mt-10'>
      <h1 className="text-3xl font-extrabold md:text-5xl text-green-600 text-left md:text-center">
          <strong className="font-extrabold sm:block"> 🤖<span className=''>Funpice</span>  AI Generator </strong>
      </h1>
      <p className='text-gray-500 text-lg  md:text-2xl font-semibold text-left md:text-center'>Latihan Soal Tes CPNS 2024 Dengan  <span className="font-extrabold text-green-600">AI </span></p>
      <p className='text-gray-500 text-sm max-w-xl text-left md:text-center'>Materi soal latihan  disusun sesuai dengan Keputusan Menteri Pendayagunaan Aparatur Negara dan Reformasi Birokrasi Nomor 321 Tahun 2024, dan didukung oleh AI untuk membantu kamu mempersiapkan ujian dengan lebih efektif. <a href="https://www.bkn.go.id/regulasi/keputusan-menteri-pendayagunaan-aparatur-negara-dan-reformasi-birokrasi-republik-indonesia-nomor-321-tahun-2024/">link website</a></p>
     
      </div>
      <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8">Materi Tes Intelegensi Umum (TIU)</h1>

      {/* Loop through each TIU section */}
      {Object.entries(materiTIU.tes_tiu).map(([key, value]) => (
        <div key={key} className="bg-white shadow-lg rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-4">{value.kemampuan}</h2>

          {/* Loop through each subcategory in a grid layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {Object.entries(value.subkategori).map(([subKey, subValue]) => (
              <div key={subKey} className="bg-gray-50 p-4 rounded-lg shadow  hover:border-purple-600 hover:bg-green-100 cursor-pointer">
                <h3 className="text-xl font-medium">{subValue.judul}</h3>
                <p className="text-gray-600">{subValue.deskripsi}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#fff" />
      </head>
    </Layout>
  );
}
