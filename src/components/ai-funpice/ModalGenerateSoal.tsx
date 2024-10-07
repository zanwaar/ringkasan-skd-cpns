import React, { useState } from "react";
import { useHistory } from "react-router-dom"; // Import useHistory
import { chatSession } from "./AIModelGemini";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  prompt: string;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  description,
  prompt,
}) => {
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [jumlahSoal, setJumlahSoal] = useState<number>(2);
  const [durasi, setDurasi] = useState<number>(1);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const Generator = `jumlah soal ${jumlahSoal} dan durasi  ${durasi}  menit.`;
    const FINAL_PROMT = prompt + Generator;
    try {
      localStorage.removeItem("generatedQuestions");
      const result = await chatSession.sendMessage(FINAL_PROMT);
      const generatedQuestions = result.response.text();

      localStorage.setItem("generatedQuestions", generatedQuestions);

      history.push("/ringkasan-skd-cpns/quiz");
    } catch (error) {
      console.error("Error generating soal:", error);
      alert("Kena Batas limit: Maaf Coba lagi nanti ");
    } finally {
      setLoading(false);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg p-6 w-11/12 md:w-1/3 relative">
        {loading ? (
          <div className="flex flex-col items-center py-5">
            <p className="font-semibold">Memproses Permintaan</p>
            <img src="./loading.gif" width={100} height={100} alt="Memuat..." />
            <p>Harap tunggu... AI sedang memproses Soal Anda</p>
          </div>
        ) : (
          <>
            <h2 className="text-2xl font-bold mb-4">{title}</h2>
            <p className="text-gray-700 mb-4">{description}</p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="jumlahSoal"
                  className="block text-sm font-medium text-gray-700"
                >
                  Jumlah Soal (max 4)
                </label>
                <input
                  type="number"
                  id="jumlahSoal"
                  value={jumlahSoal}
                  onChange={(e) => {
                    const value = Number(e.target.value);
                    if (value <= 4) {
                      setJumlahSoal(value);
                    } else {
                      setJumlahSoal(4);
                    }
                  }}
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                  placeholder="Masukkan jumlah soal"
                  max={4}
                  min={1}
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
                  min={1}
                  onChange={(e) => setDurasi(Number(e.target.value))}
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                  placeholder="Masukkan durasi"
                  required
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={!prompt.trim()}
                  className={`px-4 py-2 rounded text-white transition duration-300 ${
                    !prompt.trim()
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-green-500 hover:bg-green-600"
                  }`}
                >
                  Generated Soal
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
          </>
        )}
      </div>
    </div>
  );
};

export default Modal;
