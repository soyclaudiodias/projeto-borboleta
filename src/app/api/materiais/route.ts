import { NextResponse } from "next/server";

const materiais = [
  {
    id: 1,
    nome: "Cobre",
    preco: 35,
    tipo: "Metal"
  },

  {
    id: 2,
    nome: "Alumínio",
    preco: 8,
    tipo: "Metal"
  },

  {
    id: 3,
    nome: "PET",
    preco: 4,
    tipo: "Plástico"
  },

  {
    id: 4,
    nome: "Papelão",
    preco: 2,
    tipo: "Papel"
  }
];

export async function GET() {
  return NextResponse.json(materiais);
}