import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import VideoSection from './components/VideoSection';
import PainSection from './components/PainSection';
import WhatIsMapSection from './components/WhatIsMapSection';
import AuthoritySection from './components/AuthoritySection';
import HowItWorksSection from './components/HowItWorksSection';
import BenefitsSection from './components/BenefitsSection';
import UrgencySection from './components/UrgencySection';
import PricingSection from './components/PricingSection';
import FAQSection from './components/FAQSection';
import FinalCallSection from './components/FinalCallSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <VideoSection />
      <PainSection />
      <WhatIsMapSection />
      <AuthoritySection />
      <HowItWorksSection />
      <BenefitsSection />
      <UrgencySection />
      <PricingSection />
      <FAQSection />
      <FinalCallSection />
      <Footer />
    </div>
  );
}

export default App;