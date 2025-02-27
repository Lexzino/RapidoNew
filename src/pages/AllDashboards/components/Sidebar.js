import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import {
  Home,
  Users,
  Building2,
  FileText,
  Calendar,
  MessageCircle,
  DollarSign,
  Settings,
  HelpCircle,
  LogOut,
  ChevronRight,
  Layout,
  User,
  Hexagon,
  Ticket,
  Video,
  FolderKanban,
  AlertCircle,
  Database
} from 'lucide-react';

const Sidebar = () => {
  const [expandedMenus, setExpandedMenus] = useState({});
  const navigate = useNavigate();

  const mainMenuItems = [
    {
      icon: Home,
      text: 'Dashboard', hasSubmenu: true,
      submenu: [
        { text: 'Super Admin', icon: User },
        { text: 'Doctors', icon: Users },
        { text: "Pharmacy's", icon: Building2 },
        { text: 'Patients', icon: Users },
        { text: 'Therapists', icon: Users },
        { text: 'Other Staff', icon: Users },
      ]
    },
    { icon: Building2, text: 'Hospitals' },
    { icon: Hexagon, text: 'Deals', hasSubmenu: true },
    { icon: Users, text: 'Contacts' },
    { icon: FileText, text: 'Reports', hasSubmenu: true },
    { icon: Calendar, text: 'Calendar' },
    { icon: MessageCircle, text: 'Message', badge: 8 },
    { icon: FileText, text: 'Documents' },
    { icon: DollarSign, text: 'Payments' },
    { icon: Users, text: 'Organization' },
    { icon: AlertCircle, text: 'Notice' },
    { icon: Ticket, text: 'Ticket' },
    { icon: Video, text: 'Meeting' },
    { icon: FolderKanban, text: 'Project' }
  ];

  const bottomMenuItems = [
    { icon: Layout, text: 'Articles' },
    { icon: User, text: 'Profile' },
    { icon: HelpCircle, text: 'Help & Support' },
    { icon: Settings, text: 'Settings' },
    { icon: Database, text: 'Material Elements', hasSubmenu: true }
  ];

  const integrations = [
    { text: 'Google Drive', icon: '/images/google-drive.png' },
    { text: 'Paypal', icon: '/images/paypal.png' }
  ];

  const toggleSubmenu = (text) => {
    setExpandedMenus(prev => ({
      ...prev,
      [text]: !prev[text]
    }));
  };

  const handleLogout = () => {
    // localStorage.removeItem("user");
    sessionStorage.removeItem("user");
    navigate("/");
  };

  return (
    <aside className="h-screen w-64 lg:w-72 flex-shrink-0 fixed left-0 top-0 bottom-0 bg-green-900 flex flex-col p-4 overflow-hidden shadow-xl">
      {/* Logo */}
      <div className="px-4 py-3 flex items-center space-x-2 bg-#1A4402-800/50 rounded-md border border-white mb-6">
        <img src="/images/logo.svg" alt="Logo" className="w-10 h-8" />
        <span className="text-lg font-medium text-white">RapidoRelief</span>
      </div>

      {/* Main Navigation - Scrollable */}
      <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-green-800 scrollbar-track-transparent ">
        <div className="bg-#1A4402-800/50 rounded-lg p-3 mb-4 border border-white">
          {mainMenuItems.map((item, index) => (
            <div key={index}>
              <button
                onClick={() => item.submenu ? toggleSubmenu(item.text) : null}
                className="w-full flex items-center justify-between p-2 hover:bg-1A4402-800 rounded-md group transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <item.icon size={18} className="text-white" />
                  <span className="text-sm text-white">{item.text}</span>
                </div>
                {item.badge && (
                  <span className="bg-1A4402-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {item.badge}
                  </span>
                )}
                {item.hasSubmenu && <ChevronRight size={16} className="text-white" />}
              </button>
              {item.submenu && expandedMenus[item.text] && (
                <div className="ml-8 space-y-1 mt-1">
                  {item.submenu.map((subItem, subIndex) => (
                    <button
                      key={subIndex}
                      className="w-full flex items-center space-x-3 p-2 hover:bg-1A4402-800 hover:text-white rounded-md transition-colors"
                    >
                      <subItem.icon size={16} className="text-white" />
                      <span className="text-sm text-white">{subItem.text}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* User Satisfaction Card */}
        <div className="bg-white rounded-lg p-4 mb-4 mt-10 text-center">
          <div className="flex justify-center -space-x-2 mb-2">
            <img src="/images/navbar(1).png" alt="User" className="w-8 h-8 rounded-full border-2 border-green-600" />
            <img src="/images/navbar(2).png" alt="User" className="w-8 h-8 rounded-full border-2 border-green-600" />
            <img src="/images/navbar(3).png" alt="User" className="w-8 h-8 rounded-full border-2 border-green-600" />
          </div>
          <div className="text-xl font-bold text-green-800">100K+</div>
          <div className="text-sm text-green-900">SATISFIED USERS</div>
        </div>

        {/* Bottom Menu */}
        <div className="bg-white rounded-lg p-3 space-y-1 mb-4 mt-10">
          {bottomMenuItems.map((item, index) => (
            <button
              key={index}
              className="w-full flex items-center justify-between p-2 hover:bg-green-800 hover:text-white rounded-md transition-colors"
            >
              <div className="flex items-center space-x-3">
                <item.icon size={18} className="text-green-400 hover:text-white " />
                <span className="text-sm text-green-800 hover:text-white">{item.text}</span>
              </div>
              {item.hasSubmenu && <ChevronRight size={16} className="text-white" />}
            </button>
          ))}
          
          {/* Integrations */}
          {integrations.map((item, index) => (
            <button
              key={index}
              className="w-full flex items-center space-x-3 p-2 hover:bg-green-800 hover:text-white rounded-md"
            >
              <img src={item.icon} alt={item.text} className="w-5 h-5" />
              <span className="text-sm text-green-800">{item.text}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Logout Button */}
      <button
        onClick={handleLogout}
        className="flex items-center justify-center space-x-3 p-3 bg-white text-green-800 rounded-lg hover:bg-green-800 hover:text-white mt-4"
      >
        {/* <LogOut size={18} className="text-green-800" /> */}
        <img src="/images/logout.png" alt="Logout" className="w-5 h-5" />
        <span className="text-sm text-green-800 font-medium uppercase hover:text-white">Log out</span>
      </button>
    </aside>
  );
};

export default Sidebar;