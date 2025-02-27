import React from 'react';
import { Check, X } from 'lucide-react';

const AppointmentRequests = () => {
    const appointments = [
        {
            id: 1,
            name: "Nitin Verma",
            disease: "Child Care",
            date: "01/27",
            image: "/images/Nitinverma.png"
        },
        {
            id: 2,
            name: "Leena Dua",
            disease: "Child Care",
            date: "01/27",
            image: "/images/Leenadua.png"
        },
        {
            id: 3,
            name: "Megan Mac",
            disease: "Child Care",
            date: "01/27",
            image: "/images/Meganmac.png"
        }
    ];

    const handleApprove = (id) => {
        console.log(`Approved appointment ${id}`);
    };

    const handleReject = (id) => {
        console.log(`Rejected appointment ${id}`);
    };

    return (
        <div className="bg-white rounded-lg p-6 shadow-sm w-full">
            <h2 className="text-lg font-semibold text-green-800 mb-4">Appointment Requests</h2>
            <div className="space-y-4 ">
                {appointments.map((appointment) => (
                    <div key={appointment.id} className="flex items-center justify-between py-1 bg-white hover:bg-green-50 rounded-full shadow-md px-2">
                        <div className="flex items-center space-x-3">
                            <img
                                src={appointment.image}
                                alt={appointment.name}
                                className="w-12 h-12 rounded-full"
                            />
                            <div>
                                <h3 className="font-medium text-gray-900 text-base">{appointment.name}</h3>
                            </div>
                        </div>
                        <div className="flex items-center space-x-3">
                            
                        <span className="text-gray-600 text-base">{appointment.disease}</span>
                        </div>
                          <div className="flex items-center space-x-3">
                            
                            <span className="text-gray-600 text-base">{appointment.date}</span>
                        </div>
                        <div className="flex space-x-2">
                            <button
                                onClick={() => handleApprove(appointment.id)}
                                className="p-1.5 bg-green-700 text-white text-base rounded-full hover:bg-green-200"
                            >
                                <Check size={16} />
                            </button>
                            <button
                                onClick={() => handleReject(appointment.id)}
                                className="p-1.5 bg-red-700 text-white text-base rounded-full hover:bg-red-200"
                            >
                                <X size={16} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <button className="mt-4 text-sm text-gray-600 hover:text-gray-900">
                See more
            </button>
        </div>
    );
};

export default AppointmentRequests;