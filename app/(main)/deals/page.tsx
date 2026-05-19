"use client";

import { useState, useMemo } from "react";
import { Search, SlidersHorizontal, Tag, Monitor, Plane, Coffee, Briefcase, Zap, Home as HomeIcon, Dumbbell, Shield, Gift, BookOpen, Heart } from "lucide-react";
import DealsGrid from "@/components/coupons/DealsGrid";

const categories = [
  { name: "All", icon: Tag },
  { name: "Fashion", icon: Tag },
  { name: "Electronics", icon: Monitor },
  { name: "Travel", icon: Plane },
  { name: "Food", icon: Coffee },
  { name: "Software", icon: Briefcase },
  { name: "Beauty", icon: Zap },
  { name: "Home", icon: HomeIcon },
  { name: "Sports", icon: Dumbbell },
  { name: "Finance", icon: Shield },
  { name: "Gifts", icon: Gift },
  { name: "Education", icon: BookOpen },
];

const stores = [
  "All",
  "Amazon",
  "Nike",
  "Target",
  "Best Buy",
  "Adidas",
  "Walmart",
  "Apple",
  "Samsung",
  "Dell",
  "HP",
];

const allDeals = [
  { id: "deal-1", storeName: "Nike", title: "30% OFF Summer Collection", code: "SUMMER30", expiry: "Expires in 2 days", usesToday: 2341, category: "Fashion", dealUrl: "#" },
  { id: "deal-2", storeName: "Amazon", title: "Up to 50% Off Electronics", dealUrl: "#", usesToday: 8902, category: "Electronics" },
  { id: "deal-3", storeName: "Target", title: "$10 Gift Card with $50 Purchase", code: "TARGET10", expiry: "Expires today", usesToday: 1205, category: "Home", dealUrl: "#" },
  { id: "deal-4", storeName: "Best Buy", title: "20% Off Select Laptops", code: "TECH20", expiry: "Expires in 5 days", usesToday: 450, category: "Electronics", dealUrl: "#" },
  { id: "deal-5", storeName: "Dell", title: "Free Shipping on All Orders", dealUrl: "#", usesToday: 120, category: "Electronics" },
  { id: "deal-6", storeName: "Apple", title: "Save $100 on MacBooks", code: "SAVE100", expiry: "Expires today", usesToday: 890, category: "Electronics", dealUrl: "#" },
  { id: "deal-7", storeName: "Samsung", title: "Up to 30% Off Monitors", dealUrl: "#", usesToday: 340, category: "Electronics" },
  { id: "deal-8", storeName: "HP", title: "15% Off XPS Series", code: "XPS15", usesToday: 56, category: "Electronics", dealUrl: "#" },
  { id: "deal-9", storeName: "Adidas", title: "Buy 1 Get 1 50% Off", code: "BOGO50", expiry: "Expires tomorrow", usesToday: 340, category: "Fashion", dealUrl: "#" },
  { id: "deal-10", storeName: "Walmart", title: "Up to 50% Off Clearance", dealUrl: "#", usesToday: 5600, category: "Home" },
  { id: "deal-11", storeName: "Nike", title: "Free Shipping on Orders Over $50", dealUrl: "#", usesToday: 1205, category: "Fashion" },
  { id: "deal-12", storeName: "Target", title: "20% Off Your First Purchase", code: "WELCOME20", usesToday: 890, category: "Home", dealUrl: "#" },
];

export default function DealsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedStore, setSelectedStore] = useState("All");

  const filteredDeals = useMemo(() => {
    return allDeals.filter((deal) => {
      const matchesSearch =
        searchQuery === "" ||
        deal.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        deal.storeName.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        selectedCategory === "All" || deal.category === selectedCategory;

      const matchesStore =
        selectedStore === "All" || deal.storeName === selectedStore;

      return matchesSearch && matchesCategory && matchesStore;
    });
  }, [searchQuery, selectedCategory, selectedStore]);

  return (
    <main className="min-h-screen bg-deal-bg py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="bg-white border border-border rounded-2xl p-8 shadow-sm mb-8">
          <h1 className="text-3xl font-display font-bold text-navy-900 mb-2">
            All Deals & Coupons
          </h1>
          <p className="text-text-secondary">
            Browse our complete collection of verified coupons and daily deals. Filter by category or store to find exactly what you need.
          </p>
        </div>

        {/* Search & Filters */}
        <div className="bg-white border border-border rounded-2xl p-6 shadow-sm mb-8">
          {/* Search */}
          <div className="relative max-w-lg mb-6">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-text-muted" />
            <input
              type="text"
              placeholder="Search deals or stores..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-gray-50 border border-border rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
            />
          </div>

          {/* Category Filter */}
          <div className="mb-4">
            <div className="flex items-center gap-2 mb-3">
              <SlidersHorizontal className="w-4 h-4 text-text-muted" />
              <span className="text-sm font-medium text-text-secondary">Filter by Category</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.name}
                  onClick={() => setSelectedCategory(cat.name)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                    selectedCategory === cat.name
                      ? "bg-primary-50 text-primary-700 border border-primary-200"
                      : "bg-gray-50 text-text-secondary border border-transparent hover:bg-gray-100"
                  }`}
                >
                  <cat.icon className="w-3.5 h-3.5" />
                  {cat.name}
                </button>
              ))}
            </div>
          </div>

          {/* Store Filter */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Tag className="w-4 h-4 text-text-muted" />
              <span className="text-sm font-medium text-text-secondary">Filter by Store</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {stores.map((store) => (
                <button
                  key={store}
                  onClick={() => setSelectedStore(store)}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                    selectedStore === store
                      ? "bg-primary-50 text-primary-700 border border-primary-200"
                      : "bg-gray-50 text-text-secondary border border-transparent hover:bg-gray-100"
                  }`}
                >
                  {store}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-text-secondary text-sm">
            Showing <span className="font-semibold text-navy-900">{filteredDeals.length}</span> deals
          </p>
          {(selectedCategory !== "All" || selectedStore !== "All" || searchQuery) && (
            <button
              onClick={() => {
                setSelectedCategory("All");
                setSelectedStore("All");
                setSearchQuery("");
              }}
              className="text-sm text-primary-600 font-medium hover:underline"
            >
              Clear all filters
            </button>
          )}
        </div>

        {/* Deals Grid */}
        {filteredDeals.length > 0 ? (
          <DealsGrid deals={filteredDeals} columns={4} />
        ) : (
          <div className="bg-white border border-border rounded-2xl p-12 text-center">
            <Heart className="w-12 h-12 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-navy-900 mb-2">No deals found</h3>
            <p className="text-text-secondary mb-6">Try adjusting your filters or search query.</p>
            <button
              onClick={() => {
                setSelectedCategory("All");
                setSelectedStore("All");
                setSearchQuery("");
              }}
              className="inline-block bg-primary-500 text-white px-6 py-2 rounded-xl font-medium hover:bg-primary-600 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
