"use client";

import { useState } from "react";
import { X } from "lucide-react";

interface AffiliateFormProps {
  onClose: () => void;
  onSubmit: (data: any) => void;
  affiliate?: any;
}

export default function AffiliateForm({ onClose, onSubmit, affiliate }: AffiliateFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: affiliate?.name || "",
    slug: affiliate?.slug || "",
    email: affiliate?.email || "",
    website: affiliate?.website || "",
    network: affiliate?.network || "DIRECT",
    commissionType: affiliate?.commissionType || "CPS",
    commissionRate: affiliate?.commissionRate?.toString() || "",
    cookieDuration: affiliate?.cookieDuration?.toString() || "30",
    status: affiliate?.status || "ACTIVE",
    notes: affiliate?.notes || "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await onSubmit(formData);
    setIsSubmitting(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-2xl max-h-[90vh] flex flex-col overflow-hidden animate-in zoom-in-95 duration-200">
        <div className="px-6 py-4 border-b border-border flex items-center justify-between">
          <h2 className="text-xl font-bold text-navy-900">
            {affiliate ? "Edit Affiliate" : "Add New Affiliate"}
          </h2>
          <button
            onClick={onClose}
            className="p-2 text-text-muted hover:text-text-primary rounded-full hover:bg-gray-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto flex-1">
          <form id="affiliate-form" onSubmit={handleSubmit} className="space-y-8">
            <div>
              <h3 className="text-sm font-semibold text-navy-900 uppercase tracking-wider mb-4 border-b border-border pb-2">Basic Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-text-secondary">Affiliate Name *</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-2 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all" placeholder="e.g. Nike Inc." />
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-text-secondary">Slug</label>
                  <input type="text" name="slug" value={formData.slug} onChange={handleChange} className="w-full px-4 py-2 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all bg-gray-50" placeholder="e.g. nike-inc" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-text-secondary">Contact Email</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-2 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all" placeholder="affiliates@nike.com" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-text-secondary">Website URL</label>
                  <input type="url" name="website" value={formData.website} onChange={handleChange} className="w-full px-4 py-2 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all" placeholder="https://nike.com" />
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-navy-900 uppercase tracking-wider mb-4 border-b border-border pb-2">Network & Commission</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-text-secondary">Affiliate Network</label>
                  <select name="network" value={formData.network} onChange={handleChange} className="w-full px-4 py-2 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all bg-white">
                    <option value="DIRECT">Direct (No Network)</option>
                    <option value="CJ">CJ Affiliate</option>
                    <option value="IMPACT">Impact Radius</option>
                    <option value="SHAREASALE">ShareASale</option>
                    <option value="AMAZON_ASSOCIATES">Amazon Associates</option>
                  </select>
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-text-secondary">Status</label>
                  <select name="status" value={formData.status} onChange={handleChange} className="w-full px-4 py-2 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all bg-white">
                    <option value="ACTIVE">Active</option>
                    <option value="PAUSED">Paused</option>
                    <option value="PENDING">Pending</option>
                    <option value="TERMINATED">Terminated</option>
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-text-secondary">Commission Type</label>
                  <select name="commissionType" value={formData.commissionType} onChange={handleChange} className="w-full px-4 py-2 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all bg-white">
                    <option value="CPS">CPS (Sale)</option>
                    <option value="CPA">CPA (Action)</option>
                    <option value="CPC">CPC (Click)</option>
                    <option value="CPL">CPL (Lead)</option>
                    <option value="REVENUE_SHARE">Revenue Share</option>
                  </select>
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-text-secondary">Rate / Value (%)</label>
                  <input type="number" step="0.1" name="commissionRate" value={formData.commissionRate} onChange={handleChange} className="w-full px-4 py-2 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-text-secondary">Cookie (Days)</label>
                  <input type="number" name="cookieDuration" value={formData.cookieDuration} onChange={handleChange} className="w-full px-4 py-2 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all" />
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-navy-900 uppercase tracking-wider mb-4 border-b border-border pb-2">Notes</h3>
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-text-secondary">Internal Notes</label>
                <textarea name="notes" rows={3} value={formData.notes} onChange={handleChange} className="w-full px-4 py-2 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all" placeholder="Add any special terms or internal notes here..." />
              </div>
            </div>
          </form>
        </div>

        <div className="px-6 py-4 border-t border-border bg-gray-50 flex items-center justify-end gap-3">
          <button
            onClick={onClose}
            type="button"
            className="px-6 py-2 border border-border rounded-xl font-medium text-text-primary hover:bg-gray-100 transition-colors"
          >
            Cancel
          </button>
          <button
            type="submit"
            form="affiliate-form"
            disabled={isSubmitting}
            className="px-6 py-2 bg-primary-500 hover:bg-primary-600 text-white rounded-xl font-medium shadow-sm transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center min-w-[120px]"
          >
            {isSubmitting ? (
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
            ) : (
              "Save Affiliate"
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
