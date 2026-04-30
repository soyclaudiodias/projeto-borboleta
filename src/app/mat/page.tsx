'use client';

import { useState } from "react";
import Link from "next/link";
import "../globals.css";

export default function MatPage() {

  const MATERIALS: Record<string, string[]> = {
    op1: [
      "Ferro",
      "Alumínio",
      "Cobre",
      "Latão",
      "Latas Prensadas"
    ],

    op2: [
      "Baterias"
    ],

    op3: [
      "PET",
      "Polipropileno",
      "PVC",
      "Acrílico"
    ],

    op4: [
      "Papel Branco",
      "Revistas",
      "Cadernos",
      "Papelão"
    ],
  };

  const [tipo, setTipo] = useState("");
  const [material, setMaterial] = useState("");
  const [peso, setPeso] = useState("");
  const [resultado, setResultado] = useState("");
  const [loading, setLoading] = useState(false);

  const materiaisDisponiveis = MATERIALS[tipo] || [];

  const calcularValor = async () => {

    if (!tipo) {
      alert("Selecione o tipo de lixo.");
      return;
    }

    if (!material) {
      alert("Selecione um material.");
      return;
    }

    const pesoNum = parseFloat(
      peso.replace(",", ".")
    );

    if (isNaN(pesoNum) || pesoNum <= 0) {
      alert("Digite um peso válido.");
      return;
    }

    setLoading(true);

    try {

      const response = await fetch(
        "/api/calcular",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            material,
            peso: pesoNum,
          }),
        }
      );

      const data = await response.json();

      const valorFormatado =
        data.total.toLocaleString(
          "pt-BR",
          {
            style: "currency",
            currency: "BRL",
          }
        );

      setResultado(
        `Valor estimado: ${valorFormatado}`
      );

    } catch (error) {

      console.error(error);

      alert(
        "Erro ao calcular o valor."
      );

    } finally {

      setLoading(false);
    }
  };

  return (
    <main>

      <div className="tp">

        <div className="nome">
          Cálculo de Preço
        </div>

        <div className="tpbt">

          <Link href="/" className="bt">
            Home
          </Link>

          <Link href="/info" className="bt">
            Informações
          </Link>

        </div>
      </div>

      <div id="back">

        <div className="txt">
          Tipo de Material
        </div>

        <select
          id="lixo"
          value={tipo}
          onChange={(e) => {
            setTipo(e.target.value);
            setMaterial("");
            setResultado("");
          }}
        >

          <option value="">
            Selecione
          </option>

          <option value="op1">
            Metal
          </option>

          <option value="op2">
            Eletrônicos
          </option>

          <option value="op3">
            Plástico
          </option>

          <option value="op4">
            Papel e Papelão
          </option>

        </select>

        <div className="txt">
          Material
        </div>

        <select
          id="material"
          value={material}
          onChange={(e) => {
            setMaterial(e.target.value);
            setResultado("");
          }}
          disabled={!tipo}
        >

          <option value="">
            Selecione
          </option>

          {materiaisDisponiveis.map((m) => (
            <option key={m} value={m}>
              {m}
            </option>
          ))}

        </select>

        <div className="txt">
          Peso (kg)
        </div>

        <input
          type="number"
          id="peso"
          value={peso}
          onChange={(e) =>
            setPeso(e.target.value)
          }
          placeholder="Ex: 5"
        />

        <div className="cv">
          <button
            onClick={calcularValor}
            disabled={loading}
          >

            {loading
              ? "Calculando..."
              : "Calcular Valor"}

          </button>
        </div>

        {resultado && (
          <div id="resultado">
            {resultado}
          </div>
        )}

      </div>
    </main>
  );
}