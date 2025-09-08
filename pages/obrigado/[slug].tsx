import React, { useState, useEffect } from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { 
  CheckCircle, 
  ArrowRight, 
  Shield, 
  ChevronDown,
  MessageCircle,
  Mail,
  Gift,
  Sparkles,
  Clock,
  Users,
  Star,
  Play
} from 'lucide-react';
import fs from 'fs';
import path from 'path';

interface TherapistData {
  name: string;
  slug: string;
  socialLinks: {
    whatsapp: string;
    instagram: string;
  };
  formUrl?: string;
  stats?: {
    clientsTransformed: number;
  };
}

interface ObrigadoPageProps {
  therapistData: TherapistData;
}

export default function ObrigadoPage({ therapistData }: ObrigadoPageProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  useEffect(() => {
    setIsVisible(true);
    const timer = setTimeout(() => setCurrentStep(2), 1000);
    return () => clearTimeout(timer);
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleFormClick = () => {
    if (therapistData.formUrl) {
      window.open(therapistData.formUrl, '_blank');
    } else {
      alert('Redirecionando para o formulário das 7 perguntas...');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-4 overflow-hidden">
        <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6 animate-bounce">
            <CheckCircle className="w-4 h-4" />
            Compra Confirmada com Sucesso
          </div>

          <div className="text-8xl mb-8 animate-pulse">🎉</div>

          <h1 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-slate-800 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-6 leading-tight">
            Parabéns!
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-bold text-slate-700 mb-6">
            Sua compra foi confirmada.
          </h2>

          <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto mt-8">
            Agora começa sua jornada de <span className="font-semibold text-blue-700">autoconhecimento profundo</span> com {therapistData.name}.<br />
            Estamos muito felizes em te acompanhar nesta transformação!
          </p>
        </div>
      </section>

      {/* Next Step Section */}
      <section className="py-16 px-4 relative">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Sparkles className="w-4 h-4" />
              Próximo Passo Importante
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Responda 7 perguntas
              <span className="block text-blue-600">simples e rápidas</span>
            </h2>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 p-8 md:p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/30"></div>
            
            <div className="relative z-10 text-center">
              <button 
                onClick={handleFormClick}
                className="group relative inline-flex items-center justify-center bg-gradient-to-r from-blue-600 via-blue-700 to-purple-700 hover:from-blue-700 hover:via-blue-800 hover:to-purple-800 text-white px-8 py-4 rounded-2xl text-lg font-bold transition-all duration-300 hover:scale-105 hover:shadow-2xl transform-gpu"
              >
                Responder as 7 Perguntas
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Progress Bar - Sua Jornada de Transformação */}
      <section className="py-16 px-4 bg-gradient-to-r from-slate-50 to-blue-50">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl font-bold text-center text-slate-800 mb-12">Sua Jornada de Transformação</h3>
          
          <div className="relative">
            {/* Progress Line */}
            <div className="absolute top-6 left-0 right-0 h-1 bg-slate-200 rounded-full">
              <div 
                className={`h-full bg-gradient-to-r from-green-500 to-blue-500 rounded-full transition-all duration-2000 ease-out ${currentStep >= 2 ? 'w-1/2' : 'w-1/4'}`}
              ></div>
            </div>

            <div className="flex items-center justify-between relative">
              {/* Step 1 */}
              <div className="flex-1 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center text-white font-bold text-lg mb-4 mx-auto shadow-lg animate-pulse">
                  ✓
                </div>
                <div className="bg-white rounded-xl p-4 shadow-lg border border-green-100">
                  <p className="font-bold text-green-700 mb-1">Compra Confirmada</p>
                  <p className="text-sm text-slate-600">Pagamento aprovado</p>
                </div>
              </div>
              
              {/* Step 2 */}
              <div className="flex-1 text-center">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg mb-4 mx-auto shadow-lg transition-all duration-1000 ${currentStep >= 2 ? 'bg-gradient-to-r from-blue-500 to-blue-600 animate-pulse' : 'bg-slate-300'}`}>
                  2
                </div>
                <div className={`rounded-xl p-4 shadow-lg border transition-all duration-1000 ${currentStep >= 2 ? 'bg-blue-50 border-blue-200' : 'bg-white border-slate-200'}`}>
                  <p className={`font-bold mb-1 ${currentStep >= 2 ? 'text-blue-700' : 'text-slate-500'}`}>Responder Perguntas</p>
                  <p className="text-sm text-slate-600">7 perguntas rápidas</p>
                </div>
              </div>
              
              {/* Step 3 */}
              <div className="flex-1 text-center">
                <div className="w-12 h-12 bg-slate-300 rounded-full flex items-center justify-center text-slate-500 font-bold text-lg mb-4 mx-auto shadow-lg">
                  <Gift className="w-6 h-6" />
                </div>
                <div className="bg-white rounded-xl p-4 shadow-lg border border-slate-200">
                  <p className="font-bold text-slate-500 mb-1">Receber Seu Mapa</p>
                  <p className="text-sm text-slate-600">Em até 5 dias úteis</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Section - Precisa de ajuda? */}
      <section className="py-12 px-4 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-3xl mx-auto text-center">
          <h4 className="text-xl font-bold text-slate-800 mb-4">Precisa de ajuda?</h4>
          <p className="text-slate-600 mb-6">Nossa equipe especializada está aqui para você</p>
          <div className="flex items-center justify-center gap-8">
            <div 
              onClick={() => therapistData.socialLinks.whatsapp && window.open(therapistData.socialLinks.whatsapp, '_blank')}
              className="flex items-center gap-3 bg-white px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
            >
              <MessageCircle className="w-5 h-5 text-green-600" />
              <span className="font-medium text-slate-700">WhatsApp</span>
            </div>
            <div className="flex items-center gap-3 bg-white px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
              <Mail className="w-5 h-5 text-blue-600" />
              <span className="font-medium text-slate-700">E-mail</span>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA with Urgency */}
      <section className="py-16 px-4 bg-gradient-to-br from-slate-800 via-blue-900 to-purple-900 relative overflow-hidden">
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-yellow-400 text-yellow-900 px-4 py-2 rounded-full text-sm font-bold mb-6 animate-pulse">
            <Clock className="w-4 h-4" />
            Não perca tempo - Comece agora!
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Sua transformação está a apenas
            <span className="block text-yellow-400">7 perguntas de distância</span>
          </h2>
          
          <button 
            onClick={handleFormClick}
            className="group relative inline-flex items-center justify-center bg-gradient-to-r from-green-500 via-green-600 to-blue-600 hover:from-green-600 hover:via-green-700 hover:to-blue-700 text-white px-10 py-5 rounded-2xl text-lg font-bold transition-all duration-300 hover:scale-105 hover:shadow-2xl transform-gpu mb-4"
          >
            Responder as 7 Perguntas
          </button>
          
          <p className="text-blue-200 text-sm">
            ⚡ Clique para começar sua jornada de autoconhecimento
          </p>
        </div>
      </section>

      {/* Modern Footer */}
      <footer className="py-8 px-4 bg-slate-900 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-slate-400 mb-2">
            © 2025 - Mapa da Personalidade e Comportamento
          </p>
          <p className="text-slate-500 text-sm">
            Transformando vidas através do autoconhecimento profundo
          </p>
        </div>
      </footer>
    </div>
  );
}

// Função para buscar dados estáticos
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  
  try {
    const filePath = path.join(process.cwd(), 'src', 'data', 'terapeutas', `${slug}.json`);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const therapistData = JSON.parse(fileContents);
    
    return {
      props: {
        therapistData,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};

// Função para gerar paths estáticos
export const getStaticPaths: GetStaticPaths = async () => {
  const dataDirectory = path.join(process.cwd(), 'src', 'data', 'terapeutas');
  const filenames = fs.readdirSync(dataDirectory);
  
  const paths = filenames
    .filter(name => name.endsWith('.json'))
    .map(name => ({
      params: { slug: name.replace('.json', '') }
    }));

  return {
    paths,
    fallback: false,
  };
};
