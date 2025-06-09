
import { Target } from 'lucide-react';

const Footer = () => {
  return (
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
  );
};

export default Footer;
