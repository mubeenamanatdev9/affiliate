"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import StatusBadge from "@/components/admin/shared/StatusBadge";
import { ArrowLeft, Edit, PauseCircle, Trash2 } from "lucide-react";

interface AffiliateDetailProps {
  id: string;
}

export default function AffiliateDetail({ id }: AffiliateDetailProps) {
  const [affiliate, setAffiliate] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/admin/affiliates/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setAffiliate(data.affiliate);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  const formatCurrency = (val: number) => new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(val || 0);
  const formatNumber = (val: number) => new Intl.NumberFormat("en-US").format(val || 0);

  if (loading) {
    return <div className="p-12 text-center text-text-muted">Loading affiliate details...</div>;
  }

  if (!affiliate) {
    return <div className="p-12 text-center text-text-muted">Affiliate not found</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
        <div>
          <Link href="/admin/affiliates" className="text-sm font-medium text-text-muted hover:text-primary-600 flex items-center gap-1 mb-4 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Affiliates
          </Link>
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-xl bg-gray-100 flex items-center justify-center font-display font-bold text-gray-400 text-2xl">
              {affiliate.name.charAt(0)}
            </div>
            <div>
              <h1 className="text-2xl font-bold text-navy-900 mb-1">{affiliate.name}</h1>
              <div className="flex items-center gap-3 text-sm text-text-secondary">
                <StatusBadge status={affiliate.status} />
                <span className="hidden sm:inline-block w-1 h-1 rounded-full bg-gray-300"></span>
                <span>Network: <strong className="font-medium text-navy-900">{affiliate.network}</strong></span>
                <span className="hidden sm:inline-block w-1 h-1 rounded-full bg-gray-300"></span>
                <span>Commission: <strong className="font-medium text-navy-900">{affiliate.commissionRate}% {affiliate.commissionType}</strong></span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="p-2 border border-border rounded-xl text-text-muted hover:text-primary-600 hover:bg-gray-50 transition-colors" title="Edit">
            <Edit className="w-5 h-5" />
          </button>
          <button className="p-2 border border-border rounded-xl text-text-muted hover:text-yellow-600 hover:bg-gray-50 transition-colors" title="Pause">
            <PauseCircle className="w-5 h-5" />
          </button>
          <button className="p-2 border border-red-100 bg-red-50 text-red-600 rounded-xl hover:bg-red-100 transition-colors" title="Delete">
            <Trash2 className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white border border-border p-5 rounded-2xl">
          <div className="text-sm font-medium text-text-muted mb-1">Total Clicks</div>
          <div className="text-2xl font-display font-bold text-navy-900">{formatNumber(affiliate.totalClicks)}</div>
        </div>
        <div className="bg-white border border-border p-5 rounded-2xl">
          <div className="text-sm font-medium text-text-muted mb-1">Conversions</div>
          <div className="text-2xl font-display font-bold text-navy-900">{formatNumber(affiliate.totalConversions || 0)}</div>
        </div>
        <div className="bg-white border border-border p-5 rounded-2xl">
          <div className="text-sm font-medium text-text-muted mb-1">Revenue</div>
          <div className="text-2xl font-display font-bold text-navy-900">{formatCurrency(affiliate.totalRevenue)}</div>
        </div>
        <div className="bg-white border border-border p-5 rounded-2xl">
          <div className="text-sm font-medium text-text-muted mb-1">Balance Due</div>
          <div className="text-2xl font-display font-bold text-navy-900">{formatCurrency(affiliate.balanceDue)}</div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white border border-border rounded-2xl p-6 overflow-hidden flex flex-col">
          <h3 className="text-lg font-bold text-navy-900 mb-4">Top Performing Coupons</h3>
          <div className="flex-1 overflow-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-border text-xs text-text-muted">
                  <th className="pb-2 font-medium">Coupon</th>
                  <th className="pb-2 font-medium text-right">Uses</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {affiliate.coupons?.length === 0 ? (
                  <tr><td colSpan={2} className="py-4 text-text-muted">No coupons yet</td></tr>
                ) : (
                  affiliate.coupons?.map((coupon: any) => (
                    <tr key={coupon.id} className="border-b border-border last:border-0">
                      <td className="py-3 font-mono font-medium text-primary-600">{coupon.code || coupon.title}</td>
                      <td className="py-3 text-right">{formatNumber(coupon.usageCount)}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-white border border-border rounded-2xl p-6 overflow-hidden flex flex-col">
          <h3 className="text-lg font-bold text-navy-900 mb-4">Linked Stores</h3>
          <div className="flex-1 overflow-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-border text-xs text-text-muted">
                  <th className="pb-2 font-medium">Store</th>
                  <th className="pb-2 font-medium text-right">Deals</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {affiliate.stores?.length === 0 ? (
                  <tr><td colSpan={2} className="py-4 text-text-muted">No stores yet</td></tr>
                ) : (
                  affiliate.stores?.map((store: any) => (
                    <tr key={store.id} className="border-b border-border last:border-0">
                      <td className="py-3 font-medium text-navy-900">{store.name}</td>
                      <td className="py-3 text-right">{store.slug}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
