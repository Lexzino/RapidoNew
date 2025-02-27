import React from 'react';
import TopBar from "../TopBar";
import Sidebar from "../Sidebar";
import MobileMenuToggle from '../MobileMenuToggle';

const DashboardLayout = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <div className="flex min-h-screen">
      {/* Mobile Menu Toggle (Visible only on mobile) */}
      <div className="md:hidden">
        <MobileMenuToggle
          isOpen={isMobileMenuOpen}
          setIsOpen={setIsMobileMenuOpen}
        />
      </div>

      {/* Sidebar */}
      <aside className={`
        fixed inset-y-0 left-0 w-64 lg:w-72 transform
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
        transition-transform duration-300 ease-in-out
        md:translate-x-0 md:flex-shrink-0
        z-40 md:z-50 h-screen bg-green-900
      `}>
        <Sidebar />
      </aside>

      {/* Overlay for Mobile (when sidebar is open) */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col w-full md:ml-64 lg:ml-72">
        {/* Fixed TopBar */}
        <div className="sticky top-0 z-30 bg-white w-full">
          <TopBar />
        </div>

        {/* Scrollable Content Area */}
        <main className="flex-1 overflow-y-auto bg-[#EBF9D6] w-full">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;