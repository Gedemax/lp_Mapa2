import React from 'react';
import { Heart, Lock, Shield } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Heart className="h-6 w-6 text-purple-400" />
              <span className="text-lg font-bold">Mapa da Personalidade</span>
            </div>
            <p className="text-gray-400 text-sm">
              Transformando vidas através do autoconhecimento profundo desde 2020.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-3">Contato</h3>
            <div className="space-y-2 text-sm text-gray-400">
              <p>📧 contato@mapadapersonalidade.com</p>
              <p>📱 WhatsApp: (11) 99999-9999</p>
              <p>🕒 Atendimento: Seg-Sex 9h às 18h</p>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-3">Garantias</h3>
            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <Shield className="h-4 w-4 text-green-400" />
                <span>Garantia de 7 dias</span>
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
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2024 Mapa da Personalidade. Todos os direitos reservados.</p>
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