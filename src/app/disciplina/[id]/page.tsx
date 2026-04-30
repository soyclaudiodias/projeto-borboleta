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
      <div className="min-h-screen bg-gray-50">
        <header className="bg-gradient-to-r from-red-700 to-red-900 text-white shadow-lg">
          <div className="max-w-7xl mx-auto px-4 py-6 flex justify-between items-center">
            <h1 className="text-3xl font-bold">Portal Universitário</h1>
            <button
              onClick={handleLogout}
              className="bg-red-600 hover:bg-red-500 text-white font-bold py-2 px-4 rounded-lg transition"
            >
              Sair
            </button>
          </div>
        </header>
        <main className="max-w-4xl mx-auto px-4 py-12 text-center">
          <h2 className="text-2xl font-bold text-red-700 mb-4">Disciplina não encontrada</h2>
          <Link href="/" className="text-red-700 font-semibold hover:text-red-900">
            ← Voltar para Home
          </Link>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header/Navigation */}
      <header className="bg-gradient-to-r from-red-700 to-red-900 text-white shadow-lg">
        <div className="max-w-4xl mx-auto px-4 py-6 flex justify-between items-center">
          <div>
            <Link href="/" className="text-red-100 hover:text-white transition">
              ← Voltar
            </Link>
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
      <main className="max-w-4xl mx-auto px-4 py-12">
        {/* Título e Informações Básicas */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8 border-t-4 border-red-700">
          <div className="flex justify-between items-start mb-4">
            <div>
              <span className="inline-block bg-red-100 text-red-700 text-sm font-bold px-3 py-1 rounded-full mb-2">
                Semestre {disciplina.semestre}
              </span>
              <h1 className="text-4xl font-bold text-gray-800 mb-2">{disciplina.nome}</h1>
              <p className="text-gray-600 text-lg">{disciplina.descricao}</p>
            </div>
          </div>
        </div>

        {/* Informações do Professor e Horário */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-bold text-red-700 mb-4 flex items-center">
              <span className="text-2xl mr-2">👨‍🏫</span>
              Professor
            </h3>
            <p className="text-gray-800 font-semibold">{disciplina.professor}</p>
          </div>
        </div>

        {/* Ementa */}
        <div className="bg-white rounded-lg shadow p-8 mb-8">
          <h2 className="text-2xl font-bold text-red-700 mb-4">Ementa</h2>
          <p className="text-gray-700 leading-relaxed">{disciplina.ementa}</p>
        </div>

        {/* Objetivos */}
        <div className="bg-white rounded-lg shadow p-8 mb-8">
          <h2 className="text-2xl font-bold text-red-700 mb-4">Objetivos da Disciplina</h2>
          <ul className="space-y-3">
            {disciplina.objetivos.map((objetivo, index) => (
              <li key={index} className="flex items-start">
                <span className="text-red-700 font-bold mr-3">✓</span>
                <span className="text-gray-700">{objetivo}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Botão Voltar */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-block bg-red-700 hover:bg-red-800 text-white font-bold py-3 px-6 rounded-lg transition"
          >
            ← Voltar para Disciplinas
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-400 text-center py-6 mt-12">
        <p>&copy; 2024 Portal Universitário. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
