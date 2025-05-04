
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Users, UserPlus, UserCheck, UserMinus } from "lucide-react";
import { StatCard } from "@/components/dashboard/StatCard";

const Customers = () => {
  const customers = [
    { id: 1, name: "Alex Johnson", email: "alex@example.com", location: "New York, USA", status: "active", joined: "Jan 2023", spent: "$1,245" },
    { id: 2, name: "Sarah Miller", email: "sarah@example.com", location: "London, UK", status: "active", joined: "Mar 2023", spent: "$890" },
    { id: 3, name: "Robert Davis", email: "robert@example.com", location: "Toronto, CA", status: "inactive", joined: "Nov 2022", spent: "$2,340" },
    { id: 4, name: "Emma Wilson", email: "emma@example.com", location: "Sydney, AU", status: "pending", joined: "Apr 2023", spent: "$450" },
    { id: 5, name: "Michael Brown", email: "michael@example.com", location: "Berlin, DE", status: "active", joined: "Feb 2023", spent: "$1,120" },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Customers</h1>
          <p className="text-muted-foreground">
            Manage customer accounts and analyze customer data.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard
            title="Total Customers"
            value="2,543"
            icon={Users}
            trend="Up 12%"
            trendValue="vs last month"
          />
          <StatCard
            title="New Customers"
            value="187"
            icon={UserPlus}
            trend="Up 8%"
            trendValue="vs last month"
          />
          <StatCard
            title="Active Customers"
            value="1,835"
            icon={UserCheck}
            trend="Up 3%"
            trendValue="vs last month"
          />
          <StatCard
            title="Churned Customers"
            value="24"
            icon={UserMinus}
            trend="Down 2%"
            trendValue="vs last month"
          />
        </div>

        {/* Customers Table */}
        <Card>
          <CardHeader>
            <CardTitle>Customer List</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Customer</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead>Joined</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Spent</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {customers.map((customer) => (
                  <TableRow key={customer.id}>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarImage src={`https://ui-avatars.com/api/?name=${customer.name.replace(" ", "+")}&background=random`} />
                          <AvatarFallback>{customer.name.split(" ").map(n => n[0]).join("")}</AvatarFallback>
                        </Avatar>
                        <span>{customer.name}</span>
                      </div>
                    </TableCell>
                    <TableCell>{customer.email}</TableCell>
                    <TableCell>{customer.location}</TableCell>
                    <TableCell>{customer.joined}</TableCell>
                    <TableCell>
                      <Badge
                        variant="outline"
                        className={
                          customer.status === "active"
                            ? "border-green-500/50 bg-green-500/10 text-green-700"
                            : customer.status === "inactive"
                            ? "border-red-500/50 bg-red-500/10 text-red-700"
                            : "border-amber-500/50 bg-amber-500/10 text-amber-700"
                        }
                      >
                        {customer.status.charAt(0).toUpperCase() + customer.status.slice(1)}
                      </Badge>
                    </TableCell>
                    <TableCell>{customer.spent}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Additional Customer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Customer Growth</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80 flex items-center justify-center">
                <p className="text-muted-foreground text-center">
                  Customer growth chart will be displayed here
                </p>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Customer Demographics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80 flex items-center justify-center">
                <p className="text-muted-foreground text-center">
                  Customer demographics visualization will be displayed here
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Customers;
