import React, { useState } from "react";

export default function RysgallyDayhanApp() {
  const [showMenu, setShowMenu] = useState(false);

  if (showMenu) {
    return (
      <div style={{ padding: "20px", fontFamily: "Arial" }}>
        <h1>Rysgally Dayhan Bölümler 🌿</h1>

        <ul style={{ lineHeight: "2", fontSize: "18px" }}>
          <li>🌱 Dökünler</li>
          <li>🧪 Dermanlar (Pesticid)</li>
          <li>📏 Agronom gurallary (ölçeýji enjam)</li>
          <li>🏡 Ýyladyşhana enjamlar</li>
          <li>🚜 Açyk meýdan oba hojalyk enjamlar</li>
          <li>💧 Suw we ösümlik analizy</li>
          <li>🧾 Dökün resept düzüp berme</li>
          <li>👨‍🌾 Agronom maslahaty</li>
          <li>📦 Beýlekiler</li>
        </ul>
      </div>
    );
  }

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <div
        style={{
          border: "1px solid #ddd",
          borderRadius: "10px",
          padding: "20px",
          maxWidth: "400px",
          margin: "auto",
          textAlign: "center"
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
            cursor: "pointer"
          }}
        >
          Dowam et
        </button>
      </div>
    </div>
  );
}
