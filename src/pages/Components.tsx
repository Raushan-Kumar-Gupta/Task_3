
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";

const Components = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Components</h1>
          <p className="text-muted-foreground">
            View and explore available UI components.
          </p>
        </div>

        <Tabs defaultValue="buttons" className="w-full">
          <TabsList className="grid grid-cols-4 lg:grid-cols-7">
            <TabsTrigger value="buttons">Buttons</TabsTrigger>
            <TabsTrigger value="cards">Cards</TabsTrigger>
            <TabsTrigger value="inputs">Inputs</TabsTrigger>
            <TabsTrigger value="avatars">Avatars</TabsTrigger>
            <TabsTrigger value="badges">Badges</TabsTrigger>
            <TabsTrigger value="alerts">Alerts</TabsTrigger>
            <TabsTrigger value="tabs">Tabs</TabsTrigger>
          </TabsList>
          
          {/* Buttons Tab */}
          <TabsContent value="buttons" className="pt-4">
            <Card>
              <CardHeader>
                <CardTitle>Button Components</CardTitle>
                <CardDescription>Various button styles and variations.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-4">Button Variants</h3>
                  <div className="flex flex-wrap gap-4">
                    <Button variant="default">Default</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="destructive">Destructive</Button>
                    <Button variant="outline">Outline</Button>
                    <Button variant="ghost">Ghost</Button>
                    <Button variant="link">Link</Button>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-4">Button Sizes</h3>
                  <div className="flex flex-wrap items-center gap-4">
                    <Button size="sm">Small</Button>
                    <Button size="default">Default</Button>
                    <Button size="lg">Large</Button>
                    <Button size="icon" variant="outline">
                      <AlertCircle className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-4">Button States</h3>
                  <div className="flex flex-wrap gap-4">
                    <Button>Default</Button>
                    <Button disabled>Disabled</Button>
                    <Button variant="outline" className="bg-muted">Active</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* Cards Tab */}
          <TabsContent value="cards" className="pt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Basic Card</CardTitle>
                  <CardDescription>A simple card with a title and description.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>This is the content area of the card where you can place any content.</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Card with Image</CardTitle>
                </CardHeader>
                <div className="px-6">
                  <img 
                    src="https://ui-avatars.com/api/?background=random&name=Card+Image&size=200" 
                    alt="Card Example"
                    className="rounded-md w-full aspect-video object-cover"
                  />
                </div>
                <CardContent className="pt-4">
                  <p>Cards support images and other media content.</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Card with Footer</CardTitle>
                  <CardDescription>This card includes a footer area.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>The footer can contain actions like buttons.</p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">Cancel</Button>
                  <Button>Save</Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>
          
          {/* Inputs Tab */}
          <TabsContent value="inputs" className="pt-4">
            <Card>
              <CardHeader>
                <CardTitle>Input Components</CardTitle>
                <CardDescription>Form input elements and variants.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-4">Text Inputs</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="default" className="text-sm font-medium">Default</label>
                      <Input id="default" placeholder="Enter your name" />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="disabled" className="text-sm font-medium">Disabled</label>
                      <Input id="disabled" placeholder="Disabled input" disabled />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="withIcon" className="text-sm font-medium">With Icon</label>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 transform -translate-y-1/2">
                          <AlertCircle className="h-4 w-4 text-muted-foreground" />
                        </span>
                        <Input id="withIcon" placeholder="Search..." className="pl-10" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="error" className="text-sm font-medium text-red-500">Error</label>
                      <Input id="error" placeholder="Invalid input" className="border-red-500" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* Avatars Tab */}
          <TabsContent value="avatars" className="pt-4">
            <Card>
              <CardHeader>
                <CardTitle>Avatar Components</CardTitle>
                <CardDescription>User avatars and profile images.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-4">Avatar Sizes</h3>
                  <div className="flex flex-wrap items-end gap-4">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="https://ui-avatars.com/api/?background=random&name=S" />
                      <AvatarFallback>S</AvatarFallback>
                    </Avatar>
                    
                    <Avatar className="h-12 w-12">
                      <AvatarImage src="https://ui-avatars.com/api/?background=random&name=M" />
                      <AvatarFallback>M</AvatarFallback>
                    </Avatar>
                    
                    <Avatar className="h-16 w-16">
                      <AvatarImage src="https://ui-avatars.com/api/?background=random&name=L" />
                      <AvatarFallback>L</AvatarFallback>
                    </Avatar>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-4">Avatar with Fallback</h3>
                  <div className="flex flex-wrap gap-4">
                    <Avatar>
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    
                    <Avatar>
                      <AvatarFallback>AB</AvatarFallback>
                    </Avatar>
                    
                    <Avatar>
                      <AvatarFallback>CL</AvatarFallback>
                    </Avatar>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* Badges Tab */}
          <TabsContent value="badges" className="pt-4">
            <Card>
              <CardHeader>
                <CardTitle>Badge Components</CardTitle>
                <CardDescription>Labels and status indicators.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-4">Badge Variants</h3>
                  <div className="flex flex-wrap gap-4">
                    <Badge variant="default">Default</Badge>
                    <Badge variant="secondary">Secondary</Badge>
                    <Badge variant="destructive">Destructive</Badge>
                    <Badge variant="outline">Outline</Badge>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-4">Status Badges</h3>
                  <div className="flex flex-wrap gap-4">
                    <Badge className="bg-green-500 hover:bg-green-600">Active</Badge>
                    <Badge className="bg-yellow-500 hover:bg-yellow-600">Pending</Badge>
                    <Badge className="bg-red-500 hover:bg-red-600">Inactive</Badge>
                    <Badge className="bg-blue-500 hover:bg-blue-600">Processing</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* Alerts Tab */}
          <TabsContent value="alerts" className="pt-4">
            <Card>
              <CardHeader>
                <CardTitle>Alert Components</CardTitle>
                <CardDescription>Notification and alert messages.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Alert variant="default">
                  <AlertCircle className="h-4 w-4" />
                  <AlertTitle>Information</AlertTitle>
                  <AlertDescription>
                    This is an informational alert to notify you about something.
                  </AlertDescription>
                </Alert>
                
                <Alert variant="destructive">
                  <AlertCircle className="h-4 w-4" />
                  <AlertTitle>Error</AlertTitle>
                  <AlertDescription>
                    There was a problem with your request.
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* Tabs Tab */}
          <TabsContent value="tabs" className="pt-4">
            <Card>
              <CardHeader>
                <CardTitle>Tab Components</CardTitle>
                <CardDescription>Tabbed interfaces for organizing content.</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="tab1" className="w-full">
                  <TabsList>
                    <TabsTrigger value="tab1">Tab 1</TabsTrigger>
                    <TabsTrigger value="tab2">Tab 2</TabsTrigger>
                    <TabsTrigger value="tab3">Tab 3</TabsTrigger>
                  </TabsList>
                  <TabsContent value="tab1" className="pt-4">
                    <p>This is the content for Tab 1.</p>
                  </TabsContent>
                  <TabsContent value="tab2" className="pt-4">
                    <p>This is the content for Tab 2.</p>
                  </TabsContent>
                  <TabsContent value="tab3" className="pt-4">
                    <p>This is the content for Tab 3.</p>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default Components;
