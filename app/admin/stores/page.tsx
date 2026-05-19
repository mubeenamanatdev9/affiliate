"use client";

import { useEffect, useState } from "react";
import { Search, Plus, Edit, Trash2, ExternalLink } from "lucide-react";
import Link from "next/link";
import toast from "react-hot-toast";

export default function AdminStoresPage() {
  const [stores, setStores] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing] = useState<any>(null);
  const [formData, setFormData] = useState({ name: "", slug: "", website: "", description: "", affiliateId: "", isFeatured: false });

  const fetchStores = () => {
    setLoading(true);
    fetch("/api/admin/stores")
      .then((res) => res.json())
      .then((data) => {
        setStores(data.stores || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  };

  useEffect(() => {
    fetchStores();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const url = editing ? `/api/admin/stores/${editing.id}` : "/api/admin/stores";
    const method = editing ? "PUT" : "POST";

    const res = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      toast.success(editing ? "Store updated" : "Store created");
      setShowForm(false);
      setEditing(null);
      setFormData({ name: "", slug: "", website: "", description: "", affiliateId: "", isFeatured: false });
      fetchStores();
    } else {
      toast.error("Something went wrong");
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this store?")) return;
    const res = await fetch(`/api/admin/stores/${id}`, { method: "DELETE" });
    if (res.ok) {
      toast.success("Store deleted");
      fetchStores();
    } else {
      toast.error("Failed to delete");
    }
  };

  const openEdit = (store: any) => {
    setEditing(store);
    setFormData({
      name: store.name,
      slug: store.slug,
      website: store.website || "",
      description: store.description || "",
      affiliateId: store.affiliateId || "",
      isFeatured: store.isFeatured || false,
    });
    setShowForm(true);
  };

  const filtered = stores.filter((s) =>
    s.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h1 className="text-2xl font-bold text-navy-900">Stores</h1>
        <button
          onClick={() => { setEditing(null); setFormData({ name: "", slug: "", website: "", description: "", affiliateId: "", isFeatured: false }); setShowForm(true); }}
          className="px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white rounded-xl font-medium shadow-sm flex items-center gap-2 transition-colors"
        >
          <Plus className="w-4 h-4" /> Add Store
        </button>
      </div>

      <div className="bg-white p-4 rounded-2xl border border-border flex flex-col sm:flex-row items-center gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-text-muted" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search stores..."
            className="w-full bg-deal-bg border border-border rounded-xl py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
          />
        </div>
      </div>

      <div className="bg-white border border-border rounded-2xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-border text-sm text-text-muted bg-gray-50/50">
                <th className="px-6 py-4 font-medium">Name</th>
                <th className="px-6 py-4 font-medium">Affiliate Partner</th>
                <th className="px-6 py-4 font-medium text-center">Featured</th>
                <th className="px-6 py-4 font-medium text-right">Active Deals</th>
                <th className="px-6 py-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="text-sm divide-y divide-border">
              {loading ? (
                <tr><td colSpan={5} className="px-6 py-8 text-center text-text-muted">Loading...</td></tr>
              ) : filtered.length === 0 ? (
                <tr><td colSpan={5} className="px-6 py-8 text-center text-text-muted">No stores found</td></tr>
              ) : (
                filtered.map((store) => (
                  <tr key={store.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center font-bold text-gray-500 text-xs">
                          {store.name.charAt(0)}
                        </div>
                        <span className="font-medium text-navy-900">{store.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-text-secondary">{store.affiliate?.name || "-"}</td>
                    <td className="px-6 py-4 text-center">
                      {store.isFeatured ? (
                        <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-yellow-50 text-yellow-700 border border-yellow-200">Featured</span>
                      ) : (
                        <span className="text-text-muted">-</span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-right tabular-nums">{store._count?.coupons || 0}</td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <Link href={`/stores/${store.slug}`} target="_blank" className="p-1.5 text-text-muted hover:text-primary-600 rounded-md hover:bg-primary-50 transition-colors" title="View Public Page">
                          <ExternalLink className="w-4 h-4" />
                        </Link>
                        <button onClick={() => openEdit(store)} className="p-1.5 text-text-muted hover:text-primary-600 rounded-md hover:bg-primary-50 transition-colors" title="Edit">
                          <Edit className="w-4 h-4" />
                        </button>
                        <button onClick={() => handleDelete(store.id)} className="p-1.5 text-text-muted hover:text-red-600 rounded-md hover:bg-red-50 transition-colors" title="Delete">
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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-6">
            <h2 className="text-xl font-bold text-navy-900 mb-4">{editing ? "Edit Store" : "Add Store"}</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-text-secondary mb-1">Name</label>
                <input required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-4 py-2 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-text-secondary mb-1">Slug</label>
                <input required value={formData.slug} onChange={(e) => setFormData({ ...formData, slug: e.target.value })} className="w-full px-4 py-2 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-text-secondary mb-1">Website</label>
                <input type="url" value={formData.website} onChange={(e) => setFormData({ ...formData, website: e.target.value })} className="w-full px-4 py-2 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-text-secondary mb-1">Description</label>
                <textarea value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} className="w-full px-4 py-2 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500" rows={3} />
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" id="featured" checked={formData.isFeatured} onChange={(e) => setFormData({ ...formData, isFeatured: e.target.checked })} className="rounded border-gray-300 text-primary-600 focus:ring-primary-500" />
                <label htmlFor="featured" className="text-sm text-text-secondary">Featured Store</label>
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
