import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "new" | "sale" | "instock" | "outofstock" | "default";
  className?: string;
}

export default function Badge({
  children,
  variant = "default",
  className,
}: BadgeProps) {
  const variants = {
    new: "bg-white text-[#0f0f0f]",
    sale: "bg-red-600 text-white",
    instock: "bg-emerald-600/20 text-emerald-400 border border-emerald-600/30",
    outofstock: "bg-red-600/20 text-red-400 border border-red-600/30",
    default: "bg-[#2a2a2a] text-[#c0c0c0] border border-[#4a4a4a]",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded text-xs font-semibold tracking-wider uppercase",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
