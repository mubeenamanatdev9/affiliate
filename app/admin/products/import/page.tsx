"use client";

import { UploadCloud, FileType, CheckCircle, AlertCircle, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function AdminProductImportPage() {
  const [isDragging, setIsDragging] = useState(false);
  const [file, setFile] = useState<File | null>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      setFile(e.dataTransfer.files[0]);
    }
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div className="flex items-center gap-4 mb-8">
        <Link href="/admin/products" className="p-2 border border-border rounded-xl text-text-muted hover:text-primary-600 hover:bg-gray-50 transition-colors">
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-navy-900">Bulk Import Products</h1>
          <p className="text-sm text-text-secondary mt-1">Upload a CSV file to import multiple products at once.</p>
        </div>
      </div>

      <div className="bg-white border border-border rounded-2xl p-8 shadow-sm">
        <div 
          className={`border-2 border-dashed rounded-2xl p-12 text-center transition-all ${isDragging ? 'border-primary-500 bg-primary-50' : 'border-border hover:border-primary-300 hover:bg-gray-50'}`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          {file ? (
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-success-100 text-success-600 rounded-full flex items-center justify-center mb-4">
                <FileType className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-navy-900 mb-1">{file.name}</h3>
              <p className="text-text-secondary mb-6">{(file.size / 1024).toFixed(2)} KB</p>
              <div className="flex gap-4">
                <button onClick={() => setFile(null)} className="px-6 py-2 border border-border rounded-xl font-medium text-text-primary hover:bg-gray-100 transition-colors">
                  Remove
                </button>
                <button className="px-6 py-2 bg-primary-500 hover:bg-primary-600 text-white rounded-xl font-medium shadow-sm transition-colors">
                  Start Import
                </button>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center pointer-events-none">
              <div className="w-16 h-16 bg-primary-50 text-primary-500 rounded-full flex items-center justify-center mb-4">
                <UploadCloud className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-navy-900 mb-2">Drag & Drop your CSV file here</h3>
              <p className="text-text-secondary mb-6">or click to browse your files</p>
              <button className="px-6 py-2 border border-border rounded-xl font-medium text-text-primary bg-white pointer-events-auto shadow-sm hover:border-primary-300 transition-colors">
                Browse Files
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <div className="bg-white border border-border rounded-2xl p-6 shadow-sm">
          <h3 className="font-bold text-navy-900 mb-4 flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-success-500" /> CSV Format Requirements
          </h3>
          <ul className="text-sm text-text-secondary space-y-2 list-disc list-inside">
            <li>File must be in .csv format</li>
            <li>First row must contain exact column headers</li>
            <li>Required columns: <code className="bg-gray-100 px-1 rounded text-primary-600">name</code>, <code className="bg-gray-100 px-1 rounded text-primary-600">store_slug</code></li>
            <li>Max file size: 5MB</li>
            <li>Max rows per import: 1,000</li>
          </ul>
          <button className="mt-4 text-sm text-primary-600 font-medium hover:underline">
            Download Sample CSV Template
          </button>
        </div>
        
        <div className="bg-white border border-border rounded-2xl p-6 shadow-sm">
          <h3 className="font-bold text-navy-900 mb-4 flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-yellow-500" /> Troubleshooting
          </h3>
          <p className="text-sm text-text-secondary mb-4">
            If you encounter errors during import:
          </p>
          <ul className="text-sm text-text-secondary space-y-2 list-disc list-inside">
            <li>Ensure store slugs match existing stores exactly</li>
            <li>Check for empty required fields</li>
            <li>Verify price format (use numbers only, no currency symbols)</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
