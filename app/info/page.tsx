export default function Home() {
  return (
    <main>
       <div className="tp">
            <div className="nome">Sucatas</div>
            <div className="tpbt">
                <a href="index.html" className="bt">Home</a>
                <a href="mat.html" className="bt">Calculo de Preço</a>
            </div>
        </div>
        <div id="info">
            <div className="sessao1">
                <div className="titulo">Metal</div>
                <div className="texto">As sucatas metálicas compreendem uma ampla variedade de 
                materiais, como alumínio, cobre, ferro, aço inoxidável e latão. 
                <br></br><div className="metal"><img src="metal.png" alt="metal"></img></div>
                <br></br>Dentre os exemplos de objetos temos: 
                latinhas de comida e bebida, juntas de canos, canos, pregos e parafusos, fios de cobre desencapados e
                algumas peças de veículo. E alguns exemplos que não são reciclados: latas de aerossóis, lata de tinta, 
                pilhas e baterias, clipes e grampos, e esponjas de aço.</div>
                
            </div>
            <div className="sessao2">
                <div className="titulo">Eletrônica</div>
                <div className="texto">Sucatas eletrônicas são compostas por placas de circuito, 
                fios e componentes retirados de dispositivos eletrônicos descartados. 
                Possuem metais preciosos como ouro e prata, além de materiais recuperáveis 
                como cobre e alumínio.
                <div className="elec"><img src="eletronicos.png" alt="elec"></img></div>
                <br><br></br></br>Dentre os exemplos de objetos temos: todos os aparelhos que ligam à tomada ou 
                usam pilhas e baterias, como telemóveis, computadores, televisores, frigoríficos, micro-ondas,
                fios, cabos,  e outros acessórios eletrónicos</div>
            </div>
            <div className="sessao3">
                <div className="titulo">Plásticos</div>
                <div className="texto">Plásticos como PET e ABS são amplamente usados em embalagens, 
                eletrônicos e eletrodomésticos. O PET é comumente utilizado em garrafas de 
                bebidas e embalagens de alimentos. O ABS é encontrado em peças automotivas e eletrônicos.
                <div className="plas"><img src="plastico.png" alt="plastico"></img></div>
                <br><br></br></br>Dentre os exemplos de objetos temos: 
                garrafas de água e refrigerante (PET), frascos de produtos de limpeza, sacos plásticos, tampas de 
                garrafas e frascos, potes de iogurte, embalagens de produtos cosméticos e medicamentos, baldes, 
                brinquedos, lixeiras, Tupperware e alguns tipos de utensílios de cozinha, e PVC. 
                E alguns exemplos que não são reciclados: espumas, esponjas de cozinha, isopor, acoplamentos 
                metálicos, cabos de panelas e tomadas.</div>
                
            </div>
            <div className="sessao4">
                <div className="titulo">Papel e Papelão</div>
                <div className="texto">Papelão ondulado, papel branco e papel misto são componentes 
                comuns nesse grupo. Amplamente usados em embalagens, esses materiais têm uma demanda constante. 
                O papel e papelão devem ser descartados secos e limpos, sem restos de comida.
                <div className="pp"><img src="papel%20e%20papelao.png" alt="pp"></img></div>
                <br><br></br></br>Dentre os exemplos de objetos temos: papel branco, jornais, revistas, cadernos, formulários 
                de computador, fotocópias, rascunhos, envelopes e cartas, caixas de papelão, sacos de papel, 
                cartazes e folhetos. E alguns exemplos que não são reciclados: papéis com resíduos de comida, 
                papel celofane e papel vegetal, papéis encerados ou plastificados, papel carbono, fotografias 
                e fitas adesivas, papéis metalizados, como embalagens de salgadinhos, papel higiênico, lenços 
                de papel e guardanapos.</div>
            </div>
        </div>
    </main>
  );
}
