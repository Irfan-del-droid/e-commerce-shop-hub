import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            About ShopHub
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            ShopHub is your premier destination for premium electronics and
            gadgets. We're committed to bringing you the latest technology at
            unbeatable prices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
            <div className="text-3xl font-bold text-blue-600 mb-2">10K+</div>
            <p className="text-gray-700 font-medium">Happy Customers</p>
            <p className="text-gray-600 text-sm mt-2">
              Join thousands of satisfied customers
            </p>
          </div>
          <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
            <div className="text-3xl font-bold text-blue-600 mb-2">100+</div>
            <p className="text-gray-700 font-medium">Premium Products</p>
            <p className="text-gray-600 text-sm mt-2">
              Carefully curated selection
            </p>
          </div>
          <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
            <div className="text-3xl font-bold text-blue-600 mb-2">4.8★</div>
            <p className="text-gray-700 font-medium">Average Rating</p>
            <p className="text-gray-600 text-sm mt-2">
              Based on customer reviews
            </p>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-8 border border-gray-200 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
          <p className="text-gray-700 mb-6">
            At ShopHub, we believe that everyone deserves access to premium
            technology at fair prices. Our mission is to make shopping for
            electronics easy, convenient, and rewarding.
          </p>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Why Choose Us?
          </h2>
          <ul className="space-y-2 text-gray-700">
            <li>✓ Authentic products from trusted brands</li>
            <li>✓ Competitive pricing and frequent discounts</li>
            <li>✓ Fast and reliable shipping</li>
            <li>✓ 30-day money-back guarantee</li>
            <li>✓ 24/7 customer support</li>
            <li>✓ Secure and safe shopping experience</li>
          </ul>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Shop?
          </h2>
          <Link to="/shop">
            <Button size="lg">Start Shopping</Button>
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}
