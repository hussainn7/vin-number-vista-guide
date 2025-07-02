
import React from 'react';
import { Car, User, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useLanguage } from '@/contexts/LanguageContext';

const Header = () => {
  const { language, setLanguage, t } = useLanguage();

  return (
    <header className="w-full py-6 px-6 bg-white/95 backdrop-blur-lg border-b border-gray-200/50 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-3 rounded-xl shadow-lg">
            <Car className="h-7 w-7 text-white" />
          </div>
          <div>
            <span className="text-3xl font-bold bg-gradient-to-r from-blue-700 to-indigo-600 bg-clip-text text-transparent">
              AutoCheck
            </span>
            <div className="text-xs text-gray-500 font-medium">Vehicle History Reports</div>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button 
                variant="outline" 
                className="bg-white/80 border-blue-200 text-blue-700 hover:bg-blue-50 hover:border-blue-300 font-semibold px-4 py-2 rounded-xl shadow-sm transition-all duration-200"
              >
                <Globe className="h-4 w-4 mr-2" />
                {language}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white border border-gray-200 shadow-lg rounded-lg">
              <DropdownMenuItem 
                onClick={() => setLanguage('EN')}
                className="cursor-pointer hover:bg-blue-50"
              >
                English (EN)
              </DropdownMenuItem>
              <DropdownMenuItem 
                onClick={() => setLanguage('ES')}
                className="cursor-pointer hover:bg-blue-50"
              >
                Español (ES)
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button 
            variant="outline" 
            className="bg-white/80 border-blue-200 text-blue-700 hover:bg-blue-50 hover:border-blue-300 font-semibold px-6 py-2 rounded-xl shadow-sm transition-all duration-200"
          >
            <User className="h-4 w-4 mr-2" />
            {t.signIn}
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
