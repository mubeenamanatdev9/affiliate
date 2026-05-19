"use client";

import CouponCard from "./CouponCard";
import { useFavorites } from "@/hooks/useFavorites";

interface Deal {
  id?: string;
  storeName: string;
  title: string;
  code?: string;
  expiry?: string;
  verified?: boolean;
  usesToday?: number;
  dealUrl?: string;
}

interface DealsListProps {
  deals: Deal[];
}

export default function DealsList({ deals }: DealsListProps) {
  const { isFavorite, toggleFavorite } = useFavorites();

  return (
    <div className="flex flex-col gap-4">
      {deals.map((deal, i) => (
        <div key={deal.id || i} className="h-full">
          <CouponCard
            {...deal}
            isFavorite={isFavorite(deal.id)}
            onFavoriteToggle={toggleFavorite}
          />
        </div>
      ))}
    </div>
  );
}
