import React from 'react';
import { Award, Users, ThumbsUp } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-dark-900 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose TechNova?</h2>
          <p className="text-slate-400 text-lg">
            We aren't just a shop; we are technology enthusiasts passionate about helping you build your perfect setup.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="text-center group">
            <div className="w-16 h-16 mx-auto bg-dark-800 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-white/10 group-hover:border-primary/50">
              <Award className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Premium Quality</h3>
            <p className="text-slate-400 leading-relaxed">
              We are authorized retailers for major global brands, ensuring every product is 100% genuine and backed by official warranties.
            </p>
          </div>

          <div className="text-center group">
            <div className="w-16 h-16 mx-auto bg-dark-800 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-white/10 group-hover:border-secondary/50">
              <Users className="h-8 w-8 text-secondary" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Customer First</h3>
            <p className="text-slate-400 leading-relaxed">
              Our relationship doesn't end at checkout. We offer lifetime technical support and easy returns for peace of mind.
            </p>
          </div>

          <div className="text-center group">
            <div className="w-16 h-16 mx-auto bg-dark-800 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-white/10 group-hover:border-emerald-500/50">
              <ThumbsUp className="h-8 w-8 text-emerald-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Best Prices</h3>
            <p className="text-slate-400 leading-relaxed">
              We monitor the market daily to ensure our prices in INR are competitive, offering you the best value for your investment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;