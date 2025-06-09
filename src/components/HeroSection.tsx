
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { 
  Target, 
  Zap, 
  ArrowRight,
  Star,
  Trophy,
  Crosshair,
  Settings
} from 'lucide-react';

const HeroSection = () => {
  const stats = [
    { label: "Active Users", value: "50K+", icon: Star },
    { label: "Performance Boost", value: "+60%", icon: Zap },
    { label: "Tools Available", value: "15+", icon: Settings },
    { label: "Success Rate", value: "99%", icon: Trophy }
  ];

  return (
    <section id="home" className="pt-20 pb-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gaming-gradient opacity-10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center py-20">
          <Badge className="mb-6 bg-gaming-primary/20 text-gaming-primary border-gaming-primary/30">
            🔥 Solusi Ultimate untuk Gaming Free Fire Terbaik!
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-gradient">FFToolsPro+</span>
            <br />
            <span className="text-white">ALL-IN-ONE</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-4 max-w-3xl mx-auto">
            Aplikasi all-in-one yang dirancang khusus untuk meningkatkan performa dan kenyamanan 
            saat bermain Free Fire dan Free Fire MAX.
          </p>
          
          <p className="text-lg text-gaming-primary mb-8 max-w-2xl mx-auto font-semibold">
            🎮 Lebih dari sekadar tools, ini adalah senjata rahasia player pro!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="lg" className="btn-gaming">
              <Zap className="w-5 h-5 mr-2" />
              Download FFToolsPro+
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            
            <Button size="lg" variant="outline" className="border-gaming-primary/30 text-gaming-primary hover:bg-gaming-primary/10">
              <Crosshair className="w-5 h-5 mr-2" />
              Lihat Fitur Lengkap
            </Button>
          </div>

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
  );
};

export default HeroSection;
