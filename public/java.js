document.addEventListener('DOMContentLoaded', () => {
  const MATERIALS = {
    op1: [ // Metal
      "Ferro", "Alumínio", "Cobre", "Latão", "Latas Prensadas"
    ],
    op2: [ // Eletrônicos
      "Baterias"
    ],
    op3: [ // Plástico
      "PET", "Polipropileno", "PVC", "Acrílico"
    ],
    op4: [ // Papel e Papelão
      "Papel Branco",
      "Revistas, Jornais, Envelopes e Cartas",
      "Cadernos, cartazes e folhetos",
      "Caixas de papelão e sacos de papel"
    ],
  };

  const PRECO_KG = {
    // ------------------------------------------------- Metal
    "Ferro": 0.06,
    "Alumínio": 2.10,
    "Cobre": 2.75,
    "Latão": 1.70,
    "Latas Prensadas": 2.50,
    // ------------------------------------------------- Eletrônicos
    "Baterias": 0.35,
    // ------------------------------------------------- Plástico
    "PET": 0.45,
    "Polipropileno": 1.00,
    "PVC": 0.40,
    "Acrílico": 1.50,
    // ------------------------------------------------- Papel e Papelão
    "Papel Branco": 0.60,
    "Revistas, Jornais, Envelopes e Cartas": 0.60,
    "Cadernos, cartazes e folhetos": 0.60,
    "Caixas de papelão e sacos de papel": 0.20,
  };

  const lixoSel = document.getElementById('lixo');
  const pesoInput = document.getElementById('peso');
  const resultadoBox = document.getElementById('resultado') || document.getElementById('preco'); 
  let materialSel = document.getElementById('material');
    
  if (!materialSel) {
    
    const label = document.createElement('div');
    label.className = 'txt';
    label.textContent = 'Selecione o material:';

    materialSel = document.createElement('select');
    materialSel.id = 'material';
    materialSel.disabled = true; 
    materialSel.style.marginBottom = '16px';

    lixoSel.insertAdjacentElement('afterend', document.createElement('br'));
    lixoSel.insertAdjacentElement('afterend', document.createElement('br'));
    lixoSel.insertAdjacentElement('afterend', materialSel);
    lixoSel.insertAdjacentElement('afterend', label);
  }

  const botao = document.querySelector('button[onclick="calcularValor()"]');

  function popularMateriais(tipo) {
    materialSel.innerHTML = ''; // limpa
    const placeholder = document.createElement('option');
    placeholder.value = '';
    placeholder.textContent = 'Selecione';
    materialSel.appendChild(placeholder);

    const lista = MATERIALS[tipo] || [];
    for (const nome of lista) {
      const opt = document.createElement('option');
      opt.value = nome;
      opt.textContent = nome;
      materialSel.appendChild(opt);
    }

    materialSel.disabled = lista.length === 0;
  }

  // Eventos
  lixoSel.addEventListener('change', (e) => {
    popularMateriais(e.target.value);
    if (resultadoBox) resultadoBox.textContent = '';
  });

  if (materialSel) {
    materialSel.addEventListener('change', () => {
      if (resultadoBox) resultadoBox.textContent = '';
    });
  }

  if (pesoInput) {
    pesoInput.addEventListener('input', () => {
      if (resultadoBox) resultadoBox.textContent = '';
    });
  }

  window.calcularValor = function calcularValor() {
    const tipo = lixoSel.value;
    const material = materialSel.value;
    const peso = parseFloat(pesoInput.value.replace(',', '.')); 

    if (!tipo) {
      alert('Selecione o tipo de lixo.');
      return;
    }
    if (!material) {
      alert('Selecione o material.');
      return;
    }
    if (isNaN(peso) || peso <= 0) {
      alert('Informe um peso válido (ex.: 2.5).');
      return;
    }

    const precoKg = PRECO_KG[material];
    if (typeof precoKg !== 'number') {
      alert('Preço do material não encontrado.');
      return;
    }

    const total = precoKg * peso;

    const formatado = total.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    });

    if (resultadoBox) {
      resultadoBox.textContent = `Preço: ${formatado}`;
    } else {
      alert(`Preço: ${formatado}`);
    }
  };
});


