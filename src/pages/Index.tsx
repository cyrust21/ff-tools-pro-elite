
import Navigation from '@/components/Navigation';
import SensitivityCalculator from '@/components/SensitivityCalculator';
import RankTracker from '@/components/RankTracker';
import TipsSection from '@/components/TipsSection';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Target, 
  TrendingUp, 
  Lightbulb, 
  Zap, 
  ArrowRight,
  Star,
  Trophy,
  Crosshair
} from 'lucide-react';

const Index = () => {
  const features = [
    {
      icon: Target,
      title: "Sensitivity Calculator",
      description: "Hitung sensitivity optimal untuk semua scope dengan akurat",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: TrendingUp,
      title: "Rank Tracker",
      description: "Lacak progress rank dan hitung poin yang dibutuhkan",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Lightbulb,
      title: "Pro Tips",
      description: "Tips dan strategi dari pro player untuk improve skill",
      gradient: "from-orange-500 to-yellow-500"
    }
  ];

  const stats = [
    { label: "Active Users", value: "50K+", icon: Star },
    { label: "Calculations", value: "1M+", icon: Target },
    { label: "Pro Tips", value: "100+", icon: Lightbulb },
    { label: "Success Rate", value: "95%", icon: Trophy }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gaming-gradient opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center py-20">
            <Badge className="mb-6 bg-gaming-primary/20 text-gaming-primary border-gaming-primary/30">
              🔥 #1 FF Tools Platform
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-gradient">FF TOOLS</span>
              <br />
              <span className="text-white">PRO ELITE</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Platform lengkap untuk semua kebutuhan Free Fire mu. 
              Sensitivity calculator, rank tracker, dan pro tips dalam satu tempat.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button size="lg" className="btn-gaming">
                <Zap className="w-5 h-5 mr-2" />
                Mulai Sekarang
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              
              <Button size="lg" variant="outline" className="border-gaming-primary/30 text-gaming-primary hover:bg-gaming-primary/10">
                <Crosshair className="w-5 h-5 mr-2" />
                Lihat Tools
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <Card key={index} className="gaming-card text-center">
                  <div className="flex flex-col items-center space-y-2">
                    <stat.icon className="w-8 h-8 text-gaming-primary" />
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gradient mb-4">Fitur Unggulan</h2>
            <p className="text-muted-foreground text-lg">
              Tools terlengkap untuk mendominasi battlefield Free Fire
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="gaming-card group cursor-pointer h-full">
                <div className="space-y-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.gradient} p-3 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white group-hover:text-gaming-primary transition-colors">
                    {feature.title}
                  </h3>
                  
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                  
                  <div className="flex items-center text-gaming-primary group-hover:translate-x-2 transition-transform">
                    <span className="text-sm font-medium mr-2">Coba Sekarang</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main Components */}
      <SensitivityCalculator />
      <RankTracker />
      <TipsSection />

      {/* Footer */}
      <footer className="py-12 border-t border-border/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gaming-gradient rounded-lg flex items-center justify-center">
                <Target className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gradient">FF TOOLS PRO</span>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-muted-foreground">
                © 2024 FF Tools Pro Elite. Dibuat dengan ❤️ untuk FF Community
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                Booyah! 🔥 Keep grinding, keep winning!
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
