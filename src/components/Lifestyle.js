import React from 'react';

const Lifestyle = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-charcoal-50 to-taupe-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Lifestyle Image */}
          <div className="relative">
            <div className="aspect-[4/5] bg-gradient-to-br from-charcoal-100 to-taupe-200 rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/images/model-back-studio.png"
                alt="Back of model wearing 'blanks' shirt in warm studio lighting"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Floating elements for visual interest */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-taupe-300 rounded-full opacity-20"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-charcoal-300 rounded-full opacity-20"></div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-decorative text-charcoal-800 leading-tight">
                We don't follow fashion.
                <br />
                <span className="text-charcoal-600">We wear meaning.</span>
              </h2>
              
              <p className="text-xl font-body text-charcoal-600 leading-relaxed max-w-2xl">
                Every design tells a story. Every print carries a message. 
                We believe in clothing that speaks louder than words.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary text-lg px-8 py-4 font-body">
                Explore Our Story
              </button>
              <button className="btn-secondary text-lg px-8 py-4 font-body">
                View Collections
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-charcoal-200">
              <div className="text-center">
                <div className="text-3xl font-body font-bold text-charcoal-800">10K+</div>
                <div className="text-sm font-body text-charcoal-600">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-body font-bold text-charcoal-800">500+</div>
                <div className="text-sm font-body text-charcoal-600">Unique Designs</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-body font-bold text-charcoal-800">24hr</div>
                <div className="text-sm font-body text-charcoal-600">Fast Shipping</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Lifestyle; 