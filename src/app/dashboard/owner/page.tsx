"use client";

import { useState } from "react";
import { 
  BarChart3, 
  CalendarDays, 
  Home, 
  MessageSquare, 
  Settings, 
  LogOut, 
  TrendingUp, 
  Users, 
  Wallet,
  Wrench,
  Star
} from "lucide-react";

export default function OwnerDashboard() {
  const [activeTab, setActiveTab] = useState("overview");

  const STATS = [
    { title: "Total Revenue", value: "₹4,25,000", change: "+12.5%", icon: <Wallet className="text-forest h-6 w-6" /> },
    { title: "Occupancy Rate", value: "78%", change: "+5.2%", icon: <TrendingUp className="text-forest h-6 w-6" /> },
    { title: "Total Bookings", value: "32", change: "This Month", icon: <CalendarDays className="text-forest h-6 w-6" /> },
    { title: "Average Rating", value: "4.8", change: "Based on 45 reviews", icon: <Star className="text-forest h-6 w-6" /> },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col md:flex-row">
      {/* Sidebar / Topbar on mobile */}
      <aside className="w-full md:w-64 bg-forest text-ivory flex flex-col md:min-h-screen sticky top-0 z-40">
        <div className="p-4 md:p-6 border-b border-ivory/10 flex justify-between items-center md:block">
          <div>
            <h2 className="font-serif text-xl md:text-2xl font-bold text-gold">Owner Portal</h2>
            <p className="text-xs text-ivory/60 mt-1">Ganga View Luxury Villa</p>
          </div>
          <button className="md:hidden text-ivory hover:text-gold p-2">
            <Settings className="w-5 h-5" />
          </button>
        </div>
        
        <nav className="flex md:flex-col overflow-x-auto md:overflow-visible flex-1 p-2 md:p-4 space-x-2 md:space-x-0 md:space-y-2 whitespace-nowrap hide-scrollbar">
          {[
            { id: "overview", name: "Overview", icon: <BarChart3 className="w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-3" /> },
            { id: "calendar", name: "Calendar", icon: <CalendarDays className="w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-3" /> },
            { id: "properties", name: "Properties", icon: <Home className="w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-3" /> },
            { id: "maintenance", name: "Maintenance", icon: <Wrench className="w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-3" /> },
            { id: "reviews", name: "Reviews", icon: <MessageSquare className="w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-3" /> },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex-shrink-0 flex items-center px-4 py-2 md:py-3 rounded-xl transition-colors text-sm md:text-base ${
                activeTab === item.id 
                  ? "bg-gold text-forest font-semibold" 
                  : "text-ivory/80 hover:bg-ivory/10 hover:text-white"
              }`}
            >
              {item.icon}
              {item.name}
            </button>
          ))}
        </nav>

        <div className="hidden md:block p-4 border-t border-ivory/10">
          <button className="w-full flex items-center px-4 py-3 text-ivory/80 hover:bg-red-500/20 hover:text-red-400 rounded-xl transition-colors">
            <LogOut className="w-5 h-5 mr-3" />
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 md:p-10">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-serif font-bold text-forest">Welcome back, Ananya!</h1>
            <p className="text-charcoal/60 mt-1">Here is what is happening with your property today.</p>
          </div>
          <button className="bg-forest text-white px-6 py-2 rounded-lg font-medium hover:bg-forest/90 transition-colors">
            Download Report
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {STATS.map((stat, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-forest/5 rounded-lg">
                  {stat.icon}
                </div>
                <span className={`text-xs font-semibold px-2 py-1 rounded-full ${stat.change.includes('+') ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'}`}>
                  {stat.change}
                </span>
              </div>
              <h3 className="text-charcoal/60 text-sm font-medium mb-1">{stat.title}</h3>
              <p className="text-3xl font-serif font-bold text-forest">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Recent Activity & Bookings */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Upcoming Bookings */}
          <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-serif text-xl font-bold text-forest">Upcoming Bookings</h3>
              <button className="text-gold font-medium hover:underline text-sm">View Calendar</button>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="text-charcoal/50 text-sm border-b border-gray-100">
                    <th className="pb-3 font-medium">Guest</th>
                    <th className="pb-3 font-medium">Dates</th>
                    <th className="pb-3 font-medium">Status</th>
                    <th className="pb-3 font-medium">Amount</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    { name: "Rahul Sharma", dates: "12 Oct - 15 Oct", status: "Confirmed", amount: "₹36,000" },
                    { name: "Sarah Jenkins", dates: "18 Oct - 22 Oct", status: "Pending", amount: "₹48,000" },
                    { name: "Vikram Singh", dates: "25 Oct - 28 Oct", status: "Confirmed", amount: "₹36,000" },
                  ].map((booking, i) => (
                    <tr key={i} className="text-sm">
                      <td className="py-4 flex items-center">
                        <div className="w-8 h-8 rounded-full bg-forest/10 text-forest flex items-center justify-center font-bold mr-3">
                          {booking.name.charAt(0)}
                        </div>
                        <span className="font-medium text-forest">{booking.name}</span>
                      </td>
                      <td className="py-4 text-charcoal/70">{booking.dates}</td>
                      <td className="py-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          booking.status === 'Confirmed' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                        }`}>
                          {booking.status}
                        </span>
                      </td>
                      <td className="py-4 font-bold text-forest">{booking.amount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Maintenance & Updates */}
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
            <h3 className="font-serif text-xl font-bold text-forest mb-6">Property Updates</h3>
            <div className="space-y-6">
              <div className="flex">
                <div className="w-2 h-2 mt-2 rounded-full bg-green-500 mr-4 shrink-0"></div>
                <div>
                  <p className="text-sm font-semibold text-forest">Deep Cleaning Completed</p>
                  <p className="text-xs text-charcoal/60 mt-1">Today at 10:30 AM</p>
                </div>
              </div>
              <div className="flex">
                <div className="w-2 h-2 mt-2 rounded-full bg-yellow-500 mr-4 shrink-0"></div>
                <div>
                  <p className="text-sm font-semibold text-forest">AC Servicing Scheduled</p>
                  <p className="text-xs text-charcoal/60 mt-1">Tomorrow at 02:00 PM</p>
                </div>
              </div>
              <div className="flex">
                <div className="w-2 h-2 mt-2 rounded-full bg-gold mr-4 shrink-0"></div>
                <div>
                  <p className="text-sm font-semibold text-forest">New 5-Star Review!</p>
                  <p className="text-xs text-charcoal/60 mt-1">"The best stay in Rishikesh..."</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
