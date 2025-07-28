import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="section-padding bg-gradient-to-br from-taupe-50 to-charcoal-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-decorative text-charcoal-800 leading-tight">
                Design it.
                <br />
                <span className="text-charcoal-600">Wear it.</span>
                <br />
                <span className="text-charcoal-700">Own it.</span>
              </h1>
              
              <p className="text-xl md:text-2xl font-body text-charcoal-600 leading-relaxed max-w-2xl">
                Graphic T-shirts and custom prints made for your voice and vibe.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary text-lg px-8 py-4 font-body">
                Browse Collection
              </button>
              <button className="btn-secondary text-lg px-8 py-4 font-body">
                Create Your Custom Tee
              </button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-charcoal-100 to-taupe-200 rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/images/model-girl-urban.png"
                alt="Model wearing The Blanks T-shirt in an urban street setting"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 