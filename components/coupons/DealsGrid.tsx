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

interface DealsGridProps {
  deals: Deal[];
  columns?: 1 | 2 | 3 | 4;
}

export default function DealsGrid({ deals, columns = 4 }: DealsGridProps) {
  const { isFavorite, toggleFavorite } = useFavorites();

  const gridClasses = {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 xl:grid-cols-3",
    4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
  };

  return (
    <div className={`grid ${gridClasses[columns]} gap-6`}>
      {deals.map((deal, i) => (
        <CouponCard
          key={deal.id || i}
          {...deal}
          isFavorite={isFavorite(deal.id)}
          onFavoriteToggle={toggleFavorite}
        />
      ))}
    </div>
  );
}
