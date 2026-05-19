import Link from "next/link";
import { Metadata } from "next";
import { Calendar, User, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog & Buying Guides | DealFinder",
  description: "Read our latest buying guides, saving tips, and seasonal deal roundups.",
};

const posts = [
  { slug: "best-running-shoes-2026", title: "The Best Running Shoes of 2026 (And Where to Find Discounts)", excerpt: "Looking to upgrade your running gear? We've tested the top models from Nike, Adidas, and Brooks. Here's how to save...", date: "May 10, 2026", author: "Sarah Jenkins", category: "Buying Guide", image: "🏃‍♀️" },
  { slug: "summer-travel-hacks", title: "7 Summer Travel Hacks to Save Big on Flights and Hotels", excerpt: "Don't let high travel costs ruin your summer vacation. These seven proven strategies will help you cut your travel budget in half.", date: "May 5, 2026", author: "Mike Torres", category: "Saving Tips", image: "✈️" },
  { slug: "memorial-day-sales-preview", title: "Early Memorial Day Sales: What to Buy Now vs. Later", excerpt: "Memorial Day is around the corner. We analyze historical data to tell you exactly which categories offer the best discounts.", date: "May 1, 2026", author: "DealFinder Team", category: "Seasonal", image: "🏷️" },
  { slug: "how-to-stack-coupons", title: "The Ultimate Guide to Stacking Coupons Like a Pro", excerpt: "Did you know you can use multiple promo codes on a single order at certain stores? Here's our comprehensive guide to coupon stacking.", date: "April 28, 2026", author: "Sarah Jenkins", category: "Saving Tips", image: "🥞" },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-deal-bg py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h1 className="text-4xl font-display font-bold text-navy-900 mb-4">
            Blog & Buying Guides
          </h1>
          <p className="text-lg text-text-secondary">
            Expert advice, buying guides, and insider tips to help you save money on everything you buy.
          </p>
        </div>

        {/* Featured Post */}
        <div className="bg-white border border-border rounded-2xl overflow-hidden shadow-sm mb-12 group cursor-pointer hover:shadow-md transition-all">
          <Link href={`/blog/${posts[0].slug}`} className="flex flex-col md:flex-row">
            <div className="md:w-1/2 bg-primary-50 flex items-center justify-center p-12 text-6xl">
              {posts[0].image}
            </div>
            <div className="p-8 md:w-1/2 flex flex-col justify-center">
              <span className="text-primary-600 font-medium text-sm mb-3 uppercase tracking-wider">{posts[0].category}</span>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-navy-900 mb-4 group-hover:text-primary-600 transition-colors">
                {posts[0].title}
              </h2>
              <p className="text-text-secondary mb-6 text-lg line-clamp-3">
                {posts[0].excerpt}
              </p>
              <div className="flex items-center gap-4 text-sm text-text-muted mt-auto">
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {posts[0].date}</span>
                <span className="flex items-center gap-1"><User className="w-4 h-4" /> {posts[0].author}</span>
              </div>
            </div>
          </Link>
        </div>

        {/* Recent Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.slice(1).map((post, i) => (
            <Link key={i} href={`/blog/${post.slug}`} className="bg-white border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all group flex flex-col h-full">
              <div className="h-48 bg-gray-50 flex items-center justify-center text-5xl border-b border-border group-hover:bg-primary-50 transition-colors">
                {post.image}
              </div>
              <div className="p-6 flex flex-col flex-1">
                <span className="text-primary-600 font-medium text-xs mb-2 uppercase tracking-wider">{post.category}</span>
                <h3 className="text-xl font-bold text-navy-900 mb-3 group-hover:text-primary-600 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-text-secondary mb-6 line-clamp-3 text-sm flex-1">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-text-muted mt-auto pt-4 border-t border-border">
                  <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {post.date}</span>
                  <span className="text-primary-600 font-medium flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Read <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}