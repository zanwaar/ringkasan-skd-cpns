---
sidebar_position: 3
title: Penalaran Analitis - Soal Penalaran Analitis
sidebar_label: Penalaran Analitis
---

import PosDiagram from '@site/src/components/PosDiagram';
import CircleSeating from '@site/src/components/diagram/CircleSeating';

# Penalaran Analitis: Soal Penalaran Analitis

## Jenis Soal Penalaran Analitis

Dalam tes Seleksi Kompetensi Dasar (SKD) CPNS, soal penalaran analitis biasanya melibatkan penempatan atau hubungan antara beberapa elemen berdasarkan informasi yang diberikan.

### Contoh Soal 1 (SKD CPNS 2023):

#### Kategori : Penataan dan Hubungan Posisi (Contoh Soal 1)

Dalam sebuah acara undangan pernikahan terdapat 8 orang tamu yang duduk dalam dua baris pada kedua sisi meja. Andi berada di antara Lala dan Ari dan berhadapan dengan Bejo. Reza berada di sebelah Bejo, sedangkan Ari duduk berhadapan dengan Anto dan di antara Andi dan Eko. Jika Nuri duduk di sebelah Anto, siapakah yang berada di antara Reza dan Anto?

**Pilihan Jawaban:**

a. Nuri  
b. Bejo  
c. Lala  
d. Andi  
e. Ari

<details>
<summary>Detail</summary>

**Penjelasan:**

- **Andi** berada di antara **Lala** dan **Ari**, dan berhadapan dengan **Bejo**.
- **Reza** berada di sebelah **Bejo**.
- **Ari** duduk berhadapan dengan **Anto** dan berada di antara **Andi** dan **Eko**.
- **Nuri** duduk di sebelah **Anto**.

**Susunan Posisi Tamu:**

| Lala | Andi | Ari | Eko |
| ---- | ---- | --- | --- |

| Bejo | Reza | Anto | Nuri |
| ---- | ---- | ---- | ---- |

Dengan susunan ini, **Bejo** berada di antara **Reza** dan **Anto**.

**Jawaban yang benar adalah:** **b. Bejo**

</details>

### Contoh Soal 1 

#### Kategori : Penataan dan Hubungan Posisi Lingkaran (Contoh Soal 2)

Dalam sebuah rapat, terdapat 7 peserta yang duduk di kursi melingkar. Joni duduk di sebelah kiri Lita, dan Mita duduk di sebelah kanan Joni. Jika Roni duduk berseberangan dengan Lita, siapakah yang duduk di sebelah kanan Mita?

**Pilihan Jawaban:**

a. Joni  
b. Lita  
c. Roni  
d. Mita  
e. Tidak dapat ditentukan

<details>
<summary><strong>Jawaban:</strong>  c. Roni</summary>

**Penjelasan:**

Dalam sebuah rapat, terdapat 7 peserta yang duduk di kursi melingkar. Berikut informasi yang diberikan:

1. **Joni** duduk di sebelah kiri **Lita**.
2. **Mita** duduk di sebelah kanan **Joni**.
3. **Roni** duduk berseberangan dengan **Lita**.

Mari kita susun posisi mereka dalam kursi melingkar.

<CircleSeating />
Posisi 5, 6, dan 7 dapat diisi oleh peserta yang tersisa, tapi mereka tidak memengaruhi hasil akhir.

Menjawab Pertanyaan:

    Mita duduk di posisi 3.
    Di sebelah kanan Mita adalah posisi 4, di mana Roni duduk.

Jadi, jawaban yang benar adalah:

**c. Roni**

</details>

### Contoh Soal 2 (SKD CPNS 2023):

#### Kategori : Jalur Maksimal dalam Jaringan 

Pada liburan sekolah, Wisnu berlibur ke Dufan dan dia mulai berjalan melalui pintu masuk wahana. Pos A dekat dengan pintu masuk yang terhubung dengan pos B dan pos C. Setelah ia berjalan, ia melihat bahwa Pos C terhubung dengan pos B, pos D, dan pos E; kemudian pos D terhubung dengan pos G. Sedangkan pos E terhubung dengan pos F dan pos G yang dekat dengan pintu keluar terhubung dengan pos F.

**Berapa maksimal pos wahana permainan yang dilewati Wisnu dalam sekali jalan?**  
**Pilihan Jawaban:**

a. 3 pos  
b. 4 pos  
c. 5 pos  
d. 6 pos  
e. 7 pos

<details>
<summary>Detail</summary>

**Penjelasan:**

Mari kita gambarkan struktur hubungan antar pos:

## Visualisasi Struktur Koneksi

<PosDiagram />

### Jalur Terpanjang

Beberapa jalur yang mungkin ditempuh Wisnu tanpa mengunjungi pos yang sama lebih dari sekali:

