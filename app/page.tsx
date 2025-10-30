export default function Home() {
  return (
    <main>
       <div className="topo">
            <div className="nome">Sucatas</div>
        </div>
        <div id="corpo">
            <div id="menu">
                <a href="info.html" className="botao">Informações</a>
                <a href="mat.html" className="botao">Calculo de Preço</a>
            </div>
            <img src="garbage.png" alt="lixo"></img> 
        </div>
    </main>
  );
}
