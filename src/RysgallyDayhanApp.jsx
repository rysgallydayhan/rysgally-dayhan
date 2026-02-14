import React, { useState } from "react";

export default function RysgallyDayhanApp() {
  const [page, setPage] = useState("home");

  const fertilizers = [
    { name: "Urea 46%", composition: "46% Azot", firm: "Yara", pack: "50 kg" },
    { name: "NPK 20-20-20", composition: "20-20-20", firm: "Haifa", pack: "25 kg" },
    { name: "Calboron", composition: "Ca 10% + B 1%", firm: "Yara", pack: "1 L" },
  ];

  const pesticides = [
    { name: "Agrimec", composition: "18 g/l Abamectin", firm: "Bayer", pack: "250 ml" },
    { name: "Actara", composition: "25% Thiamethoxam", firm: "Syngenta", pack: "100 g" },
    { name: "Confidor", composition: "Imidacloprid", firm: "Bayer", pack: "250 ml" },
  ];

  // ===== DÖKÜNLER =====
  if (page === "fertilizers") {
    return (
      <div className="min-h-screen bg-green-50 p-6">
        <button onClick={() => setPage("menu")} className="mb-6 bg-white px-4 py-2 rounded-xl shadow">← Yza</button>
        <h1 className="text-3xl font-bold mb-6">🌿 Dökünler</h1>

        <div className="overflow-x-auto bg-white rounded-2xl shadow">
          <table className="w-full text-left">
            <thead className="bg-green-200">
              <tr>
                <th className="p-3">Ady</th>
                <th className="p-3">Düzümi</th>
                <th className="p-3">Firmasy</th>
                <th className="p-3">Gaplanylşy</th>
              </tr>
            </thead>
            <tbody>
              {fertilizers.map((item, i) => (
                <tr key={i} className="border-t">
                  <td className="p-3">{item.name}</td>
                  <td className="p-3">{item.composition}</td>
                  <td className="p-3">{item.firm}</td>
                  <td className="p-3">{item.pack}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-xl font-semibold mt-8 mb-3">Spisok:</h2>
        <ul className="list-disc pl-6">
          {fertilizers.map((item, i) => (
            <li key={i}>{item.name}</li>
          ))}
        </ul>
      </div>
    );
  }

  // ===== PESTISID =====
  if (page === "pesticides") {
    return (
      <div className="min-h-screen bg-blue-50 p-6">
        <button onClick={() => setPage("menu")} className="mb-6 bg-white px-4 py-2 rounded-xl shadow">← Yza</button>
        <h1 className="text-3xl font-bold mb-6">🧪 Dermanlar</h1>

        <div className="overflow-x-auto bg-white rounded-2xl shadow">
          <table className="w-full text-left">
            <thead className="bg-blue-200">
              <tr>
                <th className="p-3">Ady</th>
                <th className="p-3">Düzümi</th>
                <th className="p-3">Firmasy</th>
                <th className="p-3">Gaplanylşy</th>
              </tr>
            </thead>
            <tbody>
              {pesticides.map((item, i) => (
                <tr key={i} className="border-t">
                  <td className="p-3">{item.name}</td>
                  <td className="p-3">{item.composition}</td>
                  <td className="p-3">{item.firm}</td>
                  <td className="p-3">{item.pack}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-xl font-semibold mt-8 mb-3">Spisok:</h2>
        <ul className="list-disc pl-6">
          {pesticides.map((item, i) => (
            <li key={i}>{item.name}</li>
          ))}
        </ul>
      </div>
    );
  }

  // ===== MENU =====
  if (page === "menu") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-100 to-green-300 flex flex-col items-center justify-center p-6">
        <h1 className="text-4xl font-bold mb-10">Bölümler</h1>
        <div className="grid gap-6 w-full max-w-md">
          <button onClick={() => setPage("fertilizers")} className="bg-white p-5 rounded-2xl shadow hover:shadow-xl text-lg font-medium">🌿 Dökünler</button>
          <button onClick={() => setPage("pesticides")} className="bg-white p-5 rounded-2xl shadow hover:shadow-xl text-lg font-medium">🧪 Dermanlar</button>
        </div>
      </div>
    );
  }

  // ===== HOME =====
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-300 to-green-500 flex items-center justify-center">
      <div className="bg-white p-12 rounded-3xl shadow-2xl text-center">
        <h1 className="text-4xl font-bold mb-4">🌿 Rysgally Dayhan</h1>
        <p className="text-lg text-gray-600 mb-8">Netijeli çözgüt – Bol hasyl</p>
        <button
          onClick={() => setPage("menu")}
          className="bg-green-600 text-white px-8 py-3 rounded-xl shadow hover:bg-green-700 transition text-lg"
        >
          Dowam et
        </button>
      </div>
    </div>
  );
}
