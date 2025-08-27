import React from 'react';
import { Shield, CreditCard, Clock } from 'lucide-react';
import CTAButton from './ui/CTAButton';

const PricingSection = () => {
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
        
        {/* NOVO CONTAINER OFERTA ESPECIAL */}
        <div className="relative bg-white border-2 border-purple-200 rounded-3xl p-6 sm:p-8 lg:p-12 text-center shadow-xl max-w-3xl mx-auto overflow-visible">
          {/* Imagem do celular flutuando, saindo do container */}
          <div className="absolute left-1/2 -top-28 sm:-top-32 md:-top-36 transform -translate-x-1/2 z-10 pointer-events-none">
  <img
    src="/mockup_mapa_phone.png"
    alt="Mockup do celular"
    className="w-56 sm:w-72 md:w-96 animate-horizontal-float"
    style={{ filter: 'drop-shadow(0 8px 24px rgba(80,0,120,0.10))' }}
  />
</div>
<div className="pt-40 sm:pt-44 md:pt-48" />
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Menos de <span className="font-bold text-purple-600">0,16 centavos</span> por dia para descobrir como quebrar o ciclo para sempre!
            </h3>
            <div className="text-4xl font-extrabold text-coral-500 mb-1">3 x R$17</div>
            <div className="text-lg font-bold text-gray-700 mb-2">ou R$47,90 no PIX</div>
          </div>
          <CTAButton
            text="Quero Meu Mapa Agora"
            size="large"
            className="bg-green-500 hover:bg-green-600 text-white rounded-full px-8 py-4 text-lg font-bold shadow-lg mb-6 mx-auto"
          />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-gray-600 pt-6 border-t border-gray-200 mt-4">
            <div className="flex items-center justify-center space-x-2">
              <Shield className="h-5 w-5 text-green-500" />
              <span>7 dias de garantia</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <CreditCard className="h-5 w-5 text-blue-500" />
              <span>Pagamento seguro</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Clock className="h-5 w-5 text-purple-500" />
              <span>Entrega em 12h</span>
            </div>
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