
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
  Crosshair,
  Cpu,
  Brain,
  Shield,
  FileText,
  Monitor,
  Settings
} from 'lucide-react';

const Index = () => {
  const features = [
    {
      icon: Zap,
      title: "Game Booster Pro",
      description: "Optimalkan CPU & GPU secara real-time untuk pengalaman bermain tanpa lag",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Brain,
      title: "AI Performance Mode",
      description: "Deteksi otomatis game Free Fire dan aktifkan mode performa tinggi secara cerdas",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Target,
      title: "Custom Crosshair Overlay",
      description: "Tambahkan crosshair ke layar dengan berbagai gaya, warna, dan ukuran yang bisa disesuaikan",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Shield,
      title: "Block Notification & Auto Clear RAM",
      description: "Hilangkan notifikasi mengganggu dan bersihkan RAM otomatis saat bermain",
      gradient: "from-orange-500 to-yellow-500"
    },
    {
      icon: Monitor,
      title: "FPS & Hardware Monitor",
      description: "Pantau FPS, penggunaan CPU, memori, dan suhu perangkat saat game berjalan",
      gradient: "from-red-500 to-pink-500"
    },
    {
      icon: FileText,
      title: "File Injector & Asset Tools",
      description: "Pindahkan atau injeksi file penting ke folder data Free Fire tanpa root (via Shizuku)",
      gradient: "from-indigo-500 to-purple-500"
    }
  ];

  const stats = [
    { label: "Active Users", value: "50K+", icon: Star },
    { label: "Performance Boost", value: "+60%", icon: Zap },
    { label: "Tools Available", value: "15+", icon: Settings },
    { label: "Success Rate", value: "99%", icon: Trophy }
  ];

  const advantages = [
    "Ringan dan cepat, tanpa iklan yang mengganggu",
    "Desain modern dan responsif",
    "Update rutin dan dukungan pengguna aktif",
    "Safe & No-Root Required - Semua fitur dapat digunakan tanpa akses root"
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
            <h2 className="text-4xl font-bold text-gradient mb-4">🔧 Fitur Unggulan</h2>
            <p className="text-muted-foreground text-lg">
              Fitur-fitur canggih dengan tampilan antarmuka yang ramah pengguna
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

      {/* Advantages Section */}
      <section className="py-20 bg-gaming-dark/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gradient mb-4">🌟 Keunggulan FFToolsPro+</h2>
            <p className="text-muted-foreground text-lg">
              Mengapa FFToolsPro+ menjadi pilihan utama para gamer Free Fire
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {advantages.map((advantage, index) => (
              <Card key={index} className="gaming-card">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-gaming-primary/20 rounded-full flex items-center justify-center">
                    <Star className="w-5 h-5 text-gaming-primary" />
                  </div>
                  <p className="text-white font-medium">{advantage}</p>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Card className="gaming-card inline-block">
              <div className="px-8 py-6">
                <h3 className="text-2xl font-bold text-gradient mb-2">
                  Cocok untuk kamu yang ingin performa maksimal!
                </h3>
                <p className="text-muted-foreground">
                  Saat mabar, push rank, atau sekadar menikmati permainan dengan lebih lancar
                </p>
              </div>
            </Card>
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
              <span className="text-xl font-bold text-gradient">FFToolsPro+</span>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-muted-foreground">
                © 2024 FFToolsPro+ Ultimate Gaming Suite. Dibuat dengan ❤️ untuk FF Community
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
