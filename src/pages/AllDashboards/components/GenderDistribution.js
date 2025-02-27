import React from 'react';

export const GenderDistribution = () => {
    const genderData = [
        { label: "Male", percentage: 53, color: "text-green-600" },
        { label: "Female", percentage: 31, color: "text-orange-600" },
        { label: "Child", percentage: 16, color: "text-gray-600" }
    ];

    return (
        <div className="bg-white rounded-xl p-4">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-green-800">Gender</h2>
                <select className="bg-green-100 text-green-800 rounded-lg px-3 py-1 text-sm">
                    <option>2025</option>
                </select>
            </div>
            <div className="relative pt-4">
                <div className="w-32 h-32 mx-auto">
                    <svg viewBox="0 0 36 36" className="w-full h-full">
                        <path
                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                            fill="none"
                            stroke="#4CAF50"
                            strokeWidth="3"
                            strokeDasharray="53, 100"
                        />
                        <path
                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                            fill="none"
                            stroke="#FF9800"
                            strokeWidth="3"
                            strokeDasharray="31, 100"
                            strokeDashoffset="-53"
                        />
                        <path
                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                            fill="none"
                            stroke="#E0E0E0"
                            strokeWidth="3"
                            strokeDasharray="16, 100"
                            strokeDashoffset="-84"
                        />
                    </svg>
                </div>
                <div className="grid grid-cols-3 gap-2 mt-4 text-center">
                    {genderData.map((item, index) => (
                        <div key={index}>
                            <p className="text-sm font-medium">{item.label}</p>
                            <p className={item.color}>{item.percentage}%</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};