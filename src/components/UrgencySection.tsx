import React, { useState, useEffect } from 'react';
import { Clock, Users, Gift } from 'lucide-react';

const UrgencySection = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 2,
    minutes: 15,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 bg-gradient-to-r from-coral-500 to-orange-500 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            ⚡ Oferta Limitada - Aproveite Agora ou Perca a Oportunidade
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Por questões de qualidade, aceito apenas <strong>12 mapas por semana</strong>. 
            E os primeiros <strong>05 ganham um bônus especial!</strong>
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-white bg-opacity-20 p-6 rounded-xl text-center">
            <Users className="h-12 w-12 mx-auto mb-4" />
            <div className="text-2xl font-bold mb-2">12 Vagas</div>
            <p>Por semana disponíveis</p>
          </div>
          <div className="bg-white bg-opacity-20 p-6 rounded-xl text-center">
            <Gift className="h-12 w-12 mx-auto mb-4" />
            <div className="text-2xl font-bold mb-2">05 Primeiras</div>
            <p>BÔNUS: video comentando seu Mapa</p>
          </div>
          <div className="bg-white bg-opacity-20 p-6 rounded-xl text-center">
            <Clock className="h-12 w-12 mx-auto mb-4" />
            <div className="text-2xl font-bold mb-2">12h</div>
            <p>Tempo máximo de entrega</p>
          </div>
        </div>
        
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-6">
            Tempo restante para garantir o bônus:
          </h3>
          <div className="flex justify-center space-x-4 mb-8">
            <div className="bg-white text-coral-500 p-4 rounded-lg text-center min-w-[80px]">
              <div className="text-3xl font-bold">{timeLeft.hours}</div>
              <div className="text-sm">Horas</div>
            </div>
            <div className="bg-white text-coral-500 p-4 rounded-lg text-center min-w-[80px]">
              <div className="text-3xl font-bold">{timeLeft.minutes}</div>
              <div className="text-sm">Min</div>
            </div>
            <div className="bg-white text-coral-500 p-4 rounded-lg text-center min-w-[80px]">
              <div className="text-3xl font-bold">{timeLeft.seconds}</div>
              <div className="text-sm">Seg</div>
            </div>
          </div>
          
          <div className="bg-yellow-400 text-gray-900 p-4 rounded-xl inline-block font-bold text-lg">
            🎁 BÔNUS: Video comentando seu Mapa!
          </div>
        </div>
      </div>
    </section>
  );
};

export default UrgencySection;