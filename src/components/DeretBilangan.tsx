import React from 'react';
import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

const DeretBilangan: React.FC = () => {
  return (
    <div>
      <p>
        Hasil dari{' '}
        <InlineMath math="7 \dfrac{1}{2} \div 5 + \dfrac{3}{4} \times 8 - \dfrac{1}{8}" />{' '}
        = ...
      </p>
      <ol type="a">
        <li>
          <InlineMath math="8.125" />
        </li>
        <li>
          <InlineMath math="8.375" />
        </li>
        <li>
          <InlineMath math="7.125" />
        </li>
        <li>
          <InlineMath math="7.375" />
        </li>
        <li>
          <InlineMath math="7.500" />
        </li>
      </ol>
      
      <h3>Penyelesaian:</h3>
      <p>Kita akan menyelesaikan operasi satu per satu:</p>
      <ol>
        <li>
          Pertama, ubah <InlineMath math="7 \dfrac{1}{2}" /> menjadi pecahan biasa:
          <BlockMath math="7 \dfrac{1}{2} = \dfrac{15}{2}" />
        </li>
        <li>
          Lakukan pembagian <InlineMath math="\dfrac{15}{2} \div 5" />:
          <BlockMath math="\dfrac{15}{2} \div 5 = \dfrac{15}{2} \times \dfrac{1}{5} = \dfrac{15}{10} = 1.5" />
        </li>
        <li>
          Kemudian, hitung perkalian <InlineMath math="\dfrac{3}{4} \times 8" />:
          <BlockMath math="\dfrac{3}{4} \times 8 = \dfrac{24}{4} = 6" />
        </li>
        <li>
          Setelah itu, kurangi <InlineMath math="1.5 + 6 - \dfrac{1}{8}" />:
          <BlockMath math="1.5 + 6 = 7.5" />
          <BlockMath math="7.5 - \dfrac{1}{8} = 7.5 - 0.125 = 7.375" />
        </li>
      </ol>

      <p>
        Jadi, hasil dari operasi tersebut adalah{' '}
        <InlineMath math="7.375" />.
      </p>
      
      <p>Jawaban yang benar adalah <strong>d. 7.375</strong>.</p>

      <div>
      <p>
        Hasil dari{' '}
        <InlineMath math="9 \dfrac{1}{4} \div 4 + \dfrac{5}{6} \times 9 - \dfrac{2}{9}" />{' '}
        = ...
      </p>
      <ol type="a">
        <li>
          <InlineMath math="9.083" />
        </li>
        <li>
          <InlineMath math="8.667" />
        </li>
        <li>
          <InlineMath math="8.917" />
        </li>
        <li>
          <InlineMath math="8.750" />
        </li>
        <li>
          <InlineMath math="8.500" />
        </li>
      </ol>
    </div>
    <div>
      <p>
        Hasil dari{' '}
        <InlineMath math="6 \dfrac{2}{3} \div 3 + \dfrac{7}{5} \times 5 - \dfrac{4}{7}" />{' '}
        = ...
      </p>
      <ol type="a">
        <li>
          <InlineMath math="6.871" />
        </li>
        <li>
          <InlineMath math="7.029" />
        </li>
        <li>
          <InlineMath math="6.500" />
        </li>
        <li>
          <InlineMath math="6.571" />
        </li>
        <li>
          <InlineMath math="6.750" />
        </li>
      </ol>
    </div>
    <div>
      <p>
        Hasil dari{' '}
        <InlineMath math="5 \dfrac{3}{4} \times 2 + \dfrac{4}{5} \div 2 - \dfrac{3}{8}" />{' '}
        = ...
      </p>
      <ol type="a">
        <li>
          <InlineMath math="10.025" />
        </li>
        <li>
          <InlineMath math="9.875" />
        </li>
        <li>
          <InlineMath math="9.500" />
        </li>
        <li>
          <InlineMath math="10.375" />
        </li>
        <li>
          <InlineMath math="9.625" />
        </li>
      </ol>
    </div>
    </div>
  );
};

export default DeretBilangan;
