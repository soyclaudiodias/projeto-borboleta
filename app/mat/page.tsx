import { useEffect } from "react";

export default function Home() {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "/script.js";
        document.body.appendChild(script);
    }, []);
  return (
    <main>
       <div className="tp">
            <div className="nome">Sucatas</div>
            <div className="tpbt">
                <a href="info.html" className="bt">Informações</a>
                <a href="index.html" className="bt">Home</a>
            </div>
        </div>
        <div id="back">
            <div className="txt">Selecione o tipo de Lixo:</div>
            <select id="lixo" onChange={dropdown}>
                <option value="op1">Metal</option>
                <option value="op2">Eletrônicos</option>
                <option value="op3">Plastíco</option>
                <option value="op4">Papel e Papelão</option>
            </select><br><br></br></br>
                <div className="txt">Selecione o Material:</div>
                <select id="material">
                    <option value="">Selecione um tipo primeiro</option>
            </select>
            <br><br></br></br>
            <div className="txt">Insira o Peso do material (kg):</div>
            <input type="number" id="peso"></input><br><br></br></br>
            <div className="cv"><button onClick={calcularValor}>Calcular Valor</button></div>
            <br><br><br><br></br></br></br></br>
            <div id="resultado"></div>
        </div>
    </main>
  );
}
