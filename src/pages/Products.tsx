
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ShoppingCart, Package, TrendingUp, DollarSign } from "lucide-react";
import { StatCard } from "@/components/dashboard/StatCard";

const Products = () => {
  const products = [
    { id: 1, name: "Pro Subscription", category: "Software", price: "$199", stock: 'N/A', status: "Active" },
    { id: 2, name: "Smart Watch", category: "Electronics", price: "$199", stock: 89, status: "Low Stock" },
    { id: 3, name: "Wireless Headphones", category: "Electronics", price: "$159", stock: 142, status: "In Stock" },
    { id: 4, name: "Desk Lamp", category: "Home", price: "$49", stock: 0, status: "Out of Stock" },
    { id: 5, name: "Leather Notebook", category: "Office", price: "$25", stock: 231, status: "In Stock" },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Products</h1>
          <p className="text-muted-foreground">
            Manage your product catalog and inventory.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard
            title="Total Products"
            value="1,254"
            icon={Package}
            trend="Up 12%"
            trendValue="vs last month"
          />
          <StatCard
            title="Revenue"
            value="$45,231"
            icon={DollarSign}
            trend="Up 8%"
            trendValue="vs last month"
          />
          <StatCard
            title="Orders"
            value="1,083"
            icon={ShoppingCart}
            trend="Down 5%"
            trendValue="vs last month"
          />
          <StatCard
            title="Conversion Rate"
            value="3.24%"
            icon={TrendingUp}
            trend="Up 1.2%"
            trendValue="vs last month"
          />
        </div>

        {/* Products Table */}
        <Card>
          <CardHeader>
            <CardTitle>Product List</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>Stock</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {products.map((product) => (
                  <TableRow key={product.id}>
                    <TableCell>{product.id}</TableCell>
                    <TableCell>{product.name}</TableCell>
                    <TableCell>{product.category}</TableCell>
                    <TableCell>{product.price}</TableCell>
                    <TableCell>{product.stock}</TableCell>
                    <TableCell>
                      <Badge
                        variant="outline"
                        className={
                          product.status === "In Stock"
                            ? "border-green-500/50 bg-green-500/10 text-green-700"
                            : product.status === "Low Stock"
                            ? "border-amber-500/50 bg-amber-500/10 text-amber-700"
                            : product.status === "Out of Stock"
                            ? "border-red-500/50 bg-red-500/10 text-red-700"
                            : "border-blue-500/50 bg-blue-500/10 text-blue-700"
                        }
                      >
                        {product.status}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Additional Product Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Top Selling Products</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80 flex items-center justify-center">
                <p className="text-muted-foreground text-center">
                  Top selling products visualization will be displayed here
                </p>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Product Categories</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80 flex items-center justify-center">
                <p className="text-muted-foreground text-center">
                  Product categories breakdown will be displayed here
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Products;
