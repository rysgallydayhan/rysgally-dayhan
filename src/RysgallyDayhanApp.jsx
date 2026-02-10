import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Leaf, Bug, FlaskConical, Phone, Info } from "lucide-react";

// Dökünler we pestisidler
const fertilizers = [
  {
    name: "Calboron",
    composition: "Ca: 10%, B: 1%",
    use: "Pomidor üçin kalsiý ýetmezçiligi wagty",
    firm: "Yara",
    available: true,
    volume: "1 litr",
  },
  {
    name: "NPK 20-20-20",
    composition: "N: 20%, P: 20%, K: 20%",
    use: "Ýeralma üçin ösüş döwründe",
    firm: "Haifa",
    available: false,
    volume: "5 kg",
  },
];

const pesticides = [
  {
    name: "Agrimec",
    active: "Abamectin 18 g/l",
    pest: "Gyzyl örümçek, trips",
    dosage: "25 ml / 100 l suw",
    firm: "Syngenta",
    available: true,
    volume: ["250 ml", "500 ml", "1 litr"],
    effect:
      "Trips we örümçeklere garşy täsirli. Täsirli maddasy ösümlige geçýär.",
  },
];

export default function RysgallyDayhanApp() {
  const [fertSearch, setFertSearch] = useState("");
  const [pestSearch, setPestSearch] = useState("");
  const [smartSearch, setSmartSearch] = useState("");

  const filteredFertilizers = fertilizers.filter((item) =>
    (item.name + item.composition + item.use)
      .toLowerCase()
      .includes(fertSearch.toLowerCase())
  );

  const filteredPesticides = pesticides.filter((item) =>
    (item.name + item.pest + item.effect)
      .toLowerCase()
      .includes(pestSearch.toLowerCase())
  );

  const smartResults = pesticides.filter((item) =>
    (item.pest + item.effect)
      .toLowerCase()
      .includes(smartSearch.toLowerCase())
  );

  return (
    <div className="p-6 max-w-6xl mx-auto space-y-10">
      <h1 className="text-3xl font-bold mb-2">🌿 Rysgally Daýhan</h1>

      {/* Dökün katalogy */}
      <section>
        <h2 className="text-2xl font-semibold flex items-center gap-2">
          <Leaf /> Dökün katalogy
        </h2>
        <div className="flex items-center gap-2 my-4">
          <Input
            placeholder="Dökün ady ýa düzüm bilen gözle..."
            className="flex-1"
            value={fertSearch}
            onChange={(e) => setFertSearch(e.target.value)}
          />
          <Button>
            <Search className="mr-2 h-4 w-4" />Gözle
          </Button>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {filteredFertilizers.map((item, i) => (
            <Card key={i} className="rounded-2xl shadow-md">
              <CardContent className="p-4 space-y-2">
                <h2 className="text-xl font-semibold">{item.name}</h2>
                <p>
                  <strong>Düzümi:</strong> {item.composition}
                </p>
                <p>
                  <strong>Ulanylyşy:</strong> {item.use}
                </p>
                <p>
                  <strong>Firma:</strong> {item.firm}
                </p>
                <p>
                  <strong>Gaplaýyş:</strong> {item.volume}
                </p>
                <p>
                  <strong>Elýeterlilik:</strong>{" "}
                  {item.available ? "Bar" : "Zakaz bilen (15 gün)"}
                </p>
                <Button size="sm">Zakaz et</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Pestisid katalogy */}
      <section>
        <h2 className="text-2xl font-semibold flex items-center gap-2">
          <Bug /> Pestisid katalogy
        </h2>
        <div className="flex items-center gap-2 my-4">
          <Input
            placeholder="Mör-möjek ýa kesel boýunça gözle..."
            className="flex-1"
            value={pestSearch}
            onChange={(e) => setPestSearch(e.target.value)}
          />
          <Button>
            <Search className="mr-2 h-4 w-4" />Gözle
          </Button>
        </div>
        <div className="grid md:grid-cols-2 gap-4 mt-4">
          {filteredPesticides.map((item, i) => (
            <Card key={i} className="rounded-2xl shadow-md">
              <CardContent className="p-4 space-y-2">
                <h2 className="text-xl font-semibold">{item.name}</h2>
                <p>
                  <strong>Aktiw maddasy:</strong> {item.active}
                </p>
                <p>
                  <strong>Täsir edýän mör-möjek:</strong> {item.pest}
                </p>
                <p>
                  <strong>Dozasy:</strong> {item.dosage}
                </p>
                <p>
                  <strong>Täsiri:</strong> {item.effect}
                </p>
                <p>
                  <strong>Firma:</strong> {item.firm}
                </p>
                <p>
                  <strong>Gaplaýyş görnüşi:</strong> {item.volume.join(", ")}
                </p>
                <p>
                  <strong>Elýeterlilik:</strong>{" "}
                  {item.available ? "Bar" : "Zakaz bilen (15 gün)"}
                </p>
                <Button size="sm">Zakaz et</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Akylly maslahat */}
      <section>
        <h2 className="text-2xl font-semibold flex items-center gap-2">
          <Info /> Maslahat beriji
        </h2>
        <div className="bg-green-50 p-4 rounded-xl shadow-inner space-y-4">
          <Input
            placeholder="Meselem: trips bar, pomidor saralýar..."
            value={smartSearch}
            onChange={(e) => setSmartSearch(e.target.value)}
          />

          <div className="grid md:grid-cols-2 gap-4">
            {smartResults.map((item, i) => (
              <Card key={i} className="rounded-2xl shadow-md">
                <CardContent className="p-4 space-y-2">
                  <h2 className="text-xl font-semibold">{item.name}</h2>
                  <p>
                    <strong>Maslahat:</strong> {item.effect}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
