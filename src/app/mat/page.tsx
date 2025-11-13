'use client';

import { useState } from "react";
import Link from "next/link";
import "../globals.css";

export default function MatPage() {
  const MATERIALS: Record<string, string[]> = {
    op1: ["Ferro", "Alumínio", "Cobre", "Latão", "Latas Prensadas"],
    op2: ["Baterias"],
    op3: ["PET", "Polipropileno", "PVC", "Acrílico"],
    op4: [
      "Papel Branco",
      "Revistas, Jornais, Envelopes e Cartas",
      "Cadernos, cartazes e folhetos",
      "Caixas de papelão e sacos de papel",
    ],
  };

  const [tipo, setTipo] = useState("");
  const [material, setMaterial] = useState("");
  const [peso, setPeso] = useState("");
  const [resultado, setResultado] = useState("");
  const [loading, setLoading] = useState(false);

  const materiaisDisponiveis = MATERIALS[tipo] || [];

  // Chama a API route.ts
  const calcularValor = async () => {
    if (!tipo) {
      alert("Selecione o tipo de lixo.");
      return;
    }
    if (!material) {
      alert("Selecione o material.");
      return;
    }
    const pesoNum = parseFloat(peso.replace(",", "."));
    if (isNaN(pesoNum) || pesoNum <= 0) {
      alert("Informe um peso válido (ex.: 2.5).");
      return;
    }

    setLoading(true);
    setResultado("");

    try {
      const response = await fetch("/api/calcular", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ material, peso: pesoNum }),
      });

      const data = await response.json();
      const formatado = data.total.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      });

      setResultado(`Preço: ${formatado}`);
    } catch (err) {
      console.error(err);
      alert("Erro ao calcular o valor. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main>
      <div className="tp">
        <div className="nome">Cálculo de Preço</div>
        <div className="tpbt">
          <Link href="/" className="bt">Home</Link>
          <Link href="/info" className="bt">Informações</Link>
        </div>
      </div>

      <div id="back">
        <div className="txt">Selecione o tipo de Lixo:</div>
        <select
          id="lixo"
          value={tipo}
          onChange={(e) => {
            setTipo(e.target.value);
            setMaterial("");
            setResultado("");
          }}
        >
          <option value="">Selecione</option>
          <option value="op1">Metal</option>
          <option value="op2">Eletrônicos</option>
          <option value="op3">Plástico</option>
          <option value="op4">Papel e Papelão</option>
        </select>

        <br /><br />

        <div className="txt">Selecione o Material:</div>
        <select
          id="material"
          value={material}
          onChange={(e) => {
            setMaterial(e.target.value);
            setResultado("");
          }}
          disabled={!tipo}
        >
          <option value="">Selecione um tipo primeiro</option>
          {materiaisDisponiveis.map((m) => (
            <option key={m} value={m}>{m}</option>
          ))}
        </select>

        <br /><br />

        <div className="txt">Insira o Peso do material (kg):</div>
        <input
          type="number"
          id="peso"
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
        />

        <br /><br />

        <div className="cv">
          <button onClick={calcularValor} disabled={loading}>
            {loading ? "Calculando..." : "Calcular Valor"}
          </button>
        </div>

        <br /><br /><br />

        <div id="resultado">{resultado}</div>
      </div>
    </main>
  );
}
