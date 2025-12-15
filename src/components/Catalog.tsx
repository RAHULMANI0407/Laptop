import React, { useState, useMemo, useEffect } from 'react';
import { Product, Category } from '../types';
import ProductCard from './ProductCard';
import Button from './ui/Button';
import { Filter, X, Search, SlidersHorizontal, Trash2 } from 'lucide-react';

interface CatalogProps {
  products: Product[];
  externalSearchQuery: string;
}

const getBrand = (name: string) => name.split(' ')[0];

const Catalog: React.FC<CatalogProps> = ({ products, externalSearchQuery }) => {
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);
  
  // States
  const [internalSearch, setInternalSearch] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<Category[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<{min: string, max: string}>({ min: '', max: '' });

  // Sync external search (from Header) with local state if needed, or just use it.
  // We'll prioritize external search if present.
  const searchQuery = externalSearchQuery || internalSearch;

  // Derived Data
  const allBrands = useMemo(() => Array.from(new Set(products.map(p => getBrand(p.name)))).sort(), [products]);
  
  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      // Search
      if (searchQuery && !product.name.toLowerCase().includes(searchQuery.toLowerCase())) {
        return false;
      }

      // Category
      if (selectedCategories.length > 0 && !selectedCategories.includes(product.category)) {
        return false;
      }
      
      // Brand
      if (selectedBrands.length > 0 && !selectedBrands.includes(getBrand(product.name))) {
        return false;
      }

      // Price
      const min = priceRange.min ? parseInt(priceRange.min) : 0;
      const max = priceRange.max ? parseInt(priceRange.max) : Infinity;
      if (product.price < min || product.price > max) {
        return false;
      }

      return true;
    });
  }, [products, searchQuery, selectedCategories, selectedBrands, priceRange]);

  const toggleCategory = (cat: Category) => {
    setSelectedCategories(prev => 
      prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]
    );
  };

  const toggleBrand = (brand: string) => {
    setSelectedBrands(prev => 
      prev.includes(brand) ? prev.filter(b => b !== brand) : [...prev, brand]
    );
  };

  const clearFilters = () => {
    setInternalSearch('');
    // Note: We cannot clear the external search from here without a callback, 
    // but the user can clear it in the header.
    setSelectedCategories([]);
    setSelectedBrands([]);
    setPriceRange({ min: '', max: '' });
  };

  const hasActiveFilters = searchQuery || selectedCategories.length > 0 || selectedBrands.length > 0 || priceRange.min || priceRange.max;

  const FilterContent = () => (
    <div className="space-y-8">
      {/* Search (Sidebar version - only show if no external search is active to avoid confusion) */}
      {!externalSearchQuery && (
        <div>
          <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-3">Search</h3>
          <div className="relative">
            <input 
              type="text" 
              placeholder="Filter list..." 
              value={internalSearch}
              onChange={(e) => setInternalSearch(e.target.value)}
              className={`w-full bg-dark-800 border rounded-lg py-2 pl-3 pr-10 text-sm text-white focus:ring-primary focus:border-primary placeholder:text-slate-500 transition-colors ${internalSearch ? 'border-primary/50 bg-primary/5' : 'border-white/10'}`}
            />
            <Search className={`absolute right-3 top-2.5 h-4 w-4 ${internalSearch ? 'text-primary' : 'text-slate-500'}`} />
          </div>
        </div>
      )}

      {/* Categories */}
      <div>
        <div className="flex items-center justify-between mb-3">
             <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Categories</h3>
             {selectedCategories.length > 0 && (
                 <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full">{selectedCategories.length}</span>
             )}
        </div>
        <div className="space-y-1">
          {Object.values(Category).map(cat => (
            <label key={cat} className={`flex items-center justify-between cursor-pointer group p-2 rounded-lg transition-all ${selectedCategories.includes(cat) ? 'bg-white/5 shadow-sm' : 'hover:bg-white/5'}`}>
              <div className="flex items-center space-x-3">
                <div className="relative flex items-center">
                    <input 
                    type="checkbox" 
                    checked={selectedCategories.includes(cat)}
                    onChange={() => toggleCategory(cat)}
                    className="accent-primary h-4 w-4 rounded border-slate-600 bg-dark-800 text-primary focus:ring-primary/50 focus:ring-offset-dark-900 cursor-pointer"
                    />
                </div>
                <span className={`text-sm transition-colors ${selectedCategories.includes(cat) ? 'text-primary font-bold' : 'text-slate-400 group-hover:text-slate-200'}`}>
                    {cat}s
                </span>
              </div>
            </label>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div>
        <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-3 flex items-center gap-2">
            Price Range (₹)
            {(priceRange.min || priceRange.max) && <span className="h-2 w-2 rounded-full bg-primary"></span>}
        </h3>
        <div className="flex items-center gap-2">
          <div className="relative w-full">
            <input 
                type="number" 
                placeholder="Min" 
                value={priceRange.min}
                onChange={(e) => setPriceRange(prev => ({ ...prev, min: e.target.value }))}
                className={`w-full bg-dark-800 border rounded-lg py-2 px-3 text-sm text-white focus:ring-primary focus:border-primary placeholder:text-slate-500 transition-colors ${priceRange.min ? 'border-primary/50 bg-primary/5' : 'border-white/10'}`}
            />
          </div>
          <span className="text-slate-500">-</span>
          <div className="relative w-full">
            <input 
                type="number" 
                placeholder="Max" 
                value={priceRange.max}
                onChange={(e) => setPriceRange(prev => ({ ...prev, max: e.target.value }))}
                className={`w-full bg-dark-800 border rounded-lg py-2 px-3 text-sm text-white focus:ring-primary focus:border-primary placeholder:text-slate-500 transition-colors ${priceRange.max ? 'border-primary/50 bg-primary/5' : 'border-white/10'}`}
            />
          </div>
        </div>
      </div>

      {/* Brands */}
      <div>
        <div className="flex items-center justify-between mb-3">
             <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Brands</h3>
             {selectedBrands.length > 0 && (
                 <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full">{selectedBrands.length}</span>
             )}
        </div>
        <div className="space-y-1 max-h-60 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent">
          {allBrands.map(brand => (
            <label key={brand} className={`flex items-center space-x-3 cursor-pointer group p-2 rounded-lg transition-all ${selectedBrands.includes(brand) ? 'bg-white/5 shadow-sm' : 'hover:bg-white/5'}`}>
               <input 
                  type="checkbox" 
                  checked={selectedBrands.includes(brand)}
                  onChange={() => toggleBrand(brand)}
                  className="accent-primary h-4 w-4 rounded border-slate-600 bg-dark-800 text-primary focus:ring-primary/50 focus:ring-offset-dark-900 cursor-pointer"
                />
              <span className={`text-sm transition-colors ${selectedBrands.includes(brand) ? 'text-primary font-bold' : 'text-slate-400 group-hover:text-slate-200'}`}>
                {brand}
              </span>
            </label>
          ))}
        </div>
      </div>
      
      {/* Reset */}
      <Button 
        variant={hasActiveFilters ? "outline" : "ghost"} 
        size="sm" 
        onClick={clearFilters} 
        disabled={!hasActiveFilters}
        className={`w-full transition-all ${hasActiveFilters ? 'border-red-500/30 text-red-400 hover:bg-red-500/10 hover:text-red-300 hover:border-red-500/50' : 'text-slate-600'}`}
      >
        <Trash2 className="w-4 h-4 mr-2" /> Clear Filters
      </Button>
    </div>
  );

  return (
    <section id="shop" className="py-16 bg-dark-900 min-h-[800px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-8">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">Our Catalog</h2>
              <p className="text-slate-400">
                Showing {filteredProducts.length} results
                {hasActiveFilters && (
                    <span className="ml-2 text-primary text-sm">
                        (Filtered)
                    </span>
                )}
              </p>
            </div>
            
            <button 
              className="md:hidden flex items-center justify-center gap-2 bg-dark-800 border border-white/10 rounded-lg px-4 py-3 text-white font-medium hover:bg-dark-700 transition-colors"
              onClick={() => setIsMobileFiltersOpen(true)}
            >
              <SlidersHorizontal className="h-4 w-4" /> 
              Filters 
              {hasActiveFilters && <span className="h-2 w-2 bg-primary rounded-full"></span>}
            </button>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Desktop Sidebar */}
            <div className="hidden lg:block w-64 flex-shrink-0">
               <div className="sticky top-24">
                 <FilterContent />
               </div>
            </div>

            {/* Mobile Filters Drawer */}
            {isMobileFiltersOpen && (
              <div className="fixed inset-0 z-50 lg:hidden">
                <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsMobileFiltersOpen(false)} />
                <div className="absolute right-0 top-0 bottom-0 w-80 bg-dark-900 p-6 shadow-xl border-l border-white/10 overflow-y-auto">
                   <div className="flex items-center justify-between mb-8">
                     <h3 className="text-xl font-bold text-white">Filters</h3>
                     <button onClick={() => setIsMobileFiltersOpen(false)} className="text-slate-400 hover:text-white">
                       <X className="h-6 w-6" />
                     </button>
                   </div>
                   <FilterContent />
                </div>
              </div>
            )}

            {/* Product Grid */}
            <div className="flex-1">
              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-20 bg-dark-800/50 rounded-2xl border border-white/5 border-dashed">
                   <div className="bg-dark-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                     <Filter className="h-8 w-8 text-slate-500" />
                   </div>
                   <h3 className="text-xl font-bold text-white mb-2">No products found</h3>
                   <p className="text-slate-400 mb-6">Try adjusting your filters or search terms.</p>
                   <Button onClick={clearFilters}>Clear filters</Button>
                </div>
              )}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Catalog;