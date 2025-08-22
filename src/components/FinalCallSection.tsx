import React from 'react';
import { Heart, ArrowRight } from 'lucide-react';
import CTAButton from './ui/CTAButton';

const FinalCallSection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-purple-600 via-purple-700 to-coral-600 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Heart className="h-16 w-16 mx-auto mb-6 opacity-80" />
        
        <h2 className="text-3xl lg:text-4xl font-bold mb-6">
          Esta É Sua Chance de Finalmente Entender Por Que Você É Como É
        </h2>
        
        <p className="text-xl mb-8 opacity-90 leading-relaxed">
          Você pode continuar vivendo no escuro, repetindo os mesmos padrões por mais 5, 10, 15 anos... 
          <strong className="block mt-2">Ou pode escolher se conhecer profundamente hoje.</strong>
        </p>
        
        <div className="bg-white bg-opacity-20 rounded-xl p-6 mb-8">
          <p className="text-lg font-medium mb-4">
            Imagine acordar amanhã sabendo exatamente:
          </p>
          <div className="text-left space-y-2 max-w-2xl mx-auto">
            <p>✨ Por que você reage daquela forma quando se sente rejeitada</p>
            <p>✨ Qual é seu verdadeiro potencial que ainda não descobriu</p>
            <p>✨ Como tomar decisões alinhadas com quem você realmente é</p>
            <p>✨ Quais caminhos te levarão à realização genuína</p>
          </div>
        </div>
        
        <div className="mb-8">
          <CTAButton 
            text="SIM, QUERO MEU MAPA + BÔNUS AGORA"
            icon={<ArrowRight className="h-5 w-5" />}
            size="large"
            className="bg-coral-500 hover:bg-coral-600 text-white shadow-2xl"
          />
        </div>
        
        <p className="text-sm opacity-75">
          ⏰ Restam poucas vagas esta semana | 🎁 Bônus apenas para os primeiros 10 | 🛡️ 7 dias de garantia
        </p>
        
        <div className="mt-12 border-t border-white border-opacity-20 pt-8">
          <p className="text-lg italic opacity-90">
            "O dia em que você decide se conhecer profundamente é o dia em que sua vida real começa."
          </p>
          <p className="mt-2 text-sm opacity-75">- Dra. Patricia Mendes</p>
        </div>
      </div>
    </section>
  );
};

export default FinalCallSection;