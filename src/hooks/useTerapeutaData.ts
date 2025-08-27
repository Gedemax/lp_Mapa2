import { useState, useEffect } from 'react';

export interface TerapeutaData {
  slug: string;
  nome: string;
  titulo: string;
  foto: string;
  fotoPerfil: string;
  estatisticas: {
    mulheresTransformadas: number;
    anosExperiencia: number;
    avaliacaoMedia: number;
  };
  hero: {
    titulo: string;
    subtitulo: string;
    descricao: string;
    preco: {
      original: number;
      promocional: number;
      desconto: number;
    };
  };
  autoridade: {
    titulo: string;
    descricao: string;
    credenciais: string[];
  };
  beneficios: {
    titulo: string;
    lista: Array<{
      titulo: string;
      descricao: string;
    }>;
  };
  depoimentos: Array<{
    nome: string;
    idade: number;
    profissao: string;
    texto: string;
    foto: string;
  }>;
  garantia: {
    tipo: string;
    descricao: string;
  };
  bonus: {
    titulo: string;
    descricao: string;
    limitePessoas: number;
  };
  contato: {
    whatsapp: string;
    email: string;
    instagram: string;
    youtube: string;
  };
  redesSociais: {
    instagram: string;
    whatsapp: string;
    youtube: string;
    telegram: string;
  };
}

export const useTerapeutaData = (slug: string) => {
  const [data, setData] = useState<TerapeutaData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadTerapeutaData = async () => {
      try {
        setLoading(true);
        const response = await import(`../data/terapeutas/${slug}.json`);
        setData(response.default);
        setError(null);
      } catch (err) {
        setError(`Terapeuta "${slug}" não encontrada`);
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      loadTerapeutaData();
    }
  }, [slug]);

  return { data, loading, error };
};
