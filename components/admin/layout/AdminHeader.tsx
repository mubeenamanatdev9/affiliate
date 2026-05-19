"use client";

import { Bell, Search, Menu, LogOut } from "lucide-react";
import { useState } from "react";
import { signOut } from "next-auth/react";
import { usePathname } from "next/navigation";

const pageTitles: Record<string, string> = {
  "/admin/dashboard": "Dashboard",
  "/admin/affiliates": "Affiliate Partners",
  "/admin/coupons": "Coupons",
  "/admin/stores": "Stores",
  "/admin/products": "Products",
  "/admin/products/import": "Bulk Import",
  "/admin/categories": "Categories",
  "/admin/analytics": "Analytics & Reports",
  "/admin/users": "Users",
  "/admin/activity": "Activity Logs",
  "/admin/settings": "Settings",
};

export default function AdminHeader() {
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);
  const pathname = usePathname();

  const title = pageTitles[pathname] || "Dashboard";

  return (
    <>
      <header className="h-16 bg-white border-b border-border flex items-center justify-between px-4 sm:px-6 z-10 sticky top-0">
        <div className="flex items-center gap-4">
          <button className="md:hidden p-2 text-text-muted hover:text-text-primary transition-colors">
            <Menu className="w-5 h-5" />
          </button>
          <div className="hidden sm:block text-lg font-semibold text-navy-900">
            {title}
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="hidden md:flex relative max-w-md w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-text-muted" />
            <input 
              type="text" 
              placeholder="Search..." 
              className="w-full bg-deal-bg border border-border rounded-full py-1.5 pl-9 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
            />
          </div>
          
          <button className="p-2 text-text-muted hover:text-text-primary transition-colors relative">
            <Bell className="w-5 h-5" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
          </button>
          
          <div className="flex items-center gap-2 pl-4 border-l border-border">
            <div className="w-8 h-8 bg-primary-100 text-primary-700 rounded-full flex items-center justify-center font-bold text-sm">
              A
            </div>
            <span className="hidden md:block text-sm font-medium text-navy-900">Admin</span>
            <button
              onClick={() => setShowLogoutConfirm(true)}
              className="p-2 text-text-muted hover:text-red-600 transition-colors ml-2"
              title="Log out"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      {/* Logout Confirmation Modal */}
      {showLogoutConfirm && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-sm p-6 mx-4">
            <h3 className="text-lg font-bold text-navy-900 mb-2">Confirm Logout</h3>
            <p className="text-text-secondary mb-6">Are you sure you want to log out of the admin panel?</p>
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
