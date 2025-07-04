
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
    <header className="w-full py-4 sm:py-6 px-4 sm:px-6 bg-white/95 backdrop-blur-lg border-b border-gray-200/50 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2 sm:space-x-3">
          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-2 sm:p-3 rounded-lg sm:rounded-xl shadow-lg">
            <Car className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 text-white" />
          </div>
          <div>
            <span className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-700 to-indigo-600 bg-clip-text text-transparent">
              AutoCheck
            </span>
            <div className="text-xs sm:text-sm text-gray-500 font-medium hidden sm:block">Vehicle History Reports</div>
          </div>
        </div>
        
        <div className="flex items-center space-x-2 sm:space-x-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button 
                variant="outline" 
                className="bg-white/80 border-blue-200 text-blue-700 hover:bg-blue-50 hover:border-blue-300 font-semibold px-2 sm:px-4 py-1 sm:py-2 rounded-lg sm:rounded-xl shadow-sm transition-all duration-200 text-sm sm:text-base"
              >
                <Globe className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                <span className="hidden sm:inline">{language}</span>
                <span className="sm:hidden">{language}</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white border border-gray-200 shadow-lg rounded-lg z-50">
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
            className="bg-white/80 border-blue-200 text-blue-700 hover:bg-blue-50 hover:border-blue-300 font-semibold px-3 sm:px-6 py-1 sm:py-2 rounded-lg sm:rounded-xl shadow-sm transition-all duration-200 text-sm sm:text-base"
          >
            <User className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
            <span className="hidden sm:inline">{t.signIn}</span>
            <span className="sm:hidden">Sign In</span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
