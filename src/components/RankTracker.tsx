
import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { TrendingUp, Trophy, Star, Target } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const RankTracker = () => {
  const [currentRank, setCurrentRank] = useState('');
  const [currentPoints, setCurrentPoints] = useState('');
  const [targetRank, setTargetRank] = useState('');
  const [progress, setProgress] = useState(0);

  const ranks = [
    { name: 'Bronze', points: 1000, color: '#cd7f32' },
    { name: 'Silver', points: 2000, color: '#c0c0c0' },
    { name: 'Gold', points: 3500, color: '#ffd700' },
    { name: 'Platinum', points: 5000, color: '#e5e4e2' },
    { name: 'Diamond', points: 7000, color: '#b9f2ff' },
    { name: 'Heroic', points: 10000, color: '#ff6b6b' },
    { name: 'Grandmaster', points: 15000, color: '#a78bfa' },
  ];

  const calculateProgress = () => {
    if (!currentRank || !currentPoints || !targetRank) {
      toast({
        title: "Error",
        description: "Mohon isi semua field!",
        variant: "destructive"
      });
      return;
    }

    const currentRankData = ranks.find(rank => rank.name.toLowerCase() === currentRank.toLowerCase());
    const targetRankData = ranks.find(rank => rank.name.toLowerCase() === targetRank.toLowerCase());
    const points = parseInt(currentPoints);

    if (!currentRankData || !targetRankData) {
      toast({
        title: "Error",
        description: "Rank tidak valid!",
        variant: "destructive"
      });
      return;
    }

    if (targetRankData.points <= points) {
      setProgress(100);
      toast({
        title: "Selamat!",
        description: "Anda sudah mencapai target rank!",
      });
    } else {
      const progressPercentage = (points / targetRankData.points) * 100;
      setProgress(Math.min(progressPercentage, 100));
      
      const pointsNeeded = targetRankData.points - points;
      toast({
        title: "Progress Dihitung!",
        description: `Anda butuh ${pointsNeeded} poin lagi untuk ${targetRank}`,
      });
    }
  };

  return (
    <section id="rank" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gradient mb-4">Rank Tracker</h2>
          <p className="text-muted-foreground text-lg">
            Lacak progress rank FF kamu dan hitung berapa poin yang dibutuhkan
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Rank Calculator */}
            <Card className="gaming-card">
              <div className="flex items-center space-x-2 mb-6">
                <TrendingUp className="w-6 h-6 text-gaming-primary" />
                <h3 className="text-xl font-semibold">Rank Calculator</h3>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="current-rank">Current Rank</Label>
                  <Input
                    id="current-rank"
                    placeholder="contoh: Gold"
                    value={currentRank}
                    onChange={(e) => setCurrentRank(e.target.value)}
                    className="bg-background/50"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="current-points">Current Points</Label>
                  <Input
                    id="current-points"
                    type="number"
                    placeholder="contoh: 3200"
                    value={currentPoints}
                    onChange={(e) => setCurrentPoints(e.target.value)}
                    className="bg-background/50"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="target-rank">Target Rank</Label>
                  <Input
                    id="target-rank"
                    placeholder="contoh: Diamond"
                    value={targetRank}
                    onChange={(e) => setTargetRank(e.target.value)}
                    className="bg-background/50"
                  />
                </div>

                <Button onClick={calculateProgress} className="btn-gaming w-full">
                  <Target className="w-4 h-4 mr-2" />
                  Hitung Progress
                </Button>

                {progress > 0 && (
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Progress ke {targetRank}</span>
                      <span>{progress.toFixed(1)}%</span>
                    </div>
                    <Progress value={progress} className="h-3" />
                  </div>
                )}
              </div>
            </Card>

            {/* Rank List */}
            <Card className="gaming-card">
              <div className="flex items-center space-x-2 mb-6">
                <Trophy className="w-6 h-6 text-gaming-primary" />
                <h3 className="text-xl font-semibold">Rank System FF</h3>
              </div>

              <div className="space-y-3">
                {ranks.map((rank, index) => (
                  <div
                    key={rank.name}
                    className="flex items-center justify-between p-3 rounded-lg bg-background/30 border border-border/50"
                  >
                    <div className="flex items-center space-x-3">
                      <div 
                        className="w-4 h-4 rounded-full" 
                        style={{ backgroundColor: rank.color }}
                      />
                      <span className="font-medium">{rank.name}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Star className="w-4 h-4 text-gaming-accent" />
                      <span className="text-sm text-muted-foreground">
                        {rank.points.toLocaleString()} pts
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RankTracker;
