import React from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import Head from 'next/head';
import { TherapistData } from '../src/types/therapist';
import { TherapistProvider } from '../src/components/TherapistProvider';
import Header from '../src/components/Header';
import HeroSection from '../src/components/HeroSection';
import VideoSection from '../src/components/VideoSection';
import PainSection from '../src/components/PainSection';
import WhatIsMapSection from '../src/components/WhatIsMapSection';
import AuthoritySection from '../src/components/AuthoritySection';
import HowItWorksSection from '../src/components/HowItWorksSection';
import BenefitsSection from '../src/components/BenefitsSection';
import UrgencySection from '../src/components/UrgencySection';
import PricingSection from '../src/components/PricingSection';
import FAQSection from '../src/components/FAQSection';
import FinalCallSection from '../src/components/FinalCallSection';
import Footer from '../src/components/Footer';

interface TherapistPageProps {
  therapistData: TherapistData;
}

const TherapistPage: React.FC<TherapistPageProps> = ({ therapistData }) => {
  return (
    <>
      <Head>
        <title>{therapistData.seo.title}</title>
        <meta name="description" content={therapistData.seo.description} />
        <meta name="keywords" content={therapistData.seo.keywords} />
        <meta property="og:title" content={therapistData.seo.title} />
        <meta property="og:description" content={therapistData.seo.description} />
        <meta property="og:image" content={therapistData.images.hero} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <TherapistProvider therapistData={therapistData}>
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
      </TherapistProvider>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  // Lê automaticamente todos os arquivos JSON da pasta terapeutas
  // Importa todos os arquivos JSON da pasta terapeutas usando fs (Node.js, permitido em getStaticPaths)
  const fs = await import('fs');
  const path = await import('path');
  const therapistsDir = path.join(process.cwd(), 'src/data/terapeutas');
  const files = fs.readdirSync(therapistsDir);
  const therapists = files
    .filter((file: string) => file.endsWith('.json'))
    .map((file: string) => file.replace('.json', ''));

  const paths = therapists.map((slug: string) => ({
    params: { slug },
  }));

  return {
    paths,
    fallback: false, // 404 para slugs não encontrados
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;

  try {
    // Importa os dados do terapeuta
    const therapistData = await import(`../src/data/terapeutas/${slug}.json`);

    
    return {
      props: {
        therapistData: therapistData.default,
      },
    };
  } catch (error) {
    console.error(`Erro ao carregar dados do terapeuta: ${slug}`, error);
    
    return {
      notFound: true,
    };
  }
};

export default TherapistPage;
