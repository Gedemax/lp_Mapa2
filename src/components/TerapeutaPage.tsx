import React from 'react';
import { useParams } from 'react-router-dom';
import { useTerapeutaData } from '../hooks/useTerapeutaData';
import HeroSection from './HeroSection';
import AuthoritySection from './AuthoritySection';
import VideoSection from './VideoSection';
import WhatIsMapSection from './WhatIsMapSection';
import BenefitsSection from './BenefitsSection';
import HowItWorksSection from './HowItWorksSection';
// import TestimonialsSection from './TestimonialSection';
import PainSection from './PainSection';
import FAQSection from './FAQSection';
import FinalCallSection from './FinalCallSection';
import Footer from './Footer';

const TerapeutaPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const { data, loading, error } = useTerapeutaData(slug || 'oneida-fernanda');

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-purple-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Carregando...</p>
        </div>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Página não encontrada</h1>
          <p className="text-gray-600">{error || 'Terapeuta não encontrada'}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <AuthoritySection />
      <VideoSection />
      <WhatIsMapSection />
      <BenefitsSection />
      <HowItWorksSection />
      {/* <TestimonialsSection terapeutaData={data} /> */}
      <PainSection />
      <FAQSection />
      <FinalCallSection />
      <Footer />
    </div>
  );
};

export default TerapeutaPage;
