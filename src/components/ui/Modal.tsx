// Modal.tsx
import React, { useState } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  prompt: string; // Tambahkan prop prompt
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  description,
  prompt,
}) => {
  const [jumlahSoal, setJumlahSoal] = useState<number>(0);
  const [durasi, setDurasi] = useState<number>(0);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const Generator = `Buatkan soal lain lagi berbeda dan sulit jumlah soal ${jumlahSoal} dan durasi  ${durasi}  menit.`;
    console.log(prompt + Generator);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg p-6 w-11/12 md:w-1/3">
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p className="text-gray-700 mb-4">{description}</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="jumlahSoal"
              className="block text-sm font-medium text-gray-700"
            >
              Jumlah Soal (max 5)
            </label>
            <input
              type="number"
              id="jumlahSoal"
              value={jumlahSoal}
              onChange={(e) => {
                const value = Number(e.target.value);
                if (value <= 5) {
                  setJumlahSoal(value);
                } else {
                  setJumlahSoal(5);
                }
              }}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              placeholder="Masukkan jumlah soal"
              max={5}
              min={0}
              required
            />
          </div>
          <div>
            <label
              htmlFor="durasi"
              className="block text-sm font-medium text-gray-700"
            >
              Durasi (Menit)
            </label>
            <input
              type="number"
              id="durasi"
              value={durasi}
              onChange={(e) => setDurasi(Number(e.target.value))}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              placeholder="Masukkan durasi"
              required
            />
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
              Simpan
            </button>
            <button
              type="button"
              className="ml-2 bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
              onClick={onClose}
            >
              Tutup
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
