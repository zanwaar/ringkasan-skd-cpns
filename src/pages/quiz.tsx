import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link
import { CheckCircle2, Timer, XCircle } from "lucide-react";
import Layout from "@theme/Layout";
import BrowserOnly from "@docusaurus/BrowserOnly"; // Import BrowserOnly

// Define types for the quiz data
interface PilihanJawaban {
  pilihan: string[];
  jawabanBenar: number;
  pembahasan: string;
}

interface Pertanyaan {
  teksPertanyaan: string;
  pilihanJawaban: string[];
  jawabanBenar: number;
  pembahasan: string;
}

interface KuisData {
  judulKuis: string;
  durasi: string;
  jumlahSoal: number;
  pertanyaan: Pertanyaan[];
}

const Kuis: React.FC = () => {
  const [kuis, setKuis] = useState<KuisData | null>(null);
  const [jawabanUser, setJawabanUser] = useState<(number | null)[]>([]);
  const [selesai, setSelesai] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0); // Set initial time left to 0

  // Load the quiz data after the component mounts
  useEffect(() => {
    const kuisData = localStorage.getItem("generatedQuestions");
    const quiz: KuisData | null = kuisData ? JSON.parse(kuisData) : null;

    if (!quiz) {
      console.error("Data kuis tidak ditemukan.");
      return;
    }
    console.log(quiz);
    const durasiMenit = parseInt(quiz.durasi);
    setKuis(quiz);
    setJawabanUser(Array(quiz.jumlahSoal).fill(null));
    setTimeLeft(durasiMenit * 60);
  }, []);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 0) {
            clearInterval(timer);
            setSelesai(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [timeLeft]);

  const handleJawabanChange = (index: number, value: number) => {
    const updatedJawabanUser = [...jawabanUser];
    updatedJawabanUser[index] = value;
    setJawabanUser(updatedJawabanUser);
  };

  const handleSubmit = () => {
    setSelesai(true);
  };

  const nextQuestion = () => {
    if (currentQuestion < (kuis?.pertanyaan.length || 0) - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  // Format time into minutes and seconds
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  const renderHasil = () => {
    if (!kuis) return null; // Ensure kuis is not null

    return (
      <Layout title={`Funpice AI Generator`} description="Informasi dan latihan untuk tes CPNS.">
        <div className="mt-8 p-8 ">
          <h2 className="text-2xl font-bold">Hasil Jawaban</h2>
          {kuis.pertanyaan.map((item, index) => (
            <div key={index} className="flex flex-col mb-5">
              <div>{item.teksPertanyaan}</div>
              <div className="font-semibold">
                Jawaban Anda: {jawabanUser[index] !== null ? item.pilihanJawaban[jawabanUser[index]] : "Belum dijawab"}
              </div>
              <div className={"m-0 p-0 " + (jawabanUser[index] === item.jawabanBenar ? "text-green-600" : "text-red-600")}>
                {jawabanUser[index] === item.jawabanBenar ? (
                  <>
                    <CheckCircle2 color="green" size={30} className="inline-block" /> Benar!
                  </>
                ) : (
                  <div className="flex gap-1">
                    <XCircle color="red" size={30} className="inline-block" />
                    Salah. {item.pembahasan}
                  </div>
                )}
              </div>
              <hr />
            </div>
          ))}
          <Link
            to="/ringkasan-skd-cpns/ai-funpice"
            className="inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 hover:text-white transition duration-200"
          >
            Kembali
          </Link>
        </div>
      </Layout>
    );
  };

  const renderSoal = () => {
    if (!kuis) return null; // Ensure kuis is not null

    return (
      <>
        <div className="mb-6 p-4 border rounded-lg shadow-md ">
          <h3 className="text-lg font-semibold text-gray-700">
            {kuis.pertanyaan[currentQuestion].teksPertanyaan}
          </h3>
          {kuis.pertanyaan[currentQuestion].pilihanJawaban.map((pilihan, i) => (
            <div key={i} className="mt-2">
              <input
                type="radio"
                name={`question${currentQuestion}`}
                value={i}
                checked={jawabanUser[currentQuestion] === i}
                onChange={() => handleJawabanChange(currentQuestion, i)}
                className="mr-2"
              />
              <label className="text-md">{pilihan}</label>
            </div>
          ))}
        </div>

        {/* Prev and Next buttons */}
        <div className="flex justify-between mb-4">
          <div className="text-lg font-semibold">
            Soal {currentQuestion + 1} dari {kuis.pertanyaan.length}
          </div>
          <div className="flex gap-3">
            <button
              onClick={prevQuestion}
              disabled={currentQuestion === 0}
              className="bg-gray-300 text-black py-2 px-4 rounded hover:bg-gray-400 transition duration-200"
            >
              Prev
            </button>
            <button
              onClick={nextQuestion}
              disabled={currentQuestion === kuis.pertanyaan.length - 1}
              className="bg-gray-300 text-black py-2 px-4 rounded hover:bg-gray-400 transition duration-200"
            >
              Next
            </button>
          </div>
        </div>

        {/* Submit button */}
        {currentQuestion === kuis.pertanyaan.length - 1 && (
          <div
            onClick={handleSubmit}
            className="w-full text-center bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 hover:text-white transition duration-200"
          >
            Kirim Jawaban
          </div>
        )}
      </>
    );
  };

  if (selesai) {
    return renderHasil(); // Display results if finished
  }

  // Render the component with BrowserOnly to avoid SSR issues
  return (
    <BrowserOnly>
      {() => (
        <Layout title={`Funpice AI Generator`} description="Informasi dan latihan untuk tes CPNS.">
          <div>
            <div className="max-w-3xl mx-auto p-4 mt-5">
              <h1 className="text-3xl font-bold text-center mb-4">{kuis?.judulKuis}</h1>
              <div className="flex flex-row justify-between">
                <div className="flex flex-col">
                  <div className="flex self-start mt-3 text-slate-400">
                    <Timer className="mr-2" />
                    <p className="text-center mb-4">{formatTime(timeLeft)}</p>
                  </div>
                </div>
                <Link to="/ringkasan-skd-cpns/ai-funpice">Buat Ulang</Link>
              </div>
              {renderSoal()} {/* Display questions if quiz is not finished */}
            </div>
          </div>
        </Layout>
      )}
    </BrowserOnly>
  );
};

export default Kuis;
