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
    <div className="min-h-screen bg-gray-50">
      {/* Header/Navigation */}
      <header className="bg-gradient-to-r from-red-700 to-red-900 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-6 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">Portal Universitário</h1>
            <p className="text-red-100 text-sm">Bem-vindo, {user?.name}!</p>
          </div>
          <button
            onClick={handleLogout}
            className="bg-red-600 hover:bg-red-500 text-white font-bold py-2 px-4 rounded-lg transition"
          >
            Sair
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-12">
        {/* Seção de Boas-vindas */}
        <section className="mb-12">
          <div className="bg-white rounded-lg shadow p-8 border-l-4 border-red-700">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Bem-vindo ao Portal Acadêmico</h2>
            <p className="text-gray-600">
              Aqui você pode consultar suas disciplinas, visualizar informações detalhadas sobre cada uma e acompanhar seu desempenho acadêmico.
            </p>
          </div>
        </section>

        {/* Filtro por Semestre (futuro) */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Disciplinas Disponíveis</h2>
        </div>

        {/* Grid de Cards de Disciplinas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {disciplinas.map((disciplina) => (
            <Link key={disciplina.id} href={`/disciplina/${disciplina.id}`}>
              <div className="bg-white rounded-lg shadow hover:shadow-xl transition transform hover:-translate-y-1 cursor-pointer h-full p-6 border-t-4 border-red-700">
                <div className="mb-4">
                  <span className="inline-block bg-red-100 text-red-700 text-xs font-bold px-3 py-1 rounded-full mb-2">
                    Semestre {disciplina.semestre}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-2">{disciplina.nome}</h3>
                
                <div className="space-y-2 text-sm text-gray-600 mb-4">
                  <p className="flex items-center">
                    <span className="font-semibold text-gray-700 mr-2">👨‍🏫</span>
                    {disciplina.professor}
                  </p>
                </div>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{disciplina.descricao}</p>

                <div className="pt-4 border-t border-gray-200">
                  <button className="text-red-700 font-semibold hover:text-red-900 transition">
                    Ver Detalhes →
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-400 text-center py-6 mt-12">
        <p>&copy; 2024 Portal Universitário. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}