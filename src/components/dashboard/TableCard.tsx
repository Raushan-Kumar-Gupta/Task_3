
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface Column {
  key: string;
  title: string;
}

interface TableCardProps {
  title: string;
  description?: string;
  columns: Column[];
  data: any[];
  formatters?: {
    [key: string]: (value: any) => React.ReactNode;
  };
  className?: string;
}

export function TableCard({
  title,
  description,
  columns,
  data,
  formatters = {},
  className,
}: TableCardProps) {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              {columns.map((column) => (
                <TableHead key={column.key}>{column.title}</TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((row, i) => (
              <TableRow key={i}>
                {columns.map((column) => (
                  <TableCell key={column.key}>
                    {formatters[column.key]
                      ? formatters[column.key](row[column.key])
                      : row[column.key]}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}

export function StatusBadge({ status }: { status: string }) {
  return (
    <Badge
      variant="outline"
      className={cn(
        "font-medium",
        status === "active" && "border-green-500/50 bg-green-500/10 text-green-700 dark:text-green-500",
        status === "pending" &&
          "border-amber-500/50 bg-amber-500/10 text-amber-700 dark:text-amber-500",
        status === "inactive" && "border-red-500/50 bg-red-500/10 text-red-700 dark:text-red-500"
      )}
    >
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </Badge>
  );
}
