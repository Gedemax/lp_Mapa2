import React from 'react';
import { MessageSquare, Search, Lightbulb } from 'lucide-react';

const HowItWorksSection = () => {
  const steps = [
    {
      step: 1,
      icon: <MessageSquare className="h-8 w-8" />,
      title: "Responda",
      subtitle: "7 perguntas estratégicas",
      description: "Perguntas cuidadosamente elaboradas para revelar seus padrões mais profundos",
      color: "bg-blue-500"
    },
    {
      step: 2,
      icon: <Search className="h-8 w-8" />,
      title: "Receba",
      subtitle: "Análise personalizada em 72h",
      description: "Nossa terapeuta analisa suas respostas e cria seu mapa único de personalidade",
      color: "bg-purple-500"
    },
    {
      step: 3,
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Transforme",
      subtitle: "Aplique as descobertas",
      description: "Receba estratégias específicas para quebrar padrões e criar a vida que deseja",
      color: "bg-coral-500"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Como <span className="text-purple-600">Funciona</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Um processo simples e poderoso que vai revelar aspectos de você que talvez nunca tenha percebido
          </p>
        </div>
        
        <div className="relative">
          {/* Linha conectora - apenas desktop */}
          <div className="hidden lg:block absolute top-16 left-1/2 w-full h-1 bg-gray-200 transform -translate-x-1/2 -translate-y-1/2"></div>
          
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <div key={index} className="text-center relative">
                <div className={`w-16 h-16 mx-auto mb-6 ${step.color} rounded-full flex items-center justify-center text-white shadow-lg relative z-10`}>
                  {step.icon}
                </div>
                <div className="absolute top-2 left-1/2 transform -translate-x-1/2 -translate-y-full">
                  <span className="bg-white text-gray-900 font-bold text-lg px-3 py-1 rounded-full border-2 border-gray-200">
                    {step.step}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-lg font-medium text-purple-600 mb-4">{step.subtitle}</p>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-16 bg-gradient-to-r from-purple-50 to-coral-50 rounded-2xl p-8 text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            💝 Tempo Médio de Entrega: 72 horas
          </h3>
          <p className="text-gray-600">
            Você receberá seu mapa completo por email, pronto para transformar sua vida
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;