
import React, { useRef, useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, Heart, Filter, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import {
  Collapsible,
  CollapsibleContent,
} from "@/components/ui/collapsible";

// Define the data structure for a category
export interface Category {
  id: string;
  title: string;
  description?: string;
  properties: number;
  image: string;
}

// Define the data structure for a property
export interface Property {
  id: string;
  title: string;
  description?: string;
  price: number;
  location?: string;
  bedrooms?: number;
  bathrooms?: number;
  area?: number;
  image: string;
  tags?: string[];
  isFeatured?: boolean;
}

interface PropertyBrowserProps {
  categories: Category[];
  propertiesByCategory: Record<string, Property[]>;
}

const PropertyBrowser: React.FC<PropertyBrowserProps> = ({
  categories,
  propertiesByCategory,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<Category>(categories[0]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filters, setFilters] = useState({
    minPrice: 0,
    maxPrice: 15000000,
    bedrooms: [] as number[],
    bathrooms: [] as number[],
    featured: false,
  });
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleSelectCategory = (category: Category) => {
    setSelectedCategory(category);
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  const handleBedroomFilter = (count: number) => {
    setFilters(prev => {
      const existing = [...prev.bedrooms];
      const index = existing.indexOf(count);
      
      if (index > -1) {
        existing.splice(index, 1);
      } else {
        existing.push(count);
      }
      
      return {
        ...prev,
        bedrooms: existing
      };
    });
  };

  const handleBathroomFilter = (count: number) => {
    setFilters(prev => {
      const existing = [...prev.bathrooms];
      const index = existing.indexOf(count);
      
      if (index > -1) {
        existing.splice(index, 1);
      } else {
        existing.push(count);
      }
      
      return {
        ...prev,
        bathrooms: existing
      };
    });
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>, type: 'min' | 'max') => {
    const value = parseInt(e.target.value, 10) || 0;
    setFilters(prev => ({
      ...prev,
      [type === 'min' ? 'minPrice' : 'maxPrice']: value
    }));
  };

  const handleFeaturedFilter = (checked: boolean) => {
    setFilters(prev => ({
      ...prev,
      featured: checked
    }));
  };

  const resetFilters = () => {
    setFilters({
      minPrice: 0,
      maxPrice: 15000000,
      bedrooms: [],
      bathrooms: [],
      featured: false,
    });
  };

  const filteredProperties = propertiesByCategory[selectedCategory.id]?.filter(property => {
    // Price filter
    if (property.price < filters.minPrice || property.price > filters.maxPrice) {
      return false;
    }
    
    // Bedrooms filter
    if (filters.bedrooms.length > 0 && property.bedrooms !== undefined && 
        !filters.bedrooms.includes(property.bedrooms)) {
      return false;
    }
    
    // Bathrooms filter
    if (filters.bathrooms.length > 0 && property.bathrooms !== undefined &&
        !filters.bathrooms.includes(property.bathrooms)) {
      return false;
    }
    
    // Featured filter
    if (filters.featured && !property.isFeatured) {
      return false;
    }
    
    return true;
  });

  return (
   
      <div className="w-full">
        {/* Category List Section */}
        <div className="relative w-full mb-8">
          {/* Left navigation button */}
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md hover:shadow-lg transition-all duration-200 focus:outline-none"
            aria-label="Scroll left"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          {/* Scrollable container */}
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto pb-4 pt-2 px-10 gap-4 scrollbar-hide snap-x snap-mandatory scroll-px-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {categories.map((category) => (
              <div
                key={category.id}
                className="snap-start flex-shrink-0"
                onClick={() => handleSelectCategory(category)}
              >
                <div
                  className={cn(
                    "relative w-64 h-64 rounded-lg overflow-hidden cursor-pointer transition-all duration-300 transform hover:scale-[1.02] group",
                    selectedCategory.id === category.id
                      ? "ring-2 ring-offset-2 ring-primary"
                      : "ring-0"
                  )}
                >
                  <Image
                    src={category.image}
                    alt={category.title}
                    width={500}
                    height={500}
                    layout='responsive'
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4 text-white">
                    <h3 className="font-bold text-xl mb-1">{category.title}</h3>
                    <p className="text-sm">{category.properties} Properties</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right navigation button */}
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md hover:shadow-lg transition-all duration-200 focus:outline-none"
            aria-label="Scroll right"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        {/* Property Grid Section with Filters */}
        <div className="animate-fade-in">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold">{selectedCategory.title}</h2>
            <div className="flex items-center gap-4">
              <button 
                onClick={toggleFilter}
                className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-all"
              >
                <Filter className="h-4 w-4" />
                <span>Filter</span>
              </button>
              <button 
                className="flex items-center text-primary hover:underline transition-all group"
                aria-label={`View more ${selectedCategory.title}`}
              >
                View More
                <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Filter Section - Collapsible */}
          <Collapsible open={isFilterOpen} onOpenChange={setIsFilterOpen} className="mb-6">
            <CollapsibleContent className="bg-white rounded-lg shadow-md p-6 mb-6 animate-slide-in">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">Filters</h3>
                <div className="flex items-center gap-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={resetFilters}
                    className="text-xs"
                  >
                    Reset
                  </Button>
                  <Button 
                    size="icon" 
                    variant="ghost" 
                    onClick={toggleFilter}
                    className="h-8 w-8"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Price Range */}
                <div className="space-y-2">
                  <h4 className="font-medium">Price Range</h4>
                  <div className="flex items-center gap-2">
                    <div className="w-full">
                      <label htmlFor="min-price" className="text-xs text-gray-500">Min</label>
                      <input 
                        type="number" 
                        id="min-price"
                        value={filters.minPrice}
                        onChange={(e) => handlePriceChange(e, 'min')}
                        className="w-full p-2 border rounded-md text-sm"
                        min="0"
                      />
                    </div>
                    <span className="pt-5">-</span>
                    <div className="w-full">
                      <label htmlFor="max-price" className="text-xs text-gray-500">Max</label>
                      <input 
                        type="number" 
                        id="max-price"
                        value={filters.maxPrice}
                        onChange={(e) => handlePriceChange(e, 'max')}
                        className="w-full p-2 border rounded-md text-sm"
                        min="0"
                      />
                    </div>
                  </div>
                </div>
                
                {/* Bedrooms Filter */}
                <div className="space-y-2">
                  <h4 className="font-medium">Bedrooms</h4>
                  <div className="flex flex-wrap gap-2">
                    {[1, 2, 3, 4, 5].map((count) => (
                      <label key={`bed-${count}`} className="flex items-center space-x-2 cursor-pointer">
                        <Checkbox 
                          checked={filters.bedrooms.includes(count)}
                          onCheckedChange={() => handleBedroomFilter(count)}
                        />
                        <span className="text-sm">{count === 5 ? '5+' : count}</span>
                      </label>
                    ))}
                  </div>
                </div>
                
                {/* Bathrooms Filter */}
                <div className="space-y-2">
                  <h4 className="font-medium">Bathrooms</h4>
                  <div className="flex flex-wrap gap-2">
                    {[1, 2, 3, 4].map((count) => (
                      <label key={`bath-${count}`} className="flex items-center space-x-2 cursor-pointer">
                        <Checkbox 
                          checked={filters.bathrooms.includes(count)}
                          onCheckedChange={() => handleBathroomFilter(count)}
                        />
                        <span className="text-sm">{count === 4 ? '4+' : count}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="mt-4">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <Checkbox 
                    checked={filters.featured}
                    onCheckedChange={(checked) => handleFeaturedFilter(checked as boolean)}
                  />
                  <span className="text-sm">Featured properties only</span>
                </label>
              </div>
              
              <div className="mt-6 text-sm text-gray-500">
                Showing {filteredProperties?.length || 0} out of {propertiesByCategory[selectedCategory.id]?.length || 0} properties
              </div>
            </CollapsibleContent>
          </Collapsible>
          
       
          {/* Property Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProperties?.map((property) => (
              <div key={property.id} className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 animate-scale-in">
                <div className="relative">
                  <Image 
                    src={property.image} 
                    alt={property.title} 
                    width={500}
                    height={500}
                    layout='responsive'

                    className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"

                  />
                  <button 
                    className="absolute top-3 right-3 p-2 rounded-full bg-white/80 hover:bg-white transition-colors duration-200"
                    aria-label="Add to favorites"
                  >
                    <Heart className="h-5 w-5 text-gray-600 hover:text-red-500 transition-colors duration-200" />
                  </button>
                  {property.isFeatured && (
                    <div className="absolute bottom-3 left-3 bg-primary px-3 py-1 rounded-full text-white text-xs font-medium">
                      Featured
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-1 line-clamp-1">{property.title}</h3>
                  <p className="text-gray-500 text-sm mb-2 line-clamp-1">{property.location}</p>
                  <div className="flex justify-between items-center mt-3">
                    <p className="text-primary font-bold">${property.price.toLocaleString()}</p>
                    <div className="flex items-center space-x-3 text-sm text-gray-500">
                      {property.bedrooms !== undefined && (
                        <span>{property.bedrooms} beds</span>
                      )}
                      {property.bathrooms !== undefined && (
                        <span>{property.bathrooms} baths</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            {filteredProperties?.length === 0 && (
              <div className="col-span-full py-8 text-center">
                <p className="text-gray-500">No properties match your filters. Try adjusting your criteria.</p>
              </div>
            )}
          </div>
        </div>
      </div>
  
  );
};

export default PropertyBrowser;
