import React, { useState } from 'react';
import { Menu, X, Laptop, ShoppingBag, Search } from 'lucide-react';
import { SHOP_NAME } from '../constants';
import { useCart } from '../contexts/CartContext';

interface HeaderProps {
  onSearch: (query: string) => void;
  searchValue: string;
}

const Header: React.FC<HeaderProps> = ({ onSearch, searchValue }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { setIsCartOpen, itemCount } = useCart();

  const navLinks = [
    { name: 'Shop', href: '#shop' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed w-full z-40 bg-dark-900/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <div className="text-primary flex items-center gap-2 mr-8">
              <Laptop className="h-8 w-8" />
              <span className="font-bold text-xl tracking-tight text-white hidden sm:block">{SHOP_NAME}</span>
            </div>
            
            {/* Desktop Nav */}
            <div className="hidden md:block">
              <div className="flex items-baseline space-x-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-slate-300 hover:text-white hover:bg-white/10 px-3 py-2 rounded-md text-sm font-medium transition-all"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Search Bar (Center/Right) */}
          <div className="flex-1 max-w-md mx-4 hidden sm:block">
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-slate-500 group-focus-within:text-primary transition-colors" />
              </div>
              <input
                type="text"
                value={searchValue}
                onChange={(e) => {
                  onSearch(e.target.value);
                  // Scroll to shop if searching and not already there
                  if (e.target.value && window.location.hash !== '#shop') {
                    document.getElementById('shop')?.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="block w-full pl-10 pr-3 py-2 border border-white/10 rounded-full leading-5 bg-dark-800 text-slate-300 placeholder-slate-500 focus:outline-none focus:bg-dark-900 focus:ring-1 focus:ring-primary focus:border-primary sm:text-sm transition-all"
                placeholder="Search laptops, gear..."
              />
            </div>
          </div>
          
          <div className="flex items-center gap-4">
             {/* Cart Button */}
             <button 
              className="text-slate-300 hover:text-white p-2 relative group"
              onClick={() => setIsCartOpen(true)}
             >
                <div className="bg-white/5 p-2 rounded-full group-hover:bg-primary/20 transition-colors">
                    <ShoppingBag className="h-6 w-6 group-hover:text-primary transition-colors" />
                </div>
                {itemCount > 0 && (
                  <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/4 -translate-y-1/4 bg-primary rounded-full shadow-lg border border-dark-900">
                    {itemCount}
                  </span>
                )}
             </button>

             {/* Mobile Menu Button */}
             <div className="flex md:hidden">
                <button
                onClick={() => setIsOpen(!isOpen)}
                className="bg-dark-800 inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-dark-700 focus:outline-none"
                >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-dark-800 border-b border-white/10 animate-in slide-in-from-top-5 duration-200">
          <div className="p-4 border-b border-white/5">
            <input
                type="text"
                value={searchValue}
                onChange={(e) => {
                  onSearch(e.target.value);
                  document.getElementById('shop')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="block w-full pl-4 pr-3 py-2 border border-white/10 rounded-lg bg-dark-900 text-white placeholder-slate-500 focus:ring-1 focus:ring-primary focus:border-primary text-sm"
                placeholder="Search products..."
              />
          </div>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-300 hover:text-white hover:bg-dark-700 block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;