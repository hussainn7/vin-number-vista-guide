
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, FileText, Shield, AlertTriangle, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const Report = () => {
  const navigate = useNavigate();
  const [source, setSource] = useState('');
  const [showReport, setShowReport] = useState(false);

  const handleGetReport = () => {
    if (source) {
      setShowReport(true);
    }
  };

  if (showReport) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
        <div className="container mx-auto px-6 py-8">
          <Button 
            onClick={() => navigate('/')} 
            variant="outline" 
            className="mb-6 bg-white/80"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Search
          </Button>

          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Vehicle History Report</h1>
              <p className="text-gray-600">VIN: 1HGBH41JXMN109186 | Source: {source}</p>
            </div>

            <div className="grid gap-6">
              <Card className="bg-white/90 backdrop-blur-sm shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    Vehicle Overview
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p><strong>Make:</strong> Honda</p>
                      <p><strong>Model:</strong> Civic</p>
                      <p><strong>Year:</strong> 2021</p>
                      <p><strong>Body Style:</strong> Sedan</p>
                    </div>
                    <div>
                      <p><strong>Engine:</strong> 2.0L 4-Cylinder</p>
                      <p><strong>Transmission:</strong> CVT</p>
                      <p><strong>Drivetrain:</strong> FWD</p>
                      <p><strong>Fuel Type:</strong> Gasoline</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/90 backdrop-blur-sm shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Shield className="h-5 w-5 text-blue-500 mr-2" />
                    Title Information
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-2 text-green-600">
                    <CheckCircle className="h-4 w-4" />
                    <span>Clean Title - No Issues Found</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/90 backdrop-blur-sm shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <FileText className="h-5 w-5 text-purple-500 mr-2" />
                    Service Records
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="border-l-4 border-green-500 pl-4">
                      <p className="font-semibold">Regular Maintenance - 03/15/2024</p>
                      <p className="text-sm text-gray-600">Oil change, filter replacement at 25,000 miles</p>
                    </div>
                    <div className="border-l-4 border-green-500 pl-4">
                      <p className="font-semibold">Inspection - 01/10/2024</p>
                      <p className="text-sm text-gray-600">State inspection passed</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/90 backdrop-blur-sm shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <AlertTriangle className="h-5 w-5 text-orange-500 mr-2" />
                    Accident History
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-2 text-green-600">
                    <CheckCircle className="h-4 w-4" />
                    <span>No Accidents Reported</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-8">
              <p className="text-sm text-gray-500">
                This is a demo report. Actual reports may contain additional information.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex items-center justify-center">
      <div className="max-w-md w-full mx-6">
        <Card className="bg-white/90 backdrop-blur-sm shadow-xl border-0">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold text-gray-900">
              Select Report Source
            </CardTitle>
            <p className="text-gray-600">Choose your preferred data source</p>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Source (Источник)
              </label>
              <Select value={source} onValueChange={setSource}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a source" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="AutoCheck">AutoCheck</SelectItem>
                  <SelectItem value="Carfax">Carfax</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button 
              onClick={handleGetReport}
              disabled={!source}
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-3 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              Get Report
            </Button>

            <Button 
              onClick={() => navigate('/')}
              variant="outline"
              className="w-full"
            >
              Back to Search
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Report;
