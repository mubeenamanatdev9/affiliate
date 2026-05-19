import Link from "next/link";
import { Metadata } from "next";
import { Search } from "lucide-react";

export const metadata: Metadata = {
  title: "Browse All Stores | DealFinder",
  description: "Find the best deals and promo codes organized by store.",
};

const stores = [
  { name: "Amazon", slug: "amazon", deals: 120, rating: 4.8 },
  { name: "Nike", slug: "nike", deals: 45, rating: 4.9 },
  { name: "Target", slug: "target", deals: 34, rating: 4.7 },
  { name: "Best Buy", slug: "best-buy", deals: 89, rating: 4.6 },
  { name: "Adidas", slug: "adidas", deals: 56, rating: 4.8 },
  { name: "Walmart", slug: "walmart", deals: 210, rating: 4.5 },
  { name: "Home Depot", slug: "home-depot", deals: 42, rating: 4.6 },
  { name: "Macy's", slug: "macys", deals: 67, rating: 4.5 },
  { name: "Sephora", slug: "sephora", deals: 38, rating: 4.8 },
  { name: "Ulta", slug: "ulta", deals: 29, rating: 4.9 },
  { name: "Lowe's", slug: "lowes", deals: 51, rating: 4.6 },
  { name: "Wayfair", slug: "wayfair", deals: 44, rating: 4.7 },
];

export default function StoresPage() {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  return (
    <main className="min-h-screen bg-deal-bg py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h1 className="text-4xl font-display font-bold text-navy-900 mb-4">
            Browse All Stores
          </h1>
          <p className="text-lg text-text-secondary mb-8">
            Find verified coupons and daily deals for your favorite brands and retailers.
          </p>
          
          <div className="relative max-w-lg mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-text-muted" />
            <input 
              type="text" 
              placeholder="Search for a store..." 
              className="w-full bg-white border border-border rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all shadow-sm"
            />
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-border p-6 sm:p-8 shadow-sm">
          <div className="flex flex-wrap gap-2 justify-center mb-10 pb-6 border-b border-border">
            {alphabet.map(letter => (
              <button key={letter} className="w-8 h-8 flex items-center justify-center rounded text-sm font-medium text-text-muted hover:bg-primary-50 hover:text-primary-600 transition-colors">
                {letter}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {stores.map((store, i) => (
              <Link key={i} href={`/stores/${store.slug}`} className="flex items-center gap-4 p-4 rounded-xl border border-transparent hover:border-border hover:bg-gray-50 transition-colors group">
                <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center font-bold text-gray-400 group-hover:bg-white group-hover:text-primary-600 group-hover:shadow-sm transition-all flex-shrink-0">
                  {store.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-navy-900 mb-0.5 group-hover:text-primary-600 transition-colors">{store.name}</div>
                  <div className="text-xs text-text-muted">{store.deals} Active Deals</div>
                </div>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}
