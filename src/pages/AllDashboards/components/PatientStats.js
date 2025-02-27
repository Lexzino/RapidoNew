import React from 'react';
import { Users, TrendingDown, TrendingUp } from 'lucide-react';

export const PatientStats = () => {
    const stats = [
        { label: "New Patient", count: "24.4k", trend: "51%", increasing: true },
        { label: "Old Patient", count: "104.4k", trend: "31%", increasing: false }
    ];

    return (
        <div className="bg-white rounded-xl px-4 py-6">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-green-800">Patients</h2>
                <select className="bg-green-100 text-green-800 rounded-lg px-3 py-1 text-sm">
                    <option>2025</option>
                </select>
            </div>
            <div className="space-y-4">
                {stats.map((stat, index) => (
                    <div key={index} className="flex justify-between items-center">
                        <div className="flex items-center space-x-2">
                            <div className="bg-gray-100 p-2 rounded-full">
                                <Users size={20} className="text-green-600" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-600">{stat.label}</p>
                                <p className="font-semibold">{stat.count}</p>
                            </div>
                        </div>
                        <span className={`px-2 py-1 rounded-lg text-sm ${stat.increasing ? 'bg-[#55F805] text-green-800' : 'bg-red-100 text-red-800'}`}>
                            {stat.trend} {stat.increasing ? <TrendingUp className="w-4 h-4 inline" /> : <TrendingDown className="w-4 h-4 inline" />}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};