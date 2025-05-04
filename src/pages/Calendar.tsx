
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Calendar = () => {
  const currentMonth = "May 2025";
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  
  // Sample calendar data
  const calendarDays = [
    { day: null, events: [] },
    { day: null, events: [] },
    { day: null, events: [] },
    { day: 1, events: [] },
    { day: 2, events: [] },
    { day: 3, events: [{ title: "Team Meeting", time: "10:00 AM", type: "work" }] },
    { day: 4, events: [] },
    { day: 5, events: [] },
    { day: 6, events: [{ title: "Project Deadline", time: "9:00 AM", type: "important" }] },
    { day: 7, events: [] },
    { day: 8, events: [] },
    { day: 9, events: [] },
    { day: 10, events: [{ title: "Client Call", time: "2:30 PM", type: "work" }] },
    { day: 11, events: [] },
    { day: 12, events: [{ title: "Dentist", time: "11:00 AM", type: "personal" }] },
    { day: 13, events: [] },
    { day: 14, events: [] },
    { day: 15, events: [{ title: "Team Lunch", time: "12:30 PM", type: "social" }] },
    { day: 16, events: [] },
    { day: 17, events: [{ title: "Product Launch", time: "9:00 AM", type: "important" }] },
    { day: 18, events: [] },
    { day: 19, events: [] },
    { day: 20, events: [] },
    { day: 21, events: [{ title: "Review Meeting", time: "3:00 PM", type: "work" }] },
    { day: 22, events: [] },
    { day: 23, events: [] },
    { day: 24, events: [] },
    { day: 25, events: [{ title: "Quarterly Planning", time: "10:00 AM", type: "important" }] },
    { day: 26, events: [] },
    { day: 27, events: [] },
    { day: 28, events: [] },
    { day: 29, events: [] },
    { day: 30, events: [{ title: "Month-End Review", time: "4:00 PM", type: "work" }] },
    { day: 31, events: [] },
  ];

  // Upcoming events
  const upcomingEvents = [
    { 
      id: 1, 
      title: "Team Meeting", 
      date: "May 3, 2025", 
      time: "10:00 AM - 11:00 AM", 
      location: "Conference Room A",
      type: "work" 
    },
    { 
      id: 2, 
      title: "Project Deadline", 
      date: "May 6, 2025", 
      time: "9:00 AM", 
      location: "Office",
      type: "important" 
    },
    { 
      id: 3, 
      title: "Client Call", 
      date: "May 10, 2025", 
      time: "2:30 PM - 3:30 PM", 
      location: "Zoom Meeting",
      type: "work" 
    },
    { 
      id: 4, 
      title: "Dentist", 
      date: "May 12, 2025", 
      time: "11:00 AM - 12:00 PM", 
      location: "Medical Center",
      type: "personal" 
    },
    { 
      id: 5, 
      title: "Team Lunch", 
      date: "May 15, 2025", 
      time: "12:30 PM - 2:00 PM", 
      location: "Cafe Bistro",
      type: "social" 
    },
  ];

  // Get event badge color based on type
  const getEventBadgeClass = (type) => {
    switch(type) {
      case 'work':
        return "bg-blue-500 hover:bg-blue-600";
      case 'important':
        return "bg-red-500 hover:bg-red-600";
      case 'personal':
        return "bg-purple-500 hover:bg-purple-600";
      case 'social':
        return "bg-green-500 hover:bg-green-600";
      default:
        return "bg-gray-500 hover:bg-gray-600";
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Calendar</h1>
          <p className="text-muted-foreground">
            Manage your schedule and upcoming events.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Main Calendar */}
          <Card className="flex-1">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-center">
                <CardTitle>{currentMonth}</CardTitle>
                <div className="flex gap-2">
                  <button className="p-2 rounded hover:bg-muted">
                    &lt; Prev
                  </button>
                  <button className="p-2 rounded hover:bg-muted">
                    Today
                  </button>
                  <button className="p-2 rounded hover:bg-muted">
                    Next &gt;
                  </button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              {/* Calendar Grid */}
              <div className="grid grid-cols-7 gap-1">
                {/* Day Headers */}
                {days.map((day, i) => (
                  <div key={i} className="p-2 text-center font-medium text-sm">
                    {day}
                  </div>
                ))}
                
                {/* Calendar Days */}
                {calendarDays.map((day, i) => (
                  <div 
                    key={i}
                    className={`
                      min-h-[100px] border p-1 rounded-md
                      ${!day.day ? 'bg-muted/30 text-muted-foreground' : ''}
                      ${day.day === 3 ? 'ring-2 ring-primary/20' : ''}
                    `}
                  >
                    {day.day && (
                      <>
                        <p className="text-right text-sm">{day.day}</p>
                        <div className="mt-1 space-y-1">
                          {day.events.map((event, j) => (
                            <div 
                              key={j}
                              className="text-xs p-1 rounded truncate cursor-pointer hover:bg-muted"
                            >
                              <Badge variant="secondary" className={getEventBadgeClass(event.type)}>
                                {event.time}
                              </Badge>
                              <p className="mt-1">{event.title}</p>
                            </div>
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Upcoming Events */}
          <Card className="lg:w-1/3">
            <CardHeader>
              <CardTitle>Upcoming Events</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingEvents.map((event) => (
                  <div 
                    key={event.id}
                    className="p-3 border rounded-lg hover:bg-muted/50 cursor-pointer"
                  >
                    <div className="flex justify-between items-start">
                      <h3 className="font-medium">{event.title}</h3>
                      <Badge className={getEventBadgeClass(event.type)}>
                        {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">{event.date}</p>
                    <p className="text-sm text-muted-foreground">{event.time}</p>
                    <p className="text-sm mt-1">{event.location}</p>
                  </div>
                ))}
              </div>
              
              <button className="w-full mt-4 text-primary hover:underline text-sm">
                + Add New Event
              </button>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Calendar;
