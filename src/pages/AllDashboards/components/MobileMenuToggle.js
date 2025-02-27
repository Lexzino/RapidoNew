import React from 'react';
import { Menu, X } from 'lucide-react';

function MobileMenuToggle({ isOpen, setIsOpen }) {
  return (
    <button 
      onClick={() => setIsOpen(!isOpen)}
      className="fixed top-4 left-4 z-50 md:hidden bg-green-900 text-white p-2 rounded-lg"
    >
      {isOpen ? (
        <X size={24} />
      ) : (
        <Menu size={24} />
      )}
    </button>
  );
}

export default MobileMenuToggle;