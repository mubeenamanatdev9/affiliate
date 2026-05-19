"use client";

import { useState } from "react";
import { Copy, Check, Heart, Clock, ExternalLink } from "lucide-react";
import Link from "next/link";

interface CouponCardProps {
  id?: string;
  storeName: string;
  title: string;
  code?: string;
  expiry?: string;
  verified?: boolean;
  usesToday?: number;
  dealUrl?: string;
  isFavorite?: boolean;
  onFavoriteToggle?: (id: string, favorite: boolean) => void;
}

export default function CouponCard({
  id,
  storeName,
  title,
  code,
  expiry,
  verified = true,
  usesToday = 0,
  dealUrl = "#",
  isFavorite = false,
  onFavoriteToggle,
}: CouponCardProps) {
  const [copied, setCopied] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleCopy = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!code) return;
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!id || !onFavoriteToggle) return;

    if (!isFavorite) {
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 400);
    }

    onFavoriteToggle(id, isFavorite);
  };

  return (
    <div className="bg-white border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow group flex flex-col h-full relative">
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center font-bold text-gray-400">
            {storeName.charAt(0)}
          </div>
          <div>
            <h3 className="font-semibold text-text-primary leading-tight">{storeName}</h3>
            {verified && (
              <span className="text-xs text-success-600 flex items-center gap-1 font-medium mt-0.5">
                <Check className="w-3 h-3" /> Verified
              </span>
            )}
          </div>
        </div>
        {id && onFavoriteToggle && (
          <button
            onClick={handleFavoriteClick}
            className={`transition-colors focus:outline-none ${
              isFavorite ? "text-red-500" : "text-gray-300 hover:text-red-400"
            }`}
            aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
          >
            <Heart
              className={`w-5 h-5 transition-transform ${
                isFavorite ? "fill-current" : ""
              } ${isAnimating ? "heart-pop-animation" : ""}`}
            />
          </button>
        )}
      </div>

      <div className="flex-1">
        <h4 className="text-lg font-bold text-primary-600 mb-2 line-clamp-2">
          {title}
        </h4>
        <div className="text-sm text-text-muted mb-4 flex items-center gap-2">
          {usesToday > 0 && <span>🔥 {usesToday} used today</span>}
        </div>
      </div>

      {code ? (
        <div className="mt-auto">
          <div className="relative group/copy mb-4">
            <button 
              onClick={handleCopy}
              className="w-full flex items-center justify-between border-2 border-dashed border-primary-200 bg-primary-50 hover:bg-primary-100 transition-colors rounded-xl px-4 py-3"
            >
              <span className="font-mono text-primary-700 font-bold tracking-widest">{code}</span>
              <div className="flex items-center gap-1 text-primary-600 font-medium text-sm bg-white px-2 py-1 rounded shadow-sm">
                {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                {copied ? "Copied" : "Copy"}
              </div>
            </button>
          </div>
          
          <div className="flex items-center justify-between mt-4 text-sm">
            <Link href={dealUrl} className="text-text-secondary hover:text-primary-600 font-medium flex items-center gap-1">
              Get Deal <ExternalLink className="w-4 h-4" />
            </Link>
            {expiry && (
              <span className="text-text-muted flex items-center gap-1">
                <Clock className="w-4 h-4" /> {expiry}
              </span>
            )}
          </div>
        </div>
      ) : (
        <div className="mt-auto pt-4 border-t border-border flex items-center justify-between">
          <Link href={dealUrl} className="inline-flex items-center justify-center px-6 py-2.5 rounded-xl text-white bg-primary-500 hover:bg-primary-600 font-medium transition-colors w-full">
            Get Deal
          </Link>
        </div>
      )}
      <style jsx>{`
        @keyframes heart-pop {
          0% {
            transform: scale(1);
          }
          30% {
            transform: scale(1.4);
          }
          60% {
            transform: scale(0.95);
          }
          100% {
            transform: scale(1);
          }
        }
        .heart-pop-animation {
          animation: heart-pop 0.4s ease-out;
        }
      `}</style>
    </div>
  );
}
