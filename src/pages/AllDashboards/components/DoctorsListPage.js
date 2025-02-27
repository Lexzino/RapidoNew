import React, { useState } from 'react';
import { UserRoundPlus } from 'lucide-react';


const WaitingList = () => {
    const tabs = ["Waiting List", "Doctors", "Pharmacy's", "Therapist's", "Patient's"];
    const [activeTab, setActiveTab] = useState("Waiting List");

    // Restructured data object with arrays for each tab
    const tabData = {
        "Waiting List": [ ],
        "Doctors": [
            {
                name: "Brooklyn Simmons",
                id: "87364523",
                email: "brooklyns@mail.com",
                phonenumber: "(610) 235-6789",
                date: "21/12/2025",
                time: "10:40 PM",
                status: "Approved",
                image: "/images/avatar1.png"
            },
            {
                name: "Brooklyn Simmons",
                id: "87364523",
                email: "brooklyns@mail.com",
                phonenumber: "(610) 235-6789",
                date: "21/12/2025",
                time: "10:40 PM",
                status: "Declined",
                image: "/images/avatar1.png"
            },
            {
                name: "Brooklyn Simmons",
                id: "87364523",
                email: "brooklyns@mail.com",
                phonenumber: "(610) 235-6789",
                date: "21/12/2025",
                time: "10:40 PM",
                status: "Approved",
                image: "/images/avatar1.png"
            },
            {
                name: "Brooklyn Simmons",
                id: "87364523",
                email: "brooklyns@mail.com",
                phonenumber: "(610) 235-6789",
                date: "21/12/2025",
                time: "10:40 PM",
                status: "Declined",
                image: "/images/avatar1.png"
            },
            {
                name: "Brooklyn Simmons",
                id: "87364523",
                email: "brooklyns@mail.com",
                phonenumber: "(610) 235-6789",
                date: "21/12/2025",
                time: "10:40 PM",
                status: "Approved",
                image: "/images/avatar1.png"
            },
            {
                name: "Brooklyn Simmons",
                id: "87364523",
                email: "brooklyns@mail.com",
                phonenumber: "(610) 235-6789",
                date: "21/12/2025",
                time: "10:40 PM",
                status: "Declined",
                image: "/images/avatar1.png"
            },
            {
                name: "Brooklyn Simmons",
                id: "87364523",
                email: "brooklyns@mail.com",
                phonenumber: "(610) 235-6789",
                date: "21/12/2025",
                time: "10:40 PM",
                status: "Approved",
                image: "/images/avatar1.png"
            }
        ],
        "Pharmacy's": [],
        "Therapist's": [],
        "Patient's": []
    };

    return (
        <div className="w-full max-w-full p-6">
            {/* Tab Container */}
            <div className="relative flex justify-start px-6 -mb-[1px]">
                {tabs.map((tab, index) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`
              relative z-${10 - index} 
              px-8 py-2.5 
              bg-white 
              rounded-t-2xl
              -ml-3 first:ml-0
              text-sm font-medium
              shadow-[0_-1px_2px_rgba(0,0,0,0.05)]
              ${activeTab === tab ? 'text-gray-900' : 'text-gray-400'}
            `}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* Content Panel */}
            <div className="bg-white w-auto rounded-lg px-4 shadow-sm overflow-x-scroll">
                  <div className="flex justify-between items-center mb-3 mt-5 w-full">
                        <div className="flex flex-col gap-1 text-gray-600">
                            <span className='whitespace-nowrap text-sm'>List of Doctors</span>
                            <span className='whitespace-nowrap text-xs'>345 available</span>
                        </div>
                        <button className='flex flex-row gap-2 px-3 py-2 rounded-lg text-sm text-white bg-[#506B2C]'>
                            <UserRoundPlus size={16} />
                            <span className='text-xs'>Add New Doctor</span>
                        </button>   
                    </div>
                <table className="w-full min-w-full table-fixed border-spacing-x-4">
                    <thead >
                        <tr className="border rounded-lg bg-gray-100 px-2 py-2 pt-4 text-gray-600 text-sm">
                            <th className="py-4 px-0">Name</th>
                            <th className="py-4 px-0">ID</th>
                            <th className="py-4 px-0">Email</th>
                            <th className="py-4 px-0">Phone number</th>
                            <th className="py-4 px-0">Date/Time</th>
                            <th className="py-4 px-0">Status</th>
                            <th className="py-4 px-0">Actions</th>
                        </tr> 
                    </thead>
                    <tbody>
                        {tabData[activeTab].map((item, index) => (
                            <tr key={index} className="bg-white hover:bg-gray-50">
                                <td className="py-4 px-5 pl-4">
                                    <div className="flex items-center gap-4">
                                        <div className="w-8 h-8 rounded-full bg-gray-100 flex-shrink-0">
                                            <img src={item.image} alt={item.name} className="w-full h-full rounded-full" />
                                        </div>
                                        <span className="text-sm text-gray-900">{item.name}</span>
                                    </div>
                                </td>
                                <td className="py-4 px-5 text-sm text-gray-600">{item.id}</td>
                                <td className="py-4 px-5 text-sm text-gray-600">{item.email}</td>
                                <td className="py-4 px-5 text-sm">
                                    <span className="text-gray-600">
                                        {item.phonenumber}
                                    </span>
                                </td>
                                <td className="py-5 px-3">
                                    <div className="flex flex-col">
                                        <span className="text-sm text-gray-900">{item.date}</span>
                                        <span className="text-xs text-gray-500">{item.time}</span>
                                    </div>
                                </td>
                                <td className="py-5 px-3">
                                    <span className={`px-2 py-2 rounded-lg text-xs ${item.status === "Approved"
                                        ? "bg-green-50 text-green-600"
                                        : "bg-red-50 text-red-600"
                                        }`}>
                                        {item.status}
                                    </span>
                                </td>
                                <td className="py-5 px-3">
                                    <button className="p-2">
                                        <svg className="w-4 h-4 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                            <path d="M9 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
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
