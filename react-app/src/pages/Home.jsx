import React from "react";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-green-50 text-center px-6">
      <h1 className="text-4xl md:text-5xl font-bold text-green-700 mb-4">
        Zero Hunger Initiative 🌾
      </h1>
      <p className="max-w-2xl text-gray-700 text-lg mb-6">
        Ending hunger, achieving food security, and improving nutrition through 
        smart agriculture and community-driven solutions.
      </p>
      <a
        href="/donations"
        className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-all"
      >
        Support Our Mission
      </a>
    </section>
  );
}
