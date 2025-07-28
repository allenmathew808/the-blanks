import React from 'react';
import { Palette, Award, Users, Truck } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Palette,
      title: 'Design Your Own Tee',
      description: 'Create custom graphics and designs with our easy-to-use design tool.'
    },
    {
      icon: Award,
      title: 'Premium Print Quality',
      description: 'High-quality prints that last wash after wash with our premium materials.'
    },
    {
      icon: Users,
      title: 'Custom Apparel for Vendors',
      description: 'Bulk orders and custom branding for businesses and vendors.'
    },
    {
      icon: Truck,
      title: 'Fast Local Shipping',
      description: 'Quick delivery across the country with tracking and support.'
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-body font-bold text-charcoal-800 mb-4">
            Why Choose The Blanks?
          </h2>
          <p className="text-lg font-body text-charcoal-600 max-w-2xl mx-auto">
            We combine quality materials, innovative design tools, and exceptional service to deliver the perfect tee.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-taupe-50 hover:bg-taupe-100 transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-charcoal-800 rounded-lg flex items-center justify-center group-hover:bg-charcoal-700 transition-colors duration-200">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-body font-semibold text-charcoal-800 mb-2">
                    {feature.title}
                  </h3>
                  <p className="font-body text-charcoal-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features; 