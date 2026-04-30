# Sucatas - Reciclagem Inteligente

Uma aplicação web moderna para descobrir informações sobre materiais recicláveis e calcular o valor estimado de sucatas.

## Integrantes do Projeto

- Cláudio Dias - 10403569
- Guillermo Kuznietz - 10410134
- Matheus Mustaro - 10409259

## Sobre o Projeto

**Sucatas** é uma plataforma interativa que ajuda usuários a:
- Conhecer mais sobre diferentes tipos de materiais recicláveis
- Calcular o valor estimado de suas sucatas com base no tipo de material e peso
- Incentivar práticas de reciclagem e sustentabilidade

## Tecnologias Utilizadas

- **Next.js** 16 - Framework React com SSR e otimizações
- **React** 19 - Biblioteca para construção de interfaces
- **TypeScript** - Tipagem estática para maior segurança
- **Tailwind CSS** - Utilidades CSS para estilização responsiva
- **Node.js** - Runtime JavaScript

## Estrutura do Projeto

```
src/
├── app/
│   ├── page.tsx              # Página inicial (Home)
│   ├── info/
│   │   └── page.tsx          # Informações sobre materiais
│   ├── mat/
│   │   └── page.tsx          # Calculadora de preço de sucatas
│   ├── material/
│   │   └── [id]/
│   │       └── pages.tsx     # Detalhes de um material específico
│   ├── api/
│   │   ├── calcular/
│   │   │   └── route.ts      # API para calcular valor de sucatas
│   │   └── materiais/
│   │       └── route.ts      # API para listar materiais
│   ├── globals.css           # Estilos globais
│   └── layout.tsx            # Layout padrão das páginas
├── public/                   # Arquivos estáticos (imagens)
├── package.json
├── tsconfig.json
└── next.config.ts
```

## Páginas Principais

### 1. **Home** (`/`)
- Página inicial com apresentação do projeto
- Links de navegação para as demais seções
- Design atrativo com imagem de fundo

### 2. **Informações** (`/info`)
- Catálogo de materiais recicláveis
- Categorias: Metais, Eletrônicos, Plásticos, Papel
- Descrição de cada material e exemplos de uso

### 3. **Calcular Preço** (`/mat`)
- Interface intuitiva com dropdowns para seleção
- Seleção de tipo de material
- Campo para entrada do peso
- Cálculo em tempo real do valor estimado em BRL


## Materiais Suportados

### Metais
- Ferro, Alumínio, Cobre, Latão, Latas Prensadas

### Eletrônicos
- Baterias

### Plásticos
- PET, Polipropileno, PVC, Acrílico

### Papel
- Papel Branco, Revistas/Jornais, Cadernos, Papelão


## Como Executar

### Pré-requisitos
- Node.js 18+ instalado

### Instalação

```bash
# Instalar dependências
npm install

# Executar em modo desenvolvimento
npm run dev

# Build para produção
npm build

# Executar em produção
npm start
```

A aplicação estará disponível em `http://localhost:3000`


## APIs

### POST `/api/calcular`
Calcula o valor estimado de uma sucata.

**Request:**
```json
{
  "material": "Cobre",
  "peso": 10
}
```

**Response:**
```json
{
  "total": 27.50
}
```

### GET `/api/materiais`
Retorna lista de materiais com informações básicas.

**Response:**
```json
[
  {
    "id": 1,
    "nome": "Cobre",
    "preco": 2.75,
    "tipo": "Metal"
  },
  ...
]
```


## Funcionalidades

- Interface responsiva para desktop e mobile  
- Cálculo de preço em tempo real  
- Suporte a múltiplas categorias de materiais  
- Valores em moeda brasileira (BRL)  
- Navegação intuitiva entre páginas  
- APIs RESTful para extensibilidade  


## Scripts Disponíveis

- `npm run dev` - Inicia servidor em modo desenvolvimento
- `npm run build` - Cria build otimizado para produção
- `npm start` - Executa aplicação em produção
- `npm run lint` - Executa linter para verificar qualidade do código



