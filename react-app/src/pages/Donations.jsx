import React, { useState } from "react";

export default function Donations() {
  const [donationAmount, setDonationAmount] = useState("");
  const [totalDonations, setTotalDonations] = useState(2500); // starting total
  const [message, setMessage] = useState("");

  const handleDonate = (e) => {
    e.preventDefault();

    const amount = parseFloat(donationAmount);
    if (!amount || amount <= 0) {
      setMessage("⚠️ Please enter a valid donation amount.");
      return;
    }

    setTotalDonations(totalDonations + amount);
    setDonationAmount("");
    setMessage("🎉 Thank you for your generous donation!");
  };

  return (
    <section className="min-h-screen bg-green-50 flex flex-col items-center justify-center px-6">
      <h2 className="text-3xl font-bold text-green-700 mb-4">
        Make a Donation ❤️
      </h2>

      <p className="text-gray-700 mb-6 max-w-md text-center">
        Your support helps us feed families and empower farmers.
      </p>

      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
        <form onSubmit={handleDonate} className="flex flex-col space-y-4">
          <input
            type="number"
            value={donationAmount}
            onChange={(e) => setDonationAmount(e.target.value)}
            placeholder="Enter donation amount (USD)"
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          <button
            type="submit"
            className="bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
          >
            Donate
          </button>
        </form>

        {message && (
          <p className="mt-4 text-green-700 font-medium text-center">
            {message}
          </p>
        )}
      </div>

      <div className="mt-8 text-center">
        <h3 className="text-xl font-semibold text-gray-800">
          🌾 Total Donations:{" "}
          <span className="text-green-700">${totalDonations.toFixed(2)}</span>
        </h3>
      </div>
    </section>
  );
}