1. **A → C → E → G → F**

   - Pos yang dilalui: A, C, E, G, F (5 pos)

2. **A → C → D → G → F**

   - Pos yang dilalui: A, C, D, G, F (5 pos)

3. **A → B → C → E → G → F**

   - Pos yang dilalui: A, B, C, E, G, F (6 pos)

4. **A → B → C → D → G → F**
   - Pos yang dilalui: A, B, C, D, G, F (6 pos)

### Kesimpulan

Jalur terpanjang yang mungkin adalah:

- **A → B → C → D → G → F**
- **A → B → C → E → G → F**

Keduanya melibatkan **6 pos**.

Jadi, maksimal pos wahana permainan yang dilewati Wisnu dalam sekali jalan adalah **6 pos**.

**Jawaban yang tepat adalah: d. 6 pos.**

</details>

import GaleriDiagram from '@site/src/components/diagram/GaleriDiagram';



#### Kategori : Jalur Maksimal dalam Jaringan 

Di sebuah pusat perbelanjaan, terdapat 9 toko yang terhubung sebagai berikut: Toko 1 terhubung dengan toko 2 dan toko 3. Toko 2 terhubung dengan toko 4 dan toko 5. Toko 3 terhubung dengan toko 6. Toko 4 terhubung dengan toko 7. Toko 5 terhubung dengan toko 8 dan toko 9. Berapa maksimal toko yang bisa dikunjungi dalam satu perjalanan mulai dari Toko 1?

**Pilihan Jawaban:**

a. 4 toko  
b. 5 toko  
c. 6 toko  
d. 7 toko  
e. 8 toko

<details>
<summary><strong>Jawaban:</strong> a. 4 toko</summary>
## Penjelasan

Di sebuah pusat perbelanjaan, terdapat 9 toko yang terhubung sebagai berikut:

- **Toko 1** terhubung dengan Toko 2 dan Toko 3.
- **Toko 2** terhubung dengan Toko 4 dan Toko 5.
- **Toko 3** terhubung dengan Toko 6.
- **Toko 4** terhubung dengan Toko 7.
- **Toko 5** terhubung dengan Toko 8 dan Toko 9.

Graf yang menggambarkan hubungan toko-toko adalah sebagai berikut:

### Visualisasi Struktur Koneksi

Berikut adalah visualisasi struktur koneksi toko:

```plaintext
   1
  / \
 2   3
/ \   \
4   5   6
|  / \
7 8   9
```

## Tujuan

Cari jalur terpanjang yang dapat dilalui tanpa mengunjungi toko yang sama lebih dari sekali, dimulai dari Toko 1.

## Solusi

Mari kita coba beberapa jalur dari Toko 1:

1. **Jalur dari Toko 1 ke Toko 2:**

   - 1 → 2 → 4 → 7
   - 1 → 2 → 5 → 8
   - 1 → 2 → 5 → 9

   Panjang jalur: 4 toko

2. **Jalur dari Toko 1 ke Toko 3:**

   - 1 → 3 → 6

   Panjang jalur: 3 toko

Jadi, jalur terpanjang yang dapat kita temukan adalah sebagai berikut:

1. Dari Toko 1 ke Toko 2 → Toko 4 → Toko 7: Panjang 4 toko.
2. Dari Toko 1 ke Toko 2 → Toko 5 → Toko 8: Panjang 4 toko.
3. Dari Toko 1 ke Toko 2 → Toko 5 → Toko 9: Panjang 4 toko.
4. Dari Toko 1 ke Toko 3 → Toko 6: Panjang 3 toko.

## Kesimpulan

Jumlah maksimum toko yang bisa dikunjungi dalam satu perjalanan mulai dari Toko 1 adalah **4 toko**.

</details>

## Latihan Soal

- [Latihan Soal - Penalaran Analitis (20 Soal) Kategori Penataan dan Hubungan Posisi](/ringkasan-skd-cpns/docs/latihan-soal/soal-verbal/latihan-soal-penalaran-analitis)
- [Latihan Soal - Penalaran Analitis (20 Soal) Kategori Jalur Maksimal dalam Jaringan](/ringkasan-skd-cpns/docs/latihan-soal/soal-verbal/latihan-soal-penalaran-anlistis-jalur)

## Video Penjelasan Soal Penalaran Analitis

<div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', maxWidth: '100%', height: 'auto' }}>
  <iframe 
    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} 
    src="https://www.youtube.com/embed/Kamb7N3XnNE" 
    title="YouTube video player" 
    frameBorder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowFullScreen
  />
</div>
----
<div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', maxWidth: '100%', height: 'auto' }}>
  <iframe 
    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} 
    src="https://www.youtube.com/embed/34Wnng8whmA" 
    title="YouTube video player" 
    frameBorder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowFullScreen
  />
</div>
