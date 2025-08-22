import React from 'react';
import { CheckCircle, RefreshCw, Frown, Clock } from 'lucide-react';

const PainSection = () => {
  const patterns = [
    {
      icon: <RefreshCw className="h-8 w-8" />,
      title: "Padrões Repetitivos",
      description: "Você sempre cai nos mesmos ciclos, mesmo sabendo que não funcionam"
    },
    {
      icon: <Frown className="h-8 w-8" />,
      title: "Autossabotagem",
      description: "Quando as coisas começam a dar certo, algo dentro de você encontra uma forma de estragar"
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Procrastinação Crônica",
      description: "Você sabe o que precisa fazer, mas sempre adia para 'amanhã'"
    }
  ];

  const painPoints = [
    "Você se sente presa nos mesmos relacionamentos tóxicos",
    "Sua autoestima oscila como uma montanha-russa",
    "Você tem medo de tomar decisões importantes",
    "Sente que não consegue manter mudanças por muito tempo",
    "Se compara constantemente com outras pessoas",
    "Tem dificuldade para dizer 'não' e colocar limites",
    "Sente ansiedade ao pensar no seu futuro profissional",
    "Se sente incompreendida pela família e amigos"
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Por Que Isso Acontece Com Você?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Esses padrões inconscientes controlam sua vida há anos, mas você nunca soube <strong>por quê</strong>
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {patterns.map((pattern, index) => (
            <div key={index} className="text-center p-6 rounded-xl border border-gray-200 hover:border-purple-200 hover:shadow-lg transition-all">
              <div className="w-16 h-16 mx-auto mb-4 bg-purple-100 rounded-full flex items-center justify-center text-purple-600">
                {pattern.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{pattern.title}</h3>
              <p className="text-gray-600">{pattern.description}</p>
            </div>
          ))}
        </div>
        
        <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Se você se identificou com o vídeo acima, provavelmente já viveu isso:
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {painPoints.map((point, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-coral-500 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700">{point}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-8 p-6 bg-coral-50 rounded-xl border-l-4 border-coral-500">
            <p className="text-lg font-medium text-gray-900">
              A boa notícia é que <strong>não é culpa sua</strong>. Esses padrões foram criados para te proteger, 
              mas agora eles estão te limitando. E isso pode mudar.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainSection;