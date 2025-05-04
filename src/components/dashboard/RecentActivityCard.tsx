
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface ActivityItem {
  avatar: {
    src?: string;
    fallback: string;
  };
  title: string;
  description: string;
  timestamp: string;
  type?: "default" | "success" | "warning" | "danger";
  user?: string;
}

interface RecentActivityCardProps {
  title: string;
  activities: ActivityItem[];
}

export function RecentActivityCard({ title, activities }: RecentActivityCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="px-2">
        <div className="space-y-6 relative before:absolute before:left-4 before:top-0 before:h-full before:w-[1px] before:bg-border">
          {activities.map((activity, index) => (
            <div key={index} className="flex gap-3 pl-9 relative">
              <div className="absolute left-[0.5px] top-1 h-7 w-7 rounded-full flex items-center justify-center">
                <div
                  className={cn(
                    "h-3 w-3 rounded-full",
                    activity.type === "success" && "bg-green-500",
                    activity.type === "warning" && "bg-amber-500",
                    activity.type === "danger" && "bg-red-500",
                    !activity.type && "bg-primary"
                  )}
                />
              </div>
              <Avatar className="h-8 w-8">
                <AvatarImage src={activity.avatar.src} />
                <AvatarFallback>{activity.avatar.fallback}</AvatarFallback>
              </Avatar>
              <div className="space-y-1 flex-1">
                <p className="text-sm font-medium">{activity.title}</p>
                <p className="text-sm text-muted-foreground">{activity.description}</p>
                <p className="text-xs text-muted-foreground">{activity.timestamp}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
