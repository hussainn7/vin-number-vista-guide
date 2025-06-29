
import React from 'react';
import { Car } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="w-full py-4 px-6 bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="bg-blue-600 p-2 rounded-lg">
            <Car className="h-6 w-6 text-white" />
          </div>
          <span className="text-2xl font-bold text-gray-800">AutoReport</span>
        </div>
        
        <Button variant="ghost" className="text-blue-600 hover:bg-blue-50 font-medium">
          Войти
        </Button>
      </div>
    </header>
  );
};

export default Header;
