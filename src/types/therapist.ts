export interface TherapistData {
  slug: string;
  name: string;
  title: string;
  bio: string;
  stats: {
    clientsTransformed: number;
    yearsExperience: number;
  };
  specialties: string[];
  socialLinks: {
    instagram: string;
    whatsapp: string;
    youtube: string;
    telegram: string;
  };
  images: {
    profile: string;
    hero: string;
    mockup: string;
  };
  videoUrl: string;
  checkoutUrl: string;
  quote: {
    text: string;
    author: string;
  };
  testimonials: Testimonial[];
  pricing: {
    originalPrice: number;
    currentPrice: number;
    currency: string;
    guarantee: string;
    bonusText: string;
  };
  seo: {
    title: string;
    description: string;
    keywords: string;
  };
}

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating: number;
}
