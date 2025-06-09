
import { Card } from '@/components/ui/card';
import { 
  Target, 
  ArrowRight,
  Zap,
  Brain,
  Shield,
  Monitor,
  FileText
} from 'lucide-react';

const FeaturesSection = () => {
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

  return (
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
  );
};

export default FeaturesSection;
