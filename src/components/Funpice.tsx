import React from "react";
import PostRequestComponent from "@site/src/components/PostRequestComponent";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap; /* Menambahkan wrapping jika konten terlalu lebar */

  @media (max-width: 768px) {
    flex-direction: column; /* Mengatur layout menjadi kolom pada layar kecil */
    align-items: center; /* Menyelaraskan item di tengah pada layar kecil */
    justify-content: center; /* Menyelaraskan item di tengah secara vertikal */
  }
`;

const Image = styled.img`
  max-width: 55%;
  height: auto;

  @media (max-width: 768px) {
    max-width: 50%; /* Menyesuaikan lebar gambar pada layar kecil */
  }
`;

const Content = styled.div`
  flex: 1;
  margin-top: 20px; /* Margin atas untuk jarak antara gambar dan konten */

  @media (max-width: 768px) {
    text-align: center; /* Menyelaraskan teks di tengah pada layar kecil */
  }
`;

const FunpicePage: React.FC = () => {
  return (
    <div>
      <p>
        Selamat datang di halaman <strong>Funpice ID Generator</strong>! Di
        sini, Anda dapat memperoleh <strong>ID Funpice</strong> unik yang
        diperlukan untuk mengakses berbagai fitur dan layanan eksklusif di situs{" "}
        <strong>Funpice</strong>.
      </p>

      <h2>Cara Mendapatkan ID Funpice</h2>
      <ol>
        <li>
          <strong>Masukkan Nama Anda</strong>: Masukkan nama atau informasi
          relevan pada kolom yang tersedia.
        </li>
        <li>
          <strong>Klik "Generate ID"</strong>: Setelah memasukkan nama, klik
          tombol <strong>"Generate ID"</strong>. Sistem akan memproses
          permintaan Anda dan menghasilkan ID unik.
        </li>
        <li>
          <strong>Dapatkan dan Simpan ID</strong>: ID Funpice yang dihasilkan
          akan ditampilkan. Pastikan untuk menyimpan ID ini dengan aman karena
          digunakan untuk mengakses berbagai fitur dan layanan di situs Funpice.
        </li>
        <li>
          <strong>Gunakan ID</strong>: Gunakan ID Funpice untuk login atau
          mengakses fitur di{" "}
          <a
            href="https://funpice.fun/"
            target="_blank"
            rel="noopener noreferrer"
          >
            situs ujian online
          </a>
          . Masukkan ID dan password dengan ID Funpice.
        </li>
      </ol>

      <h2>Catatan Penting</h2>
      <ul>
        <li>
          <strong>ID Unik</strong>: Setiap pengguna hanya dapat memiliki satu ID
          Funpice.
        </li>
        <li>
          <strong>Masalah Teknis</strong>: Jika mengalami masalah saat
          mendapatkan ID atau mengakses fitur, pastikan koneksi internet Anda
          stabil. Untuk bantuan lebih lanjut, hubungi tim dukungan kami melalui
          <a href="/ringkasan-skd-cpns/docs/dukungan-sponsor">
            {" "}
            kontak Dan Dukungan
          </a>
          .
        </li>
      </ul>
      <a href="/ringkasan-skd-cpns/docs/ujian-online" rel="noopener noreferrer">
        Cara Akses Ujian Online
      </a>
      <h2>Dapatkan ID Anda Sekarang!</h2>
      <Container>
        <Image
          src="/ringkasan-skd-cpns/img/funpice-id.png"
          alt="Gambar Funpice ID"
        />
        <Content>
          <PostRequestComponent />
        </Content>
      </Container>
    </div>
  );
};

export default FunpicePage;
