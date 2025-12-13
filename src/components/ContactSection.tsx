import React from 'react';
import { MapPin, Phone, Mail, Clock, ExternalLink } from 'lucide-react';
import { SHOP_ADDRESS, SHOP_EMAIL, SHOP_PHONE, SHOP_NAME } from '../constants';
import Button from './ui/Button';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-dark-800 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Visit Our Store</h2>
            <p className="text-slate-400 text-lg mb-10">
              Experience the technology firsthand. Our experts are ready to assist you with demonstrations, 
              upgrades, and technical support.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-primary/20 p-3 rounded-lg text-primary">
                  <MapPin className="h-6 w-6" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-white">Location</h3>
                  <p className="text-slate-400 mt-1">{SHOP_ADDRESS}</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 bg-secondary/20 p-3 rounded-lg text-secondary">
                  <Phone className="h-6 w-6" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-white">Contact</h3>
                  <p className="text-slate-400 mt-1">Phone: {SHOP_PHONE}</p>
                  <p className="text-slate-400">Email: {SHOP_EMAIL}</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 bg-emerald-500/20 p-3 rounded-lg text-emerald-400">
                  <Clock className="h-6 w-6" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-white">Business Hours</h3>
                  <p className="text-slate-400 mt-1">Mon - Sat: 10:00 AM - 9:00 PM</p>
                  <p className="text-slate-400">Sun: 11:00 AM - 7:00 PM</p>
                </div>
              </div>
            </div>

            <div className="mt-10">
                <Button className="w-full sm:w-auto" onClick={() => window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(SHOP_ADDRESS)}`, '_blank')}>
                    Get Directions <ExternalLink className="ml-2 h-4 w-4"/>
                </Button>
            </div>
          </div>

          <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl h-[400px] bg-dark-900 group">
             {/* Fake Map UI for aesthetics since we can't key a real map */}
             <div className="absolute inset-0 bg-slate-800 flex items-center justify-center">
                 <img 
                    src="https://picsum.photos/seed/maploc/800/600?grayscale&blur=2" 
                    alt="Map Background" 
                    className="opacity-40 object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent"></div>
             </div>
             
             {/* Map Pin Overlay */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                 <div className="relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <MapPin className="h-10 w-10 text-primary relative z-10 fill-dark-900" />
                 </div>
                 <div className="mt-4 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl text-center">
                     <p className="text-white font-bold">{SHOP_NAME}</p>
                     <p className="text-xs text-slate-300">Hitech City, Hyderabad</p>
                 </div>
             </div>
             
             <div className="absolute bottom-4 right-4 bg-dark-900/90 backdrop-blur border border-white/10 p-2 rounded text-xs text-slate-500">
                 Map Data ©2025 TechNova
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;