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
    professor: "Prof. Programador",
    semestre: 1,
    descricao: "Conceitos fundamentais de programação.",
    ementa: "Conceitos básicos de programação.",
    objetivos: [
      "Compreender os conceitos fundamentais de programação"
    ]
},
  {
    id: "cc202",
    nome: "Estrutura de Dados",
    professor: "Prof. Estrutura Dados",
    semestre: 2,
    descricao: "Estudo das principais estruturas de dados.",
    ementa: "Conceitos de estruturas de dados.",
    objetivos: [
      "Implementar estruturas de dados fundamentais"
    ]
  },
  {
    id: "cc303",
    nome: "Banco de Dados",
    professor: "Prof. Banco Dados",
    semestre: 3,
    descricao: "Conceitos de banco de dados relacionais.",
    ementa: "Conceitos de banco de dados relacionais.",
    objetivos: [
      "Compreender o modelo relacional de dados"
    ]
  },
  {
    id: "cc404",
    nome: "Programação Web",
    professor: "Prof. Web Master",
    semestre: 4,
    descricao: "Desenvolvimento de aplicações web.",
    ementa: "Conceitos de programação web.",
    objetivos: [
      "Desenvolver interfaces web responsivas"
    ]
  },
  {
    id: "cc606",
    nome: "Machine Learning",
    professor: "Prof. Machine Learning",
    semestre: 6,
    descricao: "Fundamentos de machine learning.",
    ementa: "Conceitos de machine learning.",
    objetivos: [
      "Entender algoritmos de machine learning"
    ]
  }
];

export const getDisciplinaById = (id: string): Disciplina | undefined => {
  return disciplinas.find(d => d.id === id);
};

export const getDisciplinasBySemestre = (semestre: number): Disciplina[] => {
  return disciplinas.filter(d => d.semestre === semestre);
};
