
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  BarChart2, 
  ChevronRight, 
  Shield, 
  Zap, 
  ArrowRight, 
  Layers, 
  LineChart, 
  PieChart,
  Users,
  Settings,
  Calendar,
  MessageSquare
} from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        {/* Navigation */}
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-xl font-bold">Volt Admin</span>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/dashboard" className="hover:text-gray-200 transition-colors">Dashboard</Link>
            <Link to="/analytics" className="hover:text-gray-200 transition-colors">Analytics</Link>
            <Link to="/charts" className="hover:text-gray-200 transition-colors">Charts</Link>
            <Button variant="secondary" className="text-blue-600 bg-white hover:bg-gray-100">
              <Link to="/dashboard">Login</Link>
            </Button>
          </div>
          <div className="md:hidden">
            <Button variant="secondary" className="text-blue-600 bg-white hover:bg-gray-100">
              Menu
            </Button>
          </div>
        </nav>
        
        {/* Hero Content */}
        <div className="container mx-auto px-6 py-16 md:py-24 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Powerful Admin Dashboard for Your Business
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Streamline your operations with our intuitive dashboard and comprehensive analytics tools.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                <Link to="/dashboard" className="flex items-center">
                  Get Started <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white bg-transparent hover:bg-white hover:text-blue-600">
                Learn More
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 md:pl-10">
            <div className="bg-white p-4 rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <img 
                src="https://demo.themesberg.com/volt-pro-react/static/media/mockup-calendar-presentation.a4e9a300.png"
                alt="Dashboard Preview" 
                className="rounded-xl shadow-lg w-full h-auto" 
                onError={(e) => {
                  // Fallback image if the original one fails to load
                  e.currentTarget.src = "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80";
                }}
              />
            </div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Key Features</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Everything you need to monitor, analyze and optimize your business performance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full inline-flex mb-6">
                <BarChart2 className="h-6 w-6 text-blue-600 dark:text-blue-300" />
              </div>
              <h3 className="text-xl font-bold mb-4">Advanced Analytics</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Gain valuable insights with comprehensive analytics tools and customizable reports.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-green-100 dark:bg-green-900 p-3 rounded-full inline-flex mb-6">
                <Shield className="h-6 w-6 text-green-600 dark:text-green-300" />
              </div>
              <h3 className="text-xl font-bold mb-4">Secure Platform</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Industry-leading security features to protect your data and privacy.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-purple-100 dark:bg-purple-900 p-3 rounded-full inline-flex mb-6">
                <Zap className="h-6 w-6 text-purple-600 dark:text-purple-300" />
              </div>
              <h3 className="text-xl font-bold mb-4">Lightning Fast</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Optimized performance ensures your dashboard loads quickly and operates smoothly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Showcase Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Explore Our Modules</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Comprehensive tools designed to help you manage every aspect of your business.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {[
              { title: "Dashboard", icon: BarChart2, path: "/dashboard", color: "bg-blue-500" },
              { title: "Analytics", icon: LineChart, path: "/analytics", color: "bg-indigo-500" },
              { title: "Charts", icon: PieChart, path: "/charts", color: "bg-purple-500" },
              { title: "Customers", icon: Users, path: "/customers", color: "bg-pink-500" },
              { title: "Messages", icon: MessageSquare, path: "/messages", color: "bg-green-500" },
              { title: "Calendar", icon: Calendar, path: "/calendar", color: "bg-yellow-500" },
              { title: "Components", icon: Layers, path: "/components", color: "bg-orange-500" },
              { title: "Settings", icon: Settings, path: "/settings", color: "bg-red-500" }
            ].map((module, index) => (
              <Link 
                to={module.path} 
                key={index}
                className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow flex flex-col items-center text-center"
              >
                <div className={`${module.color} text-white p-4 rounded-full mb-4`}>
                  <module.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">{module.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Explore the {module.title} module
                </p>
                <Button variant="outline" className="mt-auto text-gray-700 dark:text-gray-200 border-gray-300 dark:border-gray-600">
                  View <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-blue-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to get started?</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Join thousands of businesses that are already using Volt Admin to improve their operations.
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
            <Link to="/dashboard">Go to Dashboard</Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-900 text-gray-300">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-8 md:mb-0">
              <h3 className="text-xl font-bold mb-4 text-white">Volt Admin</h3>
              <p className="max-w-xs">
                Powerful admin dashboard template for monitoring and managing your data.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-lg font-bold mb-4 text-white">Pages</h4>
                <ul className="space-y-2">
                  <li><Link to="/dashboard" className="hover:text-white transition-colors">Dashboard</Link></li>
                  <li><Link to="/analytics" className="hover:text-white transition-colors">Analytics</Link></li>
                  <li><Link to="/charts" className="hover:text-white transition-colors">Charts</Link></li>
                  <li><Link to="/components" className="hover:text-white transition-colors">Components</Link></li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-bold mb-4 text-white">Resources</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-bold mb-4 text-white">Company</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p>© 2025 Volt Admin. All rights reserved.</p>
            <div className="mt-4 md:mt-0 flex space-x-4">
              <a href="#" className="hover:text-white transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <span className="sr-only">GitHub</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
