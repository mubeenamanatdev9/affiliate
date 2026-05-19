"use client";

import { useEffect, useState } from "react";
import { Search, Plus, Edit, Trash2, Filter } from "lucide-react";
import StatusBadge from "@/components/admin/shared/StatusBadge";
import toast from "react-hot-toast";

export default function AdminCouponsPage() {
  const [coupons, setCoupons] = useState<any[]>([]);
  const [stores, setStores] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing] = useState<any>(null);
  const [formData, setFormData] = useState({
    title: "", code: "", description: "", discountType: "PERCENTAGE", discountValue: "",
    minPurchase: "", maxDiscount: "", affiliateUrl: "", storeId: "", productId: "", categoryId: "", affiliateId: "", endDate: "",
  });

  const fetchCoupons = () => {
    setLoading(true);
    fetch("/api/admin/coupons")
      .then((res) => res.json())
      .then((data) => {
        setCoupons(data.coupons || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  };

  const fetchStores = () => {
    fetch("/api/admin/stores")
      .then((res) => res.json())
      .then((data) => setStores(data.stores || []));
  };

  useEffect(() => {
    fetchCoupons();
    fetchStores();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const url = editing ? `/api/admin/coupons/${editing.id}` : "/api/admin/coupons";
    const method = editing ? "PUT" : "POST";

    const res = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      toast.success(editing ? "Coupon updated" : "Coupon created");
      setShowForm(false);
      setEditing(null);
      setFormData({ title: "", code: "", description: "", discountType: "PERCENTAGE", discountValue: "", minPurchase: "", maxDiscount: "", affiliateUrl: "", storeId: "", productId: "", categoryId: "", affiliateId: "", endDate: "" });
      fetchCoupons();
    } else {
      toast.error("Something went wrong");
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this coupon?")) return;
    const res = await fetch(`/api/admin/coupons/${id}`, { method: "DELETE" });
    if (res.ok) {
      toast.success("Coupon deleted");
      fetchCoupons();
    } else {
      toast.error("Failed to delete");
    }
  };

  const openEdit = (coupon: any) => {
    setEditing(coupon);
    setFormData({
      title: coupon.title,
      code: coupon.code || "",
      description: coupon.description || "",
      discountType: coupon.discountType,
      discountValue: coupon.discountValue?.toString() || "",
      minPurchase: coupon.minPurchase?.toString() || "",
      maxDiscount: coupon.maxDiscount?.toString() || "",
      affiliateUrl: coupon.affiliateUrl,
      storeId: coupon.storeId,
      productId: coupon.productId || "",
      categoryId: coupon.categoryId || "",
      affiliateId: coupon.affiliateId || "",
      endDate: coupon.endDate ? new Date(coupon.endDate).toISOString().split("T")[0] : "",
    });
    setShowForm(true);
  };

  const filtered = coupons.filter((c) =>
    c.title.toLowerCase().includes(search.toLowerCase()) ||
    (c.code || "").toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h1 className="text-2xl font-bold text-navy-900">Coupons</h1>
        <button
          onClick={() => { setEditing(null); setFormData({ title: "", code: "", description: "", discountType: "PERCENTAGE", discountValue: "", minPurchase: "", maxDiscount: "", affiliateUrl: "", storeId: "", productId: "", categoryId: "", affiliateId: "", endDate: "" }); setShowForm(true); }}
          className="px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white rounded-xl font-medium shadow-sm flex items-center gap-2 transition-colors"
        >
          <Plus className="w-4 h-4" /> Add Coupon
        </button>
      </div>

      <div className="bg-white p-4 rounded-2xl border border-border flex flex-col sm:flex-row items-center gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-text-muted" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search coupons by code, title, or store..."
            className="w-full bg-deal-bg border border-border rounded-xl py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
          />
        </div>
      </div>

      <div className="bg-white border border-border rounded-2xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-border text-sm text-text-muted bg-gray-50/50">
                <th className="px-6 py-4 font-medium">Code / Title</th>
                <th className="px-6 py-4 font-medium">Store</th>
                <th className="px-6 py-4 font-medium text-right">Discount</th>
                <th className="px-6 py-4 font-medium text-right">Uses</th>
                <th className="px-6 py-4 font-medium text-center">Status</th>
                <th className="px-6 py-4 font-medium">Expires</th>
                <th className="px-6 py-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="text-sm divide-y divide-border">
              {loading ? (
                <tr><td colSpan={7} className="px-6 py-8 text-center text-text-muted">Loading...</td></tr>
              ) : filtered.length === 0 ? (
                <tr><td colSpan={7} className="px-6 py-8 text-center text-text-muted">No coupons found</td></tr>
              ) : (
                filtered.map((coupon) => (
                  <tr key={coupon.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="font-mono text-primary-600 font-bold mb-0.5">{coupon.code || "-"}</div>
                      <div className="text-navy-900 font-medium line-clamp-1 max-w-xs">{coupon.title}</div>
                    </td>
                    <td className="px-6 py-4 text-text-secondary">{coupon.store?.name}</td>
                    <td className="px-6 py-4 text-right">
                      <span className="inline-flex px-2 py-1 bg-gray-100 rounded text-xs font-medium">{coupon.discountType}</span>
                      <div className="mt-1 font-medium">{coupon.discountValue ? `${coupon.discountValue}%` : "-"}</div>
                    </td>
                    <td className="px-6 py-4 text-right tabular-nums">{coupon.usageCount}</td>
                    <td className="px-6 py-4 text-center">
                      <StatusBadge status={coupon.isActive ? "ACTIVE" : "PAUSED"} />
                    </td>
                    <td className="px-6 py-4 text-text-secondary whitespace-nowrap">{coupon.endDate ? new Date(coupon.endDate).toLocaleDateString() : "Never"}</td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button onClick={() => openEdit(coupon)} className="p-1.5 text-text-muted hover:text-primary-600 rounded-md hover:bg-primary-50 transition-colors" title="Edit">
                          <Edit className="w-4 h-4" />
                        </button>
                        <button onClick={() => handleDelete(coupon.id)} className="p-1.5 text-text-muted hover:text-red-600 rounded-md hover:bg-red-50 transition-colors" title="Delete">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm overflow-y-auto">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg p-6 my-8">
            <h2 className="text-xl font-bold text-navy-900 mb-4">{editing ? "Edit Coupon" : "Add Coupon"}</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-text-secondary mb-1">Title *</label>
                <input required value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} className="w-full px-4 py-2 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-text-secondary mb-1">Code</label>
                  <input value={formData.code} onChange={(e) => setFormData({ ...formData, code: e.target.value })} className="w-full px-4 py-2 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-secondary mb-1">Store *</label>
                  <select required value={formData.storeId} onChange={(e) => setFormData({ ...formData, storeId: e.target.value })} className="w-full px-4 py-2 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500">
                    <option value="">Select store</option>
                    {stores.map((s) => <option key={s.id} value={s.id}>{s.name}</option>)}
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-text-secondary mb-1">Affiliate URL *</label>
                <input required type="url" value={formData.affiliateUrl} onChange={(e) => setFormData({ ...formData, affiliateUrl: e.target.value })} className="w-full px-4 py-2 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500" />
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-text-secondary mb-1">Type</label>
                  <select value={formData.discountType} onChange={(e) => setFormData({ ...formData, discountType: e.target.value })} className="w-full px-4 py-2 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500">
                    <option value="PERCENTAGE">%</option>
                    <option value="FIXED">$</option>
                    <option value="FREE_SHIPPING">Free Ship</option>
                    <option value="BOGO">BOGO</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-secondary mb-1">Value</label>
                  <input type="number" step="0.01" value={formData.discountValue} onChange={(e) => setFormData({ ...formData, discountValue: e.target.value })} className="w-full px-4 py-2 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-secondary mb-1">End Date</label>
                  <input type="date" value={formData.endDate} onChange={(e) => setFormData({ ...formData, endDate: e.target.value })} className="w-full px-4 py-2 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500" />
                </div>
              </div>
              <div className="flex justify-end gap-3 mt-6">
                <button type="button" onClick={() => setShowForm(false)} className="px-4 py-2 border border-border rounded-xl text-text-primary hover:bg-gray-50">Cancel</button>
                <button type="submit" className="px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white rounded-xl font-medium">{editing ? "Update" : "Create"}</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
