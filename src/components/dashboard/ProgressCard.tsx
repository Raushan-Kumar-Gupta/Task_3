
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface ProgressItem {
  label: string;
  value: number;
  color?: string;
}

interface ProgressCardProps {
  title: string;
  items: ProgressItem[];
}

export function ProgressCard({ title, items }: ProgressCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {items.map((item, index) => (
          <div key={index} className="space-y-1">
            <div className="flex justify-between text-sm">
              <span>{item.label}</span>
              <span className="font-medium">{item.value}%</span>
            </div>
            <Progress 
              value={item.value} 
              className={item.color ? `[--progress:${item.color}]` : ""} 
            />
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
