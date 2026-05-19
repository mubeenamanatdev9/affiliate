"use client";

import { useState, useEffect, useCallback } from "react";
import { useSession } from "next-auth/react";
import toast from "react-hot-toast";

export function useFavorites() {
  const { data: session } = useSession();
  const [favoriteIds, setFavoriteIds] = useState<Set<string>>(new Set());
  const [isLoading, setIsLoading] = useState(false);

  // Fetch favorites on mount when user is logged in
  useEffect(() => {
    if (!session?.user?.id) {
      setFavoriteIds(new Set());
      return;
    }

    const fetchFavorites = async () => {
      try {
        const res = await fetch("/api/favorites");
        if (res.ok) {
          const data = await res.json();
          setFavoriteIds(new Set(data.favorites || []));
        }
      } catch (error) {
        console.error("Failed to fetch favorites:", error);
      }
    };

    fetchFavorites();
  }, [session?.user?.id]);

  const toggleFavorite = useCallback(
    async (couponId: string, currentState: boolean) => {
      if (!session?.user?.id) {
        toast.error("Please sign in to save favorites");
        return;
      }

      // Optimistic update
      setFavoriteIds((prev) => {
        const next = new Set(prev);
        if (currentState) {
          next.delete(couponId);
        } else {
          next.add(couponId);
        }
        return next;
      });

      try {
        if (currentState) {
          // Remove favorite
          const res = await fetch("/api/favorites", {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ couponId }),
          });

          if (!res.ok) {
            throw new Error("Failed to remove favorite");
          }
        } else {
          // Add favorite
          const res = await fetch("/api/favorites", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ couponId }),
          });

          if (!res.ok && res.status !== 200) {
            throw new Error("Failed to add favorite");
          }
        }
      } catch (error) {
        // Revert optimistic update on error
        setFavoriteIds((prev) => {
          const next = new Set(prev);
          if (currentState) {
            next.add(couponId);
          } else {
            next.delete(couponId);
          }
          return next;
        });
        toast.error("Something went wrong. Please try again.");
      }
    },
    [session?.user?.id]
  );

  const isFavorite = useCallback(
    (couponId?: string) => {
      if (!couponId) return false;
      return favoriteIds.has(couponId);
    },
    [favoriteIds]
  );

  return { favoriteIds, isFavorite, toggleFavorite, isLoading };
}
