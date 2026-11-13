'use client';

import { useState } from 'react';
import ScrollProgress from '@/components/ScrollProgress';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ImpactSection from '@/components/ImpactSection';
import SelectedWorksSection from '@/components/SelectedWorksSection';
import MarketingSitesSection from '@/components/MarketingSitesSection';
import CraftPhilosophySection from '@/components/CraftPhilosophySection';
import TechStackSection from '@/components/TechStackSection';
import EngineeringJourneySection from '@/components/EngineeringJourneySection';
import SkillsMatrixSection from '@/components/SkillsMatrixSection';
import FaqSection from '@/components/FaqSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import Toast from '@/components/Toast';

export default function Home() {
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleShowToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2500);
  };

  return (
    <>
      <ScrollProgress />
      <Header />
      <main>
        <HeroSection />
        <ImpactSection />
        <SelectedWorksSection />
        <MarketingSitesSection />
        <CraftPhilosophySection />
        <TechStackSection />
        <EngineeringJourneySection />
        <SkillsMatrixSection />
        <FaqSection />
        <ContactSection onShowToast={handleShowToast} />
      </main>
      <Footer />
      <Toast message={toastMessage} />
    </>
  );
}

