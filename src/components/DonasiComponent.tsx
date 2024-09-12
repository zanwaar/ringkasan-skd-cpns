import React, { useState } from "react";

const DonasiComponent: React.FC = () => {
  const [amount, setAmount] = useState<number>(2000); // Default amount
  const [qrisUrl, setQrisUrl] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false); // State untuk menampilkan proses
  const [error, setError] = useState<string | null>(null); // State untuk error
  const [customAmount, setCustomAmount] = useState<number | "">(""); // Custom amount

  const handleAmountChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = Number(event.target.value);
    setAmount(value);
    setCustomAmount(""); // Reset custom amount when selecting predefined amount
  };

  const handleCustomAmountChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;
    setCustomAmount(value === "" ? "" : Number(value));
  };

  const handleDonate = async () => {
    const donationAmount = customAmount === "" ? amount : customAmount;
    setAmount(donationAmount); // Update amount with custom or preset value

    setLoading(true); // Set loading sebelum melakukan fetch
    setError(null); // Reset error state

    try {
      const response = await fetch("https://funpice.fun/api/generate-qris", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: donationAmount }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setQrisUrl(data.qris_url);
    } catch (error) {
      console.error("Error:", error);
      setError("Terjadi kesalahan. Silakan coba lagi.");
    } finally {
      setLoading(false); // Set loading ke false setelah proses selesai
    }
  };

  return (
    <div>
      <div
        style={{
          marginBottom: "20px",
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <select
          onChange={handleAmountChange}
          value={customAmount === "" ? amount : ""}
          style={{
            padding: "10px",
            borderRadius: "8px",
            border: "1px solid #ddd",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          <option value={2000}>Rp 2.000</option>
          <option value={5000}>Rp 5.000</option>
          <option value={10000}>Rp 10.000</option>
          <option value={25000}>Rp 25.000</option>
        </select>

        <input
          type="number"
          value={customAmount}
          onChange={handleCustomAmountChange}
          placeholder="Nominal lain"
          style={{
            padding: "10px",
            borderRadius: "8px",
            border: "1px solid #ddd",
            fontSize: "16px",
            width: "150px",
          }}
        />

      </div>
        <button
          onClick={handleDonate}
          disabled={loading}
          style={{
            backgroundColor: "#4CAF50",
            color: "white",
            padding: "10px 20px",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          {loading ? "Proses..." : "Donasi"}
        </button>

      {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}
      {qrisUrl && (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <p style={{ fontSize: "18px", marginBottom: "10px" }}>
            Silakan pindai kode QR di bawah ini untuk menyelesaikan donasi Anda:
          </p>
          <img
            src={qrisUrl}
            alt="QRIS Code"
            style={{ maxWidth: "50%", height: "auto", borderRadius: "8px" }}
          />
        </div>
      )}
    </div>
  );
};

export default DonasiComponent;
