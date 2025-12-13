import React from 'react';
import Button from './ui/Button';
import { ArrowRight, Cpu, ShieldCheck, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-primary/20 rounded-full blur-[100px] -z-10 opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-[800px] h-[400px] bg-secondary/20 rounded-full blur-[100px] -z-10 opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-primary text-sm font-medium mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
            </span>
            New M3 MacBooks Available
          </div>
          
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            Power Your Passion with <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Next-Gen Tech
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
            Discover premium laptops and accessories tailored for creators, gamers, and professionals. 
            Experience the future of computing today at TechNova.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" onClick={() => document.getElementById('shop')?.scrollIntoView({ behavior: 'smooth'})}>
              Shop Now <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth'})}>
              Learn More
            </Button>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-sm">
            <div className="mx-auto w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center text-primary mb-4">
              <Zap className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">High Performance</h3>
            <p className="text-slate-400 text-sm">Top-tier specs from brands like Apple, Dell, and ASUS for unmatched speed.</p>
          </div>
          
          <div className="p-6 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-sm">
            <div className="mx-auto w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center text-secondary mb-4">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Official Warranty</h3>
            <p className="text-slate-400 text-sm">100% genuine products with manufacturer warranty and dedicated support.</p>
          </div>
          
          <div className="p-6 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-sm">
            <div className="mx-auto w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center text-emerald-400 mb-4">
              <Cpu className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Expert Advice</h3>
            <p className="text-slate-400 text-sm">Not sure what to buy? Use our AI Assistant or visit us for a consultation.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;