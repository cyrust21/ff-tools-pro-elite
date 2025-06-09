
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import AdvantagesSection from '@/components/AdvantagesSection';
import SensitivityCalculator from '@/components/SensitivityCalculator';
import RankTracker from '@/components/RankTracker';
import TipsSection from '@/components/TipsSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <AdvantagesSection />
      <SensitivityCalculator />
      <RankTracker />
      <TipsSection />
      <Footer />
    </div>
  );
};

export default Index;
