
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  BarChart2, 
  Calendar, 
  ChevronLeft, 
  ChevronRight, 
  Home, 
  Layers, 
  MessageSquare, 
  PieChart, 
  Settings, 
  ShoppingCart, 
  Users 
} from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarProps {
  className?: string;
}

export function Sidebar({ className }: SidebarProps) {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  const menuItems = [
    { id: "Dashboard", label: "Dashboard", icon: Home, path: "/dashboard" },
    { id: "Analytics", label: "Analytics", icon: BarChart2, path: "/analytics" },
    { id: "Charts", label: "Charts", icon: PieChart, path: "/charts" },
    { id: "Products", label: "Products", icon: ShoppingCart, path: "/products" },
    { id: "Customers", label: "Customers", icon: Users, path: "/customers" },
    { id: "Messages", label: "Messages", icon: MessageSquare, path: "/messages" },
    { id: "Calendar", label: "Calendar", icon: Calendar, path: "/calendar" },
    { id: "Components", label: "Components", icon: Layers, path: "/components" },
    { id: "Settings", label: "Settings", icon: Settings, path: "/settings" },
  ];

  return (
    <aside
      className={cn(
        "bg-gray-800 dark:bg-gray-900 relative h-screen transition-all duration-300 flex flex-col",
        collapsed ? "w-16" : "w-64",
        className
      )}
    >
      <div className="flex items-center justify-between p-4">
        {!collapsed && (
          <Link to="/" className="text-white font-bold text-xl">Volt Admin</Link>
        )}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="rounded-full p-1 hover:bg-gray-700 text-white"
        >
          {collapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
        </button>
      </div>

      <div className="flex-1 overflow-y-auto py-4">
        <nav className="px-2 space-y-2">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.id}
                to={item.path}
                className={cn(
                  "flex items-center gap-3 px-3 py-2 rounded-md transition-colors",
                  isActive 
                    ? "bg-gray-700 text-white" 
                    : "text-gray-300 hover:bg-gray-700 hover:text-white",
                  collapsed && "justify-center"
                )}
              >
                <item.icon size={18} />
                {!collapsed && <span>{item.label}</span>}
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="p-4 border-t border-gray-700">
        <div className="flex items-center gap-3">
          <div className="bg-white h-8 w-8 rounded-full overflow-hidden">
            <img
              src="https://ui-avatars.com/api/?name=John+Doe&background=random"
              alt="User Avatar"
              className="h-full w-full object-cover"
            />
          </div>
          {!collapsed && (
            <div className="text-white">
              <div className="text-sm font-medium">John Doe</div>
              <div className="text-xs opacity-70">Admin</div>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
}
