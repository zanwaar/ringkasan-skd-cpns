import React, { useState, useEffect } from "react";
import styled from "styled-components";

// Definisikan tipe untuk state jika diperlukan
interface ApiResponse {
  message: string;
  id_funpice?: string; // id_funpice mungkin tidak selalu ada
}

const RowContainer = styled.div`
  display: flex;
  align-items: center; /* Vertikal center */
  gap: 10px; /* Jarak antara gambar dan teks */
`;

const Image = styled.img`
  max-width: 10%;
  height: auto;
`;

const Heading = styled.h2`
  color: #2e8555;
  margin: 0; /* Menghilangkan margin default dari h2 */
`;

const Input = styled.input`
  padding: 10px;
  margin-right: 10px;
  border: 2px solid #2e8555;
  border-radius: 5px;
  font-size: 16px;
  outline: none;
  transition: border-color 0.3s;

  &:focus {
    border-color: #0056b3;
  }
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #2e8555;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }

  &:disabled {
    background-color: #a9a9a9;
    cursor: not-allowed;
  }
`;

const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const LoadingMessage = styled.p`
  color: #0056b3;
  font-size: 16px;
  font-weight: bold;
`;

const PostRequestComponent: React.FC = () => {
  const [nama, setNama] = useState<string>(""); // State untuk input nama
  const [responseMessage, setResponseMessage] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [isPostAllowed, setIsPostAllowed] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false); // State untuk menampilkan proses

  useEffect(() => {
    const storedId = localStorage.getItem("id_funpice");
    if (storedId) {
      setIsPostAllowed(false); // Jika ID ada, mencegah pengiriman POST
      setResponseMessage(`ID FUNPICE : ${storedId}`);
    }
  }, []);

  const handleNamaChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNama(event.target.value); // Update state nama saat input berubah
  };

  const handleSubmit = async () => {
    if (!isPostAllowed) {
      setErrorMessage("POST tidak diizinkan. ID sudah ada di localStorage.");
      return;
    }

    setLoading(true); // Set loading sebelum melakukan fetch
    setErrorMessage(""); // Reset error state

    try {
      const response = await fetch("https://funpice.fun/api/idfunpice", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nama: nama, // Kirimkan nilai input nama
        }),
      });

      if (!response.ok) {
        const errorResult = await response.json();
        setResponseMessage("");
        setErrorMessage(errorResult.message || "Error");
        return;
      }

      const result: ApiResponse = await response.json();
      if (result.id_funpice) {
        localStorage.setItem("id_funpice", result.id_funpice);
        setIsPostAllowed(false);
        setResponseMessage(`ID FUNPICE: ${result.id_funpice}`);
      }
      setErrorMessage("");
    } catch (error) {
      setResponseMessage("");
      setErrorMessage("Network Error");
    } finally {
      setLoading(false); // Set loading ke false setelah proses selesai
    }
  };

  const handleClearId = () => {
    localStorage.removeItem("id_funpice");
    setIsPostAllowed(true);
    setResponseMessage("");
    setErrorMessage(
      "ID di localStorage telah dihapus. Anda dapat mengirimkan POST lagi."
    );
  };

  return (
    <div>
      {isPostAllowed && (
        <FormContainer>
          <Input
            type="text"
            value={nama}
            onChange={handleNamaChange}
            placeholder="Masukkan nama"
          />
          <Button onClick={handleSubmit} disabled={loading}>
            {loading ? "Proses..." : "Generate ID"}
          </Button>
        </FormContainer>
      )}
      {responseMessage && (
        <RowContainer>
          <Image
            src="/ringkasan-skd-cpns/img/fun.png"
            alt="Descriptive Alt Text"
          />
          <Heading>{responseMessage}</Heading>
        </RowContainer>
      )}
      {errorMessage && <p>Error: {errorMessage}</p>}
    </div>
  );
};

export default PostRequestComponent;
