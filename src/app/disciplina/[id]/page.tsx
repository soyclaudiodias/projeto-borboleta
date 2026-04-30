'use client';

import { useAuth } from '../../../context/AuthContext';
import { useRouter } from 'next/navigation';
import { getDisciplinaById } from '../../../data/disciplinas';
import Link from 'next/link';
import { useEffect } from 'react';
import { use } from 'react';

export default function DisciplinaPage({ params }: { params: Promise<{ id: string }> }) {
  const { isAuthenticated, logout } = useAuth();
  const router = useRouter();
  const { id } = use(params);
  const disciplina = getDisciplinaById(id);

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, router]);

  const handleLogout = () => {
    logout();
    router.push('/login');
  };

  if (!isAuthenticated) {
    return null;
  }

  if (!disciplina) {
    return (
      <div>
        <header>
          <div>
            <h1>Portal Universitário</h1>
            <button
              onClick={handleLogout}
            >
              Sair
            </button>
          </div>
        </header>
        <main>
          <h2>Disciplina não encontrada</h2>
          <Link href="/">
            ← Voltar para Home
          </Link>
        </main>
      </div>
    );
  }

  return (
    <div>
      {/* Header/Navigation */}
      <header>
        <div>
          <div>
            <Link href="/">
              ← Voltar
            </Link>
          </div>
          <button
            onClick={handleLogout}
          >
            Sair
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main>
        {/* Título e Informações Básicas */}
        <div>
          <div>
            <div>
              <span>
                Semestre {disciplina.semestre}
              </span>
              <h1>{disciplina.nome}</h1>
              <p>{disciplina.descricao}</p>
            </div>
          </div>
        </div>

        {/* Informações do Professor e Horário */}
        <div>
          <div>
            <h3>
              <span>👨‍🏫</span>
              Professor
            </h3>
            <p>{disciplina.professor}</p>
          </div>
        </div>

        {/* Ementa */}
        <div>
          <h2>Ementa</h2>
          <p>{disciplina.ementa}</p>
        </div>

        {/* Objetivos */}
        <div>
          <h2>Objetivos da Disciplina</h2>
          <ul>
            {disciplina.objetivos.map((objetivo, index) => (
              <li key={index}>
                <span>✓</span>
                <span>{objetivo}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Botão Voltar */}
        <div>
          <Link
            href="/"
          >
            ← Voltar para Disciplinas
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer>
        <p>&copy; 2024 Portal Universitário. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
