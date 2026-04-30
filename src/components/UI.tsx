import React from "react";
import { motion, HTMLMotionProps } from "motion/react";
import { cn } from "@/src/lib/utils";
import { LucideIcon } from "lucide-react";

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  icon?: LucideIcon;
  iconPosition?: "left" | "right";
}

export function Button({
  className,
  variant = "primary",
  size = "md",
  icon: Icon,
  iconPosition = "right",
  children,
  ...props
}: ButtonProps) {
  const variants = {
    primary: "bg-primary text-white primary-shadow hover:bg-primary-container",
    secondary: "bg-surface-container-highest text-on-surface hover:bg-surface-variant",
    outline: "bg-transparent border-2 border-surface-container-highest text-on-surface hover:border-primary hover:text-primary",
    ghost: "bg-transparent text-slate-600 hover:text-rose-500",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={cn(
        "rounded-full font-bold tracking-tight transition-all duration-200 flex items-center justify-center gap-2",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {Icon && iconPosition === "left" && <Icon className="w-5 h-5" />}
      {children}
      {Icon && iconPosition === "right" && <Icon className="w-5 h-5" />}
    </motion.button>
  );
}

export function Badge({ className, children, variant = "default" }: { 
  className?: string; 
  children: React.ReactNode;
  variant?: "default" | "primary" | "secondary";
}) {
  const variants = {
    default: "bg-surface-container-high text-on-surface-variant",
    primary: "bg-primary-container/20 text-primary border border-primary/30",
    secondary: "bg-yellow-100 text-yellow-800",
  };

  return (
    <span className={cn(
      "inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide",
      variants[variant],
      className
    )}>
      {children}
    </span>
  );
}
