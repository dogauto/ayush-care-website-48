
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeading({ 
  title, 
  subtitle, 
  centered = false, 
  className 
}: SectionHeadingProps) {
  return (
    <div className={cn(
      "mb-12",
      centered && "text-center",
      className
    )}>
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        <span className="text-gray-800">{title}</span>
      </h2>
      {subtitle && (
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className="w-20 h-1 bg-gradient-to-r from-ayush-600 to-herb-600 mt-4 rounded-full mb-2 mx-auto"></div>
    </div>
  );
}
