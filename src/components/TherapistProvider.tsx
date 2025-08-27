import React, { createContext, useContext, ReactNode } from 'react';
import { TherapistData } from '../types/therapist';

interface TherapistContextType {
  therapistData: TherapistData | null;
}

const TherapistContext = createContext<TherapistContextType>({ therapistData: null });

interface TherapistProviderProps {
  children: ReactNode;
  therapistData: TherapistData | null;
}

export const TherapistProvider: React.FC<TherapistProviderProps> = ({ 
  children, 
  therapistData 
}) => {
  return (
    <TherapistContext.Provider value={{ therapistData }}>
      {children}
    </TherapistContext.Provider>
  );
};

export const useTherapist = () => {
  const context = useContext(TherapistContext);
  if (!context) {
    throw new Error('useTherapist must be used within a TherapistProvider');
  }
  return context;
};
