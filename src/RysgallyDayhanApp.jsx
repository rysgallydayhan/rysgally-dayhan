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
      available: "Bar"
    }
  ];

  const pesticides = [
    {
      name: "Agrimec",
      pest: "Trips, örümçek",
      dose: "25 ml / 100 L suw",
      firm: "Syngenta"
    }
  ];

  const sections = [
    "Dökünler",
    "Dermanlar (Pesticid)"
  ];

  // 🌿 Dökün katalogy
  if (section === "Dökünler") {
    const filtered = fertilizers.filter(item =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
      <div style={{ padding: "20px" }}>
        <button onClick={() => setSection(null)}>← Yza</button>
        <h1>Dökün katalogy</h1>

        <input
          placeholder="Dökün gözle..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {filtered.map((item, index) => (
          <div key={index}>
            <h3>{item.name}</h3>
            <p>{item.composition}</p>
            <p>{item.firm}</p>
            <p>{item.use}</p>
          </div>
        ))}
      </div>
    );
  }

  // 🧪 Pestisid maslahat
  if (section === "Dermanlar (Pesticid)") {

    const filtered = pesticides.filter(item =>
      item.pest.toLowerCase().includes(search.toLowerCase())
    );

    return (
      <div style={{ padding: "20px" }}>
        <button onClick={() => setSection(null)}>← Yza</button>
        <h1>Pestisid maslahat</h1>

        <input
          placeholder="Kesel ýa mör-möjek ýaz..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {filtered.map((item, index) => (
          <div key={index}>
            <h3>{item.name}</h3>
            <p>Mör-möjek: {item.pest}</p>
            <p>Doza: {item.dose}</p>
            <p>Firma: {item.firm}</p>
          </div>
        ))}
      </div>
    );
  }

  // Menü
  if (showMenu) {
    return (
      <div style={{ padding: "20px" }}>
        <h1>Bölümler</h1>

        {sections.map(item => (
          <button key={item} onClick={() => setSection(item)}>
            {item}
          </button>
        ))}
      </div>
    );
  }

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>Rysgally Dayhan</h2>
      <button onClick={() => setShowMenu(true)}>Dowam et</button>
    </div>
  );
}
