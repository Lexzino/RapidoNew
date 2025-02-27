import React from 'react';

const AppointmentItem = ({ initials, name, type, time, status, textColor, bgColor = "bg-gray-100" }) => (
    <div className="flex items-center justify-between py-2">
        <div className="flex items-center space-x-3">
            <div className={`w-7 h-7 rounded-full flex items-center justify-center text-center p-1 ${bgColor}`}>
                <span className="font-medium text-base">{initials}</span>
            </div>
            <div>
                <p className="font-medium text-sm">{name}</p>
                <p className={`text-xs ${textColor}`}>{type}</p>
            </div>
        </div>
        <div className={`text-right rounded-lg p-1 ${bgColor}`}>
            <p className="text-xs font-medium">{time}</p>
            {/* <p className={`text-xs ${status === 'Ongoing' ? 'text-green-600' : ''}`}>{status}</p> */}
        </div>
    </div>
);

export const TodayAppointments = () => {
    const appointments = [
        {
            initials: "RD",
            name: "Riya Doe",
            type: "Clinic Consulting",
            time: "12:00 PM",
            status: "Ongoing",
            bgColor: "bg-green-100",
            textColor: "text-green-200"
        },
        {
            initials: "AD",
            name: "Amy Dunham",
            type: "Video Consulting",
            time: "9:30 AM",
            status: "Scheduled",
            bgColor: "bg-blue-100",
            textColor: "text-blue-200"
        },
        {
            initials: "DJ",
            name: "Demi Joan",
            type: "Audio Call Consulting",
            time: "9:50 AM",
            status: "Scheduled",
            bgColor: "bg-purple-100",
            textColor: "text-purple-200"
        },
        {
            initials: "SM",
            name: "Susan Myers",
            type: "Emergency",
            time: "10:15 AM",
            status: "Scheduled",
            bgColor: "bg-red-100",
            textColor: "text-red-200"
        }
    ];
    const days = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];
    const currentDate = "10, January 2025";

    return (
        <div className="bg-white rounded-xl p-4">
            <div className="flex justify-between items-center mb-3">
                <h2 className="font-semibold text-md">Today Appointments</h2>
                <select className="bg-none text-green-800 rounded-lg px-3 py-1 text-sm">
                    <option>Today</option>
                </select>
            </div>
            <div className="space-y-1">
                {appointments.map((appointment, index) => (
                    <AppointmentItem key={index} {...appointment} />
                ))}
            </div>

            <div className="">
                <div className="text-start mb-4">
                    <h2 className="font-semibold text-sm text-green-800">TODAY IS</h2>
                    <p className="text-md text-green-800  font-bold">{currentDate}</p>
                </div>

                <div className="grid grid-cols-7 gap-1 text-center text-xs mb-2">
                    {days.map(day => (
                        <div key={day}>{day}</div>
                    ))}
                </div>

                <div className="grid grid-cols-7 gap-1 text-center">
                    {[...Array(7)].map((_, index) => (
                        <div
                            key={index}
                            className={`p-2 ${index === 3 ? 'bg-[#40a942] text-white rounded-full  border' : ''}`}
                        >
                            {index + 1}
                        </div>
                    ))}
                </div>

                <div className="mt-4 flex items-center space-x-2 p-3 rounded-md bg-[#63A07E]">
                    <div className="bg-[#40a942] rounded-full p-2">
                        <span className="text-white text-sm p-2">M</span>
                    </div>
                    <div className="flex-1">
                        <p className="text-sm text[#40a942] font-medium">Next Week</p>
                        <p className="text-xs text-white">Upcoming Schedules-2</p>
                    </div>
                    <span className="px-2 py-1 text-xs bg-[#40a942] text-white rounded-lg">Open</span>
                </div>
            </div>
        </div>
    );
};