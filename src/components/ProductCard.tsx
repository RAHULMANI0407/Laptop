import React from 'react';
import { Product } from '../types';
import Button from './ui/Button';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="group relative bg-dark-800 rounded-2xl border border-white/5 overflow-hidden transition-all duration-300 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-1 flex flex-col h-full">
      {product.isNew && (
        <div className="absolute top-4 left-4 z-10 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
          NEW
        </div>
      )}
      
      <div className="relative h-56 w-full overflow-hidden bg-white/5 flex-shrink-0">
        <img 
          src={product.image} 
          alt={product.name} 
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-90 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-900 to-transparent opacity-60"></div>
      </div>
      
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
          {product.name}
        </h3>
        
        <p className="text-slate-400 text-sm mb-4 line-clamp-2 flex-grow">
          {product.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {product.specs.slice(0, 3).map((spec, i) => (
            <span key={i} className="text-xs bg-dark-700 text-slate-300 px-2 py-1 rounded">
              {spec}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between mt-auto">
          <div className="text-lg font-bold text-white">
            ₹{product.price.toLocaleString('en-IN')}
          </div>
          <Button 
            size="sm" 
            variant="secondary" 
            className="gap-2"
            onClick={() => addToCart(product)}
          >
            <ShoppingCart className="h-4 w-4" /> Add
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;