"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "ref"> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
  href?: never;
}

export default function Button({
  variant = "primary",
  size = "md",
  children,
  className,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center font-semibold tracking-wide transition-all duration-200 cursor-pointer select-none disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary: "bg-white text-[#0f0f0f] hover:bg-[#e0e0e0] border border-white",
    secondary:
      "bg-[#1f1f1f] text-white hover:bg-[#2a2a2a] border border-[#4a4a4a]",
    outline:
      "bg-transparent text-[#c0c0c0] border border-[#c0c0c0] hover:bg-[#c0c0c0] hover:text-[#0f0f0f]",
    ghost: "bg-transparent text-white hover:bg-white/10 border border-transparent",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm rounded",
    md: "px-6 py-3 text-sm rounded",
    lg: "px-8 py-4 text-base rounded",
  };

  return (
    <motion.button
      whileTap={{ scale: 0.97 }}
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </motion.button>
  );
}
