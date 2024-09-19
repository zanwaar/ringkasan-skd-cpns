import React from 'react';
import 'katex/dist/katex.min.css';
import { BlockMath, InlineMath } from 'react-katex';

const DeretAritmatika: React.FC = () => {
  const rumusUn: string = `U_n = U_1 + (n-1) \\cdot b`;
  const penjelasan: string = `\\text{Selisih antar suku adalah } b`;

  return (
    <div>
      <h2>Contoh Pola Deret</h2>
      <p>Perhatikan pola deret berikut:</p>
      <BlockMath math="5 \\times 4 = 20" />
      <BlockMath math="20 \\times 3 = 60" />
      <BlockMath math="60 \\times 4 = 240" />
      <BlockMath math="240 \\times 3 = 720" />

      <p>Berikut adalah contoh deret yang mengikuti pola tersebut:</p>
      <InlineMath math="5, 10, 20, 30, 80, 90, 320, 270, 1280, 810" />
      <p>
        Pola yang digunakan adalah perkalian, yaitu:
        <ul>
          <li>Setiap suku pertama dikalikan 4 untuk mendapatkan suku berikutnya.</li>
          <li>Setiap suku kedua dikalikan 3 untuk mendapatkan suku setelahnya.</li>
        </ul>
      </p>

      <h3>Langkah Penyelesaian</h3>
      <ul>
        <li>5 × 4 = 20</li>
        <li>20 × 3 = 60</li>
        <li>60 × 4 = 240</li>
        <li>240 × 3 = 720</li>
        {/* Tambahkan selanjutnya sesuai pola */}
      </ul>
    </div>
  );
};

export default DeretAritmatika;
