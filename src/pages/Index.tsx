
import React from 'react';
import Header from '@/components/Header';
import SearchForm from '@/components/SearchForm';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Header />
      
      <main>
        {/* Hero Section with Search Form */}
        <section className="py-20 px-6">
          <SearchForm />
        </section>

        {/* Testimonials Section */}
        <Testimonials />

        {/* FAQ Section */}
        <FAQ />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
