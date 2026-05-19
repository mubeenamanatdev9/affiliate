import { Metadata } from "next";
import { ShieldCheck, Users, TrendingUp, Globe } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | DealFinder",
  description: "Learn more about DealFinder, your trusted source for verified coupons and daily deals.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-deal-bg py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h1 className="text-4xl font-display font-bold text-navy-900 mb-4">
            About DealFinder
          </h1>
          <p className="text-lg text-text-secondary">
            We&apos;re on a mission to help shoppers save money on every purchase with verified, hand-tested coupons and deals.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {[
            { label: "Active Coupons", value: "10,000+", icon: ShieldCheck },
            { label: "Happy Shoppers", value: "500K+", icon: Users },
            { label: "Stores Partnered", value: "2,000+", icon: TrendingUp },
            { label: "Countries Served", value: "15+", icon: Globe },
          ].map((stat, i) => (
            <div key={i} className="bg-white border border-border rounded-2xl p-6 text-center shadow-sm">
              <stat.icon className="w-8 h-8 text-primary-600 mx-auto mb-3" />
              <div className="text-2xl font-bold text-navy-900 mb-1">{stat.value}</div>
              <div className="text-sm text-text-muted">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Content */}
        <div className="bg-white border border-border rounded-2xl p-8 shadow-sm mb-8">
          <h2 className="text-2xl font-bold text-navy-900 mb-4">Our Story</h2>
          <p className="text-text-secondary leading-relaxed mb-4">
            DealFinder was founded in 2024 with a simple goal: make it easier for people to save money when shopping online. 
            We noticed that finding valid, working coupon codes was frustrating and time-consuming. Too many sites listed 
            expired or fake codes, wasting shoppers&apos; time.
          </p>
          <p className="text-text-secondary leading-relaxed mb-4">
            That&apos;s why we built a platform focused on verification. Our team hand-tests every coupon code before it goes live, 
            and we monitor deals daily to remove expired offers. We partner directly with brands and retailers to bring you 
            exclusive discounts you won&apos;t find anywhere else.
          </p>
          <p className="text-text-secondary leading-relaxed">
            Today, DealFinder serves hundreds of thousands of shoppers across the globe, helping them save on everything 
            from fashion and electronics to travel and food. Whether you&apos;re looking for a quick discount or planning a 
            major purchase, we&apos;re here to help you get the best deal possible.
          </p>
        </div>

        <div className="bg-white border border-border rounded-2xl p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-navy-900 mb-4">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "Verified Codes", desc: "Every coupon is hand-tested by our team before publication." },
              { title: "Daily Updates", desc: "We refresh our listings daily to remove expired deals." },
              { title: "Exclusive Deals", desc: "Partner discounts you won&apos;t find on other coupon sites." },
              { title: "Community Driven", desc: "Our users report broken codes to keep the platform accurate." },
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <div className="w-10 h-10 bg-primary-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="w-5 h-5 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-navy-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-text-secondary">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
