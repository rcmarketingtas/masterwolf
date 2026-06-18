import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface StarRatingProps {
  rating: number;
  reviewCount?: number;
  size?: "sm" | "md" | "lg";
  showCount?: boolean;
  className?: string;
}

export default function StarRating({
  rating,
  reviewCount,
  size = "md",
  showCount = true,
  className,
}: StarRatingProps) {
  const sizes = { sm: 12, md: 14, lg: 18 };
  const px = sizes[size];

  return (
    <div className={cn("flex items-center gap-1.5", className)}>
      <div className="flex items-center gap-0.5">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            size={px}
            className={
              star <= Math.round(rating)
                ? "fill-[#c0c0c0] text-[#c0c0c0]"
                : "fill-transparent text-[#4a4a4a]"
            }
          />
        ))}
      </div>
      {showCount && reviewCount !== undefined && (
        <span className="text-[#4a4a4a] text-xs">
          ({reviewCount})
        </span>
      )}
    </div>
  );
}
