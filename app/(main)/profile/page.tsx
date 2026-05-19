"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";
import DealsGrid from "@/components/coupons/DealsGrid";
import { Heart, Bell, Settings, LogOut, ShieldCheck } from "lucide-react";

export default function ProfilePage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  if (status === "loading") {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  if (!session) {
    return null; // Will redirect
  }

  const savedCoupons = [
    { id: "saved-1", storeName: "Nike", title: "30% OFF Summer Collection", code: "SUMMER30", expiry: "Expires in 2 days" },
    { id: "saved-2", storeName: "Target", title: "$10 Gift Card with $50 Purchase", code: "TARGET10", expiry: "Expires today" },
  ];

  const activeAlerts = [
    { store: "Amazon", condition: "Any deal over 20% off", status: "Active" },
    { category: "Electronics", condition: "Any deal", status: "Active" },
  ];

  return (
    <main className="min-h-screen bg-deal-bg py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Profile Header */}
        <div className="bg-white border border-border rounded-2xl p-8 shadow-sm mb-8 flex flex-col sm:flex-row items-center gap-6">
          <div className="w-24 h-24 bg-primary-100 text-primary-700 rounded-full flex items-center justify-center font-display font-bold text-4xl shadow-sm">
            {session.user?.name?.charAt(0) || 'U'}
          </div>
          <div className="text-center sm:text-left flex-1">
            <h1 className="text-3xl font-display font-bold text-navy-900 mb-1">{session.user?.name}</h1>
            <p className="text-text-secondary mb-3">{session.user?.email}</p>
            {session.user?.role === 'ADMIN' && (
              <Link href="/admin/dashboard" className="inline-flex items-center gap-1 bg-navy-900 text-white px-3 py-1 rounded-full text-xs font-medium hover:bg-navy-800 transition-colors">
                <ShieldCheck className="w-3 h-3" /> Admin Dashboard
              </Link>
            )}
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Sidebar */}
          <div className="w-full lg:w-64 space-y-2">
            <button className="w-full flex items-center gap-3 px-4 py-3 bg-primary-50 text-primary-700 rounded-xl font-medium transition-colors">
              <Heart className="w-5 h-5" /> Saved Coupons
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3 text-text-secondary hover:bg-white hover:text-navy-900 rounded-xl font-medium transition-colors">
              <Bell className="w-5 h-5" /> Deal Alerts
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3 text-text-secondary hover:bg-white hover:text-navy-900 rounded-xl font-medium transition-colors">
              <Settings className="w-5 h-5" /> Account Settings
            </button>
          </div>

          {/* Main Content Area */}
          <div className="flex-1 space-y-8">
            
            {/* Saved Coupons Section */}
            <section>
              <h2 className="text-2xl font-bold text-navy-900 mb-6 flex items-center gap-2">
                <Heart className="w-6 h-6 text-red-500" /> Saved Coupons
              </h2>
              {savedCoupons.length > 0 ? (
                <DealsGrid deals={savedCoupons} columns={3} />
              ) : (
                <div className="bg-white border border-border rounded-2xl p-12 text-center">
                  <Heart className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-navy-900 mb-2">No saved coupons yet</h3>
                  <p className="text-text-secondary mb-6">Browse stores and categories to find deals you love.</p>
                  <Link href="/stores" className="inline-block bg-primary-500 text-white px-6 py-2 rounded-xl font-medium hover:bg-primary-600 transition-colors">
                    Browse Stores
                  </Link>
                </div>
              )}
            </section>

            {/* Deal Alerts Section */}
            <section className="bg-white border border-border rounded-2xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-navy-900 flex items-center gap-2">
                  <Bell className="w-5 h-5 text-yellow-500" /> Active Deal Alerts
                </h2>
                <button className="text-sm text-primary-600 font-medium hover:underline">Add Alert</button>
              </div>
              <div className="space-y-4">
                {activeAlerts.map((alert, i) => (
                  <div key={i} className="flex items-center justify-between p-4 border border-border rounded-xl">
                    <div>
                      <div className="font-bold text-navy-900">{alert.store || alert.category}</div>
                      <div className="text-sm text-text-secondary">{alert.condition}</div>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-xs font-medium bg-success-50 text-success-600 px-2 py-1 rounded">Active</span>
                      <button className="text-text-muted hover:text-red-500 text-sm font-medium transition-colors">Remove</button>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

        </div>
      </div>
    </main>
  );
}
