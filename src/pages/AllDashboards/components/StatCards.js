import React from 'react';
import { Calendar, Users, Building, Video } from 'lucide-react';

export const StatsCard = ({ icon: Icon, count, label, bgColor, bgBorder }) => (
    <div className={`${bgColor} rounded-xl p-4 text-white`}>
        <div className="flex items-center space-x-4 ">
            <div className={`border outline-none rounded-full text-white p-3 border-bg-${bgBorder}`}>
                <Icon size={24} />
                </div>
            <div>
                <h3 className="text-2xl font-bold">{count}</h3>
                <p className="text-sm">{label}</p>
            </div>
        </div>
    </div>
);

export const StatsRow = () => {
    const stats = [
        { icon: Calendar, count: "50k", label: "Appointments", bgColor: "bg-purple-500", bgBorder:"bg-white/50" },
        { icon: Users, count: "50k", label: "Total Patients", bgColor: "bg-pink-500", bgBorder: "bg-white/50" },
        { icon: Building, count: "50k", label: "Clinic Consulting", bgColor: "bg-orange-500", bgBorder:"bg-white/50" },
        { icon: Video, count: "50k", label: "Video Consulting", bgColor: "bg-blue-500", bgBorder: "bg-white/50"}
    ];

    return (
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
                <StatsCard key={index} {...stat} />
            ))}
        </div>
    );
};