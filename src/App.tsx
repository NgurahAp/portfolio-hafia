import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { PortfolioSection } from './components/PortfolioSection';
import { ExperienceSection } from './components/ExperienceSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { SocialStatsSection } from './components/SocialStatsSection';
import { PackagesSection } from './components/PackagesSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <ExperienceSection />
      <TestimonialsSection />
      <SocialStatsSection />
      <PackagesSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
