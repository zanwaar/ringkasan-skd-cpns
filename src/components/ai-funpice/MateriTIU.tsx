import React from 'react';
import SubkategoriCard from './SubkategoriCard';

interface Subkategori {
    judul: string;
    deskripsi: string;
    prompt: string; // Tambahkan prompt di sini
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

interface MateriTIUProps {
  materi: TesTIU;
}

const MateriTIU: React.FC<MateriTIUProps> = ({ materi }) => {
  return (
    <>
      {Object.entries(materi.tes_tiu).map(([key, value]) => (
        <div key={key} className="bg-white shadow-lg rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-4">{value.kemampuan}</h2>

          {/* Loop through each subcategory in a grid layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {Object.entries(value.subkategori).map(([subKey, subValue]) => (
              <SubkategoriCard key={subKey} subkategori={subValue} />
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default MateriTIU;
