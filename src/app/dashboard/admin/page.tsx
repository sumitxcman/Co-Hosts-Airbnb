"use client";

import { useState } from "react";
import { 
  Users, 
  Home, 
  CreditCard, 
  Settings, 
  LogOut, 
  TrendingUp, 
  ShieldCheck,
  Briefcase,
  AlertCircle
} from "lucide-react";
import ActionModal from "@/components/ui/ActionModal";

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("overview");
  const [modalState, setModalState] = useState({ isOpen: false, title: "", content: "" });

  const openModal = (title: string, content: string) => {
    setModalState({ isOpen: true, title, content });
  };

  return (
    <div className="min-h-screen bg-background flex flex-col md:flex-row">
      {/* Sidebar / Topbar on mobile */}
      <aside className="w-full md:w-64 bg-charcoal text-white flex flex-col md:min-h-screen sticky top-0 z-40">
        <div className="p-4 md:p-6 border-b border-white/10 flex justify-between items-center md:block">
          <div className="flex items-center space-x-2">
            <ShieldCheck className="h-5 w-5 md:h-6 md:w-6 text-gold" />
            <h2 className="font-serif text-xl md:text-2xl font-bold tracking-wider">ADMIN</h2>
          </div>
          <button onClick={() => openModal("Logout", "Are you sure you want to log out from the Admin Dashboard?")} className="md:hidden text-white/50 hover:text-white p-2">
            <LogOut className="w-5 h-5" />
          </button>
        </div>
        
        <nav className="flex md:flex-col overflow-x-auto md:overflow-visible flex-1 p-2 md:p-4 space-x-2 md:space-x-0 md:space-y-1 whitespace-nowrap hide-scrollbar">
          {[
            { id: "overview", name: "Overview", icon: <TrendingUp className="w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-3" /> },
            { id: "users", name: "Users", icon: <Users className="w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-3" /> },
            { id: "staff", name: "Staff", icon: <Briefcase className="w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-3" /> },
            { id: "finance", name: "Finance", icon: <CreditCard className="w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-3" /> },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex-shrink-0 flex items-center px-4 py-2 md:py-3 rounded-lg transition-colors text-sm md:text-base ${
                activeTab === item.id 
                  ? "bg-gold text-charcoal font-semibold" 
                  : "text-white/70 hover:bg-white/10 hover:text-white"
              }`}
            >
              {item.icon}
              {item.name}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 md:p-10">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-sans font-bold text-charcoal">Platform Operations</h1>
          </div>
          <div className="flex space-x-4">
            <span className="flex items-center bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold">
              <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span> System Online
            </span>
          </div>
        </div>

        {/* Global KPIs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {[
            { title: "Total Portfolio Value", val: "₹1.2Cr/mo", sub: "Platform GMV" },
            { title: "Live Guests", val: "128", sub: "Currently checked in" },
            { title: "Pending Payouts", val: "₹4.5L", sub: "Processing today" }
          ].map((kpi, i) => (
            <div key={i} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm border-l-4 border-l-gold">
              <h3 className="text-gray-500 text-sm font-medium mb-2">{kpi.title}</h3>
              <p className="text-3xl font-bold text-charcoal mb-1">{kpi.val}</p>
              <p className="text-xs text-gray-400 font-medium">{kpi.sub}</p>
            </div>
          ))}
        </div>

        {/* Action Center */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Operations Alerts */}
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <div className="bg-red-50 border-b border-red-100 p-4 flex items-center justify-between">
              <div className="flex items-center text-red-800 font-semibold">
                <AlertCircle className="w-5 h-5 mr-2" /> Action Required (Operations)
              </div>
              <span className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full">3</span>
            </div>
            <div className="p-0">
              {[
                { task: "Housekeeping overdue at Villa 04", time: "30 mins ago", type: "Critical" },
                { task: "Guest dispute: Refund requested", time: "2 hours ago", type: "Support" },
                { task: "Plumbing issue unassigned (Tapovan)", time: "4 hours ago", type: "Maintenance" }
              ].map((alert, i) => (
                <div key={i} className="flex justify-between items-center p-4 border-b border-gray-100 last:border-0 hover:bg-gray-50">
                  <div>
                    <p className="font-medium text-charcoal text-sm">{alert.task}</p>
                    <p className="text-xs text-gray-400 mt-1">{alert.time}</p>
                  </div>
                  <button onClick={() => openModal(`Resolve: ${alert.task}`, `Detailed view for ${alert.task}. Please assign a staff member or contact the guest to resolve this ${alert.type.toLowerCase()} issue.`)} className="text-xs font-bold text-forest border border-forest px-3 py-1 rounded hover:bg-forest hover:text-white transition-colors">
                    Resolve
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h3 className="font-bold text-charcoal text-lg mb-6">Quick Tools</h3>
            <div className="grid grid-cols-2 gap-4">
              <button onClick={() => openModal("Onboard Property", "Enter the property details (name, location, owner) to start the onboarding process.")} className="p-4 border border-gray-200 rounded-xl text-left hover:border-gold hover:shadow-md transition-all group">
                <Home className="w-6 h-6 text-forest mb-3 group-hover:text-gold" />
                <p className="font-semibold text-charcoal text-sm">Onboard Property</p>
              </button>
              <button onClick={() => openModal("Add Owner", "Create a new owner profile and send them an invite link to access their dashboard.")} className="p-4 border border-gray-200 rounded-xl text-left hover:border-gold hover:shadow-md transition-all group">
                <Users className="w-6 h-6 text-forest mb-3 group-hover:text-gold" />
                <p className="font-semibold text-charcoal text-sm">Add Owner</p>
              </button>
              <button onClick={() => openModal("Assign Staff Task", "Select a staff member and assign them a new housekeeping or maintenance task.")} className="p-4 border border-gray-200 rounded-xl text-left hover:border-gold hover:shadow-md transition-all group">
                <Briefcase className="w-6 h-6 text-forest mb-3 group-hover:text-gold" />
                <p className="font-semibold text-charcoal text-sm">Assign Staff Task</p>
              </button>
              <button onClick={() => openModal("Approve Payouts", "Review pending payouts for this month and authorize bank transfers.")} className="p-4 border border-gray-200 rounded-xl text-left hover:border-gold hover:shadow-md transition-all group">
                <CreditCard className="w-6 h-6 text-forest mb-3 group-hover:text-gold" />
                <p className="font-semibold text-charcoal text-sm">Approve Payouts</p>
              </button>
            </div>
          </div>
        </div>
      </main>

      <ActionModal 
        isOpen={modalState.isOpen} 
        onClose={() => setModalState({ ...modalState, isOpen: false })} 
        title={modalState.title}
      >
        <div className="text-charcoal/80 text-lg leading-relaxed mb-6">
          {modalState.content}
        </div>
        <div className="flex justify-end gap-3 mt-8">
          <button 
            onClick={() => setModalState({ ...modalState, isOpen: false })}
            className="px-6 py-2 rounded-lg font-medium text-charcoal bg-gray-100 hover:bg-gray-200 transition-colors"
          >
            Cancel
          </button>
          <button 
            onClick={() => setModalState({ ...modalState, isOpen: false })}
            className="px-6 py-2 rounded-lg font-medium text-white bg-forest hover:bg-forest/90 transition-colors shadow-lg"
          >
            Proceed
          </button>
        </div>
      </ActionModal>
    </div>
  );
}
