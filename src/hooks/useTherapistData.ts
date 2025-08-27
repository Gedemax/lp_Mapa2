import { useState, useEffect } from 'react';
import { TherapistData } from '../types/therapist';

export const useTherapistData = (slug: string) => {
  const [therapistData, setTherapistData] = useState<TherapistData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadTherapistData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Importa dinamicamente o arquivo JSON do terapeuta
        const data = await import(`../data/terapeutas/${slug}.json`);
        setTherapistData(data.default);
      } catch (err) {
        console.error(`Erro ao carregar dados do terapeuta: ${slug}`, err);
        setError(`Terapeuta não encontrado: ${slug}`);
        setTherapistData(null);
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      loadTherapistData();
    }
  }, [slug]);

  return { therapistData, loading, error };
};

// Hook para obter lista de terapeutas disponíveis
export const useAvailableTherapists = () => {
  // Por enquanto, lista hardcoded. Futuramente pode ser dinâmica
  const therapists = ['oneida-fernanda'];
  
  return { therapists };
};
