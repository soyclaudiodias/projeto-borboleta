'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../../context/AuthContext';
import Link from 'next/link';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await login(email, password);
      router.push('/');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro ao fazer login');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div>
        {/* Logo/Título */}
        <div>
          <h1>Portal Universitário</h1>
          <p>Acesso ao sistema acadêmico</p>
        </div>

        {/* Formulário */}
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="login-email">
              Email
            </label>
            <input
              type="email"
              id="login-email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="seu.email@universidade.edu.br"
              disabled={loading}
            />
          </div>

          <div>
            <label htmlFor="login-password">
              Senha
            </label>
            <input
              type="password"
              id="login-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              disabled={loading}
            />
            <p>Dica: use "123456" para acesso de demonstração</p>
          </div>

          {error && (
            <div>
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
          >
            {loading ? 'Entrando...' : 'Entrar'}
          </button>
        </form>

        {/* Rodapé */}
        <div>
          <p>Acesso de Demonstração</p>
          <p>Email: <code>aluno@universidade.edu.br</code></p>
          <p>Senha: <code>123456</code></p>
        </div>
      </div>
    </div>
  );
}
