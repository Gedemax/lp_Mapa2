import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Quanto tempo demora para receber seu mapa?",
      answer: "Você receberá seu Mapa da Personalidade em até 12 horas úteis após o pagamento(a média é de 6 horas). Precisamos desse tempo para fazer uma análise profunda e personalizada das suas respostas, depois disso criar o video comentado, empacotar tudo em PDF e enviar para você"
    },
    {
      question: "É realmente personalizado ou são respostas prontas?",
      answer: "Cada mapa é 100% personalizado e único. Vou analisar individualmente seu caso, preparar as estratégias específicas para seu perfil comportamental e criar seu Mapa. Não são respostas pré-definidas."
    },
    {
      question: "E se eu não gostar do resultado?",
      answer: "Oferecemos uma garantia incostestável. Se você não ficar satisfeita(o) ou se entender que o Mapa não representa suas características comportamentais, devolvemos 100% do seu dinheiro."
    },
    {
      question: "Funciona para qualquer idade?",
      answer: "Sim! Nosso método é eficaz para pessoas de qualquer idade. Os padrões comportamentais podem ser identificados e transformados em qualquer fase da vida. Basta saber onde e como agir"
    },
    {
      question: "Como é feito o pagamento?",
      answer: "Aceitamos cartão de crédito (até 3x sem juros), PIX e boleto bancário. Todo o processo é seguro e protegido por criptografia SSL usamos os melhores meios de pagamentos online."
    },
    {
      question: "Substitui acompanhamento psicológico/pscicoterapias?",
      answer: "O mapa é uma poderosa ferramenta complementar de autoconhecimento, vai te mostrar onde e como melhorar. Não substitui terapias e pode ser usado junto com acompanhamento profissional para potencializar resultados."
    },
    {
      question: "Posso compartilhar meu mapa com outras pessoas?",
      answer: "O mapa é seu e você pode compartilhar com quem quiser. Muitas mulheres encantadas com a assertividade compartilham insights com amigas, parceiros, familiares e terapeutas para se aprofundar no processo de transformação."
    },
    {
      question: "O que está incluído no bônus das primeiras 5?",
      answer: "As primeiras 5 pessoas ganham uma mini-sessão com video gravado comigo comentando SEU MAPA para esclarecer dúvidas e aprofundar insights do seu caso."
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
        
      </div>
    </section>
  );
};

export default FAQSection;