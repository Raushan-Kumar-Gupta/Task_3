
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartCard } from "@/components/dashboard/ChartCard";

const Charts = () => {
  // Sample data for charts
  const lineData = [
    { name: "Jan", value: 1200 },
    { name: "Feb", value: 900 },
    { name: "Mar", value: 1600 },
    { name: "Apr", value: 1800 },
    { name: "May", value: 1400 },
    { name: "Jun", value: 2000 },
    { name: "Jul", value: 1900 },
  ];

  const barData = [
    { name: "Mon", value: 300 },
    { name: "Tue", value: 450 },
    { name: "Wed", value: 500 },
    { name: "Thu", value: 470 },
    { name: "Fri", value: 600 },
    { name: "Sat", value: 400 },
    { name: "Sun", value: 350 },
  ];

  const areaData = [
    { name: "Q1", value: 4000 },
    { name: "Q2", value: 3000 },
    { name: "Q3", value: 2000 },
    { name: "Q4", value: 2780 },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Charts</h1>
          <p className="text-muted-foreground">
            Visualization examples and charting options.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ChartCard 
            title="Line Chart Example" 
            description="Monthly revenue trends"
            type="line" 
            data={lineData} 
            height={300}
          />
          
          <ChartCard 
            title="Bar Chart Example" 
            description="Weekly visitor statistics"
            type="bar" 
            data={barData} 
            height={300}
          />
        </div>

        <div className="grid grid-cols-1 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Pie Chart</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80 flex items-center justify-center">
                <p className="text-muted-foreground text-center">
                  Pie chart visualization will be added here
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Area Chart</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80 flex items-center justify-center">
                <p className="text-muted-foreground text-center">
                  Area chart visualization will be added here
                </p>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Scatter Plot</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80 flex items-center justify-center">
                <p className="text-muted-foreground text-center">
                  Scatter plot visualization will be added here
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Charts;
