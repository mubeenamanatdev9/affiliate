import Link from "next/link";
import { Check, Copy, ExternalLink, Clock, ThumbsUp, ThumbsDown, ShieldCheck } from "lucide-react";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: { store: string, slug: string } }): Promise<Metadata> {
  // In a real app, fetch data from DB using params
  const storeName = params.store.charAt(0).toUpperCase() + params.store.slice(1);
  return {
    title: `30% OFF ${storeName} Coupon Code | DealFinder`,
    description: `Get 30% off your purchase at ${storeName}. Verified and tested today.`,
  };
}

export default function CouponPage({ params }: { params: { store: string, slug: string } }) {
  const storeName = params.store.charAt(0).toUpperCase() + params.store.slice(1);
  
  return (
    <main className="min-h-screen bg-deal-bg py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <nav className="flex items-center text-sm text-text-muted mb-6">
          <Link href="/" className="hover:text-primary-600 transition-colors">Home</Link>
          <span className="mx-2">›</span>
          <Link href="/stores" className="hover:text-primary-600 transition-colors">Stores</Link>
          <span className="mx-2">›</span>
          <Link href={`/stores/${params.store}`} className="hover:text-primary-600 transition-colors">{storeName}</Link>
          <span className="mx-2">›</span>
          <span className="text-text-secondary truncate">{params.slug}</span>
        </nav>

        {/* Hero Card */}
        <div className="bg-white border border-border rounded-2xl p-8 shadow-sm mb-8 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-primary-500"></div>
          
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="w-24 h-24 bg-gray-100 rounded-2xl flex items-center justify-center flex-shrink-0 font-bold text-gray-400 text-3xl">
              {storeName.charAt(0)}
            </div>
            
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <Link href={`/stores/${params.store}`} className="text-primary-600 font-medium hover:underline">
                  {storeName} Official Store
                </Link>
                <span className="text-success-600 bg-success-50 px-2 py-0.5 rounded text-xs font-bold flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3" /> Verified
                </span>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-display font-bold text-navy-900 mb-4">
                30% OFF Summer Collection
              </h1>
              
              <div className="flex flex-wrap items-center gap-4 text-sm text-text-muted mb-8">
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> Expires in 2 days, 14 hours</span>
                <span className="flex items-center gap-1 text-primary-600 font-medium bg-primary-50 px-2 py-1 rounded">🔥 2,341 used today</span>
              </div>
              
              <div className="bg-deal-bg border border-border rounded-xl p-6 flex flex-col md:flex-row items-center justify-between gap-6 mb-6">
                <div className="text-center md:text-left w-full md:w-auto">
                  <div className="text-sm text-text-secondary mb-1">Coupon Code</div>
                  <div className="font-mono text-2xl font-bold text-primary-700 tracking-widest border-2 border-dashed border-primary-200 px-6 py-3 rounded-xl bg-white w-full md:w-auto text-center inline-block">
                    SUMMER30
                  </div>
                </div>
                
                <div className="w-full md:w-auto flex flex-col gap-3">
                  <button className="w-full md:w-auto bg-primary-500 hover:bg-primary-600 text-white font-medium px-8 py-3.5 rounded-xl shadow-sm flex items-center justify-center gap-2 transition-colors">
                    <Copy className="w-5 h-5" /> Copy Code
                  </button>
                  <Link href={`/out/${params.slug}`} target="_blank" className="w-full md:w-auto bg-white border border-border hover:bg-gray-50 text-text-primary font-medium px-8 py-3.5 rounded-xl shadow-sm flex items-center justify-center gap-2 transition-colors">
                    Go to Store <ExternalLink className="w-5 h-5" />
                  </Link>
                </div>
              </div>
              
              <div className="flex items-center justify-between border-t border-border pt-6 mt-6">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-text-secondary">Did this code work?</span>
                  <button className="p-2 border border-border rounded-lg hover:bg-success-50 hover:text-success-600 hover:border-success-200 transition-colors flex items-center gap-1 text-sm">
                    <ThumbsUp className="w-4 h-4" /> Yes
                  </button>
                  <button className="p-2 border border-border rounded-lg hover:bg-red-50 hover:text-red-600 hover:border-red-200 transition-colors flex items-center gap-1 text-sm">
                    <ThumbsDown className="w-4 h-4" /> No
                  </button>
                </div>
                <div className="text-sm font-medium text-success-600">
                  94% Success Rate
                </div>
              </div>

            </div>
          </div>
        </div>
        
        {/* Accordions / Content */}
        <div className="space-y-6">
          <div className="bg-white border border-border rounded-2xl p-8 shadow-sm">
            <h3 className="text-xl font-display font-bold text-navy-900 mb-4 flex items-center gap-2">
              📋 How to Use
            </h3>
            <ol className="list-decimal list-inside space-y-3 text-text-secondary ml-2">
              <li>Click "Copy Code" above to copy the discount code to your clipboard.</li>
              <li>Click "Go to Store" to navigate to {storeName}'s website.</li>
              <li>Add your desired items to your shopping cart.</li>
              <li>During checkout, look for the "Promo Code" or "Coupon Code" box.</li>
              <li>Paste the code and click "Apply" to enjoy your savings!</li>
            </ol>
          </div>
          
          <div className="bg-white border border-border rounded-2xl p-8 shadow-sm">
            <h3 className="text-xl font-display font-bold text-navy-900 mb-4 flex items-center gap-2">
              ⚖️ Terms & Conditions
            </h3>
            <ul className="list-disc list-inside space-y-3 text-text-secondary ml-2">
              <li>Valid on full-price items only.</li>
              <li>Cannot be combined with other offers or promotions.</li>
              <li>Excludes sale items, limited editions, and gift cards.</li>
              <li>Subject to change or cancellation without notice.</li>
            </ul>
          </div>
        </div>

      </div>
    </main>
  );
}
