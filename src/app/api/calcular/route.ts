export async function POST(req: Request) {
  const { material, peso } = await req.json();

  const PRECO_KG: Record<string, number> = {
    // ------------------------------------------------- Metal
    Ferro: 0.06,
    Alumínio: 2.10,
    Cobre: 2.75,
    Latão: 1.70,
    "Latas Prensadas": 2.50,
    // ------------------------------------------------- Eletrônicos
    Baterias: 0.35,
    // ------------------------------------------------- Plástico
    PET: 0.45,
    Polipropileno: 1.00,
    PVC: 0.40,
    Acrílico: 1.50,
    // ------------------------------------------------- Papel e Papelão
    "Papel Branco": 0.60,
    "Revistas, Jornais, Envelopes e Cartas": 0.60,
    "Cadernos, cartazes e folhetos": 0.60,
    "Caixas de papelão e sacos de papel": 0.20,
  };

  const precoKg = PRECO_KG[material];
  if (typeof precoKg !== "number") {
    return Response.json({ error: "Material não encontrado" }, { status: 400 });
  }

  const total = precoKg * peso;
  return Response.json({ total });
}
