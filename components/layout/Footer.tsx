import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-white/60 py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-1 md:col-span-2">
          <Link href="/" className="text-2xl font-display font-bold text-white mb-4 block">
            DealFinder
          </Link>
          <p className="mb-6 max-w-sm">
            Your trusted source for the best coupons, promo codes, and daily deals. Save money every time you shop online.
          </p>
          <div className="text-sm">
            &copy; {new Date().getFullYear()} DealFinder. All rights reserved.
          </div>
        </div>
        
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-3">
            <li><Link href="/deals" className="hover:text-white transition-colors">All Deals</Link></li>
            <li><Link href="/stores" className="hover:text-white transition-colors">Top Stores</Link></li>
            <li><Link href="/categories" className="hover:text-white transition-colors">Categories</Link></li>
            <li><Link href="/blog" className="hover:text-white transition-colors">Blog & Guides</Link></li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-white font-semibold mb-4">Legal</h3>
          <ul className="space-y-3">
            <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
