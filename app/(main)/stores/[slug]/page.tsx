import Link from "next/link";
import { Metadata } from "next";
import DealsList from "@/components/coupons/DealsList";
import { Star, Bell, ShieldCheck, ExternalLink } from "lucide-react";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const storeName = params.slug.charAt(0).toUpperCase() + params.slug.slice(1);
  return {
    title: `${storeName} Promo Codes & Coupons | DealFinder`,
    description: `Get the latest ${storeName} coupons, promo codes, and daily deals. Tested and verified.`,
  };
}

export default function StoreDetailPage({ params }: { params: { slug: string } }) {
  const storeName = params.slug.charAt(0).toUpperCase() + params.slug.slice(1);
  
  // Mock deals for this store
  const deals = [
    { id: "store-deal-1", storeName, title: "30% OFF Summer Collection", code: "SUMMER30", expiry: "Expires in 2 days", usesToday: 2341 },
    { id: "store-deal-2", storeName, title: "Free Shipping on Orders Over $50", dealUrl: "#", usesToday: 1205 },
    { id: "store-deal-3", storeName, title: "20% Off Your First Purchase", code: "WELCOME20", usesToday: 890 },
    { id: "store-deal-4", storeName, title: "Buy 1 Get 1 50% Off Select Items", code: "BOGO50", expiry: "Expires tomorrow", usesToday: 340 },
    { id: "store-deal-5", storeName, title: "Up to 50% Off Clearance", dealUrl: "#", usesToday: 5600 },
  ];

  return (
    <main className="min-h-screen bg-deal-bg py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <nav className="flex items-center text-sm text-text-muted mb-6">
          <Link href="/" className="hover:text-primary-600 transition-colors">Home</Link>
          <span className="mx-2">›</span>
          <Link href="/stores" className="hover:text-primary-600 transition-colors">Stores</Link>
          <span className="mx-2">›</span>
          <span className="text-text-secondary">{storeName}</span>
        </nav>

        {/* Store Header */}
        <div className="bg-white border border-border rounded-2xl p-8 shadow-sm mb-8">
          <div className="flex flex-col md:flex-row gap-6 md:items-center justify-between">
            <div className="flex items-center gap-6">
              <div className="w-24 h-24 bg-gray-100 rounded-2xl flex items-center justify-center font-bold text-gray-400 text-3xl flex-shrink-0">
                {storeName.charAt(0)}
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-display font-bold text-navy-900 mb-2">
                  {storeName} Promo Codes
                </h1>
                <div className="flex flex-wrap items-center gap-4 text-sm text-text-secondary mb-3">
                  <span className="flex items-center gap-1 text-yellow-500 font-medium">
                    <Star className="w-4 h-4 fill-current" /> 4.8 (234 reviews)
                  </span>
                  <span className="hidden sm:inline-block w-1 h-1 bg-gray-300 rounded-full"></span>
                  <span className="font-medium text-navy-900">45 Active Deals</span>
                  <span className="hidden sm:inline-block w-1 h-1 bg-gray-300 rounded-full"></span>
                  <span className="flex items-center gap-1 text-success-600 font-medium bg-success-50 px-2 py-0.5 rounded">
                    <ShieldCheck className="w-4 h-4" /> Verified Today
                  </span>
                </div>
                <p className="text-text-muted max-w-xl line-clamp-2 text-sm">
                  Find the latest and greatest coupons, promo codes, and deals for {storeName}. Save money on your next purchase with our hand-tested offers.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col gap-3 min-w-[200px]">
              <button className="flex items-center justify-center gap-2 w-full bg-white border border-border hover:bg-gray-50 text-text-primary px-4 py-2.5 rounded-xl font-medium shadow-sm transition-colors">
                <Bell className="w-4 h-4" /> Get Alerts
              </button>
              <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full bg-primary-50 text-primary-700 hover:bg-primary-100 px-4 py-2.5 rounded-xl font-medium shadow-sm transition-colors">
                Visit Store <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
        
        {/* Filters & Content */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="flex-1">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
              <div className="flex gap-2 w-full sm:w-auto overflow-x-auto pb-2 sm:pb-0">
                <button className="px-4 py-2 bg-primary-50 text-primary-700 font-medium rounded-xl whitespace-nowrap">All Deals</button>
                <button className="px-4 py-2 bg-white border border-border hover:bg-gray-50 text-text-secondary font-medium rounded-xl whitespace-nowrap">Codes Only</button>
                <button className="px-4 py-2 bg-white border border-border hover:bg-gray-50 text-text-secondary font-medium rounded-xl whitespace-nowrap">Free Shipping</button>
              </div>
              <select className="bg-white border border-border rounded-xl px-4 py-2 text-sm font-medium w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-primary-500">
                <option>Most Popular</option>
                <option>Newest</option>
                <option>Expiring Soon</option>
              </select>
            </div>

            <div className="mb-8">
              <DealsList deals={deals} />
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="w-full lg:w-80 space-y-6">
            <div className="bg-white border border-border rounded-2xl p-6 shadow-sm">
              <h3 className="font-bold text-navy-900 mb-4">About {storeName}</h3>
              <p className="text-sm text-text-secondary mb-4 leading-relaxed">
                {storeName} is a leading retailer offering a wide range of products. Use our verified coupons and promo codes to save on your next online purchase. We update these deals daily.
              </p>
              <div className="space-y-2 text-sm text-text-secondary">
                <div className="flex justify-between">
                  <span>Free Shipping:</span>
                  <span className="font-medium text-navy-900">On orders over $50</span>
                </div>
                <div className="flex justify-between">
                  <span>Student Discount:</span>
                  <span className="font-medium text-navy-900">10% Off</span>
                </div>
                <div className="flex justify-between">
                  <span>Return Policy:</span>
                  <span className="font-medium text-navy-900">30 Days</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white border border-border rounded-2xl p-6 shadow-sm">
              <h3 className="font-bold text-navy-900 mb-4">Similar Stores</h3>
              <div className="flex flex-wrap gap-2">
                {['Adidas', 'Puma', 'Under Armour', 'Reebok', 'New Balance'].map(similar => (
                  <Link key={similar} href={`/stores/${similar.toLowerCase()}`} className="bg-gray-50 border border-border hover:border-primary-200 hover:text-primary-600 px-3 py-1.5 rounded-lg text-sm text-text-secondary transition-colors">
                    {similar}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}
