
import React from 'react';
import { User, FileText, ArrowUpRight } from 'lucide-react';

export const ConsultationBox = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm px-3 py-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="p-3 bg-gray-100 rounded-lg">
            <User className="w-19 h-10 text-gray-600" />
          </div>
          <div className='w-full'>
            <h3 className="font-semibold text-gray-800 text-sm whitespace-nowrap">Consultation</h3>
            <p className="text-sm text-gray-500 whitespace-nowrap">General</p>
          </div>
          <div>
            <ArrowUpRight className="w-8 h-8 text-gray-400" />
          </div>
        </div>
      </div>
    </div>
  );
};

export const ProfileBox = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm px-3 py-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-gray-100 rounded-lg">
            <FileText className="w-10 h-10 text-gray-600" />
          </div>
          <div className='w-full'>
            <h3 className="font-semibold text-gray-800 text-sm whitespace-nowrap">Profile complete</h3>
            <p className="text-sm text-gray-500 whitespace-nowrap">50% completed</p>
          </div>
          <div>
            <ArrowUpRight className="w-8 h-8 text-gray-400" />
          </div>
        </div>
        
      </div>
    </div>
  );
};