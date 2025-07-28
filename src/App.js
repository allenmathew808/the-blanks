import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Lifestyle from './components/Lifestyle';
import VendorCallout from './components/VendorCallout';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-off-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Lifestyle />
        <VendorCallout />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

export default App; 