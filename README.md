# Portal Universitário

Uma aplicação web moderna para gerenciamento de disciplinas acadêmicas com autenticação de usuários.

## Integrantes do Projeto

- Cláudio Dias - 10403569
- Guillermo Kuznietz - 10410134
- Matheus Mustaro - 10409259

## Sobre o Projeto

**Portal Universitário** é uma plataforma interativa que permite que os alunos:
- Façam login de forma segura
- Vejam todas as disciplinas disponíveis em cards interativos
- Acessem informações detalhadas sobre cada disciplina
- Consultem dados do professor, horário, sala e avaliações
- Visualizem ementa, objetivos e referências bibliográficas

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
│   ├── page.tsx                    # Página inicial com cards de disciplinas
│   ├── login/
│   │   └── page.tsx                # Página de autenticação
│   ├── disciplina/
│   │   └── [id]/
│   │       └── page.tsx            # Detalhes dinâmicos da disciplina
│   ├── globals.css                 # Estilos globais
│   └── layout.tsx                  # Layout padrão com AuthProvider
├── context/
│   └── AuthContext.tsx             # Contexto de autenticação
├── data/
│   └── disciplinas.ts              # Dados e tipos de disciplinas
├── components/
│   └── ProtectedRoute.tsx           # Componente para proteção de rotas
├── public/                         # Arquivos estáticos
├── package.json
├── tsconfig.json
└── next.config.ts
```

## Como Executar

### Pré-requisitos

- Node.js 18+
- npm ou yarn

### Instalação

```bash
# Instalar dependências
npm install
```

### Desenvolvimento

```bash
# Iniciar servidor de desenvolvimento
npm run dev
```

A aplicação estará disponível em `http://localhost:3000`

### Build e Produção

```bash
# Gerar build de produção
npm run build

# Iniciar servidor em produção
npm start
```

## Credenciais de Teste

Para testar a aplicação, use:

- **Email:** `aluno@universidade.edu.br` (ou qualquer email válido)
- **Senha:** `123456`

## Funcionalidades

### Autenticação
- Login com email e senha
- Persistência de sessão com localStorage
- Logout seguro
- Proteção de rotas autenticadas

### Home (Página Inicial)
- Grid de cards com todas as disciplinas
- Exibição de informações resumidas
- Links para páginas de detalhes
- Botão de logout

### Detalhes da Disciplina
- Informações completas sobre a disciplina
- Ementa e objetivos
- Navegação de volta para home

## Fluxo de Uso

1. Usuário acessa a aplicação → é redirecionado para `/login`
2. Faz login com credenciais válidas
3. É redirecionado para `/` (home com cards de disciplinas)
4. Clica em uma disciplina para ver detalhes em `/disciplina/[id]`
5. Pode voltar para home ou fazer logout

## Próximas Melhorias

- [ ] Integração com backend real para autenticação
- [ ] Banco de dados com disciplinas dinâmicas
- [ ] Adição de notas e desempenho do aluno
- [ ] Calendário acadêmico
- [ ] Sistema de mensagens professor-aluno
- [ ] Integração com API de horários
- [ ] Download de materiais da disciplina

## Licença

Este projeto foi desenvolvido para fins educacionais pelos alunos do Mackenzie.

---
