
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

const Messages = () => {
  const conversations = [
    { id: 1, name: "Alex Johnson", message: "Hi there! Just checking in about the project.", time: "5m ago", unread: true, avatar: "AJ" },
    { id: 2, name: "Sarah Miller", message: "The report has been finalized and sent to the client.", time: "1h ago", unread: false, avatar: "SM" },
    { id: 3, name: "Robert Davis", message: "When do you think we can schedule a meeting?", time: "3h ago", unread: true, avatar: "RD" },
    { id: 4, name: "Emma Wilson", message: "I've uploaded the design files to the shared drive.", time: "1d ago", unread: false, avatar: "EW" },
    { id: 5, name: "Michael Brown", message: "Thank you for your feedback on the presentation.", time: "2d ago", unread: false, avatar: "MB" },
  ];

  const activeChat = {
    name: "Alex Johnson",
    avatar: "AJ",
    status: "Online",
    messages: [
      { id: 1, text: "Hi there! Just checking in about the project.", sent: false, time: "10:30 AM" },
      { id: 2, text: "Hey Alex! Yes, everything is going according to plan.", sent: true, time: "10:32 AM" },
      { id: 3, text: "That's great to hear. Do we need to adjust the timeline at all?", sent: false, time: "10:33 AM" },
      { id: 4, text: "I don't think so. We're still on track for the delivery next week.", sent: true, time: "10:35 AM" },
      { id: 5, text: "Perfect! Let me know if anything changes or if you need any resources.", sent: false, time: "10:36 AM" },
    ]
  };

  return (
    <DashboardLayout>
      <div className="h-[calc(100vh-4rem)] flex flex-col">
        <div className="mb-4">
          <h1 className="text-3xl font-bold tracking-tight">Messages</h1>
          <p className="text-muted-foreground">
            Manage your conversations and stay in touch with your team.
          </p>
        </div>

        <div className="flex flex-1 gap-4 overflow-hidden">
          {/* Conversations Sidebar */}
          <Card className="w-full lg:w-1/3 flex flex-col">
            <CardHeader>
              <CardTitle className="flex justify-between items-center">
                Conversations
                <Badge className="bg-primary hover:bg-primary/80">{conversations.filter(c => c.unread).length}</Badge>
              </CardTitle>
              <div className="mt-2">
                <Input placeholder="Search conversations..." />
              </div>
            </CardHeader>
            <CardContent className="flex-1 overflow-y-auto pb-0">
              <div className="divide-y">
                {conversations.map((convo) => (
                  <div 
                    key={convo.id}
                    className={`flex items-center gap-3 py-3 px-2 cursor-pointer hover:bg-muted/50 rounded-md ${convo.id === 1 ? 'bg-muted' : ''}`}
                  >
                    <Avatar>
                      <AvatarImage src={`https://ui-avatars.com/api/?name=${convo.name.replace(" ", "+")}&background=random`} />
                      <AvatarFallback>{convo.avatar}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-center">
                        <p className="font-medium truncate">{convo.name}</p>
                        <p className="text-xs text-muted-foreground">{convo.time}</p>
                      </div>
                      <p className="text-sm text-muted-foreground truncate">{convo.message}</p>
                    </div>
                    {convo.unread && (
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Main Chat Area */}
          <Card className="hidden lg:flex flex-col flex-1">
            {/* Chat Header */}
            <CardHeader className="border-b">
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src={`https://ui-avatars.com/api/?name=${activeChat.name.replace(" ", "+")}&background=random`} />
                  <AvatarFallback>{activeChat.avatar}</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle>{activeChat.name}</CardTitle>
                  <p className="text-sm text-green-500">{activeChat.status}</p>
                </div>
              </div>
            </CardHeader>

            {/* Messages */}
            <CardContent className="flex-1 overflow-y-auto py-4">
              <div className="space-y-4">
                {activeChat.messages.map((message) => (
                  <div 
                    key={message.id} 
                    className={`flex ${message.sent ? 'justify-end' : ''}`}
                  >
                    <div 
                      className={`max-w-[80%] px-4 py-2 rounded-lg ${
                        message.sent 
                          ? 'bg-primary text-primary-foreground rounded-tr-none' 
                          : 'bg-muted rounded-tl-none'
                      }`}
                    >
                      <p>{message.text}</p>
                      <p className={`text-xs mt-1 ${message.sent ? 'text-primary-foreground/70' : 'text-muted-foreground'}`}>
                        {message.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>

            {/* Message Input */}
            <div className="p-4 border-t">
              <div className="flex items-center gap-2">
                <Input className="flex-1" placeholder="Type your message..." />
                <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md">
                  Send
                </button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Messages;
