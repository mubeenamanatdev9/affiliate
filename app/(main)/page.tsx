"use client";

import Link from "next/link";
import DealsGrid from "@/components/coupons/DealsGrid";
import { ArrowRight, Tag, Monitor, Plane, Coffee, Briefcase, Zap, Home as HomeIcon, Dumbbell, Shield, Gift, BookOpen } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";

const trendingDeals = [
  {
    id: "deal-1",
    storeName: "Nike",
    title: "30% OFF Summer Collection",
    code: "SUMMER30",
    expiry: "Expires in 2 days",
    usesToday: 2341,
  },
  {
    id: "deal-2",
    storeName: "Amazon",
    title: "Up to 50% Off Electronics",
    dealUrl: "/deals/amazon/tech-sale",
    usesToday: 8902,
  },
  {
    id: "deal-3",
    storeName: "Target",
    title: "$10 Gift Card with $50 Purchase",
    code: "TARGET10",
    expiry: "Expires today",
    usesToday: 1205,
  },
  {
    id: "deal-4",
    storeName: "Best Buy",
    title: "20% Off Select Laptops",
    code: "TECH20",
    expiry: "Expires in 5 days",
    usesToday: 450,
  }
];

const categories = [
  { name: "Fashion", icon: Tag },
  { name: "Electronics", icon: Monitor },
  { name: "Travel", icon: Plane },
  { name: "Food", icon: Coffee },
  { name: "Software", icon: Briefcase },
  { name: "Beauty", icon: Zap },
  { name: "Home", icon: HomeIcon },
  { name: "Sports", icon: Dumbbell },
  { name: "Finance", icon: Shield },
  { name: "Health", icon: HeartIcon },
  { name: "Gifts", icon: Gift },
  { name: "Education", icon: BookOpen },
];

// Placeholder HeartIcon as it's not exported from lucide-react directly with this exact usage in array
function HeartIcon(props: any) {
  return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>;
}

export default function Home() {
  const [email, setEmail] = useState("");
  const [isSubscribing, setIsSubscribing] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      toast.error("Please enter a valid email address");
      return;
    }

    setIsSubscribing(true);
    try {
      const res = await fetch("/api/newsletter/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success(data.message || "Successfully subscribed!");
        setEmail("");
      } else {
        toast.error(data.error || "Failed to subscribe. Please try again.");
      }
    } catch (err) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubscribing(false);
    }
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-primary-50 py-16 md:py-24 border-b border-primary-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-display font-bold text-navy-900 mb-6 tracking-tight">
            Save Big on Every Purchase
          </h1>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto mb-10">
            Discover 10,000+ Verified Coupons. Hand-tested daily so you never pay full price again.
          </p>
          
          <div className="max-w-2xl mx-auto flex flex-wrap justify-center gap-3 mb-8">
            <span className="text-sm font-medium text-text-muted uppercase tracking-wider w-full text-center mb-2">Trending Searches</span>
            {['Amazon', 'Nike', 'Target', 'Best Buy', 'Adidas'].map(tag => (
              <Link key={tag} href={`/stores/${tag.toLowerCase()}`} className="bg-white border border-border rounded-full px-4 py-1.5 text-sm font-medium text-text-secondary hover:text-primary-600 hover:border-primary-200 transition-colors shadow-sm">
                {tag}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-8 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale">
          {/* Placeholders for logos */}
          <div className="font-display font-bold text-xl">AMAZON</div>
          <div className="font-display font-bold text-xl">NIKE</div>
          <div className="font-display font-bold text-xl">TARGET</div>
          <div className="font-display font-bold text-xl">BEST BUY</div>
          <div className="font-display font-bold text-xl">WALMART</div>
        </div>
      </section>

      {/* Trending Deals */}
      <section className="py-16 md:py-24 bg-deal-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-3xl font-display font-bold text-navy-900 flex items-center gap-3">
              🔥 Trending Deals
            </h2>
            <Link href="/deals" className="hidden sm:flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors">
              View All Deals <ArrowRight className="ml-1 w-4 h-4" />
            </Link>
          </div>
          
          <DealsGrid deals={trendingDeals} columns={4} />
          
          <div className="mt-8 text-center sm:hidden">
             <Link href="/deals" className="inline-flex items-center justify-center px-6 py-3 border border-border rounded-xl font-medium text-text-primary bg-white hover:bg-gray-50 transition-colors w-full">
              View All Deals
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-white border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-display font-bold text-navy-900 mb-8">
            🏷️ Browse by Category
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {categories.map((cat, i) => (
              <Link key={i} href={`/categories/${cat.name.toLowerCase()}`} className="flex flex-col items-center justify-center p-6 bg-deal-bg rounded-2xl border border-border hover:border-primary-200 hover:shadow-sm transition-all group">
                <cat.icon className="w-8 h-8 text-text-muted group-hover:text-primary-500 mb-3 transition-colors" />
                <span className="font-medium text-text-primary group-hover:text-primary-700 transition-colors">{cat.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-primary-600 relative overflow-hidden">
        {/* Decorative background pattern could go here */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            Never Miss a Deal
          </h2>
          <p className="text-primary-100 text-lg mb-8">
            Get the best coupons and exclusive offers delivered straight to your inbox weekly.
          </p>
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address" 
              className="flex-1 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white border-0"
              required
            />
            <button 
              type="submit" 
              disabled={isSubscribing}
              className="bg-navy-900 text-white px-8 py-3 rounded-xl font-medium hover:bg-navy-800 transition-colors disabled:opacity-70"
            >
              {isSubscribing ? 'Subscribing...' : 'Subscribe'}
            </button>
          </form>
          <p className="text-primary-200 text-sm mt-4">We respect your privacy. Unsubscribe at any time.</p>
        </div>
      </section>
    </main>
  );
}
