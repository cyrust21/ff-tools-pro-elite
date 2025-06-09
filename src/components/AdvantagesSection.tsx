
import { Card } from '@/components/ui/card';
import { Star } from 'lucide-react';

const AdvantagesSection = () => {
  const advantages = [
    "Ringan dan cepat, tanpa iklan yang mengganggu",
    "Desain modern dan responsif",
    "Update rutin dan dukungan pengguna aktif",
    "Safe & No-Root Required - Semua fitur dapat digunakan tanpa akses root"
  ];

  return (
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
  );
};

export default AdvantagesSection;
