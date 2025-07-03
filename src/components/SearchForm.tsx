
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Shield, CreditCard, Car } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useLanguage } from '@/contexts/LanguageContext';

const US_STATES = [
  'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware',
  'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
  'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
  'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico',
  'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania',
  'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
  'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
];

const SearchForm = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [vinNumber, setVinNumber] = useState('');
  const [licensePlate, setLicensePlate] = useState('');
  const [selectedState, setSelectedState] = useState('');

  const handleVinSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (vinNumber.trim()) {
      navigate('/report');
    }
  };

  const handlePlateSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (licensePlate.trim() && selectedState) {
      navigate('/report');
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      {/* Hero Section */}
      <div className="text-center mb-8 sm:mb-12">
        <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 rounded-2xl sm:rounded-3xl mb-6 sm:mb-8 shadow-2xl animate-pulse">
          <Car className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-white" />
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-6 sm:mb-8 leading-tight px-4">
          {t.heroTitle}
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed px-4">
          {t.heroSubtitle}
        </p>
      </div>

      {/* Search Form */}
      <Card className="bg-gradient-to-br from-white/95 to-blue-50/95 backdrop-blur-xl shadow-2xl border-2 border-white/20 max-w-5xl mx-auto mb-12 sm:mb-16 overflow-hidden">
        <CardHeader className="text-center pb-6 sm:pb-8 bg-gradient-to-r from-blue-50 to-purple-50 px-4 sm:px-6">
          <CardTitle className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            <Shield className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 inline mr-2 sm:mr-3 text-blue-600" />
            Vehicle History Report
          </CardTitle>
        </CardHeader>
        <CardContent className="p-4 sm:p-6 md:p-8">
          <Tabs defaultValue="vin" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6 sm:mb-8 md:mb-10 bg-gradient-to-r from-gray-100 to-blue-100 rounded-xl sm:rounded-2xl p-1 sm:p-2 shadow-inner">
              <TabsTrigger 
                value="vin" 
                className="rounded-lg sm:rounded-xl py-2 sm:py-3 md:py-4 text-sm sm:text-base md:text-lg font-semibold data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-purple-500 data-[state=active]:text-white data-[state=active]:shadow-lg transition-all duration-300"
              >
                {t.searchByVin}
              </TabsTrigger>
              <TabsTrigger 
                value="plate" 
                className="rounded-lg sm:rounded-xl py-2 sm:py-3 md:py-4 text-sm sm:text-base md:text-lg font-semibold data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-purple-500 data-[state=active]:text-white data-[state=active]:shadow-lg transition-all duration-300"
              >
                {t.searchByPlate}
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="vin">
              <form onSubmit={handleVinSearch} className="space-y-6 sm:space-y-8">
                <div>
                  <label className="block text-base sm:text-lg font-bold text-gray-700 mb-3 sm:mb-4">
                    {t.enterVin}
                  </label>
                  <Input
                    type="text"
                    placeholder={t.vinPlaceholder}
                    value={vinNumber}
                    onChange={(e) => setVinNumber(e.target.value)}
                    className="h-12 sm:h-14 md:h-16 text-base sm:text-lg border-2 sm:border-3 border-gray-200 rounded-xl sm:rounded-2xl focus:border-blue-500 focus:ring-blue-500 shadow-lg bg-white/80"
                    maxLength={17}
                  />
                </div>
                <Button 
                  type="submit"
                  className="w-full h-12 sm:h-14 md:h-16 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 hover:from-blue-700 hover:via-purple-700 hover:to-indigo-700 text-white font-bold text-base sm:text-lg md:text-xl rounded-xl sm:rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300 border-0"
                >
                  <Search className="h-5 w-5 sm:h-6 sm:w-6 mr-2 sm:mr-3" />
                  {t.getReport}
                </Button>
              </form>
            </TabsContent>
            
            <TabsContent value="plate">
              <form onSubmit={handlePlateSearch} className="space-y-6 sm:space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                  <div>
                    <label className="block text-base sm:text-lg font-bold text-gray-700 mb-3 sm:mb-4">
                      {t.enterLicensePlate}
                    </label>
                    <Input
                      type="text"
                      placeholder={t.platePlaceholder}
                      value={licensePlate}
                      onChange={(e) => setLicensePlate(e.target.value)}
                      className="h-12 sm:h-14 md:h-16 text-base sm:text-lg border-2 sm:border-3 border-gray-200 rounded-xl sm:rounded-2xl focus:border-blue-500 focus:ring-blue-500 shadow-lg bg-white/80"
                    />
                  </div>
                  <div>
                    <label className="block text-base sm:text-lg font-bold text-gray-700 mb-3 sm:mb-4">
                      {t.selectState}
                    </label>
                    <Select value={selectedState} onValueChange={setSelectedState}>
                      <SelectTrigger className="h-12 sm:h-14 md:h-16 text-base sm:text-lg border-2 sm:border-3 border-gray-200 rounded-xl sm:rounded-2xl focus:border-blue-500 focus:ring-blue-500 shadow-lg bg-white/80">
                        <SelectValue placeholder={t.selectState} />
                      </SelectTrigger>
                      <SelectContent className="max-h-60 bg-white shadow-2xl border-2 rounded-xl z-50">
                        {US_STATES.map((state) => (
                          <SelectItem key={state} value={state} className="text-base sm:text-lg py-2 sm:py-3">
                            {state}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <Button 
                  type="submit"
                  className="w-full h-12 sm:h-14 md:h-16 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 hover:from-blue-700 hover:via-purple-700 hover:to-indigo-700 text-white font-bold text-base sm:text-lg md:text-xl rounded-xl sm:rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300 border-0"
                >
                  <Search className="h-5 w-5 sm:h-6 sm:w-6 mr-2 sm:mr-3" />
                  {t.getReport}
                </Button>
              </form>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* Payment Methods */}
      <div className="text-center">
        <p className="text-gray-600 mb-6 sm:mb-8 font-semibold text-base sm:text-lg px-4">{t.paymentMethods}</p>
        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8 lg:gap-12 opacity-80 px-4">
          <div className="flex items-center space-x-2 sm:space-x-3 bg-white/60 px-3 sm:px-4 md:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl shadow-lg backdrop-blur-sm">
            <CreditCard className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 text-blue-600" />
            <span className="font-bold text-gray-700 text-sm sm:text-base md:text-lg">Visa</span>
          </div>
          <div className="flex items-center space-x-2 sm:space-x-3 bg-white/60 px-3 sm:px-4 md:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl shadow-lg backdrop-blur-sm">
            <CreditCard className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 text-red-600" />
            <span className="font-bold text-gray-700 text-sm sm:text-base md:text-lg">Mastercard</span>
          </div>
          <div className="flex items-center space-x-2 sm:space-x-3 bg-white/60 px-3 sm:px-4 md:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl shadow-lg backdrop-blur-sm">
            <CreditCard className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 text-blue-500" />
            <span className="font-bold text-gray-700 text-sm sm:text-base md:text-lg">Amex</span>
          </div>
          <div className="flex items-center space-x-2 sm:space-x-3 bg-white/60 px-3 sm:px-4 md:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl shadow-lg backdrop-blur-sm">
            <CreditCard className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 text-yellow-500" />
            <span className="font-bold text-gray-700 text-sm sm:text-base md:text-lg">PayPal</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
