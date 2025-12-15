import React from 'react';
import { Product, Category } from '../types';
import ProductCard from './ProductCard';

interface ProductSectionProps {
  title: string;
  id: string;
  products: Product[];
  filterCategory: Category;
}

const ProductSection: React.FC<ProductSectionProps> = ({ title, id, products, filterCategory }) => {
  const filteredProducts = products.filter(p => p.category === filterCategory);

  return (
    <section id={id} className="py-20 bg-dark-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{title}</h2>
            <div className="h-1 w-20 bg-primary rounded-full"></div>
          </div>
          <button className="hidden md:block text-primary hover:text-white transition-colors font-medium">
            View All {title} &rarr;
          </button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <button className="text-primary hover:text-white transition-colors font-medium">
            View All {title} &rarr;
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;