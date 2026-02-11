import React, { useState } from "react";

export default function RysgallyDayhanApp() {
  const [showMenu, setShowMenu] = useState(false);
  const [section, setSection] = useState(null);
  const [search, setSearch] = useState("");

  const fertilizers = [
    {
      name: "Calboron",
      composition: "Ca 10% + B 1%",
      firm: "Yara",
      use: "Pomidor üçin kalsiý ýetmezçiligi",
      available: "Bar",
    },
    {
      name: "NPK 20-20-20",
      composition: "N 20% P 20% K 20%",
      firm: "Haifa",
      use: "Ösüş döwründe",
      available: "Zakaz bilen",
    },
  ];

  const pesticides = [
    {
      name: "Agrimec",
      pest: "Trips, örümçek",
      dose: "25 ml / 100 L suw",
      firm: "Syngenta",
    },
  ];

  const sections = [
    "Dökünler",
    "Dermanlar (Pesticid)",
    "Agronom gurallary",
    "Ýyladyşhana enjamlar",
    "Analiz hyzmatlary",
  ];

  // ===== Dökün katalogy =====
  if (section === "Dökünler") {
    const filtered = fertilizers.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 p-6">
        <button
          onClick={() => setSection(null)}
          className="mb-6 bg-white px-4 py-2 rounded-xl shadow"
        >
          ← Yza
        </button>

        <h1 className="text-3xl font-bold mb-4">🌿 Dökün katalogy</h1>

        <input
          placeholder="Dökün gözle..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="p-3 rounded-xl shadow w-full max-w-md mb-6"
        />

        <div className="grid md:grid-cols-2 gap-4">
          {filtered.map((item, index) => (
            <div
              key={index}
              className="bg-white p-5 rounded-2xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
              <p>🧪 {item.composition}</p>
              <p>🏢 {item.firm}</p>
              <p>🌱 {item.use}</p>
              <p className="font-medium text-green-600">
                {item.available}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // ===== Pestisid =====
  if (section === "Dermanlar (Pesticid)") {
    const filtered = pesticides.filter((item) =>
      item.pest.toLowerCase().includes(search.toLowerCase())
    );

    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 p-6">
        <button
          onClick={() => setSection(null)}
          className="mb-6 bg-white px-4 py-2 rounded-xl shadow"
        >
          ← Yza
        </button>

        <h1 className="text-3xl font-bold mb-4">🧪 Pestisid maslahat</h1>

        <input
          placeholder="Kesel ýa mör-möjek ýaz..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="p-3 rounded-xl shadow w-full max-w-md mb-6"
        />

        <div className="grid md:grid-cols-2 gap-4">
          {filtered.map((item, index) => (
            <div
              key={index}
              className="bg-white p-5 rounded-2xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
              <p>🐛 {item.pest}</p>
              <p>⚖️ {item.dose}</p>
              <p>🏢 {item.firm}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // ===== Menü =====
  if (showMenu) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-100 to-green-200 flex flex-col items-center justify-center p-6">
        <h1 className="text-4xl font-bold mb-8">🌿 Bölümler</h1>

        <div className="grid gap-4 w-full max-w-md">
          {sections.map((item) => (
            <button
              key={item}
              onClick={() => setSection(item)}
              className="bg-white p-4 rounded-2xl shadow hover:shadow-lg transition text-lg font-medium"
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    );
  }

  // ===== Baş sahypa =====
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-200 to-green-400 flex items-center justify-center">
      <div className="bg-white p-10 rounded-3xl shadow-xl text-center">
        <h2 className="text-3xl font-bold mb-3">🌿 Rysgally Dayhan</h2>
        <p className="mb-6 text-gray-600">Hoş geldiňiz</p>

        <button
          onClick={() => setShowMenu(true)}
          className="bg-green-600 text-white px-6 py-3 rounded-xl shadow hover:bg-green-700 transition"
        >
          Dowam et
        </button>
      </div>
    </div>
  );
}
