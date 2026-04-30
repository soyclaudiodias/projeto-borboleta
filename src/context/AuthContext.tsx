'use client';

import { createContext, useContext, useState, useEffect } from 'react';

interface AuthContextType {
  isAuthenticated: boolean;
  user: { name: string; email: string } | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<{ name: string; email: string } | null>(null);
  const [loading, setLoading] = useState(true);

  // Restaurar autenticação ao carregar
  useEffect(() => {
    const storedAuth = localStorage.getItem('auth');
    if (storedAuth) {
      try {
        const parsed = JSON.parse(storedAuth);
        setUser(parsed);
        setIsAuthenticated(true);
      } catch (error) {
        console.error('Erro ao restaurar autenticação:', error);
      }
    }
    setLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    // Validação simples para demonstração
    if (!email || !password) {
      throw new Error('Email e senha são obrigatórios');
    }

    if (!email.includes('@')) {
      throw new Error('Email inválido');
    }

    // Simular login (em produção, fazer chamada à API)
    // Usuários demo: qualquer email e senha "123456"
    if (password !== '123456') {
      throw new Error('Senha incorreta. Use "123456" para acesso de demonstração.');
    }

    const newUser = {
      name: email.split('@')[0].charAt(0).toUpperCase() + email.split('@')[0].slice(1),
      email: email,
    };

    localStorage.setItem('auth', JSON.stringify(newUser));
    setUser(newUser);
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem('auth');
    setUser(null);
    setIsAuthenticated(false);
  };

  if (loading) {
    return <div className="flex items-center justify-center min-h-screen">Carregando...</div>;
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth deve ser usado dentro de AuthProvider');
  }
  return context;
};
