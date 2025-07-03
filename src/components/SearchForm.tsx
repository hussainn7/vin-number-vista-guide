
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Shield, CreditCard, Car, Zap, Clock, CheckCircle } from 'lucide-react';
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
            <TabsList className="grid w-full grid-cols-2 mb-6 sm:mb-8 md:mb-10 bg-gradient-to-r from-gray-100 to-blue-100 rounded-xl sm:rounded-2xl p-1 sm:p-2 shadow-inner mx-auto max-w-md">
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
            
            <TabsContent value="vin" className="text-center">
              {/* VIN Benefits */}
              <div className="mb-8 sm:mb-10">
                <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mb-6">
                  <div className="flex items-center space-x-2 bg-gradient-to-r from-green-50 to-emerald-50 px-4 py-2 rounded-full border border-green-200">
                    <Zap className="h-4 w-4 text-green-600" />
                    <span className="text-sm font-semibold text-green-700">Instant Results</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-gradient-to-r from-blue-50 to-indigo-50 px-4 py-2 rounded-full border border-blue-200">
                    <CheckCircle className="h-4 w-4 text-blue-600" />
                    <span className="text-sm font-semibold text-blue-700">100% Accurate</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-gradient-to-r from-purple-50 to-pink-50 px-4 py-2 rounded-full border border-purple-200">
                    <Clock className="h-4 w-4 text-purple-600" />
                    <span className="text-sm font-semibold text-purple-700">30 Seconds</span>
                  </div>
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3">
                  🔍 Unlock Your Vehicle's Complete History
                </h3>
                <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
                  Enter any VIN number to instantly reveal accidents, title issues, service records, and more. 
                  <span className="font-semibold text-blue-600"> Don't buy blind - know before you go!</span>
                </p>
              </div>

              <form onSubmit={handleVinSearch} className="space-y-6 sm:space-y-8 max-w-2xl mx-auto">
                <div>
                  <label className="block text-base sm:text-lg font-bold text-gray-700 mb-3 sm:mb-4">
                    {t.enterVin}
                  </label>
                  <div className="relative">
                    <Input
                      type="text"
                      placeholder="e.g., 1HGCM82633A123456"
                      value={vinNumber}
                      onChange={(e) => setVinNumber(e.target.value.toUpperCase())}
                      className="h-14 sm:h-16 md:h-18 text-base sm:text-lg border-3 border-gray-200 rounded-xl sm:rounded-2xl focus:border-blue-500 focus:ring-blue-500 shadow-lg bg-white/90 text-center font-mono tracking-wider"
                      maxLength={17}
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-4">
                      <Search className="h-5 w-5 text-gray-400" />
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-500 mt-2 text-center">
                    VIN is usually found on your dashboard, driver's door, or registration
                  </p>
                </div>
                <Button 
                  type="submit"
                  className="w-full h-14 sm:h-16 md:h-18 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 hover:from-blue-700 hover:via-purple-700 hover:to-indigo-700 text-white font-bold text-base sm:text-lg md:text-xl rounded-xl sm:rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300 border-0"
                >
                  <Zap className="h-5 w-5 sm:h-6 sm:w-6 mr-2 sm:mr-3" />
                  Get My Vehicle Report Now - $29.99
                </Button>
                <p className="text-xs sm:text-sm text-gray-500 text-center">
                  ⚡ Instant download • 💯 Money-back guarantee • 🔒 Secure payment
                </p>
              </form>
            </TabsContent>
            
            <TabsContent value="plate" className="text-center">
              <div className="mb-6 sm:mb-8">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3">
                  🚗 Search by License Plate
                </h3>
                <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
                  Don't have the VIN? No problem! Search using the license plate number and state.
                </p>
              </div>

              <form onSubmit={handlePlateSearch} className="space-y-6 sm:space-y-8 max-w-2xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                  <div>
                    <label className="block text-base sm:text-lg font-bold text-gray-700 mb-3 sm:mb-4">
                      {t.enterLicensePlate}
                    </label>
                    <Input
                      type="text"
                      placeholder="ABC1234"
                      value={licensePlate}
                      onChange={(e) => setLicensePlate(e.target.value.toUpperCase())}
                      className="h-12 sm:h-14 md:h-16 text-base sm:text-lg border-2 sm:border-3 border-gray-200 rounded-xl sm:rounded-2xl focus:border-blue-500 focus:ring-blue-500 shadow-lg bg-white/80 text-center font-mono tracking-wider"
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
                  Get Report by License Plate - $29.99
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
