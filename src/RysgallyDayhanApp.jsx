import React, { useState } from "react";

export default function RysgallyDayhanApp() {
  const [showMenu, setShowMenu] = useState(false);
  const [section, setSection] = useState(null);

  const sections = [
    "Dökünler",
    "Dermanlar (Pesticid)",
    "Agronom gurallary (ölçeýji enjam)",
    "Ýyladyşhana enjamlar",
    "Açyk meýdan oba hojalyk enjamlar",
    "Suw we ösümlik analizy",
    "Dökün resept düzüp berme",
    "Agronom maslahaty",
    "Beýlekiler",
  ];

  // Section sahypalary
  if (section) {
    return (
      <div style={{ padding: "20px", fontFamily: "Arial" }}>
        <button
          onClick={() => setSection(null)}
          style={{ marginBottom: "20px" }}
        >
          ← Yza
        </button>

        <h1>{section}</h1>
        <p>Bu ýerde {section} boýunça maglumatlar görkeziler.</p>
      </div>
    );
  }

  // Menu sahypa
  if (showMenu) {
    return (
      <div style={{ padding: "20px", fontFamily: "Arial" }}>
        <h1>Rysgally Dayhan Bölümler 🌿</h1>

        <div style={{ display: "flex", flexDirection: "column", gap: "10px", maxWidth: "400px" }}>
          {sections.map((item) => (
            <button
              key={item}
              onClick={() => setSection(item)}
              style={{ padding: "10px", cursor: "pointer" }}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    );
  }

  // Baş sahypa
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <div
        style={{
          border: "1px solid #ddd",
          borderRadius: "10px",
          padding: "20px",
          maxWidth: "400px",
          margin: "auto",
          textAlign: "center",
        }}
      >
        <h2>Rysgally Dayhan</h2>
        <p>Hoş geldiňiz!</p>

        <button
          onClick={() => setShowMenu(true)}
          style={{
            padding: "10px 20px",
            backgroundColor: "green",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          Dowam et
        </button>
      </div>
    </div>
  );
}
