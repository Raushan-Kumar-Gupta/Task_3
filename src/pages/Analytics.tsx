
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart2, TrendingUp, Users, Activity } from "lucide-react";
import { StatCard } from "@/components/dashboard/StatCard";

const Analytics = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Analytics</h1>
          <p className="text-muted-foreground">
            View and analyze your business performance metrics.
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard
            title="Unique Visitors"
            value="14,567"
            icon={Users}
            trend="Up 12.5%"
            trendValue="vs last month"
          />
          <StatCard
            title="Page Views"
            value="34,521"
            icon={Activity}
            trend="Up 18.2%"
            trendValue="vs last month"
          />
          <StatCard
            title="Bounce Rate"
            value="42.3%"
            icon={TrendingUp}
            trend="Down 3.1%"
            trendValue="vs last month"
          />
          <StatCard
            title="Avg. Session"
            value="3m 45s"
            icon={BarChart2}
            trend="Up 0.5%"
            trendValue="vs last month"
          />
        </div>

        {/* Analytics Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Traffic Sources</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80 flex items-center justify-center">
                <p className="text-muted-foreground text-center">
                  Traffic source analytics visualization will be displayed here
                </p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>User Demographics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80 flex items-center justify-center">
                <p className="text-muted-foreground text-center">
                  User demographics data will be displayed here
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Device Usage</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-60 flex items-center justify-center">
                <p className="text-muted-foreground text-center">
                  Device usage statistics will be displayed here
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Analytics;
