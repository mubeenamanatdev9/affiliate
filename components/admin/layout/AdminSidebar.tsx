"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Users, Ticket, Store, ShoppingBag, Tags, BarChart3, Activity, Settings } from "lucide-react";

const navigation = [
  { name: 'Dashboard', href: '/admin/dashboard', icon: LayoutDashboard },
  { name: 'Affiliates', href: '/admin/affiliates', icon: Users },
  { name: 'Coupons', href: '/admin/coupons', icon: Ticket },
  { name: 'Stores', href: '/admin/stores', icon: Store },
  { name: 'Products', href: '/admin/products', icon: ShoppingBag },
  { name: 'Categories', href: '/admin/categories', icon: Tags },
  { name: 'Analytics', href: '/admin/analytics', icon: BarChart3 },
  { name: 'Users', href: '/admin/users', icon: Users },
  { name: 'Activity', href: '/admin/activity', icon: Activity },
  { name: 'Settings', href: '/admin/settings', icon: Settings },
];

export default function AdminSidebar() {
  const pathname = usePathname();

  return (
    <div className="hidden md:flex flex-col w-64 bg-navy-900 border-r border-border min-h-screen text-white/80">
      <div className="h-16 flex items-center px-6 border-b border-navy-800">
        <Link href="/admin/dashboard" className="text-xl font-display font-bold text-white">
          Admin Panel
        </Link>
      </div>
      <div className="flex-1 overflow-y-auto py-4">
        <nav className="px-3 space-y-1">
          {navigation.map((item) => {
            const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors group text-sm font-medium ${
                  isActive
                    ? "bg-primary-600 text-white"
                    : "hover:bg-navy-800 hover:text-white text-white/80"
                }`}
              >
                <item.icon className={`w-5 h-5 ${isActive ? "text-white" : "text-white/50 group-hover:text-white"}`} />
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
