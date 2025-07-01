import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Car, CreditCard, Shield, Star, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';

const SearchForm = () => {
  const navigate = useNavigate();
  const [searchType, setSearchType] = useState('vin');
  const [vinNumber, setVinNumber] = useState('');
  const [plateNumber, setPlateNumber] = useState('');
  const [selectedState, setSelectedState] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if ((searchType === 'vin' && vinNumber) || (searchType === 'plate' && plateNumber && selectedState)) {
      navigate('/report');
    }
  };

  const states = [
    'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware',
    'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
    'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
    'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico',
    'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania',
    'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
    'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
  ];

  return (
    <div className="max-w-6xl mx-auto">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          Get Your Vehicle's
          <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Complete History
          </span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Discover accidents, service records, ownership history, and more with our comprehensive vehicle reports
        </p>
      </div>

      {/* Search Form */}
      <Card className="bg-white/90 backdrop-blur-sm shadow-2xl border-0 mb-12">
        <CardContent className="p-8">
          <form onSubmit={handleSearch} className="space-y-6">
            {/* Search Type Toggle */}
            <div className="flex justify-center mb-8">
              <div className="bg-gray-100 p-1 rounded-xl">
                <button
                  type="button"
                  onClick={() => setSearchType('vin')}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                    searchType === 'vin'
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'text-gray-600 hover:text-blue-600'
                  }`}
                >
                  Search by VIN
                </button>
                <button
                  type="button"
                  onClick={() => setSearchType('plate')}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                    searchType === 'plate'
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'text-gray-600 hover:text-blue-600'
                  }`}
                >
                  Search by License Plate
                </button>
              </div>
            </div>

            {/* VIN Search */}
            {searchType === 'vin' && (
              <div className="space-y-4">
                <div className="relative">
                  <Car className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <Input
                    type="text"
                    placeholder="Enter 17-digit VIN number"
                    value={vinNumber}
                    onChange={(e) => setVinNumber(e.target.value)}
                    className="pl-12 h-14 text-lg border-2 border-gray-200 focus:border-blue-500 rounded-xl"
                    maxLength={17}
                  />
                </div>
                <p className="text-sm text-gray-500 text-center">
                  VIN is usually found on your dashboard, driver's side door, or vehicle registration
                </p>
              </div>
            )}

            {/* License Plate Search */}
            {searchType === 'plate' && (
              <div className="grid md:grid-cols-2 gap-4">
                <div className="relative">
                  <Input
                    type="text"
                    placeholder="License Plate Number"
                    value={plateNumber}
                    onChange={(e) => setPlateNumber(e.target.value)}
                    className="h-14 text-lg border-2 border-gray-200 focus:border-blue-500 rounded-xl"
                  />
                </div>
                <Select value={selectedState} onValueChange={setSelectedState}>
                  <SelectTrigger className="h-14 text-lg border-2 border-gray-200 focus:border-blue-500 rounded-xl">
                    <SelectValue placeholder="Select State" />
                  </SelectTrigger>
                  <SelectContent className="max-h-60">
                    {states.map((state) => (
                      <SelectItem key={state} value={state}>
                        {state}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            )}

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-4 text-lg rounded-xl shadow-lg transform hover:scale-105 transition-all duration-200"
              disabled={
                (searchType === 'vin' && !vinNumber) ||
                (searchType === 'plate' && (!plateNumber || !selectedState))
              }
            >
              <Search className="h-5 w-5 mr-2" />
              Get Vehicle Report
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Features Grid */}
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
          <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <Shield className="h-8 w-8 text-blue-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Accident History</h3>
          <p className="text-gray-600">Detailed accident reports and damage assessments</p>
        </div>
        
        <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
          <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <Clock className="h-8 w-8 text-green-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Service Records</h3>
          <p className="text-gray-600">Complete maintenance and repair history</p>
        </div>
        
        <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
          <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <Star className="h-8 w-8 text-purple-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Title Information</h3>
          <p className="text-gray-600">Ownership history and title status verification</p>
        </div>
      </div>

      {/* Payment Methods */}
      <div className="text-center mb-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Secure Payment Options</h3>
        <div className="flex justify-center items-center space-x-6 opacity-70">
          <div className="bg-white px-4 py-2 rounded-lg shadow-md">
            <CreditCard className="h-6 w-6 text-blue-600" />
          </div>
          <div className="bg-white px-4 py-2 rounded-lg shadow-md text-sm font-bold text-blue-600">
            VISA
          </div>
          <div className="bg-white px-4 py-2 rounded-lg shadow-md text-sm font-bold text-red-600">
            MC
          </div>
          <div className="bg-white px-4 py-2 rounded-lg shadow-md text-sm font-bold text-blue-600">
            AMEX
          </div>
          <div className="bg-white px-4 py-2 rounded-lg shadow-md text-sm font-bold text-blue-600">
            PayPal
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
