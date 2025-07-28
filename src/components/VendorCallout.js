import React from 'react';
import { Store, ArrowRight } from 'lucide-react';

const VendorCallout = () => {
  return (
    <section id="vendors" className="section-padding bg-charcoal-800 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                  <Store className="w-6 h-6 text-white" />
                </div>
                <span className="font-body text-taupe-300 font-medium">Vendor Program</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-body font-bold leading-tight">
                Want to sell our designs or brand your own?
              </h2>
              
              <p className="text-xl font-body text-charcoal-200 leading-relaxed max-w-2xl">
                Join our network of vendors and partners. Get access to exclusive designs, 
                bulk pricing, and custom branding options for your business.
              </p>
            </div>

            <div className="space-y-6">
              <button className="group bg-white text-charcoal-800 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-charcoal-100 transition-colors duration-200 flex items-center space-x-3 font-body">
                <span>Become a Vendor</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              
              <p className="text-sm font-body text-charcoal-300">
                No upfront costs • Flexible terms • Dedicated support
              </p>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-charcoal-700 to-taupe-800 rounded-2xl flex items-center justify-center p-8">
              <div className="text-center space-y-6">
                <div className="grid grid-cols-2 gap-4 max-w-xs mx-auto">
                  <div className="aspect-square bg-white/10 rounded-lg flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                    </svg>
                  </div>
                  <div className="aspect-square bg-white/10 rounded-lg flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="aspect-square bg-white/10 rounded-lg flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                    </svg>
                  </div>
                  <div className="aspect-square bg-white/10 rounded-lg flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                </div>
                <p className="text-white/80 font-body font-medium">Vendor Dashboard</p>
                <p className="text-sm font-body text-white/60">Manage orders, track sales, and customize your store</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VendorCallout; 