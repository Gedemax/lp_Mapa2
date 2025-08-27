import React from 'react';
import { ArrowRight, Sparkles, Heart } from 'lucide-react';
import CTAButton from './ui/CTAButton';
import { useTherapist } from './TherapistProvider';

const HeroSection = () => {
  const { therapistData } = useTherapist();
  
  return (
    <section className="relative bg-gradient-to-br from-purple-50 via-white to-coral-50 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
          <div className="lg:col-span-7">
            <div className="flex items-center space-x-2 mb-6">
              <Sparkles className="h-5 w-5 text-yellow-500" />
              <span className="text-sm font-medium text-purple-600 uppercase tracking-wide">
                Autoconhecimento Profundo
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Descubra Por Que Você Sempre{' '}
              <span className="text-purple-600">Volta aos Mesmos Padrões</span>{' '}
              (E Como Quebrar Esse Ciclo Para Sempre)
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              O Mapa da Personalidade que revela seus padrões ocultos e te guia para a{' '}
              <strong className="text-coral-500">verdadeira transformação</strong>
            </p>
            
            {/* Video */}
            <div className="w-full sm:w-[360px] h-[215px] rounded-lg overflow-hidden border-2 border-purple-200 bg-black flex items-center justify-center mb-4">
              <iframe
  width="100%"
  height="215"
  src="https://www.youtube.com/embed/wyFXj0edt_c?rel=0&modestbranding=1&autoplay=0&controls=1"
  title="Vídeo Explicativo"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
  style={{ pointerEvents: 'auto' }}
></iframe>
            </div>
            {/* Aviso abaixo do vídeo */}
            <div className="flex items-center space-x-2 text-orange-600 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <span className="text-sm font-medium">Este vídeo contém insights que podem ser emocionalmente impactantes</span>
            </div>
            {/* Botão */}
            <div className="mb-8 flex justify-center">
              <CTAButton 
                text="Quero Meu Mapa"
                icon={<ArrowRight className="h-5 w-5" />}
                size="medium"
                className="px-8 max-w-xs"
                onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
              />
            </div>
          </div>
          
          <div className="lg:col-span-5 mt-12 lg:mt-0">
            <div className="relative">
              <img 
                src="/mapa_img_terapeuta.png"
                alt="Mulher confiante olhando no espelho"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <Heart className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">+{therapistData?.stats.clientsTransformed || 846} mulheres</p>
                    <p className="text-xs text-gray-500">transformadas</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;