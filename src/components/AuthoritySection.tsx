import React from 'react';
import { Star, Users, Award } from 'lucide-react';
import { useTherapist } from './TherapistProvider';

const AuthoritySection = () => {
  const { therapistData } = useTherapist();
  
  // Fallback para dados estáticos se não houver dados dinâmicos
  const testimonials = therapistData?.testimonials || [
    {
      name: "Marina Santos",
      role: "Empresária",
      content: "Finalmente entendi por que eu sempre escolhia os parceiros errados. O mapa me abriu os olhos para padrões que eu repetia há 15 anos!",
      rating: 5
    },
    {
      name: "Carolina Lima",
      role: "Designer",
      content: "Mulher, que mapa maravilhoso... Meu Deus, tudo isso fez muito, muito sentido, de verdade.… é como se cada palavra do Mapa falasse direto com a minha alma. Vou guardar com carinho — foi transformador.",
      rating: 5
    },
    {
      name: "Ana Rodrigues",
      role: "Psicóloga",
      content: "Mesmo sendo da área, o mapa me trouxe insights que nunca havia considerado. Recomendo para todas as minhas pacientes.",
      rating: 5
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center space-x-4 mb-6">
                <img 
                  src={therapistData?.images.profile || "/foto_perfil.jpg"}
                  alt={therapistData?.name || "Terapeuta"}
                  className="w-20 h-20 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{therapistData?.name || "Oneida Fernanda"}</h3>
                  <p className="text-purple-600 font-medium">{therapistData?.title || "Terapeuta Emocional Sistêmica"}</p>
                </div>
              </div>
              <div className="space-y-3 text-sm text-gray-600">
                {therapistData?.specialties ? 
                  therapistData.specialties.map((specialty, index) => (
                    <p key={index}>✓ {specialty}</p>
                  )) : 
                  <>
                    <p>✓ Especialista em Padrões Comportamentais</p>
                    <p>✓ Terapia de Reprocessamento Generativo</p>
                    <p>✓ Reconhecimento MEC CITRG 02-176</p>
                    <p>✓ Psicoteologia de aconselhamento</p>
                  </>
                }
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 text-left">
              Quem Cria Sua <span className="text-purple-600">Transformação</span>?
            </h2>
            <p className="text-lg text-gray-600 mb-6 text-left">
              "{therapistData?.bio || "Minha missão é guiar mulheres na libertação da insegurança e da indecisão, apoiá-las na cura de traumas e na transformação de crenças limitantes, para que possam ressignificar sua história, despertar sua força interior e viver com equilíbrio, clareza e abundância"}"
            </p>
            {/*
            <div className="flex items-center space-x-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">2.847+</div>
                <div className="text-sm text-gray-600">Mulheres Atendidas</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">15</div>
                <div className="text-sm text-gray-600">Anos de Experiência</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">98%</div>
                <div className="text-sm text-gray-600">Satisfação</div>
              </div>
            </div>
            */}
          </div>
        </div>
        
        <div>
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">
            O Que Elas Estão Dizendo
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthoritySection;