import Link from "next/link";

export default function Home() {
  return (
    <main>

      <div className="topo">
        <div className="nome">Sucatas</div>
      </div>

      <div id="corpo">

        <img
          src="/garbage.png"
          alt="Sucata"
        />

        <div className="hero">

          <h1>
            Reciclagem Inteligente
          </h1>

          <p>
            Descubra informações sobre
            materiais recicláveis e
            calcule o valor estimado
            da sua sucata.
          </p>

          <div id="menu">

            <Link
              href="/info"
              className="botao"
            >
              Informações
            </Link>

            <Link
              href="/mat"
              className="botao"
            >
              Calcular Preço
            </Link>

          </div>

        </div>

      </div>

    </main>
  );
}