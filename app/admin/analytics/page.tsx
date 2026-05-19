"use client";

import { useEffect, useState } from "react";
import { BarChart3, Download, TrendingUp } from "lucide-react";
import KpiCard from "@/components/admin/dashboard/KpiCard";
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip, Legend, BarChart, Bar, XAxis, YAxis, CartesianGrid } from "recharts";

const COLORS = ["#f97316", "#3b82f6", "#10b981", "#8b5cf6", "#ef4444"];

export default function AdminAnalyticsPage() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/admin/analytics")
      .then((res) => res.json())
      .then((d) => {
        setData(d);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const deviceData = data?.clicksByDevice?.map((d: any) => ({ name: d.device, value: d.count })) || [];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-navy-900 flex items-center gap-2">
            <BarChart3 className="w-6 h-6 text-primary-500" /> Analytics & Reports
          </h1>
          <p className="text-sm text-text-secondary mt-1">Deep dive into your traffic, conversions, and revenue data.</p>
        </div>
        <div className="flex items-center gap-3">
          <select className="bg-white border border-border rounded-xl px-4 py-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary-500 shadow-sm">
            <option>Last 30 Days</option>
            <option>Last 90 Days</option>
            <option>This Year</option>
            <option>All Time</option>
          </select>
          <button className="px-4 py-2 bg-white border border-border rounded-xl font-medium text-text-primary hover:bg-gray-50 shadow-sm flex items-center gap-2 transition-colors">
            <Download className="w-4 h-4" /> Export Report
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <KpiCard
          title="Conversion Rate"
          value={loading ? "..." : `${data?.conversionRate || 0}%`}
          trend="+0.3%"
          trendUp={true}
          icon={TrendingUp}
          gradient="bg-gradient-to-br from-emerald-500 to-emerald-400"
        />
        <KpiCard
          title="Earnings Per Click (EPC)"
          value={loading ? "..." : "$0.28"}
          trend="+0.02"
          trendUp={true}
          icon={TrendingUp}
          gradient="bg-gradient-to-br from-indigo-500 to-indigo-400"
        />
        <KpiCard
          title="Bounce Rate"
          value={loading ? "..." : "42.5%"}
          trend="-2.1%"
          trendUp={true}
          icon={TrendingUp}
          gradient="bg-gradient-to-br from-rose-500 to-rose-400"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white border border-border rounded-2xl p-6 shadow-sm flex flex-col h-96">
          <h3 className="text-lg font-bold text-navy-900 mb-4">Traffic Sources (Device)</h3>
          {deviceData.length === 0 ? (
            <div className="flex-1 flex items-center justify-center text-text-muted">No data yet</div>
          ) : (
            <div className="flex-1 min-h-0">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={deviceData} cx="50%" cy="50%" innerRadius={60} outerRadius={80} paddingAngle={5} dataKey="value">
                    {deviceData.map((entry: any, index: number) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip contentStyle={{ borderRadius: "12px", border: "none", boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)" }} />
                  <Legend verticalAlign="bottom" height={36} iconType="circle" />
                </PieChart>
              </ResponsiveContainer>
            </div>
          )}
        </div>

        <div className="bg-white border border-border rounded-2xl p-6 shadow-sm flex flex-col h-96">
          <h3 className="text-lg font-bold text-navy-900 mb-4">Top Affiliates by Revenue</h3>
          {data?.topAffiliates?.length === 0 ? (
            <div className="flex-1 flex items-center justify-center text-text-muted">No data yet</div>
          ) : (
            <div className="flex-1 min-h-0">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data?.topAffiliates || []} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: "#6b7280", fontSize: 12 }} dy={10} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fill: "#6b7280", fontSize: 12 }} tickFormatter={(value) => `$${value}`} />
                  <Tooltip contentStyle={{ borderRadius: "12px", border: "1px solid #e5e7eb", boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)" }} />
                  <Bar dataKey="totalRevenue" fill="#f97316" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          )}
        </div>
      </div>

      <div className="bg-white border border-border rounded-2xl shadow-sm p-6">
        <h3 className="text-lg font-bold text-navy-900 mb-4">Top Converting Landing Pages</h3>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-border text-sm text-text-muted">
              <th className="pb-3 font-medium">Page Path</th>
              <th className="pb-3 font-medium text-right">Views</th>
              <th className="pb-3 font-medium text-right">Clicks Out</th>
              <th className="pb-3 font-medium text-right">CTR</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            <tr className="border-b border-border">
              <td className="py-4 font-mono text-primary-600">/stores/nike</td>
              <td className="py-4 text-right tabular-nums">12,500</td>
              <td className="py-4 text-right tabular-nums">4,200</td>
              <td className="py-4 text-right font-medium text-success-600">33.6%</td>
            </tr>
            <tr className="border-b border-border">
              <td className="py-4 font-mono text-primary-600">/deals/amazon/prime-day</td>
              <td className="py-4 text-right tabular-nums">9,800</td>
              <td className="py-4 text-right tabular-nums">2,850</td>
              <td className="py-4 text-right font-medium text-success-600">29.0%</td>
            </tr>
            <tr>
              <td className="py-4 font-mono text-primary-600">/categories/electronics</td>
              <td className="py-4 text-right tabular-nums">7,200</td>
              <td className="py-4 text-right tabular-nums">1,100</td>
              <td className="py-4 text-right font-medium text-success-600">15.2%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
