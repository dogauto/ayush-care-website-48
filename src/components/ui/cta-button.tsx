
import { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

interface CTAButtonProps {
  children: ReactNode;
  to: string;
  variant?: "primary" | "secondary" | "outline";
  size?: "default" | "lg";
  className?: string;
  icon?: ReactNode;
}

export function CTAButton({ 
  children, 
  to, 
  variant = "primary",
  size = "default",
  className,
  icon
}: CTAButtonProps) {
  const getButtonStyles = () => {
    switch (variant) {
      case "primary":
        return "bg-gradient-to-r from-ayush-600 to-herb-600 hover:from-ayush-700 hover:to-herb-700 text-white";
      case "secondary":
        return "bg-white text-ayush-700 border-2 border-ayush-600 hover:bg-gray-50";
      case "outline":
        return "bg-transparent text-ayush-700 border-2 border-ayush-600 hover:bg-gray-50";
      default:
        return "bg-gradient-to-r from-ayush-600 to-herb-600 hover:from-ayush-700 hover:to-herb-700 text-white";
    }
  };

  const getSizeStyles = () => {
    switch (size) {
      case "lg":
        return "text-lg py-3 px-8";
      default:
        return "py-2 px-6";
    }
  };

  return (
    <Button asChild className={cn(
      "rounded-full font-medium transition-all",
      getButtonStyles(),
      getSizeStyles(),
      className
    )}>
      <Link to={to} className="flex items-center gap-2">
        {icon && icon}
        {children}
      </Link>
    </Button>
  );
}
