import React from 'react';
import { Shield, CreditCard, Clock } from 'lucide-react';
import CTAButton from './ui/CTAButton';
import { useTherapist } from './TherapistProvider';

const PricingSection = () => {
  const { therapistData } = useTherapist();
  
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Quanto Vale Conhecer <span className="text-purple-600">Seus Padrões</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Uma sessão de terapia custa em média R$ 180. Seu Mapa equivale a <strong>meses de autoconhecimento</strong>.
          </p>
        </div>
        
        <div className="max-w-sm mx-auto relative">
          {/* Mockup posicionado para sair da borda superior do card */}
          <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 z-10">
            <div className="animate-float-horizontal">
              <img 
                src="/mockup_mapa_phone.png"
                alt="Mockup do Mapa da Personalidade"
                className="w-72 h-auto"
              />
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-2xl p-8 pt-56 border border-gray-200 shadow-lg">
            {/* Texto descritivo */}
            <div className="text-center mb-6">
              <p className="text-gray-600 text-sm">
                Menos de <strong>0,16 centavos</strong> por dia para descobrir como quebrar o ciclo para sempre!
              </p>
            </div>
            
            {/* Preço em destaque */}
            <div className="text-center mb-6">
              <div className="mb-2">
                <span className="text-coral-500 text-5xl font-bold">3x</span>
                <span className="text-coral-500 text-6xl font-bold">R$17</span>
              </div>
              <p className="text-gray-600 text-sm">
                <strong>ou R$47,90 no Pix</strong>
              </p>
            </div>
            
            {/* Botão de ação */}
            <button 
              onClick={() => window.open(therapistData?.checkoutUrl || '#', '_blank')}
              className="w-full bg-gradient-to-r from-purple-600 to-coral-500 text-white font-bold py-4 px-8 rounded-xl hover:from-purple-700 hover:to-coral-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              🎯 QUERO MEU MAPA AGORA
            </button>
          </div>
        </div>
        
        {/* <div className="mt-8 text-center max-w-2xl mx-auto">
          <div className="bg-green-50 border border-green-200 rounded-xl p-6">
            <h4 className="font-bold text-green-800 mb-2">🛡️ Garantia Incondicional de 7 Dias</h4>
            <p className="text-green-700">
              Se por qualquer motivo você não ficar 100% satisfeita com seu mapa, 
              devolvemos todo o seu dinheiro. Sem perguntas, sem burocracia.
            </p>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default PricingSection;