import { Review } from "@/types";
import StarRating from "@/components/ui/StarRating";

const staticReviews: Review[] = [
  {
    id: "1",
    author: "Mike D.",
    company: "Independent Detailer",
    rating: 5,
    text: "Absolutely brilliant product. Works exactly as described and the results speak for themselves. Will be ordering more.",
    date: "March 2024",
    avatar: "M",
  },
  {
    id: "2",
    author: "James R.",
    company: "Auto Detailing Pro",
    rating: 5,
    text: "Great quality and fast shipping. This is now a staple in my detailing kit. Highly recommended.",
    date: "February 2024",
    avatar: "J",
  },
  {
    id: "3",
    author: "Sarah K.",
    company: "Detailing Enthusiast",
    rating: 4,
    text: "Really impressed with the quality. Does exactly what it says and the value for money is excellent.",
    date: "January 2024",
    avatar: "S",
  },
];

interface ProductReviewsProps {
  productId: string;
  rating: number;
  reviewCount: number;
}

export default function ProductReviews({
  productId,
  rating,
  reviewCount,
}: ProductReviewsProps) {
  return (
    <div className="pt-10 border-t border-[#1f1f1f]">
      <div className="flex items-center justify-between mb-8">
        <h2
          className="text-3xl font-black text-white heading-font"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          CUSTOMER REVIEWS
        </h2>
        <div className="text-right">
          <div className="flex items-center justify-end gap-2 mb-1">
            <span className="text-white text-2xl font-bold">
              {rating.toFixed(1)}
            </span>
            <span className="text-[#4a4a4a] text-sm">/ 5</span>
          </div>
          <StarRating rating={rating} reviewCount={reviewCount} size="sm" />
        </div>
      </div>

      <div className="flex flex-col gap-5">
        {staticReviews.map((review) => (
          <div
            key={review.id}
            className="p-5 rounded-lg bg-[#1f1f1f] border border-[#2a2a2a]"
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[#2a2a2a] border border-[#3a3a3a] flex items-center justify-center shrink-0">
                <span className="text-[#c0c0c0] text-sm font-bold">
                  {review.avatar}
                </span>
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <div>
                    <span className="text-white font-semibold text-sm">
                      {review.author}
                    </span>
                    <span className="text-[#4a4a4a] text-xs ml-2">
                      — {review.company}
                    </span>
                  </div>
                  <span className="text-[#4a4a4a] text-xs">{review.date}</span>
                </div>
                <StarRating
                  rating={review.rating}
                  size="sm"
                  showCount={false}
                  className="mb-2"
                />
                <p className="text-[#c0c0c0] text-sm leading-relaxed">
                  {review.text}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
