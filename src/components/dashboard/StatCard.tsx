
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  change?: {
    value: string;
    positive: boolean;
  };
  className?: string;
  trend?: string;
  trendIcon?: LucideIcon;
  trendValue?: string;
}

export function StatCard({ 
  title, 
  value, 
  icon: Icon, 
  change, 
  className, 
  trend, 
  trendIcon: TrendIcon, 
  trendValue 
}: StatCardProps) {
  return (
    <div className={cn(
      "rounded-lg border bg-card p-6 shadow-sm transition-all hover:shadow-md",
      className
    )}>
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{title}</p>
          <h3 className="text-2xl font-bold mt-1">{value}</h3>
          
          {change && (
            <div className="flex items-center mt-2">
              <span
                className={cn(
                  "text-sm font-medium",
                  change.positive ? "text-green-500" : "text-red-500"
                )}
              >
                {change.positive ? "+" : ""}{change.value}
              </span>
              <span className="text-sm text-gray-500 dark:text-gray-400 ml-1">vs last month</span>
            </div>
          )}

          {trend && (
            <div className="flex items-center mt-2">
              {TrendIcon && <TrendIcon className="h-4 w-4 mr-1" />}
              <span className="text-sm font-medium">{trend}</span>
              {trendValue && (
                <span className="text-xs text-gray-500 dark:text-gray-400 ml-1">{trendValue}</span>
              )}
            </div>
          )}
        </div>
        
        <div className="bg-primary/10 p-2 rounded-full">
          <Icon className="h-6 w-6 text-primary" />
        </div>
      </div>
    </div>
  );
}
