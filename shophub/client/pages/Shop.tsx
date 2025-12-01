import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { mockProducts, getCategories, searchProducts } from "@/api/products";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronDown } from "lucide-react";

export default function Shop() {
  const [searchParams] = useSearchParams();
  const [sortBy, setSortBy] = useState<"price-low" | "price-high" | "rating" | "newest">("newest");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 2000]);
  const [showFilters, setShowFilters] = useState(true);

  const initialSearch = searchParams.get("search") || "";
  const initialCategory = searchParams.get("category") || null;

  const categories = getCategories();

  const filteredAndSortedProducts = useMemo(() => {
    let products = [...mockProducts];

    // Search filter
    if (initialSearch) {
      products = searchProducts(initialSearch);
    }

    // Category filter
    const categoryToFilter = selectedCategory || initialCategory;
    if (categoryToFilter) {
      products = products.filter((p) => p.category === categoryToFilter);
    }

    // Price filter
    products = products.filter((p) => p.price >= priceRange[0] && p.price <= priceRange[1]);

    // Sort
    switch (sortBy) {
      case "price-low":
        products.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        products.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        products.sort((a, b) => b.rating - a.rating);
        break;
      case "newest":
        // Keep original order (newest)
        break;
    }

    return products;
  }, [initialSearch, initialCategory, selectedCategory, priceRange, sortBy]);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Shop All Products</h1>
          <p className="text-gray-600">
            {filteredAndSortedProducts.length} products found
            {initialSearch && ` for "${initialSearch}"`}
            {(selectedCategory || initialCategory) && ` in ${selectedCategory || initialCategory}`}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Filters */}
          <aside className={`lg:block ${showFilters ? "block" : "hidden"}`}>
            <div className="bg-gray-50 rounded-lg p-6 sticky top-24">
              <h2 className="text-lg font-bold text-gray-900 mb-6">Filters</h2>

              {/* Category Filter */}
              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 mb-3">Category</h3>
                <div className="space-y-2">
                  <button
                    onClick={() => setSelectedCategory(null)}
                    className={`block w-full text-left px-3 py-2 rounded text-sm transition ${
                      !selectedCategory && !initialCategory
                        ? "bg-blue-100 text-blue-700 font-medium"
                        : "text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    All Categories
                  </button>
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`block w-full text-left px-3 py-2 rounded text-sm transition ${
                        selectedCategory === category || initialCategory === category
                          ? "bg-blue-100 text-blue-700 font-medium"
                          : "text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 mb-3">Price Range</h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-gray-700">$</span>
                    <Input
                      type="number"
                      min="0"
                      value={priceRange[0]}
                      onChange={(e) =>
                        setPriceRange([Math.min(parseInt(e.target.value) || 0, priceRange[1]), priceRange[1]])
                      }
                      className="text-sm"
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-gray-700">$</span>
                    <Input
                      type="number"
                      max="2000"
                      value={priceRange[1]}
                      onChange={(e) =>
                        setPriceRange([priceRange[0], Math.max(parseInt(e.target.value) || 2000, priceRange[0])])
                      }
                      className="text-sm"
                    />
                  </div>
                  <p className="text-xs text-gray-600 mt-2">
                    ${priceRange[0]} - ${priceRange[1]}
                  </p>
                </div>
              </div>

              {/* Stock Filter */}
              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 mb-3">Availability</h3>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" defaultChecked className="w-4 h-4 rounded" />
                  <span className="text-sm text-gray-700">In Stock</span>
                </label>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Sort and View Options */}
            <div className="flex justify-between items-center mb-6 flex-wrap gap-4">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="lg:hidden text-sm font-medium text-blue-600 hover:text-blue-700"
              >
                {showFilters ? "Hide Filters" : "Show Filters"}
              </button>

              <div className="flex items-center gap-2 ml-auto">
                <span className="text-sm text-gray-600">Sort by:</span>
                <div className="relative">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as any)}
                    className="appearance-none bg-white border border-gray-300 rounded px-3 py-2 text-sm text-gray-900 cursor-pointer pr-8"
                  >
                    <option value="newest">Newest</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="rating">Top Rated</option>
                  </select>
                  <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Products Grid */}
            {filteredAndSortedProducts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredAndSortedProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="bg-gray-50 rounded-lg p-12 text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No products found</h3>
                <p className="text-gray-600 mb-6">Try adjusting your filters or search terms</p>
                <Button
                  onClick={() => {
                    setSelectedCategory(null);
                    setSortBy("newest");
                    setPriceRange([0, 2000]);
                  }}
                  variant="outline"
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
