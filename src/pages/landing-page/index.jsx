import React from 'react';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import SolutionSection from './components/SolutionSection';
import SecuritySection from './components/SecuritySection';
import CTASection from './components/CTASection';
import FooterSection from './components/FooterSection';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <SolutionSection />
        <SecuritySection />
        <CTASection />
      </main>
      <FooterSection />
    </div>
  );
};

export default LandingPage;