
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Lightbulb, Zap, Shield, Crosshair, Users, Brain } from 'lucide-react';

const TipsSection = () => {
  const tips = [
    {
      title: "Optimisasi Sensitivity",
      description: "Gunakan sensitivity yang konsisten untuk semua scope. Latih muscle memory dengan training mode.",
      icon: Crosshair,
      category: "Aiming",
      difficulty: "Beginner"
    },
    {
      title: "Positioning yang Tepat",
      description: "Selalu ambil cover dan high ground. Hindari open space saat rotating ke zone.",
      icon: Shield,
      category: "Strategy",
      difficulty: "Intermediate"
    },
    {
      title: "Team Communication",
      description: "Komunikasi yang baik dengan tim sangat penting. Gunakan callout yang jelas dan singkat.",
      icon: Users,
      category: "Teamwork",
      difficulty: "Advanced"
    },
    {
      title: "Movement Mechanics",
      description: "Pelajari slide jump, wall jump, dan gloo wall tricks untuk mobility yang lebih baik.",
      icon: Zap,
      category: "Movement",
      difficulty: "Advanced"
    },
    {
      title: "Game Sense",
      description: "Prediksi pergerakan zone dan rotasi enemy. Timing yang tepat sangat crucial.",
      icon: Brain,
      category: "Strategy",
      difficulty: "Expert"
    },
    {
      title: "Weapon Selection",
      description: "Pilih kombinasi senjata yang sesuai dengan playstyle. AR + SMG atau AR + Sniper.",
      icon: Crosshair,
      category: "Loadout",
      difficulty: "Intermediate"
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'Intermediate':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'Advanced':
        return 'bg-orange-500/20 text-orange-400 border-orange-500/30';
      case 'Expert':
        return 'bg-red-500/20 text-red-400 border-red-500/30';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  return (
    <section id="tips" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gradient mb-4">Pro Tips & Strategies</h2>
          <p className="text-muted-foreground text-lg">
            Tips dan trik dari pro player untuk meningkatkan skill FF kamu
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tips.map((tip, index) => (
            <Card key={index} className="gaming-card group cursor-pointer">
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-gaming-primary/20 rounded-lg group-hover:bg-gaming-primary/30 transition-colors">
                      <tip.icon className="w-5 h-5 text-gaming-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{tip.title}</h3>
                      <Badge variant="outline" className="text-xs">
                        {tip.category}
                      </Badge>
                    </div>
                  </div>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed">
                  {tip.description}
                </p>

                <div className="flex items-center justify-between pt-2">
                  <Badge className={getDifficultyColor(tip.difficulty)}>
                    {tip.difficulty}
                  </Badge>
                  <Lightbulb className="w-4 h-4 text-gaming-accent opacity-60 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Card className="gaming-card inline-block">
            <div className="flex items-center space-x-3 px-6 py-4">
              <Zap className="w-5 h-5 text-gaming-accent" />
              <span className="text-lg font-semibold">
                Konsistensi adalah kunci untuk improve skill FF!
              </span>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TipsSection;
