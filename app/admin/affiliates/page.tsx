"use client";

import { useEffect, useState } from "react";
import AffiliateTable from "@/components/admin/affiliates/AffiliateTable";
import AffiliateForm from "@/components/admin/affiliates/AffiliateForm";
import { Search, Plus, Download } from "lucide-react";
import toast from "react-hot-toast";

export default function AffiliatesPage() {
  const [affiliates, setAffiliates] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingAffiliate, setEditingAffiliate] = useState<any>(null);
  const [search, setSearch] = useState("");

  const fetchAffiliates = () => {
    setLoading(true);
    fetch("/api/admin/affiliates")
      .then((res) => res.json())
      .then((data) => {
        setAffiliates(data.affiliates || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  };

  useEffect(() => {
    fetchAffiliates();
  }, []);

  const handleOpenForm = (affiliate?: any) => {
    setEditingAffiliate(affiliate || null);
    setIsFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
    setEditingAffiliate(null);
  };

  const handleSubmit = async (data: any) => {
    const url = editingAffiliate ? `/api/admin/affiliates/${editingAffiliate.id}` : "/api/admin/affiliates";
    const method = editingAffiliate ? "PUT" : "POST";

    const res = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      toast.success(editingAffiliate ? "Affiliate updated" : "Affiliate created");
      handleCloseForm();
      fetchAffiliates();
    } else {
      toast.error("Something went wrong");
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this affiliate?")) return;
    const res = await fetch(`/api/admin/affiliates/${id}`, { method: "DELETE" });
    if (res.ok) {
      toast.success("Affiliate deleted");
      fetchAffiliates();
    } else {
      toast.error("Failed to delete");
    }
  };

  const filtered = affiliates.filter((a) =>
    a.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h1 className="text-2xl font-bold text-navy-900">Affiliate Partners</h1>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 border border-border rounded-xl font-medium text-text-primary hover:bg-gray-50 flex items-center gap-2 transition-colors">
            <Download className="w-4 h-4" /> Export CSV
          </button>
          <button
            onClick={() => handleOpenForm()}
            className="px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white rounded-xl font-medium shadow-sm flex items-center gap-2 transition-colors"
          >
            <Plus className="w-4 h-4" /> Add Affiliate
          </button>
        </div>
      </div>

      <div className="bg-white p-4 rounded-2xl border border-border flex flex-col sm:flex-row items-center gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-text-muted" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search affiliates by name, network..."
            className="w-full bg-deal-bg border border-border rounded-xl py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
          />
        </div>
      </div>

      {loading ? (
        <div className="bg-white border border-border rounded-2xl p-12 text-center text-text-muted">Loading affiliates...</div>
      ) : (
        <AffiliateTable
          affiliates={filtered}
          onEdit={handleOpenForm}
          onDelete={handleDelete}
        />
      )}

      {isFormOpen && (
        <AffiliateForm
          onClose={handleCloseForm}
          onSubmit={handleSubmit}
          affiliate={editingAffiliate}
        />
      )}
    </div>
  );
}
