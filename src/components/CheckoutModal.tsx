import React, { useState } from 'react';
import { X, MessageCircle } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import Button from './ui/Button';
import { SHOP_PHONE } from '../constants';
import { CustomerDetails } from '../types';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CheckoutModal: React.FC<CheckoutModalProps> = ({ isOpen, onClose }) => {
  const { items, total, clearCart } = useCart();
  const [details, setDetails] = useState<CustomerDetails>({ name: '', email: '', phone: '' });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct WhatsApp Message
    const itemsList = items.map(item => 
      `- ${item.name} x${item.quantity} (₹${(item.price * item.quantity).toLocaleString('en-IN')})`
    ).join('\n');

    const message = `*New Order Request*\n\n*Customer Details:*\nName: ${details.name}\nEmail: ${details.email}\nPhone: ${details.phone}\n\n*Order Summary:*\n${itemsList}\n\n*Total Amount: ₹${total.toLocaleString('en-IN')}*\n\nI would like to proceed with this order.`;

    const encodedMessage = encodeURIComponent(message);
    const cleanPhone = SHOP_PHONE.replace(/[^0-9]/g, ''); // Remove spaces and symbols
    
    // Open WhatsApp
    window.open(`https://wa.me/${9840500943}?text=${encodedMessage}`, '_blank');
    
    clearCart();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose}></div>
      
      <div className="relative bg-dark-800 rounded-2xl w-full max-w-md border border-white/10 shadow-2xl animate-in fade-in zoom-in-95 duration-200">
        <div className="p-6 border-b border-white/10 flex justify-between items-center">
          <h2 className="text-xl font-bold text-white">Checkout Details</h2>
          <button onClick={onClose} className="text-slate-400 hover:text-white">
            <X className="h-5 w-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1">Full Name</label>
            <input
              required
              type="text"
              value={details.name}
              onChange={e => setDetails({...details, name: e.target.value})}
              className="w-full bg-dark-900 border border-white/10 rounded-lg px-4 py-2 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none"
              placeholder="John Doe"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1">Email Address</label>
            <input
              required
              type="email"
              value={details.email}
              onChange={e => setDetails({...details, email: e.target.value})}
              className="w-full bg-dark-900 border border-white/10 rounded-lg px-4 py-2 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none"
              placeholder="john@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1">Phone Number</label>
            <input
              required
              type="tel"
              value={details.phone}
              onChange={e => setDetails({...details, phone: e.target.value})}
              className="w-full bg-dark-900 border border-white/10 rounded-lg px-4 py-2 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none"
              placeholder="+91 ***********"
            />
          </div>

          <div className="pt-4">
            <Button type="submit" className="w-full gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white">
              <MessageCircle className="h-5 w-5" /> Place Order on WhatsApp
            </Button>
            <p className="text-center text-xs text-slate-500 mt-3">
              You will be redirected to WhatsApp to send your order details directly to our sales team.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckoutModal;