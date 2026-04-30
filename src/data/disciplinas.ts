export interface Disciplina {
  id: string;
  nome: string;
  professor: string;
  semestre: number;
  descricao: string;
  ementa: string;
  objetivos: string[];
}

export const disciplinas: Disciplina[] = [
  {
    id: "cc101",
    nome: "Introdução à Programação",
    professor: "Prof. Dr. João Silva",
    semestre: 1,
    descricao: "Conceitos fundamentais de programação, lógica computacional e introdução ao pensamento algorítmico.",
    ementa: "Conceitos básicos de programação, variáveis, tipos de dados, estruturas de controle, funções e arrays.",
    objetivos: [
      "Compreender os conceitos fundamentais de programação",
      "Desenvolver habilidades de lógica computacional",
      "Escrever programas simples em linguagem de programação",
      "Entender estruturas de dados básicas"
    ]
},
  {
    id: "cc202",
    nome: "Estrutura de Dados",
    professor: "Prof. Dra. Maria Santos",
    semestre: 2,
    descricao: "Estudo das principais estruturas de dados: listas, pilhas, filas, árvores e grafos.",
    ementa: "Listas encadeadas, pilhas, filas, árvores binárias, tabelas hash, grafos e análise de complexidade.",
    objetivos: [
      "Implementar estruturas de dados fundamentais",
      "Analisar a complexidade de algoritmos",
      "Aplicar estruturas de dados em problemas práticos",
      "Otimizar soluções computacionais"
    ]
  },
  {
    id: "cc303",
    nome: "Banco de Dados",
    professor: "Prof. Dr. Carlos Costa",
    semestre: 3,
    descricao: "Conceitos de banco de dados relacionais, SQL, normalização e design de bancos de dados.",
    ementa: "Modelo relacional, linguagem SQL, normalização, índices, transações e segurança em bancos de dados.",
    objetivos: [
      "Compreender o modelo relacional de dados",
      "Criar e manipular bancos de dados com SQL",
      "Projetar esquemas de dados normalizados",
      "Implementar soluções de armazenamento eficiente"
    ]
  },
  {
    id: "cc404",
    nome: "Programação Web",
    professor: "Prof. Dr. Rafael Oliveira",
    semestre: 4,
    descricao: "Desenvolvimento de aplicações web com HTML, CSS, JavaScript, frameworks modernos e backend.",
    ementa: "Frontend com HTML/CSS/JavaScript, frameworks como React/Vue, backend com Node.js/Express, APIs RESTful.",
    objetivos: [
      "Desenvolver interfaces web responsivas",
      "Criar aplicações full-stack",
      "Implementar APIs RESTful",
      "Utilizar frameworks web modernos"
    ]
  },
  {
    id: "cc505",
    nome: "Engenharia de Software",
    professor: "Prof. Dra. Fernanda Lima",
    semestre: 5,
    descricao: "Processos, metodologias e práticas de desenvolvimento de software em larga escala.",
    ementa: "SDLC, UML, padrões de design, testes, refatoração, integração contínua e metodologias ágeis.",
    objetivos: [
      "Compreender ciclos de vida de desenvolvimento",
      "Aplicar padrões de design",
      "Implementar testes automatizados",
      "Utilizar metodologias ágeis"
    ]
  },
  {
    id: "cc606",
    nome: "Machine Learning",
    professor: "Prof. Dr. Lucas Martins",
    semestre: 6,
    descricao: "Fundamentos de machine learning, algoritmos de aprendizado supervisionado e não-supervisionado.",
    ementa: "Regressão, classificação, clustering, redes neurais, processamento de linguagem natural e visão computacional.",
    objetivos: [
      "Entender algoritmos de machine learning",
      "Implementar modelos de aprendizado",
      "Processar e analisar grandes volumes de dados",
      "Avaliar e otimizar modelos"
    ]
  }
];

export const getDisciplinaById = (id: string): Disciplina | undefined => {
  return disciplinas.find(d => d.id === id);
};

export const getDisciplinasBySemestre = (semestre: number): Disciplina[] => {
  return disciplinas.filter(d => d.semestre === semestre);
};
