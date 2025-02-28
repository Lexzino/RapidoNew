import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Pen, Trash2 } from 'lucide-react';

const WaitingList = () => {
  // const tabs = ["Waiting List", "Doctors", "Pharmacy's", "Therapist's", "Patient's"];
 const tabs = [
  { name: "Waiting List", path: "/superadmin/waitinglist" },
  { name: "Doctors", path: "/admin/doctorslist" },
  { name: "Pharmacists", path: "/admin/pharmaciest" },
  { name: "Therapists", path: "/admin/therapist" },
  { name: "Patients", path: "/admin/patient" }
];
  const [activeTab, setActiveTab] = useState("Waiting List");

  // Restructured data object with arrays for each tab
  const tabData = {
    "Waiting List": [
      {
        name: "Leslie Alexander",
        email: "leslie.alexander@example.com",
        date: "10/10/2020",
        visitTime: "09:15-09:45am",
        image: "/images/lesile.png",
      },
      {
        name: "Ronald Richards",
        email: "ronald.richards@example.com",
        date: "10/12/2020",
        visitTime: "12:00-12:45pm",
        image: "/images/Ronald.png",
      },
      {
        name: "Jane Cooper",
        email: "jane.cooper@example.com",
        date: "10/13/2020",
        visitTime: "01:15-01:45pm",
        image: "/images/janecooper.png",
      },
      {
        name: "Robert Fox",
        email: "robert.fox@gmail.com",
        date: "10/14/2020",
        visitTime: "02:00-02:45pm",
        image: "/images/Robert.png",
      },
      {
        name: "Jenny Wilson",
        email: "jenny.wilson@example.com",
        date: "10/15/2020",
        visitTime: "12:00-12:45pm",
        image: "/images/Jennywilson.png",
      }
    ],
    "Doctors": [],
    "Pharmacists": [],
    "Therapists": [],
    "Patients": []
  };

  return (
    <div className="w-full">
      {/* Tab Container */}
      <div className="relative flex justify-center -mb-[1px]">
        {tabs.map((tab, index) => (
          <button
            key={tab.name}
            onClick={() => setActiveTab(tab.name)}
            className={`
              relative z-${10 - index} 
              px-8 py-2.5 
              bg-white 
              rounded-t-2xl
              -ml-3 first:ml-0
              text-sm font-medium
              shadow-[0_-1px_2px_rgba(0,0,0,0.05)]
              ${activeTab === tab.name ? 'text-gray-900' : 'text-gray-400'}
            `}
          >
            {tab.name}
          </button>
        ))}
      </div>

      {/* Content Panel */}
      <div className="bg-white w-auto rounded-b-2xl rounded-tr-2xl px-1 shadow-sm overflow-x-scroll">
        <Link to={`/superadmin/${activeTab.toLowerCase().replace(/\s/g, '')}`}>
          <span className='flex items-end justify-end mr-4 py-3 text-sm text-green-800 cursor-pointer hover:underline'>
            View All
          </span>
        </Link>
        <table className="w-full border-spacing-x-4 border-separate">
          <thead>
            <tr>
              <th className="text-left py-4 text-sm font-medium text-gray-600">Name</th>
              <th className="text-left py-4 text-sm font-medium text-gray-600">Email</th>
              <th className="text-left py-4 text-sm font-medium text-gray-600">Date</th>
              <th className="text-left py-4 text-sm font-medium text-gray-600">Visit Time</th>
              <th className="w-20"></th>
            </tr>
          </thead>
          <tbody>
            {tabData[activeTab].map((item, index) => (
              <tr key={index} className="border-t border-gray-50 gap-3">
                <td className="py-4 pl-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gray-100 flex-shrink-0">
                      <img src={item.image} alt="User" className="w-full h-full rounded-full" />
                    </div>
                    <span className="text-sm text-gray-900">{item.name}</span>
                  </div>
                </td>
                <td className="py-4 text-sm text-gray-600">{item.email}</td>
                <td className="py-4 text-sm text-gray-600">{item.date}</td>
                <td className="py-4 text-sm text-gray-600">{item.visitTime}</td>
                <td className="py-4">
                  <div className="flex items-center gap-3">
                    <button>
                      <Pen className="w-4 h-4 text-gray-400" />
                    </button>
                    <button>
                      <Trash2 className="w-4 h-4 text-red-500" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WaitingList;
