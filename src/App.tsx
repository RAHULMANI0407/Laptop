import React, { useState } from 'react';
import Header from './src/components/Header';
import Hero from './src/components/Hero';
import Catalog from './src/components/Catalog';
import ContactSection from './src/components/ContactSection';
import AboutSection from './src/components/AboutSection';
import Footer from './src/components/Footer';
import ChatWidget from './src/components/ChatWidget';
import CartDrawer from './src/components/CartDrawer';
import { PRODUCTS } from './constants';
import { CartProvider } from './src/components/contexts/CartContext';

function App() {
  const [globalSearchQuery, setGlobalSearchQuery] = useState('');

  return (
    <CartProvider>
      <div className="min-h-screen bg-dark-900 font-sans selection:bg-primary selection:text-white">
        <Header 
          onSearch={setGlobalSearchQuery} 
          searchValue={globalSearchQuery}
        />
        
        <main>
          <Hero />
          
          <Catalog 
            products={PRODUCTS} 
            externalSearchQuery={globalSearchQuery}
          />

          <AboutSection />
          
          <ContactSection />
        </main>

        <Footer />
        
        <ChatWidget />
        <CartDrawer />
      </div>
    </CartProvider>
  );
}

export default App;
