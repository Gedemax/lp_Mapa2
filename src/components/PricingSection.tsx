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
            Uma sessão de terapia custa em média R$ 150. Seu mapa equivale a <strong>meses de autoconhecimento</strong>.
          </p>
        </div>
        
        <div className="bg-gradient-to-br from-purple-50 to-white border-2 border-purple-200 rounded-3xl p-6 sm:p-8 lg:p-12 text-center relative overflow-hidden max-w-3xl mx-auto">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="bg-coral-500 text-white px-6 py-2 rounded-full font-bold text-sm">
              OFERTA ESPECIAL
            </div>
          </div>
          
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Mapa da Personalidade + Bônus
            </h3>
            <div className="flex items-center justify-center space-x-4 mb-4">
              <span className="text-2xl text-gray-500 line-through">De R$ 297</span>
              <span className="text-5xl font-bold text-coral-500">R$ 97</span>
            </div>
            <p className="text-lg text-gray-600 mb-2">ou 3x de R$ 32,33</p>
            <p className="text-sm text-purple-600 font-medium">Sem juros no cartão de crédito</p>
          </div>
          
          <div className="space-y-3 mb-8">
            <div className="flex items-center justify-center space-x-3 text-gray-700">
              <span className="text-green-500 text-xl">✓</span>
              <span>Análise completa de personalidade e comportamento</span>
            </div>
            <div className="flex items-center justify-center space-x-3 text-gray-700">
              <span className="text-green-500 text-xl">✓</span>
              <span>Mapeamento dos seus padrões sabotadores</span>
            </div>
            <div className="flex items-center justify-center space-x-3 text-gray-700">
              <span className="text-green-500 text-xl">✓</span>
              <span>Estratégias personalizadas de transformação</span>
            </div>
            <div className="flex items-center justify-center space-x-3 text-coral-500 font-semibold">
              <span className="text-yellow-500 text-xl">🎁</span>
              <span>BÔNUS: Mini-sessão de 30min (primeiros 10)</span>
            </div>
          </div>
          
          <CTAButton 
            text="GARANTIR MEU MAPA + BÔNUS"
            size="large"
            className="mb-6"
          />
          
          <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-600 pt-6 border-t border-gray-200">
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
              <span>Entrega em 72h</span>
            </div>
          </div>
        </div>
        
        <div className="mt-8 text-center max-w-2xl mx-auto">
          <div className="bg-green-50 border border-green-200 rounded-xl p-6">
            <h4 className="font-bold text-green-800 mb-2">🛡️ Garantia Incondicional de 7 Dias</h4>
            <p className="text-green-700">
              Se por qualquer motivo você não ficar 100% satisfeita com seu mapa, 
              devolvemos todo o seu dinheiro. Sem perguntas, sem burocracia.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;