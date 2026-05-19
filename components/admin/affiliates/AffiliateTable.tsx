"use client";

import { useState } from "react";
import StatusBadge, { StatusType } from "@/components/admin/shared/StatusBadge";
import { Edit, Trash2, PauseCircle, PlayCircle } from "lucide-react";

interface AffiliateTableProps {
  affiliates: any[];
  onEdit: (affiliate: any) => void;
  onDelete: (id: string) => void;
}

export default function AffiliateTable({ affiliates, onEdit, onDelete }: AffiliateTableProps) {
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());

  const toggleSelectAll = () => {
    if (selectedIds.size === affiliates.length) {
      setSelectedIds(new Set());
    } else {
      setSelectedIds(new Set(affiliates.map((a) => a.id)));
    }
  };

  const toggleSelect = (id: string) => {
    const newSelected = new Set(selectedIds);
    if (newSelected.has(id)) {
      newSelected.delete(id);
    } else {
      newSelected.add(id);
    }
    setSelectedIds(newSelected);
  };

  const formatCurrency = (val: number) => new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(val);
  const formatNumber = (val: number) => new Intl.NumberFormat("en-US").format(val);

  return (
    <div className="bg-white border border-border rounded-2xl shadow-sm overflow-hidden">
      {selectedIds.size > 0 && (
        <div className="bg-primary-50 border-b border-primary-100 px-6 py-3 flex items-center justify-between animate-in slide-in-from-top-2">
          <span className="text-sm font-medium text-primary-700">{selectedIds.size} selected</span>
          <div className="flex gap-2">
            <button className="text-xs px-3 py-1.5 bg-white border border-border rounded-lg shadow-sm hover:bg-gray-50 text-text-primary transition-colors">Activate</button>
            <button className="text-xs px-3 py-1.5 bg-white border border-border rounded-lg shadow-sm hover:bg-gray-50 text-text-primary transition-colors">Pause</button>
            <button className="text-xs px-3 py-1.5 bg-red-50 border border-red-200 text-red-600 rounded-lg hover:bg-red-100 transition-colors">Delete</button>
          </div>
        </div>
      )}

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-border text-sm text-text-muted bg-gray-50/50">
              <th className="px-6 py-4 font-medium w-12">
                <input
                  type="checkbox"
                  checked={selectedIds.size === affiliates.length && affiliates.length > 0}
                  onChange={toggleSelectAll}
                  className="rounded border-gray-300 text-primary-600 focus:ring-primary-500 cursor-pointer"
                />
              </th>
              <th className="px-6 py-4 font-medium">Name</th>
              <th className="px-6 py-4 font-medium">Network</th>
              <th className="px-6 py-4 font-medium">Comm.</th>
              <th className="px-6 py-4 font-medium text-right">Clicks</th>
              <th className="px-6 py-4 font-medium text-right">Revenue</th>
              <th className="px-6 py-4 font-medium text-right">Balance</th>
              <th className="px-6 py-4 font-medium text-center">Status</th>
              <th className="px-6 py-4 font-medium text-right"></th>
            </tr>
          </thead>
          <tbody className="text-sm divide-y divide-border">
            {affiliates.length === 0 ? (
              <tr>
                <td colSpan={9} className="px-6 py-8 text-center text-text-muted">No affiliates found</td>
              </tr>
            ) : (
              affiliates.map((affiliate) => (
                <tr key={affiliate.id} className={`hover:bg-gray-50 transition-colors ${selectedIds.has(affiliate.id) ? "bg-primary-50/30" : ""}`}>
                  <td className="px-6 py-4">
                    <input
                      type="checkbox"
                      checked={selectedIds.has(affiliate.id)}
                      onChange={() => toggleSelect(affiliate.id)}
                      className="rounded border-gray-300 text-primary-600 focus:ring-primary-500 cursor-pointer"
                    />
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center font-bold text-gray-500 text-xs">
                        {affiliate.name.charAt(0)}
                      </div>
                      <span className="font-medium text-navy-900">{affiliate.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-text-secondary">{affiliate.network}</td>
                  <td className="px-6 py-4 text-text-secondary">{affiliate.commissionRate}% {affiliate.commissionType}</td>
                  <td className="px-6 py-4 text-right tabular-nums">{formatNumber(affiliate.totalClicks)}</td>
                  <td className="px-6 py-4 text-right tabular-nums">{formatCurrency(affiliate.totalRevenue)}</td>
                  <td className="px-6 py-4 text-right tabular-nums">{formatCurrency(affiliate.balanceDue)}</td>
                  <td className="px-6 py-4 text-center">
                    <StatusBadge status={affiliate.status} />
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button onClick={() => onEdit(affiliate)} className="p-1.5 text-text-muted hover:text-primary-600 rounded-md hover:bg-primary-50 transition-colors" title="Edit">
                        <Edit className="w-4 h-4" />
                      </button>
                      {affiliate.status === "ACTIVE" ? (
                        <button className="p-1.5 text-text-muted hover:text-yellow-600 rounded-md hover:bg-yellow-50 transition-colors" title="Pause">
                          <PauseCircle className="w-4 h-4" />
                        </button>
                      ) : (
                        <button className="p-1.5 text-text-muted hover:text-success-600 rounded-md hover:bg-success-50 transition-colors" title="Activate">
                          <PlayCircle className="w-4 h-4" />
                        </button>
                      )}
                      <button onClick={() => onDelete(affiliate.id)} className="p-1.5 text-text-muted hover:text-red-600 rounded-md hover:bg-red-50 transition-colors" title="Delete">
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

      <div className="px-6 py-4 border-t border-border flex items-center justify-between text-sm text-text-muted bg-gray-50/50">
        <div>Showing {affiliates.length} entries</div>
        <div className="flex gap-1">
          <button disabled className="px-3 py-1 rounded border border-border disabled:opacity-50">Previous</button>
          <button className="px-3 py-1 rounded border border-primary-500 bg-primary-500 text-white font-medium">1</button>
          <button disabled className="px-3 py-1 rounded border border-border disabled:opacity-50">Next</button>
        </div>
      </div>
    </div>
  );
}
