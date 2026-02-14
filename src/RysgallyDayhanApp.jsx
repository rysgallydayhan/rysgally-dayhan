import React, { useState } from "react";

export default function RysgallyDayhanApp() {
  const [page, setPage] = useState("home");
  const [search, setSearch] = useState("");

  const fertilizers = [
    { name: "Urea 46%", type: "Azotly", firm: "Yara", info: "Ýaprak ösüşini güýçlendirýär" },
    { name: "NPK 20-20-20", type: "Kompleks", firm: "Haifa", info: "Deňagramly ösüş üçin" },
    { name: "Calboron", type: "Mikroelement", firm: "Yara", info: "Kalsiý ýetmezçiligi üçin" },
    { name: "MAP 12-61-0", type: "Fosforly", firm: "ICL", info: "Kök ösüşini güýçlendirýär" },
  ];

  const pesticides = [
    { name: "Agrimec", pest: "Trips, örümçek", firm: "Syngenta" },
    { name: "Actara", pest: "Şire", firm: "Syngenta" },
    { name: "Confidor", pest: "Ak ganat", firm: "Bayer" },
  ];

  const filteredFertilizers = fertilizers.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  const filteredPesticides = pesticides.filter((item) =>
    item.pest.toLowerCase().includes(search.toLowerCase())
  );

  // ===== DÖKÜNLER =====
  if (page === "fertilizers") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-200 p-6">
        <button onClick={() => setPage("menu")} className="mb-6 bg-white px-4 py-2 rounded-xl shadow">← Yza</button>
        <h1 className="text-3xl font-bold mb-4">🌿 Dökünler</h1>

        <input
          placeholder="Dökün gözle..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="p-3 rounded-xl shadow w-full max-w-md mb-6"
        />

        <div className="grid md:grid-cols-2 gap-4">
          {filteredFertilizers.map((item, i) => (
            <div key={i} className="bg-white p-5 rounded-2xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold">{item.name}</h3>
              <p>📦 Görnüşi: {item.type}</p>
              <p>🏢 Firma: {item.firm}</p>
              <p className="text-green-600">{item.info}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // ===== PESTISID =====
  if (page === "pesticides") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-200 p-6">
        <button onClick={() => setPage("menu")} className="mb-6 bg-white px-4 py-2 rounded-xl shadow">← Yza</button>
        <h1 className="text-3xl font-bold mb-4">🧪 Dermanlar</h1>

        <input
          placeholder="Kesel ýa mör-möjek ýaz..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="p-3 rounded-xl shadow w-full max-w-md mb-6"
        />

        <div className="grid md:grid-cols-2 gap-4">
          {filteredPesticides.map((item, i) => (
            <div key={i} className="bg-white p-5 rounded-2xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold">{item.name}</h3>
              <p>🐛 Täsir edýär: {item.pest}</p>
              <p>🏢 Firma: {item.firm}</p>
            </div>
          ))}
        </div>
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
          <button className="bg-white p-5 rounded-2xl shadow text-lg font-medium">⚙️ Agronom gurallary</button>
          <button className="bg-white p-5 rounded-2xl shadow text-lg font-medium">💧 Analiz hyzmaty</button>
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
