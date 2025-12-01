import { Link } from "react-router-dom";
import { Product } from "@/api/products";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Star } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useState } from "react";

interface ProductCardProps {
  product: Product;
  variant?: "grid" | "list";
}

export const ProductCard = ({
  product,
  variant = "grid",
}: ProductCardProps) => {
  const { addToCart } = useCart();
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsAdding(true);
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    });
    setTimeout(() => setIsAdding(false), 500);
  };

  if (variant === "list") {
    return (
      <Link to={`/product/${product.id}`}>
        <div className="flex gap-4 p-4 bg-white rounded-lg border border-gray-200 hover:shadow-lg transition">
          <div className="w-32 h-32 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover hover:scale-105 transition"
            />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900">
              {product.name}
            </h3>
            <p className="text-gray-600 text-sm mt-1">{product.description}</p>
            <div className="flex items-center gap-4 mt-3">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm font-medium">{product.rating}</span>
                <span className="text-sm text-gray-500">
                  ({product.reviews})
                </span>
              </div>
              <span
                className={
                  product.inStock
                    ? "text-sm text-green-600 font-medium"
                    : "text-sm text-red-600 font-medium"
                }
              >
                {product.inStock ? "In Stock" : "Out of Stock"}
              </span>
            </div>
            <div className="flex items-center gap-3 mt-4">
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold text-gray-900">
                  ${product.price.toFixed(2)}
                </span>
                {product.originalPrice && (
                  <span className="text-lg text-gray-500 line-through">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                )}
              </div>
              <Button
                onClick={handleAddToCart}
                disabled={!product.inStock || isAdding}
                className="ml-auto"
                size="sm"
              >
                <ShoppingCart className="w-4 h-4 mr-2" />
                {isAdding ? "Adding..." : "Add to Cart"}
              </Button>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link to={`/product/${product.id}`}>
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition h-full flex flex-col">
        <div className="relative w-full aspect-square bg-gray-100 overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover hover:scale-110 transition"
          />
          {product.originalPrice && (
            <div className="absolute top-3 right-3 bg-red-500 text-white px-2 py-1 rounded text-sm font-semibold">
              {Math.round(
                ((product.originalPrice - product.price) /
                  product.originalPrice) *
                  100,
              )}
              % OFF
            </div>
          )}
          {!product.inStock && (
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <span className="text-white font-semibold">Out of Stock</span>
            </div>
          )}
        </div>
        <div className="p-4 flex flex-col flex-1">
          <h3 className="font-semibold text-gray-900 line-clamp-2 text-sm">
            {product.name}
          </h3>
          <p className="text-gray-600 text-xs mt-1 line-clamp-2">
            {product.description}
          </p>

          <div className="flex items-center gap-1 mt-2">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium text-gray-900">
              {product.rating}
            </span>
            <span className="text-xs text-gray-500">({product.reviews})</span>
          </div>

          <div className="mt-auto pt-4">
            <div className="flex items-baseline gap-2 mb-3">
              <span className="text-xl font-bold text-gray-900">
                ${product.price.toFixed(2)}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-gray-500 line-through">
                  ${product.originalPrice.toFixed(2)}
                </span>
              )}
            </div>
            <Button
              onClick={handleAddToCart}
              disabled={!product.inStock || isAdding}
              className="w-full"
              size="sm"
            >
              <ShoppingCart className="w-4 h-4 mr-2" />
              {isAdding ? "Adding..." : "Add to Cart"}
            </Button>
          </div>
        </div>
      </div>
    </Link>
  );
};
