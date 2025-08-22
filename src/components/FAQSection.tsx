import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Quanto tempo demora para receber meu mapa?",
      answer: "Você receberá seu Mapa da Personalidade em até 72 horas úteis após o pagamento. Nossa terapeuta especializada precisa desse tempo para fazer uma análise profunda e personalizada das suas respostas."
    },
    {
      question: "É realmente personalizado ou são respostas prontas?",
      answer: "Cada mapa é 100% personalizado e único. Nossa terapeuta analisa individualmente suas respostas e cria estratégias específicas para seu perfil. Não usamos robôs ou respostas pré-definidas."
    },
    {
      question: "E se eu não gostar do resultado?",
      answer: "Oferecemos garantia incondicional de 7 dias. Se você não ficar completamente satisfeita, devolvemos 100% do seu dinheiro, sem perguntas ou burocracia."
    },
    {
      question: "Funciona para qualquer idade?",
      answer: "Sim! Nosso método é eficaz para mulheres de qualquer idade. Os padrões comportamentais podem ser identificados e transformados em qualquer fase da vida."
    },
    {
      question: "Como é feito o pagamento?",
      answer: "Aceitamos cartão de crédito (até 3x sem juros), PIX e boleto bancário. Todo o processo é seguro e protegido por criptografia SSL."
    },
    {
      question: "Substitui acompanhamento psicológico?",
      answer: "O mapa é uma ferramenta complementar de autoconhecimento, não substitui terapia psicológica. Pode ser usado junto com acompanhamento profissional para potencializar resultados."
    },
    {
      question: "Posso compartilhar meu mapa com outras pessoas?",
      answer: "O mapa é seu e você pode compartilhar com quem quiser. Muitas mulheres compartilham insights com parceiros, familiares ou terapeutas para aprofundar o processo de transformação."
    },
    {
      question: "O que está incluído no bônus das primeiras 10?",
      answer: "As primeiras 10 pessoas ganham uma mini-sessão de 30 minutos via videochamada com nossa terapeuta para esclarecer dúvidas e aprofundar insights do seu mapa."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Dúvidas <span className="text-purple-600">Frequentes</span>
          </h2>
          <p className="text-xl text-gray-600">
            Esclarecemos as principais questões para que você se sinta segura em sua decisão
          </p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-xl shadow-sm">
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-purple-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-400 flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
            <h3 className="font-bold text-purple-900 mb-2">Ainda tem dúvidas?</h3>
            <p className="text-purple-700 mb-4">
              Nossa equipe está disponível para esclarecer qualquer questão
            </p>
            <a 
              href="https://wa.me/5511999999999" 
              className="inline-flex items-center px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-colors"
            >
              💬 Falar no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;