'use client';

import { useEffect, useState } from "react";
import Link from "next/link";

type Material = {
  id: number;
  nome: string;
  preco: number;
  tipo: string;
};

export default function InfoPage() {

  const [materiais, setMateriais] =
    useState<Material[]>([]);

  useEffect(() => {

    fetch("/api/materiais")
      .then((res) => res.json())
      .then((data) => {
        setMateriais(data);
      });

  }, []);

  return (
    <main>

      <div className="tp">

        <div className="nome">
          Sucatas
        </div>

        <div className="tpbt">

          <Link href="/" className="bt">
            Home
          </Link>

          <Link href="/mat" className="bt">
            Calcular Preço
          </Link>

        </div>
      </div>

      <div id="info">

        <section className="sessao1">

          <div className="texto">

            <div className="titulo">
              Metal
            </div>

            As sucatas metálicas compreendem
            materiais como alumínio, cobre,
            ferro, aço inoxidável e latão.

            <br /><br />

            Exemplos:
            latinhas, canos, parafusos,
            fios de cobre e peças automotivas.

            <br /><br />

            Alguns materiais não recicláveis:
            latas de tinta, aerossóis,
            pilhas e esponjas de aço.

          </div>

          <div className="metal">
            <img
              src="/metal.png"
              alt="metal"
            />
          </div>

        </section>

        <section className="sessao2">

          <div className="texto">

            <div className="titulo">
              Eletrônicos
            </div>

            Sucatas eletrônicas possuem
            placas, fios e componentes
            retirados de dispositivos.

            <br /><br />

            Contêm materiais valiosos como
            cobre, alumínio, ouro e prata.

            <br /><br />

            Exemplos:
            computadores, celulares,
            televisões, micro-ondas,
            cabos e acessórios.

          </div>

          <div className="elec">
            <img
              src="/eletronicos.png"
              alt="eletronicos"
            />
          </div>

        </section>

        <section className="sessao3">

          <div className="texto">

            <div className="titulo">
              Plásticos
            </div>

            Plásticos como PET, PVC e ABS
            são amplamente recicláveis.

            <br /><br />

            Exemplos:
            garrafas, embalagens,
            brinquedos, baldes e recipientes.

            <br /><br />

            Não recicláveis:
            esponjas, isopor e
            plásticos metalizados.

          </div>

          <div className="plas">
            <img
              src="/plastico.png"
              alt="plastico"
            />
          </div>

        </section>

        <section className="sessao4">

          <div className="texto">

            <div className="titulo">
              Papel e Papelão
            </div>

            Papéis e papelões devem estar
            secos e limpos para reciclagem.

            <br /><br />

            Exemplos:
            jornais, revistas, caixas,
            cadernos e envelopes.

            <br /><br />

            Não recicláveis:
            papel higiênico,
            papéis engordurados
            e fotografias.

          </div>

          <div className="pp">
            <img
              src="/papel e papelao.png"
              alt="papel"
            />
          </div>

        </section>

      </div>

      <div className="listaMateriais">

        <h1>
          Materiais da API
        </h1>

        {materiais.map((m) => (

          <div
            key={m.id}
            className="cardMaterial"
          >

            <h2>
              {m.nome}
            </h2>

            <p>
              Tipo: {m.tipo}
            </p>

            <p>
              Preço médio:
              R$ {m.preco}/kg
            </p>

            <Link
              href={`/material/${m.nome}`}
              className="bt"
            >
              Ver Material
            </Link>

          </div>

        ))}

      </div>

    </main>
  );
}