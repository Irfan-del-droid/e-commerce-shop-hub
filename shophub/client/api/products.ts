export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  rating: number;
  reviews: number;
  description: string;
  fullDescription: string;
  inStock: boolean;
  tags: string[];
  images: string[];
}

export const mockProducts: Product[] = [
  {
    id: "1",
    name: "Premium Wireless Headphones",
    price: 199.99,
    originalPrice: 249.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop",
    category: "Electronics",
    rating: 4.8,
    reviews: 324,
    description: "High-quality wireless headphones with noise cancellation",
    fullDescription: "Experience premium audio with our state-of-the-art wireless headphones. Features active noise cancellation, 30-hour battery life, and premium comfort padding for extended wear.",
    inStock: true,
    tags: ["audio", "wireless", "premium"],
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1487215078519-e21cc028cb29?w=500&h=500&fit=crop",
    ],
  },
  {
    id: "2",
    name: "Ultra-thin Laptop",
    price: 1299.99,
    originalPrice: 1499.99,
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=500&fit=crop",
    category: "Electronics",
    rating: 4.7,
    reviews: 156,
    description: "Lightweight and powerful laptop for professionals",
    fullDescription: "Our ultra-thin laptop combines cutting-edge performance with portability. Perfect for developers, designers, and content creators who need power on the go.",
    inStock: true,
    tags: ["laptop", "portable", "powerful"],
    images: [
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=500&fit=crop",
    ],
  },
  {
    id: "3",
    name: "Smart Watch Pro",
    price: 349.99,
    originalPrice: 399.99,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop",
    category: "Wearables",
    rating: 4.6,
    reviews: 289,
    description: "Advanced fitness tracking and health monitoring",
    fullDescription: "Track your health with precision. Monitor heart rate, sleep patterns, workouts, and more. Water-resistant design with 7-day battery life.",
    inStock: true,
    tags: ["fitness", "smartwatch", "health"],
    images: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop",
    ],
  },
  {
    id: "4",
    name: "Professional Camera",
    price: 899.99,
    originalPrice: 1099.99,
    image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=500&h=500&fit=crop",
    category: "Photography",
    rating: 4.9,
    reviews: 412,
    description: "4K Professional mirrorless camera",
    fullDescription: "Capture stunning 4K video and high-resolution photos. Perfect for professionals and enthusiasts alike.",
    inStock: true,
    tags: ["camera", "4k", "professional"],
    images: [
      "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=500&h=500&fit=crop",
    ],
  },
  {
    id: "5",
    name: "Premium Gaming Mouse",
    price: 79.99,
    originalPrice: 99.99,
    image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=500&h=500&fit=crop",
    category: "Gaming",
    rating: 4.7,
    reviews: 523,
    description: "High-precision gaming mouse with RGB lighting",
    fullDescription: "Designed for competitive gaming with ultra-responsive sensors and customizable buttons.",
    inStock: true,
    tags: ["gaming", "mouse", "rgb"],
    images: [
      "https://images.unsplash.com/photo-1527814050087-3793815479db?w=500&h=500&fit=crop",
    ],
  },
  {
    id: "6",
    name: "Mechanical Keyboard",
    price: 159.99,
    originalPrice: 199.99,
    image: "https://images.unsplash.com/photo-1587829191301-a550e6b2f70a?w=500&h=500&fit=crop",
    category: "Gaming",
    rating: 4.8,
    reviews: 342,
    description: "Cherry MX mechanical gaming keyboard",
    fullDescription: "Premium mechanical keyboard with customizable switches and stunning RGB backlighting.",
    inStock: true,
    tags: ["keyboard", "mechanical", "gaming"],
    images: [
      "https://images.unsplash.com/photo-1587829191301-a550e6b2f70a?w=500&h=500&fit=crop",
    ],
  },
  {
    id: "7",
    name: "4K Monitor",
    price: 499.99,
    originalPrice: 599.99,
    image: "https://images.unsplash.com/photo-1559056169-641ef2588cb5?w=500&h=500&fit=crop",
    category: "Electronics",
    rating: 4.6,
    reviews: 198,
    description: "32-inch 4K UHD gaming monitor",
    fullDescription: "Experience gaming and content creation like never before with our stunning 4K display and 144Hz refresh rate.",
    inStock: true,
    tags: ["monitor", "4k", "gaming"],
    images: [
      "https://images.unsplash.com/photo-1559056169-641ef2588cb5?w=500&h=500&fit=crop",
    ],
  },
  {
    id: "8",
    name: "Portable SSD",
    price: 129.99,
    originalPrice: 159.99,
    image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=500&h=500&fit=crop",
    category: "Storage",
    rating: 4.7,
    reviews: 267,
    description: "1TB Ultra-fast portable SSD",
    fullDescription: "Fast storage on the go. USB-C 3.2 Gen 2 with speeds up to 1050MB/s. Compact and durable.",
    inStock: true,
    tags: ["storage", "ssd", "portable"],
    images: [
      "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=500&h=500&fit=crop",
    ],
  },
  {
    id: "9",
    name: "USB-C Hub",
    price: 49.99,
    originalPrice: 69.99,
    image: "https://images.unsplash.com/photo-1625948515291-69613efd103f?w=500&h=500&fit=crop",
    category: "Accessories",
    rating: 4.5,
    reviews: 189,
    description: "7-in-1 USB-C docking hub",
    fullDescription: "Expand your laptop's connectivity with multiple USB ports, HDMI, SD card reader, and more.",
    inStock: true,
    tags: ["usb", "hub", "accessories"],
    images: [
      "https://images.unsplash.com/photo-1625948515291-69613efd103f?w=500&h=500&fit=crop",
    ],
  },
  {
    id: "10",
    name: "Phone Stand",
    price: 29.99,
    originalPrice: 39.99,
    image: "https://images.unsplash.com/photo-1610945415295-d9bbf7ce3f1c?w=500&h=500&fit=crop",
    category: "Accessories",
    rating: 4.4,
    reviews: 234,
    description: "Adjustable universal phone stand",
    fullDescription: "Premium aluminum phone stand for desk and bedside. Fits all phone sizes and provides optimal viewing angle.",
    inStock: true,
    tags: ["stand", "accessories", "universal"],
    images: [
      "https://images.unsplash.com/photo-1610945415295-d9bbf7ce3f1c?w=500&h=500&fit=crop",
    ],
  },
];

export const getProductById = (id: string): Product | undefined => {
  return mockProducts.find((p) => p.id === id);
};

export const searchProducts = (query: string): Product[] => {
  const lower = query.toLowerCase();
  return mockProducts.filter(
    (p) =>
      p.name.toLowerCase().includes(lower) ||
      p.description.toLowerCase().includes(lower) ||
      p.tags.some((tag) => tag.toLowerCase().includes(lower))
  );
};

export const getProductsByCategory = (category: string): Product[] => {
  return mockProducts.filter((p) => p.category === category);
};

export const getCategories = (): string[] => {
  return Array.from(new Set(mockProducts.map((p) => p.category)));
};
