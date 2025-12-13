import React, { useState } from 'react';

import Header from './components/Header';
import Hero from './components/Hero';
import Catalog from './components/Catalog';
import ContactSection from './components/ContactSection';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';
import CartDrawer from './components/CartDrawer';

import { PRODUCTS } from './constants';
import { CartProvider } from './components/contexts/CartContext';

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
