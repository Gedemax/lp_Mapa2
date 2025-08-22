import React from 'react';
import { CheckCircle } from 'lucide-react';

const BenefitsSection = () => {
  const benefits = [
    "Por que você reage de determinada forma sob pressão",
    "Seus padrões sabotadores ocultos e como neutralizá-los",
    "Pontos fortes que você nem sabia que tinha",
    "Caminhos profissionais ideais para seu perfil único",
    "Estratégias para melhorar relacionamentos amorosos",
    "Como tomar decisões mais assertivas e confiantes",
    "Técnicas específicas para controlar ansiedade e insegurança",
    "Seu estilo de comunicação e como se expressar melhor"
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            O Que Você Vai <span className="text-purple-600">Descobrir</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Prepare-se para conhecer aspectos de si mesma que vão explicar <strong>tudo</strong> 
            sobre seus comportamentos e decisões
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <img 
              src="https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Mulher descobrindo autoconhecimento"
              className="rounded-2xl shadow-lg w-full h-96 object-cover"
            />
          </div>
          <div className="space-y-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3 p-4 bg-white rounded-lg shadow-sm">
                <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700 font-medium">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-white p-8 rounded-2xl shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Imagine como seria sua vida se você entendesse completamente...
            </h3>
            <div className="text-lg text-gray-600 space-y-2">
              <p>✨ <strong>Por que</strong> você sempre escolhe as mesmas pessoas</p>
              <p>✨ <strong>Como</strong> sua mente funciona em situações de estresse</p>
              <p>✨ <strong>Qual</strong> é seu verdadeiro propósito profissional</p>
              <p>✨ <strong>Como</strong> construir relacionamentos mais saudáveis</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;