import React, { useState } from 'react';
import Modal from './ModalGenerateSoal';

// Definisikan interface untuk properti Subkategori
interface Subkategori {
  judul: string;
  deskripsi: string;
  prompt: string; // Tambahkan prompt di sini
}

// Definisikan interface untuk properti SubkategoriCard
interface SubkategoriCardProps {
  subkategori: Subkategori;
}

// Komponen SubkategoriCard
const SubkategoriCard: React.FC<SubkategoriCardProps> = ({ subkategori }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => setIsOpen(true);
  const handleCloseModal = () => setIsOpen(false);

  return (
    <div>
      <div
        className="bg-gray-50 p-4 rounded-lg shadow hover:border-purple-600 hover:bg-green-100 cursor-pointer"
        onClick={handleOpenModal}
      >
        <h3 className="text-xl font-medium">{subkategori.judul}</h3>
        <p className="text-gray-600">{subkategori.deskripsi}</p>
      </div>

      <Modal
        isOpen={isOpen}
        onClose={handleCloseModal}
        title={subkategori.judul}
        description={subkategori.deskripsi}
        prompt={subkategori.prompt} // Tambahkan prompt di sini
      />
    </div>
  );
};

export default SubkategoriCard;
