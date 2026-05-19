import Link from "next/link";
import { Tag, Monitor, Plane, Coffee, Briefcase, Zap, Home as HomeIcon, Dumbbell, Shield, Gift, BookOpen } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Browse All Categories | DealFinder",
  description: "Find the best deals and promo codes organized by category.",
};

const categories = [
  { name: "Fashion", icon: Tag, dealCount: 1240 },
  { name: "Electronics", icon: Monitor, dealCount: 890 },
  { name: "Travel", icon: Plane, dealCount: 450 },
  { name: "Food", icon: Coffee, dealCount: 320 },
  { name: "Software", icon: Briefcase, dealCount: 610 },
  { name: "Beauty", icon: Zap, dealCount: 520 },
  { name: "Home", icon: HomeIcon, dealCount: 780 },
  { name: "Sports", icon: Dumbbell, dealCount: 290 },
  { name: "Finance", icon: Shield, dealCount: 150 },
  { name: "Gifts", icon: Gift, dealCount: 410 },
  { name: "Education", icon: BookOpen, dealCount: 180 },
];

export default function CategoriesPage() {
  return (
    <main className="min-h-screen bg-deal-bg py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h1 className="text-4xl font-display font-bold text-navy-900 mb-4">
            Browse Deals by Category
          </h1>
          <p className="text-lg text-text-secondary">
            Find the perfect coupon for exactly what you're looking for. We've organized thousands of deals into easy-to-browse categories.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {categories.map((cat, i) => (
            <Link key={i} href={`/categories/${cat.name.toLowerCase()}`} className="flex flex-col items-center justify-center p-8 bg-white rounded-2xl border border-border hover:border-primary-200 hover:shadow-md transition-all group">
              <div className="w-16 h-16 rounded-full bg-primary-50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <cat.icon className="w-8 h-8 text-primary-600" />
              </div>
              <span className="font-bold text-lg text-navy-900 mb-1">{cat.name}</span>
              <span className="text-sm font-medium text-text-muted">{cat.dealCount} deals</span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
