"use client";

import Link from "next/link";
import { Search, User, LogOut, X, Store, Tag, Percent } from "lucide-react";
import { useSession, signOut } from "next-auth/react";
import { useState, useRef, useEffect } from "react";

export default function Header() {
  const { data: session } = useSession();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowResults(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const delayDebounce = setTimeout(async () => {
      if (searchQuery.trim().length > 0) {
        setIsSearching(true);
        try {
          const res = await fetch(`/api/search?q=${encodeURIComponent(searchQuery)}`);
          const data = await res.json();
          setSearchResults(data.results || []);
          setShowResults(true);
        } catch (err) {
          setSearchResults([]);
        } finally {
          setIsSearching(false);
        }
      } else {
        setSearchResults([]);
        setShowResults(false);
      }
    }, 300);

    return () => clearTimeout(delayDebounce);
  }, [searchQuery]);

  const getResultIcon = (type: string) => {
    switch (type) {
      case "store": return <Store className="w-4 h-4 text-primary-600" />;
      case "category": return <Tag className="w-4 h-4 text-primary-600" />;
      case "deal": return <Percent className="w-4 h-4 text-primary-600" />;
      default: return <Search className="w-4 h-4 text-primary-600" />;
    }
  };

  const getResultHref = (result: any) => {
    switch (result.type) {
      case "store": return `/stores/${result.slug}`;
      case "category": return `/categories/${result.slug}`;
      case "deal": return `/deals/${result.slug}`;
      default: return `#`;
    }
  };

  return (
    <>
      <header className="bg-white border-b border-border h-[72px] flex items-center sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/" className="text-2xl font-display font-bold text-primary-600">
              DealFinder
            </Link>
            <nav className="hidden md:flex items-center gap-6">
              <Link href="/categories" className="text-text-secondary hover:text-primary-600 font-medium">Categories</Link>
              <Link href="/stores" className="text-text-secondary hover:text-primary-600 font-medium">Stores</Link>
              <Link href="/blog" className="text-text-secondary hover:text-primary-600 font-medium">Blog</Link>
            </nav>
          </div>
          
          <div className="flex-1 max-w-xl px-8 hidden lg:block" ref={searchRef}>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-text-muted" />
              <input 
                type="text" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search deals, stores, or categories..." 
                className="w-full bg-deal-bg border border-border rounded-full py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
              />
              {searchQuery && (
                <button 
                  onClick={() => { setSearchQuery(""); setShowResults(false); }}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted hover:text-text-primary"
                >
                  <X className="w-4 h-4" />
                </button>
              )}

              {showResults && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-border rounded-xl shadow-lg overflow-hidden z-50">
                  {isSearching ? (
                    <div className="p-4 text-center text-sm text-text-muted">Searching...</div>
                  ) : searchResults.length > 0 ? (
                    <div className="py-2">
                      {searchResults.map((result, i) => (
                        <Link
                          key={i}
                          href={getResultHref(result)}
                          onClick={() => { setShowResults(false); setSearchQuery(""); }}
                          className="flex items-center gap-3 px-4 py-2.5 hover:bg-gray-50 transition-colors"
                        >
                          {getResultIcon(result.type)}
                          <div className="flex-1 min-w-0">
                            <div className="text-sm font-medium text-navy-900 truncate">{result.name}</div>
                            <div className="text-xs text-text-muted capitalize">{result.type}{result.store ? ` • ${result.store}` : ''}</div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <div className="p-4 text-center text-sm text-text-muted">No results found</div>
                  )}
                </div>
              )}
            </div>
          </div>

          <div className="flex items-center gap-4">
            {session ? (
              <div className="flex items-center gap-4">
                <Link href="/profile" className="flex items-center gap-2 text-text-secondary hover:text-primary-600 transition-colors font-medium">
                  <div className="w-8 h-8 bg-primary-100 text-primary-700 rounded-full flex items-center justify-center font-bold text-sm">
                    {session.user?.name?.charAt(0) || 'U'}
                  </div>
                  <span className="hidden sm:inline-block">Profile</span>
                </Link>
                <button 
                  onClick={() => setShowLogoutConfirm(true)}
                  className="p-2 text-text-muted hover:text-red-600 transition-colors"
                  title="Log out"
                >
                  <LogOut className="h-5 w-5" />
                </button>
              </div>
            ) : (
              <>
                <button className="p-2 text-text-secondary hover:text-primary-600 transition-colors md:hidden">
                  <User className="h-5 w-5" />
                </button>
                <Link href="/login" className="hidden sm:inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-xl shadow-sm text-sm font-medium text-white bg-primary-500 hover:bg-primary-600 transition-colors">
                  Login
                </Link>
              </>
            )}
          </div>
        </div>
      </header>

      {/* Logout Confirmation Modal */}
      {showLogoutConfirm && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-sm p-6 mx-4">
            <h3 className="text-lg font-bold text-navy-900 mb-2">Confirm Logout</h3>
            <p className="text-text-secondary mb-6">Are you sure you want to log out of your account?</p>
            <div className="flex gap-3 justify-end">
              <button
                onClick={() => setShowLogoutConfirm(false)}
                className="px-4 py-2 text-sm font-medium text-text-secondary hover:text-navy-900 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  setShowLogoutConfirm(false);
                  signOut({ callbackUrl: "/" });
                }}
                className="px-4 py-2 text-sm font-medium text-white bg-red-500 hover:bg-red-600 rounded-xl transition-colors"
              >
                Log Out
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
