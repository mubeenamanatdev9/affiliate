"use client";

import { useEffect, useState } from "react";
import KpiCard from "@/components/admin/dashboard/KpiCard";
import RevenueChart from "@/components/admin/dashboard/RevenueChart";
import DeviceChart from "@/components/admin/dashboard/DeviceChart";
import { DollarSign, MousePointerClick, Target, BarChart2 } from "lucide-react";

export default function DashboardPage() {
  const [stats, setStats] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/admin/analytics")
      .then((res) => res.json())
      .then((data) => {
        setStats(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const formatCurrency = (val: number) =>
    new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(val);
  const formatNumber = (val: number) => new Intl.NumberFormat("en-US").format(val);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <h1 className="text-2xl font-bold text-navy-900">Dashboard Overview</h1>
        <div className="flex items-center gap-2">
          <select className="bg-white border border-border rounded-lg px-4 py-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary-500">
            <option>Today</option>
            <option>Last 7 Days</option>
            <option>Last 30 Days</option>
            <option>This Year</option>
          </select>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <KpiCard
          title="Total Revenue"
          value={loading ? "..." : formatCurrency(stats?.totalRevenue || 0)}
          trend="+23.4%"
          trendUp={true}
          icon={DollarSign}
          gradient="bg-gradient-to-br from-primary-500 to-primary-400"
        />
        <KpiCard
          title="Total Clicks"
          value={loading ? "..." : formatNumber(stats?.totalClicks || 0)}
          trend="+15.2%"
          trendUp={true}
          icon={MousePointerClick}
          gradient="bg-gradient-to-br from-blue-500 to-blue-400"
        />
        <KpiCard
          title="Conversions"
          value={loading ? "..." : formatNumber(stats?.totalConversions || 0)}
          trend="+5.1%"
          trendUp={true}
          icon={Target}
          gradient="bg-gradient-to-br from-success-500 to-success-400"
        />
        <KpiCard
          title="Avg. CTR"
          value={loading ? "..." : `${stats?.conversionRate || 0}%`}
          trend="+1.2%"
          trendUp={true}
          icon={BarChart2}
          gradient="bg-gradient-to-br from-purple-500 to-purple-400"
        />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
        <div className="lg:col-span-2 bg-white border border-border rounded-2xl p-6 h-80">
          <RevenueChart />
        </div>
        <div className="bg-white border border-border rounded-2xl p-6 h-80">
          <DeviceChart />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        <div className="bg-white border border-border rounded-2xl p-6 overflow-x-auto">
          <h3 className="text-lg font-bold text-navy-900 mb-4">Top Performing Affiliates</h3>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-border text-sm text-text-muted">
                <th className="pb-3 font-medium">Name</th>
                <th className="pb-3 font-medium">Clicks</th>
                <th className="pb-3 font-medium">Conv.</th>
                <th className="pb-3 font-medium">Revenue</th>
                <th className="pb-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {loading ? (
                <tr><td colSpan={5} className="py-4 text-text-muted">Loading...</td></tr>
              ) : stats?.topAffiliates?.length === 0 ? (
                <tr><td colSpan={5} className="py-4 text-text-muted">No affiliates yet</td></tr>
              ) : (
                stats?.topAffiliates?.map((aff: any) => (
                  <tr key={aff.id} className="border-b border-border">
                    <td className="py-4 font-medium text-navy-900">{aff.name}</td>
                    <td className="py-4">{formatNumber(aff.totalClicks)}</td>
                    <td className="py-4">{formatNumber(aff.totalConversions || 0)}</td>
                    <td className="py-4">{formatCurrency(aff.totalRevenue)}</td>
                    <td className="py-4"><span className="w-2.5 h-2.5 rounded-full bg-success-500 inline-block mr-2"></span>{aff.status}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        <div className="bg-white border border-border rounded-2xl p-6 overflow-x-auto">
          <h3 className="text-lg font-bold text-navy-900 mb-4">Recent Activity</h3>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-border text-sm text-text-muted">
                <th className="pb-3 font-medium">Action</th>
                <th className="pb-3 font-medium">Entity</th>
                <th className="pb-3 font-medium">User</th>
                <th className="pb-3 font-medium">Time</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {loading ? (
                <tr><td colSpan={4} className="py-4 text-text-muted">Loading...</td></tr>
              ) : stats?.recentActivity?.length === 0 ? (
                <tr><td colSpan={4} className="py-4 text-text-muted">No recent activity</td></tr>
              ) : (
                stats?.recentActivity?.map((log: any) => (
                  <tr key={log.id} className="border-b border-border">
                    <td className="py-4 text-primary-600 font-medium">{log.action}</td>
                    <td className="py-4">{log.entityType}</td>
                    <td className="py-4">{log.user?.name || log.user?.email || "System"}</td>
                    <td className="py-4 text-text-muted">{new Date(log.createdAt).toLocaleDateString()}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
