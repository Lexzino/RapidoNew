import React from 'react';
import { Check, X } from "lucide-react";

const AppointmentRequestItem = ({ image, name, details, status }) => {
  const statusStyles = {
    Confirmed: 'bg-green-100 text-green-800',
    Pending: 'bg-yellow-100 text-yellow-800',
    Declined: 'bg-red-100 text-red-800',
    ActionRequired: 'bg-gray-100 text-gray-800' // For Action Required status
  };

  const dotStyles = {
    Confirmed: 'bg-green-800',
    Pending: 'bg-yellow-800',
    Declined: 'bg-red-800'
  };

  return (
    <div className="w-full flex items-center justify-between gap-4 py-3">
      {/* Profile Details */}
      <div className="flex items-center space-x-3">
        <img src={image} alt={name} className="w-8 h-8 rounded-full object-cover" />
        <div>
          <h4 className="font-medium text-sm text-gray-900">{name}</h4>
          <p className="text-xs whitespace-nowrap text-gray-500">{details}</p>
        </div>
      </div>

      {/* Status Section */}
      <div className="flex items-center space-x-4">
        {status !== "ActionRequired" ? (
          <div className={`flex items-center space-x-2 rounded-md px-2 py-1 text-xs ${statusStyles[status]}`}>
            <span className={`w-2 h-2 rounded-full ${dotStyles[status]}`}></span>
            <span>{status}</span>
          </div>
        ) : (
          /* Action Buttons Section */
          <div className={`flex items-center space-x-2 rounded-md px-2 py-1 text-xs ${statusStyles["ActionRequired"]}`}>
            <button className="w-6 h-6 flex items-center justify-center border border-green-500 rounded-md">
              <Check className="w-4 h-4 text-green-500" />
            </button>
            <button className="w-6 h-6 flex items-center justify-center border border-red-500 rounded-md">
              <X className="w-4 h-4 text-red-500" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export const AppointmentRequestList = () => {
  const appointments = [
    {
      image: "/images/Eleanor1.png",
      name: "Eleanor Pena",
      details: "42 Male, 12 January, 9:30 AM",
      status: "Confirmed"
    },
    {
      image: "/images/Eleanor2.png",
      name: "Eleanor Pena",
      details: "25 Female, 18 January, 10:30 AM",
      status: "Pending"
    },
        {
      image: "/images/Eleanor3.png",
      name: "Eleanor Pena",
      details: "25 Female, 18 January, 10:30 AM",
      status: "Declined"
    },
        {
          image: "/images/Eleanor4.png",
      name: "Eleanor Pena",
      details: "25 Female, 18 January, 10:30 AM",
      status: "Pending"
    },
        {
      image: "/images/Eleanor5.png",
      name: "Eleanor Pena",
      details: "25 Female, 18 January, 10:30 AM",
      status: "Confirmed"
    },
    {
      image: "/images/Eleanor6.png",
      name: "Eleanor Pena",
      details: "25 Female, 18 January, 10:30 AM",
      status: "ActionRequired"
    },
    {
      image: "/images/Eleanor6.png",
      name: "Eleanor Pena",
      details: "25 Female, 18 January, 10:30 AM",
      status: "ActionRequired"
    },
  ];

  return (
    <div className="bg-white rounded-xl p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-green-800">Appointments Request</h2>
        <select className="bg-none rounded-lg px-3 py-1 text-green-600 text-xs hover:underline"><option>View All</option></select>
      </div>
      <div className="">
        {appointments.map((apt, index) => (
          <AppointmentRequestItem key={index} {...apt} />
        ))}
      </div>
    </div>
  );
};