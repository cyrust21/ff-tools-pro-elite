
import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Target, Calculator } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const SensitivityCalculator = () => {
  const [sensitivity, setSensitivity] = useState('');
  const [dpi, setDpi] = useState('');
  const [scopeType, setScopeType] = useState('');
  const [result, setResult] = useState<string | null>(null);

  const calculateSensitivity = () => {
    if (!sensitivity || !dpi || !scopeType) {
      toast({
        title: "Error",
        description: "Mohon isi semua field!",
        variant: "destructive"
      });
      return;
    }

    const sens = parseFloat(sensitivity);
    const dpiValue = parseFloat(dpi);
    
    let multiplier = 1;
    switch (scopeType) {
      case 'red-dot':
        multiplier = 0.8;
        break;
      case '2x':
        multiplier = 0.5;
        break;
      case '4x':
        multiplier = 0.3;
        break;
      case '8x':
        multiplier = 0.15;
        break;
      default:
        multiplier = 1;
    }

    const calculatedSens = (sens * multiplier).toFixed(2);
    const edpi = (sens * dpiValue).toFixed(0);
    
    setResult(`Sensitivity: ${calculatedSens} | eDPI: ${edpi}`);
    
    toast({
      title: "Kalkulasi Berhasil!",
      description: `Sensitivity optimal untuk ${scopeType}: ${calculatedSens}`,
    });
  };

  return (
    <section id="sensitivity" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gradient mb-4">Sensitivity Calculator</h2>
          <p className="text-muted-foreground text-lg">
            Hitung sensitivity optimal untuk berbagai scope
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="gaming-card">
            <div className="flex items-center space-x-2 mb-6">
              <Target className="w-6 h-6 text-gaming-primary" />
              <h3 className="text-xl font-semibold">FF Sensitivity Calculator</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="space-y-2">
                <Label htmlFor="sensitivity">General Sensitivity</Label>
                <Input
                  id="sensitivity"
                  type="number"
                  placeholder="contoh: 100"
                  value={sensitivity}
                  onChange={(e) => setSensitivity(e.target.value)}
                  className="bg-background/50"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="dpi">DPI Mouse</Label>
                <Input
                  id="dpi"
                  type="number"
                  placeholder="contoh: 800"
                  value={dpi}
                  onChange={(e) => setDpi(e.target.value)}
                  className="bg-background/50"
                />
              </div>

              <div className="space-y-2 md:col-span-2">
                <Label>Scope Type</Label>
                <Select value={scopeType} onValueChange={setScopeType}>
                  <SelectTrigger className="bg-background/50">
                    <SelectValue placeholder="Pilih scope type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="iron-sight">Iron Sight</SelectItem>
                    <SelectItem value="red-dot">Red Dot</SelectItem>
                    <SelectItem value="2x">2x Scope</SelectItem>
                    <SelectItem value="4x">4x Scope</SelectItem>
                    <SelectItem value="8x">8x Scope</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Button onClick={calculateSensitivity} className="btn-gaming w-full mb-4">
              <Calculator className="w-4 h-4 mr-2" />
              Hitung Sensitivity
            </Button>

            {result && (
              <div className="p-4 bg-gaming-gradient/10 rounded-lg border border-gaming-primary/20">
                <div className="text-center">
                  <p className="text-lg font-semibold text-gaming-primary">{result}</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Sensitivity telah disesuaikan untuk scope yang dipilih
                  </p>
                </div>
              </div>
            )}
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SensitivityCalculator;
