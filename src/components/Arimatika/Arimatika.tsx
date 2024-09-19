import React from 'react';
import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

const Arimatika: React.FC = () => {
  return (
    <div>
    <BlockMath math={`\\begin{array}{r}
      435 \\\\
      \\underline{\\times\\,64}
      \\end{array}`} />
  </div>
  );
};

export default Arimatika;
