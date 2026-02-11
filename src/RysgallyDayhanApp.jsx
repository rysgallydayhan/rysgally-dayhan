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
    },
    {
      name: "NPK 20-20-20",
      composition: "N 20% P 20% K 20%",
      firm: "Haifa",
      use: "Ösüş döwründe",
      available: "Zakaz bilen"
    }
  ];

  const sections = [
    "Dökünler",
    "Dermanlar (Pesticid)",
    "Agronom gurallary (ölçeýji enjam)",
    "Ýyladyşhana enjamlar",
    "Açyk meýdan oba hojalyk enjamlar",
    "Suw we ösümlik analizy",
    "Dökün resept düzüp berme",
    "Agronom maslahaty",
    "Beýlekiler"
  ];

  const filtered = fertilizers.filter(item =>
    item.name.toLowerCase().includes(search.toLowerCase()) ||
    item.composition.toLowerCase().includes(search.toLowerCase()) ||
    item.firm.toLowerCase().includes(search.toLowerCase())
  );

  // 🌿 Dökün katalogy
  if (section === "Dökünler") {
    return (
      <div style={{ padding: "20px" }}>
        <button onClick={() => setSection(null)}>← Yza</button>
        <h1>Dökün katalogy</h1>

        <input
          placeholder="Dökün gözle..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ padding: "8px", marginTop: "10px", width: "250px" }}
        />

        {filtered.map((item, index) => (
          <div key={index} style={{
            border: "1px solid #ccc",
            padding: "15px",
            marginTop: "15px",
            borderRadius: "10px"
          }}>
            <h3>{item.name}</h3>
            <p>Düzümi: {item.composition}</p>
            <p>Firma: {item.firm}</p>
            <p>Ulanylyşy: {item.use}</p>
            <p>Elýeterlilik: {item.available}</p>
          </div>
        ))}
      </div>
    );
  }

  if (section) {
    return (
      <div style={{ padding: "20px" }}>
        <button onClick={() => setSection(null)}>← Yza</button>
        <h1>{section}</h1>
        <p>Bu ýerde maglumatlar görkeziler.</p>
      </div>
    );
  }

  if (showMenu) {
    return (
      <div style={{ padding: "20px" }}>
        <h1>Bölümler</h1>

        {sections.map((item) => (
          <button
            key={item}
            onClick={() => setSection(item)}
            style={{ display: "block", marginTop: "10px" }}
          >
            {item}
          </button>
        ))}
      </div>
    );
  }

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>Rysgally Dayhan</h2>
      <p>Hoş geldiňiz</p>

      <button onClick={() => setShowMenu(true)}>
        Dowam et
      </button>
    </div>
  );
}
