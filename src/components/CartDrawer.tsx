import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from './contexts/CartContext';
import Button from './ui/Button';
import CheckoutModal from './CheckoutModal';

const CartDrawer: React.FC = () => {
  const { items, removeFromCart, updateQuantity, total, isCartOpen, setIsCartOpen } = useCart();
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  if (!isCartOpen) return null;

  return (
    <>
      <div className="fixed inset-0 z-50 flex justify-end">
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" 
          onClick={() => setIsCartOpen(false)}
        />

        {/* Drawer */}
        <div className="relative w-full max-w-md bg-dark-900 shadow-2xl h-full flex flex-col animate-in slide-in-from-right duration-300 border-l border-white/10">
          <div className="flex items-center justify-between p-6 border-b border-white/10">
            <div className="flex items-center gap-3">
              <ShoppingBag className="h-6 w-6 text-primary" />
              <h2 className="text-xl font-bold text-white">Your Cart ({items.length})</h2>
            </div>
            <button 
              onClick={() => setIsCartOpen(false)}
              className="text-slate-400 hover:text-white transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                <div className="w-16 h-16 bg-dark-800 rounded-full flex items-center justify-center">
                  <ShoppingBag className="h-8 w-8 text-slate-600" />
                </div>
                <p className="text-slate-400 text-lg">Your cart is empty</p>
                <Button variant="outline" onClick={() => setIsCartOpen(false)}>
                  Continue Shopping
                </Button>
              </div>
            ) : (
              items.map(item => (
                <div key={item.id} className="flex gap-4 bg-dark-800/50 p-4 rounded-xl border border-white/5">
                  <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg bg-white/5">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-medium text-white line-clamp-1">{item.name}</h3>
                      <p className="text-primary font-bold">₹{item.price.toLocaleString('en-IN')}</p>
                    </div>
                    
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center gap-3 bg-dark-900 rounded-lg px-2 py-1 border border-white/10">
                        <button 
                          onClick={() => updateQuantity(item.id, -1)}
                          className="text-slate-400 hover:text-white p-1"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="text-sm font-medium text-white w-4 text-center">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, 1)}
                          className="text-slate-400 hover:text-white p-1"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                      
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="text-slate-500 hover:text-red-400 transition-colors p-2"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {items.length > 0 && (
            <div className="p-6 bg-dark-800 border-t border-white/10 space-y-4">
              <div className="flex justify-between items-center text-slate-400">
                <span>Subtotal</span>
                <span>₹{total.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between items-center text-xl font-bold text-white pt-2 border-t border-white/5">
                <span>Total</span>
                <span>₹{total.toLocaleString('en-IN')}</span>
              </div>
              <Button className="w-full" size="lg" onClick={() => setIsCheckoutOpen(true)}>
                Proceed to Checkout
              </Button>
            </div>
          )}
        </div>
      </div>
      
      <CheckoutModal 
        isOpen={isCheckoutOpen} 
        onClose={() => setIsCheckoutOpen(false)} 
      />
    </>
  );
};

export default CartDrawer;
