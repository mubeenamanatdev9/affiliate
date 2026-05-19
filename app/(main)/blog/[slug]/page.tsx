import Link from "next/link";
import { Metadata } from "next";
import { Calendar, User, ArrowLeft, Share2 } from "lucide-react";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const formattedTitle = params.slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  return {
    title: `${formattedTitle} | DealFinder Blog`,
    description: `Read our comprehensive guide on ${formattedTitle.toLowerCase()}. Find the best tips, tricks, and deals.`,
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const formattedTitle = params.slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

  return (
    <main className="min-h-screen bg-deal-bg py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb & Back */}
        <div className="flex items-center justify-between mb-8">
          <Link href="/blog" className="text-sm font-medium text-text-muted hover:text-primary-600 flex items-center gap-1 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>
          <button className="text-sm font-medium text-text-muted hover:text-primary-600 flex items-center gap-1 transition-colors">
            <Share2 className="w-4 h-4" /> Share
          </button>
        </div>

        {/* Article Header */}
        <article className="bg-white border border-border rounded-2xl overflow-hidden shadow-sm">
          <div className="h-64 md:h-96 bg-primary-50 flex items-center justify-center text-7xl md:text-9xl border-b border-border">
            📖
          </div>
          
          <div className="p-8 md:p-12">
            <div className="flex flex-wrap items-center gap-4 text-sm text-text-muted mb-6">
              <span className="text-primary-600 font-bold uppercase tracking-wider bg-primary-50 px-3 py-1 rounded-full">Buying Guide</span>
              <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> May 10, 2026</span>
              <span className="flex items-center gap-1"><User className="w-4 h-4" /> Sarah Jenkins</span>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-display font-bold text-navy-900 mb-8 leading-tight">
              {formattedTitle}
            </h1>
            
            {/* Article Content (Prose) */}
            <div className="prose prose-lg prose-primary max-w-none text-text-secondary">
              <p className="lead text-xl text-navy-900 font-medium mb-6">
                This is a placeholder for the rich text content of the blog post. In a real application, this content would be fetched from a CMS like Sanity, Contentful, or a database.
              </p>
              
              <h2>Understanding the Basics</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              
              <h3>Key Factors to Consider</h3>
              <ul>
                <li><strong>Price vs. Value:</strong> Always consider the long-term value, not just the initial sticker price.</li>
                <li><strong>Timing your Purchase:</strong> Sales cycles matter. Buy electronics in November, winter gear in March.</li>
                <li><strong>Coupon Stacking:</strong> Learn which retailers allow multiple promo codes.</li>
              </ul>
              
              <div className="bg-primary-50 border-l-4 border-primary-500 p-6 my-8 rounded-r-xl">
                <h4 className="text-primary-900 font-bold mt-0">Pro Tip</h4>
                <p className="mb-0 text-primary-800">
                  Always leave items in your cart for 24 hours. Many retailers will automatically email you a 10-15% off coupon to complete your purchase.
                </p>
              </div>

              <h2>Top Recommendations</h2>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            
            {/* Author Bio */}
            <div className="mt-12 pt-8 border-t border-border flex items-center gap-6">
              <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center font-bold text-gray-500 text-xl flex-shrink-0">
                SJ
              </div>
              <div>
                <h4 className="font-bold text-navy-900 mb-1">Sarah Jenkins</h4>
                <p className="text-sm text-text-secondary">
                  Sarah is a senior deal editor at DealFinder with over 5 years of experience tracking down the best discounts in tech and fashion.
                </p>
              </div>
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}