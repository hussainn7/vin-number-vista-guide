
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'EN' | 'ES';

interface Translations {
  // Header
  signIn: string;
  
  // Hero Section
  heroTitle: string;
  heroSubtitle: string;
  
  // Search Form
  searchByVin: string;
  searchByPlate: string;
  enterVin: string;
  vinPlaceholder: string;
  enterLicensePlate: string;
  platePlaceholder: string;
  selectState: string;
  getReport: string;
  
  // Payment
  paymentMethods: string;
  
  // Testimonials
  testimonialsTitle: string;
  testimonialsSubtitle: string;
  
  // FAQ
  faqTitle: string;
  
  // Footer
  aboutUs: string;
  services: string;
  support: string;
  legal: string;
  
  // Report page
  selectReportSource: string;
  chooseDataSource: string;
  source: string;
  selectSource: string;
  backToSearch: string;
  vehicleHistoryReport: string;
  vehicleOverview: string;
  titleInformation: string;
  cleanTitle: string;
  serviceRecords: string;
  accidentHistory: string;
  noAccidentsReported: string;
  demoReportNote: string;
}

const translations: Record<Language, Translations> = {
  EN: {
    signIn: 'Sign In',
    heroTitle: 'Get Instant Vehicle History Reports',
    heroSubtitle: 'Check any vehicle\'s history with our comprehensive reports. Get detailed information about accidents, service records, and more.',
    searchByVin: 'Search by VIN',
    searchByPlate: 'Search by License Plate',
    enterVin: 'Enter VIN Number',
    vinPlaceholder: 'Enter 17-digit VIN',
    enterLicensePlate: 'Enter License Plate',
    platePlaceholder: 'Enter license plate',
    selectState: 'Select State',
    getReport: 'Get Report',
    paymentMethods: 'Accepted Payment Methods',
    testimonialsTitle: 'Trusted by Thousands',
    testimonialsSubtitle: 'See what our customers say about our vehicle history reports',
    faqTitle: 'Frequently Asked Questions',
    aboutUs: 'About Us',
    services: 'Services',
    support: 'Support',
    legal: 'Legal',
    selectReportSource: 'Select Report Source',
    chooseDataSource: 'Choose your preferred data source',
    source: 'Source',
    selectSource: 'Select a source',
    backToSearch: 'Back to Search',
    vehicleHistoryReport: 'Vehicle History Report',
    vehicleOverview: 'Vehicle Overview',
    titleInformation: 'Title Information',
    cleanTitle: 'Clean Title - No Issues Found',
    serviceRecords: 'Service Records',
    accidentHistory: 'Accident History',
    noAccidentsReported: 'No Accidents Reported',
    demoReportNote: 'This is a demo report. Actual reports may contain additional information.'
  },
  ES: {
    signIn: 'Iniciar Sesión',
    heroTitle: 'Obtenga Reportes Instantáneos del Historial del Vehículo',
    heroSubtitle: 'Verifique el historial de cualquier vehículo con nuestros reportes completos. Obtenga información detallada sobre accidentes, registros de servicio y más.',
    searchByVin: 'Buscar por VIN',
    searchByPlate: 'Buscar por Placa',
    enterVin: 'Ingrese Número VIN',
    vinPlaceholder: 'Ingrese VIN de 17 dígitos',
    enterLicensePlate: 'Ingrese Placa',
    platePlaceholder: 'Ingrese número de placa',
    selectState: 'Seleccione Estado',
    getReport: 'Obtener Reporte',
    paymentMethods: 'Métodos de Pago Aceptados',
    testimonialsTitle: 'Confiado por Miles',
    testimonialsSubtitle: 'Vea lo que dicen nuestros clientes sobre nuestros reportes del historial del vehículo',
    faqTitle: 'Preguntas Frecuentes',
    aboutUs: 'Acerca de Nosotros',
    services: 'Servicios',
    support: 'Soporte',
    legal: 'Legal',
    selectReportSource: 'Seleccionar Fuente del Reporte',
    chooseDataSource: 'Elija su fuente de datos preferida',
    source: 'Fuente',
    selectSource: 'Seleccione una fuente',
    backToSearch: 'Volver a Búsqueda',
    vehicleHistoryReport: 'Reporte del Historial del Vehículo',
    vehicleOverview: 'Resumen del Vehículo',
    titleInformation: 'Información del Título',
    cleanTitle: 'Título Limpio - No se Encontraron Problemas',
    serviceRecords: 'Registros de Servicio',
    accidentHistory: 'Historial de Accidentes',
    noAccidentsReported: 'No se Reportaron Accidentes',
    demoReportNote: 'Este es un reporte de demostración. Los reportes reales pueden contener información adicional.'
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('EN');
  
  const value = {
    language,
    setLanguage,
    t: translations[language]
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
