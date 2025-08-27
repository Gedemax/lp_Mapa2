import React from 'react';
import { Play, AlertTriangle } from 'lucide-react';

const VideoSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Uma História Que Pode{' '}
            <span className="text-purple-600">Mudar Tudo Para Você</span>
          </h2>
          <p className="text-lg text-gray-600">
            Descubra como outras mulheres quebraram seus padrões limitantes no video acima
          </p>
        </div>
        
        <div className="relative bg-black rounded-2xl overflow-hidden shadow-2xl">
          <div className="aspect-w-16 aspect-h-9 relative">
            <img 
              src="https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Video thumbnail"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <button className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform">
                <Play className="h-8 w-8 text-purple-600 ml-1" />
              </button>
            </div>
          </div>
        </div>
        
        {/* AVISO REMOVIDO */}
      </div>
    </section>
  );
};

export default VideoSection;