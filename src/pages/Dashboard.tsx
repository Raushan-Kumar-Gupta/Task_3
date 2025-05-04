
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { StatCard } from "@/components/dashboard/StatCard";
import { ChartCard } from "@/components/dashboard/ChartCard";
import { ProgressCard } from "@/components/dashboard/ProgressCard";
import { RecentActivityCard } from "@/components/dashboard/RecentActivityCard";
import { StatusBadge, TableCard } from "@/components/dashboard/TableCard";
import { Users, ShoppingCart, DollarSign, TrendingUp } from "lucide-react";

const Dashboard = () => {
  // Sample data for charts
  const salesData = [
    { name: "Jan", value: 1200 },
    { name: "Feb", value: 900 },
    { name: "Mar", value: 1600 },
    { name: "Apr", value: 1800 },
    { name: "May", value: 1400 },
    { name: "Jun", value: 2000 },
    { name: "Jul", value: 1900 },
  ];

  const visitorsData = [
    { name: "Mon", value: 300 },
    { name: "Tue", value: 450 },
    { name: "Wed", value: 500 },
    { name: "Thu", value: 470 },
    { name: "Fri", value: 600 },
    { name: "Sat", value: 400 },
    { name: "Sun", value: 350 },
  ];

  // Sample data for progress card
  const progressItems = [
    { label: "Completed Tasks", value: 75, color: "#3b82f6" },
    { label: "Pending Tasks", value: 50, color: "#f59e0b" },
    { label: "Server Load", value: 30, color: "#10b981" },
    { label: "Disk Usage", value: 60, color: "#ef4444" },
  ];

  // Sample data for activity card
  const activityItems = [
    {
      avatar: { src: "", fallback: "JD" },
      title: "John Doe updated the status of a task",
      description: "Project X task completed",
      timestamp: "2 hours ago",
      type: "success" as const,
    },
    {
      avatar: { src: "", fallback: "AS" },
      title: "Alex Smith created a new project",
      description: "Project Y has been created",
      timestamp: "4 hours ago",
    },
    {
      avatar: { src: "", fallback: "EM" },
      title: "Emily Watson commented on a task",
      description: "Need more details about the requirements",
      timestamp: "1 day ago",
    },
    {
      avatar: { src: "", fallback: "RJ" },
      title: "Robert Johnson cancelled a meeting",
      description: "Weekly standup cancelled",
      timestamp: "2 days ago",
      type: "danger" as const,
    },
  ];

  // Sample data for table
  const tableColumns = [
    { key: "user", title: "User" },
    { key: "email", title: "Email" },
    { key: "role", title: "Role" },
    { key: "status", title: "Status" },
  ];

  const tableData = [
    { user: "John Doe", email: "john@example.com", role: "Admin", status: "active" },
    { user: "Jane Smith", email: "jane@example.com", role: "Editor", status: "active" },
    { user: "Robert Johnson", email: "robert@example.com", role: "Editor", status: "inactive" },
    { user: "Emily Watson", email: "emily@example.com", role: "Viewer", status: "pending" },
    { user: "Michael Brown", email: "michael@example.com", role: "Viewer", status: "active" },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">
            Welcome back! Here's an overview of your application.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard
            title="Total Users"
            value="2,543"
            icon={Users}
            change={{ value: "12%", positive: true }}
          />
          <StatCard
            title="Total Sales"
            value="$45,231"
            icon={DollarSign}
            change={{ value: "8%", positive: true }}
          />
          <StatCard
            title="Orders"
            value="1,083"
            icon={ShoppingCart}
            change={{ value: "5%", positive: false }}
          />
          <StatCard
            title="Conversion Rate"
            value="3.24%"
            icon={TrendingUp}
            change={{ value: "1.2%", positive: true }}
          />
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <ChartCard
            title="Revenue"
            description="Monthly revenue for current year"
            type="line"
            data={salesData}
          />
          <ChartCard
            title="Visitors"
            description="Daily visitors for current week"
            type="bar"
            data={visitorsData}
          />
        </div>

        {/* Table and Progress */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <TableCard
            title="Recent Users"
            description="Latest registered users in the platform"
            columns={tableColumns}
            data={tableData}
            formatters={{
              status: (value) => <StatusBadge status={value} />,
            }}
            className="lg:col-span-2"
          />
          <ProgressCard title="System Status" items={progressItems} />
        </div>

        {/* Activity */}
        <RecentActivityCard title="Recent Activity" activities={activityItems} />
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
