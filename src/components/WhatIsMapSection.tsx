import React from 'react';
import { Map, Users, Brain, Target } from 'lucide-react';

const WhatIsMapSection = () => {
  const pillars = [
    {
      icon: <Brain className="h-8 w-8" />,
      title: "Padrões Mentais",
      description: "Identifica como sua mente processa informações e toma decisões"
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Comportamentos",
      description: "Revela por que você age de determinada forma em diferentes situações"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Relacionamentos",
      description: "Mostra como você se conecta com outras pessoas e por quê"
    },
    {
      icon: <Map className="h-8 w-8" />,
      title: "Caminhos Ideais",
      description: "Direciona você para as escolhas mais alinhadas com sua essência"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-purple-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Seu <span className="text-purple-600">GPS Emocional</span> Personalizado
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            O Mapa da Personalidade é uma análise profunda e personalizada que revela os padrões 
            inconscientes que governam sua vida - e te mostra exatamente como transformá-los.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img 
              src="/mockup_mapa.png"
              alt="Processo de análise personalizada"
              className="rounded-2xl shadow-lg w-full h-96 object-cover"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Como é Diferente?</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-xs font-bold">✓</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">100% Personalizado</p>
                  <p className="text-gray-600">Não são respostas genéricas - cada análise é única e individualizada</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-xs font-bold">✓</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Análise Humana</p>
                  <p className="text-gray-600">Feito por uma terapeuta profissional certificada</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-xs font-bold">✓</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Soluções Práticas</p>
                  <p className="text-gray-600">Estratégias específicas para sua situação, dicas práticas e orientações, específicas para você</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 mb-4">
                {pillar.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{pillar.title}</h3>
              <p className="text-gray-600 text-sm">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIsMapSection;