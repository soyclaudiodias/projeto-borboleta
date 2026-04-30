'use client';

import { useAuth } from '../context/AuthContext';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { disciplinas } from '../data/disciplinas';
import { useEffect } from 'react';

export default function Home() {
  const { isAuthenticated, user, logout } = useAuth();
  const router = useRouter();

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

  return (
    <div>
      {/* Header/Navigation */}
      <header>
        <div>
          <div>
            <h1>Portal Universitário</h1>
            <p>Bem-vindo, {user?.name}!</p>
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
        {/* Seção de Boas-vindas */}
        <section>
          <div>
            <h2>Bem-vindo ao Portal Acadêmico</h2>
            <p>
              Aqui você pode consultar suas disciplinas, visualizar informações detalhadas sobre cada uma e acompanhar seu desempenho acadêmico.
            </p>
          </div>
        </section>

        {/* Filtro por Semestre (futuro) */}
        <div>
          <h2>Disciplinas Disponíveis</h2>
        </div>

        {/* Grid de Cards de Disciplinas */}
        <div>
          {disciplinas.map((disciplina) => (
            <Link key={disciplina.id} href={`/disciplina/${disciplina.id}`}>
              <div>
                <div>
                  <span>
                    Semestre {disciplina.semestre}
                  </span>
                </div>
                
                <h3>{disciplina.nome}</h3>
                
                <div>
                  <p>
                    <span>👨‍🏫</span>
                    {disciplina.professor}
                  </p>
                </div>

                <p>{disciplina.descricao}</p>

                <div>
                  <button>
                    Ver Detalhes →
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer>
        <p>&copy; 2024 Portal Universitário. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}