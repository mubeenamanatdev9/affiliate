import Link from "next/link";
import { Metadata } from "next";
import DealsGrid from "@/components/coupons/DealsGrid";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const categoryName = params.slug.charAt(0).toUpperCase() + params.slug.slice(1);
  return {
    title: `${categoryName} Coupons & Promo Codes | DealFinder`,
    description: `Save big on ${categoryName} with our verified coupons and promo codes.`,
  };
}

export default function CategoryDetailPage({ params }: { params: { slug: string } }) {
  const categoryName = params.slug.charAt(0).toUpperCase() + params.slug.slice(1);
  
  // Mock deals for this category
  const deals = [
    { id: "cat-deal-1", storeName: "Best Buy", title: "20% Off Select Laptops", code: "TECH20", expiry: "Expires in 5 days", usesToday: 450 },
    { id: "cat-deal-2", storeName: "Dell", title: "Free Shipping on All Orders", dealUrl: "#", usesToday: 120 },
    { id: "cat-deal-3", storeName: "Apple", title: "Save $100 on MacBooks", code: "SAVE100", expiry: "Expires today", usesToday: 890 },
    { id: "cat-deal-4", storeName: "Samsung", title: "Up to 30% Off Monitors", dealUrl: "#", usesToday: 340 },
    { id: "cat-deal-5", storeName: "HP", title: "15% Off XPS Series", code: "XPS15", usesToday: 56 },
  ];

  return (
    <main className="min-h-screen bg-deal-bg py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <nav className="flex items-center text-sm text-text-muted mb-6">
          <Link href="/" className="hover:text-primary-600 transition-colors">Home</Link>
          <span className="mx-2">›</span>
          <Link href="/categories" className="hover:text-primary-600 transition-colors">Categories</Link>
          <span className="mx-2">›</span>
          <span className="text-text-secondary">{categoryName}</span>
        </nav>

        {/* Header */}
        <div className="bg-white border border-border rounded-2xl p-8 shadow-sm mb-8">
          <h1 className="text-3xl font-display font-bold text-navy-900 mb-2">
            {categoryName} Coupons & Deals
          </h1>
          <p className="text-text-secondary">
            Find the best verified promo codes and discounts for {categoryName.toLowerCase()} products. Hand-tested daily.
          </p>
        </div>
        
        {/* Filters (Mock) */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
          <div className="flex gap-2 w-full sm:w-auto overflow-x-auto pb-2 sm:pb-0">
            <button className="px-4 py-2 bg-primary-50 text-primary-700 font-medium rounded-xl whitespace-nowrap">All Deals</button>
            <button className="px-4 py-2 bg-white border border-border hover:bg-gray-50 text-text-secondary font-medium rounded-xl whitespace-nowrap">Codes Only</button>
            <button className="px-4 py-2 bg-white border border-border hover:bg-gray-50 text-text-secondary font-medium rounded-xl whitespace-nowrap">Free Shipping</button>
          </div>
          <select className="bg-white border border-border rounded-xl px-4 py-2 text-sm font-medium w-full sm:w-auto">
            <option>Most Popular</option>
            <option>Newest</option>
            <option>Expiring Soon</option>
          </select>
        </div>

        {/* Deals Grid */}
        <DealsGrid deals={deals} columns={4} />
        
      </div>
    </main>
  );
}
