import React from 'react';
import { Heart, Lock, Shield, Instagram, MessageCircle, Youtube, Send } from 'lucide-react';
import { useTherapist } from './TherapistProvider';

const Footer = () => {
  const { therapistData } = useTherapist();
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-semibold mb-3">Redes Sociais</h3>
            <div className="flex space-x-4">
              {therapistData?.socialLinks.instagram && (
                <a 
                  href={therapistData.socialLinks.instagram} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                >
                  <Instagram className="h-5 w-5 text-white" />
                </a>
              )}
              {therapistData?.socialLinks.whatsapp && (
                <a 
                  href={therapistData.socialLinks.whatsapp} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                >
                  <MessageCircle className="h-5 w-5 text-white" />
                </a>
              )}
              {therapistData?.socialLinks.youtube && (
                <a 
                  href={therapistData.socialLinks.youtube} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                >
                  <Youtube className="h-5 w-5 text-white" />
                </a>
              )}
              {therapistData?.socialLinks.telegram && (
                <a 
                  href={therapistData.socialLinks.telegram} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                >
                  <Send className="h-5 w-5 text-white" />
                </a>
              )}
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-3">Garantias</h3>
            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <Shield className="h-4 w-4 text-green-400" />
                <span>Garantia Incontestável</span>
              </div>
              <div className="flex items-center space-x-2">
                <Lock className="h-4 w-4 text-blue-400" />
                <span>Pagamento 100% seguro</span>
              </div>
              <div className="flex items-center space-x-2">
                <Heart className="h-4 w-4 text-purple-400" />
                <span>Análise humanizada</span>
              </div>
            </div>
          </div>
          
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Heart className="h-6 w-6 text-purple-400" />
              <span className="text-lg font-bold">Mapa da Personalidade</span>
            </div>
            <p className="text-gray-400 text-sm">
              Transformando vidas através do autoconhecimento profundo.
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2025 SouTerapeuta.pro - Todos os direitos reservados.</p>
          <div className="flex justify-center space-x-4 mt-2">
            <a href="#" className="hover:text-purple-400 transition-colors">Política de Privacidade</a>
            <span>|</span>
            <a href="#" className="hover:text-purple-400 transition-colors">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;