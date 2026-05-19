"use client";

import { useState } from "react";
import { Settings, Save } from "lucide-react";
import toast from "react-hot-toast";

export default function AdminSettingsPage() {
  const [siteName, setSiteName] = useState("DealFinder");
  const [siteDescription, setSiteDescription] = useState("Find the best deals and coupons.");
  const [contactEmail, setContactEmail] = useState("support@dealfinder.com");
  const [metaTitle, setMetaTitle] = useState("DealFinder - Best Coupons & Deals");
  const [metaDescription, setMetaDescription] = useState("Discover 10,000+ verified coupons and daily deals.");

  const handleSave = () => {
    toast.success("Settings saved successfully!");
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h1 className="text-2xl font-bold text-navy-900 flex items-center gap-2">
          <Settings className="w-6 h-6 text-primary-500" /> Settings
        </h1>
        <button
          onClick={handleSave}
          className="px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white rounded-xl font-medium shadow-sm flex items-center gap-2 transition-colors"
        >
          <Save className="w-4 h-4" /> Save Changes
        </button>
      </div>

      <div className="bg-white border border-border rounded-2xl shadow-sm p-6 space-y-6 max-w-3xl">
        <div>
          <h2 className="text-lg font-bold text-navy-900 mb-4">General Settings</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-text-secondary mb-1">Site Name</label>
              <input value={siteName} onChange={(e) => setSiteName(e.target.value)} className="w-full px-4 py-2 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-text-secondary mb-1">Site Description</label>
              <textarea value={siteDescription} onChange={(e) => setSiteDescription(e.target.value)} className="w-full px-4 py-2 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500" rows={3} />
            </div>
            <div>
              <label className="block text-sm font-medium text-text-secondary mb-1">Contact Email</label>
              <input type="email" value={contactEmail} onChange={(e) => setContactEmail(e.target.value)} className="w-full px-4 py-2 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500" />
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-6">
          <h2 className="text-lg font-bold text-navy-900 mb-4">SEO Settings</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-text-secondary mb-1">Meta Title</label>
              <input value={metaTitle} onChange={(e) => setMetaTitle(e.target.value)} className="w-full px-4 py-2 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-text-secondary mb-1">Meta Description</label>
              <textarea value={metaDescription} onChange={(e) => setMetaDescription(e.target.value)} className="w-full px-4 py-2 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500" rows={3} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
